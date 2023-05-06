// import { Box, Container, Grid, Typography } from "@mui/material";
// import goImage from "../assets/images/goImage.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from "react";
import Offer from "./Offer";
// import ButtonGroup from "./ButtonGroup";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const OfferCarousal = () => {
  return (
    <div>
      <Carousel
        responsive={responsive}

        // arrows={false}
        // renderButtonGroupOutside={true}
        // customButtonGroup={<ButtonGroup />}
      >
        <Offer />
        <Offer />
        <Offer />
        <Offer />
      </Carousel>

      {/* <Box className="" sx={{ display: "flex" }}>
        <button
          aria-label="Go to previous slide"
          class="react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
          type="button"
        ></button>
        <button
          aria-label="Go to next slide"
          class="react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
          type="button"
        ></button>
      </Box> */}
    </div>
  );
};

export default OfferCarousal;
