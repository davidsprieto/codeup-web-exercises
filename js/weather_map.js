"use strict";

function retrieveData(location) {
    $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: openWeatherMapApiKey,
        q: location,
        units: "imperial"
    }).done(function(data, status) {
        console.log(data);
        console.log(status);
        displayWeather(data);
    })
}

retrieveData("Gurnee, US");

function displayWeather(data) {
    $('#location').html(data.city.name);
    $('#date').html(data.list[0].dt_txt.substring(0, 10));
    $('#high-low').html("Low: " + data.list[0].main.temp_min.toString() + " / High: " + data.list[0].main.temp_max.toString());
    $('#description').html("Clouds: " + data.list[0].weather[0].description);
    $('#humidity').html("Humidity: " + data.list[0].main.humidity);
    $('#wind').html("Wind Speed: " + data.list[0].wind.speed)
    $('#pressure').html("Pressure: " + data.list[0].main.pressure);
}
//         let contents = $('#map')
//         contents.append(
//             '<div>' +
//             '<h1>data.base</h1>' +
//             '<h1>data.main</h1>' +
//         '</div>')
//         console.log(data);
//         console.log(status);
//     });
// }

// .forEach(function(condition) {
//     let contents = $('#map')
//     contents.append('<div>' +
//         '<h1>'condition.main'</h1>
//     + '</div>)
// })
// console.log(data);
// console.log(status);

// mapboxgl.accessToken = mapBoxKey;
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/streets-v11', // style URL
//     center: [-87.67731, 41.91907], // starting position [lng, lat]
//     zoom: 10 // starting zoom
// });