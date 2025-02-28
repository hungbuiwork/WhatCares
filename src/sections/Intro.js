import React from "react";
import PropTypes from "prop-types";
import cover_image from "../imgs/honduras2017/12.JPG";
import { Slide } from "../animations/Slide.tsx";
import { Link } from "react-scroll";

const Intro = () => (
  <div className="  min-h-[calc(100vh_-_4rem)]  relative  flex flex-col justify-center">
    {/* Desktop View */}
    <div className=" flex flex-col md:flex-row justify-center gap-9   h-full p-[min(3rem,5vw)]">
      {/* <div className=" flex-[2]"></div> */}
      <div className=" z-20   flex flex-col justify-between flex-[4] gap-2  ">
        <h1 className=" text-left font-semibold text-4xl md:text-6xl lg:text-7xl xl:text-8xl md:pl-24">
          Worldwide Healthcare for Underserved Communities.
        </h1>
        <h2 className=" text-right text-2xl ">Care, Contribute, Cultivate</h2>
        <div className=" flex justify-end">
          <Link to="contribute" smooth={true} duration={500}>
            <button className="border-2 border-white btn btn-primary w-64 rounded-none rounded-bl-3xl rounded-tr-3xl text-lg hover:scale-110">
              {" "}
              GET INVOLVED
            </button>
          </Link>
        </div>
      </div>
      {/* Image */}
      <div className="hidden  h-full  md:flex justify-start sm:flex-[3]">
        <div className="  w-full h-[30rem] max-w-[30rem] rounded-tl-[5rem] rounded-br-[10rem] relative overflow-hidden ">
          <div className=" absolute w-full h-full bg-cover bg-center bg-[url(imgs/honduras2017/12.JPG)]"></div>
        </div>
      </div>
    </div>
    <div className="md:hidden absolute h-full w-full bg-[url(imgs/honduras2019/22.jpg)]"></div>
    <div className="md:hidden  absolute h-full w-full  bg-gradient-to-b from-primary via-white/50 to-primary"></div>
    {/* Mobile Image */}
    {/* <div className=" z-0 introimages bg-primary h-[20rem] w-[70%] rounded-tl-[5rem] rounded-br-[10rem] absolute sm:hidden top-[360px] "></div> */}
  </div>
);

Intro.propTypes = {};

Intro.defaultProps = {};

export default Intro;
