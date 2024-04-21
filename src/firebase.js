import {initializeApp } from "firebase/app";
import {getDownloadURL, getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBPBXDjaBFSnpwdi0eBU5abs6LIdXwTPhM",
  authDomain: "courses-crc.firebaseapp.com",
  projectId: "courses-crc",
  storageBucket: "courses-crc.appspot.com",
  messagingSenderId: "551764576481",
  appId: "1:551764576481:web:bcdb105e8dd100984acfa0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const storage = getStorage()
