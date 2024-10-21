const data = [10, 34, 56];
const data2 = new Array(5);
console.log(data2.length); // 5

for (let i = 0; i < data2.length; i++) {
    console.log(i, data2[i]);
}

const data3 = new Array(5, 6, 8);
console.log(data3); // [5, 6, 8]

const data4 = new Array(100).fill(0);

data3[20] = 5;
console.log(data3); // [5, 6, 8, <17 empty items>, 5]

for (let i = 0; i < data3.length; i++) {
    const element = data3[i];
    console.log(element, i + 1);
}

for (const element of data3) {
    console.log(element);
}

console.log(data3); // [5, 6, 8, <17 empty items>, 5]
data3.length = 2;
console.log(data3); // [5, 6]

// Métodos estáticos

console.log(typeof data3); // object
Array.isArray(data3); // true

Array.from('Hola mundo'); // ['H', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']
Array.of(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

// Métodos de instancia (del Array.prototype)

const numbers = [1, 2, 3, 4, 5];

// Mutables

numbers[numbers.length] = 6;
console.log(numbers); // [1, 2, 3, 4, 5, 6]

const size = numbers.push(7); // [1, 2, 3, 4, 5, 6, 7]
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7]
console.log(size); // 7
const fragment = numbers.pop(); // [1, 2, 3, 4, 5, 6]
console.log(fragment); // 7

const fragment2 = numbers.shift(); // [2, 3, 4, 5, 6]
console.log(fragment2); // 1
const size2 = numbers.unshift(1); // [1, 2, 3, 4, 5, 6]
size2; // 6

// sort()
// reverse()
// splice()

// versione INMUTABLES toReversed()`, toSorted()`, toSpliced()`

const numbers2 = [23, 43, 11, 34, 19, 3];
const newNumbers = numbers2.sort((a, b) => b - a);
console.log(numbers2, newNumbers);

const users = [
    { name: 'Pepe', age: 23 },
    { name: 'Elena', age: 34 },
    { name: 'Juan', age: 19 },
    { name: 'Ana', age: 43 },
    { name: 'Ángel', age: 33 },
];

// Copias (clonado) del Array

const previousUsers = [...users];
// const previousUsers = users.slice();
// const previousUsers = structuredClone(users);
// const previousUsers = JSON.parse(JSON.stringify(users));
// const previousUsers = Array.from(users);

users.sort((a, b) => a.age - b.age);
console.log(users);
users.sort((a, b) => a.name.localeCompare(b.name));
console.log(users);
console.log(previousUsers);

console.log(numbers2);

const fragmentSpliced = numbers2.splice(2, 2, 100, 200);
console.log(numbers2);
console.log(fragmentSpliced);

// Inmutables

// concat()
// join()
// slice()

// indexOf(value)
// lastIndexOf(value)

// includes(value)
// fill()
// flat()

// toReversed()
// toSorted()
// toSpliced()

// Inmutables. HOPF - Métodos funcionales

const numbers3 = [10, 21, 33, 46, 58];

numbers3.forEach((item, i) => {
    console.log('Posición', i + 1, item);
});

const doubleNumbers = numbers3.map((item) => item * 2);
console.log(doubleNumbers);

const evenNumbers = numbers3.filter((item) => !(item % 2));
console.log(evenNumbers);
const oddNumbers = numbers3.filter((item) => item % 2);
console.log(oddNumbers);

const bigNumbers = numbers3.filter((item) => item > 100);
console.log(bigNumbers);

const findEvenNumber = numbers3.find((item) => !(item % 2));
console.log(findEvenNumber);
const bigNumber = numbers3.find((item) => item > 100);
console.log(bigNumber);

const indexEvenNumber = numbers3.findIndex((item) => !(item % 2));
console.log(indexEvenNumber);

const users2 = [
    { name: 'Pepe', age: 22, gender: 'M' },
    { name: 'Ernestina', age: 22, gender: 'F' },
    { name: 'Luisa', age: 23, gender: 'F' },
    { name: 'Ramón', age: 25, gender: 'M' },
];

const has24More = users2.some((item) => item.age > 24);
console.log(has24More);

const hasAll24More = users2.every((item) => item.age > 24);
console.log(hasAll24More);

const totalAge = users2.reduce((acc, item) => acc + item.age, 0);
console.log(totalAge);
