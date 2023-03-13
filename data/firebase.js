// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
//Importe de metodos de guardado, mediante el objeto collection; (*)Metodo getFirestore para conectar a la base de datos ofrecida por firebase. (*) Metodo collection es un generico que me indica la creacion de una nueva coleccion de datos. (*)Metodo addDoc para poder guardar un dato en la coleccion. 
import { collection, getFirestore, addDoc } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK13PZt8_-LaBr9GwCHpFU6fwlnfyxiLk",
  authDomain: "crud-firebase-masivosjs.firebaseapp.com",
  projectId: "crud-firebase-masivosjs",
  storageBucket: "crud-firebase-masivosjs.appspot.com",
  messagingSenderId: "871079625452",
  appId: "1:871079625452:web:80935cb69d685d83ae5bc9",
  measurementId: "G-3TQMHGQPCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//Devuelve un objeto DB que es la conexion a la base de datos.
const db = getFirestore();

//Funcion que Guarda los datos en la base de datos.
export const saveNode= (node, description) => {
    addDoc(collection(db, 'nodes'), {node: node, description: description });
}