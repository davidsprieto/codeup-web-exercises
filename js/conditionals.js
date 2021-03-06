"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// Functions Exercises:

function analyzeColor(input) {
    if (input === "blue" || input === "Blue"){
        return "Blueberries are blue.";
    }
    else if (input === "red" || input === "Red"){
        return "Raspberries are red.";
    }
    else if (input === "green" || input === "Green"){
        return "Kiwis are green.";
    }
    else if (input === "yellow" || input === "Yellow"){
        return "Bananas are yellow.";
    }
    else if (input === "orange" || input === "Orange"){
        return "Mandarins are orange.";
    }
    else {
        return "I don't know anything about " + input + "!";
    }
}

console.log(analyzeColor("green"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
var analyzeColorAgain = "blue";

switch(analyzeColorAgain) {
    case "blue":
        console.log("Blueberries are blue.");
        break;
    case "red":
        console.log("Raspberries are red.");
        break;
    case "green":
        console.log("Kiwis are green.");
        break;
    case "yellow":
        console.log("Bananas are yellow.");
        break;
    case "orange":
        console.log("Mandarins are orange.");
        break;
    default:
        console.log("I don't know anything about " + analyzeColorAgain + "!");
        break;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userColorInput = prompt("Please choose a color from the rainbow.")
console.log(analyzeColor(userColorInput));
alert(analyzeColor(userColorInput));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, totalAmount){
    if (luckyNumber === 0){
        return totalAmount + " - Sorry, you don't get a discount";
    } else if (luckyNumber === 1){
        return totalAmount - (.10 * totalAmount);
    } else if (luckyNumber === 2){
        return totalAmount - (.25 * totalAmount);
    } else if (luckyNumber === 3){
        return totalAmount - (.35 * totalAmount);
    } else if (luckyNumber === 4){
        return totalAmount - (.50 * totalAmount);
    } else if (luckyNumber === 5){
        return (totalAmount - totalAmount) + " - You get everything for free";
    } else {
        return "Sorry, that's not a lucky number!"
    }
}

console.log(calculateTotal(5, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var userTotalBill = Number(prompt("What is the price of your total bill?"));
alert("Your lucky number is " + luckyNumber + "!");
alert("Your total bill before the discount is: $" + userTotalBill + "!");
alert("Your total after the discount is: $" + calculateTotal(luckyNumber,userTotalBill) + "!");

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
var enterNumber = confirm("Would you like to enter a number?");

if (enterNumber === true) {
    var userInputNumber = Number(prompt("Please enter a number:"));
} else {
    console.log("User didn't want to enter a number.");
}

function userEvenOrOddNumber(userNumber) {
    if (userNumber % 2 === 1) {
        return alert("That's an odd number.");
    } else if (userNumber % 2 === 0) {
        return alert("That's an even number.");
    } else {
        alert("That's an incorrect input data type.");
    }
}
console.log(userEvenOrOddNumber(userInputNumber));


function userPositiveOrNegativeNumber(userNumber) {
    if (userNumber < 0) {
        return alert("That's a negative number.");
    } else if (userNumber > 0) {
        return alert("That's a positive number.");
    } else {
        console.log("Incorrect input data type.");
    }
}
console.log(userPositiveOrNegativeNumber(userInputNumber));


if (enterNumber === true && (userInputNumber >= 0 || userInputNumber <= 0)) {
    alert("That number is " + Number(userInputNumber + 100) + " if you add 100 to it!");
} else {
    console.log("Incorrect input data type.");
}


// STARTING CODE - BEFORE SPLITTING THE FUNCTIONS IS BELOW:
// NEEDED TO SPLIT THE FUNCTION INTO TWO SEPARATE FUNCTIONS AS THE CODE EXITS THE FUNCTION ONCE THE CONDITION IS MET!

// var enterNumber = confirm("Would you like to enter a number?");
//
// if (enterNumber === true){
//     var userInputNumber = Number(prompt("Please enter a number:"));
// } else {
//     console.log("User didn't want to enter a number.");
// }
//
// function userRandomNumber(userNumber){
//     if (userNumber % 2 === 1){
//         return alert("That's an odd number.");
//     }
//     else if (userNumber % 2 === 0){
//         return alert("That's an even number.");
//     }
//     else if (userNumber < 0){
//         return alert("That's a negative number.");
//     }
//     else if (userNumber > 0){
//         return alert("That's a positive number.");
//     }
//     else {
//         alert("That's an incorrect input data type.");
//     }
// }
//
// console.log(userRandomNumber(userInputNumber));
//
// if (enterNumber === true && (userInputNumber >= 0 || userInputNumber <= 0)){
//     alert("That number is " + Number(userInputNumber + 100) + " if you add 100 to it!");
// } else {
//     console.log("Incorrect input data type.");
// }