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

      <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
        className={`top-0 right-0 w-[35vw]md:w-175 h-flex  bg-White  py-8 px-4  my-20 rounded-lg p-10 pl-5 text-textColor fixed   ease-in-out duration-300 ${
          showSidenav
            ? "translate-x-40 bg-White opacity-100 "
            : "translate-x-full"
        }`}
        data-te-sidenav-init
      >
        <div className="flex items-end pr-40 gap-24 ">
          <Link to={"/"} className="flex items-center gap-2 drop-shadow-2xl">
            <img
              src={logo}
              className="w-[95vw] h-[10vh] object-contain right-5"
              alt="logo"
            />
            {/* <p className="text-headingColor text-xl font-bold"> City</p> */}
          </Link>
        </div>
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="gap-80"
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
      </motion>
    </>
  );
};

export default Sidenav;
