// CREANDOlos array para almacenar cajas y productos .

let box = [];
let boxClose = [];


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

// Usuario ingresa artículo y se ingresa a la caja.

let userProduct = document.getElementById("AddButton");
userProduct.addEventListener("click", ()=> { // Función para agregar y mostrar los productos en la caja
  const nombre = document.getElementById('SearchBox').value;
  document.getElementById('SearchBox').value = "";
  box.push({nombre: nombre});  // Agrega un objeto con el nombre ingresado por el usuario
  alert("articulo agregado a la caja");
  console.log(` Articulos en caja : ${box.length} `);
  console.log(box);            // Muestra el array con los elementos ingresados por el usuario

});

let cajaCerrada = document.getElementById("CloseButton");
cajaCerrada.addEventListener("click", ()=> { // Función para cerrar la caja y abrir una nueva
  Swal.fire({
    icon: 'success',
    title: 'Caja Cerrada',
    text: '¡Productos agregados con éxito!',
  })  
  boxClose.push(box);   // Agrega el array box al array boxClose
  box = [];               // Crea un nuevo array box vacío
  console.log(boxClose);// Muestra el array con las cajas cerradas en la consola
  let i = boxClose.length  
  localStorage.setItem ("Caja", JSON.stringify(boxClose))
      
})

function mostrarArrays() {
  // Limpia la lista antes de agregar nuevos elementos
  let lista = document.querySelector ("#lista")
  lista.innerHTML = "";
  
  const productsLS = JSON.parse (localStorage.getItem ("Caja"));
      console.log (productsLS)
  // Recorre el array final y crea un elemento li por cada array
  productsLS.forEach(producto => {
    const arrayLi = document.createElement("li");
    arrayLi.innerText = producto[0]?.nombre;
    lista.append(arrayLi);
  });

}
 

function generarQR() {
  // Limpia el div de los códigos QR antes de agregar nuevos elementos
  const qrDiv = document.getElementById("qr");
  qrDiv.innerHTML = "";
  
  // Recorre el array final con todas las cajas y genera un código QR por cada array
  
  for (let i = 0; i < boxClose.length; i++) {
    const qrCanvas = document.createElement("canvas");
    new QRCode(qrCanvas, JSON.stringify(boxClose[i])); // Genera el código QR con QRCode.js
    qrDiv.appendChild(qrCanvas); // Agrega el canvas al div
  }
}


