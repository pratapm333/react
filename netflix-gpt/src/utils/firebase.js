// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeo7Sjd_34EoYp1LGqRJrigy8flppbzzk",
  authDomain: "netflixgpt-49052.firebaseapp.com",
  projectId: "netflixgpt-49052",
  storageBucket: "netflixgpt-49052.appspot.com",
  messagingSenderId: "71648468200",
  appId: "1:71648468200:web:a242eed519dfa26b51fd5d",
  measurementId: "G-75XETTD0NL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();