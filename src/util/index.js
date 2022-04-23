const monthMapping = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    "10": "Oct",
    "11": "Nov",
    "12": "Dec"
}

function datetimeToShortDateString(datetime) {
    const date = datetime.split(" ")[0]
    const month = monthMapping[date.split("-")[1]]
    const day = date.split("-")[2]
    return `${month} ${day}`
}

export default {
    datetimeToShortDateString
}