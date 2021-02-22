import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDa3IJk13VIwKDQ9QCThblqPzgnfJMEhq8",
    authDomain: "instragram-clone-react-7544b.firebaseapp.com",
    databaseURL: "https://instragram-clone-react-7544b-default-rtdb.firebaseio.com",
    projectId: "instragram-clone-react-7544b",
    storageBucket: "instragram-clone-react-7544b.appspot.com",
    messagingSenderId: "440235366348",
    appId: "1:440235366348:web:554a5781ccb7982aef6f69",
    measurementId: "G-18N8DV1JTQ"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };