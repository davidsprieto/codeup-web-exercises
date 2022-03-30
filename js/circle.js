(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        // TODO: complete this method
        // hint: area = pi * radius^2

        getArea: function (radius) {
            return Math.PI * (Math.pow(this.radius, 2)); // TODO: return the proper value
        },

        // TODO: complete this method.

        // If doRounding is true, round the result to the nearest integer.
        // Otherwise, output the complete value

        logInfo: function (doRounding) {
            if (doRounding === true) {
                console.log("Circle rounded to the nearest integer is: " + Math.round(this.getArea(this.radius)));
            } else {
                console.log("Area of a circle with radius: " + this.radius + " is: " + this.getArea(this.radius));
            }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();