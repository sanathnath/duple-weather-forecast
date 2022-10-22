import {
  Box,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { LocationOnOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  get_current_date,
  get_current_location,
} from "../redux/reducers/weatherReducer";

const useStyle = makeStyles((theme) => ({
  header: {
    padding: "3rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem 0.5rem",
    },
  },
  locationDiv:{
    order:1,
    display:"flex",
    color:"white",
    alignItems:"center",
    [theme.breakpoints.down('sm')]:{
      order:1
    }
  },
  dateAndTimeDiv: {
    order:2,
    borderLeft:"4px solid white",
    padding:"0 1rem",
    [theme.breakpoints.down('sm')]:{
      borderLeft:"2px solid white",
      order:3,
      marginTop:'2.5rem',
      paddingBottom:'1rem'
    }
  },
  searchDiv:{
    order:3,
    display:"flex",
    justifyContent:"center",
    [theme.breakpoints.down('sm')]:{
      order:2
    }
  }
}));

function Header() {
  const [input, setInput] = useState("");
  const [time, setTime] = useState({ time: "", date: "" });
  const classes = useStyle();
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
    <Grid container className={classes.header} justifyContent="space-between">
      <Grid item className={classes.locationDiv}>
        {/* <Box display="flex"> */}
          <LocationOnOutlined />
          <Typography variant="h6" component="div">
            <Box
              color="white"
              fontWeight="fontWeightBold"
              letterSpacing={2}
              paddingLeft="10px"
            >
              {weatherData.location.name}
              assa
            </Box>
          </Typography>
        {/* </Box> */}
      </Grid>
      <Grid item xs={12} md={2} className={classes.dateAndTimeDiv}>
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
      </Grid>
      <Grid item className={classes.searchDiv}>
        <form onSubmit={handleSearch}>
          <TextField
            size="small"
            variant="outlined"
            label="search city"
            name="search"
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
        </form>
      </Grid>
    </Grid>
  );
}

export default Header;
