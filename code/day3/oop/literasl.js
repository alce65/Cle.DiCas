const obj1 = {
    name: 'Pepe',
    age: 22,
    //     greeting: function () {
    //         console.log('Hola, soy', this.name);
    //     },
    greeting() {
        console.log('Hola, soy', this.name);
    },
};

const obj2 = {
    name: 'Ernestina',
    age: 25,
    //     greeting: function () {
    //         console.log('Hola, soy', this.name);
    //     },
    greeting() {
        console.log('Hola, soy', this.name);
    },
};

obj1.greeting();
obj2.greeting();

console.log(obj1);
console.log(obj2);

// Plasticidad de los objetos

obj1.name = 'Jose';
obj1.job = 'Developer';
delete obj1.age;
console.log(obj1);
