import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDUhfkKjCRqpO4uf4ajPAC-lSyCx_-m6_k",
  authDomain: "ecom-garment.firebaseapp.com",
  projectId: "ecom-garment",
  storageBucket: "ecom-garment.appspot.com",
  messagingSenderId: "313820694470",
  appId: "1:313820694470:web:fd9f09a3dad8f62cbb94c7",
  measurementId: "G-F4KPEYWSC9",
};

export const storeUserInFirestore = async (userAuthObj, additionalData) => {
  if (!userAuthObj) return;

  const userRef = firestore.doc(`users/${userAuthObj.uid}`);

  const user = await userRef.get();

  if (!user.exists) {
    const { displayName, email } = userAuthObj;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.error(e.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const documentRef = collectionRef.doc();
    batch.set(documentRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) =>
  collectionsSnapshot.docs.reduce((accumulator, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    accumulator[title.toLowerCase()] = {
      id: docSnapshot.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items,
    };

    return accumulator;
  }, {});

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const authProvider = new firebase.auth.GoogleAuthProvider();
authProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(authProvider);

export default firebase;
