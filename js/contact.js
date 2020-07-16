// Initialize Firebase
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCoMfEXCQQLT1xA1G0Lrp9CwOsUg0FAs14",
    authDomain: "contact-c0cf7.firebaseapp.com",
    databaseURL: "https://contact-c0cf7.firebaseio.com",
    projectId: "contact-c0cf7",
    storageBucket: "contact-c0cf7.appspot.com",
    messagingSenderId: "540826469745",
    appId: "1:540826469745:web:fba9b67bbe22940513a2d0"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

// DOM elements
const submitBtn = document.querySelector('#submitB');

let userName = document.querySelector('#userName');
let userEmail = document.querySelector('#userEmail');
let userSubject = document.querySelector('#userSubject');
let userMessage = document.querySelector('#userMessage');

const db = firestore.collection("contactDet");

submitBtn.addEventListener('click', function() {
    let userNameInput = userName.Value;
    let userEmailInput = userEmail.Value;
    let userSubjectInput = userSubject.Value;
    let userMessageInput = userMessage.Value;

    //Access DB Collection
    db.doc().set({
        name: userNameInput,
        email: userEmailInput,
        subject: userSubjectInput,
        message: userMessageInput
    })
    .then(function() {
        console.log("Data Saved");
    })
    .catch(function() {
        console.log(error);
    });
})