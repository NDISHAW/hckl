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
  const [Lfilter, setLFilter] = useState({
    category: labReagents[0]?.urlParamName || "",
    // subcategory: "Connective tissue diseases",
    subcategory: LRACategories[0]?.urlParamName || "",
  });
  const [category, setCategory] = useState("Hematology");
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);

  const subcategories = LRACategories.Lfilter(
    (category) => category.category === Lfilter.category
  );

  const handleCategoryClick = (category, subcategory) => {
    setLFilter({ category, subcategory });
  };

  const handleSubcategoryClick = (subcategory) => {
    setLFilter({ ...Lfilter, subcategory });
  };

  return (
    <section className="w-full my-6" id="menu">
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
                  Lfilter.category === category.urlParamName
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
                    Lfilter.category === category.urlParamName
                      ? "bg-white"
                      : "bg-Main"
                  } group-hover:bg-white flex items-center justify-center`}
                >
                  <Icon
                    icon="medical-icon:hospital"
                    className={`${
                      Lfilter.category === category.urlParamName
                        ? "text-textColor"
                        : "text-white"
                    } group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={`font-semibold text-base ${
                    Lfilter.category === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>
        {subcategories.length > 0 && (
          <div className="flex justify-center mt-4">
            {subcategories.map((subcategory) => (
              <button
                key={subcategory.id}
                className={`px-3 py-1 rounded-lg ${
                  Lfilter.subcategory === subcategory.name
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
            data={foodItems?.Lfilter(
              (n) =>
                n.category === Lfilter.category &&
                n.subcategory === Lfilter.subcategory
            )}
          />
        </div> */}
      </div>
    </section>
  );
}

// import React, { useState, useEffect } from "react";
// import { Tab } from "@headlessui/react";
// import {
//   labEquipment,
//   labReagents,
//   labGen,
//   LRACategories,
// } from "../../../utils/data";
// import { motion } from "framer-motion";
// import { useStateValue } from "../../../context/StateProvider";
// import { Icon } from "@iconify/react";
// import RowContainer from "../../RowContainer";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// import NotFound from "../../../img/NotFound.svg";
// import LabReagents from "./LabReagents";

// export default function LabEquipments() {
//   const [openTab, setOpenTab] = React.useState(1);
//   // const [Lfilter, setLFilter] = useState("LRA_Rhematology");
//    const [Lfilter, setLFilter] = useState({
//      category: "LE_Hematology",
//      subcategory: "",
//    });
//   const [category, setCategory] = useState("Hematology");
//   const [{ foodItems, cartShow }, dispatch] = useStateValue();
//   const [scrollValue, setScrollValue] = useState(0);

//   useEffect(() => {}, [scrollValue, cartShow]);

//  const subcategories = LRACategories.Lfilter(
//     (category) => category.category === Lfilter.category
//   );

//   const handleCategoryClick = (category, subcategory) => {
//     setLFilter({ category, subcategory });
//   };

//   const handleSubcategoryClick = (subcategory) => {
//     setLFilter({ ...Lfilter, subcategory });
//   };

//   return (
//     <section
//       className="w-full my-6"
//       id="menu"
//       // data-aos="fade-up-left"
//       // data-aos-duration="3000"
//     >
//       <div className="w-full h-auto flex flex-col items-center justify-center shadow-lg rounded">
//         <div
//           id="hospital"
//           className="w-full flex items-center justify-start lg:justify-center gap-8 overflow-x-scroll scrollbar-none"
//         >
//           {labReagents &&
//             labReagents.map((category) => (
//               <motion.div
//                 scrollValue={scrollValue}
//                 whileTap={{ scale: 1.7 }}
//                 key={category.id}
//                 className={`group ${
//                   Lfilter.category === category.urlParamName
//                     ? "bg-blue-400 "
//                     : "bg-card"
//                 } w-44 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-blue-900 `}
//                 onClick={() =>
//                   handleCategoryClick(
//                     category.urlParamName,
//                     subcategories[0]?.name
//                   )
//                 }
//               >
//                 <div
//                   className={`w-10 h-10 rounded-full shadow-lg ${
//                     Lfilter.category === category.urlParamName
//                       ? "bg-white"
//                       : "bg-Main"
//                   } group-hover:bg-white flex items-center justify-center`}
//                 >
//                   <Icon
//                     icon="medical-icon:hospital"
//                     className={`${
//                       Lfilter.category === category.urlParamName
//                         ? "text-textColor"
//                         : "text-white"
//                     } group-hover:text-textColor text-lg`}
//                   />
//                 </div>
//                 <p
//                   className={`font-semibold text-base ${
//                     Lfilter.category === category.urlParamName
//                       ? "text-white"
//                       : "text-textColor"
//                   } group-hover:text-white`}
//                 >
//                   {category.name}
//                 </p>
//               </motion.div>
//             ))}
//         </div>
//         {subcategories.length > 0 && (
//           <div className="flex justify-center mt-4">
//             {subcategories.map((subcategory) => (
//               <button
//                 key={subcategory.id}
//                 className={`px-3 py-1 rounded-lg ${
//                   Lfilter.subcategory === subcategory.name
//                     ? "bg-blue-400 text-white"
//                     : "bg-gray-200 text-textColor"
//                 } mx-2 focus:outline-none`}
//                 onClick={() => handleSubcategoryClick(subcategory.name)}

//               >
//                 {subcategory.name}
//               </button>
//             ))}
//           </div>
//         )}

//         <div className="w-full">
//             <RowContainer
//               scrollValue={scrollValue}
//               flag={false}
//               data={foodItems?.Lfilter(
//                 (n) =>
//                   n.category === Lfilter.category &&
//                   n.subcategory === Lfilter.subcategory
//               )}
//             />
//           </div>
//       </div>
//     </section>
//   );
// }

//   return (
//     <div>
//       {labEquipment &&
//         labEquipment.map((category) => (
//           <motion.div
//             scrollValue={scrollValue}
//             whileTap={{ scale: 1.7 }}
//             key={category.id}
//             className={`group ${
//               Lfilter === category.urlParamName ? "bg-blue-400 " : "bg-card"
//             } w-44 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-blue-900 `}
//             onClick={() => setLFilter(category.urlParamName)}
//           >
//             <div
//               className={`w-10 h-10 rounded-full shadow-lg ${
//                 Lfilter === category.urlParamName ? "bg-white" : "bg-Main"
//               } group-hover:bg-white flex items-center justify-center`}
//             >
//               <Icon
//                 icon="medical-icon:hospital"
//                 className={`${
//                   Lfilter === category.urlParamName
//                     ? "text-textColor"
//                     : "text-white"
//                 } group-hover:text-textColor text-lg`}
//               />
//             </div>
//             <p
//               className={`font-semibold text-base ${
//                 Lfilter === category.urlParamName
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
//           data={foodItems?.Lfilter((n) => n.category == Lfilter)}
//         />
//       </div>
//     </div>
//   );
// }
