function Cat(name) {
    this.name = name;
}

Cat.prototype.isAgile = true;

// const kitty = new Cat(); //OR const kitty = Object.create(Cat.prototype);

//OR

const kitty = {};

Object.setPrototypeOf(kitty, Cat.prototype);

console.log(Object.getPrototypeOf(kitty)); //Cat.prototype

console.log(kitty.constructor === Cat.prototype.constructor); // true
