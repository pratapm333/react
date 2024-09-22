import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addtrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.nowPopularMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.nowUpcomingMovies = action.payload;
        },
        addHorrorMovies: (state, action) => {
            state.nowHorrorMovies = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.nowTrendingMovies = action.payload;
        },
        
    }
})

export const {addNowPlayingMovies, addtrailerVideo, addPopularMovies, addUpcomingMovies, addHorrorMovies, addTrendingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;
