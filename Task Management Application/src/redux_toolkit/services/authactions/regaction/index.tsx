import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiAxios from "../../../axios";
import { IForm } from "../../../../models";

export const UserRegister = createAsyncThunk('userAuth/UserRegister',
 async ({firstName, lastName, password, email }: IForm, { rejectWithValue }) => {
        try {
            const { data } = await ApiAxios.post('/auth/register',
                JSON.stringify({ firstName, lastName, email, password }))
                console.log(JSON.stringify(data?.data));
            return data
      } catch (error:any) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )

 