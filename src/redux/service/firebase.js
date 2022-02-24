import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY,
  authDomain: "instarclone-19f38.firebaseapp.com",
  projectId: "instarclone-19f38",
  storageBucket: "instarclone-19f38.appspot.com",
  messagingSenderId: "365421912808",
  appId: "1:365421912808:web:8a31a65dcbb4cc614d9f5d",
  measurementId: "G-T2M1GX0TEK"
};

initializeApp(firebaseConfig)
const db = getFirestore();


export default db