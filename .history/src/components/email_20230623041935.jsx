import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import LabContainer from "./Products/LabComponents/LAbReagents/LabContainer";
import { Icon } from "@iconify/react";
import { MdShoppingBasket } from "react-icons/md";
import NotFound from "../img/NotFound.svg";
import { MdClose } from "react-icons/md";
import Modal from "./modal";
import { motion } from "framer-motion";
import { LRACategories,  } from "../utils/data";
import { labReagents as RLA } from "../utils/data";
function LabReagentsComponent({ flag,data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("LRA_Rhematology");
  const [{ LabReagents,foodItems, cartItems }, dispatch] = useStateValue();
  const [labReagents, setLabReagents] = useState([]);
  // const [filter, setFilter] = useState({
  //   category: labReagents?.category || "",
  //   subcategory: LRACategories[0]?.urlParamName || "",
  // });
  
  const subcategories = LRACategories.filter(
    (category) => category.category === filter.category
  );

  // const handleCategoryClick = (category, subcategory) => {
  //   setFilter({ category, subcategory });
  // };
    const handleCategoryClick = (category,) => {
      setFilter( category.urlParamName  );
    };

  const handleSubcategoryClick = (subcategory) => {
    setFilter({ ...filter, subcategory });
  };

  const [items, setItems] = useState([]);
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {}, [scrollValue, ]);

  // fetch LabReagents from firestore
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
  console.log("LabReagents",LabReagents);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
  }, [items]);

  const customStyles = {
    content: {
      top: "70%",
      left: "70%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-30%, -30%)",
      maxWidth: "100%",
      width: "100%",
    },
    overlay: {
      padding: "8rem",
    },
  };

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
        {/*locale labLeagents */}
        {RLA &&
          RLA.map((category) => (
            <motion.div
              scrollValue={scrollValue}
              whileTap={{ scale: 1.7 }}
              key={category.id}
              className={`group ${
                filter.category === category.urlParamName
                  ? "bg-blue-400 "
                  : "bg-card"
              } w-44 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-blue-900 `}
              // onClick={() =>
              //   handleCategoryClick(
              //     category.urlParamName
              //   )
              // }
              onClick={() => setFilter(category.urlParamName)}
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
      </div>
      {/* {subcategories.length > 0 && (
        <div className="flex justify-center mt-4">
          {subcategories.map((subcategory) => (
            <button
              key={subcategory.id}
              className={`px-3 py-1 rounded-lg ${
                filter.subcategory === subcategory.name
                  ? "bg-blue-400 text-white"
                  : "bg-gray-200 text-textColor"
              } mx-2 focus:outline-none`}
              // onClick={() => handleSubcategoryClick(subcategory.name)}
              onClick={setFilter(subcategory.name)}
            >
              {subcategory.name}
            </button>
          ))}
        </div>
      )} */}

      <div className="w-full">
        <LabContainer
          scrollValue={scrollValue}
          flag={false}
          data={LabReagents?.filter((n) => n.category === filter)}
        />
      </div>
    </div>
  );
}

export default LabReagentsComponent;
