import defaultRoute from '../config/serverConfig'
import { getIdToken } from '../libs/Firebase'
import * as axios from 'axios'

const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
}

const sendAppointment = (body, callback) => {
    axios.post(defaultRoute + '/appointments/', body,
    {
        headers: defaultHeaders,
    })
    .then((data) => {
        console.log(data)
        callback()
    })
    .catch((error) => {
        console.log(error)
        callback(error)
    })
}

const getAppointments = (callback) => {
    getIdToken((idToken) => {
        defaultHeaders['user_id_token'] = idToken
        console.log(defaultHeaders)
        axios.get(defaultRoute + '/appointments/',
        {
            headers: defaultHeaders,
        })
        .then((response) => {
            callback(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    })
}

const newAvailableDate = () => {
    getIdToken((idToken) => {
        
    })
}

const deleteAvailableDate = () => {
    getIdToken((idToken) => {
        
    })
}

export {
    sendAppointment,
    getAppointments,
    newAvailableDate,
    deleteAvailableDate,
}