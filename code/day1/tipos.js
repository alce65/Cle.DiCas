// String
let nombre = 'Juan';
let apellido = 'Perez';

// template strings (ES6)
let fullName = `${nombre} ${apellido}`;
console.log(fullName);

// Sin template string -> concatenación
fullName = nombre + ' ' + apellido;

// Number
let edad = 22;
let precio = 12.34;
let deuda = -10_000_000_000;
console.log(deuda);

console.log(Number.MAX_VALUE); // 1.7976931348623157e308;
console.log(Number.MIN_VALUE); // 5e-324

console.log(Number.MAX_VALUE * 2);
console.log(-Number.MAX_VALUE * 2);

console.log(3 / 0);
console.log(0 / 5);

console.log(0 / 0);
console.log('Pepe' * 2);

isNaN('Pepe'); // true
Number.isNaN('Pepe'); // false
Number.isNaN(0 / 0); // true

console.log(Number.MAX_SAFE_INTEGER); // 9_007_199_254_740_991
console.log(Number.MIN_SAFE_INTEGER); // -9_007_199_254_740_991

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);

// BigInt
let bigInt = 9_007_199_254_740_991n;
console.log(bigInt);
console.log(bigInt + 1n);
console.log(bigInt + 2n);

// Booleans

let isGreater = 4 > 1; // true
let isLess = 4 < 1; // false

// Casting de tipos
let num = '12';
let num2 = '3';
console.log(typeof num, typeof num2);
console.log(num * num2);
console.log(typeof num, typeof num2);
console.log([] * []);
console.log([12] * [12]);
console.log([12, 4] * [12, 7]);
console.log({} * {});

// Casting en la suma
let n1 = '12';
let n2 = 3;
console.log(typeof n1, typeof n2);
console.log(n1 + n2);

console.log(Number(n1) + Number(n2));
console.log(+n1 + +n2);

// Casting en los booleanos

// Falsy

// false 0 -0 0n '' null undefined NaN

console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// Truthy

// Todo lo demás

let x = 0;
if (x) {
    console.log('Truthy');
}
x = 1;
if (x) {
    console.log('Truthy', x);
}

// undefined - null

let z; // undefined es generado por el sistema
let y = null; // null es asignado por el programador
z = undefined; // no es habitual asignar undefined
