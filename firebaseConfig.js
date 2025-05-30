import AsyncStorage from '@react-native-async-storage/async-storage';
import { getApp, getApps, initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCc0cF9Ae3udSvK_9zpYvkskslMCHJfj80",
  authDomain: "codeplay-b2c28.firebaseapp.com",
  projectId: "codeplay-b2c28",
  storageBucket: "codeplay-b2c28.appspot.com",
  messagingSenderId: "823368169838",
  appId: "1:823368169838:web:e750f54d69f1bbfa73297f"
};

// Initialize app if not already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize auth with React Native persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { app, auth };
