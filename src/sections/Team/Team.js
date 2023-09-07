import React from "react";
import { TeamMember } from "../../components/TeamMember/TeamMember";
import team from "../../data/team";

export const Team = () => {
  return (
    <div>
      <a className=" relative bottom-20" id="team"></a>
      <h1 className=" text-5xl underline decoration-blue-500">Our Team</h1>
      <h2 className="text-xl text-blue-500 mx-8">Meet our dedicated and passionate medical professionals who comprise WHAT.</h2>
      <div className="flex flex-wrap justify-center">
      {
        team.map((member) =>
        {
          return <TeamMember member = {member}></TeamMember>
        }
        )
      }
      </div>
    </div>
  );
};
