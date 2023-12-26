import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCCQRu_e1Cumw1r5HZRI5DWgNYw8rLX0eg",
  authDomain: "brorental-ebcde.firebaseapp.com",
  projectId: "brorental-ebcde",
  storageBucket: "brorental-ebcde.appspot.com",
  messagingSenderId: "698161042705",
  appId: "1:698161042705:web:22908a06edb64fd94ba8b0",
  measurementId: "G-P8Q1HG9KNR",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
