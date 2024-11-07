import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const { mode } = useSelector((state) => state.darkMode);
  return (
    <footer
      className={
        mode
          ? "bg-slate-900 text-white py-8 px-4 md:px-8 lg:px-16 font-title"
          : "bg-sky-950 text-white py-8 px-4 md:px-8 lg:px-16 font-title"
      }
      id="contact"
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 font-title">
        {/* Contact Section */}
        <div>
          <h3 className="text-white font-title mb-4">CONTACT</h3>
          <p className="text-sm mb-2">
            1247/Plot No. 39, 15th Phase, Colony, Kkatpally, Hyderabad
          </p>
          <p className="text-sm mb-2">+91 987-654-3210</p>
          <p className="text-sm mb-2">+91 123-456-7890</p>
          <p className="text-sm">info@example.com</p>
          <p className="text-sm">info@example.com</p>
        </div>

        {/* Our Links Section */}
        <div>
          <h3 className="text-white  mb-4 font-title">OUR LINKS</h3>
          <ul>
            <li className="text-sm mb-2 hover:text-white cursor-pointer">
              Home
            </li>
            <li className="text-sm mb-2 hover:text-white cursor-pointer">
              About Us
            </li>
            <li className="text-sm mb-2 hover:text-white cursor-pointer">
              Services
            </li>
            <li className="text-sm mb-2 hover:text-white cursor-pointer">
              Team
            </li>
            <li className="text-sm mb-2 hover:text-white cursor-pointer">
              Blog
            </li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div>
          <h3 className="text-white font-title mb-4">OUR SERVICES</h3>
          <ul>
            <li className="text-sm mb-2 hover:text-white cursor-pointer">
              Strategy & Research
            </li>
            <li className="text-sm mb-2 hover:text-white cursor-pointer">
              Fast Delivery
            </li>
            <li className="text-sm mb-2 hover:text-white cursor-pointer">
              Seat Reservation
            </li>
            <li className="text-sm mb-2 hover:text-white cursor-pointer">
              Pickup In Store
            </li>
            <li className="text-sm mb-2 hover:text-white cursor-pointer">
              Our Menu
            </li>
          </ul>
        </div>

        {/* Help Center Section */}
        <div>
          <h3 className="text-white font-title mb-4">HELP CENTER</h3>
          <ul>
            <li className="text-sm mb-2 hover:text-white cursor-pointer">
              FAQ
            </li>
            <li className="text-sm mb-2 hover:text-white cursor-pointer">
              Shop
            </li>
            <li className="text-sm mb-2 hover:text-white cursor-pointer">
              Category Filter
            </li>
            <li className="text-sm mb-2 hover:text-white cursor-pointer">
              Testimonials
            </li>
            <li className="text-sm mb-2 hover:text-white cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm text-gray-500">
          Copyright 2024 All rights reserved.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Crafted with <span className="text-red-500">❤️</span> by DexignZone
        </p>
      </div>
    </footer>
  );
};

export default Contact;
