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
        .catch((error) => {
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

const getIdToken = (callback) => {
    console.log(firebase.auth().currentUser)
    if (!firebase.auth().currentUser) {
        const error = { 
            message: 'User not authenticated',
        }
        return callback(error)
    }
    firebase.auth().currentUser.getIdToken()
    .then((idToken) => {
        callback(idToken)
    })
    .catch((error) => {
        console.log(error)
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
    getIdToken,
    logout,
    isLoggedIn,
}