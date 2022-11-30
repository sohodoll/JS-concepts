//------------------------------------------
//primitives are values
//objects and functions are 'links'

let a = 42;
let b = a;
b++;
console.log(a);
console.log(b);

let arr = [1, 2, 3];
let barr = arr;
barr.push(4);
console.log(arr, barr); //arr and barr link to the same object!

//how to avoid? concat();
let barr2 = arr.concat();
barr2.push(5);
console.log(barr2);
