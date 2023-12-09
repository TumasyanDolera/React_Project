import {configureStore} from "@reduxjs/toolkit"
import { setUserToken } from "../../features/auth"
import { setUserTask } from "../../features/user"

export const Store = configureStore({
    reducer:{
        userToken: setUserToken,
        userTask: setUserTask
    }
})


export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch