import * as firebase from 'firebase'
import * as firebaseConfig from '../config/firebaseConfig.json'

const init = () => {
    firebase.initializeApp(firebaseConfig)
}

const authenticate = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    })
}

export {
    init,
}