import React from "react";

export const Action = (props) => {
  return (
    <div className="card lg:card-side w-full bg-base-100  m-3 ">
      <figure className=" border-blue-200 border-2 rounded-full h-[50%] w-[50%] lg:h-full lg:w-full my-auto aspect-square">
        <img
          src= {props.src}
          alt="Veins"
          className=" min-w-full min-h-full aspect-square"
        />
      </figure>
    
      <div className="card-bodyborder-2 border-x-green-200 rounded-2xl p-3">
      <h2 className="card-title m-auto text-3xl">{props.title}</h2>
        <p className=" text-left">{props.desc}</p>
      </div>
    </div>
  );
};
