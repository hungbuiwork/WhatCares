import React from "react";
import sample_image from "../../imgs/team/carlos.jpg";

export const TeamMember = (props) => {
  let member = props.member;
  let name = member.name;
  let cred = member.cred;
  let image1 = member.image1;
  let image2 = member.image2
  let desc = member.desc;
  return (
    <div>
      <label for={name} className=" cursor-zoom-in relative bottom-0 hover:bottom-6 duration-300">
        <div className="m-2 md:m-3">
          <div className="card w-36 h-64 md:w-64 md:h-96 bg-base-100 shadow-xl drop-shadow-dark-2">
            <figure
              className=" h-48 md:h-72 bg-transparent"
              style={{
                backgroundImage: `url(${image1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></figure>
            <div className="card-body py-3">
              <h1 className="card-title m-auto leading-none text-base md:text-xl">
                {name} {cred && "("}{cred}{cred && ")"}
              </h1>
            </div>
          </div>
        </div>
      </label>

      <input type="checkbox" id={name} class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="text-3xl font-bold mb-6">
            {name} {cred && "("}{cred}{cred && ")"}
          </h3>

          <div>
            <img src={image1} className=" w-6/12 float-left mr-3"></img>
            <p class="py-4 text-left">{desc}</p>
          </div>
        </div>

        <label class="modal-backdrop" for={name}>
          Close
        </label>
      </div>
    </div>
  );
};
