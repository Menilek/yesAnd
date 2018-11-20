import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD062MIGebE_AFEEC8yu0kIsFXiGLOuxMI",
    authDomain: "yesand-4fc51.firebaseapp.com",
    databaseURL: "https://yesand-4fc51.firebaseio.com",
    projectId: "yesand-4fc51",
    storageBucket: "yesand-4fc51.appspot.com",
    messagingSenderId: "389901530681"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
