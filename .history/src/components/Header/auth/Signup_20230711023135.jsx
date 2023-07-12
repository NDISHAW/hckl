import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";
import Modal from "./modal/Modal";
import { motion } from "framer-motion";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, app } from "../../../firebase.config";
import { actionType } from "../../../context/reducer";
import { toast, Toaster } from "react-hot-toast";
import { useStateValue } from "../../../context/StateProvider";


const Signup = ({ onClose, open }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
//   const { createUser } = UserAuth();
  const navigate = useNavigate();
const [{ user }, dispatch] = useStateValue();
  const SignUpWithEmailAndPassword = async (e) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = result;
      dispatch({
        type: actionType.SET_USER,
        user,
      });
      localStorage.setItem("user", JSON.stringify(user));
      onClose();
    } catch (error) {
      toast(error.message);
    //   console.error("An error occurred during email/password login:", error);
    }
  };

  const handleSubmit = async (e) => {    
    e.preventDefault();
    // const createUser = (email, password) => {
    //   return createUserWithEmailAndPassword(auth, email, password);
    // };
    setError("");
    try {
    //   await createUser(email, password);
    await SignUpWithEmailAndPassword(email, password);
      navigate("/home");
      onClose();
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }    
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed w-screen md:w-screen h-screen  drop-shadow-md flex flex-col z-[101]"
    >
      <Toaster />
      <Modal modalLable="Sign Up" onClose={onClose} open={open}>
        <div className="max-w-[700px] mx-auto my-16 p-4">
          <div>
            <h1 className="text-2xl font-bold py-2">
              Sign up for a free account
            </h1>
            <p className="py-2">
              Already have an account yet?{" "}
              <Link to="/" className="underline">
                Sign in.
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col py-2">
              <label className="py-2 font-medium">Email Address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="border p-3"
                type="email"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="py-2 font-medium">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="border p-3"
                type="password"
              />
            </div>
            <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
              Sign Up
            </button>
          </form>
        </div>
      </Modal>
    </motion.div>
  );
};

export default Signup;
