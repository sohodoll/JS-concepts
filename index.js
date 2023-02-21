// function Cat(name) {
//     this.name = name;
// }

// Cat.prototype.isAgile = true;

// // const kitty = new Cat(); //OR const kitty = Object.create(Cat.prototype);

// //OR

// const kitty = {};

// Object.setPrototypeOf(kitty, Cat.prototype);

// console.log(Object.getPrototypeOf(kitty)); //Cat.prototype

// console.log(kitty.constructor === Cat.prototype.constructor); // true

//THIS IN ARROW AND REGULAR FUNCTIONS

// const obj = {
//   name: '1',
//   getThisArrow: () => {
//     console.log(this);
//   },
//   getThisRegular: function () {
//     console.log(this);
//   },
//   nestedObj: {
//     name: '2',
//     sayName: () => {
//       console.log(this.name);
//     },
//   },
//   sayName: function () {
//     this.nestedObj.sayName();
//   },
// };

// obj.getThisArrow();
// obj.getThisRegular();

// obj.sayName();

// const inc = (function () {
//   let count = 0;
//   return function () {
//     return count++;
//   };
// })();

// console.log(inc()); //1
// console.log(inc()); //2

// class NewObject {
//   constructor(name) {
//     this.name = name;
//   }

//   getNameArrow = () => {
//     console.log(this.name);
//   };

//   getNameRegular = function () {
//     console.log(this.name);
//   };
// }

// const smallObj = new NewObject('bob');

// // console.log(smallObj);

// smallObj.getNameArrow();
// smallObj.getNameRegular();

// const NewObjectObject = {
//   name: 'bob1',

//   getNameArrow: () => {
//     console.log(this.name);
//   },

//   getNameRegular: function () {
//     console.log(this.name);
//   },
// };

// NewObjectObject.getNameArrow();
// NewObjectObject.getNameRegular();

// Array.prototype.myReduce = function (fn, initial) {
//   let values = this;

//   values.forEach((item) => {
//     initial = initial !== undefined ? fn(initial, item) : item;
//   });

//   return initial;
// };

// let values = [2, 4, 5];

// console.log(values.myReduce((a, b) => a * b));
