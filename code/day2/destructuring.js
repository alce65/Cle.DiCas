// ES2015 Destructuring

// Al declarar variables

const createArray = () => [1, 2];
const createObject = () => ({
    name: 'Pepe',
    age: 22,
});

const data = createArray();
data[0]; // 1
data[1]; // 2

const [first, second] = createArray();
console.log({ first, second });

const user = createObject();
user.name; // 'Pepe'
user.age; // 22

const { name, age } = createObject();

console.log('Destructuring al declarar variables');
console.log(name);
console.log(age);

// Al asignar valores a variables

{
    let [first, second] = createArray();
    let { name, age } = createObject();

    [first, second] = [10, 20];
    ({ name, age } = { name: 'Jose', age: 30 });

    console.log('Destructuring al asignar valores a variables');
    console.log(first, second); // 10 20
    console.log(name, age); // Jose 30
}

// Al declarar parámetros de funciones

const useArray = ([first, second]) => {
    console.log({ first, second });
};

useArray([1, 2]);

const useObject = ({ name, age }) => {
    console.log({ name, age });
};

useObject({ name: 'Pepe', age: 22 });

//Operador spreed

const addTwoNumbers = (a, b) => a + b;

const numbers = [1, 2];
console.log(addTwoNumbers(numbers[0], numbers[1]));
console.log(addTwoNumbers(...numbers));

// Rest operator y los argumentos

const foo = function (...args) {
    console.log(arguments);
    console.log(args);
};

foo(); // {}
foo(1, 2, 3);

const baz = (...args) => {
    // Error console.log(arguments);
    console.log(args);
};

baz();
baz(10, 28, 63);

const bar = (a, b, ...rest) => {
    console.log(a);
    console.log(b);
    console.log(rest);
};

bar(1, 2, 3, 4, 5, 6);

console.log('Fin de archivo', 23, true, 'Pepe', { name: 'Pepe' });
