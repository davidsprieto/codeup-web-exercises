"use strict";

// TODO: Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of
//  the last commit that user made. Reference the github api documentation to achieve this.

let githubToken = "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";

function lastPush(user) {
    fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': `token ${githubToken}`}})
        .then(response => response.json())
        .then((pushes) => {
            console.log((pushes[0].created_at));
        })
        .catch(error => console.error(error));
}
lastPush('davidsprieto');


// TODO: Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after
//  the passed number of milliseconds. As a bonus make sure the promise resolves with the milliseconds in return,
//  so you can make the console.log message more dynamic.

function wait(num) {
    return new Promise((resolve, reject) => {
        if (!isNaN(num)) {
           setTimeout(() => {
               resolve();
            }, num)
        } else {
            reject("Not a number.");
        }
    });
}

wait(1000).then(() => console.log('You\'ll see this after 1 second.'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds.'));