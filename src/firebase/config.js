import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


var firebaseConfig = {
	apiKey: "AIzaSyAfUHMsCVd7RgjxhzwavX5Ie-H1Ev7twhM",
	authDomain: "firegram-6fe3a.firebaseapp.com",
	projectId: "firegram-6fe3a",
	storageBucket: "firegram-6fe3a.appspot.com",
	messagingSenderId: "902204815579",
	appId: "1:902204815579:web:01bb3c17e8ada0ca5074fe"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
