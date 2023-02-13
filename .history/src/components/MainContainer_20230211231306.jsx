import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";
// import Slider from "./Slider/Slider";

const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <>
      {/* <Slider /> */}
      <div
        className="w-full h-auto flex flex-col items-center justify-center "
        data-aos="fade-up-left"
        data-aos-duration="3000"
      >
        <HomeContainer />

        <section className="w-full my-6">
          <div className="w-full flex items-center justify-between">
            <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-blue-300 to-blue-900 transition-all ease-in-out duration-100">
              Common Products
            </p>

            <div className="hidden md:flex gap-3 items-center">
              {/*Next buttons */}
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-lg bg-blue-300 hover:bg-blue-900 cursor-pointer  hover:shadow-lg flex items-center justify-center"
                onClick={() => setScrollValue(-200)}
              >
                <MdChevronLeft className="text-lg text-white" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-lg bg-blue-300 hover:bg-blue-900 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
                onClick={() => setScrollValue(200)}
              >
                <MdChevronRight className="text-lg text-white" />
              </motion.div>
            </div>
          </div>
          {/* products row */}
          <RowContainer
            scrollValue={scrollValue}
            flag={true}
            data={foodItems?.filter((n) => n.category === "hospital")}
          />
        </section>
      </div>

      <MenuContainer />

      {cartShow && <CartContainer />}
    </>
  );
};

export default MainContainer;
