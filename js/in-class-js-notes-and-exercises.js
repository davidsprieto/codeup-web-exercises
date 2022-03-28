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
        return davidObject.age - 10;
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

