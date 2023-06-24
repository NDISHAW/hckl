import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_QOwpVLZPRL7Lz5AbKYgsMHWrtq5I6sU",
  authDomain: "hckl-aa4d2.firebaseapp.com",
  projectId: "hckl-aa4d2",
  storageBucket: "hckl-aa4d2.appspot.com",
  messagingSenderId: "17997095394",
  appId: "1:17997095394:web:49b748dfc3ce5b5fe499bb",
  measurementId: "G-CDWTLD9CB5"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyD_bxGG0WgOKDejZvER2fTq2xZZjfUs8zs",
//   authDomain: "restaurantapp-c2ed6.firebaseapp.com",
//   databaseURL: "https://restaurantapp-c2ed6-default-rtdb.firebaseio.com",
//   projectId: "restaurantapp-c2ed6",
//   storageBucket: "restaurantapp-c2ed6.appspot.com",
//   messagingSenderId: "174416156605",
//   appId: "1:174416156605:web:2ec169ea4ef3e7bb25e4d4",
// };
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, firestore, storage };
