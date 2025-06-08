import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmFkMjI0N2FmZDJmNjI2ZTE4MjVkYjcxMzhhZjg0NSIsIm5iZiI6MTc0Nzc2MjIzNi40NDEsInN1YiI6IjY4MmNiYzNjZGU5YzY4ZWRhYzhjMGRmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JPzU9A9WpP2W_zmk4qiS0lEuDnDNnYATH6BGxpKnb8o";
const API_KEYSHORT = "cfad2247afd2f626e1825db7138af845";
const BASE_URL = "https://api.themoviedb.org/3";

const initialState = {
  items: [],
  status: "",
  error: null,
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (page = 1) => {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_kye: API_KEYSHORT,
        page,
        language: "ru-Ru",
      },
    });
    return response.data.results;
  }
);

export const authorisation = createAsyncThunk(
  "movies/authorisation",
  async () => {
    const response = await axios.get("https://api.themoviedb.org/3/movie/11", {
      params: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data

  }
);


const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    a: (state, action) => {
        state.items = action.payload
    },
    b: () => {
       console.log('Я функция B')
    }
  },
  extraReducers: (builder) => {
    builder

    .addCase(fetchMovies.fulfilled, (state, action) => {
        (state.status = "Успешно"), (state.items = action.payload);
      })
   
    .addCase(authorisation.fulfilled, (state, action) => {
        (state.status = "Успешно 2"), (state.items = action.payload);
      })


    .addMatcher(
        (action)=> {action.type.endsWith('/pending')}, 
        (state)=>  {(state.status = "Загрузка"), (state.error = null)}
    )
    .addMatcher(
        (action)=> {action.type.endsWith('/rejected')},
        (state)=> {(state.status = "Ошибка")}
    )


    
      
  },
});

export const {a, b} = moviesSlice.actions

export default moviesSlice.reducer;
