//---------------------------------------
//7 types of data
//null, undefined, boolean, number, string, object, symbol (ES6)
//object is the only not primitive type

//typeof - is a special operator

// console.log(typeof null); //returns object! but the actual type is null
// console.log(typeof undefined);
// console.log(typeof true);
// console.log(typeof 0);
// console.log(typeof "string");
// console.log(typeof {});
// console.log(typeof Symbol("js"));
// console.log(typeof function () {}); //return function! but there is no function data type. returns function for convenience
// console.log(typeof NaN); //returns number

//what is the difference between null and undefined? undefined is for undeclared variables or when it is declared but has no value. also, a function without a specified return returns undefined.
//null says that the value of a variable became null, but this variable was previously declared.
//undefined = unexpected absence of a value.
//null = absence of a value on purpose.

//---------------------------------------
//typecasting / type conversion

let language = "JavaScript";
if (language) {
    //converts string to boolean because if works with booleans
    console.log("the best language is", language);
}

//---------------------------------------
//falsy values and truthy values
//'', 0, null, undefined, null, false
console.log(Boolean("hello"));
console.log(Boolean("0")); //returns true!
console.log(Boolean([])); //returns true!
console.log(Boolean({})); //returns true!

//---------------------------------------
//strings and numbers
console.log(1 + "2"); //returns 12 (string)!
console.log("" + 1 + 0); //returns 10 (string)!
console.log("" - 1 + 0); //returns -1 because strings don't have operator '-'
console.log("3" * "8"); // returns 24 (number)
console.log(4 + 10 + "px"); // returns 14px (string)!
console.log("42px" - 2); // returns NaN because '42px' is NaN!
console.log(null + 2); //returns 2
console.log(undefined + 42); //returns NaN!

//---------------------------------------
//== vs ===
//== evaluates values with typecasting
//=== evaluates without typecasting
console.log("0" == false); //true!
console.log("0" == 0); //true!
console.log("0" === 0);

//special cases
console.log(false == ""); //true
console.log(false == []); //true(??)
console.log(false == {}); //false(??)
console.log("" == 0); //true
console.log("" == []); //true
console.log("" == {}); //false!

console.log(0 == []); //true!
console.log(0 == {}); //false!
console.log(0 == null); //false!
