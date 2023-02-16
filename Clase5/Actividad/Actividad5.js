class Producto{
    constructor(info){
      this.nombre = info.nombre;
      this.ancho = info.ancho;
      this.alto = info.alto;
      this.imagen = info.imagen;
      this.cantidad = info.cantidad;
    }
  
   agregar (cantidad){
      this.cantidad += cantidad;  // this.cantidad =  this.cantidad - 1;
    }
  }
  
 const producto1 = new Producto({
   nombre: "Licuadora",
   ancho: 23,
   alto: 34,
   imagen: "sdsadasd",
   cantidad: 0,
 });

  console.log(producto1);
  producto1.agregar(1);
  console.log(producto1);
