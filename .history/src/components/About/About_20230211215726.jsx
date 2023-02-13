import React from 'react'
import Slide from '../About/Slider/Slide'
import Slider from './Slider/Slider';
import "aos/dist/aos.css";

export default function About() {
  return (
    <div data-aos="fade-up" data-aos-duration="3000">
      <Slide />
      <Slider />
      About
    </div>
  );
}
