import React from "react";
import { TeamMember } from "../../components/TeamMember/TeamMember";

export const Team = () => {
  return (
    <div>
      <h1 className=" text-5xl underline decoration-blue-500">Our Team</h1>
      <h2 className="text-xl text-blue-500">We have an amazing team of X, Y, Z</h2>
      <div className="flex flex-wrap justify-center">
        <TeamMember></TeamMember>
        <TeamMember></TeamMember>
        <TeamMember></TeamMember>
        <TeamMember></TeamMember>
        <TeamMember></TeamMember>
        <TeamMember></TeamMember>
      </div>
    </div>
  );
};
