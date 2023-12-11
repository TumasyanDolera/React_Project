import axios from "axios"
import { getAccessToken } from "../../helpers";

const BASE_API_URL = import.meta.env.VITE_REACT_API_URL

const ApiAxios = axios.create({
  baseURL: BASE_API_URL,
  headers: { 
      "Content-Type": " application/json",
      'Accept': 'application/json',
     },
   }
)

ApiAxios.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${getAccessToken()}`;
  return config;
});

ApiAxios.interceptors.response.use(resp => resp, async err => {
  if (err.response.status === 401) {
    const response = await ApiAxios.post('/auth/refresh-token')
        return response;

}})

  

export default ApiAxios;




