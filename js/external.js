// JavaScript with HTML Exercises

// External JS Exercise
console.log("Hello from external JavaScript.");

// Exercises 2 - Alert and Prompt.
alert("Welcome to my Website!");

var userInput = prompt("What is your favorite color?");
alert("Great, " + userInput + " is my favorite color too!");

// Exercises 3 - Working with Data Types, Operators, and Variables + JavaScript with HTML.
var littleMermaid = prompt("How many days would you rent the movie, 'The Little Mermaid'?");
var brotherBear = prompt("How many days would you rent the movie, 'Brother Bear'?");
var hercules = prompt("How many days would you rent the movie, 'Hercules?'");
var totalCostOfMovies = (littleMermaid * 3) + (brotherBear * 3) + (hercules * 3);
alert("That would cost you $" + totalCostOfMovies + " to rent those movies.");

var google = prompt("How many hours did you work at Google?");
var amazon = prompt("How many hours did you work at Amazon?");
var facebook = prompt("How many hours did you work at Facebook?");
var totalPay = (google * 400) + (amazon * 380) + (facebook * 350);
alert("You will be paid $" + totalPay + " for this week of work.");

var classNotFull = true;
var classNoConflict = true;
var enrolled = classNotFull && classNoConflict;
console.log("Capable of enrolling in the course: " + enrolled);
alert("You can enroll in this class!");

var moreThanTwoItems = 2;
var offerNotExpired = true;
var ifPremiumMember = true;
var offerValid = offerNotExpired && (moreThanTwoItems > 2 || ifPremiumMember);
console.log("Is the offer valid: " + offerValid);
alert("This product offer is valid!");
