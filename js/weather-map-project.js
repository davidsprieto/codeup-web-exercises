"use strict";

retrieveData();

function retrieveData() {
    $.get("https://api.openweathermap.org/data/2.5/weather", {
        APPID: openWeatherMapApiKey,
        q: "Chicago, US",
        units: "imperial"
    }).done(function (data) {
        console.log(data)
    });
}

// mapboxgl.accessToken = mapBoxKey;
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/streets-v11', // style URL
//     center: [-87.67731, 41.91907], // starting position [lng, lat]
//     zoom: 10 // starting zoom
// });