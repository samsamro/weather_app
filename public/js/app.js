const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

        
    fetch('https://api.weatherstack.com/current?access_key=6e90546194754e71693c66195816c517&query='+ location)
    .then(function (response) {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error.info
                console.log(data.error)
            } else {
                messageOne.textContent = ''
                messageTwo.textContent = data.location.country+' '+data.current.temperature + ' °C with '+data.current.humidity +' % Humidity '
                console.log(data.location.country+' '+data.current.temperature + ' °C with '+data.current.humidity +' % of Humidity ')
            }
        })
    })

})