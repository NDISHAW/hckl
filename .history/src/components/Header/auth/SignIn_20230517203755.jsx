import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useRef } from "react";
import { auth } from "../../../firebase.config";
import { Link,  } from "react-router-dom";
import Modal from "../../Manage/Modal";

const SignIn = ({ onClose, open }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const Signin = (e) => {
    e.preventDefault();
    //
    signInWithEmailAndPassword(auth, emailRef, passwordRef)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
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
      <div className="bg-amber-100 signin flex">
        <div className="w-2/5 items-center mx-auto bg-white border rounded-lg p-7 my-auto shadow-2xl sign-in">
          {error && (
            <div
              style={{
                backgroundColor: "pink",
                height: "30px",
                margin: "16px",
              }}
            >
              {error}
            </div>
          )}
          <form onSubmit={Signin}>
            <h2 className="text-4xl my-5">Sign In</h2>

            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Email
              </label>
              <input
                ref={emailRef}
                type="text"
                id="email"
                class="bg-gray-50 border border-amber-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@email.com"
                required
              />
            </div>

            <div class="mb-6">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your password
              </label>
              <input
                ref={passwordRef}
                type="password"
                id="password"
                class="bg-gray-50 border border-amber-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              disabled={loading}
              type="submit"
              class="text-white bg-amber-500 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
            >
              Sign In
            </button>
          </form>

          <Link to="/signup">
            <div className="mb-4">
              <span className="float-right">
                <u>Don't have an account? Sign Up</u>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default SignIn;