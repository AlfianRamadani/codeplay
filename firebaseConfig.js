// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc0cF9Ae3udSvK_9zpYvkskslMCHJfj80",
  authDomain: "codeplay-b2c28.firebaseapp.com",
  projectId: "codeplay-b2c28",
  storageBucket: "codeplay-b2c28.firebasestorage.app",
  messagingSenderId: "823368169838",
  appId: "1:823368169838:web:e750f54d69f1bbfa73297f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


export { app, auth }; // Ekspor instance auth
