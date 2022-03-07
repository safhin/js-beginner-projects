
const searchBtn = document.querySelector('.location-button');
const searchElem = document.querySelector('.input');
const descElem = document.querySelector('.weather-desc');
const feelsElem = document.querySelector('.feels-result');
const rainElem = document.querySelector('.humidity-result');
const windElem = document.querySelector('.wind-result');
const visibilityElem = document.querySelector('.visibilty-result');
const locationElem = document.querySelector('.location');
const tempElem = document.querySelector('.weather-temp');
const hTempElem = document.querySelector('.h-temp-result');
const lTempElem = document.querySelector('.l-temp-result');

const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;

searchBtn.addEventListener('click', function(){
    userAction().then((data) => {
        descElem.innerHTML = data.weather[0]['main'];
        visibilityElem.innerHTML = data.visibility;
        windElem.innerHTML = data.wind['speed'];
        tempElem.innerHTML = Math.floor(data.main['temp'] - 273.15) + "°C";
        hTempElem.innerHTML = Math.floor(data.main['temp_max'] - 273.15) + "°C";
        lTempElem.innerHTML = Math.floor(data.main['temp_min'] - 273.15) + "°C";
        visibilityElem.innerHTML = data.visibility;
        locationElem.innerHTML = data.name + " , " + data.sys['country'];
        searchElem.value = "";
    });
});

const userAction = async () => {
    return fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchElem.value + "&appid=d5d236b19472c5ac4a28e1cbd9417350")
    .then((response) => {
        return response.json().then((data) => {
            return data;
        });
    })
    .catch(err => console.log('Request Failed', err)); // Catch errors
}