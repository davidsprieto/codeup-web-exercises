"use strict"

// JQuery Introduction Exercise:
//
// $(document).ready(function() {
//     alert('The DOM has finished loading!');
// });


// JQuery Selectors Exercise:
//
// Id Selectors Exercises:
// var lackland = $('#lackland').html();
// alert(lackland);

// Class Selectors Exercises:
// $('.codeup').css('border', '1px solid red');

// Element Selectors Exercises:
// $('li').css('font-size', '20px');

// $('h1').css('background-color', 'yellow');
// $('p').css('background-color', 'yellow');
// $('li').css('background-color','yellow');

// var heading = $('h1').html();
// alert(heading);

// Multiple Selectors Exercise:
// $('h1, p, li').css('background-color', 'yellow');


// Mouse Events Exercises:
function changeHeadingColor() {
    $(this).css('background-color', 'blue').css('color', 'white');
}
$('#heading').click(changeHeadingColor);

function changePFontSize() {
    $(this).css('font-size', '18px');
}
$('p').dblclick(changePFontSize);

function changeLiTextColor() {
    $(this).css('color','red');
}

function changeLiToDefaultColor() {
    $(this).css('color','black');
}
$('li').hover(changeLiTextColor, changeLiToDefaultColor);