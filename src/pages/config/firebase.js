import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; //* for Cloud Firestore

// Adicione aqui as suas credenciais do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB0GiS4iv4Icmoavjtd1rpuYACByqfNml0",
  authDomain: "alura-esport.firebaseapp.com",
  projectId: "alura-esport",
  storageBucket: "alura-esport.appspot.com",
  messagingSenderId: "689883705324",
  appId: "1:689883705324:web:5dea1231d16f2bc8569ac9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);