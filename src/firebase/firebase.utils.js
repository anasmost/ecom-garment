import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDUhfkKjCRqpO4uf4ajPAC-lSyCx_-m6_k",
  authDomain: "ecom-garment.firebaseapp.com",
  projectId: "ecom-garment",
  storageBucket: "ecom-garment.appspot.com",
  messagingSenderId: "313820694470",
  appId: "1:313820694470:web:fd9f09a3dad8f62cbb94c7",
  measurementId: "G-F4KPEYWSC9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;