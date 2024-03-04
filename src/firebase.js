import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

const firebaseConfig = {

    apiKey: "AIzaSyCT-6Q9A4BLNtqTPjMMhmFwLh6NsLKFY0U",
  
    authDomain: "boardproject-25338.firebaseapp.com",
  
    projectId: "boardproject-25338",
  
    storageBucket: "boardproject-25338.appspot.com",
  
    messagingSenderId: "521941626406",
  
    appId: "1:521941626406:web:0e61d7b910318a795200e7"
  
  };
  

export const firebaseApp = initializeApp(
  // your application settings
  firebaseConfig
);

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const todosRef = collection(db, 'todos')