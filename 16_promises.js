// var promise = new Promise(function (res, rej) {
//   rej('promise rejected');
// });

// promise
//   .then(function (success) {
//     console.log(success);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// console.log(promise.state);

//PROMISE CHAINING

// new Promise(function (res, rej) {
//   setTimeout(() => {
//     res(1);
//   }, 1000);
// })
//   .then(function (result) {
//     console.log(result);
//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result);
//     return result * 2;
//   });

// new Promise(function (res, rej) {
//   setTimeout(() => {
//     res(1);
//   }, 1000);
// })
//   .then(function (result) {
//     console.log(result);
//     return new Promise(function (res, rej) {
//       setTimeout(() => {
//         res(result * 2);
//       }, 1000);
//     });
//   })
//   .then(function (result) {
//     console.log(result);
//     return new Promise(function (res, rej) {
//       setTimeout(() => {
//         res(result * 2);
//       }, 1000);
//     });
//   });
