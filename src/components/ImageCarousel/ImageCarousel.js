import React from "react";
import image from "../../imgs/honduras2017/1.JPG";

/*
      {images.map((item, index) => {
        return (
          <div className="carousel-item" key={index}>
            <img
              className=" w-32 object-cover"
              src={require("../../imgs/honduras2017/" + item + ".JPG")}
              alt="Burger"
            />
          </div>
        );
      })}
      */
const numbers = ["1", "2", "3", "4", "5", "6","7", "8", "9", "10"];
const el = numbers.map((item, index) => {
  return (
    <div className="carousel-item p-2" key={index}>
      <img
        className=" w-32 object-cover"
        src={require("../../imgs/honduras2017/" + item + ".JPG")}
        alt= {index.toString()}
      />
    </div>
  );
});

const ImageCarousel = () => {
  return (
    ///https://daisyui.com/components/carousel/

    <div>
      <div className="carousel rounded-box h-32">
        <div className="carousel-item">
          <img
            className=" w-32 object-cover"
            src={image}
            alt="Burger"
          />

          {}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
