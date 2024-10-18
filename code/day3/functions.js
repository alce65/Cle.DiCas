// function bar() {
//     console.log('bar');
// }

const foo = function () {
    console.log('Soy foo');
};

foo.uses = 'console.log';
foo.shoUses = function () {
    console.log(`Hago uso de ${this.uses}`);
};

console.log(foo);
foo();
foo.shoUses();

// Funciones anidadas

function addSquares(...args) {
    let result = 0;

    // const square = function (x) {
    //     return x * x;
    // };

    const square = (x) => x * x;

    for (const item of args) {
        result += square(item);
    }

    return result;
}

console.log(addSquares(2, 3, 4, 5));
// console.log(square(2)); // ReferenceError: square is not defined

// Funciones de Orden Superior y callbacks
// recibe una función como parámetro (-> callback)
// devuelve una función

const hof = (callback, [a = 0, b = 0]) => {
    const result = callback(a, b);
    console.log('Ejecutando hof', result);
};

// hof((a, b) => a + b, [2, 3]);
// hof((a, b) => a * b, [2, 3]);
// hof((a, b) => a / b, [2, 3]);

const add = (a, b) => a + b;
const prod = (a, b) => a * b;
const div = (a, b) => a / b;

hof(add, [2, 3]);
hof(prod, [2, 3]);
hof(div, [2, 3]);
hof(add, []);

const operations = {
    add: (a, b) => a + b,
    prod: (a, b) => a * b,
    div: (a, b) => a / b,
};

hof(operations.add, [2, 3]);
hof(operations.prod, [2, 3]);
hof(operations.div, [2, 3]);

// IIFE (Immediately Invoked Function Expression)

(() => console.log('Soy una IIFE'))();

// Closure

// una función incluye una función interna y la devuelve

const counter = () => {
    let count = 0;

    return () => {
        count++;
        console.log(count);
    };
};

const counter1 = counter();
const counter2 = counter();

// OOP usando el patron constructor
// const counter1 = new Counter();

counter1();
counter1();
counter1();
counter1();
counter2();
