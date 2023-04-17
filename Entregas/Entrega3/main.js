// CREANDO LAS CAJAS PARA ALMACENAR LOS PRODUCTOS.

let box = [];

// Creando el QR para generar producto


let qrcode = new QRCode(document.getElementById("qrcode"), {
  width : 120,
  height : 120
});
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

// Conectando el botón

let closeButton = document.getElementById("CloseButton");
closeButton.addEventListener("click", ()=> {
  Swal.fire({
    icon: 'success',
    title: 'Caja Cerrada',
    text: '¡Productos agregados con éxito!',
  })  
      }); 

// Usuario ingresa artículo y se ingresa a la caja.

let userProduct = document.getElementById("AddButton");
userProduct.addEventListener("click", ()=> { // Función para agregar y mostrar los productos en la caja
  let input = document.getElementById("SearchBox");
  let valor = input.value
  document.getElementById("SearchBox").value = "";

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

// Creando condoicional para incluir objetos en la caja

  if (userProduct) {
    box.push(valor);
    alert(
      "articulo agregado a tu caja"
    ); /* ------> Usar librería para el alert <---------- */
    console.log(` Articulos en caja : ${box.length} `);
    console.log (box);
  }


});

