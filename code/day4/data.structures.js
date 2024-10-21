// Colecciones con clave

// Set (-> Array sin repeticiones)

const numbers = [1, 2, 3, 1, 2, 3, 1, 2];

const set = new Set(numbers);

set.add(4);
set.add(4);
set.delete(1);
set.has(3); // true

console.log(set);

const finalNumbers = Array.from(set);
console.log(finalNumbers);

// Map
const map = new Map([
    ['name', 'Pepe'],
    ['age', 22],
]);

console.log(map);

const user = {
    name: 'Pepe',
    age: 22,
};

const userMap = new Map(Object.entries(user));
console.log(userMap);

userMap.size; // 2
userMap.has('name'); // true
userMap.get('name'); // 'Pepe'
userMap.delete('name');
userMap.has('name'); // false
userMap.set('job', 'Developer');
userMap.set('age', 23);
console.log(userMap);

// WeakSet
// WeakMap
