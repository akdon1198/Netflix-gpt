import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movie",
    initialState : {
        nowplayingmovies : null,
        videotrailer : null
    },
    reducers : {
        addmovies : (state, action) =>{
            state.nowplayingmovies = action.payload
        },
        addvideotrailer : (state, action) =>{
            state.videotrailer = action.payload
        }
    }
})

export const {addmovies, addvideotrailer} = movieSlice.actions
export default movieSlice.reducer