import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyD6DQyOSlescoSmV7ztOuzYeVnqC7OC_lo",
  authDomain: "alta-software-queuing-system.firebaseapp.com",
  projectId: "alta-software-queuing-system",
  storageBucket: "alta-software-queuing-system.appspot.com",
  messagingSenderId: "963625055351",
  appId: "1:963625055351:web:2f21db44161be6432a4272",
  measurementId: "G-2C025Z4Y18"
});
export const db = getFirestore(app);
export default app;
