function Cat(color, name) {
    this.color = color;
    this.name = name;
    this.logThis = function () {
        console.log(this);
    };
}

// const kitty = new Cat("purple", "sabina");
// console.log(kitty);

function myNew(constructor, ...args) {
    const object = {};
    Object.setPrototypeOf(object, constructor.prototype);
    return constructor.apply(object, args) || object;
}

// function myNew(constructor, ...args) {
//     const object = Object.create(constructor.prototype);
//     return constructor.apply(object, args);
// }

const kitty = myNew(Cat, "black", "sambo");
console.log(kitty);

//------instances of classes----------
