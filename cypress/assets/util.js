function getRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function convertDateTime(dateTime) {
    let res = new Date(dateTime).toLocaleString('en-us', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true })
    return res
}

module.exports = {
    getRandomIndex,
    convertDateTime
}