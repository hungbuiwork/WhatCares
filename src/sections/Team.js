import React from "react";
import { TeamMember } from "../components/TeamMember/TeamMember";
import team from "../data/team";
import { Slide } from "../animations/Slide.tsx";

export const Team = () => {
  return (
    <div className=" py-16">
      <a className=" relative bottom-20" id="team"></a>
      <Slide>
        <h1 className=" text-6xl md:text-8xl  leading-tight">
          Meet the Team
        </h1>
        <h2 className="text-2xl text-blue-500 mx-8 lead mb-8">
          Meet our dedicated and passionate medical professionals who comprise
          WHAT.
        </h2>
      </Slide>
      <div className="flex flex-wrap justify-center">
        {team.map((member, i) => {
          return <Slide key = {i}><TeamMember member={member}></TeamMember></Slide> ;
        })}
      </div>
    </div>
  );
};
