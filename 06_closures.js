//closures is the moment when a function saves(closes) access to variables above its scope
//----------------closures-basic--------------------
// function sayHelloTo(name) {
//     const message = "Hello " + name;
//     return function () {
//         console.log(message);
//     };
// }

// const helloToElena = sayHelloTo("ELena");
// helloToElena();

//---------------practice--------------------

function createFrameworkManager() {
    const fw = ["Angular", "React"];
    return {
        print: function () {
            console.log(fw.join(" "));
        },
        add: function (framework) {
            fw.push(framework);
        },
    };
}

const manager = createFrameworkManager();

// console.log(fw); //error! fw is not defined
// manager.print();
// manager.add("Vue");
// manager.print();

//we work with the fw, which became private variable for manager (it closed this variable inside manager)

//-----------setTimeoutExample----------------

const fib = [1, 2, 3, 4, 8, 13];

// for (var i = 0; i < fib.length; i++) {
//     (function (j) {
//         setTimeout(() => {
//             console.log(`fibonacci with index ${i} = ${fib[j]}`);
//         }, 1500);
//     })(i);
// }

// for (var i = 0; i < fib.length; i++) {
//     console.log(i);
// }

//because let only exists inside one {} abd just stays there
//when we use var, var exists outside, and setTimeout pushes the console.log into the task queue. then, when the stack is clear, we get console.log with changed i.
//EVENT LOOP

//-----------closures-practice----------------

function createIncrementor(a) {
    return function (b) {
        return a + b;
    };
}

// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);

// console.log(addTen(112));

function urlGenerator(domain) {
    return function (url) {
        return `https://${url}.${domain}`;
    };
}

const comUrl = urlGenerator("com");

// console.log(comUrl("google"));

function sayMessageToAnyone(message) {
    return function (name) {
        return `${message}${name}`;
    };
}

const sayGreeting = sayMessageToAnyone("Hello, ");
const sayName = sayMessageToAnyone("My name is ");
// console.log(sayGreeting("Alexa"));
// console.log(sayGreeting("Serg"));
// console.log(sayName("Alexa"));
// console.log(sayName("Serg"));

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}`);
}

// function bind(obj, func) {
//     return func(obj);
// }

const person1 = { name: "Alexa", age: 26 };
const person2 = { name: "Steve", age: 34 };

// console.log(bind(person1, logPerson));
// console.log(bind(person2, logPerson));

function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args);
    };
}

// bind(person2, logPerson)();

//! A closure is a combination of a function and its lexical environment

function createCounter() {
    var n = 0;
    return function () {
        return `current count here is ${++n}`;
    };
}

const firstCounter = createCounter();
const secondCounter = createCounter();

// console.log(firstCounter());
// console.log(firstCounter());
// console.log(firstCounter());
// console.log(firstCounter());
// console.log(secondCounter());

for (var i = 0; i < 10; i++) {
    // var closuredFunc = (function (counter) {
    //     return function () {
    //         console.log(counter);
    //     };
    // })(i);
    setTimeout(
        (function (counter) {
            return function () {
                console.log(counter);
            };
        })(i),
        1000
    );
}

for (var i = 0; i < 10; i++) {
    // var closuredFunc = (function (counter) {
    //     return function () {
    //         console.log(counter);
    //     };
    // })(i);
    (function () {
        var j = i;
        setTimeout(() => {
            console.log(j);
        }, 1000);
    })();
}
