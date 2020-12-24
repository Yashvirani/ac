import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyBwyA-1LOkjBtplTDki0gQFAs7ZBO3430c",
        authDomain: "amazo-cloned.firebaseapp.com",
        databaseURL: "https://amazo-cloned.firebaseio.com",
        projectId: "amazo-cloned",
        storageBucket: "amazo-cloned.appspot.com",
        messagingSenderId: "313229619794",
        appId: "1:313229619794:web:e1586ad9f2949f5e51a58b",
        measurementId: "G-3DHF5VW5H5"
      }
);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };