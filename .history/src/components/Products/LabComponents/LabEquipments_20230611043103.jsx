import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import {
  labEquipment,
  labReagents,
  labGen,
  LRACategories,
} from "../../../utils/data";
import { motion } from "framer-motion";
import { useStateValue } from "../../../context/StateProvider";
import { Icon } from "@iconify/react";
import RowContainer from "../../RowContainer";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import NotFound from "../../../img/NotFound.svg";
import LabReagents from "./LabReagents";

export default function LabEquipments() {
  const [openTab, setOpenTab] = React.useState(1);
  const [filter, setFilter] = useState("LE_Hematology");
  const [category, setCategory] = useState("Hematology");
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);  

 const subcategories = LRACategories.filter(
    (category) => category.category === filter.category
  );

  const handleCategoryClick = (category, subcategory) => {
    setFilter({ category, subcategory });
  };

  const handleSubcategoryClick = (subcategory) => {
    setFilter({ ...filter, subcategory });
  };

  return (
    <section
      className="w-full my-6"
      id="menu"
      // data-aos="fade-up-left"
      // data-aos-duration="3000"
    >
      <div className="w-full h-auto flex flex-col items-center justify-center shadow-lg rounded">
        <div
          id="hospital"
          className="w-full flex items-center justify-start lg:justify-center gap-8 overflow-x-scroll scrollbar-none"
        >
          {labReagents &&
            labReagents.map((category) => (
              <motion.div
                scrollValue={scrollValue}
                whileTap={{ scale: 1.7 }}
                key={category.id}
                className={`group ${
                  filter.category === category.urlParamName
                    ? "bg-blue-400 "
                    : "bg-card"
                } w-44 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-blue-900 `}
                onClick={() =>
                  handleCategoryClick(
                    category.urlParamName,
                    subcategories[0]?.name
                  )
                }
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    filter.category === category.urlParamName
                      ? "bg-white"
                      : "bg-Main"
                  } group-hover:bg-white flex items-center justify-center`}
                >
                  <Icon
                    icon="medical-icon:hospital"
                    className={`${
                      filter.category === category.urlParamName
                        ? "text-textColor"
                        : "text-white"
                    } group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={`font-semibold text-base ${
                    filter.category === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        <div className="w-full"></div>
          {subcategories.length > 0 && (
            <div className="flex justify-center mt-4">
              {subcategories.map((subcategory) => (
                <button
                  key={subcategory.id}
                  className={`px-3 py-1 rounded-lg ${
                    filter.subcategory === subcategory.name
                      ? "bg-blue-400 text-white"
                      : "bg-gray-200 text-textColor"
                  } mx-2 focus:outline-none`}
                  onClick={() => handleSubcategoryClick(subcategory.name)}
                >
                  {subcategory.name}
                </button>
              ))}
            </div>
          )}

          {/* <div className="w-full">
            <RowContainer
              scrollValue={scrollValue}
              flag={false}
              data={foodItems?.filter(
                (n) =>
                  n.category === filter.category &&
                  n.subcategory === filter.subcategory
              )}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}  
//   return (
//     <div>
//       {labEquipment &&
//         labEquipment.map((category) => (
//           <motion.div
//             scrollValue={scrollValue}
//             whileTap={{ scale: 1.7 }}
//             key={category.id}
//             className={`group ${
//               filter === category.urlParamName ? "bg-blue-400 " : "bg-card"
//             } w-44 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-blue-900 `}
//             onClick={() => setFilter(category.urlParamName)}
//           >
//             <div
//               className={`w-10 h-10 rounded-full shadow-lg ${
//                 filter === category.urlParamName ? "bg-white" : "bg-Main"
//               } group-hover:bg-white flex items-center justify-center`}
//             >
//               <Icon
//                 icon="medical-icon:hospital"
//                 className={`${
//                   filter === category.urlParamName
//                     ? "text-textColor"
//                     : "text-white"
//                 } group-hover:text-textColor text-lg`}
//               />
//             </div>
//             <p
//               className={`font-semibold text-base ${
//                 filter === category.urlParamName
//                   ? "text-white"
//                   : "text-textColor"
//               } group-hover:text-white`}
//             >
//               {category.name}
//             </p>
//           </motion.div>
//         ))}
//       <div className="w-full">
//         <RowContainer
//           scrollValue={scrollValue}
//           flag={false}
//           data={foodItems?.filter((n) => n.category == filter)}
//         />
//       </div>
//     </div>
//   );
// }
