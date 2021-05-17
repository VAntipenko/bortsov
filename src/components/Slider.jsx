import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export const Slider = () => {
  const sliders = [
    "./ourWork/1.png",
    "./ourWork/2.png",
    "./ourWork/3.png",
    "./ourWork/4.png",
    "./ourWork/5.png",
    "./ourWork/6.png",
    "./ourWork/7.png",
    "./ourWork/8.png",
  ];

  return (
    <AwesomeSlider>
      {sliders.map((img, index) => (
        <div key={index} data-src={img} />
      ))}
    </AwesomeSlider>
  );
};
