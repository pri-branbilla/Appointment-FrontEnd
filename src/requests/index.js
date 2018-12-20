import defaultRoute from '../config/serverConfig'
import { getIdToken } from '../libs/Firebase'
import * as axios from 'axios'

const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
}

const sendAppointment = (body, callback) => {
    console.log(body)
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

const newAvailableDate = (body, callback) => {
    getIdToken((idToken) => {
        defaultHeaders['user_id_token'] = idToken
        axios.post(defaultRoute + '/dates', body,
        {
            headers: defaultHeaders,
        })
        .then((response) => {
            console.log(response)
            callback()
        })
        .catch((error) => {
            console.log(error.message)
            callback(error)
        })
    })
}

const scheduleDate = (body, callback) => {
    axios.patch(defaultRoute + '/dates/update', body,
    {
        headers: defaultHeaders,
    })
    .then((response) => {
        console.log(response)
        callback()
    })
    .catch((error) => {
        console.log(error.message)
        callback(error)
    })
}

const getAvailableDate = (callback) => {
    axios.get(defaultRoute + '/dates/',
        {
            headers: defaultHeaders,
        })
        .then((response) => {
            callback(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
}

export {
    sendAppointment,
    getAppointments,
    newAvailableDate,
    scheduleDate,
    getAvailableDate,
}