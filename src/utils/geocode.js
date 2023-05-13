const request = require('request')

const geocode = (address, callback) => {
   const url ='http://api.mapbox.com/geocoding/v5/mapbox.places/'+ address+ '.json?access_token=pk.eyJ1Ijoic2Ftc2Ftcm8iLCJhIjoiY2xoZnE0dGwyMXd5NDNpcGJ1MXUwMzJkayJ9.PZs3sEX9XcitsIlKnFAVAQ'
   
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
            console.log('Unable to connect to location services!')
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
            console.log('Unable to find location. Try another search.')
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name                
            })
        }
    })
}

module.exports = geocode