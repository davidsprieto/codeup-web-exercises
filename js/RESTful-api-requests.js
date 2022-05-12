"use strict";

// Fetch request to display movie titles:
fetch('https://spectacular-hammerhead-galley.glitch.me/movies')
    .then(response => response.json())
    .then(data => data.forEach(post => {
        if (typeof post.title === 'string') {
            $('#movies').append(
                `<h1>${post.title}</h1>`
            )
        }
    }))

// Fetch request to allow user to post a new movie:
