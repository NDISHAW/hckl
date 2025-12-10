import React, { useEffect, useState, } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { firestore } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
// import { IoFastFood } from "react-icons/io5";
import { categories, LRACategories, labReagents } from "../utils/data";
import { getAllFoodItems } from "../utils/firebaseFunctions";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
// import { useStateValue } from "../context/StateProvider";
import { Icon } from "@iconify/react";
import "./Header/Header.css";
import LabContainer from "./Products/LabComponents/LAbReagents/LabContainer";

const LabRa = () => {
  const [filter, setFilter] = useState("LRA_Rhematology");

  const [{ foodItems, LabReagents }, dispatch] = useStateValue();
  // useEffect(() => {
  //   const fetchLabReagents = async () => {
  //     const labReagentsColRef = collection(firestore, "LabReagents");
  //     const labReagentsSnapshot = await getDocs(labReagentsColRef);

  //     const updatedLabReagents = [];
  //     console.log(updatedLabReagents);
  //     for (const doc of labReagentsSnapshot.docs) {
  //       const labReagentData = doc.data();
  //       const subcollectionRef = collection(doc.ref, "details");
  //       const subcollectionSnapshot = await getDocs(subcollectionRef);
  //       const subcollectionData = subcollectionSnapshot.docs.map((subDoc) =>
  //         subDoc.data()
  //       );

  //       labReagentData.subcollectionData = subcollectionData;
  //       updatedLabReagents.push({
  //         id: doc.id,
  //         data: labReagentData,
  //       });
  //     }

  //     // setLabReagents(updatedLabReagents);
  //     setFilter(updatedLabReagents);
  //     dispatch({
  //       type: actionType.SET_LAB_REAGENTS,
  //       LabReagents: updatedLabReagents,
  //     });
  //   };

  //   fetchLabReagents();
  // }, []);
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      console.log("All dood Items",data);
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };
      useEffect(() => {
        fetchData();    
        // console.log(LabReagents.data);    
      }, []);
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
          {labReagents &&
            labReagents.map((category) => (
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
        {/* <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category == filter)}
          />
        </div> */}
        <div className="w-full">
          <LabContainer
            // scrollValue={scrollValue}
            flag={false}
            data={foodItems?.filter((n) => n.category == filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default LabRa;

// import React, { useEffect, useState, useRef } from "react";
// import emailjs from "@emailjs/browser";
// // import { useCart } from "../../cart-context";
// import { useStateValue } from "../context/StateProvider";
// import { actionType } from "../context/reducer";
// import toast, { Toaster } from "react-hot-toast";
// import { getAllFoodItems } from '../utils/firebaseFunctions';

// const EmailOrderForm = () => {
// //   const { cartItems } = useCart();
//   const [{  cartItems, user }, dispatch] = useStateValue();
//   const [flag, setFlag] = useState(1);
//   const [tot, setTot] = useState(0);

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_0wmgnbl",
//         "template_u07hvsd",
//         form.current,
//         "Z0CbWT44L2zlf5Ag-"
//       )
//       .then(
//         (result) => {
//           console.log("SUCCESS!");
//           console.log(result.text);
//         },
//         (error) => {
//         //   console.log("FAILED!");
//           console.log(error.text);
//           toast.error(error.text);
//         }
//       );
//     console.log(cartItems);
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       {/* <label>Name</label> */}
//       {/* <input type="text" name="user_name" /> */}
//       <label>Email</label>
//       <input type="email" name="email" value={user.email} />
//       <label>Note</label>
//       <textarea name="message" />
//       <ul name="order">
//         {cartItems.map((item) => (
//           <li className="cart-item" key={item.index}>
//             {/* <div
//               className="cart-item-image"
//               style={{
//                 backgroundImage: `url(${item.image})`,
//                 width: "100px",
//                 height: "100px",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//               alt={item.name}
//             ></div> */}
//             <span className="cart-item-name" name="title">
//               {item.title}
//             </span>
//             <span className="cart-item-price" name="price">
//               {item.price}&nbsp;Kč
//             </span>
//           </li>
//         ))}
//       </ul>
//       <button className="cart-order" type="submit">
//         Order
//       </button>
//     </form>
//   );
// };

// export default EmailOrderForm;
