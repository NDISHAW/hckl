import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { labEquipment, labReagents } from "../../../utils/data";
import { motion } from "framer-motion";
import { useStateValue } from "../../../context/StateProvider";
import { Icon } from "@iconify/react";
import RowContainer from "../../RowContainer";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TabsComponent() {
  const [filter, setFilter] = useState("Hematology");
  const [category, setCategory] = useState("Hematology");
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
 const [openTab, setOpenTab] = useState(1);


return (
        <div>
            <div className="container mx-auto mt-12">
                <div className="flex flex-col items-center justify-center max-w-xl">
                    <ul className="flex space-x-2">
                        <li>
                            <a
                                href="#"
                                onClick={() => setOpenTab(1)}
                                className={` ${openTab === 1 ? "bg-purple-600 text-white" : ""} inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`}
                            >
                                React Tabs 1
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={() => setOpenTab(2)}
                                className={` ${openTab === 2 ? "bg-purple-600 text-white" : ""} inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`}


                            >
                                React Tabs 2
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={() => setOpenTab(3)}
                                className={` ${openTab === 3 ? "bg-purple-600 text-white" : ""} inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`}


                            >
                                React Tabs 3
                            </a>
                        </li>
                    </ul>
                    <div className="p-3 mt-6 bg-white border">
                        <div className={openTab === 1 ? "block" : "hidden"}>
                            {" "}
                            React JS with Tailwind CSS Tab 1 Content show
                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"}>
                            React JS with Tailwind CSS Tab 2 Content show
                        </div>
                        <div className={openTab === 3 ? "block" : "hidden"}>
                            React JS with Tailwind CSS Tab 3 Content show
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );