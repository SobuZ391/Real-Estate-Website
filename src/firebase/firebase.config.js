// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyw0QolsZEPgd9XHPgt85R_Nwm0fDhZW8",
  authDomain: "real-estate-b9-a9.firebaseapp.com",
  projectId: "real-estate-b9-a9",
  storageBucket: "real-estate-b9-a9.appspot.com",
  messagingSenderId: "317433483114",
  appId: "1:317433483114:web:fd19f6ec1157aebf8e9f13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth; // Export the auth object
