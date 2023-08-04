// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKVrkmKUF1pz9tt4LYr93bk1Np36eTdrA",
  authDomain: "tinder-clone-e8bed.firebaseapp.com",
  projectId: "tinder-clone-e8bed",
  storageBucket: "tinder-clone-e8bed.appspot.com",
  messagingSenderId: "129556430464",
  appId: "1:129556430464:web:a705b4ae9e4ccd94dd7065",
  measurementId: "G-V9W2C6TKEN",
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getFirestore(firebaseApp);

export default database;
