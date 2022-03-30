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