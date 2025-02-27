import { React, useState } from "react";
import hondurasImage from "../imgs/honduras2017/2.JPG";
import vietnamImage from "../imgs/vietnam/2a.jpg"; //TODO: Update
import ImageCarousel from "../components/ImageCarousel/ImageCarousel.js";
import { Link } from "react-scroll";
import { Slide } from "../animations/Slide.tsx";
import globeIcon from "../imgs/icons/world_2.svg";

export const Projects = () => {
  const [honduras, setHonduras] = useState(false);
  const [vietnam, setVietnam] = useState(false);

  return (
    <div className="text-left flex flex-col gap-9 px-4 md:px-16 py-8 relative">
      {/* GLOBE BACKGROUND */}
      <div className=" w-[min(60rem,120vw)] aspect-square absolute  rounded-full -z-10 right-0 translate-x-[50%] translate-y-[-20%] globe-container">
        <img src={globeIcon} className="scale-125"></img>
      </div>
      {/* TEXT */}
      <div className=" px-16">
        <Slide x={20} y={0}>
          <h2 className=" text-4xl font-normal">Our work</h2>
          <h1 className="text-7xl md:text-8xl font-bold">Across the Globe</h1>
        </Slide>
      </div>
      {/* HONDURAS*/}
      <Slide x={20} y={0}>
        <div className=" bg-primary w-full min-h-96 rounded-[5rem] rounded-tl-none  flex flex-col gap-9 relative overflow-hidden group">
          <div className=" absolute h-full w-full back bg-[url(imgs/honduras2019/22.jpg)] z-10 bg-cover"></div>
          <div className=" absolute h-full w-full bg-gradient-to-b from-sky-200 to-white/50 z-20 hover:scale-150"></div>
          <div className=" py-12 px-6 md:px-12  z-30 mix-blend-hard-light">
            <div className=" mix-blend-screen">
              <h1 className="text-5xl md:text-7xl"> Honduras</h1>
              <div className="flex flex-col lg:flex-row">
                <div className=" flex-[5]">
                  <p className="text-md md:text-xl py-4">
                    Honduras Vein Week, sponsored by the Hackett Hemwell
                    Patterson Foundation every March, treats over 1,500 Honduran
                    patients suffering from varicose veins and related leg
                    ulcers. While the mission primarily addresses venous ulcers,
                    many patients also suffer from severe tropical ulcers that
                    require ongoing wound care. Dr. McHutchison and T.
                    Zimmerman, RVT, worked to educate physicians and expand care
                    for these non-venous ulcers. In collaboration with the WHAT
                    medical team, the Honduran Red Cross, and other partners,
                    they established year-round access to wound care and
                    supplies, improving patients' healing, pain relief, and
                    quality of life.
                  </p>
                </div>
                <div className=" divider divider-vertical lg:divider-horizontal"></div>
                <div className="flex-[2]">
                  <h2 className=" text-xl ">3,000+ Surgeries Provided</h2>
                  <h2 className=" text-xl ">3,000+ Surgeries Provided</h2>
                </div>
              </div>
            </div>
            <button className="btn btn-neutral w-64 rounded-[5rem]  my-8">
              {" "}
              LEARN MORE
            </button>
          </div>
        </div>
      </Slide>

      {/* HONDURAS*/}
      <div className=" bg-primary w-full min-h-96 rounded-[5rem] rounded-tl-none  flex flex-col gap-9 relative overflow-hidden group">
        <div className=" absolute h-full w-full back bg-[url(imgs/honduras2019/22.jpg)] z-10"></div>
        <div className=" absolute h-full w-full bg-gradient-to-b from-sky-200 to-primary/25 z-20 hover:scale-150"></div>
        <div className=" p-12 z-30 mix-blend-hard-light">
          <div className=" mix-blend-screen">
            <h1 className=" text-7xl"> Honduras</h1>
            <div className="flex flex-col md:flex-row">
              <div className=" flex-[5]">
                <h2 className="text-2xl md:text-3xl">
                  This is text about honduras and the medical missions that we
                  do. We say the care that we provide. This is text about
                  honduras and the medical missions that we do. We say the care
                  that we provide. This is text about honduras and the medical
                  missions that we do. We say the care that we provide.
                </h2>
              </div>
              <div className=" divider divider-vertical md:divider-horizontal"></div>
              <div className="flex-[2]">
                <h2 className=" text-3xl ">3,000+ Surgeries Provided</h2>
                <h2 className=" text-3xl ">3,000+ Surgeries Provided</h2>
              </div>
            </div>
          </div>
          <button className="btn btn-neutral w-64 rounded-[5rem] rounded-br-none">
            {" "}
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};
