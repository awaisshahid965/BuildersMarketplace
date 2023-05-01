import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBxy9ljbe72dmfWoejQPIAnh0fYh47LWmI",
  authDomain: "builder-marketplace.firebaseapp.com",
  projectId: "builder-marketplace",
  storageBucket: "builder-marketplace.appspot.com",
  messagingSenderId: "401395150949",
  appId: "1:401395150949:web:8cfa887cba0112af2b968c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
