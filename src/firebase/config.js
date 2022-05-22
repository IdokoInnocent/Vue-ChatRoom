import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMw0sd_jETxwnX5zi7NlLpPH4wRMKXTfU",
  authDomain: "vue-site-de30b.firebaseapp.com",
  projectId: "vue-site-de30b",
  storageBucket: "vue-site-de30b.appspot.com",
  messagingSenderId: "370057566208",
  appId: "1:370057566208:web:8a0d136a2533e27716a0e5",
};

firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
