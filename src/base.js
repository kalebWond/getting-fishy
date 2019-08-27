import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyASnTi3m7rN1ZxXOShRCCZPSL8sNjAvVeY",
    authDomain: "catch-of-the-day-kaleb.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-kaleb.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
