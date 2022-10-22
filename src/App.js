import { ThemeProvider } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import Loading from "./components/Loading";
import { getWeatherApi } from "./constants/api";
import HomePage from "./pages/HomePage";
import {
  get_current_date,
  get_current_location,
  get_weather,
  set_error,
} from "./redux/reducers/weatherReducer";
import { theme } from "./theme";


function App() {
  const { currentLocation, weatherData, error } = useSelector((state) => {
    return state.weather;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      let lat = pos.coords.latitude;
      let lon = pos.coords.longitude;
      const str = `${lat},${lon}`;
      dispatch(get_current_location(str));
    });
  }, []);

  useEffect(() => {
    console.log(currentLocation);
    if(currentLocation !== ""){
      axios.get(
        getWeatherApi(currentLocation)
      )
      .then((res) => {
            if(res.data.success !== undefined && res.data.success === false){
              dispatch(set_error(true));
              return;
            }
        console.log(res.data);
        dispatch(get_weather(res.data));
           dispatch(set_error(false));
        getTimeAndDate(res.data.location.localtime);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [currentLocation]);

  const getTimeAndDate = (dateStr) => {
    let index = dateStr.indexOf(" ");
    let date = dateStr.slice(0, index + 1);
    let time = dateStr.slice(index);
    dispatch(get_current_date({ time: time.trim(), date: date.trim() }));
  };

  console.log(currentLocation);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {Object.keys(weatherData).length !== 0 ? <HomePage /> : <Loading /> }
        {error && <ErrorMessage /> }
      </div>
    </ThemeProvider>
  );
}

export default App;
