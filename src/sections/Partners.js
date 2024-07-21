import React from "react";
import partners from "../data/partners";

export const Partners = () => {
  return (
    <div className="">
      <div className="">
      
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
