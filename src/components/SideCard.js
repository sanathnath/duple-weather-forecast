import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles(() => ({
  sideCard: {
    width: "14rem",
    height: "17rem",
    padding: "2rem 3rem",
    color: "white",
    backgroundColor: "rgba(70, 72, 73, 0.13)",
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
        padding="2rem 1rem"
      >
        <Typography variant={"h6"}>{title}</Typography>
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
