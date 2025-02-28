import { React, useState } from "react";
import hondurasImage from "../imgs/honduras2017/2.JPG";
import vietnamImage from "../imgs/vietnam/2a.jpg"; //TODO: Update
import ImageCarousel from "../components/ImageCarousel/ImageCarousel.js";
import { Link } from "react-router-dom";
import { Slide } from "../animations/Slide.tsx";
import globeIcon from "../imgs/icons/world_2.svg";
import Project from "../components/Project.js";
import projects from "../data/projects.js";

export const Projects = () => {
  const [honduras, setHonduras] = useState(false);
  const [vietnam, setVietnam] = useState(false);

  return (
    <div className="text-left flex flex-col gap-9 px-4 md:px-16 py-8 relative">
      {/* GLOBE BACKGROUND */}
      <div className=" w-[min(60rem,120vw)] aspect-square absolute  rounded-full z-10 right-0 translate-x-[50%] translate-y-[-20%] globe-container">
        <img src={globeIcon} className="scale-125"></img>
      </div>
      {/* TEXT */}
      <div className="  z-20">
        <Slide x={20} y={0}>
          <h2 className=" text-4xl font-normal">Our work</h2>
          <h1 className="text-7xl md:text-8xl font-bold">Across the Globe</h1>
        </Slide>
      </div>

      <div className=" flex flex-col gap-10">
        {projects.map((project, index) => (
          <Slide key={index} x={20} y={0} className="z-30">
            <Project
              imgURL={project.imgURL}
              title={project.title}
              desc={project.desc}
              metrics={project.metrics}
              to={project.to}
              flipped={index % 2}
            />
          </Slide>
        ))}
      </div>
    </div>
  );
};
