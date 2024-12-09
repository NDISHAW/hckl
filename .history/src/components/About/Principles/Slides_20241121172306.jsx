import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import sigma from "./principles/sigma.png";
import drucker from "./principles/drucker.png";
import euroimmum2 from "./principles/euroimmum2.png";
import euromex from "./principles/euromex.png";
import fresenius from "./principles/fresenius.png";
import lmb from "./principles/lmb.png";
import PROHS from "./principles/PROHS.png";
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
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      // 0: {
      //   items: 1,
      // },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
      <p className="text-4xl justify-center font-bold capitalize text-Main relative before:absolute
       before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr
        from-blue-300 to-blue-900 
       transition-all ease-in-out duration-100 mr-auto ">
        Our Principles
      </p>
      <motion.div className="slide-section w-full flex items-center justify-between ">
        <div className="car grid grid-cols-1 md:grid-cols-1 gap-2 w-full bg-transparent md:mb-10">
          <motion.div className="flex h-auto">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={sigma} alt="no internet connection"></img>
                  </div>
                  {/* <motion.p
                    whileTap={{ scale: 0.75 }}
                    className="flex items-center gap-2 p-1 px-2 my-2 bg-primary rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
                  >
                    Sigma Laboratory Centrifuges is a worldwide leading
                    manufacturer of laboratory centrifuges. Centrifuges are
                    standard equipment in every laboratory and are used
                    intensively to separating components with different
                    densities from liquids, for which they are virtually
                    indispensable. Sigma offers a broad spectrum of laboratory
                    centrifuges, fixed-angle and swing-out rotors and
                    accessories. All of our products meet high standards of
                    reliability and safety. The application areas include
                    pharmaceutical research, biotechnology, medical analytics,
                    environmental analytics, petroleum analyses and many other
                    areas.
                  </motion.p> */}
                </div>
              </div>

              {/* <div className="col-lg-12">
                <div className="testi-item">
                  <motion.p
                    whileTap={{ scale: 0.75 }}
                    className="flex items-center gap-2 p-1 px-2 my-2 bg-primary rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
                  >
                    Our Mission is to build long-term relationships with our
                    customers and provide exceptional customer service by
                    pursuing business through innovation.
                  </motion.p>
                  <div className="client-info">
                    <img src={blueline} alt="no internet connection"></img>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={coldway} alt="no internet connection"></img>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-12">
                <div className="testi-item">
                  {/* <motion.p
                    whileTap={{ scale: 0.75 }}
                    className="flex items-center gap-2 p-1 px-2 my-2 bg-primary rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
                  >
                    Drucker Diagnostics is a world leader in the design and
                    production of centrifuges, dry hematology analzyers,
                    specimen protection lockboxes, and fluorescence microscopy
                    products. Founded in 1932, Drucker has become the most
                    common centrifuge brand in reference labs. Our entire
                    product line is proudly designed, built, and supported in
                    the USA. All operations take place in-house at our operating
                    centers in central Pennsylvania, just outside of State
                    College, PA.
                  </motion.p> */}
                  <div className="client-info">
                    <img src={drucker} alt="no internet connection"></img>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  {/* <motion.p
                    whileTap={{ scale: 0.75 }}
                    className="flex items-center gap-2 p-1 px-2 my-2 bg-primary rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
                  >
                    EUROIMMUN has extensive expertise in the fields of
                    immunology, cell biology, histology, biochemistry and
                    molecular biology. It produces test systems for the
                    laboratory diagnosis of autoimmune and infectious diseases,
                    allergies, and for gene analyses. In the foreground are test
                    systems for the determination of antibodies, but also of
                    antigens and genetic markers in patient samples. They are
                    based on both immunohisto-chemical and biochemical methods,
                    such as indirect immunofluorescence, microtiter ELISAs and
                    different blot techniques (Westernblot, EUROASSAY, EUROLINE,
                    EUROLINE-WB), and techniques from molecular biology
                    (microarray). EUROIMMUN bases its production on modern,
                    state-of-the-art procedures and microanalysis techniques
                    which partly carry worldwide patents. The company is amongst
                    the leading manufacturers of medical laboratory diagnostic
                    products.
                  </motion.p> */}
                  <div className="client-info">
                    <img src={euroimmum2} alt="no internet connection"></img>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  {/* <motion.p
                    whileTap={{ scale: 0.75 }}
                    className="flex items-center gap-2 p-1 px-2 my-2 bg-primary rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
                  >
                    Euromex Microscopen BV is a leading manufacturer of
                    microscopes and other optical instruments. Euromex has
                    become a world-class supplier of biological and stereo
                    microscopes. The corporate office is based in Arnhem, The
                    Netherlands. A facility with a 2,000 m2 conditioned
                    logistics warehouse, an optomechanical workshop, an R&D
                    department and a high-level quality control department.
                    Around the world, Euromex operates in more than 120
                    countries through distributors and resellers. A wide variety
                    of customers such as schools and educational institutes,
                    clinical and research laboratories and a broad range of
                    industrial customers are using Euromex microscopes. Euromex
                    Microscopen bv is a subsidiary of Euromex Optics Group bv, a
                    group holding company with active subsidiaries in the field
                    of optical instruments and high level optical and opto-
                    mechanical components.
                  </motion.p> */}
                  <div className="client-info">
                    <img src={euromex} alt="no internet connection"></img>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-12">
                <div className="testi-item">
                  <motion.p>
                    Our Mission is to build long-term relationships with our
                    customers and provide exceptional customer service by
                    pursuing business through innovation.
                  </motion.p>
                  <div className="client-info">
                    <img src={evermed} alt="no internet connection"></img>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={fresenius} alt="no internet connection"></img>
                  </div>
                  <motion.p
                    whileTap={{ scale: 0.75 }}
                    className="flex items-center gap-2 p-1 px-2 my-2 bg-primary rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
                  >
                    Our Mission is to build long-term relationships with our
                    customers and provide exceptional customer service by
                    pursuing business through innovation.
                  </motion.p>
                </div>
              </div> */}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={lmb} alt="no internet connection"></img>
                  </div>
                  {/* <motion.p
                    whileTap={{ scale: 0.75 }}
                    className="flex items-center gap-2 p-1 px-2 my-2 bg-primary rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
                  >
                    Lmb Technologie GmbH installed the first device for
                    separation of whole blood and closed a gap to offer devices
                    for the entire process of blood production, from the
                    donation to the distribution. Today Lmb’s range of products
                    comprises devices for the donation of blood, filtration,
                    separation, irradiation, storage and transport to offer a
                    global solution.
                  </motion.p> */}
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  {/* <motion.p
                    whileTap={{ scale: 0.75 }}
                    className="flex items-center gap-2 p-1 px-2 my-2 bg-primary rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
                  >
                    PROHS is a company dedicated to the development and
                    manufacture of hospital, laboratory and veterinary
                    equipment, specialized in the area of disinfection and
                    sterilization. Covering all the needs of a central
                    sterilization service (RUMED), PROHS stands out for the
                    ability to design, manufacture and install sterilization
                    units adapted to the needs and requirements of each Hospital
                    or Clinic. In the laboratory area, from an embryonic stage
                    we accompany and advise the client in the process of
                    developing a solution adapted to the sterilization and
                    disinfection needs of each project.
                  </motion.p> */}
                  <div className="client-info">
                    <img src={PROHS} alt="no internet connection"></img>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={qbc} alt="no internet connection"></img>
                    <motion.p
                      whileTap={{ scale: 0.75 }}
                      className="flex items-center gap-2 p-1 px-2 my-2 bg-primary rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
                    >
                      Our Mission is to build long-term relationships with our
                      customers and provide exceptional customer service by
                      pursuing business through innovation.
                    </motion.p>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="client-info">
                    <img src={SHELDON} alt="no internet connection"></img>
                  </div>
                  <motion.p
                    whileTap={{ scale: 0.75 }}
                    className="flex items-center gap-2 p-1 px-2 my-2 bg-primary rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
                  >
                    Sheldon Manufacturing, Inc. is an ISO 9001:2008 certified
                    manufacturer of high quality and innovative constant
                    temperature equipment to the global market. Major product
                    lines include incubators, humidity test chambers, ovens,
                    water and bead baths, and anaerobic chambers for the life
                    science, pharmaceutical, biomedical, environmental and
                    industrial markets
                  </motion.p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <motion.p
                    whileTap={{ scale: 0.75 }}
                    className="flex items-center gap-2 p-1 px-2 my-2 bg-primary rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
                  >
                    Since established in 1987, we are dedicated to manufacture
                    high quality plastic lab-ware, consistent to the finest
                    standards in the industries. With a team of enthusiastic
                    professionals continuously engaging in research, development
                    and quality control, our products fully comply with the
                    international regulatory requirements.
                  </motion.p>
                  <div className="client-info">
                    <img src={SPL} alt="no internet connection"></img>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <motion.p
                    whileTap={{ scale: 0.75 }}
                    className="flex items-center gap-2 p-1 px-2 my-2 bg-primary rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
                  >
                    With a heritage stretching back almost 30 years, Woodley
                    Equipment is a world leading, one- stop supplier of
                    equipment solutions to the Clinical Trials Industry. As a
                    private company, Woodley was established in October 1989 and
                    now operates from three offices and warehouse premises in
                    the North West of England and office and warehouse premises
                    in New York, USA. Developing a network of suppliers and
                    service providers around the globe, Woodley has successfully
                    grown, establishing a reputation for consistently providing
                    quality, reliable equipment services. This is reflected in
                    the achievement of an ISO 9001:2015 accreditation
                    recognizing the quality of our administrative and management
                    systems.
                  </motion.p>
                  <div className="client-info">
                    <img src={WOODLEY} alt="no internet connection"></img>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </motion.div>
        </div>
      </motion.div>
    </div>
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
