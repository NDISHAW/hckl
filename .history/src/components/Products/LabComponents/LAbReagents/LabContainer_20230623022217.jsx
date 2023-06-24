import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../../../../img/NotFound.svg";
import { useStateValue } from "../../../../context/StateProvider";
import { actionType } from "../../../../context/reducer";
import Modal from "../../../modal";
import { MdClose } from "react-icons/md";

const LabContainer = ({ flag, data, scrollValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState([]);
  const [openAddModal, setOpenAddModal] = useState(false);

  const labContainer = useRef();

  const [items, setItems] = useState([]);

  // const [{ cartItems }, dispatch] = useStateValue();

  // const addtocart = () => {
  //   dispatch({
  //     type: actionType.SET_CARTITEMS,
  //     cartItems: items,
  //   });
  //   localStorage.setItem("cartItems", JSON.stringify(items));
  // };

  useEffect(() => {
    labContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  // useEffect(() => {
  //   addtocart();
  // }, [items]);

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
      ref={labContainer}
      className={`w-full flex items-center gap-1 my-1 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      {/* {labReagents.map((labReagent) => ( */}
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            item={item}
            className="w-275 h-[375px] min-w-[275px] md:w-300 md:min-w-[300px] bg-cardOverlay rounded-lg py-2 px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
          >
            <div className="w-full flex h-fit items-center justify-between">
              <div className="w-full flex flex-col items-end justify-end -mt-8">
                Method: <p>{item?.Method}</p>
                category:<h3>{item?.category}</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Parameter:{labReagent?.Parameter}
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-lg text-headingColor font-semibold">
                    Substrate: {labReagent?.Substrate}
                  </p>
                </div>
                <div className="flex items-center gap-8">
                  <p className="text-lg text-headingColor font-semibold">
                    {/* {labReagent.data.map((detail) => (
                    <ul>
                      <li></li>
                    </ul>
                  )) } */}
                  </p>
                </div>
                <button
                  type="button"
                  className="bg-gradient-to-br bg-blue-300 hover:bg-blue-900 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
                >
                  Learn more <span className="font-bold">...</span>
                </button>
                <div className="flex items-center gap-8">
                  <p className="text-lg text-headingColor font-semibold">
                    SubCartegory: {labReagent.SubCartegory}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <>no end data</>
      )}
    </div>
  );
};

export default LabContainer;

// import React, { useEffect, useRef, useState, Fragment } from "react";
// import { MdShoppingBasket } from "react-icons/md";
// import { motion } from "framer-motion";
// import NotFound from "../../../../img/NotFound.svg";
// import { useStateValue } from "../../../../context/StateProvider";
// import { actionType } from "../../../../context/reducer";
// // import { Dialog, Transition } from "@headlessui/react";
// import Modal from "../../../modal";
// // import Modal from "./Manage/Modal";
// // import AddTask from './Manage/AddTask';
// import { MdClose } from "react-icons/md";
// // import { LRACategories } from "../../utils/data.js";

// const LabContainer = ({ flag, data, scrollValue }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isClicked, setIsClicked] = useState([]);
//   const [openAddModal, setOpenAddModal] = useState(false);

//   function openModal(item) {
//     setIsClicked([item]);
//     setIsOpen(true);
//   }

//   const labContainer = useRef();

//   const [items, setItems] = useState([]);

//   const [{ cartItems }, dispatch] = useStateValue();

//   const addtocart = () => {
//     dispatch({
//       type: actionType.SET_CARTITEMS,
//       cartItems: items,
//     });
//     localStorage.setItem("cartItems", JSON.stringify(items));
//   };

//   useEffect(() => {
//     labContainer.current.scrollLeft += scrollValue;
//   }, [scrollValue]);

//   useEffect(() => {
//     addtocart();
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
//       ref={labContainer}
//       className={`w-full flex items-center gap-1  my-1 scroll-smooth  ${
//         flag
//           ? "overflow-x-scroll scrollbar-none"
//           : "overflow-x-hidden flex-wrap justify-center"
//       }`}
//       data-aos="fade-up"
//       data-aos-duration="3000"
//     >
//       {/* {data && data.length > 0 && data !== LRACategories ? ( */}
//       {data && data.length > 0 ? (
//         data.map((item) => (
//           <div
//             key={item?.id}
//             item={item}
//             className="w-275 h-[375px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
//           >
//             <div className="w-full flex h-fit items-center justify-between">
//               <motion.div
//                 className="w-40 h-40 -mt-8 drop-shadow-2xl"
//                 whileHover={{ scale: 2 }}
//               >
//                 {/* <img
//                   src={item?.imageURL}
//                   alt=""
//                   className="w-full h-full object-contain"
//                   onClick={() => openModal(item)}
//                   variant="gradient"
//                 /> */}

//               </motion.div>
//               <motion.div
//                 whileTap={{ scale: 0.75 }}
//                 className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
//                 onClick={() => setItems([...cartItems, item])}
//               >
//                 <MdShoppingBasket className="text-white" />
//               </motion.div>
//             </div>

//             <div className="w-full flex flex-col items-end justify-end -mt-8">
//               <p className="text-textColor font-semibold text-base md:text-lg">
//                 {item?.Method}
//               </p>
//               <p className="mt-1 text-sm text-gray-500">
//                 <textarea name="description" id="" cols="20" rows="5" readOnly>
//                   {item?.Parameters}
//                 </textarea>
//               </p>
//               <div className="flex items-center gap-8">
//                 <p className="text-lg text-headingColor font-semibold">
//                   <span className="text-sm text-blue-500">ksh</span>{" "}
//                   {item?.Substrate}
//                 </p>
//               </div>
//               <button
//                 type="button"
//                 className="bg-gradient-to-br bg-blue-300 hover:bg-blue-900 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
//                 // onClick={() => openModal(item)}
//                 onClick={() => setOpenAddModal(item)}
//               >
//                 Learn more <span className="font-bold">...</span>
//               </button>
//             </div>
//             <Modal
//               onClose={() => {
//                 setIsOpen(false);
//               }}
//               open={isOpen}
//               style={customStyles}
//             >
//               {/* <Modal
//               modalLable="Add Product"
//               onClose={() => setOpenAddModal(false)}
//               open={isOpen}
//               style={customStyles}
//             > */}
//               {isClicked.map((prod) => {
//                 return (
//                   <div>
//                     <button
//                       onClick={() => {
//                         setIsOpen(false);
//                       }}
//                       className="bg-gradient-to-br bg-blue-900 hover:bg-red-600 w-flex md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 fixed z-10"
//                     >
//                       <MdClose size={30} />{" "}
//                     </button>
//                     <div
//                       key={item?.id}
//                       item={item}
//                       className="w-[575px] h-[575px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my- backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
//                     >
//                       <div className="w-full flex h-fit items-center justify-between">
//                         <motion.div
//                           className="w-40 h-40 mt- drop-shadow-2xl"
//                           whileHover={{ scale: 1.8 }}
//                         >
//                           <img
//                             src={prod.imageURL}
//                             alt=""
//                             className="w-full h-full object-contain"
//                             onClick={() => openModal(item)}
//                             variant="gradient"
//                           />
//                         </motion.div>
//                         <motion.div
//                           whileTap={{ scale: 0.75 }}
//                           className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
//                           onClick={() => setItems([...cartItems, item])}
//                         >
//                           <MdShoppingBasket className="text-white" />
//                         </motion.div>
//                       </div>

//                       <div className="w-full flex flex-col items-end justify-end -mt-8">
//                         <p className="text-textColor font-semibold text-base md:text-lg">
//                           {prod.title}
//                         </p>
//                         <p className="mt-1 text-sm text-gray-500">
//                           <textarea
//                             name="description"
//                             id=""
//                             cols="30"
//                             rows="10"
//                             readOnly
//                           >
//                             {prod.description}
//                           </textarea>
//                         </p>
//                         <div className="flex items-center gap-8">
//                           <p className="text-lg text-headingColor font-semibold">
//                             <span className="text-sm text-blue-500">ksh</span>{" "}
//                             {prod.price}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </Modal>
//           </div>
//         ))
//       ) : (
//         <div className="w-full flex flex-col items-center justify-center">
//           <img src={NotFound} alt="img" className="h-340" />
//           <p className="text-xl text-headingColor font-semibold my-2">
//             Items Not Available
//           </p>
//         </div>
//         // <div className="w-full flex flex-col items-center justify-center">
//         //   <p className="text-xl text-headingColor font-semibold my-2">
//         //     Loading .... <Loader />
//         //     <img src={NotFound} alt="img" className="h-340" />
//         //   </p>
//         // </div>
//       )}
//       {/* {openAddModal && (
//         <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal} />
//       )} */}
//     </div>
//   );
// };

// export default LabContainer;
