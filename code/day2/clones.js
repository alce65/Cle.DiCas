// Clonar usando spreed operator

const numbers = [1, 2];
const numbers2 = numbers;
const numbersNew = [...numbers];

numbers2[0] = 3;
console.log('numbers[0]', numbers[0]); // [3, 2]

const user = {
    name: 'Pepe',
    age: 22,
    address: {
        city: 'Castellón',
        country: 'Spain',
    },
};
const user2 = user;
const userNew = { ...user };
const userNew2 = structuredClone(user);
// const userNew2 = JSON.parse(JSON.stringify(user));

userNew.name = 'Juan';
userNew.address.city = 'Valencia';

userNew2.name = 'Elena';

console.log(user, userNew, userNew2); // { name: 'Pepe', age: 22 } { name: 'Juan', age: 22 }
