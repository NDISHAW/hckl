import React, { useEffect, useState } from "react";
// import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import { Icon } from "@iconify/react";
import "./Header/Header.css";

const MainContainer = () => {
  const [filter, setFilter] = useState("hospital");

  const [{ foodItems }, dispatch] = useStateValue();

  return (
    <section
      className="w-full my-6"
      id="menu"
      data-aos="fade-up-left"
      data-aos-duration="3000"
    >
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-blue-300 to-blue-900 transition-all ease-in-out duration-100 mr-auto">
          Our Products
        </p>

        <div
          id="hospital"
          className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none"
        >
          {categories &&
            categories.map((category) => (
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

                {/* {category.subCartegories?.map((sub) => (
                  <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                className="w-275 h-[575px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">
                    <div
                      className={`text-sm ${
                        filter === category.urlParamName
                          ? "text-white"
                          : "text-textColor"
                      } group-hover:text-white`}
                    >
                      {sub.Equipment}
                    </div>
                    <div
                      className={`text-sm ${
                        filter === category.urlParamName
                          ? "text-white"
                          : "text-textColor"
                      } group-hover:text-white`}
                    >
                      {sub.Reagents}
                    </div>
                  </motion.div>
                ))} */}
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
};

export default MenuContainer;

// import React, { useEffect, useRef, useState } from "react";
// import HomeContainer from "./HomeContainer";
// import { motion } from "framer-motion";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// import RowContainer from "./RowContainer";
// import { useStateValue } from "../context/StateProvider";
// import MenuContainer from "./MenuContainer";
// import CartContainer from "./CartContainer";
// // import Slider from "./Slider/Slider";

// const MainContainer = () => {
//   const [{ foodItems, cartShow }, dispatch] = useStateValue();
//   const [scrollValue, setScrollValue] = useState(0);

//   useEffect(() => {}, [scrollValue, cartShow]);

//   return (
//     <>
//       {/* <Slider /> */}
//       <div
//         className="w-full h-auto flex flex-col items-center justify-center "
//         data-aos="fade-up-left"
//         data-aos-duration="3000"
//       >
//         {/* <HomeContainer /> */}

//         <section className="w-full my-6">
//           <div className="w-full flex items-center justify-between">
//             <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-blue-300 to-blue-900 transition-all ease-in-out duration-100">
//               Common Products
//             </p>

//             <div className="hidden md:flex gap-3 items-center">
//               {/*Next buttons */}
//               <motion.div
//                 whileTap={{ scale: 0.75 }}
//                 className="w-8 h-8 rounded-lg bg-blue-300 hover:bg-blue-900 cursor-pointer  hover:shadow-lg flex items-center justify-center"
//                 onClick={() => setScrollValue(-200)}
//               >
//                 <MdChevronLeft className="text-lg text-white" />
//               </motion.div>
//               <motion.div
//                 whileTap={{ scale: 0.75 }}
//                 className="w-8 h-8 rounded-lg bg-blue-300 hover:bg-blue-900 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
//                 onClick={() => setScrollValue(200)}
//               >
//                 <MdChevronRight className="text-lg text-white" />
//               </motion.div>
//             </div>
//           </div>
//           {/* products row */}
//           <RowContainer
//             scrollValue={scrollValue}
//             flag={true}
//             data={foodItems?.filter((n) => n.category === "hospital")}
//           />
//         </section>
//       </div>

//       <MenuContainer />

//       {cartShow && <CartContainer />}
//     </>
//   );
// };

// export default MainContainer;
