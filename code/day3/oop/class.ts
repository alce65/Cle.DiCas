interface Human {
    greeting(): void;
}

class Person implements Human {
    static count = 0;

    static getCount() {
        console.log('Hay', Person.count, 'personas');
    }

    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
        Person.count++;
    }

    // Accessors: getters and setters

    // get name() {
    //     return this.#name;
    // }

    // set name(name) {
    //     this.#name = name;
    // }

    greeting() {
        console.log('Hola, soy', this.#name, 'edad:', this.#age);
    }
}

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.greeting = function () {
//     console.log('Hola, soy', this.name, 'edad:', this.age);
// };

class Student extends Person {
    #course;
    constructor(name, age, course) {
        super(name, age);
        this.#course = course;
    }
    greeting() {
        super.greeting();
        console.log(`Estudio ${this.#course}`);
    }
    matriculate(course) {
        // DB -> curso tiene plazas
        this.#course = course;
    }
}

// const Student = function (name, age, course) {
//     Person.call(this, name, age);
//     // this.name = name;
//     // this.age = age;
//     this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);
// // Student.prototype.__proto__ = Person.prototype;
// Student.prototype.constructor = Student;

// Student.prototype.greeting = function () {
//     Person.prototype.greeting.call(this);
//     console.log(`Estudio ${this.course}`);
// };

const pepe = new Student('Pepe', 22, 'JavaScript');
pepe.matriculate('Python');
pepe.greeting();
console.log(pepe);

console.log(pepe);
pepe.greeting();

Person.getCount();
// pepe.name = 'Jose';
// console.log(pepe.name);
