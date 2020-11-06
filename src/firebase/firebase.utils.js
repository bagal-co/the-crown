import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


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
firebase.initializeApp(config);
// adding users to firebase
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth)return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const collectionRef = firestore.collection('users');
  
  const snapShot = await userRef.get();
  const collectionSnapshot = await collectionRef.get();
  console.log({ collectionSnapshot })
  
  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName, email, createdAt, ...additionalData
      });
    }catch (error){
      console.log('Error creating user', error.message);
    }
  }
  return userRef; 
};

// adding data to firebase dynamicly
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
    console.log(newDocRef);
  });

  return await batch.commit();
};

//pulling shop data from firebase to shop component
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) =>{
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  },{});
};
//====================

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;