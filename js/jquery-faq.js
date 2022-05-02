"use strict";

// JQuery Attributes and CSS Exercises:
$(document).ready(function() {
    $('#answers').click(function() {
        $('dd').toggleClass('invisible');
    });
});

$('dt').click(function() {
    $(this).css('background-color','yellow');
});


// JQuery Traversing Exercises:
$('#highlight-last-lis').click(function() {
    $('ul').each(function (index, value) {
        return $(this).children().last().css('background-color', 'yellow');
    })
});

// Solution above can also be written using the specific index when accessing every 'li' element as seen below:
// $('#highlight-last-lis').click(function() {
//     $('li').each(function (index) {
//         if (index === 3 || index === 7 || index === 11) {
//             $(this).css('background-color', 'yellow');
//         }
//     })
// });

$('h3').click(function() {
    return $(this).next().css('font-weight', 'bold');
});

$('li').click(function() {
    return $(this).parent().children().first().css('color', 'blue');
});

// Solution above can also be written traversing the 'ul' element's first 'li' child element as seen below:
// $('ul').click(function() {
//     return $(this).children().first().css('color', 'blue');
// });