import React from "react";
import { TeamMember } from "../components/TeamMember/TeamMember";
import team from "../data/team";
import { Slide } from "../animations/Slide.tsx";

export const Team = () => {
  return (
    <div className="flex justify-center py-8">
      <div className=" w-[min(1200px,95vw)]">
        <a className=" relative bottom-20" id="team"></a>
        <h1 className=" text-6xl md:text-8xl  leading-tight">Meet the Team</h1>
        <h2 className="text-2xl text-blue-500 mx-8 lead mb-8">
          Meet our dedicated and passionate medical professionals who comprise
          WHAT.
        </h2>
        <p className="text-lg pb-14 px-[min(5vw)] text-left">
          The origins of WHAT trace back to the dedicated and passionate members
          of our medical team. Their journey began as they came together during
          their involvement in Honduras Vein Week, an annual medical mission
          sponsored by the Hackett Hemwall Patterson Foundation (HHPF). Notably,
          Dr. Bui and A. Greenberg were already championing advanced vascular
          care in Vietnam, while Dr. McHutchison and T. Zimmerman were actively
          establishing year-round follow-up clinics in Honduras, with a specific
          focus on aiding those enduring severe leg ulcers. What truly binds the
          WHAT team is not only their shared expertise but also a profound sense
          of purpose, marked by an unwavering commitment to provide continuous
          vascular/venous care to underserved communities. Beyond this noble
          cause, they share a passionate drive to enhance medical education in
          these nations. It is this collective dedication and vision that
          brought WHAT into existence, as a unique force poised to make a
          transformative impact on global healthcare.
        </p>
        <div className="flex flex-wrap justify-center gap-10 ">
          {team.map((member, i) => {
            return <TeamMember member={member}></TeamMember>;
          })}
        </div>
      </div>
    </div>
  );
};
