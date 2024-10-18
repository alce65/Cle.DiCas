// Errors === Exceptions

const s = 'Hola Mundo';
try {
    s.foo = 12;
} catch (error) {
    console.error(error.name);
    console.error(error.message);
}

console.log(s.length);
console.log(s);

const divide = (a, b) => {
    if (b === 0) {
        throw new Error('Division by zero');
    }
    const result = a / b;
    return result;
};

try {
    console.log(divide(4, 2) * 2);
    console.log(divide(4, 0) * 2);
} catch (error) {
    console.error(error.name);
    console.error(error.message);
}
