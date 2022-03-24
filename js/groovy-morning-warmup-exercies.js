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

