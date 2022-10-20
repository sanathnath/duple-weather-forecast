import { Box, TextField, Typography } from "@material-ui/core";
import { LocationOnOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  get_current_date,
  get_current_location,
} from "../redux/reducers/weatherReducer";

function Header() {
  const [time, setTime] = useState({ time: "", date: "" });

  const dispatch = useDispatch();

  const { weatherData } = useSelector((state) => {
    console.log(state.weather);
    return state.weather;
  });

  const getTimeAndDate = (dateStr) => {
    let index = dateStr.indexOf(" ");
    let date = dateStr.slice(0, index + 1);
    let time = dateStr.slice(index);
    setTime({ time: time, date: date });
    dispatch(get_current_date({ time: time, date: date }));
  };

  useEffect(() => {
    getTimeAndDate(weatherData.location.localtime);
  }, []);

  const handleSearch = (event) => {
    dispatch(get_current_location(event.target.value));
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      padding="3rem"
      position="relative"
    >
      <Box display="flex" color="white" alignItems="center">
        <LocationOnOutlined />
        <Typography variant="h6" component="div">
          <Box
            color="white"
            fontWeight="fontWeightBold"
            letterSpacing={2}
            paddingLeft="10px"
          >
            {weatherData.location.name}
          </Box>
        </Typography>
      </Box>
      <Box padding="0 1rem" borderLeft="4px solid white">
        <Typography variant="h5" component="div">
          <Box color="white" letterSpacing={2}>
            {time.time}
          </Box>
        </Typography>
        <Typography variant="subtitle1" component="div">
          <Box color="white" fontWeight="fontWeightBold" letterSpacing={4}>
            {time.date}
          </Box>
        </Typography>
      </Box>
      <Box>
        {/* <form onSubmit={handleSearch}>
          <TextField label="search city" />
        </form> */}
      </Box>
    </Box>
  );
}

export default Header;
