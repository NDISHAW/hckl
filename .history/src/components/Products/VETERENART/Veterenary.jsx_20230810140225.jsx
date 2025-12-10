import React, { useEffect, useState, useRef } from "react";
import NotFound from "../../../img/NotFound.svg";
import LabContainer from "../LabComponents/LAbReagents/LabContainer";

import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../firebase.config";
import { useStateValue } from "../../../context/StateProvider";
import { actionType } from "../../../context/reducer";
import { Icon } from "@iconify/react";
import { MdShoppingBasket } from "react-icons/md";
import { MdClose } from "react-icons/md";
import Modal from "./modal";
import { motion } from "framer-motion";
import { LRACategories, categories } from "../../../utils/data";
import { labReagents as RLA, veterenary, vet } from "../../../utils/data";
import RowContainer from "../../RowContainer";
import Loader from "../../Loader";
import VetContainer from "./VetContainer";

export default function Veterenary({ flag, data,  }) {

    const [isOpen, setIsOpen] = useState(false);
    const [filter, setFilter] = useState({
      category: "DOGS",
      subcategory: "",
    });
    const [{ LabReagents, foodItems, cartItems }, dispatch] = useStateValue();
    const [labReagents, setLabReagents] = useState([]);
    const [subcategory, setSubcategory] = useState("");
    const subcategories = veterenary.filter(
      (category) => category.category === filter.category
    );

    const handleCategoryClick = (category) => {
      setFilter({
        category,
        subcategory: "",
      });
      setSubcategory("");
    };

    const handleSubcategoryClick = (subcategory) => {
      setFilter((prevFilter) => ({
        ...prevFilter,
        subcategory,
      }));
    };

    const [items, setItems] = useState([]);
    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() => {}, [scrollValue]);

    // Fetch LabReagents from Firestore
    useEffect(() => {
      const fetchLabReagents = async () => {
        const labReagentsColRef = collection(firestore, "LabReagents");
        const labReagentsSnapshot = await getDocs(labReagentsColRef);

        const updatedLabReagents = [];
        console.log(updatedLabReagents);
        for (const doc of labReagentsSnapshot.docs) {
          const labReagentData = doc.data();
          const subcollectionRef = collection(doc.ref, "details");
          const subcollectionSnapshot = await getDocs(subcollectionRef);
          const subcollectionData = subcollectionSnapshot.docs.map((subDoc) =>
            subDoc.data()
          );

          labReagentData.subcollectionData = subcollectionData;
          updatedLabReagents.push({
            id: doc.id,
            data: labReagentData,
          });
        }

        setLabReagents(updatedLabReagents);
        dispatch({
          type: actionType.SET_LAB_REAGENTS,
          LabReagents: updatedLabReagents,
        });
      };

      fetchLabReagents();
    }, []);

    useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(items));
      dispatch({
        type: actionType.SET_CARTITEMS,
        cartItems: items,
      });
    }, [items]);

    return (
      <div
        className={`w-full flex items-center gap-1 my-1 scroll-smooth ${
          flag
            ? "overflow-x-scroll scrollbar-none"
            : "overflow-x-hidden flex-wrap justify-center"
        }`}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div
          id="hospital"
          className="w-full flex items-center justify-start lg:justify-center gap-8 overflow-x-scroll scrollbar-none"
        >
          {vet &&
            vet.map((category) => (
              <motion.div
                scrollValue={scrollValue}
                whileTap={{ scale: 1.7 }}
                key={category.id}
                className={`group ${
                  filter.category === category.urlParamName
                    ? "bg-blue-400 "
                    : "bg-card"
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-blue-900 `}
                onClick={() => handleCategoryClick(category.urlParamName)}
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
                  className={`text-sm ${
                    filter.category === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>
        <div className="w-full flex items-center justify-start lg:justify-center gap-8 overflow-x-scroll scrollbar-none">
          <p className="px-3 py-1 rounded-lg">Filter Here`  -:</p>
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
        </div>

        <div className="w-full">
          {/* <LabContainer
            scrollValue={scrollValue}
            flag={false}
            data={LabReagents?.filter(
              (item) =>
                item.data.category === filter.category &&
                (filter.subcategory === "" ||
                  item.data.SubCartegory === filter.subcategory)
            )}
          /> */}
        </div>
        <div className="w-full">
          <VetContainer
            flag={false}
            // data={foodItems?.filter((n) => n.category === filter)}
            data={foodItems?.filter(
              (item) =>
                item.category === filter.category &&
                (filter.subcategory === "" ||
                  item.SubCartegory === filter.subcategory)
            )}
          />
        </div>
      </div>
    );


  // const [isOpen, setIsOpen] = useState(false);
  // const [filter, setFilter] = useState({
  //   category: "DOGS",
  //   subcategory: "",
  // });
  // // const [filter, setFilter] = useState("DOGS");
  // const [{ LabReagents, foodItems, cartItems }, dispatch] = useStateValue();
  // const [labReagents, setLabReagents] = useState([]);
  // const [subcategory, setSubcategory] = useState("");
  // const subcategories = veterenary.filter(
  //   (category) => category.category === filter.category
  // );
  // console.log("subcategories", filter);

  // const handleCategoryClick = (category) => {
  //   setFilter({
  //     category,
  //     subcategory: "",
  //   });
  //   setSubcategory("");
  // };

  // const handleSubcategoryClick = (subcategory) => {
  //   setFilter((prevFilter) => ({
  //     ...prevFilter,
  //     subcategory,
  //   }));
  // };

  // const [items, setItems] = useState([]);
  // const [scrollValue, setScrollValue] = useState(0);

  // useEffect(() => {}, [scrollValue]);

  // console.log("====================================");
  // console.log("No data", filter);
  // console.log("====================================");
 
  // useEffect(() => {
  //   localStorage.setItem("cartItems", JSON.stringify(items));
  //   dispatch({
  //     type: actionType.SET_CARTITEMS,
  //     cartItems: items,
  //   });
  // }, [items]);

  // return (
  //   <div
  //     className={`w-full flex items-center gap-1 my-1 scroll-smooth ${
  //       flag
  //         ? "overflow-x-scroll scrollbar-none"
  //         : "overflow-x-hidden flex-wrap justify-center"
  //     }`}
  //     data-aos="fade-up"
  //     data-aos-duration="3000"
  //   >
  //     <div
  //       id="hospital"
  //       className="w-full flex items-center justify-start lg:justify-center gap-8 overflow-x-scroll scrollbar-none"
  //     >
  //       {vet &&
  //         vet.map((category) => (
  //           <motion.div
  //             whileTap={{ scale: 0.75 }}
  //             key={category.id}
  //             className={`group ${
  //               filter === category.urlParamName ? "bg-blue-400 " : "bg-card"
  //             } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-blue-900 `}
  //             // onClick={() => setFilter(category.urlParamName)}
  //             onClick={() => handleCategoryClick(category.urlParamName)}
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
  //               className={`text-sm ${
  //                 filter === category.urlParamName
  //                   ? "text-white"
  //                   : "text-textColor"
  //               } group-hover:text-white`}
  //             >
  //               {category.urlParamName}
  //             </p>
  //           </motion.div>
  //         ))}
  //     </div>
  //     <div className="w-full flex items-center justify-start lg:justify-center gap-8 overflow-x-scroll scrollbar-none">
  //       <p className="px-3 py-1 rounded-lg">Filter Here</p>
  //       {subcategories.length > 0 && (
  //         <div className="flex justify-center mt-4">
  //           {subcategories.map((subcategory) => (
  //             <button
  //               key={subcategory.id}
  //               className={`px-3 py-1 rounded-lg ${
  //                 filter.subcategory === subcategory.urlParamName
  //                   ? "bg-blue-400 text-white"
  //                   : "bg-gray-200 text-textColor"
  //               } mx-2 focus:outline-none`}
  //               onClick={() => handleSubcategoryClick(subcategory.urlParamName)}
  //             >
  //               {subcategory.urlParamName}
  //             </button>
  //           ))}
  //         </div>
  //       )}
  //     </div>

  //     {/* <div className="w-full">
  //       <LabContainer
  //         scrollValue={scrollValue}
  //         flag={false}
  //         // data={foodItems?.filter(
  //         //   (item) =>
  //         //     item.data.category === filter.category &&
  //         //     (filter.subcategory === "" ||
  //         //       item.data.SubCartegory === filter.subcategory)
  //         // )}
  //         data={foodItems?.filter((n) => n.category == filter)}
  //       />
  //     </div> */}
  //     <div className="w-full">
  //       <VetContainer
  //         flag={false}
  //         data={foodItems?.filter((n) => n.category === filter)}
  //       />
  //     </div>
  //   </div>
  // );
}
