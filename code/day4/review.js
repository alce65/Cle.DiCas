// Funciones
// Son Objetos
// Son Anidables
// Pueden se parámetros: HOF / Callbacks
{
    function foo() {
        console.log('foo');

        const baz = function () {
            console.log('bar');
        };
    }

    const bar = function () {
        console.log('bar');
    };

    foo.z = 22;
    bar.z = 23;
}

// Objetos literales

{
    const obj = {
        name: 'Pepe',
        age: 23,
    };

    // obj = new Object();

    console.log(obj.__proto__);
    console.log(obj.__proto__ === Object.prototype);
    console.log(obj.__proto__.constructor);
}

// Cambiar el proto de un objeto
{
    const person = {
        teeth: 32,
    };

    const obj = Object.create(person);

    obj.name = 'Pepe';
    obj.age = 23;

    console.log(obj.__proto__);
    console.log(obj.teeth);
}

// Funciones tienen prototype
{
    function foo() {
        console.log('foo');

        const baz = function () {
            console.log('bar');
        };
    }

    const bar = function () {
        console.log('bar');
    };

    console.log(foo.prototype);
    console.log(bar.prototype);

    const fnArrow = () => {
        console.log('arrow');
    };

    console.log(fnArrow.prototype);
}

// Clases

{
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        sayHello() {
            console.log(`Hello, soy ${this.name}`);
        }
    }

    const p = new Person('Pepe', 23);

    console.log(p.__proto__ === Person.prototype);
    console.log(p.__proto__.constructor === Person);

    p.sayHello();

    class Employee extends Person {
        constructor(name, age, salary) {
            super(name, age);
            this.salary = salary;
        }

        sayHello() {
            super.sayHello();
            console.log('I am Employee');
        }
    }

    const e = new Employee('Pepe', 23, 1000);
    e.sayHello();
}

// Funciones constructoras nativas (built-in)

{
    const obj = new Object();
    // obj = {};
    console.log(obj);
    console.log(obj instanceof Object);

    // Array extends Object
    const arr = new Array(1, 2, 3);
    // arr = [1, 2, 3];
    console.log(arr);
    console.log(arr instanceof Array);
    console.log(obj instanceof Object);

    arr.__proto__ === Array.prototype;

    // Date extends Object
    const date = new Date();
    console.log(date);
    console.log(date instanceof Date);
    console.log(obj instanceof Object);
    date.__proto__ === Date.prototype;
}
{
    // Propiedades estáticas

    class Person {
        static teeth = 32;

        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        sayHello() {
            console.log(`Hello, soy ${this.name}`);
        }
    }

    Person.teeth = 32;
}

// Propiedades estáticas en las clases nativas

// Object.create();
// Array.isArray();
// Date.now();

// Valores primitivos

// No son Objetos
const str = 'Hola';
// str.foo = 'bar'; // Cannot create property 'foo' on string 'Hola'

// Hacen coercion a objetos: String, Number, Boolean

String.prototype.slice;
str.slice(1, 2);
// new String(str).slice(1, 2);

let z = 24 / '2'; // 12
// let z = 24 / Number('2') // 12
let r = 24 + Number('2'); // 26
