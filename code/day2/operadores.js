let x = 23;
x = 23 + 1;
x++;
x = x + 3;
x += 3;

// op aritméticos

let y = 2;
let z = 3;
let r = y + z;
r = y - z;
r = y * z;
r = y / z;
r = y % z;
r = 7 ** 2;

// op de comparación

y = 22;
z = '22';

r = y == z; // true
r = y === z; // false
r = Number(y) === Number(z); // true
r = NaN === NaN; // false
r = 2 === -2; // false
r = 0 === -0; // true
// r = [] === []; // false
// r = {} === {}; // false

// Op ternario

if (y === z) {
    r = 'Son iguales';
} else {
    r = 'No son iguales';
}

r = y === z ? 'Son iguales' : 'No son iguales';

// Operadores lógicos

// &&
// ||
// !
// ??

let a = 1;
let b = 2;
let c = 3;

// r = a && b && console.log(c); // 3
// console.log(r);
b = 0;
r = a && b && console.log(c); // 0
console.log({ r });

// && devuelve el primer operando falsy, o el último truthy
// || devuelve el primer operando truthy, o el último falsy
// ?? devuelve el primer operando NO nullish, o el último nullish

// falsy: false, 0, -0, 0n '', null, undefined, NaN
// nullish: null, undefined

b &&= 3;
b = b && 3;

b ||= 3;
b ??= 3;
