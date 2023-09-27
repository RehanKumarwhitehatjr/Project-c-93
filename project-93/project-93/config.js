import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAJwmAC0CXcawkAiFX2OS974b_1R9vWNHg",
  authDomain: "doctor-appointment-app-f85e4.firebaseapp.com",
  projectId: "doctor-appointment-app-f85e4",
  storageBucket: "doctor-appointment-app-f85e4.appspot.com",
  messagingSenderId: "142578585625",
  appId: "1:142578585625:web:bff5ffe4a0844ea7f6da88"
};

let app = firebase.initializeApp(firebaseConfig);
export default app.database();