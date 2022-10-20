import { Box, TextField, Typography } from "@material-ui/core";
import { LocationOnOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  get_current_date,
  get_current_location,
} from "../redux/reducers/weatherReducer";

function Header() {
  const [input, setInput] = useState("");
  const [time, setTime] = useState({ time: "", date: "" });

  const dispatch = useDispatch();

  const { weatherData, currentDate } = useSelector((state) => {
    return state.weather;
  });


  const handleSearch = (event) => {
    event.preventDefault();
    console.log(input);
    dispatch(get_current_location(input));
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
            {currentDate.time}
          </Box>
        </Typography>
        <Typography variant="subtitle1" component="div">
          <Box color="white" fontWeight="fontWeightBold" letterSpacing={4}>
            {currentDate.date}
          </Box>
        </Typography>
      </Box>
      <Box>
        <form onSubmit={handleSearch}>
          <TextField
            label="search city"
            name="search"
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
        </form>
      </Box>
    </Box>
  );
}

export default Header;
