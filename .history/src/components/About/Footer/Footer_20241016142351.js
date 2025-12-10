import React ,{useState} from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import { Link } from "react-router-dom";
import logo from "../../../img/logo.png";
import {  MdLogin } from "react-icons/md";

const Footer = () => {
  const [openLogInModal, setOpenLogInModal] = useState(false);
  return (
    <footer className="bg-Main text-textcolor py-0">
      
      <ItemsContainer />

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-1 text-textcolor text-sm pb-1 bg-Main"
      > <div className="relative">
      <p
        className="relative   rounded-full hover:bg-green-500 hover:text-blue-900 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out"
        onClick={setOpenLogInModal}
      >
        <MdLogin /> LOG IN
      </p>
    </div>
        <span onClick={setOpenLogInModal}> <MdLogin /></span>
        <span >Hospital Consumables Kenya Limited - All rights reserved. Copyright © 2024</span>

        {/* <SocialIcons Icons={Icons} /> */}
      </div>
    </footer>
  );
};

export default Footer;
