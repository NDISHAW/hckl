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
    // <motion.div
    //   initial={{ opacity: 0, x: 200 }}
    //   animate={{ opacity: 1, x: 0 }}
    //   exit={{ opacity: 0, x: 200 }}
    //   className="fixed w-screen md:w-screen h-screen  drop-shadow-md flex flex-col z-[101]"
    // >
      
      <div className="relative h-full">
        {/* <img src="https://i.ibb.co/8sk93vs/Group-216-1.png" alt="Background image" class="" /> */}
        <iframe id="iframe" className=" w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.810762689687!2d36.87861611461446!3d-1.2876717359905419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13efb0a813ef%3A0x67fd419680769624!2sHospital%20Consumables!5e0!3m2!1sen!2ske!4v1678474322205!5m2!1sen!2ske"
         width={425} height={250} style={{ border: 0, height: 700 }} allowFullScreen title="maps" />
        <div className="container mx-auto w-full z-40  absolute bottom-0 right-0 lg:mb-32 mb-56 xl:w-3/12 lg:w-1/2 sm:w-8/12 w-11/12 lg:mr-20 md:mr-32">
          <div className=" flex justify-center lg:justify-end px-4">
            <div className="bg-white shadow rounded-lg p-8 sm:p-12 w-full">
              <h1 className="text-xl sm:text-2xl font-semibold leading-normal text-gray-800">How can we help?</h1>
              <div className="mt-4 sm:mt-16 flex flex-col w-full space-y-10">
                <input type="text" className="border-b border-gray-600 pb-2 placeholder-gray-600 focus:outline-none text-sm sm:text-base" placeholder="Name" />
                <input type="email" className="border-b border-gray-600 pb-2 placeholder-gray-600 focus:outline-none text-sm sm:text-base" placeholder="E-mail" />
                <input type="text" className="border-b border-gray-600 pb-2 placeholder-gray-600 focus:outline-none text-sm sm:text-base" placeholder="Phone" />
                <input type="text" className="border-b border-gray-600 pb-2 placeholder-gray-600 focus:outline-none text-sm sm:text-base" placeholder="Group Or Company" />
                <input type="text" className="border-b border-gray-600 pb-2 placeholder-gray-600 focus:outline-none text-sm sm:text-base" placeholder="How can we help?" />
                <div>
                  <button className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud-upload" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#4b5563" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
                      <polyline points="9 15 12 12 15 15" />
                      <line x1={12} y1={12} x2={12} y2={21} />
                    </svg>
                    <p className="text-sm sm:text-base text-gray-600">Upload File</p>
                  </button>
                </div>
                <button className="flex bg-indigo-700 rounded justify-center items-center py-2 sm:py-4 text-xs sm:text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600">Send Message</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    // </motion.div>
  );
};

export default Contact;


