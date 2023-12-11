import { createSlice } from "@reduxjs/toolkit";
import { UserLogin, UserRegister } from "../../services";
import { IAuthState } from "../../../models";

const initialState: IAuthState = {
    loading: false,
    userInfo: null,
    accessToken: '',
    error: null,
    success: false,
}

const userSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
          .addCase(UserLogin.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(UserLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.userInfo = action.payload;
            state.accessToken = action.payload;
          })
          .addCase(UserLogin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string | null;
          })
          .addCase(UserRegister.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(UserRegister.fulfilled, (state) => {
            state.loading = false;
            state.success = true;
          })
          .addCase(UserRegister.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
          })
    }});


    export const userAuth = userSlice.reducer;
    export const selectAccessToken = (state: { userAuth: IAuthState }) => state.userAuth.accessToken;