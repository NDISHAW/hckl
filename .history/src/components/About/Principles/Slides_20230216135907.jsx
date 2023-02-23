import { Carousel } from "react-carousel-minimal";

function Slides() {
  const data = [
    "/images/microscope.jpg",
    "/images/centrifuge.png",
    "/images/EUROPattern.jpg",
    "/images/qbc.png",
    "/images/volumat1.png",
  ];
  // [
  //   {
  //     image:
  //       /images/microscope.jpg",
  //     caption: "San Francisco",
  //   },
  //   {
  //     image:
  //       "/images/centrifuge.png",
  //     caption: "Scotland",
  //   },
  //   {
  //     image:
  //       "/images/EUROPattern.jpg",
  //     caption: "Darjeeling",
  //   },
  //   {
  //     image:
  //       "/images/qbc.png",
  //     caption: "San Francisco",
  //   },
  //   {
  //     image:
  //       "/images/volumat1.png",
  //     caption: "Scotland",
  //   },
  //   {
  //     image:
  //       "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
  //     caption: "Darjeeling",
  //   },
  //   {
  //     image:
  //       "/images/volumat1.png",
  //     caption: "San Francisco",
  //   },
  //   {
  //     image:
  //       "/images/volumat1.png",
  //     caption: "Scotland",
  //   },
  //   {
  //     image:
  //       "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
  //     caption: "Darjeeling",
  //   },
  // ];

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
        <h2>React Carousel Minimal</h2>
        <p>
          Easy to use, responsive and customizable carousel component for React
          Projects.
        </p>
        <div
          style={{
            padding: "0 20px",
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
