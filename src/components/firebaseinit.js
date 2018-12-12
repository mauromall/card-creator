import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDksY3sSdNgWOXTZLlQQxh7g1DQGP4Djxw",
    authDomain: "lab10-4d325.firebaseapp.com",
    databaseURL: "https://lab10-4d325.firebaseio.com",
    projectId: "lab10-4d325",
    storageBucket: "lab10-4d325.appspot.com",
    messagingSenderId: "570393265444"
};

firebase.initializeApp(config);
const db = firebase.firestore();

const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);

export default db;