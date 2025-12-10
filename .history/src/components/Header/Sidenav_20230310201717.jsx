import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { motion } from "framer-motion";

const Sidenav = () => {
  const [showSidenav, setShowSidenav] = useState(false);

  return (
    <>
      {showSidenav ? (
        <button
          className="flex text-4xl text-red-300 items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidenav(!showSidenav)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidenav(!showSidenav)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={
          "fixed top-0 left-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-Main shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
        }
        data-te-sidenav-init
      >
        <div className="flex items-end gap-24">
          <Link to={"/"} className="flex items-center gap-2">
            <img src={logo} className="w-[95vw] h-90 object-cover" alt="logo" />
            {/* <p className="text-headingColor text-xl font-bold"> City</p> */}
          </Link>
        </div>
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="gap-24"
        >
          <Link to={"/"}>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
          </Link>
          <Link to={"/products"}>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Products
            </li>
          </Link>
          <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
            Contact Us
          </li>
        </motion.ul>
      </div>
    </>
  );
};

export default Sidenav;
