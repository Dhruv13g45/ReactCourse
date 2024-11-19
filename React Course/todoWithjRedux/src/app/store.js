import { configureStore } from "@reduxjs/toolkit"
import TodoReducer from "../features/Todo/todoSlice"


export const store = configureStore({
    reducer: TodoReducer
})