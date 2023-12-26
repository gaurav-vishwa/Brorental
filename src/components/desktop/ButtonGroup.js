import React from "react";
import ButtonOne from "./ButtonOne";
import ButtonTwo from "./ButtonTwo";
import "react-multi-carousel/lib/styles.css";

const ButtonGroup = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="carousel-button-group absolute mr-10">
      <ButtonOne
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
      />
      <ButtonTwo onClick={() => next()} />
    </div>
  );
};

export default ButtonGroup;
