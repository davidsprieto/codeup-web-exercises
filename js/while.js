// While Loop JS Exercise:

// Exercise #2:

// Solution #1:
var i = 1;

while (i < 65536) {
    console.log(i = i * 2);
}


// Solution #2:
var a = 2;

while (a < 65536) {
    console.log(a);
    a = a * 2;
}


// Do While Loop JS Exercise:

// Exercise #1:
var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var conesBought = Math.floor(Math.random() * 5) + 1;
    console.log("The amount of cones left are: " + allCones);
    if (conesBought > allCones) {
        console.log("Sorry, I can't sell you " + conesBought + " cones, I only have " + allCones + " left.");
    } else {
        console.log(conesBought + " cone(s) sold.");
        allCones = allCones - conesBought;
    }
} while (allCones > 0);
    console.log("All cones have been sold!");