import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { labEquipment, labReagents } from "../../../utils/data";
import { motion } from "framer-motion";
import { useStateValue } from "../../../context/StateProvider";
import { Icon } from "@iconify/react";
import RowContainer from "../../RowContainer";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }


 
export default function TabsComponent  ({ color }) {
  const [openTab, setOpenTab] = React.useState(1);
    const [filter, setFilter] = useState("Hematology");
  const [category, setCategory] = useState("Hematology");
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  
  useEffect(() => {}, [scrollValue, cartShow]);
 
  return (

      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-lg font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-Main bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                  setCategory(labEquipment);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Laborotay Equipment
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-lg font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-Main bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                  setCategory(labReagents);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
               Laborotay Reagents
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={
                    openTab === 1
                      ? "block w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll"
                      : "hidden"
                  }
                  id="link1"
                >
                  <div className="hidden md:flex gap-3 items-center">
               {/*Next buttons */}
               <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-lg bg-blue-300 hover:bg-blue-900 cursor-pointer  hover:shadow-lg flex items-center justify-center"
                onClick={() => setScrollValue(-200)}
              >
                <MdChevronLeft className="text-lg text-white" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-lg bg-blue-300 hover:bg-blue-900 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
                onClick={() => setScrollValue(200)}
              >
                <MdChevronRight className="text-lg text-white" />
              </motion.div>
            </div>
                  {labEquipment &&
                    labEquipment.map((category) => (
                      <motion.div
                        whileTap={{ scale: 0.75 }}
                        key={category.id}
                        className={`group ${
                          filter === category.urlParamName
                            ? "bg-blue-400 "
                            : "bg-card"
                        } w-44 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-blue-900 `}
                        onClick={() => setFilter(category.urlParamName)}
                      >
                        <div
                          className={`w-10 h-10 rounded-full shadow-lg ${
                            filter === category.urlParamName
                              ? "bg-white"
                              : "bg-Main"
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
                          className={`text-sm ${
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

                <div
                  className={
                    openTab === 2
                      ? "block w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll"
                      : "hidden"
                  }
                  id="link2"
                >
                  {labReagents &&
                    labReagents.map((category) => (
                      <motion.div
                        whileTap={{ scale: 0.75 }}
                        key={category.id}
                        className={`group ${
                          filter === category.urlParamName
                            ? "bg-blue-400 "
                            : "bg-card"
                        } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-blue-900 `}
                        onClick={() => setFilter(category.urlParamName)}
                      >
                        <div
                          className={`w-10 h-10 rounded-full shadow-lg ${
                            filter === category.urlParamName
                              ? "bg-white"
                              : "bg-Main"
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
                          className={`text-sm ${
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
              </div>
            </div>
            <div className="w-full">
              <RowContainer
                flag={false}
                data={foodItems?.filter((n) => n.category == filter)}
              />
            </div>
          </div>
        </div>
      </div>
 
  );
};
function TabsRender() {
  return (
    <>
      return <TabsComponent color="pink" />;
    </>
  );
}

// export default function TabsRender;