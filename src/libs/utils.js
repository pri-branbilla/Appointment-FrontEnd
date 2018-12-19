import * as moment from 'moment'

const buildArray = (max, min = 1) => {
    const array = []

    for (var i = min; i <= max; i++) {
        array.push(i)
    }

    return array
}

const formatDateToDefault = (dates) => {
    const date = [dates.year, dates.month-1, dates.day, dates.hour, dates.minute]
    return moment(date).format("YYYY-MM-DDTHH:mm")
}

export { buildArray, formatDateToDefault }