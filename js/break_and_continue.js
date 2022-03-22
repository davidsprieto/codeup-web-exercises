// Break and Continue JS Loops Exercise:

// Exercise #2:
// Beginning Code - 1st iteration of code to determine a solution:
//
// var userRandomNumber = Number(prompt("Please enter an odd number between 1 and 50:"));
//
// for (var i = 1; i <= 50; i++) {
//     if (userRandomNumber >= 1 && userRandomNumber <= 50) {
//         console.log(userRandomNumber);
//         break;
//     } else if (userRandomNumber < 0 || userRandomNumber > 51) {
//         Number(prompt("Invalid input. Please enter an odd number between 1 and 50:"));
//         continue;
//     }
// }

// 2nd iteration of code to determine a solution:
// var userRandomNumber = Number(prompt("Please enter an odd number between 1 and 50:"));
//
// if (userRandomNumber >= 1 && userRandomNumber < 50 && userRandomNumber % 2 === 1) {
//     for (var i = 1; i <= 50; i++) {
//         if (i % 2 !== 1) {
//             continue;
//         }
//         console.log("Here is an odd number: " + i);
//     }
// }

// 3rd iteration of code to determine a solution:
// var userRandomOddNumber = Number(prompt("Please enter an odd number between 1 and 50:"));
//
// for (i = 1; i <= 50; i++) {
//     if (userRandomOddNumber < 0 || userRandomOddNumber > 51) {
//         Number(prompt("Invalid Input. Please enter an odd number between 1 and 50:"));
//         break;
//     } else if (userRandomOddNumber >= 1 && userRandomOddNumber < 50 && userRandomOddNumber % 2 === 1) {
//         for (var i = 1; i <= 50; i++) {
//             if (i % 2 !== 1) {
//                 continue;
//             }
//             console.log("Here is an odd number: " + i);
//         }
//     }
// }

// 4th iteration of code to determine a solution:
// var userRandomOddNumber = Number(prompt("Please enter an odd number between 1 and 50:"));
//
// for (var i = 0; i < 50; i++) {
//     if (userRandomOddNumber < 1 || userRandomOddNumber > 50 || userRandomOddNumber % 2 === 0) {
//         Number(prompt("Invalid input, please enter an odd number between 1 and 50:"));
//     } else {
//         console.log(userRandomOddNumber);
//         break;
//     }
// }

/* 5th iteration of code to determine a solution. It works, but it doesn't follow the guidelines
* for the exercise because it doesn't actually run the loop code. The 'for loop' is unnecessary.
*/
// var userRandomOddNumber = Number(prompt("Please enter an odd number between 1 and 50:"));
//
// for (var i = 1; i > 1, i < 50; i++) {
//
//     if (userRandomOddNumber < 1 || userRandomOddNumber > 50 || userRandomOddNumber % 2 === 0) {
//        userRandomOddNumber = Number(prompt("Invalid input, please enter an odd number between 1 and 50:"));
//     } else if ((userRandomOddNumber > 1 || userRandomOddNumber < 50) && userRandomOddNumber % 2 === 1) {
//         console.log(userRandomOddNumber);
//         break;
//     }
// }

// Exercise #2 Solution:
var userRandomOddNumber = Number(prompt("Please enter an odd number between 1 and 50:"))

while (userRandomOddNumber < 1 || userRandomOddNumber >= 50 || userRandomOddNumber % 2 === 0) {
    userRandomOddNumber = Number(prompt("Invalid input entered. Please enter an odd number between 1 and 50:"));
    if (userRandomOddNumber >= 1 && userRandomOddNumber < 50 && userRandomOddNumber % 2 === 1) {
        break;
    }
}
console.log("The user's valid odd number between 1 and 50 is: " + userRandomOddNumber);


// Exercise #3:
// Beginning Code - 1st iteration of code to determine a solution:
// var userOddNumber = Number(prompt("Please enter an odd number between 1 and 50:"))
//
// console.log("Random odd number to skip is: " + userOddNumber);
//
// if (userOddNumber >= 1 && userOddNumber < 50 && userOddNumber % 2 === 1) {
//     for (var i = 1; i <= 50; i++) {
//         if (i % 2 !== 1) {
//             continue;
//         }
//         if (userOddNumber) {
//             console.log("Yikes! Skipping number: " + userOddNumber);
//         }
//         else {
//             console.log("Here is an odd number: " + i);
//         }
//         if (userOddNumber < 1 || userOddNumber >= 50 || userOddNumber % 2 === 0) {
//             userOddNumber = Number(prompt("Invalid input entered. Please enter an odd number between 1 and 50:"));
//         }
//     }
// }

// Exercise #3 Solution:
var userRandomNumber = Number(prompt("Please enter an odd number between 1 and 50:"));

console.log("The user entered number: " + userRandomNumber);

while (userRandomNumber < 1 || userRandomNumber >= 50 || userRandomNumber % 2 === 0) {
    console.log("The user entered number: " + (userRandomNumber = Number(prompt("Invalid input entered. Please enter an odd number between 1 and 50:"))));
}

if (userRandomNumber >= 1 && userRandomNumber < 50 && userRandomNumber % 2 === 1) {
    for (var i = 1; i < 50; i++) {
        if (i % 2 === 0) {
            continue;
        } if (userRandomNumber === i) {
            console.log("Yikes! Skipping number: " + i);
        } else {
            console.log("Here is an odd number: " + i);
        }
    }
}
