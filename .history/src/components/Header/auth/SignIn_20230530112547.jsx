import { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import { useDispatch } from 'react-redux';
import Modal from "../../Manage/Modal";
import { motion } from "framer-motion";
import { auth ,app} from "../../../firebase.config";
import { useStateValue } from "../../../context/StateProvider";
import { actionType } from "../../../context/reducer";
import { Toast, Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SignIn = ({ onClose, open, setOpenLogInModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isMenu, setIsMenu] = useState(false);
  // const dispatch = useDispatch();
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
  const loginWithPopup = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, provider);
      const { refreshToken, providerData } = result.user;
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } catch (error) {
      console.error("An error occurred during popup login:", error);
    }
  };

  const loginWithEmailAndPassword = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      const { user } = result;
      dispatch({
        type: actionType.SET_USER,
        user,
      });
      localStorage.setItem("user", JSON.stringify(user));
      
    } catch (error) {
      console.error("An error occurred during email/password login:", error);
      
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    loginWithEmailAndPassword();
    if (!user) {
      // loginWithPopup();
      // loginWithEmailAndPassword();
      setOpenLogInModal(false);

    } else {
      setIsMenu(!isMenu);
      // setOpenLogInModal(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed w-screen md:w-screen h-screen  drop-shadow-md flex flex-col z-[101]"
    >
      <Modal modalLable="Log In" onClose={onClose} open={open}>
        <div className="max-w-[700px] mx-auto my-16 p-4">
          <div>
            <h1 className="text-2xl font-bold py-2">Sign in to your account</h1>
            <p className="py-2">
              Don't have an account yet?{" "}
              <Link to="/signup" className="underline">
                Sign up.
              </Link>
            </p>
          </div>
          <form onSubmit={handleLogin}>
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
            <Toaster />
            <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
              Sign In
            </button>
          </form>
        </div>
      </Modal>
    </motion.div>
  );
};

export default SignIn;


// import { signInWithEmailAndPassword } from "firebase/auth";
// import React, { useState, useRef } from "react";
// import { auth } from "../../../firebase.config";
// import { Link,  } from "react-router-dom";
// import Modal from "../../Manage/Modal";
// import { motion } from "framer-motion";

// const SignIn = ({ onClose, open }) => {
//   const emailRef = useRef();
//   const passwordRef = useRef();

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const Signin = (e) => {
//     e.preventDefault();
//     //
//     signInWithEmailAndPassword(auth, emailRef, passwordRef)
//       .then((userCredential) => {
//         console.log(userCredential);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 200 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: 200 }}
//       className="fixed w-screen md:w-screen h-screen  drop-shadow-md flex flex-col z-[101]"
//     >
//       <Modal
//         modalLable="Log In"
//         onClose={onClose}
//         open={open}
//         className="fixed w-[160vw] md:w-375 h-screen drop-shadow-md flex flex-col z-[101] bg-Main"
//       >
//         <div className="bg-amber-100 signin flex">
//           <div className="w-2/5 items-center mx-auto bg-white border rounded-lg p-7 my-auto shadow-2xl sign-in">
//             {error && (
//               <div
//                 style={{
//                   backgroundColor: "pink",
//                   height: "30px",
//                   margin: "16px",
//                 }}
//               >
//                 {error}
//               </div>
//             )}
//             <form onSubmit={Signin}>
//               <h2 className="text-4xl my-5">Sign In</h2>

//               <div class="mb-6">
//                 <label
//                   for="email"
//                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                 >
//                   Your Email
//                 </label>
//                 <input
//                   ref={emailRef}
//                   type="text"
//                   id="email"
//                   class="bg-gray-50 border border-amber-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="name@email.com"
//                   required
//                 />
//               </div>

//               <div class="mb-6">
//                 <label
//                   for="password"
//                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                 >
//                   Your password
//                 </label>
//                 <input
//                   ref={passwordRef}
//                   type="password"
//                   id="password"
//                   class="bg-gray-50 border border-amber-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="Enter your password"
//                   required
//                 />
//               </div>

//               <button
//                 disabled={loading}
//                 type="submit"
//                 class="text-white bg-amber-500 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
//               >
//                 Sign In
//               </button>
//             </form>

//             <Link to="/signup">
//               <div className="mb-4">
//                 <span className="float-right">
//                   <u>Don't have an account? Sign Up</u>
//                 </span>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </Modal>
//     </motion.div>
//   );
// };

// export default SignIn;