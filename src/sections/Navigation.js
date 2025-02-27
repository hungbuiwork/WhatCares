import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Projects", to: "/projects", dropdown: ["Honduras", "Vietnam"] },
    { name: "Team", to: "/team" },
    // { name: "Get Involved", to: "/contribute" },
  ];

  return (
    <nav
      className={`fixed w-full  z-50 transition-all duration-300 bg-base-100 backdrop-blur-sm  ${
        isScrolled ? "py-2" : "py-8"
      }`}
    >
      <div className={` mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="flex justify-between items-center">
          {/* Logo and Title Container */}
          <Link
            to="main"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className=" w-24 lg:w-32 rounded-lg drop-shadow-2xl ">
              <img
                src={require("../imgs/icons/logo.png")}
                alt="WhatCares Logo"
                className="group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className=" flex-col flex text-left">
              <h1
                className={` text-3xl lg:text-6xl font-extrabold leading-tight transition-opacity duration-300 `}
              >
                <span className="text-primary">What</span>
                <span className="text-gray-800">Cares</span>
              </h1>
              <span
                className={`text-sm text-gray-800  font-bold transition-opacity`}
              >
                World Health Access Team
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.to} className=" relative group">
                <a
                  href={item.to}
                  className="text-gray-800 hover:text-primary font-medium transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                  {!item.dropdown && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                  )}
                </a>
                {item?.dropdown && (
                  <div className=" flex-col hidden group-hover:flex absolute min-w-fit  shadow-lg rounded-sm p-2 border-l-primary border-l-2 bg-white">
                    {item.dropdown.map((sub_item) => (
                      <a
                        href={`${item.to}/${sub_item.toLowerCase()}`}
                        key={sub_item}
                        className=" text-left hover:cursor-pointer hover:text-primary"
                      >
                        {" "}
                        {sub_item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={"donate"}
              className="px-6 py-2.5 text-sm font-medium text-white bg-primary rounded-full hover:scale-105 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:cursor-pointer"
            >
              DONATE
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/80 shadow-sm text-gray-600 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open menu</span>
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5 relative">
                <span
                  className={`block w-6 h-0.5 bg-current transform transition duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-current transition duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-current transform transition duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100 visible mt-4"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg">
            {navItems.map((item) => (
              <div key={item.to} className="relative group">
                <a
                  href={item.to}
                  className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-primary hover:bg-blue-50 rounded-md transition-colors duration-200 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
                {item?.dropdown && (
                  <div className="flex-col hidden group-hover:flex absolute w-full z-20 shadow-lg rounded-sm p-2 border-l-primary border-l-2 bg-white/75 backdrop-blur-lg">
                    {item.dropdown.map((sub_item) => (
                      <a
                        href={`${item.to}/${sub_item.toLowerCase()}`}
                        key={sub_item}
                        className="block px-3 py-2 text-base text-gray-800 hover:text-primary hover:bg-blue-50 rounded-md transition-colors duration-200 cursor-pointer"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub_item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="contact"
              className="block px-3 py-2 text-base font-medium text-white bg-primary hover:bg-primary rounded-md transition-colors duration-200 cursor-pointer shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
