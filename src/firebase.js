// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:"AIzaSyDpS4GVYmaa1eyE0fD_M_CFJFbA6wyh23g",
    authDomain: "netflix-clone-9ad27.firebaseapp.com",
    projectId:"netflix-clone-9ad27",
    storageBucket:"netflix-clone-9ad27.appspot.com",
    messagingSenderId:  "704403470346",
    appId: "1:704403470346:web:85eab2381af45f39f107f3",
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);






