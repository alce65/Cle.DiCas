class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log('Hola, soy', this.name, 'edad:', this.age);
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
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }
    greeting() {
        super.greeting();
        console.log(`Estudio ${this.course}`);
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
pepe.greeting();
console.log(pepe);

pepe.name = 'José Pérez';
pepe.job = 'Developer';
delete pepe.age;
console.log(pepe);
pepe.greeting();
