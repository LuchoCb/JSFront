let BgBox;
let MdBox;
let SmBox;

let Bgart = 60;
let Mdart = 40;
let SmArt = 20;

let Bubble = 0;

// acá están los 3 tipos de cajas.

const SmallBox = [];
const MidBox = [];
const BigBox = [];

// Creo al clase base con características de los productos
class Product {
  constructor(info) {
    this.nombre = info.nombre;
    this.ancho = info.ancho;
    this.alto = info.alto;
    this.imagen = info.imagen;
    this.cantidad = info.cantidad;
  }
}

// Producto ya creado prviamente.
const product1 = new Product({
  nombre: "Licuadora" && "licuadora",
  ancho: 23,
  alto: 34,
  imagen: "sdsadasd",
  cantidad: 0,
});

// La función determina si el producto está creado o no
function productIn() {
    
  // El usuario ingresa el producto

  let userproduct = prompt("Ingrese un producto");

  // si está creado lo agrega a la caja que corresponde según el tamaño

  if (userproduct == product1.nombre) {
    this.cantidad += 1;
    SmallBox.push(product1);
    alert("articulo agregado a caja pequeña");
    console.log(` Articulos en caja pequeña: ${SmallBox.length} `);
  }

  // si no está creado le pide los datos para crearlo.
  else if (userproduct != product1.nombre) {
    alert("producto no encontrado por favor ingrese los datos");
    let width = prompt("Ingrese ancho aproximado");
    let height = prompt("ingrese alto aproximado");
    let photo = prompt("ingrese una imagen");
    this.cantidad += 1;

    // Acá estoy creando el nuevo producto a partir de la clase y con los datos infresados

    const productnew = new Product({
      nombre: userproduct,
      ancho: height,
      alto: height,
      imagen: photo,
      cantidad: this.cantidad,
    });

    // Acá defino si se va para la caja grande mediana o pequeña.

    if (width <= 20 && height <= 10) {
      SmallBox.push(productnew);
      alert("articulo agregado a caja pequeña");
      console.log(` Articulos en caja pequeña: ${SmallBox.length} `);
    } else if (width >= 20 && width <= 40 && height >= 10 && height <= 30) {
      MidBox.push(productnew);
      alert("articulo agregado a caja mediana");
      console.log(` Articulos en caja mediana: ${MidBox.length} `);
    } else if (width >= 40 && width <= 60 && height >= 30 && height <= 50) {
      BigBox.push(productnew);
      alert("articulo agregado a caja grande");
      console.log(` Articulos en caja grande: ${BigBox.name} `);
    } else if (width > 60 && height > 50) {
      alert("El artículo es demasiado grande agregado a papel burbuja");
      Bubble++;
      console.log("Artículos en papel burbuja: " + Bubble);
    } else {
      alert("por favor introduzca un artículo válido");
    }

    console.log(productnew);
  }
}

for (SmallBox.length = 0; SmallBox.length <= 5; ) {
  productIn();
}

alert("caja pequeña llena");
SmBox++;
console.log("cajas pequeñas" + SmBox);

for (MidBox.length = 1; MidBox.length <= 5; ) {
  productIn();
}

alert("caja mediana llena");
SmBox++;
console.log("cajas medianas" + SmBox);

for (BigBox.length = 1; BigBox.length <= 5; ) {
  productIn();
}

alert("caja mediana llena");
SmBox++;
console.log("cajas medianas" + SmBox);
