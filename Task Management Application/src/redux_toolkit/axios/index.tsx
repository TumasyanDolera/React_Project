import axios from "axios"
import { AxiosError } from "axios";
import { getToken } from "../../helpers";

const BASE_API_URL = import.meta.env.VITE_REACT_API_URL

const ApiAxios = axios.create({
  baseURL: BASE_API_URL,
  headers: { 
      "Content-Type": " application/json",
      'Accept': 'application/json',
     },
   }
)

ApiAxios.interceptors.request.use(
  
  (config) => { const token = getToken();
     if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
      return config;
  },
  (error: AxiosError) => {
              return Promise.reject(error);
  }
);

ApiAxios.interceptors.response.use(
    (res) => {
        console.log(res, 'int res'); return res
    },
    (err) => {
        if (axios.isAxiosError(err)) {
            console.log(err);
        }
    }
)

export default ApiAxios;




