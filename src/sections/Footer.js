import React from "react";
import { FaMailBulk, FaPhone, FaLocationArrow } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-wrap justify-evenly space-y-6 sm:space-y-0">
        {/* Address Section */}
        <div className="flex items-center space-x-2">
          <a
            href="https://www.google.com/maps?q=4901+Centennial+Plaza+Way+Bakersfield,+CA+93312"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:underline"
            aria-label="Visit our location on Google Maps"
          >
            <FaLocationArrow className="text-xl" />
            <p className="text-sm">
              4901 Centennial Plaza Way <br />
              Bakersfield, CA 93312
            </p>
          </a>
        </div>

        {/* Phone Section */}
        <div className="flex items-center space-x-2">
          <a
            href="tel:+6613878333"
            className="flex items-center space-x-2 hover:underline"
            aria-label="Call us"
          >
            <FaPhone className="text-xl" />
            <p className="text-sm">(661) 387-8333</p>
          </a>
        </div>

        {/* Email Section */}
        <div className="flex items-center space-x-2">
          <a
            href="mailto:info@whatcares.org"
            className="flex items-center space-x-2 hover:underline"
            aria-label="Email us"
          >
            <FaMailBulk className="text-xl" />
            <p className="text-sm">info@whatcares.org</p>
          </a>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-6 text-center text-sm">
        <p>&copy; 2025 What Cares. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
