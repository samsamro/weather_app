const request = require('request')

const forecast = (location,temperature, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6e90546194754e71693c66195816c517&query='+ location + temperature

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.temperature + ' °C ' + body.current.humidity + ' % with Humidity ')
            
        }
    })
    
}

module.exports = forecast
