import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAN4MZ9ixfppmulFsoOiye1TwBJNQiNx9w",
    authDomain: "coffe-app-d1ba7.firebaseapp.com",
    projectId: "coffe-app-d1ba7",
    storageBucket: "coffe-app-d1ba7.appspot.com",
    messagingSenderId: "391571573220",
    appId: "1:391571573220:web:c226d26c602a9c7d1c1ff1",
    measurementId: "G-8WM7ZY8T1C"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export  const db = getFirestore(app)
