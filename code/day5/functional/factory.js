// Patrón de objetos literales
const obj1 = {
    name: 'Pepe',
    age: 23,
    greeting: function () {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
    },
};

// Patron constructor
class Person {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    greeting() {
        console.log(`Hola, soy ${this.#name} y tengo ${this.#age} años`);
    }
}

const obj2 = new Person('Pepe', 23);

// Patrón factory

const createPerson = (name, age) => {
    const obj = {};
    obj.greeting = function () {
        console.log(`Hola, soy ${name} y tengo ${age} años`);
    };
    return obj;
};

const obj3 = createPerson('Pepe', 23);

console.log(obj1, obj2, obj3);

obj1.greeting();
obj2.greeting();
obj3.greeting();
