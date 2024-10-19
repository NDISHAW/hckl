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
    <div className="py-4 lg:py-8  relative">
        {/* <img src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png" className="h-2/5 lg:h-full w-full lg:w-1/2 absolute inset-0 object-cover object-center xl:block hidden" alt="map" /> */}
        
        <div className="xl:mx-auto xl:container  relative ">
          
            <div className="flex flex-wrap xl:mx-auto xl:container"><iframe id="iframe" className=" w-cover" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429154.75848513725!2d-117.38916630193054!3d32.824817514402476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan%20Diego%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1593793817578!5m2!1sen!2s"
         width={425} height={250} style={{ border: 0, height: 700 }} allowFullScreen title="maps" />
                <div className="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0 ">
                    <img src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png" className="h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center xl:hidden" alt="map" />
                    <div className="w-full flex flex-col items-start  xl:justify-start  relative z-20 xl:px-0 px-4 xl:py-0 py-4">
                        <div className="w-full 2xl:pl-48 xl:pt-1">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800">We’re Here</h1>
                            <div className="w-full md:w-10/12 mt-3">
                                <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">We believe digital innovation is at the heart of every business success</h2>
                                <div className="mt-4 md:mt-8">
                                    <h2 className="text-sm md:text-base text-indigo-700 font-semibold">Address</h2>
                                    <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">Office #13, NSTP, NUST University H-12 Sector, Islamabad</h2>
                                </div>
                                <div className="mt-4 md:mt-8">
                                    <h2 className="text-sm md:text-base text-indigo-700 font-semibold">Contact</h2>
                                    <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">+92 051 4567890 (Phone)</h2>
                                    <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">+92 123 4567890 (Cell)</h2>
                                </div>
                                <div className="mt-4 md:mt-8">
                                    <h2 className="text-sm md:text-base text-indigo-700 font-semibold">Email</h2>
                                    <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">alphasquad@example.com</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2   xl:pt-10 lg:pl-24">
                    <div className="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-indigo-700">Let’s Talk</h1>
                        <div className="w-full 2xl:w-8/12 mt-3">
                            <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">For enquiries, please email us using the form below</h2>
                            <div className="mt-4 md:mt-8">
                                <p className="text-gray-800 text-base font-medium">Name</p>
                                <input className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800" type="text" placeholder="Justin Timberlake" />
                            </div>
                            <div className="mt-4 md:mt-8">
                                <p className="text-gray-800 text-base font-medium">Email Address</p>
                                <input className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800" type="email" placeholder="example@mail.com" />
                            </div>
                            <div className="mt-4 md:mt-8">
                                <p className="text-gray-800 text-base font-medium">Message</p>
                                <textarea className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 resize-none hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black xl:h-40 py-5 pl-4 text-gray-800" type="text" placeholder="Write us something..." defaultValue={""} />
                            </div>
                            <div className="py-5">
                                <button className="py-3 md:py-5 px-5 md:px-10 bg-gray-900 text-white hover:opacity-90 ease-in duration-150 text-sm md:text-lg tracking-wider font-semibold">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
  );
};

export default Contact;


