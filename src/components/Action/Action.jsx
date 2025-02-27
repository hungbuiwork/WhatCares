import React from "react";

export const Action = (props) => {
  return (
    <div className=" flex">
      <div className=" flex-1 h-80 w-80 rounded-[5rem] overflow-hidden border-4 relative">
        <img src={props.src} className="absolute h-full w-full "></img>
      </div>
      <div className=" flex-[3] text-left">
        <h1 className=" text-6">{props.title}</h1>
        <h2>{props.desc}</h2>
      </div>
    </div>
  );
};
