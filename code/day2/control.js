// Condicionales
//  - If
//  - Switch - Case
//  - Operador ternario
// Iteraciones Incondicionales
//  - for
//  - for in
//  - for of
//  - sentencias break y continue
// Iteraciones condicionales
//  - do y while
// Control de excepciones (errores)

let y = 0;

if (y === 0) {
    r = 'Inválido';
} else {
    r = 'Válido';
}

if (!y) {
    r = 'Inválido';
} else {
    r = 'Válido';
}

let month;
let season;

switch (month) {
    case 'Octubre':
    case 'Noviembre':
    case 'Diciembre':
        season = 'Otoño';
        break;
    case 'Enero':
    case 'Febrero':
    case 'Marzo':
        season = 'Invierno';
        break;
    default:
        season = 'Primavera o Verano';
        break;
}

const mensaje = 'Hola, estoy dentro de un bucle';

for (let i = 0; i < 5; i++) {
    console.log(mensaje, `en la vuelta ${i + 1}`);
}

for (let i = 0; i < mensaje.length; i++) {
    console.log(mensaje[i]);
}

const data = [1, 5, 2, 8, 4, 3, 7, 6];
const results = [];
for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    results.push(data[i] * 24);
}
console.log(results);

const results2 = [];
for (const item of data) {
    console.log(item);
    results2.push(item * 24);
}

console.log(results2);

const user = {
    name: 'Pepe',
    age: 22,
    course: 'Angular',
};

for (const key in user) {
    console.log(key.toUpperCase(), user[key]);
}

let resultado = 1;
let numero = 5;
do {
    resultado *= numero;
    numero--;
} while (numero > 0);

while (numero > 0) {
    resultado *= numero;
    numero--;
}

console.log(resultado); // 120
