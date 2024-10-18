// Objetos literales o escritos en json

const obj = {
    name: 'Pepe',
    age: 22,
    address: {
        city: 'Castellón',
        country: 'Spain',
    },
};

console.log(obj.hasOwnProperty('name')); // true
console.log(obj.hasOwnProperty('job')); // false

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
console.log(user);
user.countTeeth();
console.log(obj.hasOwnProperty('name'));
console.log(obj.hasOwnProperty('teeth'));

// Forma correcta de modificar el prototipo de un objeto

const userGood = Object.create(person);
userGood.name = 'Ernesto';
userGood.age = 24;

const alumno = {
    course: 'JavaScript',
    __proto__: user,
};

user.teeth = 30;

console.log(alumno);
console.log(alumno.name);
console.log(alumno.age);
console.log(alumno.teeth);
alumno.countTeeth();
