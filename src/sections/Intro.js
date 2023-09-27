import React from "react";
import PropTypes from "prop-types";
import cover_image from "../imgs/honduras2017/12.JPG";
import { Slide } from "../animations/Slide.tsx";

const Intro = () => (
  <div class="bg-white h-[100vh] mb-8" id="main">
    <div className="flex lg:flex-row flex-col">
      <Slide x={"-50vw"} y = {2} damping={60}>
        <div id = "imagepreload"></div>
        <div id = "introimages" className="shadow-xl w-[100vw] lg:w-[50vw] h-[100vh] object-fill"></div>

      </Slide>

      <div className="flex w-[100%] lg:w-[50%]  h-[100vh] justify-center flex-col  lg:static relative bottom-[100vh]">
        <div className="rounded-xl bg-gradient-to-b from-white to-transparent p-8 drop-shadow-dark lg:drop-shadow-none h-[60vh] w-[50vw] mx-auto mt-[60vh] lg:m-auto">
          <h1 className=" font-extrabold text-6xl lg:text-7xl text-left">
            <div className="flex">
              <span className=" text-blue-500">
                <Slide x={0} y={200} delay={0.2} damping = {60}>
                  W
                </Slide>
              </span>
              <Slide x={200} y={0} delay={2} damping = {40}>
                orld{" "}
              </Slide>{" "}
              <br></br>
            </div>
            <div className="flex">
              <span className=" text-blue-500">
                <Slide x={0} y={200} delay={0.4} damping = {60}>
                  H
                </Slide>
              </span>
              <Slide x={200} y={0} delay={2.25} damping = {40}>
                ealth
              </Slide>{" "}
              <br></br>
            </div>
            <div className="flex">
              <span className=" text-blue-500">
                <Slide x={0} y={200} delay={0.6} damping = {60}>
                  A
                </Slide>
              </span>
              <Slide x={200} y={0} delay={2.5} damping = {40}>
                ccess
              </Slide>{" "}
              <br></br>
            </div>
            <div className="flex">
              <span className=" text-blue-500">
                <Slide x={0} y={200} delay={0.8} damping = {60}>
                  T
                </Slide>
              </span>
              <Slide x={200} y={0} delay={2.75} damping = {40}>
                eam{" "}
              </Slide>{" "}
              <br></br>
            </div>
          </h1>

          <Slide damping = {80} delay={3} x={0} y={100}>
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
