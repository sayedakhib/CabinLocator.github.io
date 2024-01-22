// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBH6WqPhPONw9F4GYv98UrVUVDPCBX3nFs",
  authDomain: "cabinlocator-b6516.firebaseapp.com",
  databaseURL: "https://cabinlocator-b6516-default-rtdb.firebaseio.com",
  projectId: "cabinlocator-b6516",
  storageBucket: "cabinlocator-b6516.appspot.com",
  messagingSenderId: "493097041962",
  appId: "1:493097041962:web:a281d3cd5a26961d300353"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            alert("Registration Successfull!");
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            alert("Login Successfull!");
            window.location.replace("index2.html");
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            alert("Wrong Email Or Password");
        });
}


