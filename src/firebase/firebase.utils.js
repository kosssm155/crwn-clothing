import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyARdTx3ANhOX3-GQ0WqAkze1y2sut7j76I",
    authDomain: "crwn-db-b1812.firebaseapp.com",
    databaseURL: "https://crwn-db-b1812.firebaseio.com",
    projectId: "crwn-db-b1812",
    storageBucket: "crwn-db-b1812.appspot.com",
    messagingSenderId: "420440279168",
    appId: "1:420440279168:web:9201fe1946c612c6e83e65"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;