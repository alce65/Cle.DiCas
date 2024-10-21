// Clases estática<zas -> No se pueden instanciar

// Math

Math.PI;
console.log(Math.trunc(Math.random() * 100));
console.log(Math.pow(4, 6));
console.log(4 ** 6);

// JSON

const obj = {
    name: 'Oscar',
    age: 32,
    country: 'MX',
    date: new Date(),
    fn() {},
};

let serialized = JSON.stringify(obj);
console.log(obj);
console.log(serialized);

let parsed = JSON.parse(serialized);
parsed.date = new Date(parsed.date);
console.log(parsed);
