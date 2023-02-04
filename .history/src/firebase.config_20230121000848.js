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
  measurementId: "G-CDWTLD9CB5",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
