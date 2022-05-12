"use strict";

$.get("https://api.openweathermap.org/data/2.5/weather", {
    APPID: openWeatherMapApiKey,
    q: "Chicago, US",
}).done(function(data) {

})