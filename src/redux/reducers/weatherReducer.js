import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentLocation: "",
  weatherData: {},
  currentDate: {},
  error: false
};

export const weatherSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    get_current_location: (state, action) => {
      state.currentLocation = action.payload;
    },
    get_weather: (state, action) => {
      state.weatherData = action.payload;
    },
    get_current_date: (state, action) => {
      state.currentDate = action.payload;
    },
    set_error: (state, action) => {
      state.error = action.payload;
    }
  },
});

export const { get_current_location, get_weather, get_current_date, set_error } =
  weatherSlice.actions;

export default weatherSlice.reducer;
