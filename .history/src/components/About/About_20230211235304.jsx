import React, { useEffect, location } from "react";
import Slide from '../About/Slider/Slide'
import Slider from './Slider/Slider';
import "aos/dist/aos.css";
import AOS from "aos";
import "aos/dist/aos.css";



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
    <div  data-aos="fade-up-right" data-aos-duration="3000">
      {/* <Slide /> */}
      <Slider />
      <<
    </div>
  );
}
