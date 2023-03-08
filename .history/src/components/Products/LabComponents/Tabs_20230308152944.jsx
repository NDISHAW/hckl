import React,{ useState } from 'react'
import { Tab } from '@headlessui/react'
import { labEquipment, labReagents } from "../../../utils/data";
import { motion } from "framer-motion";
import { useStateValue } from "../../../context/StateProvider"
import { Icon } from "@iconify/react";
import RowContainer from '../../RowContainer';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TabsComponent() {
  const [filter, setFilter] = useState("Hematology");

  const [{ foodItems }, dispatch] = useStateValue();
  let [categories] = useState({
    labEquipment: [
      {
        id: 0,
        urlParamName: "Hematology",
        // logo: AlipineIcon,
        text: `Alpine`,
        width: "150px",
      },
      {
        id: 2,
        urlParamName: "Clinichal Chemistry",
        // logo: FerrariIcon,
        text: `Karma`,
        width: "180px",
      },
      {
        id: 3,
        urlParamName: "Molecular Diagnostics",
        // logo: KarmaIcon,
        text: `Karma`,
        width: "180px",
      },
      {
        id: 4,
        urlParamName: "Immunofluorescent",
        // logo: FerrariIcon,
        text: `Karma`,
        width: "180px",
      },
      {
        id: 5,
        urlParamName: "ELISA",
        // logo: BugattiIcon,
        text: `Karma`,
        width: "180px",
      },
      {
        id: 6,
        urlParamName: "Chemiluminecents",
        // logo: GeometryIcon,
        text: `Geometry`,
        width: "160px",
      },
      {
        id: 7,
        urlParamName: "Immmunoblots",
        // logo: LamborghiniIcon,
        text: `Geometry`,
        width: "160px",
      },
      // {
      //   id: 8,
      //   // logo: TeslaIcon,
      //   text: `Geometry`,
      //   width: "160px",
      // },
    ],
    labReagents: [
      {
        id: 0,
        urlParamName: "Rhematology",
        // logo: LamborghiniIcon,
        text: `Geometry`,
        width: "160px",
      },
      {
        id: 2,
        urlParamName: "Hepatology",
        // logo: KarmaIcon,
        text: `Karma`,
        width: "180px",
      },
      {
        id: 3,
        urlParamName: "Gastroenterology",
        // logo: FerrariIcon,
        text: `Ferrari`,
        width: "150px",
      },
      {
        id: 5,
        urlParamName: "Neurology",
        // logo: BugattiIcon,
        text: `Bugatti`,
        width: "150px",
      },
      {
        id: 6,
        urlParamName: "Dermatology",
        // logo: GeometryIcon,
        text: `Geometry`,
        width: "160px",
      },
      {
        id: 7,
        urlParamName: "ClinicalChemistry",
        // logo: LamborghiniIcon,
        text: `Bugatti`,
        width: "150px",
      },
      {
        id: 8,
        urlParamName: "Hematology",
        // logo: FerrariIcon,
        text: `Ferrari`,
        width: "150px",
      },
      {
        id: 9,
        urlParamName: "Molecular",
        // logo: TeslaIcon,
        text: `Bugatti`,
        width: "150px",
      },
      {
        id: 10,
        urlParamName: "Cytology",
        // logo: FerrariIcon,
        text: `Ferrari`,
        width: "150px",
      },
    ],
  });

  return (
    <div className="w-screen h-screen flex flex-col bg-primary scrollbar-none">
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
              onClick={() => setFilter(category.urlParamName)}
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels
          // id="ListSport"
          className={`w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none `}
          onClick={setFilter}
        >
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              // className={classNames(
              //   "rounded-xl bg-white p-3",
              //   "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              // )}
            >
              <div className="w-screen flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
                {posts.map((post) => (
                  <motion.div
                    whileTap={{ scale: 0.75 }}
                    key={post.id}
                    className={`group ${
                      filter === posts.urlParamName ? "bg-blue-400 " : "bg-card"
                    } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-blue-900 `}
                    onClick={() => setFilter(posts.urlParamName)}
                  >
                    <div
                      className={`w-10 h-10 rounded-full shadow-lg ${
                        filter === post.urlParamName ? "bg-white" : "bg-Main"
                      } group-hover:bg-white flex items-center justify-center`}
                    >
                      <Icon
                        icon="medical-icon:hospital"
                        className={`${
                          filter === post.urlParamName
                            ? "text-textColor"
                            : "text-white"
                        } group-hover:text-textColor text-lg`}
                      />
                    </div>
                    <p
                      className={`text-sm ${
                        filter === post.urlParamName
                          ? "text-white"
                          : "text-textColor"
                      } group-hover:text-white`}
                    >
                      {post.urlParamName}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}