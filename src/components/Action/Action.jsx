import React from "react";

export const Action = (props) => {
  return (
    <div className="card  w-full lg:w-48  bg-base-100  m-3 items-center text-center">
      <figure className="m-10 border-blue-200 border-2 rounded-full w-[50vw] h-[50vw] md:w-[20vw] md:h-[20vw] relative bottom-0 hover:bottom-6 duration-300 my-auto">
        <img
          src= {props.src}
          alt="Veins"
          className=" min-w-full min-h-full aspect-square"
        />
      </figure>
    
      <div className="card-body border-0  p-3">
      <h2 className="card-title m-auto text-3xl text-center">{props.title}</h2>
        <p className=" text-left text-sm leading-relaxed">{props.desc}</p>
      </div>
    </div>
  );
};
