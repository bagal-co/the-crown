import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { useRef } from 'react';

const config = {
  apiKey: "AIzaSyBD0H-ubEkxkjtQmMQovOXUfzG1XJKp4OA",
  authDomain: "crwon-db-67fb1.firebaseapp.com",
  databaseURL: "https://crwon-db-67fb1.firebaseio.com",
  projectId: "crwon-db-67fb1",
  storageBucket: "crwon-db-67fb1.appspot.com",
  messagingSenderId: "515619180319",
  appId: "1:515619180319:web:92024798cff0db6c70ea2a",
  measurementId: "G-KVW7CKLGJ1"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth)return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName, email, createdAt, ...additionalData
      })
    }catch (error){
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;