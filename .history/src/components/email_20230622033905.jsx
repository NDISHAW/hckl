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
import { LRACategories } from "../utils/data";
import { labReagents as RLA } from "../utils/data";

function LabReagentsComponent({ flag, data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState(false);
  const [{ LabReagents, cartItems }, dispatch] = useStateValue();
  const [labReagents, setLabReagents] = useState([]);

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

  useEffect(() => {}, [scrollValue]);

  useEffect(() => {
    const fetchLabReagents = async () => {
      const labReagentsColRef = collection(firestore, "LabReagents");
      const labReagentsSnapshot = await getDocs(labReagentsColRef);

      const updatedLabReagents = [];

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
        className={`mx-2 my-1 cursor-pointer flex flex-col items-center justify-center gap-1 ${
          filter.category === "Hospital" ? "active" : ""
        }`}
        onClick={() => handleCategoryClick("Hospital")}
      >
        <Icon icon="mdi:stethoscope" style={{ fontSize: "2rem" }} />
        <p className="text-sm">Hospital</p>
      </div>
      {/* Render subcategories */}
      {filter.category === "Hospital" &&
        subcategories.map((subcategory) => (
          <div
            key={subcategory.subcategory}
            className={`mx-2 my-1 cursor-pointer flex flex-col items-center justify-center gap-1 ${
              filter.subcategory === subcategory.subcategory ? "active" : ""
            }`}
            onClick={() => handleSubcategoryClick(subcategory.subcategory)}
          >
            <Icon
              icon={subcategory.icon}
              style={{ fontSize: "2rem" }}
              className="text-blue-500"
            />
            <p className="text-sm">{subcategory.subcategory}</p>
          </div>
        ))}
      {/* Render lab containers */}
      {filter.category === "Hospital" &&
        filter.subcategory &&
        labReagents
          .filter(
            (reagent) =>
              reagent.data.category === filter.subcategory &&
              reagent.data.type === "labReagent"
          )
          .map((reagent) => (
            <LabContainer
              key={reagent.id}
              flag={flag}
              data={reagent.data.subcollectionData}
              scrollValue={scrollValue}
            />
          ))}
      <div
        className="cursor-pointer absolute bottom-2 right-2 bg-red-600 rounded-full p-2 shadow-md"
        onClick={() => setIsOpen(true)}
      >
        <MdShoppingBasket size={24} color="#fff" />
      </div>
      <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
        <div
          style={{ width: "30rem", minHeight: "20rem" }}
          className="flex flex-col gap-2 p-4 bg-white"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Shopping Cart</h3>
            <MdClose
              size={24}
              color="#999"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            />
          </div>
          {cartItems && cartItems.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-2"
                >
                  <img
                    src={item.image ? item.image : NotFound}
                    alt={item.title}
                    className="h-24 w-24 object-contain"
                  />
                  <p>{item.title}</p>
                </motion.div>
              ))}
            </div>
          ) : (
            <span>No items in cart</span>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default LabReagentsComponent;


// import React, { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { firestore } from "../firebase.config";
// import { useStateValue } from "../context/StateProvider";
// import { actionType } from "../context/reducer";
// import LabContainer from "./Products/LabComponents/LAbReagents/LabContainer";
// import { Icon } from "@iconify/react";
// import { MdShoppingBasket } from "react-icons/md";
// import NotFound from "../img/NotFound.svg";
// import { MdClose } from "react-icons/md";
// import Modal from "./modal";
// import { motion } from "framer-motion";
// import { LRACategories } from "../utils/data";
// import { labReagents as RLA } from "../utils/data";

// function LabReagentsComponent({ flag, data }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [filter, setFilter] = useState(false);
//   const [{ LabReagents, cartItems }, dispatch] = useStateValue();
//   const [labReagents, setLabReagents] = useState([]);
//   const [items, setItems] = useState([]);
//   const [scrollValue, setScrollValue] = useState(0);

//   const subcategories = LRACategories.filter(
//     (category) => category.category === filter.category
//   );

//   const handleCategoryClick = (category, subcategory) => {
//     setFilter({ category, subcategory });
//   };

//   const handleSubcategoryClick = (subcategory) => {
//     setFilter({ ...filter, subcategory });
//   };

//   useEffect(() => {
//     const fetchLabReagents = async () => {
//       const labReagentsColRef = collection(firestore, "LabReagents");
//       const labReagentsSnapshot = await getDocs(labReagentsColRef);

//       const updatedLabReagents = [];
//       console.log(updatedLabReagents);
//       for (const doc of labReagentsSnapshot.docs) {
//         const labReagentData = doc.data();
//         const subcollectionRef = collection(doc.ref, "details");
//         const subcollectionSnapshot = await getDocs(subcollectionRef);
//         const subcollectionData = subcollectionSnapshot.docs.map((subDoc) =>
//           subDoc.data()
//         );

//         labReagentData.subcollectionData = subcollectionData;
//         updatedLabReagents.push({
//           id: doc.id,
//           data: labReagentData,
//         });
//       }

//       setLabReagents(updatedLabReagents);
//       dispatch({
//         type: actionType.SET_LAB_REAGENTS,
//         LabReagents: updatedLabReagents,
//       });
//     };

//     fetchLabReagents();
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(items));
//     dispatch({
//       type: actionType.SET_CARTITEMS,
//       cartItems: items,
//     });
//   }, [items]);

//   const customStyles = {
//     content: {
//       top: "70%",
//       left: "70%",
//       right: "auto",
//       bottom: "auto",
//       marginRight: "-50%",
//       transform: "translate(-30%, -30%)",
//       maxWidth: "100%",
//       width: "100%",
//     },
//     overlay: {
//       padding: "8rem",
//     },
//   };

//   return (
//     <div
//       className={`w-full flex items-center gap-1 my-1 scroll-smooth ${
//         flag
//           ? "overflow-x-scroll scrollbar-none"
//           : "overflow-x-hidden flex-wrap justify-center"
//       }`}
//       data-aos="fade-up"
//       data-aos-duration="3000"
//     >
//       <div
//         id="hospital"
//         className="w-full flex flex-wrap justify-center gap-3 "
//       >
//         {RLA.map((labReagent) => (
//           <LabContainer
//             key={labReagent.id}
//             labReagent={labReagent}
//             flag={flag}
//             data={labReagents}
//             scrollValue={scrollValue}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default LabReagentsComponent;

// import React, { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { firestore } from "../firebase.config";
// import { useStateValue } from "../context/StateProvider";
// import { actionType } from "../context/reducer";
// import LabContainer from "./Products/LabComponents/LAbReagents/LabContainer";
// import { Icon } from "@iconify/react";
// import { MdShoppingBasket } from "react-icons/md";
// import NotFound from "../img/NotFound.svg";
// import { MdClose } from "react-icons/md";
// import Modal from "./modal";
// import { motion } from "framer-motion";
// import { LRACategories,  } from "../utils/data";
// import { labReagents as RLA } from "../utils/data";
// function LabReagentsComponent({ flag,data }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [filter, setFilter] = useState(false);
//   const [{ LabReagents, cartItems }, dispatch] = useStateValue();
//   const [labReagents, setLabReagents] = useState([]);
//   // const [filter, setFilter] = useState({
//   //   category: labReagents?.category || "",
//   //   subcategory: LRACategories[0]?.urlParamName || "",
//   // });

//   const subcategories = LRACategories.filter(
//     (category) => category.category === filter.category
//   );

//   const handleCategoryClick = (category, subcategory) => {
//     setFilter({ category, subcategory });
//   };

//   const handleSubcategoryClick = (subcategory) => {
//     setFilter({ ...filter, subcategory });
//   };

//   const [items, setItems] = useState([]);
//   const [scrollValue, setScrollValue] = useState(0);
//   useEffect(() => {}, [scrollValue, ]);

//   useEffect(() => {
//     const fetchLabReagents = async () => {
//       const labReagentsColRef = collection(firestore, "LabReagents");
//       const labReagentsSnapshot = await getDocs(labReagentsColRef);

//       const updatedLabReagents = [];
//       console.log(updatedLabReagents);
//       for (const doc of labReagentsSnapshot.docs) {
//         const labReagentData = doc.data();
//         const subcollectionRef = collection(doc.ref, "details");
//         const subcollectionSnapshot = await getDocs(subcollectionRef);
//         const subcollectionData = subcollectionSnapshot.docs.map((subDoc) =>
//           subDoc.data()
//         );

//         labReagentData.subcollectionData = subcollectionData;
//         updatedLabReagents.push({
//           id: doc.id,
//           data: labReagentData,
//         });
//       }

//       setLabReagents(updatedLabReagents);
//       dispatch({
//         type: actionType.SET_LAB_REAGENTS,
//         LabReagents: updatedLabReagents,
//       });
//     };

//     fetchLabReagents();
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(items));
//     dispatch({
//       type: actionType.SET_CARTITEMS,
//       cartItems: items,
//     });
//   }, [items]);

//   const customStyles = {
//     content: {
//       top: "70%",
//       left: "70%",
//       right: "auto",
//       bottom: "auto",
//       marginRight: "-50%",
//       transform: "translate(-30%, -30%)",
//       maxWidth: "100%",
//       width: "100%",
//     },
//     overlay: {
//       padding: "8rem",
//     },
//   };

//   return (
//     <div
//       className={`w-full flex items-center gap-1 my-1 scroll-smooth ${
//         flag
//           ? "overflow-x-scroll scrollbar-none"
//           : "overflow-x-hidden flex-wrap justify-center"
//       }`}
//       data-aos="fade-up"
//       data-aos-duration="3000"
//     >
//       <div
//         id="hospital"
//         className="w-full flex items-center justify-start lg:justify-center gap-8 overflow-x-scroll scrollbar-none"
//       >
//         {/*locale labLeagents */}
//         {RLA &&
//           RLA.map((category) => (
//             <motion.div
//               scrollValue={scrollValue}
//               whileTap={{ scale: 1.7 }}
//               key={category.id}
//               className={`group ${
//                 filter.category === category.urlParamName
//                   ? "bg-blue-400 "
//                   : "bg-card"
//               } w-44 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-blue-900 `}
//               onClick={() =>
//                 handleCategoryClick(
//                   category.urlParamName,
//                   subcategories[0]?.name
//                 )
//               }
//               // onClick={setFilter(category.urlParamName)}
//             >
//               <div
//                 className={`w-10 h-10 rounded-full shadow-lg ${
//                   filter.category === category.urlParamName
//                     ? "bg-white"
//                     : "bg-Main"
//                 } group-hover:bg-white flex items-center justify-center`}
//               >
//                 <Icon
//                   icon="medical-icon:hospital"
//                   className={`${
//                     filter.category === category.urlParamName
//                       ? "text-textColor"
//                       : "text-white"
//                   } group-hover:text-textColor text-lg`}
//                 />
//               </div>
//               <p
//                 className={`font-semibold text-base ${
//                   filter.category === category.urlParamName
//                     ? "text-white"
//                     : "text-textColor"
//                 } group-hover:text-white`}
//               >
//                 {category.name}
//               </p>
//             </motion.div>
//           ))}
//       </div>
//       {/* {subcategories.length > 0 && (
//         <div className="flex justify-center mt-4">
//           {subcategories.map((subcategory) => (
//             <button
//               key={subcategory.id}
//               className={`px-3 py-1 rounded-lg ${
//                 filter.subcategory === subcategory.name
//                   ? "bg-blue-400 text-white"
//                   : "bg-gray-200 text-textColor"
//               } mx-2 focus:outline-none`}
//               // onClick={() => handleSubcategoryClick(subcategory.name)}
//               onClick={setFilter(subcategory.name)}
//             >
//               {subcategory.name}
//             </button>
//           ))}
//         </div>
//       )} */}

//       <div className="w-full">
//         <LabContainer
//           scrollValue={scrollValue}
//           flag={false}
//           data={LabReagents?.filter((n) => n.category === filter.category)}
//         />
//       </div>
//     </div>
//   );
// }

// export default LabReagentsComponent;
