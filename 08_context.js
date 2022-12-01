//scope indicates the visibility of variables
//context defines how the function was always links to this

//------------context--------
const person = {
    surname: "Stark",
    knows: function (what, name) {
        console.log(`You know ${what}, ${name} ${this.surname}`);
    },
};

const john = {
    surname: "Snow",
    knows: function (what, name) {
        console.log(`You know ${what}, ${name} ${this.surname}`);
    },
};

//context in JS is an object

// person.knows("everything", "bran");
// person.knows.call(john, "nothing", "John");
// person.knows.apply(john, ["nothing", "John"]); //the only difference is that apply has only two parameters, the second one is always an array
// person.knows.call(john, ...["nothing", "John"]);
// console.log(...["nothing", "John"]); //returns just 'nothing john' as two strings(?)
// person.knows.bind(john, "nothing", "John")(); //the only difference is that bind doesn't call but returns a new function

//-----------examples--------------
// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     console.log(this);
// }

// const elena = new Person("elena", 20);

//explicit binding

// function logThis() {
//     console.log(this);
// }

// const obj = {
//     num: 42,
// };
// logThis.call(obj);

//implicit binding

// const animal = {
//     legs: 4,
//     logThis: function () {
//         console.log(this);
//     },
// };

// animal.logThis();

//---------arrow functions and context----------

//keyword function creates context for itself

function Cat(color) {
    this.color = color;
    console.log("This", this);
    (() => {
        console.log("Arrow", this);
    })(); // arrow function does not create its own context. this is the same
    (function () {
        console.log("Final!!", this); //this returns function object
    })();
}

new Cat("red");
