//-------------let--------------
//let appeared in ES6
// let a = "var a";
// let b = "var b";

// {
//     a = "new var a";
//     let b = "local var b";
//     console.log("in scope:", a, b); //b is 'local var b' because let only works inside current scope
// }
// console.log(a, b);

//-------------const--------------
//const is still var
// const PORT = "8080";
// PORT = "123"; //error, but onl works for primitives

// const arr = ["a", "b", "c"];
// arr.push("!");
// arr[0] = "JS"; //works like let
// console.log(arr); //no error! it changes the array!

//same works for objects

console.log(Object.is(NaN, NaN));
