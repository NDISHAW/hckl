import React from "react";
import hrobg from "../img/hrobg.png";
import { heroData } from "../utils/data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdDeliveryDining } from "react-icons/md";
import Slider from "./About/Slider/Slider";
import Content from "./About/Content/Content";
import Slides from "./About/Principles/Slides";

const HomeContainer = () => {
  return (
    <>
      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-screen bg-transparent md:mb-10"
        id="home "
        data-aos="fade-up-left"
        // data-aos-duration="3000"
      >
        <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
          <div className="flex items-center gap-2 justify-center bg-Main-100 px-4 py-1 rounded-full bg-transparent">
            <p className="text-[2rem] lg:text-[4rem] font-bold tracking-wide text-headingColor">
              Welcome to <br /> Hospital Consumables Kenya Limited
              <span className="text-blue-400 text-[2rem] lg:text-[4rem]">
                (HCKL)
              </span>
            </p>
          </div>
          <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          HCKl is committed to quality of both products and services at affordable prices. In this regard, we endeavour to source and supply products from 
            well renowned manufacturers with great product support. The commitment to support extends to having the local personnel thoroughly trained 
            on the products both locally and at factory level, as well as maintaining stock of spares and accessories necessary to make the personnel 
            efficient in their support service execution. THe directors and senior staff bring in more than 30 years experience working in the health sector.
          </p>

          <Link to={"/about"}>
            <button
              type="button"
              className="bg-gradient-to-br bg-blue-300 hover:bg-blue-900 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
            >
              Learn more <span className="font-bold">...</span>
            </button>
          </Link>
        </div>
        <div className="py-2 flex-1 flex items-center relative ">
          <img
            src={hrobg}
            className=" ml-auto h-450 w-full lg:w-auto lg:h-650 md:h-400 "
            alt="hero-bg"
          />

          <div className="w-full h-full absolute top-0 left-0 bottom-0 flex items-center justify-center lg:px-32  py-4 gap-5 flex-wrap">
            <Slider />
          </div>
        </div>
      </section>
      {/* 
      <Content />
      <Slides /> */}
    </>
  );
};

export default HomeContainer;
