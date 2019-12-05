import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBXuPQQVZbcLXRlIY2hyQB-boTuTWdBUd0",
  authDomain: "shopping-f5bac.firebaseapp.com",
  databaseURL: "https://shopping-f5bac.firebaseio.com",
  projectId: "shopping-f5bac",
  storageBucket: "shopping-f5bac.appspot.com",
  messagingSenderId: "855298808911",
  appId: "1:855298808911:web:9349a4c38ed624da19de3a"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  'promt': 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;