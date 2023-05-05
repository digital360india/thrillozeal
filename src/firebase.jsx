import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBF9WU4VI1PE9NUx-UN1yFDp9yiD50HDhk",
    authDomain: "thrill0zeal.firebaseapp.com",
    projectId: "thrill0zeal",
    storageBucket: "thrill0zeal.appspot.com",
    messagingSenderId: "1072392413970",
    appId: "1:1072392413970:web:f610f2084f71d0be5849cb",
    measurementId: "G-97RWH7D6NH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, storage, provider };

export default db;