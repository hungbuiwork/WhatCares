import { React, useState } from "react";
import hondurasImage from "../../imgs/honduras2017/2.JPG";
import vietnamImage from "../../imgs/honduras2017/3.JPG"; //TODO: Update
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel.js";

export const Projects = () => {
  const [honduras, setHonduras] = useState(false);
  const [vietnam, setVietnam] = useState(false);

  return (
    <div className=" bg-white">
      <a className=" relative bottom-20" id="projects"></a>
      <h1 className=" text-6xl pt-8 underline decoration-orange-400">
        Our Projects
      </h1>

      <div className=" flex justify-center flex-wrap">
        {!honduras && (
          <div className="card w-96 bg-base-100 shadow-xl m-8 drop-shadow-dark-2">
            <figure>
              <img src={hondurasImage} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">HONDURAS</h2>
              <p>Small description of honduras</p>
              <div className={"card-actions justify-end"}>
                <a href="#honduras">
                  <button
                    className="btn text-blue-600"
                    onClick={() => setHonduras(!honduras)}
                  >
                    Learn More ⏵
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
        {honduras && (
          <div
            id="honduras"
            className="w-full bg-base-100 shadow-xl m-8 drop-shadow-dark-2 p-8"
          >
            <div className="flex justify-start">
              <button
                className="btn text-blue-600 mt-4 ml-4"
                onClick={() => setHonduras(!honduras)}
              >
                ⏴Minimize
              </button>
            </div>
            <h1 className="text-6xl mb-6"> HONDURAS</h1>
            <ImageCarousel></ImageCarousel>
            <p>Longer description here Honduras Blah Blah Blah Honduras</p>
          </div>
        )}

        {!vietnam && (
          <div className="card w-96 bg-base-100 shadow-xl m-8 drop-shadow-dark-2">
            <figure>
              <img src={vietnamImage} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">VIETNAM</h2>
              <p>Small description of what it is we are doing</p>
              <div className="card-actions justify-end">
                <a href="#vietnam">
                  <button
                    className="btn text-blue-600"
                    onClick={() => setVietnam(!vietnam)}
                    href="#vietnam"
                  >
                    Learn More ⏵
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}

        {vietnam && (
          <div
            id="vietnam"
            className="w-full bg-base-100 shadow-xl m-8 drop-shadow-dark-2 p-8"
          >
            <div className="flex justify-start">
              <button
                className="btn text-blue-600 mt-4 ml-4"
                onClick={() => setVietnam(!vietnam)}
              >
                {" "}
                ⏴Minimize
              </button>
            </div>
            <h1 className="text-6xl mb-6"> Vietnam</h1>
            <ImageCarousel></ImageCarousel>
            <p>Longer description here Honduras Blah Blah Blah Vietnam</p>
          </div>
        )}
      </div>

      <h1 className=" text-3xl">
        How <span className=" text-orange-500 ">YOU</span> can help
      </h1>
      <div>Some call to action that redirects to bottom page</div>
    </div>
  );
};
