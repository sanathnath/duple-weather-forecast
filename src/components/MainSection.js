import { Box, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import SideCard from "./SideCard";
import TemaratureCard from "./TemaratureCard";

const useStyle = makeStyles(() => ({
  sideCard: {
    width: "14rem",
    height: "17rem",
    backgroundColor: "rgba(70, 72, 73, 0.13)",
  },
}));

function MainSection() {
  const classes = useStyle();
  const { weatherData } = useSelector((state) => {
    return state.weather;
  });

  return (
    <Box padding="3rem" display="flex" justifyContent="center" gridGap={15}>
      <SideCard
        title={"Wind"}
        firstLabel={"Wind Speed"}
        firstValue={weatherData.current["wind_speed"]}
        secondLabel={"Wind degree"}
        secondValue={weatherData.current["wind_degree"]}
      />

      <TemaratureCard data={weatherData} />

      <SideCard
        title={"Precipitation"}
        firstLabel={"Preci"}
        firstValue={weatherData.current["precip"]}
        secondLabel={"Humidity"}
        secondValue={weatherData.current["humidity"]}
      />
    </Box>
  );
}

export default MainSection;
