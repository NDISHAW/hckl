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
    <div
      className="w-auto h-fit flex flex-col bg-primary mb-"
      
    ><p className="text-3xl font-bold capitalize text-Main relative before:absolute before:rounded-lg
    before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-blue-300 to-blue-900
    transition-all ease-in-out duration-100 mr-auto justify-center ">
 CONTACT US
   </p>
            <div className="xl:flex lg:flex pt-14 pb-5">
                <div className="xl:w-3/5 lg:w-3/5 bg-gray-200 h-auto">
                    <form id="contact" className="bg-white py-5 px-8" data-aos="fade-right
                    ref={form}
                    onSubmit={sendEmail}"
                      data-aos-duration="1000">
                        <h1 className="xl:text-4xl text-3xl text-gray-800 font-extrabold mb-8">Send Us A Message</h1>
                        <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                            <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                                <div className="flex flex-col">
                                    <label htmlFor="full_name" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Full Name
                                    </label>
                                    <input required id="full_name" name="from_name" type="text" className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder />
                                </div>
                            </div>
                            <div className="w-2/4 max-w-xs">
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Email
                                    </label>
                                    <input required id="email" name="user_email" type="email" 
                                    className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-wrap">
                            <div className="w-2/4 max-w-xs">
                                <div className="flex flex-col">
                                    <label htmlFor="phone" className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2">
                                        Phone
                                    </label>
                                    <input required id="phone" type="tel" 
                                    name="phonenumber"
                                    // pattern="[0-9._+]+{1,63}$"
                                    className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                     placeholder />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-full sm:w-1/2 mt-6">
                            <div className="flex flex-col">
                                <label className="text-sm font-semibold text-gray-800 mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea placeholder  
                                name="message"
                                className="text-sm border-gray-300 border mb-6 rounded py-2 outline-none resize-none px-3 xl:w-11/12" rows={5} id="message" defaultValue={""} />
                            </div>
                            <button className="btn self-start focus:outline-none bg-indigo-700 mb-1 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="xl:w-2/5 lg:w-2/5 py-16 flex items-center"
                data-aos="fade-left"
                data-aos-duration="1000">
                    <div className="w-5/6 mx-auto">
                        <p className="text-base text-gray-600 tracking-wide font-normal">
                        Buruburu shopping Centre Ngemwa House  <br />
                        2nd floor Office No. 23.
                        </p>
                        <div className="flex justify-between mt-6 mb-3">
                            <div className="flex items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <rect x={3} y={5} width={18} height={14} rx={2} />
                                        <polyline points="3 7 12 13 21 7" />
                                    </svg>
                                </div>
                                <p className="pl-2 text-gray-600 text-sm font-normal"> info@hckl.co.ke</p>
                            </div>
                            <div className="flex items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#718096" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                                        <path d="M15 7a2 2 0 0 1 2 2" />
                                        <path d="M15 3a6 6 0 0 1 6 6" />
                                    </svg>
                                </div>
                                <p className="pl-2 text-gray-600 text-sm font-normal">+254 (0)20 206 7969</p>
                            </div>
                        </div>
                        <iframe
                            className="w-full rounded shadow-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.810762689687!2d36.87861611461446!3d-1.2876717359905419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13efb0a813ef%3A0x67fd419680769624!2sHospital%20Consumables!5e0!3m2!1sen!2ske!4v1678474322205!5m2!1sen!2ske"
                            width={425}
                            height={280}
                            style={{
                                border: 0,
                            }}
                            allowFullScreen
                            aria-hidden="false"
                            tabIndex={0}
                        />
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Contact;


