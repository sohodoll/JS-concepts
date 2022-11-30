// console.log(sum(1, 41));

// function sum(a, b) {
//     return a + b;
// }

//---------------
//JS interprets some functions and puts them above(hoists) so they ara available before declared

// console.log(i); // returns undefined, no error (only with var?)
// var i = 42;
// console.log(i);

//const and let are not hoisting

// console.log(num); //returns error!
// const num = 42;
// console.log(num);

//---------------
//function expression and function declaration
console.log(square()); //returns error

var square = function (num) {
    return num ** 2;
}; //function expression is not hoisting
