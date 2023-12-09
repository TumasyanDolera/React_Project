
import ApiAxios from "../../redux_toolkit/axios"

const UseRefreshToken = () => {
    const refresh = async () => {
        const response = await ApiAxios.get('/refresh-token',{
            withCredentials: true
        })
        console.log(response.data.accessToken);
        
        return response.data.accessToken
    }
    return refresh
}
export default UseRefreshToken