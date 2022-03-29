(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "David",
        lastName: "Prieto"
    };
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function() {
        return "Hello from " + person.firstName + " " + person.lastName + "!"
    }
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180, discount: "Cameron didn't spend more than $200, she doesn't qualify for the 12% discount!"},
        {name: 'Ryan', amount: 250, discount: "Ryan spent more than $200, he qualifies for the 12% discount. His total is: $220!"},
        {name: 'George', amount: 320, discount: "George spent more than $200, he also qualifies for the 12% discount. His total is: $281.60!"}
    ];

    function shopperDiscount(input) {
        if (input === 'Cameron') {
            console.log("---- " + shoppers[0].name + " ----");
            console.log("Cameron's amount before the discount is: $" + shoppers[0].amount);
            console.log("Cameron didn't spend more than $200, she doesn't qualify for the discount. Her total amount is $" + shoppers[0].amount + ".");
        } else if (input === 'Ryan') {
            console.log("---- " + shoppers[1].name + " ----");
            console.log("Ryan's amount before the discount is: $" + shoppers[1].amount);
            console.log("Ryan spent more than $200, he does qualify for the 12% discount. His total amount after the discount is: $" + (shoppers[1].amount - (shoppers[1].amount * .12))  + "!");
        } else if (input === 'George') {
            console.log("---- " + shoppers[2].name + " ----");
            console.log("George's amount before the discount is: $" + shoppers[2].amount);
            console.log("George spent more than $200, he does qualify for the 12% discount. His total amount after the discount is: $" + (shoppers[2].amount - (shoppers[2].amount * .12)).toFixed(2)  + "!");
        }
    }
    shopperDiscount(shoppers[0].name);

    shoppers.forEach(function(shopper){
        console.log("Shopper: ---- " + shopper.name + " ----");
        console.log("Total before the discount: $" + shopper.amount);
        console.log(shopper.discount);
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();