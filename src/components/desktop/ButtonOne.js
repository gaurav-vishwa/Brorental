import React from "react";

import { Box } from "@mui/system";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ButtonOne = () => {
  return (
    <Box sx={{ display: "inline-flex" }}>
      <button
        aria-label="Go to previous slide"
        class="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
        type="button"
      ></button>
    </Box>
  );
};

export default ButtonOne;
