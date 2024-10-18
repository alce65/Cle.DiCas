function foo() {
    console.log('Este es el valor de this:', this);
}

// function pattern (use strict mode -> package.json type: module)
foo(); // undefined

// console.log(globalThis);

// function pattern (NO strict mode)
// foo(); // <ref *1> Object [global] {}

// method pattern
const obj = {
    // foo: foo
    foo,
};
obj.foo(); // { foo: [Function: foo] }

// constructor pattern
const objNew = new foo(); // foo {}
console.log(objNew); // foo {}

// call pattern
const obj2 = { name: 'Soy obj2' };

foo.call(obj2); // { name: 'Soy obj2' }

const arrowFoo = () => {
    console.log('Este es el valor de this:', this);
};

arrowFoo(); // undefined
const objArrow = {
    arrowFoo,
};
objArrow.arrowFoo(); // undefined
// new arrowFoo(); // arrowFoo {}
