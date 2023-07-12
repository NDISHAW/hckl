import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../../../../img/NotFound.svg";
import { useStateValue } from "../../../../context/StateProvider";
import { actionType } from "../../../../context/reducer";
import Modal from "./modal";
import { MdClose } from "react-icons/md";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../../firebase.config";

const LabContainer = ({ flag, data, scrollValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);

  const labContainer = useRef();

  
  const [detail, setDetail] = useState([]);

  const fetchDetails = async (labReagent) => {
    const detailsColRef = collection(
      firestore,
      "LabReagents",
      labReagent.id,
      "details"
    );
    const detailsSnapshot = await getDocs(detailsColRef);
    const detailsData = detailsSnapshot.docs.map((doc) => doc.data());
    setDetail(detailsData);
  };

  function openModal(labReagent) {
    fetchDetails(labReagent);
    setIsOpen(true);
  }

  useEffect(() => {
    labContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

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
const [items, setItems] = useState([]);
  const [{ cartItems }, dispatch] = useStateValue();

  const addtocart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    addtocart();
  }, [items]);

  return (
    <div
      ref={labContainer}
      className={`w-full flex items-center gap-8 my-1 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}

    >
      {data && data.length > 0 ? (
        data.map((labReagent) => (
          <div
            key={labReagent.id}
            className="w-275 h-[flex] min-w-[275px] md:w-300 md:min-w-[300px] bg-cardOverlay rounded-lg py-2 px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
            onClick={() => openModal(labReagent)}
          >
            <div class="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-textColor">
              <p className="text-textColor font-semibold text-base md:text-lg">
                <span className="text-blue-600">Method: </span>
                {labReagent.data.Method}
              </p>
            </div>
            <div class="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-textColor">
              <p className="text-textColor font-semibold text-base md:text-lg">
                <span className="text-blue-600">Parameter: </span>
                <li>{labReagent.data.Parameter}</li>
              </p>
            </div>
            <div class="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-textColor">
              <p className="text-textColor font-semibold text-base md:text-lg">
                <span className="text-blue-600">Substrate: </span>
                <li>{labReagent.data.Substrate}</li>
              </p>
            </div>
            <div class="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-textColor">
              <p className="text-textColor font-semibold text-base md:text-lg">
                <span className="text-blue-600">Species: </span>
                <li>{labReagent.data.Species}</li>
              </p>
            </div>
            
            <div class="border-t-2 border-neutral-100 px-6 py-3  dark:text-neutral-50">
              <button
                type="button"
                class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-textColor shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="dark"
              >
                More Details
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} alt="img" className="h-340" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p>
        </div>
      )}
      <Modal
        onClose={() => setIsOpen(false)}
        open={isOpen}
        style={customStyles}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="bg-gradient-to-br bg-blue-900 hover:bg-red-600 w-flex md:w-auto px-4 pb-  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 fixed z-10"
        >
          <MdClose size={50} />{" "}
        </button>
        {detail.length > 0 && (
          <div>
            <table className="mt-3 w-full md:scroll-m-0  ">
              <thead className=" ">
                <th className="py-2">Lg Class</th>
                <tr className="border ">
                  <th className="py-2 ">Lg Class</th>
                  <th className="py-2">Format</th>
                  <th className="py-2 pl-4">Cart</th>
                </tr>
              </thead>
              <tbody>
                {detail.map((prod) => (
                  <tr key={prod.id} className="border ">
                    <td className="py-3 flex-auto">{prod.lgClass}</td>
                    <td className="py-3 flex-auto">{prod.Format}</td>
                    <td className="py-3 pl-4">
                      <motion.div
                        whileTap={{ scale: 0.75 }}
                        className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-"
                        onClick={() => setItems([...cartItems, prod])}
                      >
                        <MdShoppingBasket className="text-white" />
                      </motion.div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default LabContainer;

// import React, { useEffect, useRef, useState } from "react";
// import { MdShoppingBasket } from "react-icons/md";
// import { motion } from "framer-motion";
// import NotFound from "../../../../img/NotFound.svg";
// import { useStateValue } from "../../../../context/StateProvider";
// import { actionType } from "../../../../context/reducer";
// import Modal from "./modal";
// import { MdClose } from "react-icons/md";
// import { collection, getDocs } from "firebase/firestore";
// import { firestore } from "../../../../firebase.config";

// const LabContainer = ({ flag, data, scrollValue }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isClicked, setIsClicked] = useState([]);
//   const [openAddModal, setOpenAddModal] = useState(false);

//   const labContainer = useRef();

//   const [items, setItems] = useState([]);

//   const fetchDetails = async (labReagent) => {
//     const detailsColRef = collection(
//       firestore,
//       "LabReagents",
//       labReagent.id,
//       "details"
//     );
//     const detailsSnapshot = await getDocs(detailsColRef);
//     const detailsData = detailsSnapshot.docs.map((doc) => doc.data());
//     setIsClicked(detailsData);
//   };

//   function openModal(labReagent) {
//     fetchDetails(labReagent);
//     setIsClicked([labReagent]);
//     setIsOpen(true);
//   }

//   useEffect(() => {
//     labContainer.current.scrollLeft += scrollValue;
//   }, [scrollValue]);

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
//     const [{ cartItems }, dispatch] = useStateValue();

//     const addtocart = () => {
//       dispatch({
//         type: actionType.SET_CARTITEMS,
//         cartItems: items,
//       });
//       localStorage.setItem("cartItems", JSON.stringify(items));
//     };
//     useEffect(() => {
//       addtocart();
//     }, [items]);

//   return (
//     <div
//       ref={labContainer}
//       className={`w-full flex items-center gap-1 my-1 scroll-smooth ${
//         flag
//           ? "overflow-x-scroll scrollbar-none"
//           : "overflow-x-hidden flex-wrap justify-center"
//       }`}
//       data-aos="fade-up"
//       data-aos-duration="3000"
//     >
//       {data && data.length > 0 ? (
//         data.map((labReagent) => (
//           <div
//             key={labReagent.id}
//             className="w-275 h-[375px] min-w-[275px] md:w-300 md:min-w-[300px] bg-cardOverlay rounded-lg py-2 px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
//             onClick={() => openModal(labReagent)}
//           >
//             <div className="w-full flex h-fit items-center justify-between">
//               <div className="w-full flex flex-col items-end justify-end -mt-8">
//                 Method: <p>{labReagent.data.Method}</p>
//                 category:<h3>{labReagent?.data.category}</h3>
//                 <p className="mt-1 text-sm text-gray-500">
//                   Parameter:{labReagent?.data.Parameter}
//                 </p>
//                 <div className="flex items-center gap-8">
//                   <p className="text-lg text-headingColor font-semibold">
//                     Substrate: {labReagent?.data.Substrate}
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-8">
//                   <p className="text-lg text-headingColor font-semibold">
//                     {/* {labReagent.data.map((detail) => (
//                       <ul>
//                         <li></li>
//                       </ul>
//                     )) } */}
//                   </p>
//                 </div>
//                 <button
//                   type="button"
//                   className="bg-gradient-to-br bg-blue-300 hover:bg-blue-900 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
//                 >
//                   Learn more <span className="font-bold">...</span>
//                 </button>
//                 <div className="flex items-center gap-8">
//                   <p className="text-lg text-headingColor font-semibold">
//                     SubCartegory: {labReagent?.data.SubCartegory}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))
//       ) : (
//         <div className="w-full flex flex-col items-center justify-center">
//           <img src={NotFound} alt="img" className="h-340" />
//           <p className="text-xl text-headingColor font-semibold my-2">
//             Items Not Available
//           </p>
//         </div>
//       )}
//       <Modal
//         onClose={() => setIsOpen(false)}
//         open={isOpen}
//         style={customStyles}
//       >
//         <button
//           onClick={() => setIsOpen(false)}
//           className="bg-gradient-to-br bg-blue-900 hover:bg-red-600 w-flex md:w-auto px-4 pb-  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 fixed z-10"
//         >
//           <MdClose size={50} />{" "}
//         </button>
//         {isClicked.map((prod) => (
//           <div key={prod.id}>
//             <table className="mt-3 w-full">
//               <thead>
//                 <tr>
//                   <th className="py-2">Lg Class</th>
//                   <th className="py-2">Format</th>
//                   <th className="py-2"></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="py-3 flex-auto">{prod.lgClass}</td>
//                   <td className="py-3 flex-auto">{prod.Format}</td>
//                   <td className="py-3 px-">
//                     <motion.div
//                       whileTap={{ scale: 0.75 }}
//                       className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
//                       onClick={() => setItems([...cartItems, prod])}
//                     >
//                       <MdShoppingBasket className="text-white" />
//                     </motion.div>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         ))}
//       </Modal>
//     </div>
//   );
// };

// export default LabContainer;

// import React, { useEffect, useRef, useState } from "react";
// import { MdShoppingBasket } from "react-icons/md";
// import { motion } from "framer-motion";
// import NotFound from "../../../../img/NotFound.svg";
// import { useStateValue } from "../../../../context/StateProvider";
// import { actionType } from "../../../../context/reducer";
// import Modal from "./modal";
// import { MdClose } from "react-icons/md";

// const LabContainer = ({ flag, data, scrollValue }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isClicked, setIsClicked] = useState([]);
//   const [openAddModal, setOpenAddModal] = useState(false);

//   const labContainer = useRef();

//   const [items, setItems] = useState([]);

//   function openModal(labReagent) {
//       setIsClicked([labReagent]);
//       setIsOpen(true);
//     }

//   // const [{ cartItems }, dispatch] = useStateValue();

//   // const addtocart = () => {
//   //   dispatch({
//   //     type: actionType.SET_CARTITEMS,
//   //     cartItems: items,
//   //   });
//   //   localStorage.setItem("cartItems", JSON.stringify(items));
//   // };

//   useEffect(() => {
//     labContainer.current.scrollLeft += scrollValue;
//   }, [scrollValue]);

//   // useEffect(() => {
//   //   addtocart();
//   // }, [items]);

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
//       className={`w-full flex items-center gap-1 my-1 scroll-smooth ${
//         flag
//           ? "overflow-x-scroll scrollbar-none"
//           : "overflow-x-hidden flex-wrap justify-center"
//       }`}
//       data-aos="fade-up"
//       data-aos-duration="3000"
//     >
//       {/* {labReagents.map((labReagent) => ( */}
//       {data && data.length > 0 ? (
//         data.map((labReagent) => (
//           <div
//             key={labReagent.id}
//             className="w-275 h-[375px] min-w-[275px] md:w-300 md:min-w-[300px] bg-cardOverlay rounded-lg py-2 px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
//             // onClick={() => setIsOpen(true)}
//             onClick={() => openModal(labReagent)}
//           >
//             <div className="w-full flex h-fit items-center justify-between">
//               <div className="w-full flex flex-col items-end justify-end -mt-8">
//                 Method: <p>{labReagent.data.Method}</p>
//                 category:<h3>{labReagent?.data.category}</h3>
//                 <p className="mt-1 text-sm text-gray-500">
//                   Parameter:{labReagent?.data.Parameter}
//                 </p>
//                 <div className="flex items-center gap-8">
//                   <p className="text-lg text-headingColor font-semibold">
//                     Substrate: {labReagent?.data.Substrate}
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-8">
//                   <p className="text-lg text-headingColor font-semibold">
//                     {/* {labReagent.data.map((detail) => (
//                     <ul>
//                       <li></li>
//                     </ul>
//                   )) } */}
//                   </p>
//                 </div>
//                 <button
//                   type="button"
//                   className="bg-gradient-to-br bg-blue-300 hover:bg-blue-900 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
//                 >
//                   Learn more <span className="font-bold">...</span>
//                 </button>
//                 <div className="flex items-center gap-8">
//                   <p className="text-lg text-headingColor font-semibold">
//                     SubCartegory: {labReagent?.data.SubCartegory}
//                   </p>
//                 </div>
//               </div>
//               <Modal
//                 onClose={() => {
//                   setIsOpen(false);
//                 }}
//                 open={isOpen}
//                 style={customStyles}
//               >
//                 {/* <Modal
//               modalLable="Add Product"
//               onClose={() => setOpenAddModal(false)}
//               open={isOpen}
//               style={customStyles}
//             > */}
//                 {isClicked.map((prod) => {
//                   return (
//                     <div>
//                       <button
//                         onClick={() => {
//                           setIsOpen(false);
//                         }}
//                         className="bg-gradient-to-br bg-blue-900 hover:bg-red-600 w-flex md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 fixed z-10"
//                       >
//                         <MdClose size={30} />{" "}
//                       </button>
//                       <div
//                         key={labReagent?.id}
//                         item={labReagent}
//                         className="w-[575px] h-[575px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my- backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
//                       >
//                         <div className="w-full flex h-fit items-center justify-between">
//                           <motion.div
//                             className="w-40 h-40 mt- drop-shadow-2xl"
//                             whileHover={{ scale: 1.8 }}
//                           >
//                             <img
//                               src={NotFound}
//                               alt=""
//                               className="w-full h-full object-contain"
//                               onClick={() => openModal(labReagent)}
//                               variant="gradient"
//                             />
//                           </motion.div>
//                           {/* <motion.div
//                             whileTap={{ scale: 0.75 }}
//                             className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
//                             onClick={() => setItems([...cartItems, item])}
//                           >
//                             <MdShoppingBasket className="text-white" />
//                           </motion.div> */}
//                         </div>

//                         <div className="w-full flex flex-col items-end justify-end -mt-8">
//                           <p className="text-textColor font-semibold text-base md:text-lg">
//                             {prod.data.Method}
//                           </p>
//                           <p className="mt-1 text-sm text-gray-500">
//                             <textarea
//                               name="description"
//                               id=""
//                               cols="30"
//                               rows="10"
//                               readOnly
//                             >
//                               {prod.description}
//                             </textarea>
//                           </p>
//                           <div className="flex items-center gap-8">
//                             <p className="text-lg text-headingColor font-semibold">
//                               <span className="text-sm text-blue-500">ksh</span>{" "}
//                               {prod.price}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </Modal>
//             </div>
//           </div>
//         ))
//       ) : (
//         <div className="w-full flex flex-col items-center justify-center">
//           <img src={NotFound} alt="img" className="h-340" />
//           <p className="text-xl text-headingColor font-semibold my-2">
//             Items Not Available
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LabContainer;

// eslint-disable-next-line no-lone-blocks
{
  /*<Modal
                onClose={() => setIsOpen(false)}
                open={isOpen}
                close={isOpen}
                style={customStyles}
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-br bg-blue-900 hover:bg-red-600 w-flex md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 fixed z-10"
                >
                  <MdClose size={30} />
                </button>
                <div
                  key={labReagent?.data}
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
                  </motion.div> 
                  </div>

                  <div className="w-full flex flex-col items-end justify-end -mt-8">
                    <p className="text-textColor font-semibold text-base md:text-lg">
                      {labReagent?.data.Method}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Parameter {labReagent?.data.Parameter}
                    </p>
                    <div className="flex items-center gap-8">
                      <p className="text-lg text-headingColor font-semibold">
                        <span>{labReagent?.data.Substrate}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-8">
                      <p className="text-lg text-headingColor font-semibold">
                        <span>{labReagent.data.SubCartegory}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Modal>*/
}

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
