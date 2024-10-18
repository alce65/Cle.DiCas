// Objetos literales o escritos en json

const o = {};
console.log(typeof o); // object
o.name = 'Pepe';
console.log(o); // { name: 'Pepe' }
o.name = 'Juan';
console.log(o); // { name: 'Juan' }
delete o.name;
console.log(o); // {}
// o = { name: 'Pepe' } // Error: Assignment to constant variable

const o2 = {
    name: 'Pepe',
    age: 22,
    address: {
        city: 'Castellón',
        country: 'Spain',
    },
};

Object.freeze(o2);
Object.freeze(o2.address);
// o2.name = 'Juan';
// o2.address.city = 'Valencia';
console.log(o2); // { name: 'Pepe', age: 22, address: { city: 'Castellón', country: 'Spain' } }

const data = [1, 2, 3, 4, 5];

const person = {
    teeth: 32,
    countTeeth: function () {
        console.log('Tengo', this.teeth, 'dientes');
    },
};

const user = {
    name: 'Pepe',
    age: 22,
};

console.log(user.teeth);
user.__proto__ = person;
user.countTeeth();
