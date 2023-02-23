import { Carousel } from "react-carousel-minimal";

function Slides() {
  const data = 
  [
    {
      image:
       " /principles/atron.png",
      caption: "San Francisco",
    },
    {
      image:
        "/principles/blue-line.png",
      caption: "Scotland",
    },
    {
      image:
        "/principles/coldway.png",
      caption: "Darjeeling",
    },
    {
      image:
        "/principles/drucker.png",
      caption: "San Francisco",
    },
    {
      image:
        "/principles/euro",
      caption: "Scotland",
    },
    {
      image:
        "/principles/volumat1.png",
      caption: "Darjeeling",
    },
    {
      image:
        "/principles/volumat1.png",
      caption: "San Francisco",
    },
    {
      image:
        "/principles/volumat1.png",
      caption: "Scotland",
    },
    {
      image:
        "/principles/volumat1.png",
      caption: "Darjeeling",
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
    <div className="Slides">
      <div style={{ textAlign: "center" }}>
        {/* <h2>React Carousel Minimal</h2>
        <p>
          Easy to use, responsive and customizable carousel component for React
          Projects.
        </p> */}
        <div
          style={{
            padding: "0 50px",
          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
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
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Slides;

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
