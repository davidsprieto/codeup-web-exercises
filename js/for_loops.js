// JS For Loops Exercises:

// Exercise #2:
function showMultiplicationTable(numberToMultiply) {
    for (var i = 1; i <= 10; i++) {
        console.log(numberToMultiply.toString() + " * " + i.toString() + " = " + numberToMultiply * i);
    }
}
showMultiplicationTable(7);


// Exercise #3:
for (var a = 1; a <= 10; a++) {
    var randomNumber = Math.floor(Math.random() * 181) + 20;
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even.");
    } else if (randomNumber % 2 === 1) {
        console.log(randomNumber + " is odd.");
    }
}


// Exercise #4:
for (var b = 1; b <= 9; b++) {
    console.log(b.toString().repeat(b));
}


// Exercise #5:
for (var c = 100; c >= 5; c = c - 5) {
    console.log(c);
}