import * as firebase from 'firebase'
import firebaseConfig from '../config/firebaseConfig.js'

const init = () => {
    firebase.initializeApp(firebaseConfig)
}

const authenticate = (email, password, callback) => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => callback())
        .catch(function(error) {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            callback(error)
            // ...
        })
    })
    .catch((error) => {
        callback(error)
    })
}

const logout = (callback) => {
    firebase.auth().signOut().then(function() {
        callback()
    }).catch(function(error) {
        callback(error)
    })
}

const verifyIdToken = () => {
    firebase.auth().currentUser.getIdToken(true)
    .then((idToken) => {

    })
    .catch((error) => {

    })
}

const isLoggedIn = (callback) => {
    firebase.auth().onAuthStateChanged((user) => {
        callback(user)
    })
}

export {
    init,
    authenticate,
    verifyIdToken,
    logout,
    isLoggedIn,
}