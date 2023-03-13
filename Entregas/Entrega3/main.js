// CREANDO LAS CAJAS PARA ALMACENAR LOS PRODUCTOS.

let box = [];

// Creando el QR para generar producto

new QRious({
    element: document.querySelector("#codigo"),
    value: "https://parzibyte.me/blog", // La URL o el texto
    size: 200,
    backgroundAlpha: 0, // 0 para fondo transparente
    foreground: "#8bc34a", // Color del QR
    level: "H", // Puede ser L,M,Q y H (L es el de menor nivel, H el mayor)
});

// Usuario ingresa artículo y se ingresa a la caja.

let userProduct = document.getElementById("SearchBox");

// Conectando el botón

let closeButton = document.getElementById("CloseButton");
closeButton.addEventListener("click", BoxClosed);

function BoxClosed() {
    Swal.fire({
        icon: QRious.element,
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      });
}

// Producto vacío para almacenar objetos ingresados.
class Product {
  constructor(info) {
    this.nombre = info.nombre;
  }
}

// creando el nuevo producto.

const productnew = new Product({
  nombre: userProduct,
});

// Creando la funcion para incluir objetos en la caja

function addBox() {
  if (userProduct) {
    box.push(productnew);
    alert(
      "articulo agregado a tu caja"
    ); /* ------> Usar librería para el alert <---------- */
    console.log(` Articulos en caja : ${box.length} `);
  } else if (closeButton) {
  }
}
