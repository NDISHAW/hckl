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
function LabReagentsComponent({ flag }) {
  const [isOpen, setIsOpen] = useState(false);
  const [{ LabReagents, cartItems }, dispatch] = useStateValue();
  const [labReagents, setLabReagents] = useState([]);
  const [filter, setFilter] = useState({
    category: labReagents?.category || "",
    subcategory: LRACategories[0]?.urlParamName || "",
  });
  
  const subcategories = LRACategories.filter(
    (category) => category.category === filter.category
  );

  const handleCategoryClick = (category, subcategory) => {
    setFilter({ category, subcategory });
  };

  const handleSubcategoryClick = (subcategory) => {
    setFilter({ ...filter, subcategory });
  };

  const [items, setItems] = useState([]);
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {}, [scrollValue, ]);

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
      </div>
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

      {labReagents.map((labReagent) => (
        <div
          key={labReagent.id}
          className="w-275 h-[375px] min-w-[275px] md:w-300 md:min-w-[300px] bg-cardOverlay rounded-lg py-2 px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
        >
          <div className="w-full flex h-fit items-center justify-between">
            <div className="w-full flex flex-col items-end justify-end -mt-8">
              Method: <p>{labReagent.data.Method}</p>
              category:<h3>{labReagent.data.category}</h3>
              <p className="mt-1 text-sm text-gray-500">
                Parameter:{labReagent.data.Parameter}
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  Substrate: {labReagent.data.Substrate}
                </p>
              </div>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  {labReagent.data.details.map((detail) => (
                    <ul>
                      <li></
                    </ul>
                  )) }
                </p>
              </div>
              <button
                type="button"
                className="bg-gradient-to-br bg-blue-300 hover:bg-blue-900 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
              >
                Learn more <span className="font-bold">...</span>
              </button>
            </div>
            <Modal
              onClose={() => setIsOpen(false)}
              open={isOpen}
              style={customStyles}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-br bg-blue-900 hover:bg-red-600 w-flex md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 fixed z-10"
              >
                <MdClose size={30} />
              </button>
              <div
                key={labReagent.data.Parameter}
                className="w-[575px] h-[575px] min-w-[275px] md:w-300 md:min-w-[300px] bg-cardOverlay rounded-lg py-2 px-4 my- backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
              >
                <div className="w-full flex h-fit items-center justify-between">
                  <motion.div
                    className="w-40 h-40 mt- drop-shadow-2xl"
                    whileHover={{ scale: 1.8 }}
                  >
                    <img
                      src={NotFound}
                      alt=""
                      className="w-full h-full object-contain"
                      onClick={() => setIsOpen(true)}
                      variant="gradient"
                    />
                  </motion.div>
                  {/* <motion.div
                    whileTap={{ scale: 0.75 }}
                    className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                    onClick={() => setItems([...cartItems, data])}
                  >
                    <MdShoppingBasket className="text-white" />
                  </motion.div> */}
                </div>

                <div className="w-full flex flex-col items-end justify-end -mt-8">
                  <p className="text-textColor font-semibold text-base md:text-lg">
                    {labReagent.data.Method}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {labReagent.data.Parameter}
                  </p>
                  <div className="flex items-center gap-8">
                    <p className="text-lg text-headingColor font-semibold">
                      <span>{labReagent.data.Substrate}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-8">
                    <p className="text-lg text-headingColor font-semibold">
                      <span>{labReagent.details}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LabReagentsComponent;
