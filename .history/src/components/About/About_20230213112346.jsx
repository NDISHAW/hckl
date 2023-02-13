import React, { useEffect, location } from "react";
import Slide from '../About/Slider/Slide'
import Slider from './Slider/Slider';
import "aos/dist/aos.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Content from './Content/Content';



export default function About() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });


  return (
    <div
      className="w-full h-auto flex flex-col items-center justify-center "
      data-aos="fade-up-right"
      data-aos-duration="3000"
    >
      {/* <Slide /> */}
      <Slider />
      {/* <Content /> */}
      <div className="flex flex-row">
        <div className="basis-1/4 md:basis-1">
          <Slider />
          <h2>01</h2>
          <h2>01</h2>
          <h2>01</h2>
          <h2>01</h2>
          <h2>01</h2>
        </div>
        <div className="basis-1/4">
          <Slider />
          <h2>02</h2>
          <h2>02</h2>
          <h2>02</h2>
          <h2>02</h2>
          <h2>02</h2>
        </div>
        <div className="basis-1/2">
          <Slider />
          <h2>03</h2>
          <h2>03</h2>
          <h2>03</h2>
          <h2>03</h2>
          <h2>03</h2>
        </div>
      </div>
    </div>
  );
}
