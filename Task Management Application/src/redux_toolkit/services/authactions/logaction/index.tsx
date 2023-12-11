import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiAxios from "../../../axios";
import { ISignInForm } from "../../../../models";
import { saveAccessToken } from "../../../../helpers";

export const UserLogin = createAsyncThunk("userAuth/PostLog", async ({ email, password }: ISignInForm,
    { rejectWithValue }) => {
    try {
        const { data } = await ApiAxios.post('/auth/login',
            JSON.stringify({ email, password }))
        console.log(JSON.stringify(data?.data))
            const accessToken = data.data.accessToken;
            saveAccessToken(accessToken);
        return data.accessToken
    } catch (error:any) {
        if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message)
        } else {
            return rejectWithValue(error.message)
        }
    }
})