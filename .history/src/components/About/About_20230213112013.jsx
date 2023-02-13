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
      <div class="flex flex-row">
        <div class="basis-1/4">h2</div>
        <div class="basis-1/4">02</div>
        <div class="basis-1/2">03</div>
      </div>
    </div>
  );
}
