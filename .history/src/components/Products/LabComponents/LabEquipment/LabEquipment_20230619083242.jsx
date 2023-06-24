import React, { useState, useEffect } from "react";
import {labEquipment} from "../../../../utils"
import { motion } from "framer-motion";
import NotFound from "../../../../img/NotFound.svg"
import { Icon } from "@iconify/react";
import { useStateValue } from "../../../../context/StateProvider";
import RowContainer from "../../../RowContainer";

export default function LabEquipment({ color }) {
//   const [openTab, setOpenTab] = React.useState(1);
  const [filter, setFilter] = useState("LE_Rhematology");
//   const [category, setCategory] = useState("Hematology");
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <section
      className="w-full my-6"
      id="menu"
      // data-aos="fade-up-left"
      // data-aos-duration="3000"
    >
      <div className="w-full h-auto flex flex-col items-center justify-center shadow-lg rounded">
        {/* <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-blue-300 to-blue-900 transition-all ease-in-out duration-100 mr-auto">
          Our Products
        </p> */}

        <div
          id="labEquipment"
          className="w-full flex items-center justify-start lg:justify-center gap-8 overflow-x-scroll scrollbar-none"
        >
          {labEquipment &&
            labEquipment.map((category) => (
              <motion.div
                scrollValue={scrollValue}
                whileTap={{ scale: 1.7 }}
                key={category.id}
                className={`group ${
                  filter === category.urlParamName ? "bg-blue-400 " : "bg-card"
                } w-44 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-blue-900 `}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    filter === category.urlParamName ? "bg-white" : "bg-Main"
                  } group-hover:bg-white flex items-center justify-center`}
                >
                  <Icon
                    icon="medical-icon:hospital"
                    className={`${
                      filter === category.urlParamName
                        ? "text-textColor"
                        : "text-white"
                    } group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={`font-semibold text-base ${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>
        <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category == filter)}
          />
        </div>
      </div>
    </section>
  );
}
