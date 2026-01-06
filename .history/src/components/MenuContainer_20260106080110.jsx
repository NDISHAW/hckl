import React, {  useState } from "react";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import { Icon } from "@iconify/react";
import './Header/Header.css'


const MenuContainer = () => {
  const [filter, setFilter] = useState("hospital");

  const [{ foodItems }, dispatch] = useStateValue();

  return (
    <section
      className="w-full my-"
      id="menu"
    >
      <div className="w-full h-auto flex flex-col items-center justify-center shadow-lg rounded">
        <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category == filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
