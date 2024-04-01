import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKuJjUgebHEo3vmrCP9r0jWdeoMhjiEJo",
  authDomain: "next-todo-88ff7.firebaseapp.com",
  projectId: "next-todo-88ff7",
  storageBucket: "next-todo-88ff7.appspot.com",
  messagingSenderId: "642261993042",
  appId: "1:642261993042:web:e8feb971f4ca3c6206418b",
  measurementId: "G-Q3PV4T7KBL"
  };

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)