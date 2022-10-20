import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import weatherReducer from "./reducers/weatherReducer";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    middleware: getDefaultMiddleware(),
    // do not forget this
    devTools: process.env.NODE_ENV !== "production",
  },
});
