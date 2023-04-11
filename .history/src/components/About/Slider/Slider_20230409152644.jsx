import { Carousel } from "react-carousel-minimal";

function Slider() {
  const data = [
    {
      image: "/images/microscope.jpg",
      caption: "Microscopes",
    },
    {
      image: "/images/centrifuge.png",
      caption: "Centrifuges",
    },
    {
      image: "/images/EUROPattern.jpg",
      caption: "Europattern",
    },
    {
      image: "/images/qbc.png",
      caption: "QBC",
    },
    {
      image: "/images/volumat1.png",
      caption: "Infussion Pumps",
    },
    {
      image: "/principles/euromex.png",
      caption: "euromex",
    },
    {
      image: "/principles/evermed.png",
      caption: "evermed",
    },
    {
      image: "/principles/fresenius.png",
      caption: "fresenius",
    },
    {
      image: "/principles/lmb.png",
      caption: "lmb",
    },
    {
      image: "/principles/PROHS.png",
      caption: "PROHS",
    },
    {
      image: "/principles/qbc.png",
      caption: "qbc",
    },
    {
      image: "/principles/SHELDON.png",
      caption: "SHELDON",
    },
    {
      image: "/principles/SPL.png",
      caption: "SPL",
    },
    {
      image: "/principles/WOODLEY.png",
      caption: "WOODLEY",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="grid grid-flow-col auto-cols-max">
      div
      <div style={{ textAlign: "center" }}>
        <div style={{}}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="20px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px 0px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;

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

// import React from "react";
// import { Link } from "react-router-dom";
// const Slider = (props) => {
//   const { img, title, content } = props;
//   console.log(props);
//   return (
//     <div
//       className="w-full h-auto flex flex-col items-center justify-center "
//       data-aos="fade-up-left"
//       data-aos-duration="3000"
//     >
//       <img className="d-block w-100" src={img} alt="First slide" />

//       <div className="caption d-md-block">
//         <div className="display">{title} </div>
//         <div className="content">{content}</div>
//         <Link to="/about" className="view_more" title="View More">
//           View More
//         </Link>
//         <Link
//           to="/contactUs"
//           className="view_more contact_us"
//           title="Contact Us"
//         >
//           Contact Us
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Slider;

// import React, { useState, useEffect, useRef } from "react";
// import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
// // import './Slider.css'

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
//       <div className="aspect-w-16 aspect-h-4 ">
//         <img
//           src={featuredProducts[currentIndex]}
//           alt="Slider"
//           className="object-fill h-96 w-200"
//         />
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
