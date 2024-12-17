// import { Header, RowContainer,  } from "../components";
// import {Swiper, SwiperSlide} from 'swiper/react';
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/free-mode";
// import 'swiper/css/effect-fade';
// import {Autoplay, EffectFade} from 'swiper/modules';
// import { FreeMode, Pagination } from "swiper/modules";

// import { RxArrowRight } from "react-icons/rx";
// import { motion } from "framer-motion";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// import React, { useEffect, useRef, useState } from "react";

// import { useStateValue } from "../context/StateProvider";
// import microscopes from "../img/microscope.jpg";
// import eldon  from "../img/eldon.jpeg";
// import medcon from "../img/medcon.jpeg"; 
// import Slider from "./About/Slider/Slider";
// import euroimmune from "../img/euroimmune.jpg";
// import nexuszoom from "../img/nexuszoom.jpeg";
// // import evermed from "../img/evermed1.png";
// import evermed from "../img/evermed.jpg";
// import sigma from "../img/sigma.jpeg";
// import volumat1 from "../img/volumat1.png";
// import centrifuge from "../img/centrifuge.png";
// import euro from "../img/euro.jpg";

// const Button = ({className, onClick, type, text, style}) => {

//     return (
//       <button
//         type={type}
//         onClick={onClick}
//         style={style}
//         className={`${className} text-white rounded-full transform transition hover:scale-110 duration-300 ease-in-out z-50`}
//       >
//         {text}
//       </button>
//     );
//   };

// const Hero = ({colorDeep, mainText, shadow, mobileShadow, subText, img}) => {
//     return (
//       <main className="relative w-full h-screen overflow-hidden">
//   {/* Background Image */}
//   <img 
//     src={img} 
//     alt="Main visual representation" 
//     className="absolute inset-0 w-full h-full object-contain" 
//     loading="eager" 
//   />

//   {/* Overlay Text Container */}
//   <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 lg:px-16 z-10 bg-opacity-60 bg">
//     <div className="flex flex-col gap-4 w-full lg:w-1/2 text-white">
//       {/* <h1 className="md:text-5xl text-4xl font-bold leading-tight">
//         We're about <span style={{ color: colorDeep }}>{mainText}!</span>
//       </h1> */}
//       {/* <p className="leading-normal md:text-2xl text-lg">{subText}</p> */}
      
//       {/* Button */}
//       <Button 
//         type="button"
//         text="View Our Principle"
//         className="mt-8 text-xl font-bold py-4 px-9 focus:outline-none md:w-2/5 lg:w-1/3"
//         style={{ backgroundColor: colorDeep, boxShadow: window.innerWidth > 767 ? shadow : mobileShadow }}
//       />
//     </div>
//   </div>
// </main>
//     )
//   }
//   const data = [
//     {
//       id: 1,
//       colorDeep: "#3E4659",
//       colorLite: "#FFFFFF",
//       mainText: "Microscopes",
//       subText:
//         "Nourish Your Skin: Experience Promoil's Argan Infused Elegance",
//       shadow: "0px 10px 20px rgba(78, 112, 149, 0.8)",
//       mobileShadow: "0px 5px 20px rgba(78, 112, 149, 0.8)",
//       img: microscopes,
//     },
//     {
//       id: 5,
//       colorDeep: "#13456E",
//       colorLite: "#FFFFFF",
//       mainText: "nexuszoom",
//       subText:
//         "Reveal Your Radiance with Promoil: Where Beauty Meets Nature's Best.",
//       shadow: "0px 10px 20px rgba(67, 30, 30, 0.8)",
//       mobileShadow: "0px 5px 20px rgba(67, 30, 30, 0.8)",
//       img: nexuszoom,
//     },
//     {
//       id: 2,
//       colorDeep: "#B60313",
//       colorLite: "#D6E6F3",
//       mainText: "nature",
//       subText:
//         "Transform Your Skin, Unleash Your Beauty: Promoil's Argan Oil Magic.",
//       shadow: "0px 10px 20px rgba(130, 134, 99, 0.8)",
//       mobileShadow: "0px 5px 20px rgba(130, 134, 99, 0.8)",
//       img: eldon,
//     },
//     {
//       id: 3,
//       colorDeep: "#431e1e",
//       colorLite: "#FFFFFF",
//       mainText: "medcon",
//       subText:
//         "Reveal Your Radiance with Promoil: Where Beauty Meets Nature's Best.",
//       shadow: "0px 10px 20px rgba(67, 30, 30, 0.8)",
//       mobileShadow: "0px 5px 20px rgba(67, 30, 30, 0.8)",
//       img: medcon,
//     },
//     {
//       id: 4,
//       colorDeep: "#35553f",
//       colorLite: "#F3F1F1",
//       mainText: "euroimmune",
//       subText:
//         "Reveal Your Radiance with Promoil: Where Beauty Meets Nature's Best.",
//       shadow: "0px 10px 20px rgba(67, 30, 30, 0.8)",
//       mobileShadow: "0px 5px 20px rgba(67, 30, 30, 0.8)",
//       img: euroimmune,
//     },        
//     {
//       id: 6,
//       colorDeep: "#13456E",
//       colorLite: "#FFFFFF",
//       mainText: "evermed",
//       subText:
//         "Reveal Your Radiance with Promoil: Where Beauty Meets Nature's Best.",
//       shadow: "0px 10px 20px rgba(67, 30, 30, 0.8)",
//       mobileShadow: "0px 5px 20px rgba(67, 30, 30, 0.8)",
//       img: evermed,
//     },
    
//     {
//       id: 7,
//       colorDeep: "#13456E",
//       colorLite: "#FFFFFF",
//       mainText: "sigma",
//       subText:
//         "Reveal Your Radiance with Promoil: Where Beauty Meets Nature's Best.",
//       shadow: "0px 10px 20px rgba(67, 30, 30, 0.8)",
//       mobileShadow: "0px 5px 20px rgba(67, 30, 30, 0.8)",
//       img: sigma,
//     },
//     {
//       id: 8,
//       colorDeep: "#13456E",
//       colorLite: "#FFFFFF",
//       mainText: "volumat1",
//       subText:
//         "Reveal Your Radiance with Promoil: Where Beauty Meets Nature's Best.",
//       shadow: "0px 10px 20px rgba(67, 30, 30, 0.8)",
//       mobileShadow: "0px 5px 20px rgba(67, 30, 30, 0.8)",
//       img: volumat1,
//     },
//     {
//       id: 8,
//       colorDeep: "#E21F49",
//       colorLite: "#EBEBEB",
//       mainText: "euro",
//       subText:
//         "Reveal Your Radiance with Promoil: Where Beauty Meets Nature's Best.",
//       shadow: "0px 10px 20px rgba(67, 30, 30, 0.8)",
//       mobileShadow: "0px 5px 20px rgba(67, 30, 30, 0.8)",
//       img: euro,
//     },
//   ];
// const Newhome = () => {
//   const [scrollValue, setScrollValue] = useState(0);

//   const [{ foodItems, cartShow }, dispatch] = useStateValue();
//   return (
//     <
//     // className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-screen bg-transparent md:mb-10"
//     // id="home "
//     // data-aos="fade-up-left"
//     // data-aos-duration="3000"
//   > 
//    <Swiper
//     spaceBetween={30}
//     speed={1000}
//     Pagination={{ clickable: true }}
//     autoplay={{delay: 3000, disableOnInteraction: false}}
//     navigation
//     effect={"fade"}
//     fadeEffect={{crossFade: true}}
//     modules={[Autoplay, EffectFade]}
//     className="mySwiper"
    
//    >
//     {/* <Header /> */}
//       {data.map(({id, colorDeep, colorLite, mainText, subText, shadow, mobileShadow, img}) => (
//         <SwiperSlide key={id} style={{backgroundColor: `${colorLite}`}} 
//         breakpoints={{
//           340: {
//             slidesPerView: 1,
//             spaceBetween: 15,
//           },
//           700: {
//             slidesPerView: 1,
//             spaceBetween: 15,
//           },
//         }}
//         freeMode={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[FreeMode, Pagination]}className="w-full h-screen flex flex-col md:gap-10 gap-4 pt-4 md:pt-8 ">
//           {/* <Header colorDeep={colorDeep}/> */}
//           <Hero 
//             colorDeep={colorDeep}
//             mainText={mainText}
//             subText={subText}
//             shadow={shadow}
//             mobileShadow={mobileShadow}
//             img={img}
//           />
//         </SwiperSlide>
//       ))}
//        {/* <div className="w-full flex items-center justify-between">
//           <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
//             Our fresh & healthy fruits
//           </p>
//           <div className="hidden md:flex gap-3 items-center">
//             <motion.div
//               whileTap={{ scale: 0.75 }}
//               className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
//               onClick={() => setScrollValue(-200)}
//             >
//               <MdChevronLeft className="text-lg text-white" />
//             </motion.div>
//             <motion.div
//               whileTap={{ scale: 0.75 }}
//               className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
//               onClick={() => setScrollValue(200)}
//             >
//               <MdChevronRight className="text-lg text-white" />
//             </motion.div>
//           </div>
//           <RowContainer
//           scrollValue={scrollValue}
//           flag={true}
//           data={foodItems?.filter((n) => n.category === "fruits")}
//         />
//         </div> */}


        
//    </Swiper>
//    <div className="py-2 flex-1 flex items-center relative ">
//         <div className="w-full flex items-center justify-between">
//           <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
//             Our fresh & healthy fruits
//           </p>
//           {/* <Slider/> */}
//           <div className="hidden md:flex gap-3 items-center">
//             <motion.div
//               whileTap={{ scale: 0.75 }}
//               className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
//               onClick={() => setScrollValue(-200)}
//             >
//               <MdChevronLeft className="text-lg text-white" />
//             </motion.div>
//             <motion.div
//               whileTap={{ scale: 0.75 }}
//               className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
//               onClick={() => setScrollValue(200)}
//             >
//               <MdChevronRight className="text-lg text-white" />
//             </motion.div>
//           </div>
//           <RowContainer
//           scrollValue={scrollValue}
//           flag={true}
//           data={foodItems?.filter((n) => n.category === "fruits")}
//         />
//         </div>
//         </div>
      
//    </>
//   )
// }

// export default Newhome


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import microscopes from "../img/microscope.jpg";
import eldon  from "../img/eldon.jpeg";
import medcon from "../img/medcon.jpeg"; 
import Slider from "./About/Slider/Slider";
import euroimmune from "../img/euroimmune.jpg";
import nexuszoom from "../img/nexuszoom.jpeg";
// import evermed from "../img/evermed1.png";
import evermed from "../img/evermed.jpg";
import sigma from "../img/sigma.jpeg";
import volumat1 from "../img/volumat1.png";
import centrifuge from "../img/centrifuge.png";
import euro from "../img/euro.jpg";
import { Link } from "react-router-dom";

const Button = ({ className, onClick, text, style }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      className={`${className} text-white rounded-full transform transition hover:scale-110 duration-300 ease-in-out z-50`}
    >
      {text}
    </button>
  );
};

const Hero = ({ colorDeep, mainText, subText, shadow, mobileShadow, img }) => {
  return (
    <main className="relative w-full h-screen ">
      {/* Background Image */}
      <img
        src={img}
        alt={mainText}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Overlay Text Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 lg:px-16 z-10 bg-opacity-60 bg">
        <div className="flex flex-col gap-4 w-full lg:w-1/2 text-white">
          {/* Text */}
          <h1 className="md:text-5xl text-4xl font-bold leading-tight">
            We're about <span style={{ color: colorDeep }}>{mainText}!</span>
          </h1>
          <p className="leading-normal md:text-2xl text-lg">{subText}</p>
                 {/* Button */}
                 <Link to={${link} className="flex items-center gap-2">
      <Button 
      type="button"
         text="View Our Principle"
        className="mt-8 text-xl font-bold py-4 px-9 focus:outline-none md:w-2/5 lg:w-1/3"
         style={{ backgroundColor: colorDeep, boxShadow: window.innerWidth > 767 ? shadow : mobileShadow }}
         onClick={() => alert(`Navigating to ${mainText} details`)}
      /> </Link>
        </div>
      </div>
    </main>
  );
};

const data = [
  {
    id: 1,
    colorDeep: "#3E4659",
    colorLite: "#FFFFFF",
    mainText: "Microscopes",
    subText:
      "Nourish Your Skin: Experience Promoil's Argan Infused Elegance",
    shadow: "0px 10px 20px rgba(78, 112, 149, 0.8)",
    mobileShadow: "0px 5px 20px rgba(78, 112, 149, 0.8)",
    link:"https://www.euromex.com/en/",
    img: microscopes,
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
    link:"https://www.euromex.com/en/"
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
    link:"https://eldoncard.com/"
  },
  {
    id: 3,
    colorDeep: "#431e1e",
    colorLite: "#FFFFFF",
    mainText: "medcon",
    subText:
      "Reveal Your Radiance with Promoil: Where Beauty Meets Nature's Best.",
    shadow: "0px 10px 20px rgba(67, 30, 30, 0.8)",
    mobileShadow: "0px 5px 20px rgba(67, 30, 30, 0.8)",
    img: medcon,
    link:"http://www.medconn.com/en"
  },
  {
    id: 4,
    colorDeep: "#35553f",
    colorLite: "#F3F1F1",
    mainText: "euroimmune",
    subText:
      "Reveal Your Radiance with Promoil: Where Beauty Meets Nature's Best.",
    shadow: "0px 10px 20px rgba(67, 30, 30, 0.8)",
    mobileShadow: "0px 5px 20px rgba(67, 30, 30, 0.8)",
    img: euroimmune,
    link:"https://www.euroimmun.com/"
  },        
  {
    id: 6,
    colorDeep: "#13456E",
    colorLite: "#FFFFFF",
    mainText: "evermed",
    subText:
      "Experts in professional refrigiration for over 60 years",
    shadow: "0px 10px 20px rgba(67, 30, 30, 0.8)",
    mobileShadow: "0px 5px 20px rgba(67, 30, 30, 0.8)",
    img: evermed,
    link:"https://www.evermed.it/en/"
  },
  
  {
    id: 7,
    colorDeep: "#13456E",
    colorLite: "#FFFFFF",
    mainText: "sigma",
    subText:
      "Laboratory centrifuges for highest demands",
    shadow: "0px 10px 20px rgba(67, 30, 30, 0.8)",
    mobileShadow: "0px 5px 20px rgba(67, 30, 30, 0.8)",
    img: sigma,
    link:"https://www.sigma-zentrifugen.de/en"
  },
  {
    id: 8,
    colorDeep: "#13456E",
    colorLite: "#FFFFFF",
    mainText: "volumat1",
    subText:
      "Reveal Your Radiance with Promoil: Where Beauty Meets Nature's Best.",
    shadow: "0px 10px 20px rgba(67, 30, 30, 0.8)",
    mobileShadow: "0px 5px 20px rgba(67, 30, 30, 0.8)",
    img: volumat1,
    link:"https://www.agiliasystem.com/"
  },
  {
    id: 8,
    colorDeep: "#E21F49",
    colorLite: "#EBEBEB",
    mainText: "euro",
    subText:
      "Reveal Your Radiance with Promoil: Where Beauty Meets Nature's Best.",
    shadow: "0px 10px 20px rgba(67, 30, 30, 0.8)",
    mobileShadow: "0px 5px 20px rgba(67, 30, 30, 0.8)",
    img: euro,
    link:"https://www.euroimmun.com/"
  },
];

const NewHome = () => {
  return (
    <Swiper
      spaceBetween={30}
      speed={1000}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      effect={"fade"}
      fadeEffect={{ crossFade: true }}
      modules={[Autoplay, EffectFade, Pagination]}
      className="mySwiper"
    >
      {data.map(({ id, colorDeep, mainText, subText, shadow, mobileShadow, img, buttonStyle }) => (
        <SwiperSlide key={id} className="relative w-full h-screen">
          <Hero
            colorDeep={colorDeep}
            mainText={mainText}
            subText={subText}
            shadow={shadow}
            mobileShadow={mobileShadow}
            img={img}
          />

          {/* Custom Button */}
          {/* <Button
            text="Learn More"
            className="absolute mt-8 text-xl font-bold py-4 px-9 focus:outline-none md:w-2/5 lg:w-1/3"
            style={{
              position: "absolute ",
              zIndex: 10,
              ...buttonStyle,
              backgroundColor: "colorDeep",
              boxShadow: window.innerWidth > 767 ? shadow : mobileShadow // Apply custom positioning for each slide
            }}
            onClick={() => alert(`Navigating to ${mainText} details`)}
          /> */}
          {/* className="mt-8 text-xl font-bold py-4 px-9 focus:outline-none md:w-2/5 lg:w-1/3"
         style={{ backgroundColor: colorDeep, boxShadow: window.innerWidth > 767 ? shadow : mobileShadow }} */}
      
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewHome;
