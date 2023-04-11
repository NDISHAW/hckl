import React, { useEffect, useState } from "react";
import Slide from '../About/Slider/Slide'
import Slider from './Slider/Slider';
import "aos/dist/aos.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Content from './Content/Content';
import Slides from "./Principles/Slides";
import History from "./History/History";
import CartContainer from "../CartContainer";
import { useStateValue } from "../../context/StateProvider"



export default function About() {

  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);

  useEffect(() => {
    AOS.init({
      once: true,
      // disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });


  return (
    <div
      className="w-screen h-auto flex flex-col bg-primary scrollbar-hide"
      data-aos="fade-up-right"
      // data-aos-duration="1000"
    >
      {/* <Slide /> */}
      <Slider />
      <Content />
      <Slides />
      <div
        className="w-screen h-auto flex flex-col bg-primary py-8"
        data-aos="fade-up-right"
        // data-aos-duration="3000"
      >
        {/* <History /> */}
      </div>
      <History />
      {cartShow && <CartContainer />}
    </div>
  );
}
