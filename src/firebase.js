import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3EK8k8qil_I6hd0KNcMXgq2gylcSC2QE",
  authDomain: "linkedin-clone-yt-e06ac.firebaseapp.com",
  projectId: "linkedin-clone-yt-e06ac",
  storageBucket: "linkedin-clone-yt-e06ac.appspot.com",
  messagingSenderId: "572973408661",
  appId: "1:572973408661:web:90db5551810976af01d69c",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
