// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc } from '@firebase/firestore';
import { getStorage } from '@firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBylbVgqy-LVsSNUMwQRghZ4QGCpquMW24',
  authDomain: 'clonefb-4c17b.firebaseapp.com',
  projectId: 'clonefb-4c17b',
  storageBucket: 'clonefb-4c17b.appspot.com',
  messagingSenderId: '594357253894',
  appId: '1:594357253894:web:a0a36dd0ae79c5702b5087',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const storage = getStorage();

export { db, storage, setDoc };
