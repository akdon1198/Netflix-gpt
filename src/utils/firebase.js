// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLwcsDBfIs21Dt7GAOz1JcBROM8nzaag8",
  authDomain: "netflix-gpt-f20f9.firebaseapp.com",
  projectId: "netflix-gpt-f20f9",
  storageBucket: "netflix-gpt-f20f9.appspot.com",
  messagingSenderId: "775737692027",
  appId: "1:775737692027:web:88be42a4f9a2d4a31177de",
  measurementId: "G-LMXN9X4D6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()