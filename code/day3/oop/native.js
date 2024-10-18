const str = 'Hola';
console.log(str.length); // 4
// new String(srt)
console.log(str.toUpperCase()); // HOLA
// new String(srt).toUpperCase()
const arr = [1, 2, 3];
// new Array(1, 2, 3)
console.log(arr.length); // 3
console.log(arr.push(4)); // 4
console.log(Array.isArray(arr)); // true

const data = [1, 2, 3];
console.log(data.constructor); // [Function: Array]
console.log(data instanceof Array); // true
console.log(data instanceof Object); // true

const foo = () => {};
console.log(foo.constructor); // [Function: Function]
console.log(foo instanceof Function); // true
console.log(foo instanceof Object); // true

const obj = {};
console.log(obj.constructor); // [Function: Object]
console.log(obj instanceof Object); // true
console.log(obj instanceof Array); // false
console.log(obj instanceof Function); // false
