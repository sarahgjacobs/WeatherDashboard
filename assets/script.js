// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={d156093b6a1df25f03f07a0f8e88abc2}


var searchFormEl = document.querySelector("#citySearchForm");
var cityInputVal = document.querySelector("#inputCity");
var searchBtn = document.querySelector("#citySearch");
var popularCityListGroupEl = document.querySelector(".list-group-1");
var usersCityListGroupEl = document.querySelector(".list-group-2");

// Elements in WeatherContent Main div
var weatherContentDiv = document.querySelector("#weatherContent");
var cardDivEl = document.querySelector(".card");
var cardTitleEl = document.querySelector(".card-title");
var weatherIconEl = document.querySelector("#icon");
var uvIndexEl = document.querySelector("#uvIndex");

let weather = {
    "apiKey": "d156093b6a1df25f03f07a0f8e88abc2",
    fetchWeather: function() {
        fetch("https://api.openweathermap.org/data/2.5/")
        .then((response) => response.json())
        .then((data) => console.log(data))

    }, };