import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import { Link } from "react-router-dom";
import logo from "../../../img/logo.png";

const Footer = () => {
  return (
    <footer className="bg-Main text-textcolor py-4">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 h-234 py-7">
        
        {/* <div>
          <input
            type="text"
            placeholder="Enter Your ph.no"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
            Request Code
          </button>
        </div> */}
      </div>
      <ItemsContainer />

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-textcolor text-sm pb-8"
      >
        <span>Copyright © 2023</span>
        <span>Hospital Consumables Kenya Limited - All rights reserved.</span>

        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
