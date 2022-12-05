// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={d156093b6a1df25f03f07a0f8e88abc2}


// var searchFormEl = document.querySelector("#citySearchForm");
// var cityInputVal = document.querySelector("#inputCity");
// var searchBtn = document.querySelector("#citySearch");
// var popularCityListGroupEl = document.querySelector(".list-group-1");
// var usersCityListGroupEl = document.querySelector(".list-group-2");

// // Elements in WeatherContent Main div
// var weatherContentDiv = document.querySelector("#weatherContent");
// var cardDivEl = document.querySelector(".card");
// var cardTitleEl = document.querySelector(".card-title");
// var weatherIconEl = document.querySelector("#icon");
// var uvIndexEl = document.querySelector("#uvIndex");

// let weather = {
//     "apiKey": "d156093b6a1df25f03f07a0f8e88abc2",
//     fetchWeather: function() {
//         fetch("https://api.openweathermap.org/data/2.5/")
//         .then((response) => response.json())
//         .then((data) => console.log(data))

//     }, };

const timeEl = document.getElementById('time')
const dateEl = document.getElementById('date')
const currentWeatherItemsEl = document.getElementById('current-weather-items')
const timeZone = document.getElementById('time-zone')
const countryEl = document.getElementById('country')
const weatherForecastEl = document.getElementById('weather-forecast')
const currentTempEl = document.getElementById('current-temp')
var searchBtn = document.getElementById("search")
var cityHistory = JSON.parse(localStorage.getItem("cityHistory")) || []


const API_KEY = 'd156093b6a1df25f03f07a0f8e88abc2'
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Dec'];
// setInterval(() => {
//     const time = new Date;
//     const month = time.getMonth();
//     const date = time.getDate();
//     const day = time.getDay();
//     const hour = time.getHours();
//     const hoursIn12 = hour >= 13 ? hour % 12 : hour;
//     const minute = time.getMinutes();
//     const ampm = hour >= 12 ? 'PM' : 'AM'

//     timeEl.innerHTML = hoursIn12 + ':' + minute + ' ' + `<span id="am-pm">${ampm}</span>`
//     dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month]

// }, 1000);


function getWeatherData(city) {
    console.log('Hello world')
    var geourl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + API_KEY
    fetch(geourl).then(response => {
        return response.json()
    }).then(data => {
        console.log(data)
        var lat = data[0].lat
        var lon = data[0].lon
        var cityName = data[0].name
        if (!cityHistory.includes(cityName)) {
            cityHistory.push(cityName)
            console.log(cityHistory)
            localStorage.setItem("cityHistory", JSON.stringify(cityHistory))
        }
        var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + API_KEY
        fetch(weatherUrl).then(response => {
            return response.json()
        }).then(data => {
            displayWeather(data)
        })
    })
}

function displayWeather(data) {
    console.log(data)
    var cityTitle = document.createElement("h3");
    cityTitle.textContent = data.name
    document.querySelector(".date-container").appendChild(cityTitle)
}

searchBtn.addEventListener("click", function () {
    var searchInput = document.getElementById("input").value
    getWeatherData(searchInput);
})



// fetch(geourl).then(response => {
//     return response.json()
// }).then(data => {
//     console.log(data)
// })