import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'd6487c851d4294ca86263fcb2861f71f';
const URL = 'https://api.openweathermap.org/data/2.5/weather';

//action
export const fetchWeatherAction = createAsyncThunk(
  'weather/fetch',
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(URL, {
        params: {
          q: payload,
          units: 'metric',
          APPID: API_KEY,
        },
      });
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//slice
const weatherSlice = createSlice({
  name: 'weather',
  initialState: {},
  extraReducers: (builder) => {
    //pending
    builder.addCase(fetchWeatherAction.pending, (state) => {
      state.isLoading = true;
    });
    //fulfilled
    builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
      state.weather = action?.payload;
      state.isLoading = false;
      state.error = undefined;
    });
    //rejected
    builder.addCase(fetchWeatherAction.rejected, (state, action) => {
      state.isLoading = false;
      state.weather = undefined;
      state.error = action?.payload;
    });
  },
});

export default weatherSlice.reducer;
