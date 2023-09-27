import React from "react";
import { Slide } from "../animations/Slide.tsx";
import { Action } from "../components/Action/Action.jsx";
export const About = () => {
  return (
    <div className="mx-16 md:mx-[20%] my-16">
      <a className=" relative bottom-20" id="mission"></a>
      <div className=" mb-8">
        <Slide>
          <h1 className=" text-5xl">
            <span className=" text-blue-500 font-bold">WHAT</span> we do{" "}
          </h1>
        </Slide>
        <Slide>
          <p className=" text-left indent-8 text-xl leading-10">
            {" "}
            WHAT is a non-profit organization founded to care, contribute and
            cultivate medical care and education to places which lack these
            resources, worldwide. However, we are not just a nonprofit; we are a
            force of change, driven by a mission to extend vital medical care
            and knowledge to the farthest corners of the globe. The WHAT team
            stands resolute in our commitment to reaching underserved
            communities, ensuring they receive the care they deserve. We go
            beyond conventional aid, contributing essential medical equipment
            and resources to fortify the healthcare infrastructure. But our
            mission doesn't end there. We strive to cultivate a brighter future
            through educational programs, crafting a legacy of healing through
            mission trips and strategic partnerships with accomplished
            physicians.{" "}
          </p>
        </Slide>
      </div>


      <div className=" flex flex-col">
        <Slide>
          <Action
            title="VEINS"
            desc="Her eyebrows were a shade darker than her hair. They were thick and almost horizontal, emphasizing the depth of her eyes. She was rather handsome than beautiful. Her face was captivating by reason of a certain frankness of expression and a contradictory subtle play of features. Her manner was engaging. "
            src="https://media.licdn.com/dms/image/D560BAQFBz2_kNzD2xQ/company-logo_200_200/0/1663532947031?e=2147483647&v=beta&t=rcWnXJPxd8u-H4Wl4MKrboPfu8TZugvzXgD9o6HSOqQ"
          ></Action>
        </Slide>
        <Slide>
          <Action
            title="SERVICE"
            desc="Her eyebrows were a shade darker than her hair. They were thick and almost horizontal, emphasizing the depth of her eyes. She was rather handsome than beautiful. Her face was captivating by reason of a certain frankness of expression and a contradictory subtle play of features. Her manner was engaging. "
            src={require("../imgs/honduras2019/16.jpg")}
          ></Action>
        </Slide>
        <Slide>
          <Action
            title="EDUCATION"
            desc="Her eyebrows were a shade darker than her hair. They were thick and almost horizontal, emphasizing the depth of her eyes. She was rather handsome than beautiful. Her face was captivating by reason of a certain frankness of expression and a contradictory subtle play of features. Her manner was engaging. "
            src="https://media.licdn.com/dms/image/D560BAQFBz2_kNzD2xQ/company-logo_200_200/0/1663532947031?e=2147483647&v=beta&t=rcWnXJPxd8u-H4Wl4MKrboPfu8TZugvzXgD9o6HSOqQ"
          ></Action>
        </Slide>
        <Slide>
          <Action
            title="DONATIONS"
            desc="Her eyebrows were a shade darker than her hair. They were thick and almost horizontal, emphasizing the depth of her eyes. She was rather handsome than beautiful. Her face was captivating by reason of a certain frankness of expression and a contradictory subtle play of features. Her manner was engaging. "
            src= {require("../imgs/honduras2019/3a.jpg")}
          ></Action>
        </Slide>
      </div>

      <div className=" mb-8">
        <Slide>
          <h1 className=" text-5xl"> How it all began </h1>
        </Slide>
        <Slide>
          <p className=" text-left indent-8 text-xl leading-10">
            The origins of WHAT trace back to the dedicated and passionate
            members of our medical team. Their journey began as they came
            together during their involvement in Honduras Vein Week, an annual
            medical mission sponsored by the Hackett Hemwall Patterson
            Foundation (HHPF). Notably, Dr. Bui and A. Greenberg were already
            championing advanced vascular care in Vietnam, while Dr. McHutchison
            and T. Zimmerman were actively establishing year-round follow-up
            clinics in Honduras, with a specific focus on aiding those enduring
            severe leg ulcers. What truly binds the WHAT team is not only their
            shared expertise but also a profound sense of purpose, marked by an
            unwavering commitment to provide continuous vascular/venous care to
            underserved communities. Beyond this noble cause, they share a
            passionate drive to enhance medical education in these nations. It
            is this collective dedication and vision that brought WHAT into
            existence, as a unique force poised to make a transformative impact
            on global healthcare.
          </p>
        </Slide>
      </div>

      <div className=" mb-8 text-xl leading-10">
        <h1 className=" text-5xl">Our Contributions</h1>
        <ul>Section Coming Soon...</ul>
      </div>
    </div>
  );
};
