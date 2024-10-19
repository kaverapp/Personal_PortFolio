import React, { useState, useEffect } from "react";
// import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gradient-to-r from-blue-200 to-black text-white py-8" aria-label="Site footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Company Name</h2>
            <p className="mb-4">Providing innovative solutions since 2010</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                {/* <FaFacebook className="text-2xl hover:text-blue-300 transition-colors duration-300" /> */}
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                {/* <FaTwitter className="text-2xl hover:text-blue-300 transition-colors duration-300" /> */}
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                {/* <FaLinkedin className="text-2xl hover:text-blue-300 transition-colors duration-300" /> */}
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              {["Home", "About Us", "Services", "Contact"].map((link) => (
                <li key={link} className="mb-2">
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:text-blue-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul>
              <li className="flex items-center mb-2">
                {/* <FaEnvelope className="mr-2" /> */}
                <a
                  href="mailto:info@company.com"
                  className="hover:text-blue-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                >
                  info@company.com
                </a>
              </li>
              <li className="flex items-center mb-2">
                {/* <FaPhone className="mr-2" /> */}
                <a
                  href="tel:+1234567890"
                  className="hover:text-blue-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                {/* <FaMapMarkerAlt className="mr-2" /> */}
                <span>123 Business St, City, Country</span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news and offers</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2 px-3 w-full text-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300 py-2 px-4 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-300">
          <p className="text-center">
            © {currentYear} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

