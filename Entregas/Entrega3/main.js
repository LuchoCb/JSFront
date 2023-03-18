// CREANDO LAS CAJAS PARA ALMACENAR LOS PRODUCTOS.

let box = [];

// Creando el QR para generar producto

/* let qrcode = new QRCode(document.getElementById("qrcode"), {
  width : 120,
  height : 120
}); */
function makeQrcode(e) {
qrcode.makeCode(e.attr("data-url"));
}
jQuery(document).ready(function(){
jQuery("[data-toggle='popover']").popover(
  options={
      content: jQuery("#qrcode"),
      html: true // important! popover html content (tag: "#qrcode") which contains an image
  }
);

jQuery("[data-toggle='popover']").on("show.bs.popover", function(e) {
  makeQrcode(jQuery(this));
  jQuery("#qrcode").show();
});
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
