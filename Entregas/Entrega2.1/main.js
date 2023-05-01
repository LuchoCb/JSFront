let BgBox;
let MdBox;
let SmBox;

let Bgart = 60;
let Mdart = 40;
let SmArt = 20;

// acá están los 4 tipos de cajas.

const SmallBox = [];
const MidBox = [];
const BigBox = [];
const Bubble = [];

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
  nombre: "Licuadora" || "licuadora",
  ancho: 23,
  alto: 34,
  imagen: "sdsadasd",
  cantidad: 0,
});




/* 
let productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 700 },
  { id: 3, nombre: "gorra", precio: 1350 },
  { id: 4, nombre: "zapato", precio: 800 },
]; */

 //find encuentra el primer elemento que cumpla la condicion dada
// let nombre = prompt("INgres ele nombre del producto");
// let encontrado = productos.find(producto => producto.nombre === nombre);

// let mensaje = `
//   Id: ${encontrado.id}
//   Nombre: ${encontrado.nombre}
//   Precio: $${encontrado.precio}
// `;

// alert(mensaje);



// La función determina si el producto está creado o no
function productIn() {
  // El usuario ingresa el producto

  let userproduct = prompt("Ingrese un producto");
   // Acá reviso finalmente si, al agregar otro producto, ya está creado y agregarlo a la caja o crearlo.

  let findProduct= SmallBox.find(producto => producto.nombre == userproduct);
  MidBox.find(producto => producto.nombre == userproduct );
  BigBox.find(producto => producto.nombre == userproduct ); 
   
let mensaje = `
   Id: ${findProduct.id}
   Nombre: ${findProduct.nombre}
   Precio: $${findProduct.precio}
 `;

alert(mensaje);
  

  //console.log (findProduct)

      // Acá estoy creando el nuevo producto a partir de la clase y con los datos infresados

    class Product {
      constructor(info) {
        this.nombre = info.nombre;
        this.ancho = info.ancho;
        this.alto = info.alto;
        this.imagen = info.imagen;
        this.cantidad = info.cantidad;
      }
    }

    const productnew = new Product({
    nombre: userproduct,
    ancho: height,
    alto: height,
    imagen: photo,
    cantidad: quantity,
  });

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
    let quantity =+ 1;

    // Acá defino si se va para la caja grande mediana o pequeña.

    if (width <= 20 && height <= 10 && typeof userproduct === `string` ) {
      SmallBox.push(productnew);
      alert("articulo agregado a caja pequeña");
      console.log(` Articulos en caja pequeña: ${SmallBox.length} `);
    } else if (width >= 21 && width <= 40 && height >= 11 && height <= 30 && typeof userproduct === `string` ) {
      MidBox.push(productnew);
      alert("articulo agregado a caja mediana");
      console.log(` Articulos en caja mediana: ${MidBox.length} `);
    } else if (width >= 41 && width <= 60 && height >= 31 && height <= 50 && typeof userproduct === `string`) {
      BigBox.push(productnew);
      alert("articulo agregado a caja grande");
      console.log(` Articulos en caja grande: ${BigBox.length} `);
    } else if (width > 60 && height > 50 && typeof userproduct === `string`) {
      Bubble.push(productnew);
      alert("El artículo es demasiado grande agregado a papel burbuja");
      console.log(` Articulos Para papel burbuja: ${Bubble.length} `);
    } else {
      alert("por favor introduzca un artículo válido");
    }

    console.log(productnew);
    console.log (SmallBox);

    
  }

 
if (findProduct){
     SmallBox.push(productnew);
       alert("articulo agregado a caja pequeña");
       console.log(` Articulos en caja pequeña: ${SmallBox.length} `);
 }
 
 else if (findProduct) {
     MidBox.push(productnew);
     alert("articulo agregado a caja mediana");
     console.log(` Articulos en caja mediana: ${MidBox.length} `);
 }
 
 else if (findProduct) {
     BigBox.push(productnew);
       alert("articulo agregado a caja grande");
       console.log(` Articulos en caja grande: ${BigBox.length} `);
 }
 
 else {
     productIn();
 }

}

//acá corro la función mientras las cajas no se llenen si se llenan manda la alerta.

do {
  productIn();
} while (SmallBox.length <= 4);

alert ("Caja pequeña llena")

do {
  productIn();
} while (MidBox.length <= 4);

alert ("Caja mediana llena")

do {
  productIn();
} while (BigBox.length <= 4);

alert ("Caja grande llena")







