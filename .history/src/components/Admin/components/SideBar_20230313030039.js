import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
// import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav }, ref) => {
  // const router = useLocation();

  return (
    <div ref={ref} className="absolute w-56 h-full bg-white shadow-sm  ">
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
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
