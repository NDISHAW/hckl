import React,{ useState } from 'react'
import { Tab } from '@headlessui/react'
import { labEquipment, labReagents } from "../../../utils/data";
import { motion } from "framer-motion";
import { useStateValue } from "../../../context/StateProvider"
import { Icon } from "@iconify/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TabsComponent() {
    const [filter, setFilter] = useState("hospital");

    const [{ foodItems }, dispatch] = useStateValue();
  let [categories] = useState({
    labEquipment,
    labReagents,
  });

  return (
    <div className="w-screen h-auto flex flex-col bg-primary scrollbar-hide">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 rounded-xl bg-blue-900/20">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((category, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
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
                      {category.name}
                    </p>

                    {/* {category.subCartegories?.map((sub) => (
                  <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                className="w-275 h-[575px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">
                    <div
                      className={`text-sm ${
                        filter === category.urlParamName
                          ? "text-white"
                          : "text-textColor"
                      } group-hover:text-white`}
                    >
                      {sub.Equipment}
                    </div>
                    <div
                      className={`text-sm ${
                        filter === category.urlParamName
                          ? "text-white"
                          : "text-textColor"
                      } group-hover:text-white`}
                    >
                      {sub.Reagents}
                    </div>
                  </motion.div>
                ))} */}
                  </motion.div>
                
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}