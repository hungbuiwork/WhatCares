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
              <p>Year-round ulcer treatment program in Honduras</p>
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
          <div className="w-full bg-base-100 shadow-xl m-8 drop-shadow-dark-2 p-8">
            <a className=" relative bottom-20" id="honduras"></a>
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
            <div className="sm:px-4 md:px-12 py-6 indent-8 text-left">
              <h1 className=" text-2xl text-center">Honduras Vein Week</h1>
              <p>
                Honduras Vein Week, sponsored by the Hackett Hemwell Patterson
                Foundation every March, is dedicated to treating over 1500
                Honduran patients annually who suffer from painful varicose
                veins and leg ulcers caused by severe varicose veins. While the
                medical mission teams from HHPF typically addressed the leg
                ulcers resulting from varicose veins, each year numerous
                patients traveled from all corners of Honduras with non-venous,
                severe, and debilitating leg ulcers caused by tropical diseases
                and infections. Unlike the ulcers stemming from varicose veins,
                these tropical ulcers did not respond to the annual vein
                treatments, necessitating ongoing wound care that was previously
                unavailable to them. Dr. McHutchison and T. Zimmerman, RVT, took
                a keen interest in educating HHPF physicians about these ulcers
                and were equally committed to assisting patients afflicted by
                these severe, non-venous leg ulcers. Together with the WHAT
                medical team, the Honduran Red Cross, and collaborative
                partners, they established year-round access for these patients
                to receive wound care and supplies, enabling them to heal their
                ulcers, alleviate their pain, and regain their quality of life."
              </p>
            </div>
          </div>
        )}

        {!vietnam && (
          <div className="card w-96 bg-base-100 shadow-xl m-8 drop-shadow-dark-2">
            <figure>
              <img src={vietnamImage} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">VIETNAM</h2>
              <p>Establishing vascular care in Vietnam.</p>
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
          <div className="w-full bg-base-100 shadow-xl m-8 drop-shadow-dark-2 p-8">
            <a className=" relative bottom-20" id="vietnam"></a>
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
            <div className="sm:px-4 md:px-12 py-6 indent-8 text-left">
              <h1 className="text-2xl text-center">
                Training and equipping local physicians
              </h1>
              <p>
                Dr Hao Bui is committed to improving vascular care in Vietnam
                though education exchanges. WHAT firmly believes in the power of
                sustainable healthcare access for underserved regions through
                comprehensive physician training and resource provision. Over
                recent years, we've nurtured a fruitful partnership with Cho
                Ray's expansive vascular department, Vietnam's largest hospital
                boasting over three thousand beds. Through consistent annual
                seminars, hands-on vascular procedures, and reciprocal exchanges
                that enable Vietnamese vascular surgeons to gain experience in
                the U.S., we've been fostering a lasting impact. Currently,
                we're diligently collaborating with Dignity Health in the U.S.
                to extend similar educational initiatives across various medical
                specialties, fostering a steady progression towards improved
                healthcare accessibility.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="">
        <h1 className=" text-4xl">
          How <span className=" text-orange-500 ">YOU</span> can contribute
        </h1>
        <div className="mx-8 md:mx-16">
          By{" "}
          <span className=" text-blue-500 font-extrabold">
            joining our medical missions
          </span>{" "}
          in Honduras and Vietnam or contributing through{" "}
          <span className=" text-blue-500 font-extrabold">donations</span>,
           you become a vital partner in extending healing hands to
          those in need, offering hope, and making a profound difference in
          underserved communities. Your support directly empowers us to save
          lives, improve healthcare access, and bring lasting positive change to
          the lives of countless individuals.
        </div>

        <button className="m-4 btn bg-orange-500 text-white hover:text-orange-600 text-xl border-2 hover:border-orange-500"><a href="#donate">CONTRIBUTE NOW ↓</a></button>
      </div>
    </div>
  );
};
