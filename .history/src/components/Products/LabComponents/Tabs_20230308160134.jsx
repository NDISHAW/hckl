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
 