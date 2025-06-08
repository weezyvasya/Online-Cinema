import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from '../store/slice/moviesSlice'
import uiReducer from '../store/slice/uiSlice'

export const store = configureStore({
    reducer: {
        movies: moviesSlice, 
        ui: uiReducer,
    }
})