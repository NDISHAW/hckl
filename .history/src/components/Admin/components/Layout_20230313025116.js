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
    <div className="w-screen h-auto flex flex-col bg-primary pr-60 ">
      <TopBar showNav={showNav} setShowNav={setShowNav} />
      <div
        className={`top-0 right-0 w-[115vw] md:w-175 h-flex  bg-white  py-8 px-4  my-20 rounded-lg p-10 pl-5 text-blue-900 fixed backdrop-blur-md drop-shadow-2xl font-bold ease-in-out duration-300 ${
          showSidenav ? "pl-56 translate-x-40 opacity-90  " : "translate-x-full"
        }`}
        data-te-sidenav-init
      >
        <SideBar showNav={showNav} />
      </div>
      <main
        className={`pt-16 transition-all duration-[400ms] ${
          showNav && !isMobile ? "pr-4" : ""
        }`}
      >
        <div className="px-4 md:px-16">
          {/* <Home /> */}
          <Products />
        </div>
      </main>
    </div>
  );
}
