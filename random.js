// const log = () => {
//   console.log(message);
// };

// const message = 'hey';

// log();

//

// const obj = {
//   name: '1',
//   nestedObj: {
//     name: '2',
//     sayName: function () {
//       setTimeout(
//         function () {
//           console.log(this.name);
//         }.bind(this),
//         1000
//       );
//     },
//   },
//   sayName: function () {
//     this.nestedObj.sayName();
//   },
// };

// obj.sayName();

//

// function Animal() {
//   isAnimal = true;
// }

// Animal.prototype.isAnimal = true;

// // class Cat extends Animal {
// //   isCat = true;
// // }

// console.log(Animal.prototype);

// const Cat = function () {};
// Cat.prototype = Animal.prototype;

// const kitty = new Cat();

// console.log(kitty.isAnimal);

const limitlessCurrying = (a) => {
  let currentResult = a;

  let calculate = (b) => {
    currentResult += b;
    return calculate;
  };

  calculate.showResult = () => {
    console.log(currentResult);
  };

  return calculate;
};

limitlessCurrying(10)(1)(1)(1)(1).showResult();
