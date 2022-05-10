var name = "Laura"

if (name === "Laura"){
    console.log("Hey, she's my instructor.");
} else if (name === "Kenneth"){
    console.log("Oh, he's my instructor too!");
} else {
    console.log("Um, I don't know them.")
}

// 03/28/22 - Objects

// OBJECT LITERALS:
var davidObject = {
    age: 28,
    cityResiding: "Gurnee",
    favoriteTeam: "Bears",
    favoriteFoods: ["enchiladas", "cheeseburgers", "tacos"],
    petName: "Ava",
    favoriteHobbies: ["weightlifting", "kayaking", "hiking", "reading"],
    minusAge: function() {
        return davidObject.age - 10; // can also be written using 'this' keyword: return this.age - 10;
    }
}
console.log(davidObject.minusAge());

var frogs = {}; // Creating an empty object by way of object literal.
var whales = new Object(); // Creating an empty object by way of new object.

var car = {
    year: 2020,
    make: "honda",
    model: "fit",
    has4Wheels: true,
    leather: true,
    wheels: 4,
    doors: 2,
    stereo: false,
    radioStations: [104.5, 95.1, 101.1, "WRR", 105.3, "KNTU", 96.1]
}
console.log("I drive a " + car.make + " " + car.model + " and I like to listen to radio stations: " + car.radioStations[1] + " & " + car.radioStations[5] + ".");

// 04/20/22 - JS Review
var array = [2, 4, 6, {a:1, b:2}, 8, 10, 12];
console.log(array[3].b); // accesses the object key/property 'b' with a value of '2' located in the 3rd index position of the elements within the array.

// 05/10/22 - TODO: Square the value of every element in the array. Presume that you will only get numbers in the input array.
// Example Input: const input = [1, 2, 3, 4, 5];
// Example Output: [1, 4, 9, 16, 25];
const numbers = [1, 2, 3, 4, 5];

let squared = numbers.map(n => n ** 2);
console.log(squared);

// Other solutions for the code written above are:
// 1. let squared = numbers.map(num => Math.pow(number, 2));
// console.log(squared);
// 2. let squared = numbers.map(function(number) {
//     return Math.pow(number, 2);
//   });
// console.log(squared);


// TODO: If the given input is an array of numbers, return the sum of all the positives ones.
//  If the array is empty or there aren't any positive numbers, return 0.
// Example Input: [1, -4, 12, 0, -3, 29, -150];
// Example Output: 42;

const numbers1 = [1, -4, 12, 0, -3, 29, -150];

let positivesNumbersSum = numbers1.reduce((total, number) => {
    if (number > 0) {
        total = total + number;
        console.log(total);
    }
    return total;
}, 0);
console.log(positivesNumbersSum);

// Another solution for the code written above is:
// let positivesNumbersSum = numbers1.filter(number => number > 0)
//     .reduce((total, number) => total + number, 0);


// TODO: Calculate the mean and median values of the number elements from the input array.
// Example Input: [12, 46, 32, 64];
// Example Output: {mean: 38.5, median: 32};
const input = [12, 46, 32, 64];

input.sort((a, b) => a - b);

input.reduce((accumulator, currentValue, index, array) => {
    accumulator.mean = accumulator.mean + currentValue /  array.length;

    if(Math.abs(index + 1  - array.length / 2) < 1) {
        accumulator.median = currentValue
    }

    return accumulator;
}, { mean: 0, median: 0 });