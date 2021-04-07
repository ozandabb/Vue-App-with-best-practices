import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB7RH4Ry6IrYVDWYY3T1Fy1AM8_40UrYjQ",
    authDomain: "vue-auth-ee1f3.firebaseapp.com",
    projectId: "vue-auth-ee1f3",
    storageBucket: "vue-auth-ee1f3.appspot.com",
    messagingSenderId: "606441460729",
    appId: "1:606441460729:web:2ad7ff6ffa3fb2ec0da328"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const db = firebaseApp.firestore();