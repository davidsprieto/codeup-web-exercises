"use strict";

// Fetch request to display movie titles:
const url = 'https://friendly-complete-gymnast.glitch.me/movies';
fetch('https://friendly-complete-gymnast.glitch.me/movies')
    .then(response => response.json())
    .then(data => data.forEach(post => {
        $('#movies').append(
            `<h1>${post.title}</h1>` +
            `<h4>Rating: ${post.rating}</h4>` +
            `<img src="${post.poster}" style="height:300px; width:200px;">` +
            `<button id="${post.id}">Delete Movie</button>`
        )
    }))

// Fetch request to allow user to post a new movie:
$('#add-movie').click((e) => {
    e.preventDefault();

    let addMovie = {
        title: $("#title").val(),
        rating: $("#rating").val(),
    }
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(addMovie),
    };
    fetch(url, options)
        .then(response => console.log(response)) /* review was created successfully */
        .catch(error => console.error(error)); /* handle errors */
});

// Fetch request to allow user to delete a movie:
$('${post.id}').click((e) => {
    e.preventDefault();

    let deleteMovie = {
        title: `${data.title}`,
        rating: `${data.rating}`
    }
    let options = {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(deleteMovie)
    };
    fetch(url, options)
        .then(response => console.log(response))
        .catch(error => console.error(error));
});

// Fetch request to allow user to edit a movie:
$('#edit-movie').click((e) => {
    e.preventDefault();

    let editMovie = {
        title: $("#edit-title").val(),
        rating: $("#edit-rating").val(),
    }
    let options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(editMovie),
    };
    fetch(url, options)
        .then(response => console.log(response)) /* review was created successfully */
        .catch(error => console.error(error)); /* handle errors */
});