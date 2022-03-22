// Exercise: Write a javascript function that accepts the 3 lengths of a triangle and outputs the triangle’s area.

// Function for the area of a triangle when the base and the height are known:
function triangleArea (b, h) {
    return (.5 * b * h);
}
console.log(triangleArea(5, 6));


// Function for the area of a triangle when all three sides are known:
function areaOfTriangle (a, b, c) {
    return ((a + b + c) / 2);
}
console.log(areaOfTriangle(2, 4, 5));