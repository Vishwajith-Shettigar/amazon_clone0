import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp= firebase.initializeApp({


   // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyASTUynOz61bl3N_TxMRwBT1O00mb7-DLg",
    authDomain: "clone-aa6d6.firebaseapp.com",
    projectId: "clone-aa6d6",
    storageBucket: "clone-aa6d6.appspot.com",
    messagingSenderId: "856835745693",
    appId: "1:856835745693:web:eef46a01a963e1a6b03174",
    measurementId: "G-D8RX4EEC54"

    

})

const auth=firebase.auth();

export {auth};

