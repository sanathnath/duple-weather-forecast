import { Box, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import SideCard from "./SideCard";
import TemperatureCard from "./TemperatureCard";

const useStyle = makeStyles((theme) => ({
  mainSection: {
    padding: "3rem",
    justifyContent: "center",
    gridGap: "15px",
    [theme.breakpoints.down("md")]: {
      // display: "flex",
      justifyContent: "center",
      padding: "2rem 0",
      gap: "8px",
    },
    [theme.breakpoints.down('xs')]:{
      gap:'15px'
    }
  },
  leftInfoCard:{
    order:1,
    [theme.breakpoints.down('xs')]:{
      order:2
    }
  },
  mainInfoCard:{
    order:2,
    [theme.breakpoints.down('xs')]:{
      order:1
    }
  },
  rightInfoCard:{
    order:3,
    [theme.breakpoints.down('xs')]:{
      order:3
    }
  },
  moreInfoSection:{
    display:'flex',
    flexDirection:"row",
    padding:"2rem",
    justifyContent:'center',
    [theme.breakpoints.down('sm')]:{
      flexDirection:"column",
      padding:"1rem"
    }
  }
}));

function MainSection() {
  const classes = useStyle();
  const { weatherData } = useSelector((state) => {
    return state.weather;
  });
console.log(weatherData);
  return (
    <>
    <Grid container className={classes.mainSection}>
      <Grid item sm={3} xs={4} lg={2} xl={2} className={classes.leftInfoCard}>
        <SideCard
          title={"Wind"}
          firstLabel={"Wind Speed"}
          firstValue={weatherData.current["wind_speed"]+"km/h"}
          secondLabel={"Wind degree"}
          secondValue={weatherData.current["wind_degree"]}
        />
      </Grid>

      <Grid item sm={5} xs={10} lg={3} xl={3} className={classes.mainInfoCard}>
        <TemperatureCard data={weatherData} />
      </Grid>

      <Grid item sm={3} xs={4} lg={2} xl={2} className={classes.rightInfoCard}>
        <SideCard
          title={"Humidity"}
          firstLabel={"Preci"}
          firstValue={weatherData.current["precip"]}
          secondLabel={"Humidity"}
          secondValue={weatherData.current["humidity"]+"%"}
        />
      </Grid>
    </Grid>
    </>
  );
}

export default MainSection;
