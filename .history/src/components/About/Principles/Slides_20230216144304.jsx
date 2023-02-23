import React from 'react'

export default function Slides() {
  return (
    <div>Slides</div>
  )
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
