import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import { Link } from "react-router-dom";
import logo from "../../../img/logo.png";

const Footer = () => {
  return (
    <footer className="bg-Main text-textcolor py-4">
      <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-teal-400">
            <Link to={"/"} className="flex items-center gap-2 ">
              <img
                src={logo}
                className="w-[125vh] h-[10vh] object-fill right-5"
                alt="logo"
              />
              {/* <p className="text-headingColor text-xl font-bold"> City</p> */}
            </Link>
          </span>
        </h1>
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
