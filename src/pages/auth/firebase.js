import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBW_v8xr6s69Eaxy8XjmJt3QjMYkGmPzag",
  authDomain: "otp-verification-ef991.firebaseapp.com",
  projectId: "otp-verification-ef991",
  storageBucket: "otp-verification-ef991.appspot.com",
  messagingSenderId: "691965819842",
  appId: "1:691965819842:web:f2ba0217c3814f7543f45b",
  measurementId: "G-TLPQQZM8J6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

