// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3EYMqOxP-r7dSwzYW7KfyGCvZtH8lXRM",
    authDomain: "fir-javascript-crud-79a43.firebaseapp.com",
    projectId: "fir-javascript-crud-79a43",
    storageBucket: "fir-javascript-crud-79a43.appspot.com",
    messagingSenderId: "249387362165",
    appId: "1:249387362165:web:92c4d4005b8ae59857d53c"
        // Put you credentials here
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (title, description) =>
    addDoc(collection(db, "tasks"), { title, description });

export const onGetTasks = (callback) =>
    onSnapshot(collection(db, "tasks"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
    updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));