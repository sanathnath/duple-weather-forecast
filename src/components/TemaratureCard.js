import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import { CloudOutlined } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";

const useStyle = makeStyles(() => ({
  mainCard: {
    padding: "2rem 3rem",
    backgroundColor: "rgba(70, 72, 73, 0.13)",
  },
}));

function TemaratureCard({ data }) {
  const classes = useStyle();

  const { currentDate } = useSelector((state) => {
    return state.weather;
  });

  return (
    <Paper elevation={0} className={classes.mainCard}>
      <Box
        display="flex"
        color="white"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        padding="2rem 1rem"
      >
        <Box>
          <img src={data.current.weather_icons[0]} />
        </Box>
        <Box display="flex">
          <Typography variant="h1">{data.current.temperature}</Typography>
          <Typography variant="h5">&#8451;</Typography>
        </Box>
        <Typography variant="subtitle1" component="div">
          <Box color="white" fontWeight="fontWeightBold" letterSpacing={4}>
            {data.current.weather_descriptions[0]}
          </Box>
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        {/* <Box display="flex" color="white" alignItems="center">
          <Typography variant="subtitle1" component="div">
              <Box color="white" fontWeight="fontWeightBold">
                Min: 
              </Box>
            </Typography>
            <Typography> 22</Typography>
          </Box>
          <Box display="flex" color="white" alignItems="center">
          <Typography variant="subtitle1" component="div">
              <Box color="white" fontWeight="fontWeightBold">
                Max: 
              </Box>
            </Typography>
            <Typography> 22</Typography>
          </Box> */}
      </Box>
    </Paper>
  );
}

export default TemaratureCard;
