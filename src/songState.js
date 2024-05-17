import { createSlice } from "@reduxjs/toolkit";
export const songSlice = createSlice({
    name:'songs',
    initialState:{
        songs:[],
        isLoading:false
    },
    reducers:{
        getSongsFetch: (state)=>{
            state.isLoading = true;
        },
        getSongsSuccess: (state,action)=>{
            state.songs = action.payload;
            state.isLoading = false;
        },
        getSongsFailure:(state)=>{
            state.isLoading = false
        },
        updateSongRequest: (state) => {
            state.isLoading = true;
            state.error = null;
          },
          updateSongSuccess: (state, action) => {
            const updatedSong = action.payload;
            state.songs = state.songs.map(song =>
              song.id === updatedSong.id ? updatedSong : song
            );
            state.isLoading = false;
          },
          updateSongFailure: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
          },
          deleteSongRequest: (state) => {
            state.isLoading = true;
            state.error = null;
          },
          deleteSongSuccess: (state, action) => {
            const deletedSongId = action.payload;
            state.songs = state.songs.filter(song => song.id !== deletedSongId);
            state.isLoading = false;
          },
          deleteSongFailure: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
          },
          createSongRequest: (state) => {
            state.isLoading = true;
            state.error = null;
          },
          createSongSuccess: (state, action) => {
            const newSong = action.payload;
            state.songs.push(newSong);
            state.isLoading = false;
          },
          createSongFailure: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
          }
    }
});
export const{ getSongsFailure,getSongsFetch,getSongsSuccess,updateSongFailure,updateSongSuccess,updateSongRequest,deleteSongRequest,deleteSongSuccess,deleteSongFailure,createSongRequest,createSongSuccess,createSongFailure} = songSlice.actions;

export default songSlice.reducer;