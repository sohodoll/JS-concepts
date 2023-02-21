// THIS IN ARROW AND REGULAR FUNCTIONS

// class obj {
//   name = '1';
//   nestedObj = {
//     name: '2',
//     sayName: () => {
//       console.log(this.name);
//     },
//   };
//   sayName = function () {
//     this.nestedObj.sayName();
//   };
// }

// const objectInstance = new obj();

// objectInstance.sayName();

const obj = {
  name: '1',
  nestedObj: {
    name: '2',
    sayName: () => {
      console.log(this.name);
    },
  },
  sayName: function () {
    this.nestedObj.sayName();
  },
};

obj.sayName();

//!!---!!

//!!logs undefined BECAUSE the execution context is the GLOBAL object. When we use Classes, we use new and (), so the arrow function captures that execution context!

//!!---!!

// call, apply, and bind don't work in arrow functions
