// # JavaScript Second reassessment Review

// ## Instructions

// 0. *Carefully* read *all* the instructions and problems before beginning your work.

// ## Problems

// 1. Create a function named `calcAge` that takes the age and returns the age in days. If input is not numeric, calcAge should return false.
var userAge = 28;
console.log("User age is: " + userAge);

function calcAge(input) {
    if (typeof input == 'number') {
        return console.log("User age in days is: " + (input * 365) + " days.");
    } else {
        return console.log(false);
    }
}
calcAge(userAge);

// 2. Create a function named `increment` that takes a number as an argument, increments the number by +1 and returns the result. If input is not numeric, increment should return false.


// 3. Define a function named `isOdd` that takes in a number, return true is that number is odd. Return false if the number is either not a number or even.


// 4. Write a function named `oddArr`. Given the array of var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] return the odd numbers.


// 5. Define a function named `creditCard` that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.


// 6. create a function named `AlphabetSoup` that takes a string and returns a string with its letters in alphabetical order. Return false if string is empty or null


// 7. create a function named `reverse` that takes in and reverses an array.
// # regulus-second-js-reassessment-review