import React from "react";
import "../../css/Slider.css";
import leftArrow from "../Slider/Icons/arrow1.png";
import rightArrow from "../Slider/Icons/arrow.png";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);

  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt="worng" />
    </button>
    );
}