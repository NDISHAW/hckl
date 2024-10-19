import { createElement, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { GrMail } from "react-icons/gr";
import { MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import Modal from "../Manage/Modal";
import { motion } from "framer-motion";
import Typical from "react-typical";

const Contact = ({ onClose, open }) => {
  const Contact = {
    title: "Contact Us",
    subtitle: "Feel free to send us an email and we will get in touch. We appreciate your feedback.",
    social_media: [
      {
        text: "ndichumuriithi@gmail.com",
        icon: GrMail,
        link: "mailto:ndichumuriithi@gmail.com",
      },
      {
        text: "+254 706772817",
        icon: MdCall,
        link: "https://wa.me/+254706772817",
      },
      {
        text: "ndichumuriithi",
        icon: BsInstagram,
        link: "https://www.instagram.com/ndichumuriithi/",
      },
    ],
  };
  // const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0wmgnbl",
        "template_xmmshxs",
        form.current,
        "Z0CbWT44L2zlf5Ag-"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <>
    <div className="relative h-full">
      {/* <img src="https://i.ibb.co/8sk93vs/Group-216-1.png" alt="Background image" class="" /> */}
      <iframe id="iframe" className=" w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.810762689687!2d36.87861611461446!3d-1.2876717359905419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13efb0a813ef%3A0x67fd419680769624!2sHospital%20Consumables!5e0!3m2!1sen!2ske!4v1678474322205!5m2!1sen!2ske"
       width={425} height={350} style={{ border: 0, height: 500 }} allowFullScreen title="maps" />
      <div className="container mx-auto w-full z-40  absolute bottom-0 right-0 lg:mb-32 mb-56 xl:w-3/12 lg:w-1/2 sm:w-8/12 w-11/12 lg:mr-20 md:mr-32"    
      data-aos="fade-up">
      <form
                ref={form}
                onSubmit={sendEmail}
                className="flex justify-center lg:justify-end px-4 "
              >
        <div className=" flex justify-center lg:justify-end px-4">
          <div className="bg-white shadow rounded-lg p-8 sm:p-12 w-full">
            <h1 className="text-xl sm:text-2xl font-semibold leading-normal text-gray-800">How can we help?</h1>
            <div className="mt-4 sm:mt-16 flex flex-col w-full space-y-10">
              <input type="text" name="from_name" className="border-b border-gray-600 pb-2 placeholder-gray-600 focus:outline-none text-sm sm:text-base" placeholder="Name" />
              <input type="email"  name="user_email" className="border-b border-gray-600 pb-2 placeholder-gray-600 focus:outline-none text-sm sm:text-base" placeholder="E-mail" />
              <input type="text" 
                  name="phonenumber"
                  pattern="[0-9._+]+{1,63}$" className="border-b border-gray-600 pb-2 placeholder-gray-600 focus:outline-none text-sm sm:text-base" placeholder="Phone" />
              <input type="text" className="border-b border-gray-600 pb-2 placeholder-gray-600 focus:outline-none text-sm sm:text-base" placeholder="How can we help?" />             
              <button className="flex bg-blue-400 rounded justify-center items-center py-2 sm:py-4 text-xs sm:text-base font-medium text-white
              afocus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600"
                  name="message">Send Message</button>
            </div>
          </div>
        </div>
        </form>
      </div>
      <div className="w-full relative z-20 bg-blue-400 pt-20 pb-8 md:pt-16 md:pb-8 px-4">
        
        <div className="container mx-auto flex flex-col space-y-6 lg:space-y-0 lg:flex-row justify-between">
          <div className="flex space-x-6 flex-row lg:space-x-0 sm:items-start justify-between lg:justify-center">
            <div className="pr-4">
              <h1 className="text-base sm:text-2xl font-medium text-white">Address</h1>
              <p className="text-xs sm:text-base leading-normal
               text-white sm:mt-4 lg:w-1/2">Buruburu shopping Centre Ngemwa House 2nd floor Office No. 23.</p>
              <p className="text-xs sm:text-base leading-normal text-white sm:mt-4 lg:w-1/2">P.O BOX 11038-00100 Nairobi Kenya contact11.jpg</p>
            </div>
            <div className>
              <h1 className="text-base sm:text-2xl font-medium text-white">Contact</h1>
              <p className="text-xs sm:text-base leading-normal text-white sm:mt-4 lg:w-1/2">info@hckl.co.ke</p>
              <p className="text-xs sm:text-base leading-normal text-white">+254 (0)20 206 7969</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </>
  );
};

export default Contact;


