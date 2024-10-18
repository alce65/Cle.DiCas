// declaracion de funciones

function add(a, b) {
    let result = a + b;
    return result;
}

// asignación de funciones a variables
// asignamos function expression o función anónima

const subtract = function (a = 0, b = 0) {
    return a - b;
};

// ES2015 arrow function

const addArrow = (a, b) => {
    return a + b;
};

// si la función solo tiene una línea de código, se puede omitir el return y las llaves

const prod = (a, b) => a * b;

const square = (n) => n * n;

const prodSquares = (a, b) => {
    a = square(a);
    console.log({ a });
    b = square(b);
    return a * b;
};

const squareProds = prodSquares;

// Invocación de funciones

// Incluimos los argumentos que la función espera
console.log(add()); // NaN
console.log(add(1)); // NaN
console.log(add(1, 2)); // 3
console.log(add(1, 2, 6, 8, 3, 9)); // 3

// Acceso a una variable fuera de su ámbito (scope)
// console.log(result); // ReferenceError: result is not defined

console.log(subtract()); // 0
console.log(subtract(1)); // 1
console.log(subtract(1, 2)); // -1
console.log(subtract(1, 2, 6, 8, 3, 9)); // -1

let x = 2;
console.log(prodSquares(x, 2)); // 24
console.log({ x });

const returnChangeName = (object, name) => {
    const result = { ...object, name }; // copia del objeto
    return result;
};

const user = { name: 'Juan' };
const user2 = returnChangeName(user, 'Pepe');
console.log(user); // { name: 'Pepe' }
console.log(user2); // { name: 'Pepe' }
