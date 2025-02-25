import React from "react";
import { Slide } from "../animations/Slide.tsx";
import { Action } from "../components/Action/Action.jsx";

const image = require("../imgs/honduras2019/38.jpg");

export const About = () => {
  return (
    <div className=" border-2 border-orange-500">
      {/* Stats */}
      <div className=" flex justify-center px-4 relative z-20 top-12">
        <div className=" rounded-3xl  bg-primary  flex max-w-5xl w-full p-4">
          <div className=" flex-1">
            <h1 className=" text-4xl"> 792,000</h1>
            <h2 className=" text-xl"> lives saved</h2>
          </div>
          <div className=" divider divider-horizontal"></div>
          <div className=" flex-1">
            <h1 className=" text-4xl"> 310</h1>
            <h2 className=" text-xl"> veins donated</h2>
          </div>
          <div className=" divider divider-horizontal"></div>
          <div className=" flex-1">
            <h1 className=" text-4xl"> 792,000</h1>
            <h2 className=" text-xl"> lives saved</h2>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className=" h-[26rem]  relative  bg-yellow-400">
        <div className=" bg-gray-200 absolute bottom-0 right-[10%] w-80 h-48 text-left p-8 rounded-t-3xl">
          <h1 className=" text-4xl"> Did you know? </h1>
          <div className=" divider"></div>
          <h2 className=" text-xl"> Important Stat One</h2>
          <h2 className=" text-xl"> Another Important Stat</h2>
        </div>
      </div>
      {/* About */}
      <div className=" flex ">
        <div className="  flex flex-col-reverse  md:flex-row lg:justify-center px-8 py-8 gap-10">
          <div className=" flex-[3] flex justify-start md:justify-end rounded-tr-[10rem] rounded-bl-[10rem] overflow-hidden">
            <div className=" bg-red-600  h-52 w-full md:h-[30rem] "></div>
          </div>
          <div className=" flex-[2] text-left">
            <h1 className=" text-7xl">Our Vision</h1>
            <div className=" divider"></div>
            <p className=" text-2xl md:3xl">
              WHAT Cares is a dedicated non-profit committed to delivering vital
              medical care and education to underserved regions worldwide. Our
              mission is to ensure every community receives the care and
              knowledge they deserve. We go beyond conventional aid by providing
              essential medical equipment and resources, fortifying healthcare
              infrastructure. Through educational programs, mission trips, and
              strategic partnerships with skilled physicians, we cultivate a
              legacy of healing and brighter futures for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
