import axios from "axios";
import ApiAxios from "../../axios";
import { ISignInForm } from "../../../models";
import { IForm } from "../../../models";

//  const PostUserLogIN= async ({email, password}: any) => {
//     const res = await fetch('http://116.203.128.127:5680/api/v1/auth/login',{
//         method: 'post',
//         headers:{
//             'Content-Type': 'application/json',      
//             'accept': 'application/json'
//           },
//         body: JSON.stringify({
//             email: email,
//             password: password
//         })
//     })
//     return res.json()
//  }

const PostUserLogIN = async ({ email, password }: ISignInForm ) => {
    const res = await ApiAxios.post(
        `/auth/login`,
        JSON.stringify({
     email,
     password,
        }),
    )
      console.log(JSON.stringify(res?.data));
      const accessToken = res?.data?.accessToken;
      const roles = res?.data?.roles;
      ({ roles, accessToken })
    return res.data;
};


const PostUserReg = async ({ firstName, lastName, password, email }: IForm) => {
        const response = await ApiAxios.post(
            `/auth/register`,
            
            JSON.stringify(
                { firstName, lastName, password, email }),
        );
        console.log(JSON.stringify(response?.data));
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        ({ roles, accessToken })
        return response;
    } 

const UpdatePassword = async ({ password}:ISignInForm) => {
          const response = await axios.patch(
            `/auth/password`,
            {
                newPassword: password,
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
      
          console.log('Password updated successfully:', response.data);
          return response.data; 
        }

export { PostUserLogIN, PostUserReg, UpdatePassword}