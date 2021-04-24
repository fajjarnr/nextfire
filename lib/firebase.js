import firebase from "firebase/app";
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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Firestore exports
export const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const increment = firebase.firestore.FieldValue.increment;

// Storage exports
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;
