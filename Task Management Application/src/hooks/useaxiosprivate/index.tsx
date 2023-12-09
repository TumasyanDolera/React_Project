import { axiosPrivate } from "../../redux_toolkit/refresh";
import { useEffect } from "react";
import UseRefreshToken from "../userefresh"
import { getToken } from "../../helpers";


const useAxiosPrivate = () => {
    const refresh = UseRefreshToken()
    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if(!config.headers['Authorization']){
                    config.headers['Authorization'] = `Bearer ${getToken}`;

                }
                return config
            },(err) => Promise.reject(err)
        )
        const responceIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async(err) => {
                const prevRequest = err?.config;
                if(err?.response?.status === 403 && ! prevRequest?.sent){
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest)
                }
                return Promise.reject(err)
            }
        );
        return () => {axiosPrivate.interceptors.response.eject(responceIntercept);
                   axiosPrivate.interceptors.request.eject(requestIntercept)
}
},[refresh])
    return axiosPrivate
}

export default useAxiosPrivate