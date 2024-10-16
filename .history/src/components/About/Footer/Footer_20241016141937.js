import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import { Link } from "react-router-dom";
import logo from "../../../img/logo.png";

const Footer = () => {
  const [openLogInModal, setOpenLogInModal] = useState(false);
  return (
    <footer className="bg-Main text-textcolor py-0">
      
      <ItemsContainer />

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-1 text-textcolor text-sm pb-1 bg-Main"
      >
        <span></span>
        <span onClick={setOpenLogInModal}>Hospital Consumables Kenya Limited - All rights reserved. Copyright © 2024</span>

        {/* <SocialIcons Icons={Icons} /> */}
      </div>
    </footer>
  );
};

export default Footer;
