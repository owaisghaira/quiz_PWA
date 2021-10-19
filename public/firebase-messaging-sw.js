importScripts('https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.7.1/firebase-messaging.js');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwjXRMiFblcy_ncSmuzKBD6E40zFjDQAM",
    authDomain: "quiz-pwa-64bd4.firebaseapp.com",
    projectId: "quiz-pwa-64bd4",
    storageBucket: "quiz-pwa-64bd4.appspot.com",
    messagingSenderId: "515078950577",
    appId: "1:515078950577:web:7dca89d752b846c6795c90",
    measurementId: "G-J8M8FD7DDV"
};

firebase.initializeApp(firebaseConfig)
firebase.messaging();