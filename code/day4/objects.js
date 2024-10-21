const obj = {
    name: 'Pepe',
    age: 23,
};

console.log(obj.hasOwnProperty('name')); // true
console.log(obj.hasOwnProperty('age')); // true
console.log(obj.hasOwnProperty('hasOwnProperty')); // false
console.log(obj.isPrototypeOf(obj)); // false

// Métodos de Object

const person = {
    teeth: 32,
};

const pepe = Object.create(person);

pepe.name = 'Pepe';
pepe.age = 23;

const helena = {
    name: 'Elena',
    age: 23,
};

Object.setPrototypeOf(helena, person);

Object.freeze(helena);

// Relaciones entre objetos y arrays

Object.keys(obj); // ['name', 'age']
Object.values(obj); // ['Pepe', 23]
Object.entries(obj); // [['name', 'Pepe'], ['age', 23]]

const data = [
    ['name', 'Pepe'],
    ['age', 23],
];
const obj2 = Object.fromEntries(data);

console.log(obj2);

const obj3 = Object.fromEntries(Object.entries(obj));
console.log({ obj3 });
