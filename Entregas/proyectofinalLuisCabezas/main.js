// CREANDOlos array para almacenar cajas y productos .


let box = [];
let boxClose =JSON.parse( localStorage.getItem('Caja')) || []; 
let lista = document.querySelector ("#lista")
lista.innerHTML = "";
const nombre = document.getElementById('SearchBox').value;


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
  
  if (nombre === "") {
    alert("Debes agregar un articulo");
    $("#SearchBox").focus();
  } else if (!/^([a-zA-ZñÑáéíóúÁÉÍÓÚ0-9\s])+$/i.test(nombre)) {
    alert("artiículo no válido");
    document.getElementById('SearchBox').value = "";
    $("#SearchBox").focus();
  }  else {
  /* document.getElementById('SearchBox').value = ""; */
  box.push({nombre: nombre});  // Agrega un objeto con el nombre ingresado por el usuario
  alert("articulo agregado a la caja");
  document.getElementById('SearchBox').value = "";
  $("#SearchBox").focus();
  console.log(` Articulos en caja : ${box.length} `);
  console.log(box);            // Muestra el array con los elementos ingresados por el usuario

}
  
});

let cajaCerrada = document.getElementById("CloseButton");
cajaCerrada.addEventListener("click", ()=> { // Función para cerrar la caja y abrir una nueva
  if (box.length === 0) {
    alert ("debes agregar un producto")
    $("#SearchBox").focus();
  } else {
    Swal.fire({
      icon: 'success',
      title: 'Caja Cerrada',
      text: '¡Productos agregados con éxito!',
    })
    boxClose.push(box);   // Agrega el array box al array boxClose
    box = [];               // Crea un nuevo array box vacío
    console.log(boxClose);// Muestra el array con las cajas cerradas en la consola 
    localStorage.setItem ("Caja", JSON.stringify(boxClose))
    $("#SearchBox").focus();
  }
  
 
      
})

function mostrarArrays() {

let productsLS = JSON.parse (localStorage.getItem ("Caja"));


if (productsLS) {
  lista.innerHTML = ""
  for(let i = 0; i < productsLS.length; i++) {
    const arrayLi = document.createElement("li");
    arrayLi.innerHTML = "Caja " + [i]
    lista.append(arrayLi);
    const ul = document.createElement("ul");
    lista.append(ul);
    for(let j = 0; j < productsLS[i].length; j++) {
      const li = document.createElement("li");
      li.innerHTML = productsLS[i][j].nombre;
      ul.append(li);
/*     const arrayLi = document.createElement("li");
 arrayLi.innerHTML = "Caja " + [i] + " " + productsLS[i][j].nombre;

 lista.append(arrayLi); */
 console.log (i)
 console.log (productsLS.length)

 console.log (productsLS)
 console.log(productsLS[i][j].nombre);
     
     // Acá trabajas con los elementos de tu array interno
}
} ;


}   else {
  Swal.fire({
    icon: 'success',
    title: 'no tienes productos',
    text: 'Agrega productos a la caja',
  })

}


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


