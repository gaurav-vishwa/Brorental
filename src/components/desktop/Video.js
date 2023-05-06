import { CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";

export default function video() {
  return (
    <>
      <Container sx={{ marginTop: "7%" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Commuting Made Easy!
        </Typography>
        <CardMedia sx={{ marginTop: "5%", marginLeft: "3%" }}>
          <ReactPlayer controls url="https://youtu.be/VB4SUy5h8ME" />
        </CardMedia>
      </Container>
    </>
  );
}
