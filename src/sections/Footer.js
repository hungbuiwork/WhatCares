import React from "react";
import { FaMailBulk, FaPhone, FaLocationArrow } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-wrap justify-between gap-8">
        {/* Left Column: Contact Info */}
        <div className="w-full sm:w-5/12">
          <h2 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">
            Contact Us
          </h2>
          <div className="space-y-4">
            <a
              href="https://www.google.com/maps?q=4901+Centennial+Plaza+Way+Bakersfield,+CA+93312"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-3 hover:text-gray-200 transition-colors duration-200 group"
              aria-label="Visit our location on Google Maps"
            >
              <FaLocationArrow className="text-lg mt-1 group-hover:translate-x-1 transition-transform duration-200" />
              <p className="text-sm">
                4901 Centennial Plaza Way <br />
                Bakersfield, CA 93312
              </p>
            </a>
            <a
              href="tel:+6613878333"
              className="flex items-center space-x-3 hover:text-gray-200 transition-colors duration-200"
              aria-label="Call us"
            >
              <FaPhone className="text-lg" />
              <p className="text-sm">(661) 387-8333</p>
            </a>
            <a
              href="mailto:info@whatcares.org"
              className="flex items-center space-x-3 hover:text-gray-200 transition-colors duration-200"
              aria-label="Email us"
            >
              <FaMailBulk className="text-lg" />
              <p className="text-sm">info@whatcares.org</p>
            </a>
          </div>
        </div>

        {/* Right Column: Partners */}
        <div className="w-full sm:w-5/12">
          <h2 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">
            Our Partners
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <a
                href="https://www.hhpfoundation.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Hackett Hemwall Patterson Foundation"
              >
                <img
                  src="https://static.wixstatic.com/media/d26ee6_4b28185acba940eb911f8e489d9bc82d~mv2.png/v1/fill/w_256,h_256,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/hhp%20logo%20circle%20copy.png"
                  alt="Hackett Hemwall Patterson Foundation"
                  className="w-12 h-12 object-contain"
                />
              </a>
              <p className="text-sm font-medium">
                Hackett Hemwall Patterson Foundation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-10 pt-4 border-t border-white/10 text-center text-xs text-white/70">
        <p>&copy; 2025 What Cares. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
