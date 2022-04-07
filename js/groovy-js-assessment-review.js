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
var incrementBy1 = prompt("Please enter a number: ");
console.log("User entered number: " + incrementBy1)

function increment(input) {
    input = parseInt(input);
    if (!isNaN(input)) {
        return "User input incremented by +1 is: " + (input + 1);
    } else {
        return false;
    }
}
console.log(increment(incrementBy1));


// 3. Define a function named `isOdd` that takes in a number, return true if that number is odd. Return false if the number is either not a number or even.
var determineIfOdd = Math.floor(Math.random() * 151);
console.log("Random number generated is: " + determineIfOdd);

function isOdd(input) {
    if (input % 2 === 1) {
        return true;
    } else {
        return false;
    }
}
console.log("Is the number odd: " + isOdd(determineIfOdd));


// 4. Write a function named `oddArr`. Given the array of var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] return the odd numbers.
var arrayOddReturn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("The array of numbers is: " + arrayOddReturn);

function oddArr(array) {
    return array.filter(number => number % 2 === 1);
}
console.log(oddArr(arrayOddReturn));


// 5. Define a function named `creditCard` that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.
var creditCardNumber = 2222333344445555;
console.log("Credit card number is: " + creditCardNumber);

function creditCard(input) {
    input = input.toString();
    return "************" + input.substring(12, 16);
}
console.log(creditCard(creditCardNumber));


// 6. create a function named `alphabetSoup` that takes a string and returns a string with its letters in alphabetical order. Return false if string is empty or null
var sortLetters = "The quick brown fox jumps over the lazy dog";
console.log("The input is: " + sortLetters);

function alphabetSoup(input) {
    if (typeof input !== "string" || input === "") {
        return false;
    } else {
        input = input.toLowerCase().split("").sort().join("");
        return console.log("The letters in the string sorted in alphabetical order is: " + input);
    }
}
alphabetSoup(sortLetters);


// 7. create a function named `reverse` that takes in and reverses an array.
var arrayReverse = [1, 2, 3, "a", "b","c", true, false];
console.log("The array is: " + arrayReverse);

function reverse(input) {
    return input.reverse();
}
console.log("The array reversed is: " + reverse(arrayReverse));


// 8. Make a function named isOdd(number)
function isOdd(number) {
    if (number % 2 === 1) {
        return true;
    } else {
        return false;
    }
}
console.log(isOdd(5));


// 9. Make a function named isEven(number)
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(10));


// 10. Make a function named isMultipleOfFive(input)
function isMultipleOfFive(number) {
    if (number % 5 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isMultipleOfFive(25));


// 11. Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
function isMultipleOf(target, n) {
    if (target % n === 0) {
        return true;
    } else {
        return false
    }
}
console.log(isMultipleOf(10, 2));


// 12. Make a function named isVowel(letter)
function isVowel(letter) {
    letter = letter.toLowerCase();
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" ) {
        return true;
    } else {
        return false;
    }
}
console.log(isVowel("a"));

// More Javascript Problems for Practice:
//
// ** The questions with an asterisk * are more challenging
//
// 13. Write a function called first(input) that returns the first character in the provided string:
function first(input) {
    return input.charAt(0);
}
console.log(first("Hello World!"));


// 14* Create a function that takes in two string inputs:
// -- If the second string input is present in the first, return the first input string with the second input string removed from it.
// -- If the second string input is present multiple times in the first, the second string will only be removed where it first occurs in the first string.
// -- If the second string input is not present in the first, return the first string as entered in the function.



// 15. Make a function named isSpace(letter) that returns if a character is a space character:
function isSpace(letter) {
    if (letter === " " || letter === "\n" || letter === "\t" ) {
        return "Whitespace";
    } else {
        return "Not whitespace";
    }
}
console.log(isSpace("a"));


// 16. Write a function named squareRoot(n) that returns the square root of the input:
function squareRoot(n) {
    if (!isNaN(n)) {
        return Math.sqrt(n);
    } else {
        return "Invalid input";
    }
}
console.log(squareRoot(9));


// 17* create a function that will return how many whitespace characters are at the beginning of a string (hint: use regex):



// 18. Write a function named invertSign(number) that returns a negative version of a positive number, a positive version of negative, and false for all else:
function invertSign(number) {
    if (number < 0 || number > 0) {
        return (number * -1);
    } else if (number === 0) {
        return (0);
    } else {
        return false;
    }
}
console.log(invertSign(150));


// 19. Write a function named getRandomQuote():
//    Inside of the function, create an array of strings where each string is a quote or thought you find inspirational.
//    getRandomQuote should generate a random number between 0 and the array's length minus 1.
//    use the randomly generated number as your index.
//    return a random quote.
function getRandomQuote() {
    var quotes = ["Pay the man", "Stay hard", "Weak legs equal a weak mind", "Don't be a soft target", "Go one more"];
    var randomIndex = Math.floor(Math.random() * (quotes.length));
    return quotes[randomIndex];
}
console.log(getRandomQuote());

// 20. Write a function named firstTenFibonacciNumbers() that returns an array of the first ten fibonacci numbers:
var fibonacciArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

function firstTenFibonacciNumbers(input) {
    return input.slice(0, 10);
}
console.log(firstTenFibonacciNumbers(fibonacciArray));

// # regulus-second-js-reassessment-review