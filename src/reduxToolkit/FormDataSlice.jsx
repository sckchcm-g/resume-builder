import { createSlice } from '@reduxjs/toolkit'

const FormDataSlice = createSlice({
    name : "user",
    initialState:{
        userData : null
    },
    reducers:{
        setUserData : (state,action)=>{
            state.userData = action.payload
        }
    }
})

export const selectUserData = (state) => state.user.userData;
export const {setUserData} = FormDataSlice.actions;
export default FormDataSlice.reducer;