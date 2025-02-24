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
    { name: "Our Mission", to: "mission" },
    { name: "Projects", to: "projects" },
    { name: "Team", to: "team" },
    { name: "Donate", to: "contribute" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled
          ? " bg-gradient-to-b from-gray-900 to-transparent"
          : "bg-gray-900 py-4"
      }`}
    >
      <div
        className={` transition-all duration-100 mx-auto px-4 sm:px-6 lg:px-8 ${
          isScrolled ? " " : ""
        } `}
      >
        <div className="flex justify-between items-center ">
          {/* Logo and Title Container */}
          <Link
            to="main"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hidden md:flex items-center space-x-3 cursor-pointer group"
          >
            <div className=" w-40 rounded-lg shadow-sm">
              <img
                src={require("../imgs/icons/logo.png")}
                alt="WhatCares Logo"
                className=" group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className={`flex flex-col `}>
              <h1 className="text-7xl font-extrabold  leading-tight">
                <span className="text-blue-500">What</span>
                <span className="text-white">Cares</span>
              </h1>
              <span
                className={`text-sm text-gray-100 font-medium ${
                  isScrolled ? "hidden" : ""
                }`}
              >
                World Health Access Team
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white hover:text-blue-600 font-medium transition-colors duration-200 relative group cursor-pointer"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
            ))}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg  shadow-sm text-white hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200 cursor-pointer shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
