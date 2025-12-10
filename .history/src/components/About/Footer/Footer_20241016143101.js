import React ,{useState} from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";
import { Link } from "react-router-dom";
import logo from "../../../img/logo.png";
import {  MdLogin } from "react-icons/md";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import SignIn from ".";

const Footer = () => {
  const [openLogInModal, setOpenLogInModal] = useState(false);
  const login = async () => {

    if (!user) {
      setOpenLogInModal(true)
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
      console.log(user);
      
    } else {
      setIsMenu(!isMenu);
      setOpenLogInModal(false);
    }
  };
  return (
    <footer className="bg-Main text-textcolor py-0">
      
      <ItemsContainer />

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-1 text-textcolor text-sm pb-1 bg-Main"
      >
        <span onClick={setOpenLogInModal}> <MdLogin onClick={setOpenLogInModal} /></span>
        <span >Hospital Consumables Kenya Limited - All rights reserved. Copyright © 2024</span>

        {/* <SocialIcons Icons={Icons} /> */}
      </div>
    </footer>
  );
};

export default Footer;
