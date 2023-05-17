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
  boxClose.forEach(element => {
    for (let i = 0; i < boxClose.length; i++) {
      localStorage.setItem ("Caja" + (i+1), JSON.stringify(element))
      const productsLS = JSON.parse (localStorage.getItem ("Caja" + (i+1)))
      console.log (productsLS)
      
      }

  

  });

})

function mostrarArrays() {
  // Limpia la lista antes de agregar nuevos elementos
  lista= document.querySelector ("#lista")
  lista.innerHTML = "";
  
  // Recorre el array final y crea un elemento li por cada array
   
  for (let i = 0; i < boxClose.length; i++) {
    const arrayLi = document.createElement("li");
    //arrayLi.textContent = JSON.parse (localStorage.getItem ("Caja"))
    //arrayLi.textContent = JSON.stringify("Caja " + (i+1) + "=") /*PLANTILLA LITERAL ppt12*/ + JSON.stringify(boxClose[i]);
    lista.appendChild(arrayLi);
    
  }
}





// Botón para ver el listado de cajas y los productos que tienen dentro. 

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


