import React from 'react'
import Slide from '../About/Slider/Slide'
import Slider from './Slider/Slider';

export default function About() {
  return (
    <div className="w-full h-50vh flex flex-col items-center justify-center overflow-hidden ">
      <Slide />
      <Slider />
      About
    </div>
  );
}
