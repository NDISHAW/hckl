import React from 'react'
import Slide from '../About/Slider/Slide'
import Slider from './Slider/Slider';
import "aos/dist/aos.css";
import AOS from "aos";
import "aos/dist/aos.css";
  useEffect(() => {
    fetchData();
  }, []);
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change
export default function About() {
  return (
    <div data-aos="fade-up" data-aos-duration="3000">
      <Slide />
      <Slider />
      About
    </div>
  );
}
