import axios from "axios"
const BASE_API_URL = import.meta.env.VITE_REACT_API_URL

export const axiosPrivate = axios.create({
    baseURL: BASE_API_URL,
    headers: { 
        "Content-Type": " application/json",
        'Accept': 'application/json',
       },
       withCredentials:true
  })