import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentLocation: "",
  weatherData: {},
  currentDate: {},
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
  },
});

export const { get_current_location, get_weather, get_current_date } =
  weatherSlice.actions;

export default weatherSlice.reducer;
