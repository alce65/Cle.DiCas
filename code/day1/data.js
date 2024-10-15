// Tipo primitivos (7)
// Disponen de Wrapper Objects
console.log(12, typeof 12);
console.log('Data', typeof 'Data');
console.log(true, typeof true);
console.log(false, typeof false);

// No disponen de Wrapper Objects
console.log(undefined, typeof undefined);
console.log(null, typeof null, 'BUG: debería decir null');
console.log(Symbol('a'), typeof Symbol('a'));
console.log(7n, typeof 7n);

// Tipo compuestos
console.log({}, typeof {});
console.log([], typeof []);
console.log(/./, typeof /./);
console.log(new Date(), typeof new Date());
console.log(new Map(), typeof new Map());
console.log(new Set(), typeof new Set());
console.log(new Error(), typeof new Error());
console.log(() => {}, typeof (() => {}), 'también son objects');
