import React from "react";

const Donate = () => {
  return (
    <div id="contribute" className=" py-32 bg-gradient-1">
      <div className="md:mx-[10%] ">
        
        <h1 className=" text-6xl md:text-8xl leading-tight text-white mb-4">Give a Helping Hand</h1>
        <div className="mx-8 md:mx-16 font-bold">
          By{" "}
          <span className=" text-orange-300 font-extrabold">
            joining our medical missions
          </span>{" "}
          in Honduras and Vietnam or contributing through{" "}
          <span className=" text-orange-300 font-extrabold">donations</span>, you
          become a vital partner in extending healing hands to those in need,
          offering hope, and making a profound difference in underserved
          communities. Your support directly empowers us to save lives, improve
          healthcare access, and bring lasting positive change to the lives of
          countless individuals.
        </div>
        <div className=" border-2 border-blue-600/50 rounded-lg py-4 px-2 mx-4 bg-white drop-shadow-dark-2">
          <h1 className=" text-3xl">Donate</h1>
          <div className=" border-2 border-slate-400 rounded-xl p-4 m-4 text-slate-600 border-l-0 border-r-0 text-md leading-snug">
            WHAT is a 501(c)(3) non-profit, so all donation and contributions
            are tax deductible. All donations are 100% directed to patient
            treatment and physician education in the underserved areas. All WHAT
            team members cover their own travel and accommodations for the
            mission trips. WHAT’s mission is dedicated to providing necessary
            care to the underserved by providing treatment, contributing
            essential supplies and equipment to maintain care, and cultivating
            educational training programs for physicans in under-serve areas.
            WHAT currently provides vascular and leg care in Honduras and
            Vietnam with future goals of expanding around the globe through
            mission trip instruction and sponsored programs with qualified
            physicians and partners.
          </div>

          <div>
            <h1 className=" text-3xl">Give a leg to an ulcer patient</h1>
            <p>$150| Provide wound care supplies for a patient 1 year</p>
            <p>$300| Provide wound care supplies for two patients for 1 year</p>
          </div>

          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
            className=" relative bottom-0 hover:bottom-2 duration-300"
          >
            <input type="hidden" name="cmd" value="_s-xclick"></input>

            <input
              type="hidden"
              name="hosted_button_id"
              value="6GF9YVGQVC6XW"
            ></input>

            <input
              name="submit"
              type="image"
              src={require("../imgs/icons/paypal.png")}
              alt="PayPal - The safer, easier way to pay online!"
              border="0"
              className=" w-[20%]"
            ></input>
          </form>
          <h1 className=" text-3xl">Want to donate supplies/ equipment?</h1>
          <p>
            Please contact us at{" "}
            <a href="mailto:Info@WhatCares.org" className=" text-blue-400">
              Info@WhatCares.org
            </a>{" "}
          </p>
        </div>

        <div className=" border-2 border-blue-600/50 rounded-lg py-4 px-2 mt-16 bg-white drop-shadow-dark-2">
          <h1 className=" text-3xl">
            Want to participate in a medical mission?
          </h1>
          <p>
            Please contact us at{" "}
            <a href="mailto:Info@WhatCares.org" className=" text-blue-400">
              Info@WhatCares.org
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
