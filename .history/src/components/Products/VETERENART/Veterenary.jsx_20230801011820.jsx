import React, { useEffect, useState } from "react";
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
import { labReagents as RLA, vetenar } from "../../../utils/data";
import RowContainer from "../../RowContainer";

export default function Veterenary(flag, data) {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState({
    category: "LRA_Rhematology",
    subcategory: "",
  });
  const [{ LabReagents, foodItems, cartItems }, dispatch] = useStateValue();
  const [labReagents, setLabReagents] = useState([]);
  const [subcategory, setSubcategory] = useState("");
  const subcategories = LRACategories.filter(
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
    <section
      className="w-full my-6"
      id="menu"
      // data-aos="fade-up-left"
      // data-aos-duration="3000"
    >
      <div className="w-full h-auto flex flex-col items-center justify-center shadow-lg rounded">
        {/* <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-blue-300 to-blue-900 transition-all ease-in-out duration-100 mr-auto">
          Our Products
        </p> */}

        <div
          id="hospital"
          className="w-full flex items-center justify-start lg:justify-center gap-8 overflow-x-scroll scrollbar-none"
        >
          {veterenary &&
            veterenary.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                className={`group ${
                  filter === category.urlParamName ? "bg-blue-400 " : "bg-card"
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-blue-900 `}
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
                  className={`text-sm ${
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
        <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category == filter)}
          />
        </div>
      </div>
    </section>
  );
}
