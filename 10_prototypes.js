//__proto__ - links to the parent prototype
// proto = Object.getPrototypeOf()

//prototype is another property that has methods to pass to the instances

function Cat(name, color) {
    this.color = color;
    this.name = name;
}
Cat.prototype.voice = function () {
    console.log(this.name + " says mau");
};

// console.log(Cat.prototype);

// const kitty = new Cat("luna", "black");

// kitty.voice();

// console.log(kitty.__proto__); //kitty__proto__ === Cat.prototype;
// console.log(kitty.constructor); // returns Function: Cat;
// console.log(Cat.constructor); //returns Function: Function

//-----------properties of objects-------------

// function Person(name, age) {

// }

function Person() {}
Person.prototype.legs = 2;
Person.prototype.skin = "white";

const person = new Person();
person.name = "Peter";

// console.log("skin" in person); //returns true
// console.log(person.legs);
// console.log(person.name);

//how to know which properties belong to prototype?

// console.log(person.hasOwnProperty("name")); //true
// console.log(person.hasOwnProperty("skin")); //false!

//-----------Object.create()------------
//allows to create object with an existing prototype

let proto = { year: 2022 };
const myYear = Object.create(proto);
console.log(myYear.year); //returns 2022

// console.log(myYear.__proto__); //returns proto (.prototype returned undefined)
// console.log(myYear.__proto__ == proto); //true

proto.year = 2200;
console.log(myYear.year); //returns 2200

proto = { year: 0001 };
console.log(myYear.year); //still returns 2200!
