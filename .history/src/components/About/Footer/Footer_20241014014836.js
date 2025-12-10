import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import { Link } from "react-router-dom";
import logo from "../../../img/logo.png";

const Footer = () => {
  return (
    <footer className="bg-Main text-textcolor py-">
      
      <ItemsContainer />

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-textcolor text-sm pb-8"
      >
        <span></span>
        <span>Hospital Consumables Kenya Limited - All rights reserved.Copyright © 2023</span>

        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
