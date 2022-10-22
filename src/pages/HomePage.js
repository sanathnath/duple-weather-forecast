import { Box } from "@material-ui/core";
import React from "react";
import Header from "../components/Header";
import MainSection from "../components/MainSection";

function HomePage() {
  return (
    <Box
    display="flex"
    flexDirection="column"
    style={{"backgroundImage":"linear-gradient(to right bottom, #6DBFFB, #6DBFFB, #c4eaff, #ebf2ff, #ffffff)"}}
    >
      <Header />
      <MainSection />
    </Box>
  );
}

export default HomePage;
