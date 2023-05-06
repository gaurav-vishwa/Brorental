import React from "react";
import { Box } from "@mui/system";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ButtonTwo = () => {
  return (
    <Box sx={{ display: "inline-flex", mr: 20 }}>
      <button
        aria-label="Go to next slide"
        class="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
        type="button"
      ></button>
    </Box>
  );
};

export default ButtonTwo;
