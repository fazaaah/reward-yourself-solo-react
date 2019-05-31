import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBKIKbqJPDzujijna1bvpQj1LEIi6IsjhI",
    authDomain: "reward-yourself-app.firebaseapp.com",
    databaseURL: "https://reward-yourself-app.firebaseio.com",
    projectId: "reward-yourself-app",
    storageBucket: "",
    messagingSenderId: "509192157453",
    appId: "1:509192157453:web:4314b37124e5b3a1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;