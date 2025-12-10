import React from "react";
import OwlCarousel from "react-owl-carousel";

import Slide from "../components/Slide";
import img1 from "../img/slide-1.jpg";
import img2 from "../img/slide-2.jpg";
import img3 from "../img/slide-3.jpg";
import img4 from "../img/slide-4.jpg";

function Slider() {
  const featuredProducts = [
  "/images/.jpg",
  "/images/centrifuge.png",
  "/images/EUROPattern.jpg",
  "/images/qbc.png",
  "/images/volumat1.png",
];
  const content1 =
    "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  return (
    <div className="slider index-3">
      <OwlCarousel className="owl-main  owl-theme" items={1} loop>
        <Slide
          img={img1}
          title="Think Big Do Creative Grow Business "
          content={content1}
          loop
        />
        <Slide
          img={img2}
          title="Think Big Do Creative Grow Business "
          content={content1}
          loop
        />
        <Slide
          img={img3}
          title="Think Big Do Creative Grow Business "
          content={content1}
        />
        <Slide
          img={img4}
          title="Think Big Do Creative Grow Business "
          content={content1}
        />
      </OwlCarousel>
    </div>
  );
}

export default Slider;
