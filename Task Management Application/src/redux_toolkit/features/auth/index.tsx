import { createSlice } from "@reduxjs/toolkit";

export interface IAuthState{
    successAuthorization?: string | null | boolean
 }
const initialState: IAuthState = {
    successAuthorization:  ''
}

const userSlice = createSlice({
    name: 'userToken',
    initialState,
    reducers: {
        setAutorization(state, payload:any) {
            state.successAuthorization = payload;
        }
    }
})
export const {setAutorization} = userSlice.actions;
export const setUserToken = userSlice.reducer;