import React from "react";
import AppLayout from "../components/layout/AppLayout.jsx";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box bgcolor={"#dee3e0"} height={"100vh"}>
      <Typography p={"2rem"} variant="h5" textAlign={"center"}>
        Select a friend to chat
      </Typography>
    </Box>
  );
};

export default AppLayout()(Home);
