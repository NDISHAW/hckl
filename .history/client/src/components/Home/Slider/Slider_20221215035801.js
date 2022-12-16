import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScrollService from '../../../utilities/ScrollService';
import Animations from '../../../utilities/Animations';
// import  flex12  from "../img/flex12.png";
import flex12 from "../../images/flex12.png";
import microscope from "../../images/microscope.jpg";
import Header from '../../Header';

export default function Slider(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  // const fadeInSubscription =
  //   ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    navText: ["PREV", "NEXT"],
    responsive: {
      0: {
        nav: true,
      },
      768: {
        nav: true,
      },
      1000: {
        nav: true,
      },
    },
  };
  return (
    <div className="container">
      <Header/>
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
