import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScrollService from '../../../utilities/ScrollService';
import Animations from '../../../utilities/Animations';
// import  flex12  from "../img/flex12.png";
import flex12 from "../../images";
// import microscope from "../../images/microscope";

export default function Slider(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  // const fadeInSubscription =
  //   ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
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
    <div className="container">
      <OwlCarousel className="owl-carousel" {...options}>
        <div className="col-lg-12">
          <img src={flex12} alt="Diagnostic"></img>
        </div>
        <div className="col-lg-12">
          <img src={microscope} alt="Diagnostic"></img>
        </div>
        <div className="col-lg-12">
          <img src={flex12} alt="Diagnostic"></img>
        </div>
      </OwlCarousel>
    </div>
  );
}
