import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  sideCard: {
    width: "100%",
    height: "17rem",
    padding: "2rem 3rem",
    color: "white",
    backgroundColor: "rgba(70, 72, 73, 0.13)",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "17rem",
      padding: "2rem 0.5rem",
    },
    [theme.breakpoints.down('sm')]:{
      height: "10rem",
      padding: "0.5rem 1rem",
    }
  },
  
}));

function SideCard({ title, firstLabel, firstValue, secondLabel, secondValue }) {
  const classes = useStyle();

  return (
    <Paper elevation={0} className={classes.sideCard}>
      <Box
        display="flex"
        color="white"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        padding="1rem 1rem"
      >
        <Typography variant={"h6"}>
          {title}
          </Typography>
      </Box>
      <Box>
        <Typography>
          {firstLabel}: {firstValue}
        </Typography>
        <Typography>
          {secondLabel}: {secondValue}
        </Typography>
      </Box>
    </Paper>
  );
}

export default SideCard;
