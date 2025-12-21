import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const convertToLocalTime = (utcTime: string) => {
    return dayjs
    .utc(utcTime)
    .local()
    .format('DD/MM/YYYY HH:mm:ss')
}

export {
    convertToLocalTime
}