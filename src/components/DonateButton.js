import React from "react";
import { Link } from "react-router-dom";

const DonateButton = () => {
  return (
    <Link
      to="/donate" // Update this with your donate route
      className="fixed top-[20%] left-0 transform -translate-y-1/2  btn btn-secondary  text-white font-bold py-3 px-4 rounded-r-lg rounded-l-none shadow-lg z-50 flex items-center hover:scale-105"
    >
      Donate
    </Link>
  );
};

export default DonateButton;
