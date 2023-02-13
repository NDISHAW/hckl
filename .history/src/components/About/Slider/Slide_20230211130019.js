import React from "react";
import OwlCarousel from "react-owl-carousel";

import Slider from "..";
import microscope from "../../../img/microscope";
import centrifuge from "../../../img/";
import EUROPattern from "../../../img/";
import qbc from "../../../img/";
import volumat1 from "../../../img/";

function Slider() {

  const content1 =
    "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  return (
    <div className="slider index-3">
      <OwlCarousel className="owl-main  owl-theme" items={1} loop>
        <Slide
          img={microscope}
          title="Think Big Do Creative Grow Business "
          content={content1}
          loop
        />
        <Slide
          img={centrifuge}
          title="Think Big Do Creative Grow Business "
          content={content1}
          loop
        />
        <Slide
          img={EUROPattern}
          title="Think Big Do Creative Grow Business "
          content={content1}
        />
        <Slide
          img={qbc}
          title="Think Big Do Creative Grow Business "
          content={content1}
        />
        <Slide
          img={volumat1}
          title="Think Big Do Creative Grow Business "
          content={content1}
        />
      </OwlCarousel>
    </div>
  );
}

export default Slider;
