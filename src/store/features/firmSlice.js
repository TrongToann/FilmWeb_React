import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import request from '../../utils/request';

export const getFilm = createAsyncThunk('film/fetchUsers', async (page) => {
  const res = await request('filmList','GET', null)
  return res.data ; 
})
export const addFilmData = createAsyncThunk('film/addFilm', async(data) => {
  const res = await request('filmList','POST',data).then(res => console.log(res.data)) 
  return data ; 
})
export const deleteFilmData = createAsyncThunk('film/deleteFilm', async(id) => { 
  const res = await request(`filmList/${id.id}`, 'DELETE', null).then(res => console.log(res)) 
  console.log(id) ; 
  return id ; 
  
})
export const updateFilmData = createAsyncThunk('film/updateFilm', async(data) => {
  console.log(data)
  const res = await request(`filmList/${data.id}`, 'PUT' , {
      img : data.img , 
      trailer : data.trailer 
  }).then (res => console.log(res)) 
  return data ; 
})

const filmSlice = createSlice({
  name: "film",
  initialState: {
    data: [],
    loading: false,
    error: '' ,
  
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFilm.pending, (state) => {
      state.loading = true 
    }) 
    builder.addCase(getFilm.fulfilled, (state, action) => {
      state.loading = false 
      state.data = action.payload 
      state.error = '' 
    })
    builder.addCase(getFilm.rejected, (state, action) => {
      state.loading = false 
      state.data = []
      state.error = '' 
    })
    builder.addCase((addFilmData.fulfilled), (state, action) => {
      state.data.push(action.payload) 
    })
    builder.addCase((deleteFilmData.fulfilled), (state, action) => {
      state.data = state.data.filter((film)=> film.id != action.payload.id); 
      
    })
    builder.addCase((updateFilmData.fulfilled), (state, action) => {
      state.data.map(film => {
        if(film.id == action.payload.id) {
          film.img = action.payload.img ; 
          film.trailer = action.payload.trailer ;  
        }
      })
      
    })
  },
});

export default filmSlice;