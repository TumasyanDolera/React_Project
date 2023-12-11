import {configureStore} from "@reduxjs/toolkit"
import { userAuth } from "../../features/auth"
import { setUserTask } from "../../features/user"

export const Store = configureStore({
    reducer:{
        userAuth: userAuth,
        userTask: setUserTask
    }
})


export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch