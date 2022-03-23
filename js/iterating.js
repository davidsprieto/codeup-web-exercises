(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var superHeroes = ["Captain America", "Thor", "Iron Man", "Ant-Man"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log("There are " + superHeroes.length + " elements in the Super Heroes array.");

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(superHeroes[0]);
    console.log(superHeroes[1]);
    console.log(superHeroes[2]);
    console.log(superHeroes[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var i = 0; i < superHeroes.length; i++) {
        console.log("The name of a Marvel Super Hero at index " + i + " is: " + superHeroes[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    superHeroes.forEach(function(heroName){
        console.log("Here is a name of a Marvel Super Hero: " + heroName);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function arrayIndexOne(name) {
        return ("The name in index 0 is: " + name[0]);
    }
    console.log(arrayIndexOne(superHeroes));


    function arrayIndexTwo(heroName) {
        return ("The name in index 1 is: " + heroName[1]);
    }
    console.log(arrayIndexTwo(superHeroes));


    function arrayIndexLast(superHeroName) {
        return ("The name in the last index is: " + superHeroName[3]);
    }
    console.log(arrayIndexLast(superHeroes));

})();