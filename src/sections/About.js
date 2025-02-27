import React from "react";
import { Slide } from "../animations/Slide.tsx";

const image = require("../imgs/honduras2019/38.jpg");

export const About = () => {
  return (
    <div className="">
      {/* Stats */}
      <Slide y={10} opacity={1}>
        <div className="absolute w-full flex justify-center px-4  z-20 translate-y-[-50%]">
          <div className=" rounded-3xl    flex flex-col sm:flex-row max-w-5xl w-full p-4 border-primary border-2 bg-white">
            <div className=" flex-1 flex flex-col flex-center pt-3">
              <h1 className=" text-4xl counter"> 8,000+</h1>
              <h2 className=" text-md"> patients treated</h2>
            </div>
            <div className=" divider divider-horizontal"></div>
            <div className=" flex-1 flex flex-col flex-center  pt-3">
              <h1 className=" text-4xl"> 2000+ </h1>
              <h2 className=" text-md"> hours volunteered</h2>
            </div>
            <div className=" divider divider-horizontal"></div>
            <div className=" flex-1 flex flex-col flex-center pt-3">
              <h1 className="  text-4xl"> 8+</h1>
              <h2 className=" text-md"> medical missions</h2>
            </div>
          </div>
        </div>
      </Slide>
      {/* Image */}
      <div className=" h-[26rem]  relative  bg-yellow-400  -z-10 ">
        <div className=" bg-[url(imgs/import/flood.jpg)] absolute w-full h-full bg-cover bg-center"></div>
        <div className=" absolute bg-gradient-to-b to-white/25 from-primary w-full h-full"></div>
        <div className=" bg-slate-200 backdrop-blur-md absolute bottom-0 md:right-[10%] w-[min(24rem,100vw)]  h-48 text-left p-8 rounded-t-3xl border-2 border-parimary border-b-0">
          <h1 className=" text-3xl"> Around the world </h1>
          <h2 className=" text-lg">
            {" "}
            70% of Vein Conditions in Low-Income Areas Go Undiagnosed &
            Untreated
          </h2>
        </div>
      </div>
      {/* About */}

      <div className=" flex ">
        <div className="  flex flex-col-reverse  md:flex-row lg:justify-center px-8 py-8 gap-10">
          <Slide x={20} y={0}>
            <div className="flex flex-col-reverse  md:flex-row flex-[2] text-left p-[min(64px,3vw)] gap-9">
              <div className=" flex-[2] hidden min-h-[400px] lg:flex justify-start md:justify-end rounded-tr-[10rem] rounded-bl-[10rem] overflow-hidden relative">
                <div className=" bg-[url(imgs/honduras2019/37.jpg)]  w-full h-full "></div>
                <div className="h-full w-full bg-gradient-to-b from-transparent to-sky-200 absolute z-10"></div>
              </div>
              <div className="flex-[3] text-left ">
                <h1 className=" text-6xl ">Our Mission</h1>
                <div className=" divider"></div>
                <p className=" text-xl md:3xl">
                  WHAT Cares is a dedicated non-profit committed to delivering
                  vital medical care and education to underserved regions
                  worldwide. Our mission is to ensure every community receives
                  the care and knowledge they deserve. We go beyond conventional
                  aid by providing essential medical equipment and resources,
                  fortifying healthcare infrastructure. Through educational
                  programs, mission trips, and strategic partnerships with
                  skilled physicians, we cultivate a legacy of healing and
                  brighter futures for all.
                </p>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};
