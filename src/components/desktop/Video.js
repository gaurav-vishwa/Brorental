import { Box, CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";

export default function video() {
  return (
    <>
      <Box sx={{ marginTop: "7%" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Commuting Made Easy!
        </Typography>
        {/* <CardMedia sx={{ marginTop: "5%" }}>
          <ReactPlayer controls url="https://youtu.be/VB4SUy5h8ME" />
        </CardMedia> */}
        <Box className="player-wrapper" sx={{ mt: 10, ml: 2 }}>
          <ReactPlayer
            pip
            url="https://youtu.be/VB4SUy5h8ME"
            className="react-player"
            // playing
            width="90%"
            height="100%"
            controls
          />
        </Box>
      </Box>
    </>
  );
}
