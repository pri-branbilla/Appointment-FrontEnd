import defaultRoute from '../config/serverConfig'
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

export {
    sendAppointment
}