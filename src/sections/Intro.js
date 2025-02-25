import React from "react";
import PropTypes from "prop-types";
import cover_image from "../imgs/honduras2017/12.JPG";
import { Slide } from "../animations/Slide.tsx";

const Intro = () => (
  <div className=" h-[100vh] p-12 relative top-20">
    {/* Desktop View */}
    <div className=" flex justify-center gap-9">
      <div className=" flex-[2]"></div>
      <div className=" z-20   flex flex-col justify-center flex-[3] gap-2 ">
        <h1 className=" text-left font-semibold text-6xl md:text-6xl lg:text-7xl xl:text-8xl">
          Worldwide Healthcare for Disadvantaged Communities.
        </h1>
        <h2 className=" text-right text-2xl ">Care, Contribute, Cultivate</h2>
        <div className=" flex justify-end">
          <button className=" btn btn-secondary w-64 rounded-none rounded-bl-3xl rounded-tr-3xl">
            {" "}
            START CONTRIBUTING
          </button>
        </div>
      </div>
      {/* Image */}
      <div className="  h-[100vh]  hidden sm:flex flex-col justify-center  sm:flex-[4]">
        <div className="introimages  w-full h-[30rem] max-w-[30rem] rounded-tl-[5rem] rounded-br-[10rem]"></div>
      </div>
    </div>
    {/* Mobile Image */}
    <div className=" z-0 introimages bg-pink-500  h-[20rem] w-[70%] rounded-tl-[5rem] rounded-br-[10rem] absolute sm:hidden top-[360px] "></div>
  </div>
);

Intro.propTypes = {};

Intro.defaultProps = {};

export default Intro;
