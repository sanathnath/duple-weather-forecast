import { ThemeProvider } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import HomePage from "./pages/HomePage";
import {
  get_current_location,
  get_weather,
} from "./redux/reducers/weatherReducer";
import { theme } from "./theme";

function App() {
  const [loc, setLoc] = useState("");
  const { currentLocation, weatherData } = useSelector((state) => {
    return state.weather;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      let lat = pos.coords.latitude;
      let lon = pos.coords.longitude;
      const str = `${lat},${lon}`;
      // dispatch(get_current_location(str));
      // setLoc(str);
      // console.log(currentLocation);
      axios
        .get(
          "//api.weatherstack.com/forecast?access_key=9b9d020fda6189eb11a1c3b54f276778&query=" +
            str
        )
        .then((res) => {
          dispatch(get_weather(res.data));
          console.log(res.data);
        });
    });
  }, []);
  console.log(currentLocation);
  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {Object.keys(weatherData).length != 0 ? <HomePage /> : "loading"}
      </div>
    </ThemeProvider>
  );
}

export default App;
