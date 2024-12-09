import { Header, RowContainer,  } from "../components";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import {Autoplay, EffectFade} from 'swiper/modules';
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import React, { useEffect, useRef, useState } from "react";

import { useStateValue } from "../context/StateProvider";
import istockphoto from "../img/istockphoto1.png";
import eldon  from "../img/eldonn.jpg";
import medcon from "../img/medcon.jpeg"; 
import Slider from "./About/Slider/Slider";
import euroimmune from "../img/euroimmune.jpg";
import nexuszoom from "../img/nexuszoom.jpg";
// import evermed from "../img/evermed1.png";
import evermed from "../img/evermed1.jpg";

const Button = ({className, onClick, type, text, style}) => {

    return (
      <button
        type={type}
        onClick={onClick}
        style={style}
        className={`${className} text-white rounded-full transform transition hover:scale-110 duration-300 ease-in-out z-50`}
      >
        {text}
      </button>
    );
  };

const Hero = ({colorDeep, mainText, shadow, mobileShadow, subText, img}) => {
    return (
      <main className={`flex lg:flex-row lg:items-center flex-col items-start px-4 z-10 relative overflow-hidden md:px-16 mt-11 pb-11`}>
        <div className="flex flex-col gap-4 lg:w-1/2 justify-center lg:items-start lg:text-left w-full items-center text-center mb-5 md:mb-0">
          <h1 className='md:text-5xl text-4xl mx-auto lg:mx-0 font-bold leading-tight text-navy'>
            We're about <span style={{color: `${colorDeep}`}}>{mainText}!</span>
          </h1>
          <p className='leading-normal md:text-2xl text-lg text-navy'>{subText}</p>
          <Button 
            type='button'
            text='Get Started'
            className='mt-8 text-xl font-bold py-4 px-9 focus:outline-none md:w-2/5 lg:w-1/2 2xl:w-2/5'
            style={window.innerWidth > 767 ? { backgroundColor: `${colorDeep}`, boxShadow: `${shadow}` } : { backgroundColor: `${colorDeep}`, boxShadow: `${mobileShadow}` }}
          />
        </div>
  
        <div className = "lg:w-3/5 w-full lg:-mt-6 relative">
          <img  src={img} loading="eager" alt={img} className = "w-3/5 mx-auto" width = "500" height = "screen"/>
        </div>
      </main>
    )
  }
  const data = [
    {
      id: 1,
      colorDeep: "#3E4659",
      colorLite: "#FFFFFF",
      mainText: "istockphoto",
      subText:
        "Nourish Your Skin: Experience Promoil's Argan Infused Elegance",
      shadow: "0px 10px 20px rgba(78, 112, 149, 0.8)",
      mobileShadow: "0px 5px 20px rgba(78, 112, 149, 0.8)",
      img: istockphoto,
    },
    {
      id: 5,
      colorDeep: "#13456E",
      colorLite: "#FFFFFF",
      mainText: "nexuszoom",
      subText:
        "Reveal Your Radiance with Promoil: Where Beauty Meets Nature's Best.",
      shadow: "0px 10px 20px rgba(67, 30, 30, 0.8)",
      mobileShadow: "0px 5px 20px rgba(67, 30, 30, 0.8)",
      img: nexuszoom,
    },
    {
      id: 2,
      colorDeep: "#B60313",
      colorLite: "#D6E6F3",
      mainText: "nature",
      subText:
        "Transform Your Skin, Unleash Your Beauty: Promoil's Argan Oil Magic.",
      shadow: "0px 10px 20px rgba(130, 134, 99, 0.8)",
      mobileShadow: "0px 5px 20px rgba(130, 134, 99, 0.8)",
      img: eldon,
    },
    // {
    //   id: 3,
    //   colorDeep: "#431e1e",
    //   colorLite: "#FFFFFF",
    //   mainText: "medcon",
    //   subText:
    //     "Reveal Your Radiance with Promoil: Where Beauty Meets Nature's Best.",
    //   shadow: "0px 10px 20px rgba(67, 30, 30, 0.8)",
    //   mobileShadow: "0px 5px 20px rgba(67, 30, 30, 0.8)",
    //   img: medcon,
    // },
    // {
    //   id: 4,
    //   colorDeep: "#35553f",
    //   colorLite: "#F3F1F1",
    //   mainText: "euroimmune",
    //   subText:
    //     "Reveal Your Radiance with Promoil: Where Beauty Meets Nature's Best.",
    //   shadow: "0px 10px 20px rgba(67, 30, 30, 0.8)",
    //   mobileShadow: "0px 5px 20px rgba(67, 30, 30, 0.8)",
    //   img: euroimmune,
    // },    
    
    // {
    //   id: 6,
    //   colorDeep: "#13456E",
    //   colorLite: "#FFFFFF",
    //   mainText: "evermed",
    //   subText:
    //     "Reveal Your Radiance with Promoil: Where Beauty Meets Nature's Best.",
    //   shadow: "0px 10px 20px rgba(67, 30, 30, 0.8)",
    //   mobileShadow: "0px 5px 20px rgba(67, 30, 30, 0.8)",
    //   img: evermed,
    // },
  ];
const Newhome = () => {
  const [scrollValue, setScrollValue] = useState(0);

  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  return (
   <Swiper
    spaceBetween={30}
    speed={1000}
    autoplay={{delay: 3000, disableOnInteraction: true}}
    effect={"fade"}
    fadeEffect={{crossFade: true}}
    modules={[Autoplay, EffectFade]}
    className="mySwiper"
    
   >
    {/* <Header /> */}
      {data.map(({id, colorDeep, colorLite, mainText, subText, shadow, mobileShadow, img}) => (
        <SwiperSlide key={id} style={{backgroundColor: `${colorLite}`}} className="w-full h-screen flex flex-col md:gap-10 gap-4 pt-4 md:pt-8 ">
          {/* <Header colorDeep={colorDeep}/> */}
          <Hero 
            colorDeep={colorDeep}
            mainText={mainText}
            subText={subText}
            shadow={shadow}
            mobileShadow={mobileShadow}
            img={img}
          />
        </SwiperSlide>
      ))}
       {/* <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our fresh & healthy fruits
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-200)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(200)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
          <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === "fruits")}
        />
        </div> */}


        <div className="py-2 flex-1 flex items-center relative ">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our fresh & healthy fruits
          </p>
          <Slider/>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-200)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(200)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
          <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === "fruits")}
        />
        </div>
        </div>
      
   </Swiper>
  )
}

export default Newhome