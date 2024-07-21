import React from "react";
import PropTypes from "prop-types";
import cover_image from "../imgs/honduras2017/12.JPG";
import { Slide } from "../animations/Slide.tsx";

const Intro = () => (
  <div class="bg-white h-[100vh] mb-8" id="main">
    <div className="flex lg:flex-row flex-col">
        <div id = "imagepreload"></div>
        <div id = "introimages" className="shadow-xl w-[100vw] lg:w-[50vw] h-[100vh] object-fill"></div>


      <div className="flex w-[100%] lg:w-[50%]  h-[100vh]  flex-col  lg:static relative bottom-[100vh]">
        <div className="rounded-xl bg-white p-8 mx-auto mt-[40vh] lg:m-auto relative lg:right-24">
          <h1 className=" font-extrabold text-6xl lg:text-7xl text-left">
            <div className="flex">
              <span className=" text-blue-500">
                  W
              </span>
                orld{" "}
              <br></br>
            </div>
            <div className="flex">
              <span className=" text-blue-500">
                  H
              </span>
                ealth
              <br></br>
            </div>
            <div className="flex">
              <span className=" text-blue-500">
                  A
              </span>
                ccess
              <br></br>
            </div>
            <div className="flex">
              <span className=" text-blue-500">
                  T
              </span>
                eam{" "}
              <br></br>
            </div>
          </h1>
          <Slide y = {50} >
          <h1 className=" text-2xl text-left">Care, Contribute, Cultivate.</h1>
        </Slide>
        </div>      
      </div>
    </div>
  </div>
);

Intro.propTypes = {};

Intro.defaultProps = {};

export default Intro;
