let container = document.getElementById("container");
let img = document.createElement("img")


const productos = [
  { id: 1, nombre: "Paleta de Sombras Dior", precio: 3000},
  { id: 2, nombre: "Labial Mac", precio: 2700 },
  { id: 3, nombre: "Rubor en crema", precio: 2350 },
  { id: 4, nombre: "Rimmel Maybelline", precio: 5500 },
  { id: 5, nombre: "Brochas", precio: 8700 },
];

productos.forEach(item => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
    <button class="button">"Comprar"</button>
    `;
 
  container.append(div);
});