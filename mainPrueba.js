let arrayActual = [];  // Array que se irá llenando con los nombres introducidos
let arrayFinal = [];   // Array que almacenará los arrays de nombres creados

function agregar() {
  const nombre = document.getElementById('nombre').value;
  arrayActual.push({nombre: nombre});  // Agrega un objeto con el nombre al array actual
  console.log(arrayActual);            // Muestra el array actual en la consola
}

function nuevoArray() {
  arrayFinal.push(arrayActual);   // Agrega el array actual al array final
  arrayActual = [];               // Crea un nuevo array actual vacío
  console.log(arrayFinal);        // Muestra el array final en la consola
}
