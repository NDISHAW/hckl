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
        className={`top-0 right-0 w-[35vw]md:w-375 h-screen  bg-Main  p-10 pl-20 text-textColor fixed  z-40  ease-in-out duration-300 ${
          showSidenav ? "translate-x-0 " : "translate-x-full"
        }`}
      >
       <div className="flex items-center gap-8">
          <Link to={"/"} className="flex items-center gap-2">
            <img src={logo} className="w-80 h-90 object-cover" alt="logo" />
            {/* <p className="text-headingColor text-xl font-bold"> City</p> */}
          </Link>
        </div>
        <motion.ul>
          
        </motion.ul>
      </div>
      
    </>
  );
};

export default Sidenav;
