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
          className="flex text-4xl text-red-600 items-center cursor-pointer fixed right-50 top-4 z-50"
          onClick={() => setShowSidenav(!showSidenav)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidenav(!showSidenav)}
          className="fixed  z-30 flex items-center cursor-pointer right-5 top-6"
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
        className={`top-0 right-0 w-[35vw]md:w-175 h-screen  bg-Main  p-10 pl-20 text-textColor fixed   ease-in-out duration-300 ${
          showSidenav ? "translate-x-40 " : "translate-x-full"
        }`}
        data-te-sidenav-init
      >
        <div className="flex items-end gap-24 object-cover">
          <Link to={"/"} className="flex items-center gap-2">
            <img
              src={logo}
              className="w-full h-90 object-contain top-5"
              alt="logo"
            />
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
