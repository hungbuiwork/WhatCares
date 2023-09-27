import { React, useState } from "react";
import hondurasImage from "../imgs/honduras2017/2.JPG";
import vietnamImage from "../imgs/vietnam/2a.jpg"; //TODO: Update
import ImageCarousel from "../components/ImageCarousel/ImageCarousel.js";
import { Link } from "react-scroll";
import { Slide } from "../animations/Slide.tsx";

export const Projects = () => {
  const [honduras, setHonduras] = useState(false);
  const [vietnam, setVietnam] = useState(false);

  return (
    <div className= "my-16 bg-white">
      <a className=" relative bottom-20" id="projects"></a>
      <h1 className=" text-8xl pt-8 underline decoration-blue-600 leading-relaxed">
        Projects
      </h1>
      <h2 className="text-2xl text-blue-500 mx-8 lead mb-8" >Overseas missions to provide medical care, medical education, and supplies to underserved communities.</h2>

      <div className=" flex justify-center flex-wrap">
        {!honduras && (
          <Slide className="w-96 bg-base-100 shadow-xl m-8 drop-shadow-dark-2">
            <div className="card">
              <figure className=" h-96 w-auto">
                <img src={hondurasImage} alt="Shoes" className=" min-h-max min-w-max"/>
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
          </Slide>
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
            {false && <ImageCarousel></ImageCarousel>}
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
          <Slide className=" w-96 bg-base-100 shadow-xl m-8 drop-shadow-dark-2"> 
            <div className="card">
              <figure className=" h-96">
                <img src={vietnamImage} alt="Vietnam Image" className=" min-h-max min-w-max"/>
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
          </Slide>
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
            {false && <ImageCarousel></ImageCarousel>}
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
        <h1 className=" text-bold text-6xl">
          Want To <span className=" text-orange-600">Help Out?</span>
        </h1>

        <Link
          activeClass="active"
          to="contribute"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button className="m-4 text-white btn hover:translate-y-2 bg-orange-600 hover:text-orange-600 text-xl border-2">
            {" "}
            Start Contributing Today ↓{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};
