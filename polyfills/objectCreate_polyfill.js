const Cat = {
  animal: true,
};

Object.create = null;

// Object.create = function (prototype) {
//   const obj = {};
//   obj.__proto__ = prototype;

//   return obj;
// };

Object.create = function (prototype) {
  function Constructor() {}
  Constructor.prototype = prototype;

  return new Constructor();
};

const kitty = Object.create(Cat);

console.log(kitty.animal);
