import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBChlx6ktEoFzDcSueMBJXsV1APRCsHm44",
  authDomain: "nextfire-f5d8a.firebaseapp.com",
  projectId: "nextfire-f5d8a",
  storageBucket: "nextfire-f5d8a.appspot.com",
  messagingSenderId: "753058643530",
  appId: "1:753058643530:web:d83792f938bcc4cc0670b3",
  measurementId: "G-H6XP5H7H51",
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
