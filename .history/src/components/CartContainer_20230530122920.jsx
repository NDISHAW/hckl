import React, { useEffect, useState, useRef } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import EmptyCart from "../img/emptyCart.svg";
import CartItem from "./CartItem";
import axios from "axios";

const CartContainer = () => {
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);
  const [toEmail, setToEmail]= useState()
  console.log(cartItems);

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTot(totalPrice);
    // console.log(tot);
  }, [tot, flag, cartItems]);

  const clearCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [],
    });

    localStorage.setItem("cartItems", JSON.stringify([]));
  };

  const form = useRef(null);

  // const sendEmail = async (e) => {
  //   const sgMail = require("@sendgrid/mail");
  //   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  //   const msg = {
  //     to: "ndichumuriithi@gmail.com", // Change to your recipient
  //     from: user.email, // Change to your verified sender
  //     subject: "Sending with SendGrid is Fun",
  //     text: "and easy to do anywhere, even with Node.js",
  //     html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  //   };
  //   sgMail
  //     .send(msg)
  //     .then(() => {
  //       console.log("Email sent");
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  const sendEmail = async (toEmail) => {
    
    

    try {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      await axios.post("http://localhost:5000/send-email", {
        toEmail,
        cartItems,
        tot,
      });
      toast("Email sent successfully!");
    } catch (error) {
      console.error(error.message);
      alert("Failed to send email!");
    }
  };
  // const sendEmail = async () => {
  //   let toEmail = user.email;
  //   const sgMail = require("@sendgrid/mail");
  //   sgMail.setApiKey(
  //     "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"
  //   );
  //   const msg = {
  //     to: toEmail, // Change to your recipient
  //     from: "info@hckl.co.ke", // Change to your verified sender
  //     subject: "Sending with SendGrid is Fun",
  //     text: "and easy to do anywhere, even with Node.js",
  //     html: `<p>Here are the contents of your shopping cart:</p><ul>${cartItems
  //       .map((item) => `<li>${item}</li>`)
  //       .join("")}</ul>`,
  //   };
  //   sgMail
  //     .send(msg)
  //     .then(() => {
  //       console.log("Email sent");
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]"
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <Toaster />
        <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
          onClick={clearCart}
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>

      {/* bottom section */}
      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
          {/* cart Items section */}
          <div className="w-full h-auto md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {/* cart Item */}
            {cartItems &&
              cartItems.length > 0 &&
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  setFlag={setFlag}
                  // flag={flag}
                />
              ))}
          </div>

          {/* cart total section */}
          <div className="fixed bottom-0 right-0 w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-12 h-flex hover:bg-green-600">
            {/* <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Total</p>
              <p className="text-gray-400 text-lg">Ksh {tot}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="text-gray-400 text-lg">Delivery</p>
              <p className="text-gray-400 text-lg">$ 2.5</p>
            </div> */}

            {/* <div className="w-full border-b border-gray-600 my-2"></div> */}

            <div className="w-full flex items-center justify-between">
              <p className="text-gray-200 text-xl font-semibold">Total</p>
              <p className="text-gray-200 text-xl font-semibold">Ksh {tot}</p>
            </div>
            <form ref={form}>
              <input type="hidden" name="to_email" value={user.email} >
              <input type="hidden" name="total" value={tot} />
              {cartItems.map((item, index) => (
                <div key={index}>
                  <input
                    type="hidden"
                    name={`cartItems[${index}][title]`}
                    value={item.title}
                  />
                  <input
                    type="hidden"
                    name={`cartItems[${index}][price]`}
                    value={item.price}
                  />
                  <input
                    type="hidden"
                    name={`cartItems[${index}][quantity]`}
                    value={item.qty}
                  />
                </div>
              ))}
            </form>
            {user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-blue-400 to-blue-900 text-gray-50 text-lg my-2 hover:shadow-lg hover:text-textColor"
                onClick={sendEmail}
              >
                Check Out
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
              >
                Login to check out
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart} className="w-300" alt="" />
          <p className="text-xl text-textColor font-semibold">
            Add some items to your cart
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CartContainer;

// import React, { useEffect, useState, useRef } from "react";
// import { MdOutlineKeyboardBackspace } from "react-icons/md";
// import { RiRefreshFill } from "react-icons/ri";
// import emailjs from "@emailjs/browser";
// import toast, { Toaster } from "react-hot-toast";
// import { motion } from "framer-motion";
// import { useStateValue } from "../context/StateProvider";
// import { actionType } from "../context/reducer";
// import EmptyCart from "../img/emptyCart.svg";
// import CartItem from "./CartItem";

// const CartContainer = () => {
//   const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
//   const [flag, setFlag] = useState(1);
//   const [tot, setTot] = useState(0);
//   console.log(cartItems);

//   const showCart = () => {
//     dispatch({
//       type: actionType.SET_CART_SHOW,
//       cartShow: !cartShow,
//     });
//   };

//   useEffect(() => {
//     let totalPrice = cartItems.reduce(function (accumulator, item) {
//       return accumulator + item.qty * item.price;
//     }, 0);
//     setTot(totalPrice);
//     // console.log(tot);
//   }, [tot, flag, cartItems]);

//   const clearCart = () => {
//     dispatch({
//       type: actionType.SET_CARTITEMS,
//       cartItems: [],
//     });

//     localStorage.setItem("cartItems", JSON.stringify([]));
//   };

//   const form = useRef(null);

//   const sendEmail = async (e) => {
//     e.preventDefault();

//     if (!user.email) {
//       toast.error("Please login to checkout");
//       return;
//     }

//     try {
//       const templateParams = {
//         to_email: user.email,
//         cartItems: cartItems,
//         total: tot,
//       };
//       await emailjs.send(
//         "service_0wmgnbl",
//         "template_xmmshxs",
//         templateParams,
//         "Z0CbWT44L2zlf5Ag-"
//       );
//       form.current.reset();
//       toast.success("Email sent successfully");
//     } catch (error) {
//       console.error(error);
//       toast.error(error.text);
//     }
//   };
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 200 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: 200 }}
//       className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]"
//     >
//       <div className="w-full flex items-center justify-between p-4 cursor-pointer">
//         <Toaster />
//         <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
//           <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
//         </motion.div>
//         <p className="text-textColor text-lg font-semibold">Cart</p>

//         <motion.p
//           whileTap={{ scale: 0.75 }}
//           className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
//           onClick={clearCart}
//         >
//           Clear <RiRefreshFill />
//         </motion.p>
//       </div>

//       {/* bottom section */}
//       {cartItems && cartItems.length > 0 ? (
//         <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
//           {/* cart Items section */}
//           <div className="w-full h-auto md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
//             {/* cart Item */}
//             {cartItems &&
//               cartItems.length > 0 &&
//               cartItems.map((item) => (
//                 <CartItem
//                   key={item.id}
//                   item={item}
//                   setFlag={setFlag}
//                   // flag={flag}
//                 />
//               ))}
//           </div>

//           {/* cart total section */}
//           <div className="fixed bottom-0 right-0 w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-12 h-flex hover:bg-green-600">
//             {/* <div className="w-full flex items-center justify-between">
//               <p className="text-gray-400 text-lg">Total</p>
//               <p className="text-gray-400 text-lg">Ksh {tot}</p>
//             </div>
//             <div className="w-full flex items-center justify-between">
//               <p className="text-gray-400 text-lg">Delivery</p>
//               <p className="text-gray-400 text-lg">$ 2.5</p>
//             </div> */}

//             {/* <div className="w-full border-b border-gray-600 my-2"></div> */}

//             <div className="w-full flex items-center justify-between">
//               <p className="text-gray-200 text-xl font-semibold">Total</p>
//               <p className="text-gray-200 text-xl font-semibold">Ksh {tot}</p>
//             </div>
//             <form ref={form}>
//               <input type="hidden" name="to_email" value={user.email} />
//               <input type="hidden" name="total" value={tot} />
//               {cartItems.map((item, index) => (
//                 <div key={index}>
//                   <input
//                     type="hidden"
//                     name={`cartItems[${index}][title]`}
//                     value={item.title}
//                   />
//                   <input
//                     type="hidden"
//                     name={`cartItems[${index}][price]`}
//                     value={item.price}
//                   />
//                   <input
//                     type="hidden"
//                     name={`cartItems[${index}][quantity]`}
//                     value={item.qty}
//                   />
//                 </div>
//               ))}
//             </form>
//             {user ? (
//               <motion.button
//                 whileTap={{ scale: 0.8 }}
//                 type="button"
//                 className="w-full p-2 rounded-full bg-gradient-to-tr from-blue-400 to-blue-900 text-gray-50 text-lg my-2 hover:shadow-lg hover:text-textColor"
//                 onClick={sendEmail}
//               >
//                 Check Out
//               </motion.button>
//             ) : (
//               <motion.button
//                 whileTap={{ scale: 0.8 }}
//                 type="button"
//                 className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
//               >
//                 Login to check out
//               </motion.button>
//             )}
//           </div>
//         </div>
//       ) : (
//         <div className="w-full h-full flex flex-col items-center justify-center gap-6">
//           <img src={EmptyCart} className="w-300" alt="" />
//           <p className="text-xl text-textColor font-semibold">
//             Add some items to your cart
//           </p>
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default CartContainer;
