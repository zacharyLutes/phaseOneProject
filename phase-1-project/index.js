const button = document.getElementById('button')
const buttonTwo = document.getElementById('buttonTwo')
const pOne = document.getElementById('one')
const pTwo = document.getElementById('two')
const weather = document.getElementById('weather')
const loc = document.getElementById('location')
const country = document.getElementById('country')
const localTime = document.getElementById('localTime')
const conditions = document.getElementById('conditions')
const tempF = document.getElementById('temp_f')
const feelsLike = document.getElementById('feelsLike_f')

const printMousePos = () => {
    let cursorX;
    let cursorY;
    document.onclick = function(e){
        cursorX = e.pageX;
        cursorY = e.pageY;
        pOne.innerHTML = "x: " + cursorX + ", y: " + cursorY;
        alert(cursorX + '\n' + cursorY)

    }
}

button.addEventListener('click', () => {
    pOne.innerHTML = 'Hello World'
    pTwo.innerHTML = 'Once you have clicked the map, the above line will show you the exact x and y coords for you to map your objects around.'
})


// HTML Map and HTML area to find out how to break up the image.
// Figuring out how to target areas with mousever so that return is relatively clean
// Google mouseover pop-up box on mouse-icon
// Template for fetch

buttonTwo.addEventListener('click', () => {

    fetch('https://api.weatherapi.com/v1/current.json?key=b4fae7bb9c764b8bb6b184857213006&q=48.8567,2.3508')
    .then(res => {
        return res.json()})
    .then(weather => {
        loc.innerHTML = 'Film Location:  ' + weather['location']['name']
        country.innerHTML = 'Country:  ' + weather['location']['country']
        localTime.innerHTML = 'Local Date/Time:  ' +  weather['location']['localtime']
        conditions.innerHTML = 'Local Conditions:  ' + weather['current']['condition']['text']
        tempF.innerHTML = 'Temperature in Farenheit:  ' + weather['current']['temp_f']
        feelsLike.innerHTML = 'Feels Like (in Farenheit):  ' + weather['current']['feelslike_f']
})})

const kingsLandingCall = () => {
    fetch('https://api.weatherapi.com/v1/current.json?key=b4fae7bb9c764b8bb6b184857213006&q=42.6507,18.0944')
        .then(res => {
            return res.json()})
        .then(weather => {
            loc.innerHTML = 'Film Location:  ' + 'Dubrovnik'
            country.innerHTML = 'Country:  ' + weather['location']['country']
            localTime.innerHTML = 'Local Date/Time:  ' +  weather['location']['localtime']
            conditions.innerHTML = 'Local Conditions:  ' + weather['current']['condition']['text']
            tempF.innerHTML = 'Temperature in Farenheit:  ' + weather['current']['temp_f']
            feelsLike.innerHTML = 'Feels Like (in Farenheit):  ' + weather['current']['feelslike_f']
    })
    console.log("Success!")
}

const northOfTheWallCall = () => {
    fetch('https://api.weatherapi.com/v1/current.json?key=b4fae7bb9c764b8bb6b184857213006&q=65.6039,-18.000')
        .then(res => {
            return res.json()})
        .then(weather => {
            loc.innerHTML = 'Film Location:  ' + weather['location']['name']
            country.innerHTML = 'Country:  ' + weather['location']['country']
            localTime.innerHTML = 'Local Date/Time:  ' +  weather['location']['localtime']
            conditions.innerHTML = 'Local Conditions:  ' + weather['current']['condition']['text']
            tempF.innerHTML = 'Temperature in Farenheit:  ' + weather['current']['temp_f']
            feelsLike.innerHTML = 'Feels Like (in Farenheit):  ' + weather['current']['feelslike_f']
    })
}

const winterfellCall = () => {
    fetch('https://api.weatherapi.com/v1/current.json?key=b4fae7bb9c764b8bb6b184857213006&q=54.3730,-5.5790')
        .then(res => {
            return res.json()})
        .then(weather => {
            loc.innerHTML = 'Film Location:  ' + weather['location']['name']
            country.innerHTML = 'Country:  ' + weather['location']['country']
            localTime.innerHTML = 'Local Date/Time:  ' +  weather['location']['localtime']
            conditions.innerHTML = 'Local Conditions:  ' + weather['current']['condition']['text']
            tempF.innerHTML = 'Temperature in Farenheit:  ' + weather['current']['temp_f']
            feelsLike.innerHTML = 'Feels Like (in Farenheit):  ' + weather['current']['feelslike_f']
    })
}
const highgardenCall = () => {
    fetch('https://api.weatherapi.com/v1/current.json?key=b4fae7bb9c764b8bb6b184857213006&q=37.8074,-5.0238')
        .then(res => {
            return res.json()})
        .then(weather => {
            loc.innerHTML = 'Film Location:  ' + weather['location']['name']
            country.innerHTML = 'Country:  ' + weather['location']['country']
            localTime.innerHTML = 'Local Date/Time:  ' +  weather['location']['localtime']
            conditions.innerHTML = 'Local Conditions:  ' + weather['current']['condition']['text']
            tempF.innerHTML = 'Temperature in Farenheit:  ' + weather['current']['temp_f']
            feelsLike.innerHTML = 'Feels Like (in Farenheit):  ' + weather['current']['feelslike_f']
    })
}
