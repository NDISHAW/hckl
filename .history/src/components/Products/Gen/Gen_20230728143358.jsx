import React, { useState } from "react";
import { labGen } from '../../../utils/data';
import NotFound
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { NotFound } from '...';

function Gen() {
const [filter, setFilter] = useState("LE_Hematology");
const [scrollValue, setScrollValue] = useState(0);
  return (
    <div>
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
  );
}

export default Gen