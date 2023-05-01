// CREANDOlos array para almacenar cajas y productos .

let box = [];
let boxClose = [];




// Usuario ingresa artículo y se ingresa a la caja.

let userProduct = document.getElementById("AddButton");
userProduct.addEventListener("click", ()=> { // Función para agregar y mostrar los productos en la caja
    const nombre = document.getElementById('SearchBox').value;
    document.getElementById('SearchBox').value = "";  
    box.push({nombre: nombre});  // Agrega un objeto con el nombre ingresado por el usuario
  // Buscar el objeto en cada array almacenado en boxClose
  for (let i = 0; i < boxClose.length; i++) {
    const foundObj = boxClose[i].find((obj) => obj.nombre === nombre);
    if (foundObj) {
      alert("El artículo ya está en una caja cerrada");
      break; // Salir del ciclo si se encuentra el objeto
    }

    else {
      alert("articulo agregado a la caja");
    }
  }

  console.log(` Articulos en caja : ${box.length} `);
  console.log(box); // Muestra el array con los elementos ingresados por el usuario

});

let cajaCerrada = document.getElementById("CloseButton");
cajaCerrada.addEventListener("click", () => {
  const nombre = document.getElementById("SearchBox").value;
  document.getElementById("SearchBox").value = "";
  Swal.fire({
    icon: "success",
    title: "Caja Cerrada",
    text: "¡Productos agregados con éxito!",
  });
  boxClose.push(box);
  box = [];
  console.log(boxClose);
});

function mostrarArrays() {
  // Limpia la lista antes de agregar nuevos elementos
  lista.innerHTML = "";
  
  // Recorre el array final y crea un elemento li por cada array
  for (let i = 0; i < boxClose.length; i++) {
    const arrayLi = document.createElement("li");
    arrayLi.textContent = JSON.stringify("Caja " + i + "=") /*PLANTILLA LITERAL ppt12*/ + JSON.stringify(boxClose[i]);
    lista.appendChild(arrayLi);
  }
}


