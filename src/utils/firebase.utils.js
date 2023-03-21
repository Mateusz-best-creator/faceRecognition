import { initializeApp } from "firebase/app";

import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { 
  getFirestore,
  doc, 
  setDoc,
  getDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALLog2W96uPipINP3RCg6e1Vsv9sNorpc",
  authDomain: "facerecognition-c98b5.firebaseapp.com",
  projectId: "facerecognition-c98b5",
  storageBucket: "facerecognition-c98b5.appspot.com",
  messagingSenderId: "88269652837",
  appId: "1:88269652837:web:bba8aa8a0b2fa277be978c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore(app);

export const createUserDocumentFromAuth = async (user, name) => {
  const documentReference = doc(db, 'users', user.uid);
  const documentSnapshot = await getDoc(documentReference);

  if(!documentSnapshot.exists()) {
    const {email} = user;
    const dataCreated = new Date();

    try {
      await setDoc(documentReference, {
        name,
        email,
        dataCreated,
      });
    }catch(error) {
      console.log('error creating the user', error.message);
    }
  }
  return documentReference;
}

export const signUpUserWithEmailAndPassword = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
}

export const signInUserWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
}

