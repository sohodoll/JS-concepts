// for (var i = 0; i < 10; i++) {
//     // var closuredFunc = (function (counter) {
//     //     return function () {
//     //         console.log(counter);
//     //     };
//     // })(i);
//     (function () {
//         var j = i;
//         setTimeout(() => {
//             console.log(j);
//         }, 1000);
//     })();
// }

// for (var i = 0; i < 10; i++) {
//     var closuredFunc = function (counter) {
//         return function () {
//             console.log(counter);
//         };
//     };
//     setTimeout(closuredFunc(i), 1000);
// }

// setTimeout(function () {
//     return function () {
//         console.log('hey!');
//     };
// }, 1500);

// console.log(
//     (function sum() {
//         return 'sum!';
//     })()
// );

// const dum = function () {
//     console.log('dum');
// };

// const functionArray = [];
// functionArray.push(dum);

// console.log(functionArray);

// setTimeout(function () {
//     return function () {
//         console.log(this);
//     };
// }, 1500);

//PRIVATE MEMBERS

// function ConstructorCar(initValue) {
//     this.publicMember = initValue;
//     let _privateMember = initValue; //private member
//     this.getPrivateMember = function () {
//         return _privateMember;
//     };
//     this.setPrivateMember = function (v) {
//         _privateMember = v;
//     };
// }

// const car = new ConstructorCar(100);
// console.log(car.getPrivateMember());
// car.setPrivateMember(300);
// console.log(car.getPrivateMember());
