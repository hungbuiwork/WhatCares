import React from "react";
import { Slide } from "../animations/Slide.tsx";
import { Action } from "../components/Action/Action.jsx";
export const About = () => {
  return (
    <div className="mx-6 md:mx-[10%] py-16">
      <a className=" relative bottom-20" id="mission"></a>
      <div className=" mb-8">
        <Slide>
          <h1 className=" text-6xl text-center ">
            <span className=" text-blue-500 font-bold">WHAT</span> we do{" "}
          </h1>
          <br></br>
        </Slide>

        <div className="">
          <Slide className=" grow-[0]">
            <div className="hidden md:block float-right right-0 -z-10 object-contain w-[40vw] m-4">
              <img
                src={require("../imgs/honduras2019/38.jpg")}
                className=" contrast-75"
              ></img>
            </div>
            <p className=" text-left text-md leading-relaxed md:mr-28">
              <span className=" font-extrabold italic">WHAT cares</span> is a non-profit organization founded to <span className="highlight">care, contribute and
              cultivate</span> medical care and education to places which lack these
              resources, worldwide. We are driven by <span className="highlight">a mission to extend vital
              medical care and knowledge</span> to the farthest corners of the globe.{" "}
              <br></br>
              <br></br>
              The WHAT team stands resolute in our commitment to <span className="highlight">reaching
              underserved communities</span>, ensuring they receive the care they
              deserve. We go beyond conventional aid, <span className="highlight">contributing essential
              medical equipment and resources</span> to fortify the healthcare
              infrastructure. <br></br>
              <br></br>
              But our mission doesn't end there. We strive to cultivate a
              brighter future through <span className="highlight">educational programs</span>, crafting a legacy of
              healing through <span className="highlight">mission trips</span> and strategic partnerships with
              accomplished physicians.{" "}
            </p>
          </Slide>
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row justify-between clear-both">
        <Slide>
          <Action
            title="VEINS"
            desc="Varicose veins are swollen, twisted leg veins caused by weak valves, leading to symptoms like pain and swelling. In severe cases, they can result in leg ulcers—painful, open sores on the lower legs due to poor blood circulation. Our nonprofit's goal is to provide treatment and support for individuals suffering from these conditions "
            src={require("../imgs/honduras2019/19.jpg")}
          ></Action>
        </Slide>
        <Slide>
          <Action
            title="SERVICE"
            desc="Honduras Vein Week, sponsored by HHPF, is an annual week-long mission that unites volunteers from diverse backgrounds to provide essential care in honduras. Our primary focus is treating venous diseases, including varicose veins and leg ulcers, through advanced medical interventions, education, support, and advocacy. Notably, Dr. McHutchison and T. Zimmerman play a pivotal role in establishing year-round follow-up clinics in Honduras, especially for those suffering from severe leg ulcers."
             src={require("../imgs/honduras2019/16.jpg")}
          ></Action>
        </Slide>
        <Slide>
          <Action
            title="MEDICAL EDUCATION"
            desc="We're dedicated to advancing global medical care. Dr. Bui and A. Greenberg actively enhance vascular care in Vietnam, emphasizing the importance of training and equipping local physicians. Collaborating with Cho Ray, we hold seminars, perform cases, and promote educational exchanges for Vietnamese vascular surgeons in the U.S. Currently, we partner with Dignity Health to extend these initiatives to other specialties, aiming to empower local healthcare providers and ensure sustainable global access to quality healthcare."
             src={require("../imgs/vietnam/2a.jpg")}
          ></Action>
        </Slide>
        <Slide>
          <Action
            title="DONATIONS"
            desc="In our continuous medical missions to Vietnam and Honduras, we're committed not only to offering medical expertise but also to donating our time and essential supplies. We firmly believe in the strength of collective support, and you can join this meaningful initiative by contributing to our donations. Your participation can provide the crucial funds needed for individuals with debilitating leg ulcers to receive the urgent care and supplies they require."
            src={require("../imgs/honduras2019/3a.jpg")}
          ></Action>
        </Slide>
      </div>

      <div className=" m-8">
        <Slide>
          <h1 className=" text-5xl mb-4"> How it started </h1>
        </Slide>
        <Slide>
          <p className=" text-left indent-8 text-md leading-relaxed">
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

    </div>
  );
};
