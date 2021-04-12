import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDT-XS84kM--YZ7KrDV22WQNmj57E2DtkI",
  authDomain: "crwn-clothing-b8d67.firebaseapp.com",
  projectId: "crwn-clothing-b8d67",
  storageBucket: "crwn-clothing-b8d67.appspot.com",
  messagingSenderId: "275732319702",
  appId: "1:275732319702:web:8e92f44fb30bb547d92877",
  measurementId: "G-ELHZ7FBZHQ",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
