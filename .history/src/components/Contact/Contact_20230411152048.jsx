import { createElement, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { GrMail } from "react-icons/gr";
import { MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import Modal from "../Manage/Modal";
import { motion } from "framer-motion";

const Contact = ({ onClose, open }) => {
  const Contact = {
    title: "Contact Us",
    subtitle: "GET IN TOUCH",
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
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed w-screen md:w-screen h-screen  drop-shadow-md flex flex-col z-[101]"
    >
      <Modal
        modalLable="Contact Us"
        onClose={onClose}
        open={open}
        className="fixed w-[160vw] md:w-375 h-screen drop-shadow-md flex flex-col z-[101] bg-Main"
      >
        <section
          className=" text-textColor justify-center bg-Main"
          id="contact"
        >
          <Toaster />
          <div className="md:container px-5 py-14">
            {/* <h2 className="title !text-textColor" data-aos="fade-down">
              {Contact.title}
            </h2> */}
            {/* <h4 className="subtitle" data-aos="fade-down">
              {Contact.subtitle}
            </h4> */}
            <br />
            <div className="flex gap-10 md:flex-row flex-col">
              <form
                ref={form}
                onSubmit={sendEmail}
                data-aos="fade-up"
                className="flex-1 flex flex-col gap-5 "
              >
                {/* Input Name as same as email js templates values */}
                <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  required
                  className="border border-slate-600 p-3 rounded"
                />
                <input
                  type="email"
                  name="user_email"
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                  placeholder="Email "
                  required
                  className="border border-slate-600 p-3 rounded"
                />
                <input
                  type="text"
                  name="phonenumber"
                  pattern="[0-9._+]+{1,63}$"
                  placeholder="Phone Number : 0712345678"
                  required
                  className="border border-slate-600 p-3 rounded"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  className="border border-slate-600 p-3 rounded h-44"
                  required
                ></textarea>
                <motion.button
                  whileTap={{ scale: 3.8 }}
                  type="button"
                  className="w-auto p-2 rounded-full bg-gradient-to-tr from-blue-400 to-blue-900 text-gray-50 text-lg my-2 hover:shadow-lg hover:text-textColor"
                >
                  {createElement(GrMail)}
                </motion.button>
              </form>
              <div className="flex-1 flex flex-col gap-5">
                {Contact.social_media.map((content, i) => (
                  <div
                    key={i}
                    data-aos="fade-down"
                    data-aos-delay={i * 430}
                    className="flex items-center gap-2"
                  >
                    <h4 className="text-textColor">
                      {createElement(content.icon)}
                    </h4>
                    <a
                      className="font-Poppins"
                      href={content.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {content.text}
                    </a>
                  </div>
                ))}
                <iframe
                  data-aos="fade-up"
                  title="Map Directions"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.810762689687!2d36.87861611461446!3d-1.2876717359905419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13efb0a813ef%3A0x67fd419680769624!2sHospital%20Consumables!5e0!3m2!1sen!2ske!4v1678474322205!5m2!1sen!2ske"
                  width="450"
                  height="200"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                >
                  Our Location
                </iframe>
              </div>
            </div>
          </div>
        </section>
      </Modal>
    </motion.div>
  );
};

export default Contact;
