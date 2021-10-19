import firebase from 'firebase'

export const firebaseConfig = {
    apiKey: "AIzaSyCwjXRMiFblcy_ncSmuzKBD6E40zFjDQAM",
    authDomain: "quiz-pwa-64bd4.firebaseapp.com",
    projectId: "quiz-pwa-64bd4",
    storageBucket: "quiz-pwa-64bd4.appspot.com",
    messagingSenderId: "515078950577",
    appId: "1:515078950577:web:7dca89d752b846c6795c90",
    measurementId: "G-J8M8FD7DDV"
};

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging();


export function notification() {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.')
            messaging.getToken()
                .then((currentToken) => {
                    if (currentToken) {
                        console.log('Token=>', currentToken)
                        // prompt('currentToken',currentToken)
                    } else {
                        console.log('No registration token available. Request permission to generate one.');
                    }
                }).catch((err) => {
                    console.log('An error occurred while retrieving token. ', err);
                });
        } else {
            console.log('Unable to get permission to notify.');
        }
    });
}