"use strict";

// $(document).keyup(function(event){
//     console.log(event.keyCode);
// });


function konamiCheatCode() {
    var konamiKeys = '3838404037393739666513';
    var userTyping = '';
    userTyping = userTyping + $(document).keyup(function(event){
        console.log(event.keyCode);
    });
    if (konamiKeys === userTyping) {
        alert('You have unlocked 30 lives!');
    }
}
konamiCheatCode();

// function konamiCheatCode() {
//     var konamiKeys = '3838404037393739666513';
//     var userTyping = '';
//     $(document).keyup(function (event) {
//         console.log(event.keyCode);
//         userTyping = userTyping + ("" + event.keyCode);
//         if (userTyping === konamiKeys) {
//            return alert('You have unlocked 30 lives!');
//         }
//     })
// }
// konamiCheatCode();