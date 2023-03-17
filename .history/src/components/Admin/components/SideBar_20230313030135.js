import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
// import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav }, ref) => {
  // const router = useLocation();

  return (
    <div ref={ref} className="absolute w-56 h-full bg-white shadow-sm  ">
      
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
