import React from "react";
import sample_image from "../../imgs/team/carlos.jpg";

export const TeamMember = (props) => {
  let member = props.member;
  let name = member.name;
  let cred = member.cred;
  let image1 = member.image1;
  let image2 = member.image2;
  let desc = member.desc;
  let images = member?.images;
  return (
    <div className=" rounded-3xl">
      <label
        for={name}
        className="flex flex-col w-60 hover:cursor-zoom-in group"
      >
        <div className="overflow-hidden rounded-full scale-100 group-hover:scale-105 duration-150 aspect-square">
          <img
            src={image1}
            className="scale-110 group-hover:scale-100 duration-300 "
          ></img>
        </div>
        <div>
          <h3 class="text-xl font-bold my-6">
            {name} {cred && "("}
            {cred}
            {cred && ")"}
          </h3>
        </div>
      </label>

      <input type="checkbox" id={name} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* This button closes the modal when clicked */}
            <label
              htmlFor={name}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </label>
          </form>
          <h3 className="text-3xl font-bold mb-6">
            {name} {cred && "("}
            {cred}
            {cred && ")"}
          </h3>
          <div className="py-4 lg:px-8  ">
            {images?.map((imageURL, i) => {
              return <img src={imageURL} key={i} className=" mb-4"></img>;
            })}{" "}
            <p className="text-left indent-8">{desc}</p>{" "}
          </div>
        </div>

        <label className="modal-backdrop" htmlFor={name}></label>
      </div>
    </div>
  );
};
