

import firebase from 'firebase'
import firestore from 'firebase/firestore'


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDn5OEnH9-LUK5xkzZrdrukjVN1myZU_Nk",
    authDomain: "user-info-ee17c.firebaseapp.com",
    databaseURL: "https://user-info-ee17c.firebaseio.com",
    projectId: "user-info-ee17c",
    storageBucket: "user-info-ee17c.appspot.com",
    messagingSenderId: "609732864643"
  };

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()