// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";

import * as firebase from 'firebase';



 const firebaseConfig = {
  apiKey: "AIzaSyC86-10QPNRDHXtd8r1CJsbwFRT-at9wls",
  authDomain: "movies-807db.firebaseapp.com",
  projectId: "movies-807db",
  storageBucket: "movies-807db.appspot.com",
  messagingSenderId: "78186068464",
  appId: "1:78186068464:web:1f63c3b9ea434e46028535"
};

let app;
if(firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}
else {
  app = firebase.app()
}

const auth = firebase.auth()

export {auth};

/* Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getAuth();*/

