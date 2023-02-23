import React, { useEffect, useRef, useState, Fragment } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
// import { Dialog, Transition } from "@headlessui/react";
import Modal from './modal'

const RowContainer = ({ flag, data, scrollValue }) => { 
  
  // const cancelButtonRef = useRef();
  // initialFocus = { cancelButtonRef };
  const [isOpen, setIsOpen] = useState(false);
    const [isClicked, setIsClicked] = useState([]);

    // const closeModal = () => {
    //   setTimeout(() => {
    //     setIsOpen(false);
    //     setIsClicked([]);
    //   }, 0);
    // };
  
  function openModal(item) {
    setIsClicked([item]);
    setIsOpen(true);
    
  }

  const rowContainer = useRef();

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
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addtocart();
  }, [items]);

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3  my-12 scroll-smooth  ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          
          <div
            key={item?.id}
            item={item}
            className="w-275 h-[375px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
          >
            <div className="w-full flex h-fit items-center justify-between">
              <motion.div
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <img
                  src={item?.imageURL}
                  alt=""
                  className="w-full h-full object-contain"
                  onClick={() => openModal(item)}
                  variant="gradient"
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                onClick={() => setItems([...cartItems, item])}
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>

            <div className="w-full flex flex-col items-end justify-end -mt-8">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">{item?.calories}</p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-blue-500">ksh</span>{" "}
                  {item?.price}
                </p>
              </div>
              <button
                type="button"
                className="bg-gradient-to-br bg-blue-300 hover:bg-blue-900 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
                onClick={() => openModal(item)}
              >
                Learn more <span className="font-bold">...</span>
              </button>
            </div>
            <Modal
              onClose={() => {
                setIsOpen(false);
              }}
              open={isOpen}
            >
              {isClicked.map((prod) => {
                
                return (
                  <>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      className="bg-gradient-to-br bg-blue-900 hover:bg-red-600 w-flex md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
                    >
                      X
                    </button>
                    <div
                      key={item?.id}
                      item={item}
                      className="w-675 h-[575px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
                    >
                      <div className="w-full flex h-fit items-center justify-between">
                        <motion.div
                          className="w-40 h-40 -mt-8 drop-shadow-2xl"
                          whileHover={{ scale: 1.2 }}
                        >
                          <img
                            src={prod.imageURL}
                            alt=""
                            className="w-full h-full object-contain"
                            onClick={() => openModal(item)}
                            variant="gradient"
                          />
                        </motion.div>
                        <motion.div
                          whileTap={{ scale: 0.75 }}
                          className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                          onClick={() => setItems([...cartItems, item])}
                        >
                          <MdShoppingBasket className="text-white" />
                        </motion.div>
                      </div>

                      <div className="w-full flex flex-col items-end justify-end -mt-8">
                        <p className="text-textColor font-semibold text-base md:text-lg">
                          {prod.title}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {prod.description}
                        </p>
                        <div className="flex items-center gap-8">
                          <p className="text-lg text-headingColor font-semibold">
                            <span className="text-sm text-blue-500">ksh</span>{" "}
                            {prod.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>

                  // <div className="w-full flex flex-col items-center justify-center">
                  //   <div className="image-name-tagline">
                  //     {<img src={prod.imageURL} alt={prod.title} />}
                  //     <div className="right-side">
                  //       <p className="beer-name">{prod.title}</p>
                  //       <p className="beer-tagline">
                  //         <i>{prod.calories}</i>
                  //       </p>
                  //     </div>
                  //   </div>
                  //   <p style={{ textAlign: "center" }}>
                  //     <button
                  //       onClick={() => {
                  //         setIsOpen(false);
                  //       }}
                  //     >
                  //       Close
                  //     </button>
                  //   </p>
                  // </div>
                );
              })}
            </Modal>

            {/* <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex items-center justify-center min-h-full p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          Payment successful
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Your payment has been successfully submitted. We’ve
                            sent you an email with all of the details of your
                            order.
                          </p>
                        </div>

                        <div className="mt-4">
                          <button
                            type="button"
                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                          >
                            Got it, thanks!
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition> */}
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
    </div>
  );
};

export default RowContainer;
