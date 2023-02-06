function Cat(name) {
    this.name = name;
}

Cat.prototype.isAgile = true;

const kitty = new Cat(); //OR const kitty = Object.create(Cat.prototype);

console.log(kitty.__proto__);
