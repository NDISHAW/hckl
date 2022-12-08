import React from 'react'
import "../App.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";  

export default function Slider() {
  return (
    <div class="container-fluid">
      <OwlCarousel 
      {loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }}
      className="owl-theme">
        <div class="owl-carousel owl-theme hero-slider">
          <div class="slide slide1">
            <div class="container">
              <div class="row">
                <div class="col-12 text-center text-white">
                  <h6 class="text-white text-uppercase">
                    design Driven for professional
                  </h6>
                  <h1 class="display-3 my-4">
                    We craft digital
                    <br />
                    experiances
                  </h1>
                  <a href="ww.brand.com" class="btn btn-brand">
                    Get Started
                  </a>
                  <a href="ww.brand.com" class="btn btn-outline-light ms-3">
                    Our work
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="slide slide2">
            <div class="container">
              <div class="row">
                <div class="col-12 col-lg-10 offset-lg-1 text-white">
                  <h6 class="text-white text-uppercase">
                    We craft digital experiances
                  </h6>
                  <h1 class="display-3 my-4">
                    Design Driven For <br />
                    Professionals
                  </h1>
                  <a href="ww.brand.com" class="btn btn-brand">
                    Get Started
                  </a>
                  <a href="ww.brand.com" class="btn btn-outline-light ms-3">
                    Our work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}
