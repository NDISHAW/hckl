import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { labEquipment, labReagents, labGen } from "../../../utils/data";
import { motion } from "framer-motion";
import { useStateValue } from "../../../context/StateProvider";
import { Icon } from "@iconify/react";
import RowContainer from "../../RowContainer";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import NotFound from "../../../img/NotFound.svg";
import LabReagents from "./LabReagents";

export default function LabEquipments() {
    
  return (
    <div>
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
  );
}
