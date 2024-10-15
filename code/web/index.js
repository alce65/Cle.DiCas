console.log("Loaded index.js");

// Acceder a elementos del DOM
const elementButton = document.querySelector("button");
console.dir(elementButton);
const elementOutput = document.querySelector("output");
console.dir(elementOutput);

// Definir funciones manejadores de eventos
const handleClick = () => {
    console.log("Click en el botón");
    // Crear elementos del DOM
    elementOutput.innerHTML = "Hola mundo";
};

// Definir manejadores de eventos (handlers, listeners)
elementButton.addEventListener("click", handleClick);

/* 
kebab-case
snake_case
camelCase
PascalCase 
*/
