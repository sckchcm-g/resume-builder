import { configureStore } from '@reduxjs/toolkit'
import FormDataReducer from './FormDataSlice.jsx'
const store = configureStore({
    reducer:{
        user:FormDataReducer
    }
})
export default store