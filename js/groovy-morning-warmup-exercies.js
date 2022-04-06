// Groovy Morning Warmup Exercises:
// Exercise: Write a javascript function that accepts the 3 lengths of a triangle and outputs the triangle’s area.

// 03/22/22 - Function for the area of a triangle when the base and the height are known:
function triangleArea (b, h) {
    return (.5 * b * h);
}
console.log(triangleArea(5, 6));


// Function for the area of a triangle when all three sides are known:
function areaOfTriangle (a, b, c) {
    return ((a + b + c) / 2);
}
console.log(areaOfTriangle(2, 4, 5));


// 03/25/22 - Write a function that takes in an array and returns the array in a random order:
var numbersArray = [2, 4, 6, 8];

function shuffleArray(input) {
    return input.sort(() => Math.random() - 0.5);
}
console.log(shuffleArray(numbersArray));


// 03/28/22 - Return a string in reverse:
// Solution found on freecodecamp.org.
function stringReverse(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
console.log(stringReverse("hello"));


// Above solution can be rewritten as seen below to have all methods be performed on the input and stored in one variable.
function stringReverse2(str) {
    var reverseString = str.split("").reverse().join("");
    return reverseString;
}
console.log(stringReverse2("hello"));


// 03/28/22 - Return true if a string is a palindrome and false if it isn't. (A palindrome is a word that reads the same both forward and backward, example: racecar).
// Solution found on freecodecamp.org
function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
palindrome("A man, a plan, a canal. Panama");


// 03/30/22 - Write a function that filters out numbers from a list:
// Example input: [3,g,s,5,j,8,2,d,6,h,9,l,5,s,2,3]
// Expected Output: [g,s,j,d,h,l,s]
var arrayOfCharacters = [3,"g","s",5,"j",8,2,"d",6,"h",9,"l",5,"s",2,3];

function filterOutNumbers(array) {
    return array.filter(value => typeof value === 'string');
}
console.log(filterOutNumbers(arrayOfCharacters));


// 04/01/22 - Write a function that returns the reading status of each of the following books:
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

    library.forEach(function(library){
        console.log("Author: " + library.author + ", Title: " + library.title + ", Are you still reading?: " + library.readingStatus);
    })


// 04/04/22 - Write a JS code to return an array of only the even numbers from the given array:
// example input: [12,2,3,4,5,6,7,8,9]
// expected output: [2,2,4,6,8]
var arrayOfNumbers = [12, 2, 3, 4, 5, 6, 7, 8, 9];

function getEvenNumbers(array) {
        return array.filter(number => number % 2 === 0);
}
console.log(getEvenNumbers(arrayOfNumbers));


// 04/05/22 - Write a JS code that accepts an array of numbers and returns the total of the array of numbers:
// example input: [1,2,3,4,5];
// expected output: 15
//
// some possible test cases to think about:
// function should be called ‘sumArr’
// function should return a number
// function should accept an array
// function should return “sum not available” if array is empty
// function should handle non-numbers
var arrayOfChar = [1, "hello", 2, 3, 4, "codeup", 5];

function sumArr(array) {
    if (array == "") {
        return "Sum not available";
    } else {
        array = array.filter(value => typeof value === 'number');
        return array.reduce((a, b) => a + b, 0 );
    }
}
console.log(sumArr(arrayOfChar));


// 04/06/22 - Write a JS code that sorts an array of numbers from smallest to largest:
// example input: [5,8,2,6,9,3,2];
// expected output: [2,2,3,5,6,8,9] // length: 7
//
// some possible test cases to think about:
// should be called ‘sortArr’
// function should return an array
// function should accept an array
// BONUS thoughts
// what would happen if you had negative numbers in your list
// can you sort and then remove any duplicates (would it be more/less efficient to remove duplicates and then sort?)
// if your array has non-numbers can you still sort the numbers? ex: input: [3,“b”,8,5,9,true”, 4,“xyz”] expected output: [3,4,5,8,9];
var arraySort = [-1, 5, 8, "b", 2, 6, -3, 9, true, 3, 2, "hello"];

function sortArr(array) {
    array = array.filter(value => typeof value === 'number'); // this filters out the strings & boolean data types in the array.
    array = [...new Set(array)] // this removes any duplicates.
    return array.sort(); // this then sorts the array from smallest to largest value.
}
console.log(sortArr(arraySort));