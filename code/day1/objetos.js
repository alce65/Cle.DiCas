'strict mode';

const foo = {
    name: 'Luis',
    age: 22,
    isStudent: true,
    address: {
        street: 'Calle Pez',
        number: 22,
        city: 'Madrid',
    },
};
foo.name = 'Pepe';
foo.email = 'pepe@sample.com';
console.log(foo);
delete foo.isStudent;
console.log(foo);
const property = 'age';
console.log(foo[property]);

// Propiedades anidadas

console.log(foo.baz);
console.log(foo.address.city);

// Error  Cannot read properties of undefined (reading 'address')
// console.log(foo.employee.address);

// Chain of optional properties

foo.employee = 'any';
console.log(foo.employee?.address?.postalCode);

// ¿null es un object?
console.log('Using bar');
let bar = 22;
bar.any = 1;
console.log(bar.any);

bar = null;
// Error Cannot set property 'any' of null
// bar.any = 1;
// console.log(bar.any);

// Arrays
const data = [1, 2, 3, 4, 5];
data[1] = 22;
console.log(data);
console.log(data[4]);
console.log(data.length);
data[100] = 100;
console.log(data.length);
data.name = 'Lista de Pepe';
console.log(data);
console.log(data.length);
console.log(data.name);

// Functions

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2));

sum.nombre = 'Función Suma';
console.log(sum);
console.log(sum.nombre);

// Caso real
// const app = express()
// express.parse()

// ¿Todo es un objeto?
// No, hay tipos primitivos
// Pero muchos de ellos se comportan como si fueran objetos
// Existen los Wrapper Objects: String, Number y Boolean

const str = 'Hola';
str.any = 22;
// Lo que pasa const objStr = new String(str);
console.log(str.toUpperCase());
console.log(str, typeof str);
