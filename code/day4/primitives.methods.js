let str = 'Hola mundo';
str.length; // 10

const data = [10, 34, 56];
data.length; // 3

// Iterables
console.log(data[1]); // 34
console.log(str[1]); // o

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

for (const item of str) {
    console.log(item);
}

data[1] = 100;
console.log(data); // [10, 100, 56]

//str[0] = 'h'; // Cannot assign to read only property '0' of string 'Hola mundo'

// Stings iteración solo de lectura -> son immutables -> valores primitives
str = 'hola mundo';

// str.length = 4; Error
data.length = 1;
console.log(data); // [10]

// Métodos de String

// Estáticos

String.fromCharCode(65); // A

// Instancia

str = 'Hola mundo';
str.split(' '); // ['Hola', 'mundo']
str.split(''); // ['H', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']
str.split('').reverse().join(''); // 'odnum aloH'

str.slice(1, 3); // 'ol'
str.substring(1, 3); // 'ol'

str.replace('mundo', 'Pepe'); // 'Hola Pepe'

str[3]; // 'a'
str.charAt(3); // 'a'
str.at(3); // 'a'
str.at(-1); // 'o'

str.charCodeAt(3); // 97
str.codePointAt(3); // 97

str.includes('w'); // false
str.startsWith('H'); // true
str.endsWith('o'); // true

str = 'Hola niño';
str.normalize(); // 'Hola mundo'
str.localeCompare('Hola mundo'); // 0

// Numbers

let num = 42.949494;
num.toFixed(2); // '42.95'
num.toPrecision(2); // '43'
num.toExponential(2); // '4.29e+1'
num.toString(); // '42.949494'

Number.isInteger(num); // false
Number.isNaN(num); // false
Number.isFinite(num); // true
Number.isSafeInteger(num); // false

// Booleans

let bool = true;
bool.valueOf(); // true
