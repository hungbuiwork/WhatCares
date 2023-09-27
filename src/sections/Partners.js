import React from "react";
import partners from "../data/partners";

export const Partners = () => {
  return (
    <div className=" my-16">
      <div className="">
        Partner section coming Soon
        {partners.map((partner) => {
          return (
            <div>
              {false && (
                <a href={partner.link} target="_blank">
                  {partner.name}
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
