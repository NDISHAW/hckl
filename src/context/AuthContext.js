import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase.config';
import { useStateValue } from '../context/StateProvider'
import { actionType } from "../context/reducer";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // const [user, setUser] = useState({});
  // const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
 const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

   const signIn = (email, password) =>  {
    return signInWithEmailAndPassword(auth, email, password)
   }

  const logout = () => {
      return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      // setUser(currentUser);
      dispatch({
        type: actionType.SET_USER,
        user: currentUser[0],
      });
      localStorage.setItem("user", JSON.stringify(currentUser[0]));
      console.log(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
