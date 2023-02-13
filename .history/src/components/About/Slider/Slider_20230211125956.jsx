





// import React, { useState, useEffect, useRef } from "react";
// import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
// import './Slider.css'

// const featuredProducts = [
//   "/images/microscope.jpg",
//   "/images/centrifuge.png",
//   "/images/EUROPattern.jpg",
//   "/images/qbc.png",
//   "/images/volumat1.png",
// ];

// let count = 0;
// let slideInterval;
// export default function Slider() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slideRef = useRef();

//   const removeAnimation = () => {
//     slideRef.current.classList.remove("fade-anim");
//   };

//   useEffect(() => {
//     slideRef.current.addEventListener("animationend", removeAnimation);
//     slideRef.current.addEventListener("mouseenter", pauseSlider);
//     slideRef.current.addEventListener("mouseleave", startSlider);

//     startSlider();
//     return () => {
//       pauseSlider();
//     };
//     // eslint-disable-next-line
//   }, []);

//   const startSlider = () => {
//     slideInterval = setInterval(() => {
//       handleOnNextClick();
//     }, 5000);
//   };

//   const pauseSlider = () => {
//     clearInterval(slideInterval);
//   };

//   const handleOnNextClick = () => {
//     count = (count + 1) % featuredProducts.length;
//     setCurrentIndex(count);
//     slideRef.current.classList.add("fade-anim");
//   };
//   const handleOnPrevClick = () => {
//     const productsLength = featuredProducts.length;
//     count = (currentIndex + productsLength - 1) % productsLength;
//     setCurrentIndex(count);
//     slideRef.current.classList.add("fade-anim");
//   };

//   return (
//     <section
//       ref={slideRef}
//       className="hero-slider relative gap-5 max-w-screen-xl m-auto  h-80vh md:h-50vh md:flex-auto justify-items-center"
//     >
//       <div className="aspect-w-16 aspect-h-9 ">
//         <img src={featuredProducts[currentIndex]} alt="Slider" />
//       </div>

//       <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center md:flex-auto">
//         <button
//           className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
//           onClick={handleOnPrevClick}
//         >
//           <AiOutlineVerticalRight size={30} />
//         </button>
//         <button
//           className=" bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
//           onClick={handleOnNextClick}
//         >
//           <AiOutlineVerticalLeft size={30} />
//         </button>
//       </div>
//     </section>
//   );
// }
