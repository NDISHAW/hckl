import React from "react";
import OwlCarousel from "react-owl-carousel";

import Slider from "./Slider";
import microscope from "./img/microscope.jpg";
import centrifuge from "./img/centrifuge.png";
import EUROPattern from "./img/EUROPattern.";
import qbc from "./img/qbc";
import volumat1 from "./img/volumat1";

function Slide() {

  const content1 =
    "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  return (
    <div className="slider index-3">
      <OwlCarousel className="owl-main  owl-theme" items={1} loop>
        <Slider
          img={microscope}
          title="Think Big Do Creative Grow Business "
          content={content1}
          loop
        />
        <Slider
          img={centrifuge}
          title="Think Big Do Creative Grow Business "
          content={content1}
          loop
        />
        <Slider
          img={EUROPattern}
          title="Think Big Do Creative Grow Business "
          content={content1}
        />
        <Slider
          img={qbc}
          title="Think Big Do Creative Grow Business "
          content={content1}
        />
        <Slider
          img={volumat1}
          title="Think Big Do Creative Grow Business "
          content={content1}
        />
      </OwlCarousel>
    </div>
  );
}

export default Slide;
