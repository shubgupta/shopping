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
export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth)
    return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShpt = await userRef.get();
  if (!snapShpt.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        id: userAuth.uid,
        ...additionalData
      })
    } catch (error) {
      console.log("Error in creating user", error.message)
    }
  }
  return userRef;
}


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  'promt': 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;