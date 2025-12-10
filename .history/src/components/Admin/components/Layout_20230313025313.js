/* eslint-disable no-restricted-globals */
import { useState, useEffect, Fragment } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import { Transition } from "@headlessui/react";
import Home from '../pages/Home';
import Products from "../../Products/Products";

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (innerWidth <= 640) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize);
    }

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div >
      <TopBar showNav={showNav} setShowNav={setShowNav} />
      <div
        className={`top-0 right-0 w-[115vw] md:w-175 h-flex  bg-white  py-8 px-4  my-20 rounded-lg p-10 pl-5 text-blue-900 fixed backdrop-blur-md drop-shadow-2xl font-bold ease-in-out duration-300 ${
          showNav ? "pl-56 translate-x-40 opacity-90  " : "translate-x-full"
        }`}
        data-te-sidenav-init
      >
        <div className="flex items-end pr-40 gap-24 ">
          <Link to={"/"} className="flex items-center gap-2 ">
            <img
              src={logo}
              className="w-[125vh] h-[10vh] object-fill right-5"
              alt="logo"
            />
            {/* <p className="text-headingColor text-xl font-bold"> City</p> */}
          </Link>
        </div>
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="gap-6 mt-4"
        >
          <Link to={"/"} className="flex items-center mt-4">
            <li className="text-xl text-blue-900 hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer mt-4">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="text-lg text-blue-900 hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer mt-4">
              About Us
            </li>
          </Link>
          <Link to={"/products"}>
            <li className="text-lg text-blue-900 hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer mt-4">
              Products
            </li>
          </Link>
          <li className="text-lg text-blue-900 hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer mt-4">
            Contact Us
          </li>
        </motion.ul>
    </div>
  );
}
