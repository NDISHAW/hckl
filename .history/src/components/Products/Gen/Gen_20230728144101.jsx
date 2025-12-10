import React, { useState } from "react";
import { labGen } from '../../../utils/data';
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import RowContainer from "../../RowContainer";

function Gen() {
const [filter, setFilter] = useState("LE_Hematology");
const [scrollValue, setScrollValue] = useState(0);
  return (
    <section
      className="w-full my-6"
      id="menu"
      // data-aos="fade-up-left"
      // data-aos-duration="3000"
    >
    <div className="w-full flex items-center justify-start lg:justify-center gap-8 overflow-x-scroll scrollbar-none">
      {labGen &&
        labGen.map((category) => (
          <motion.div
            scrollValue={scrollValue}
            whileTap={{ scale: 0.75 }}
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
              {category.urlParamName}
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
      
</section>
  );
}

export default Gen