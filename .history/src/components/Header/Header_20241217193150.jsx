import React, { useState, useEffect } from "react";
import { MdShoppingBasket, MdAdd, MdLogout, MdLogin, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase.config";

import logo from "../../img/logo.png";
import Avatar from "../../img/avatar.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";


import useScrollListener from "../../hooks/useScrollListener";
import "./Header.css";
import Topbar from "../Topbar";
import Sidenav from './Sidenav';
import Contact from "../Contact/Contact";
import SignIn from "./auth/SignIn";
import Signup from "./auth/Signup";

const Header = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openLogInModal, setOpenLogInModal] = useState(false);
  const [OpenSignUpModal, setOpenSignUpInModal] = useState(false);

  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);
  

  const login = async () => {

    if (!user) {
      setOpenLogInModal(true)
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
      console.log(user);
      
    } else {
      setIsMenu(!isMenu);
      setOpenLogInModal(false);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };




  return (
    <header
      className={`${navClassList.join(
        " "
      )} fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary backdrop-blur drop-shadow-lg bg-opacity-100`}
      // className="fixed  w-screen p-3 px-4 md:p-6 md:px-16 bg-Main backdrop-blur drop-shadow-lg bg-opacity-100"
    >
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between fill-white  ">
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} className="w-80 h-90 object-cover" alt="logo" />
        </Link>
        {/* Navbar start */}
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 1, x: 200 }}
            animate={{ opacity: 3, x: 10 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-24 "
          >
            <Link to={"/"}>
              <li className="text-lg text-textColor hover:text-xl hover:text-headingColor hover:font-bold duration-200 transition-all ease-in-out cursor-pointer
              ">
               Abraham
              </li>
            </Link>
            <Link to={"/about"}>
              <li className="text-lg text-textColor hover:text-xl hover:text-headingColor hover:font-bold hover:font-bold duration-100 transition-all ease-in-out cursor-pointer">
                About Us
              </li>
            </Link>
            <Link to={"/products"}>
              <li className="text-lg text-textColor hover:text-xl hover:text-headingColor hover:font-bold duration-100 transition-all ease-in-out cursor-pointer">
                Products
              </li>
            </Link>

            {/* <Link to={"/admn"}>
              <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Admn
              </li>
            </Link> */}
            <Link to={"/contact"}>
            <li className="text-lg text-textColor hover:text-xl hover:text-headingColor hover:font-bold hover:font-bold duration-100 transition-all ease-in-out cursor-pointer">
              {/* <button onClick={() => setOpenAddModal(true)}>Contact Us</button> */}
              Contact Us
            </li>
            </Link>
          </motion.ul>
          {/* Cart Container */}
          <div
            className="relative flex items-center justify-center"
            onClick={showCart}
          >
            <MdShoppingBasket className="text-lg text-textColor hover:text-xl hover:text-headingColor hover:font-bold duration-100 transition-all ease-in-out cursor-pointer" />
            {cartItems && cartItems.length > 0 && (
              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>

          {user ? (
            // if user then show log out

            <>
              <p
                className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-red-900 transition-all duration-100 ease-in-out 
                hover:text-green-300 text-textColor text-base"
                onClick={login}
              >
                <motion.img
                  whileTap={{ scale: 0.6 }}
                  src={user ? user.photoURL : Avatar}
                  // src={Avatar}
                  className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                  alt="user"
                />
                Log Out
                <MdLogout />
              </p>

              {isMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
                >
                  {user && user.email === "ndichumuriithi@gmail.com" && (
                    // <Link to={"/createItem"}>
                    //   <p
                    //     className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                    //     onClick={() => setIsMenu(false)}
                    //   >
                    //     New Item <MdAdd />
                    //   </p>
                    // </Link>
                    <Link to={"/admn"}>
                      <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                        Admn <MdAdd />
                      </p>
                    </Link>
                  )}

                  <p
                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                    onClick={logout}
                  >
                    Logout <MdLogout />
                  </p>
                </motion.div>
              )}
            </>
          ) : (
            // {/* Sign Up  button */}
            <>
              {/* Log in button */}
              <div className="relative">
                <p
                  className="relative   rounded-full hover:bg-green-500 hover:text-blue-900 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out"
                  onClick={setOpenLogInModal}
                >
                  <MdLogin /> LOG IN
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      {/* mobile */}

      <div className="flex items-center justify-between md:hidden w-full h-full ">
        {/* Cart container */}
        <div
          className="relative flex items-center justify-center"
          onClick={showCart}
        >
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          {cartItems && cartItems.length > 0 && (
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )}
        </div>
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} className="w-40 object-cover" alt="logo" />
          {/* <p className="text-headingColor text-xl font-bold"> City</p> */}
        </Link>
        {user ? (
          <div className="relative">
            <p
              className="py-2 flex items-center gap- cursor-pointer  transition-all duration-100 ease-in-out 
                hover:text-blue-900 text-textColor text-base"
              onClick={login}
            >
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={user ? user.photoURL : Avatar}
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
                alt="userprofile"
                onClick={login}
              />
              Menu
              <MdMenu />
            </p>
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
              >
                {user && user.email === "ndichumuriithi@gmail.com" && (
                  // <Link to={"/createItem"}>
                  //   <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                  //     New Item <MdAdd />
                  //   </p>
                  // </Link>
                  <Link to={"/admn"}>
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                      Admin <MdAdd />
                    </p>
                  </Link>
                )}
                <motion.ul
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 200 }}
                  className="gap-6 mt-1 m-4 hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100"
                  onClick={() => setIsMenu(false)}
                >
                  <Link to={"/"} className="flex items-center mt-4">
                    <li className="text-xl text-blue-900 hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer mt-4">
                      Home
                    </li>
                  </Link>
                  <Link to={"/about"}>
                    <li className="text-lg text-blue-900 hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer mt-4">
                      About Us
                    </li>
                  </Link>
                  <Link to={"/products"}>
                    <li className="text-lg text-blue-900 hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer mt-4">
                      Products
                    </li>
                  </Link>
                  <li
                    className="text-lg text-blue-900 hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer mt-4"
                    onClick={() => setOpenAddModal(true)}
                  >
                    Contact Us
                  </li>
                </motion.ul>
                <p
                  className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        ) : (
          <>
            <div className="relative">
              <p
                className="py-2 flex items-center gap- cursor-pointer  transition-all duration-100 ease-in-out 
                hover:text-blue-900 text-textColor text-base"
                // onClick={setIsMenu(true)}
                onClick={() => setIsMenu(true)}
              >
                Menu
                <MdMenu />
              </p>
              {isMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
                  onClick={() => setIsMenu(false)}
                >
                  <p
                    className="relative   rounded-full hover:bg-green-500 hover:text-blue-900 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out"
                    // onClick={Signup}
                    onClick={() => setOpenSignUpInModal(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                      />
                    </svg>
                    Sign Up
                  </p>
                  <div className="relative">
                    <p
                      className="relative   rounded-full hover:bg-green-500 hover:text-blue-900 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out"
                      onClick={setOpenLogInModal}
                    >
                      <MdLogin /> LOG IN
                    </p>
                  </div>
                    <motion.ul
                      initial={{ opacity: 0, x: 200 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 200 }}
                      className="gap-6 mt-1 m-4 hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100"
                      onClick={() => setIsMenu(false)}
                    >
                    <Link to={"/"} className="flex items-center mt-4">
                      <li className="text-xl text-blue-900 hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer mt-4">
                        Home
                      </li>
                    </Link>
                    <Link to={"/about"}>
                      <li className="text-lg text-blue-900 hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer mt-4">
                        About Us
                      </li>
                    </Link>
                    <Link to={"/products"}>
                      <li className="text-lg text-blue-900 hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer mt-4">
                        Products
                      </li>
                    </Link>
                    <li
                      className="text-lg text-blue-900 hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer mt-4"
                      onClick={() => setOpenAddModal(true)}
                    >
                      Contact Us
                    </li>
                  </motion.ul>
                </motion.div>
              )}
            </div>
            {/* Log in button */}
          </>
        )}

        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          {/* <Sidenav /> */}
        </div>
      </div>
      {openLogInModal && (
        <SignIn
          onClose={() => setOpenLogInModal(false)}
          open={openLogInModal}
        />
      )}
      {openAddModal && (
        <Contact onClose={() => setOpenAddModal(false)} open={openAddModal} />
      )}
      {OpenSignUpModal && (
        <Signup
          onClose={() => setOpenSignUpInModal(false)}
          open={OpenSignUpModal}
        />
      )}
    </header>
  );
};

export default Header;
