import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import atron from "./principles/atron.png";
import blueline from './principles/blue-line.png';
import coldway from "./principles/coldway.png";
import drucker from "./principles/drucker.png";
import euroimmum2 from "./principles/euroimmum2.png";
import euromex from "./principles/euromex.png";
import evermed from "./principles/evermed.png";
import fresenius from "./principles/fresenius.png";
import lmb from "./principles/lmb.png";
import PROHS from "./principles/PROHS.png";
import qbc from "./principles/qbc.png";
import SHELDON from "./principles/SHELDON.png";
import SPL from "./principles/SPL.png";
import WOODLEY from "./principles/WOODLEY.png";
import { motion } from "framer-motion";
import './Slides.css'

export default function Slides() {
  
  const options = {
    loop: true,
    margin: 2,
    // nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <motion.div className="slide-section w-full flex items-center justify-between ">
      <p className="text-2xl font-bold capitalize text-Main relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-blue-300 to-blue-900 transition-all ease-in-out duration-100 mr-auto justify-center">
        Our Principles
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-1 gap-2 w-full bg-transparent md:mb-10">
        <motion.div className="flex h-10">
          <OwlCarousel
            className="owl-carousel"
            id="testimonial-carousel"
            {...options}
          >
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="client-info">
                  <img src={atron} alt="no internet connection"></img>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="testi-item">
                <div className="client-info">
                  <img src={blueline} alt="no internet connection"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="client-info">
                  <img src={coldway} alt="no internet connection"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="client-info">
                  <img src={drucker} alt="no internet connection"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="client-info">
                  <img src={euroimmum2} alt="no internet connection"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="client-info">
                  <img src={euromex} alt="no internet connection"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="client-info">
                  <img src={evermed} alt="no internet connection"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="client-info">
                  <img src={fresenius} alt="no internet connection"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="client-info">
                  <img src={lmb} alt="no internet connection"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="client-info">
                  <img src={PROHS} alt="no internet connection"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="client-info">
                  <img src={qbc} alt="no internet connection"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="client-info">
                  <img src={SHELDON} alt="no internet connection"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="client-info">
                  <img src={SPL} alt="no internet connection"></img>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="client-info">
                  <img src={WOODLEY} alt="no internet connection"></img>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </motion.div>
      </div>
    </motion.div>
  );
}





// import { Carousel } from "react-carousel-minimal";

// function Slides() {
//   const data = [
//     {
//       image: " /principles/atron.png",
//       caption: "San Francisco",
//     },
//     {
//       image: "/principles/blue-line.png",
//       caption: "Scotland",
//     },
//     {
//       image: "/principles/coldway.png",
//       caption: "Darjeeling",
//     },
//     {
//       image: "/principles/drucker.png",
//       caption: "San Francisco",
//     },
//     {
//       image: "/principles/euroimmum2.png",
//       caption: "Scotland",
//     },
//     {
//       image: "/principles/euromex.png",
//       caption: "Darjeeling",
//     },
//     {
//       image: "/principles/evermex.png",
//       caption: "San Francisco",
//     },
//     {
//       image: "/principles/fresenius.png",
//       caption: "Scotland",
//     },
//     {
//       image: "/principles/lmb.png",
//       caption: "Darjeeling",
//     },
//     {
//       image: "/principles/PROHS.png",
//       caption: "Darjeeling",
//     },
//     {
//       image: "/principles/qbc.png",
//       caption: "Darjeeling",
//     },
//     {
//       image: "/principles/SHELDON.png",
//       caption: "Darjeeling",
//     },
//     {
//       image: "/principles/SPL.png",
//       caption: "Darjeeling",
//     },
//     {
//       image: "/principles/WOODLEY.png",
//       caption: "Darjeeling",
//     },
//   ];

//   const captionStyle = {
//     fontSize: "2em",
//     fontWeight: "bold",
//   };
//   const slideNumberStyle = {
//     fontSize: "20px",
//     fontWeight: "bold",
//   };
//   return (
//     <div className="Slides">
//       <div style={{ textAlign: "center" }}>
//         <div
//           style={{
//             padding: "0 50px",
//           }}
//         >
//           <Carousel
//             data={data}
//             time={2000}
//             width="950px"
//             height="500px"
//             captionStyle={captionStyle}
//             radius="20px"
//             slideNumber={true}
//             slideNumberStyle={slideNumberStyle}
//             captionPosition="bottom"
//             automatic={true}
//             dots={true}
//             pauseIconColor="white"
//             pauseIconSize="40px"
//             slideBackgroundColor="darkgrey"
//             slideImageFit="cover"
//             thumbnails={true}
//             thumbnailWidth="100px"
//             style={{
//               textAlign: "center",
//               maxWidth: "850px",
//               maxHeight: "500px",
//               margin: "40px auto",
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Slides;

// import React from 'react'

// export default function Slides() {
//   return (
//     <div className="relative h-30 w-40 sm:h-44 sm:w-100 md:h-44 md:w-60 flex-shrink-0">
//       <Carousel showThumbs={false}>
//         {imgSrc?.map((url, index) => (
//           <div className="h-30 w-40 sm:h-44 sm:w-100 md:h-44 md:w-60 flex-shrink-0">
//             <img class="object-cover h-full w-full rounded-md" src={`${url}`} />
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// }
