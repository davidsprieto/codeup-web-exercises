// Working with Data Types, Operators, and Variables Exercises.

var a = 1;
var b = a++;
var c = ++a;
// a returns '3'
// b returns '1'
// c returns '3'

var d = "hello";
var e = false;
d++;
e++;
// d returns 'NaN'
// e returns '1' (JavaScript reads false as a 0, so after incrementing it returns 1)

var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
// perplexed returns 'undefined'

var price = 2.7;
price.toFixed(2);
// price returns '2.70'

var price = "2.7";
price.toFixed(2);
// Returns 'Error' as price is assigned a string value.

isNaN(0)
// false
isNaN(1)
// false
isNaN("")
// false
isNaN("string")
// true
isNaN("0")
// false
isNaN("1")
// false
isNaN("3.145")
// false
isNaN(Number.MAX_VALUE)
// false
isNaN(Infinity)
// false
isNaN("true")
// true
isNaN(true)
// false
isNaN("false")
// true
isNaN(false)
// false

// to illustrate why the isNaN() function is needed:
NaN == NaN


!true
// false
!false
// true
!!true
// true
!!false
// false
!!0
// false
!!-0
// false
!!1
// true
!!-1
// true
!!0.1
// true
!!"hello"
// true
!!""
// false
!!''
// false
!!"false"
// true
!!"0"
// true

// Notes: Exercises 2 - Working with Data Types, Operators, and Variables.
var sample = "Hello Codeup";
sample.length
// 12
sample.toUpperCase();
// 'HELLO CODEUP'
sample.toLowerCase();
// 'hello codeup'
sample = sample + " Students";
// 'Hello Codeup Students'
sample = sample.replace("Students", "Class");
// 'Hello Codeup Class"
sample.indexOf("c");
// -1
sample.indexOf("C");
// 6
sample.substring(sample.indexOf("C"), 12);
// 'Codeup'

// Exercises 3 were completed as the first graded exercise for JavaScript with HTML.

// Notes: Exercises 4 - Working with Data Types, Operators, and Variables.

var username = 'codeup';
var password = 'notastrongpassword';

// Create a variable that holds a boolean value for each of the following conditions:
// The password must be at least 5 characters.
var passwordAtLeastFive = password.length >= 5;
// The password must not include the username.
var usernameNotInPassword = !password.includes(username);
// The username must be no more than 20 characters.
var passwordNoMoreThanTwenty = password.length <= 20;
// Neither the username nor password can start or end with whitespace.
var noWhitespaceUsernameAndPassword = username.trim() && password.trim();
