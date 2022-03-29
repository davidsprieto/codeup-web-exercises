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
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // // Function:
    // function shopperDiscount(shopper) {
    //     if (shopper === 'Cameron') {
    //         console.log("---- " + shoppers[0].name + " ----");
    //         console.log("Cameron's amount before the discount is: $" + shoppers[0].amount);
    //         console.log("Cameron didn't spend more than $200, she doesn't qualify for the discount. Her total amount is $" + shoppers[0].amount + ".");
    //     } else if (shopper === 'Ryan') {
    //         console.log("---- " + shoppers[1].name + " ----");
    //         console.log("Ryan's amount before the discount is: $" + shoppers[1].amount);
    //         console.log("Ryan spent more than $200, he does qualify for the 12% discount. His total amount after the discount is: $" + (shoppers[1].amount - (shoppers[1].amount * .12))  + "!");
    //     } else if (shopper === 'George') {
    //         console.log("---- " + shoppers[2].name + " ----");
    //         console.log("George's amount before the discount is: $" + shoppers[2].amount);
    //         console.log("George spent more than $200, he does qualify for the 12% discount. His total amount after the discount is: $" + (shoppers[2].amount - (shoppers[2].amount * .12)).toFixed(2)  + "!");
    //     }
    // }
    // shopperDiscount(shoppers[0].name);
    //
    // // For Each Loop:
    // shoppers.forEach(function(shopper){
    //     console.log("Shopper: ---- " + shopper.name + " ----");
    //     console.log("Total before the discount: $" + shopper.amount);
    //     console.log(shopper.discount);
    // });

    // Function refactored to pass in the entire object from the shoppers array and still have the expected results:
    function shopperDiscount(shopper) {
        if (shopper.amount < 200) {
            console.log(shopper.name + " didn't spend more than $200. Therefore, " + shopper.name + " doesn't qualify for a discount.");
            console.log(shopper.name + "'s" + " total amount remains the same of: $" + shopper.amount);
        } else if (shopper.amount > 200) {
            console.log(shopper.name + " spent more than $200. Therefore, " + shopper.name + " qualifies for a 12% discount!");
            console.log(shopper.name + "'s" + " total before the discount is: $" + shopper.amount);
            console.log(shopper.name + "'s" + " total after the discount is: $" + (shopper.amount - (shopper.amount * .12)).toFixed(2));
        }
    }
    shopperDiscount(shoppers[0]);


    // For Each Loop:
    shoppers.forEach(function(shopper){
        console.log("Shopper: " + shopper.name);
        if (shopper.amount < 200) {
            console.log(shopper.name + " didn't spend enough money to qualify for the 12% discount. Therefore, total amount remains the same of: $" + shopper.amount);
        } else if (shopper.amount > 200) {
            console.log(shopper.name + " did spend enough money to qualify for the 12% discount. Their total before the discount is: $" + shopper.amount);
            console.log("Their total after the discount is: $" + (shopper.amount - (shopper.amount * .12)).toFixed(2));
        }
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

    // Array of objects containing book information stored in 'books' variable:
    var books = [
        {
            title: "Can't Hurt Me",
            author: {
                firstName: "David",
                lastName: "Goggins"
            }
        },
        {
            title: "Mindset",
            author: {
                firstName: "Carol",
                lastName: "Dweck"
            }
        },
        {
            title: "Meditations",
            author: {
                firstName: "Marcus",
                lastName: "Aurelius"
            }
        },
        {
            title: "Extreme Ownership",
            author: {
                firstName: "Jocko",
                lastName: "Willink"
            }
        },
        {
            title: "Fearless",
            author: {
                firstName: "Eric",
                lastName: "Blehm"
            }
        }
    ];
    console.log(books.length);
    console.log(books[0].author.firstName);



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

    // For Loop to loop through book information:
    for (var i = 0; i < books.length; i++) {
        console.log("Book #" + [i + 1] + ":");
        console.log("Title: " + books[i].title);
        console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
    }

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

    // createBook Function:
    function createBook(title, authorFirst, authorLast) {
        var bookCreation = {};
        bookCreation.title = title;
        bookCreation.author = {};
        bookCreation.author.firstName = authorFirst;
        bookCreation.author.lastName = authorLast;
        return bookCreation;
    }
    console.log(createBook("Can't Hurt Me", "David", "Goggins"));


    // showBookInfo Function:
    function showBookInfo(object) {
        console.log("Title: " + object.title);
        console.log("Author: " + object.author.firstName + " " + object.author.lastName);
    }
    showBookInfo(books[0]);

})();