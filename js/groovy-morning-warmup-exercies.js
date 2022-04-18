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


// 04/07/22 - Write a function that accepts a string and returns a map with the string's character frequency:
// example input: [“b”, “a”, “n”, “a”, “n”, “a”];
// expected output: { b: 1, a: 3, n: 2 };
// solution found on stackoverflow.com:
function getFrequency(string) {
    var freq = {};
    for (var i = 0; i < string.length; i++) {
        var character = string.charAt(i);
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
        }
    }
    return freq;
}
console.log(getFrequency("frequency of characters in this string"));


// 04/11/22 - Write the code necessary to output the first 50 prime numbers.
// Recommend starting your loop at 1 and ending your loop once you've calculated 50 primes.
// https://en.wikipedia.org/wiki/Prime_number
// solution found on codeacademy.com:
for (var counter = 2; counter < 230; counter++) {
    var notPrime = false;

    for (var i = 2; i <= counter; i++) {
        if (counter % i === 0 && i !== counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
        console.log(counter);
   }
}

// Attempting to refactor above solution.
// Alternative solution found on codegrepper.com:
for (var number = 2; number <= 230; number++) {
    var isPrime = true;

for (var a = 2; a <= number - 1; a++) {
    if (number % a === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(number);
    }
}

// 04/13/22 - Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array
//
// example input: [1, 2, 3], [3, 4, 5]
// expected output: [ 1, 2, 3, 4, 5 ]
var arrayOfNums = [1, 2, 3, 10, 23, 45];
var arrayOfNums2 = [3, 4, 5, 10, 78, 109];

function mergeArrays(a, b) {
    var mergeArrayOfNums = a.concat(b); // this merges the arrays
    var removeDuplicates = [...new Set(mergeArrayOfNums)]; // this filters out duplicate values
    var sortArray = removeDuplicates.sort(function(a, b){return a-b}); // this sorts the array in ascending order with a compare function
    return sortArray;
}
console.log(mergeArrays(arrayOfNums, arrayOfNums2));


// 04/14/22 - Write a function that takes an array of objects as an argument
// Sort the array by property b in ascending order
// Return the sorted array
//
// example input: [{a:1,b:7},{a:2,b:1}]
// expected output: [{a:2,b:1},{a:1,b:7}]
var objectSort = [{a:3, b:7}, {a:2, b:1}, {a:5, b:3}];

console.log(objectSort.sort((a, b) => {
    return (a.b - b.b);
}));

// Another way to write the above solution is below which has a compare function within a function.
// Notice there's two 'return's written. One for the function and one for the compare function within the function.
function sortArrayOfObjects(array) {
    return array.sort((a, b) => {return a.b - b.b});
}
console.log(sortArrayOfObjects(objectSort));

// 04/18/22 - Rewrite the following using a for-loop:
// var d = 20;
// while (d >= 0) {
//     console.log(d);
//     d--;
// }
for (var d = 20; d >= 0; d--) {
    console.log(d);
}


// 04/18/22 - Write a function that takes an object (a) as argument and returns an array with all object keys:
// example input: {a:1,b:2,c:3}
// expected output: ['a','b','c']
// ------------------------
//     example input:{j:9,i:2,x:3,z:4}
// expected output: ['j','i','x','z']
var object1 = {a:1, b:2, c:3}

function objectKeys() {
    return Object.keys(object1);
}
console.log(objectKeys(object1));