// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={d156093b6a1df25f03f07a0f8e88abc2}

// var year = dayjs().format("YYYY");
// var currentMonth = dayjs().format('MMMM');
var today = Date.now;


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


dateEl.innerText = today;

function getWeatherData(city) {
    console.log('Hello world')
    var geourl = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + API_KEY
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
    weatherDescription.innerText = data.weather[0].main
    tempMin.innerText = data.main.temp_min
    tempMax.innerText = data.main.temp_max
    windSpeed.innerText = data.wind.speed
    humidity.innerText = data.main.humidity
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
