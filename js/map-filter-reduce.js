"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// TODO: Use .filter to create an array of user objects where each user object has at least 3 languages
//  in the languages array.
let userLanguages = users.filter(user => user.languages.length >= 3);
console.log(userLanguages);

// TODO: Use .map to create an array of strings where each element is a user's email address:
let userEmails = users.map(user => user.email);
console.log(userEmails);

// TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total
//  of years you can use the result to calculate the average:
let totalUsersExperience = users.reduce((total, person) => {
    total = total + person.yearsOfExperience;
    return Math.round(total / 5);
}, 0);
console.log(totalUsersExperience);

// TODO: Use .reduce to get the longest email from the list of users:
let userLongestEmail = userEmails.reduce((longestEmail, currentEmail) => {
    console.log(longestEmail);
    console.log(currentEmail);
    if (currentEmail.length > longestEmail.length) return currentEmail;
    return longestEmail;
}, "");
console.log(userLongestEmail);

// TODO: Use .reduce to get the list of user's names in a single string.
//  Example: Your instructors are: ryan, luis, zach, fernando, justin:
let listOfUsersNames = users.reduce((string, user) => {
    string = string + `${user.name}` + ", " ;
    return string;
}, "Your instructors are: ");
listOfUsersNames = listOfUsersNames.substring(0, listOfUsersNames.length-2) + ".";
console.log(listOfUsersNames);

// TODO: ******BONUS******
//  Use .reduce to get the unique list of languages from the list of users:
let uniqueUserLanguages = users.reduce((listOfLanguages, userLanguage) => {
    userLanguage.languages.forEach((language) => {
        if (listOfLanguages.includes(language)) {
            console.log(language);
        } else {
            listOfLanguages.push(language);
        }
    });
    return listOfLanguages;
}, []);
console.log(uniqueUserLanguages);