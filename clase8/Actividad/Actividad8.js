let container = document.getElementById("container");
let img = document.createElement("img")

const SmallBox = [];

class Product {
  constructor(info) {
    this.nombre = info.nombre;
    this.ancho = info.ancho;
    this.alto = info.alto;
    this.imagen = info.imagen;
    this.cantidad = info.cantidad;
  }
}

const product1 = new Product({
  nombre: "Licuadora",
  ancho: 23,
  alto: 34,
  imagen: "sdsadasd",
  cantidad: 1,
});

SmallBox.push(product1);

SmallBox.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
        <h1> Nombre: <br> ${item.nombre} </h1>
        <img src ="https://cdn-icons-png.flaticon.com/512/776/776653.png"> </img>
        <h2>Cantidad: ${item.cantidad} </h2>
    `;

  container.append(div);
});

console.log (SmallBox);
