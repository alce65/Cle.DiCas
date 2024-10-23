console.log('Tarea1');
console.log('Tarea2');
setTimeout(() => {
    console.log('Tarea3'); // asíncrono - diferido
}, 1000);
console.log('Tarea4');
setTimeout(() => {
    console.log('Tarea5'); // asíncrono - inmediato
}, 0);
console.log('Tarea6');
Promise.resolve('Tarea7').then(console.log); // asíncrono - inmediato

// 1. promesas
// 2. callbacks

// el **bucle de eventos** (event loop)
// las **APIs** del entorno (Web / Node)
// la **cola de callbacks** (callback queue)
// la **cola de microtareas** (microtask queue)

// core JS - motor de JS - estándar ES
// las **APIs** del entorno (Web / Node)
