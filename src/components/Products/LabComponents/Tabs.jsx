import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { labEquipment, labReagents, labGen } from "../../../utils/data";
import { motion } from "framer-motion";
import { useStateValue } from "../../../context/StateProvider";
import { Icon } from "@iconify/react";
import RowContainer from "../../RowContainer";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import  NotFound  from '../../../img/NotFound.svg';
import LabReagents from "../LabComponents/LAbReagents/LabReagents";
import LabEquipments from "./LAbReagents/LabReagents";
import LabEquipment from "./LabEquipment/LabEquipment";
import LabReagentsComponent from "../../email";
import Gen from "../Gen/Gen";


 
export default function TabsComponent  ({ color }) {
  const [openTab, setOpenTab] = React.useState(1);
  const [filter, setFilter] = useState("LE_Hematology");
  const [category, setCategory] = useState("Hematology");
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  
  useEffect(() => {}, [scrollValue, cartShow]);
  return (
    <section className="w-full ">
      <div className="w-full">
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
          role="tablist"
        >
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center ">
            <a
              className={
                "text-lg font-bold uppercase px-5 py-1 shadow-lg rounded block leading-normal " +
                (openTab === 1
                  ? "text-white bg-blue-400"
                  : "text-" + color + "-600 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
                setFilter("LE_Hematology");
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Laboratory Equipment
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-lg font-bold uppercase px-5 py-1 shadow-lg rounded block leading-normal " +
                (openTab === 2
                  ? "text-white bg-blue-400"
                  : "text-" + color + "-600 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
                setFilter("LRA_Rhematology");
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              Laboratory Reagents
            </a>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <a
              className={
                "text-lg font-bold uppercase px-5 py-1 shadow-lg rounded block leading-normal " +
                (openTab === 3
                  ? "text-white bg-blue-400"
                  : "text-" + color + "-600 bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
                setFilter("LE_Rhematology");
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
              General laboratory Consumables
            </a>
          </li>
        </ul>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-1 flex-auto">
            <div className="tab-content tab-space">
              <div
                className={
                  openTab === 1
                    ? "w-full  flex items-center justify-start lg:justify-center gap-8 py-1 overflow-x-scroll"
                    : "hidden"
                }
                id="link1"
              >              
                <LabEquipment/>  
              </div>
              <div
                className={
                  openTab === 2
                    ? " w-full flex items-center justify-start lg:justify-center gap-8 py-1 overflow-x-scroll"
                    : "hidden"
                }
                id="link2"
              >
                <LabReagentsComponent/>
              </div>
              <div
                className={
                  openTab === 3
                    ? " w-full flex items-center justify-start lg:justify-center gap-8 py-1 overflow-x-scroll"
                    : "hidden"
                }
                id="gen"
              >
                <Gen />
              </div>
            </div>
          </div>
          <div className="w-full">
          </div>
        
        </div>
      </div>
    </section>
  );
};
