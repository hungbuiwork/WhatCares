import { React, useState } from "react";
import hondurasImage from "../imgs/honduras2017/2.JPG";
import vietnamImage from "../imgs/vietnam/2a.jpg"; //TODO: Update
import ImageCarousel from "../components/ImageCarousel/ImageCarousel.js";
import { Link } from "react-scroll";
import { Slide } from "../animations/Slide.tsx";

export const Projects = () => {
  const [honduras, setHonduras] = useState(false);
  const [vietnam, setVietnam] = useState(false);

  return (
    <div className="text-left flex flex-col gap-9 sm:px-0 md:px-8 py-8 border-4 border-primary relative">
      {/* GLOBE BACKGROUND */}
      <div className=" w-[min(60rem,180vw)] aspect-square bg-secondary absolute  rounded-full -z-10 right-[-30rem] top-[-10rem]"></div>
      <div className=" px-16">
        <h2 className=" text-4xl">Our work</h2>
        <h1 className=" text-8xl font-bold">Across the Globe</h1>
      </div>
      <div className=" bg-primary w-full min-h-96 rounded-[5rem] rounded-tl-none p-12 flex flex-col gap-9">
        <h1 className=" text-7xl"> Honduras</h1>
        <div className="flex flex-col md:flex-row">
          <div className=" flex-[5]">
            <h2 className="text-2xl md:text-3xl">
              This is text about honduras and the medical missions that we do.
              We say the care that we provide. This is text about honduras and
              the medical missions that we do. We say the care that we provide.
              This is text about honduras and the medical missions that we do.
              We say the care that we provide.
            </h2>
          </div>
          <div className=" divider divider-vertical md:divider-horizontal"></div>
          <div className="flex-[2]">
            <h2 className=" text-3xl ">3,000+ Surgeries Provided</h2>
            <h2 className=" text-3xl ">3,000+ Surgeries Provided</h2>
          </div>
        </div>
        <button className="btn btn-secondary w-64 rounded-[5rem] rounded-br-none">
          {" "}
          LEARN MORE
        </button>
      </div>
      <div className=" bg-primary w-full min-h-96 rounded-[5rem] rounded-tr-none p-12 flex flex-col gap-9">
        <h1 className=" text-7xl"> Vietnam</h1>
        <div className="flex flex-col md:flex-row">
          <div className=" flex-[5]">
            <h2 className="text-2xl md:text-3xl">
              This is text about honduras and the medical missions that we do.
              We say the care that we provide. This is text about honduras and
              the medical missions that we do. We say the care that we provide.
              This is text about honduras and the medical missions that we do.
              We say the care that we provide.
            </h2>
          </div>
          <div className=" divider divider-vertical md:divider-horizontal"></div>
          <div className="flex-[2]">
            <h2 className=" text-3xl ">3,000+ Surgeries Provided</h2>
            <h2 className=" text-3xl ">3,000+ Surgeries Provided</h2>
          </div>
        </div>
        <button className="btn btn-secondary w-64 rounded-[5rem] rounded-tr-none">
          {" "}
          LEARN MORE
        </button>
      </div>
    </div>
  );
};
