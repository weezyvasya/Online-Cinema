import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from '../store/slice/moviesSlice'

export const store = configureStore({
    reducer: {
        movies: moviesSlice, 
    }
})