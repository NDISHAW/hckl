import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../../../img/NotFound.svg";
import { useStateValue } from "../../../context/StateProvider";
import { actionType } from "../../../context/reducer";
import Modal from "./modal";
import { MdClose } from "react-icons/md";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../firebase.config";
import Loader from "./Loader";

const VetContainer = ({ flag, data, scrollValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);

  const VetContainer = useRef();

  const [detail, setDetail] = useState([]);

  // const fetchDetails = async (labReagent) => {
  //   const detailsColRef = collection(
  //     firestore,
  //     "LabReagents",
  //     labReagent.id,
  //     "details"
  //   );
  //   const detailsSnapshot = await getDocs(detailsColRef);
  //   const detailsData = detailsSnapshot.docs.map((doc) => doc.data());
  //   setDetail(detailsData);
  // };

  // function openModal(labReagent) {
  //   fetchDetails(labReagent);
  //   setIsOpen(true);
  // }

  useEffect(() => {
    VetContainer.current.scrollLeft += scrollValue;
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
      ref={VetContainer}
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
            // onClick={() => openModal(labReagent)}
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
                <li>{labReagent.data.DiagnosticApplication}</li>
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
                <li>{labReagent.data.OrderNumber}</li>
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
          <Loader />
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
        {/* {detail && detail.length > 0 ? (
          <div className="w-full flex flex-col items-center justify-center">
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
        ) : (
          <div className="w-full flex flex-col items-center justify-center">
            <Loader />
            <img src={NotFound} alt="img" className="h-340" />
            <p className="text-xl text-headingColor font-semibold my-2">
              Items Not Available
            </p>
          </div>
        )} */}
      </Modal>
    </div>
  );
};

export default VetContainer;
