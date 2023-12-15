import { initializeApp } from 'firebase/app';
import {getAuth,initializeAuth, getReactNativePersistence} from 'firebase/auth';
import {getFirestore,collection,getDocs} from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDWOzBrX65RdbFdwCTwd-0PsrCfMbhxBmA',
  authDomain: 'stickify-407810.firebaseapp.com',
  databaseURL: 'https://stickify-407810.firebaseio.com',
  projectId: 'stickify-407810',
  storageBucket: 'stickify-407810.appspot.com',
  messagingSenderId: 'noreply@stickify-407810.firebaseapp.com',
  appId: 'insert yours: 1:1088925346926:ios:aebdec6593dac4f561ca7f',
};

export const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

// Get a list of users from your database
// async function getUsers(db) {
//     const usersCol = collection(db, 'users');
//     const userSnapshot = await getDocs(usersCol);
//     const userList = userSnapshot.docs.map(doc => doc.data());
//     return userList;
//   }