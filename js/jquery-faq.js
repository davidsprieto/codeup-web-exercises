"use strict";

$(document).ready(function() {
    $('#answers').click(function() {
        $('dd').toggleClass('invisible');
    });
});

$('dt').click(function() {
    $(this).css('background-color','yellow');
});