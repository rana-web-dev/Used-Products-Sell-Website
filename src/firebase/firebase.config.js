// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,

  apiKey: "AIzaSyAziFQHcV-ou3L9kkpDos8q2Yf50nYiVs8",
  authDomain: "b6a12-465fd.firebaseapp.com",
  projectId: "b6a12-465fd",
  storageBucket: "b6a12-465fd.appspot.com",
  messagingSenderId: "703951558037",
  appId: "1:703951558037:web:4d471d08ce91f923a4929c"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;