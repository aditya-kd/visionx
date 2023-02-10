import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlF3PEvX18rKcTezi29ChRgKBD4B_zEzQ",
  authDomain: "visionx-31059.firebaseapp.com",
  projectId: "visionx-31059",
  storageBucket: "visionx-31059.appspot.com",
  messagingSenderId: "450171165460",
  appId: "1:450171165460:web:dd37e6ccca8c48eba28001",
  measurementId: "G-X1XBYJ9X37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;