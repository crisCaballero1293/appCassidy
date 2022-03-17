//FUNCIÓN CONSTRUCTORA DE OBJETOS
function Producto(id, nombre, stock, precio){
     this.id = id,
     this.nombre = nombre,
     this.stock = stock,
     this.precio = precio
}

const prod1 = new Producto(1, "Playera", 20, 250);
const prod2 = new Producto(2, "Gorra", 20, 350);
const prod3 = new Producto(3, "Pin", 15, 200);
const prod4 = new Producto(4, "Llavero", 10, 250);
const prod5 = new Producto(5, "Playera", 20, 250);
const prod6 = new Producto(6, "Gorra", 20, 350);
const prod7 = new Producto(7, "Pin", 15, 200);
const prod8 = new Producto(8, "Llavero", 10, 250);
const prod9 = new Producto(9, "Playera", 20, 250);
const prod10 = new Producto(10, "Gorra", 20, 350);
const prod11 = new Producto(11, "Pin", 15, 200);
const prod12 = new Producto(12, "Llavero", 10, 250);
const prod13 = new Producto(13, "Playera", 20, 250);
const prod14 = new Producto(14, "Gorra", 20, 350);
const prod15 = new Producto(15, "Pin", 15, 200);
const prod16 = new Producto(16, "Llavero", 10, 250);

const listaProductos = [prod1, prod2, prod3, prod4, 
prod5, prod6, prod7, prod8, prod9, prod10, prod11, prod12,
prod13, prod14, prod15, prod16];

//SIMULADOR DE VENTA CON PROMPT Y ALERTS
/* let cantidadComprada;
let precioTotalVenta = 0;
let cantidadProductosComprados;

function menuProductos(){
     alert("Productos" + "\n" + "1- Playera" + "\n" + "2- Gorra" + "\n" + "3- Pin" + "\n" + "4- Llavero");
}
function stockInsuficiente(stock) {
     alert("No disponemos de esa cantidad, nuestro stock por el momento es de " + stock + " " + "piezas");
}
function compraRealizada(stock, cantidad, precio, nombreProducto) {
     precioTotalVenta += cantidad * precio
     stock -= cantidadComprada
     console.log(`Quedan ${stock} ${nombreProducto}!`);
}

menuProductos();

cantidadProductosComprados = prompt("¿Cuantos productos desea comprar?");

for(let i = 0; i < cantidadProductosComprados; i++){

     let nombreCompra = prompt("Ingresa el nombre del producto que deseas comprar:");

     if (nombreCompra == prod1.nombre) {
          cantidadComprada = parseInt(prompt("Ingresa la cantidad deseada"))
          if (cantidadComprada > prod1.stock) {
               stockInsuficiente(prod1.stock);
          }
          else{
               compraRealizada(prod1.stock, cantidadComprada, prod1.precio, prod1.nombre);
          }
     }
     else if (nombreCompra == prod2.nombre) {
          cantidadComprada = parseInt(prompt("Ingresa la cantidad deseada"))
          if (cantidadComprada > prod2.stock) {
               stockInsuficiente(prod2.stock);
          }
          else{
               compraRealizada(prod2.stock, cantidadComprada, prod2.precio, prod2.nombre);
          }
     }
     else if (nombreCompra == prod3.nombre) {
          cantidadComprada = parseInt(prompt("Ingresa la cantidad deseada"))
          if (cantidadComprada > prod3.stock) {
               stockInsuficiente(prod3.stock);
          }
          else{
               compraRealizada(prod3.stock, cantidadComprada, prod3.precio, prod3.nombre);
          }
     }
     else if (nombreCompra == prod4.nombre) {
          cantidadComprada = parseInt(prompt("Ingresa la cantidad deseada"))
          if (cantidadComprada > prod4.stock) {
               stockInsuficiente(prod4.stock);
          }
          else{
               compraRealizada(prod4.stock, cantidadComprada, prod4.precio, prod4.nombre);
          }
     }
     else{
          alert("El producto no existe");
     }
}
     alert("El total de su compra es de " + precioTotalVenta); */
//-----------------------------------------------------------------------------

/* Creamos un for que recorra todos los elementos del array 
(listaProductos), por cada producto del array va a agregar un div con la estructura
asignada */

//Esta var me trae del html el elemento "PRODUCTS" que es un div, y dentro de el
//ir agregando los demas divs creados con createElement 
let products = document.querySelector(".products");

for(const productos of listaProductos) {
     let container = document.createElement("div");
     //Agregando clases a los divs
     container.setAttribute("class", "container");
     //Definimos el inner HTML del elemento con plantilla de txt
     container.innerHTML = `<div"> </div>`
     products.appendChild(container);

     let imgContainer = document.createElement("div");
     imgContainer.setAttribute("class", "img__Container");
     imgContainer.innerHTML = `<div>
                              <img src="../img/imgCommerce/1.png" alt="imagen producto">
                              </div>`
     container.appendChild(imgContainer);

     let txtContainer = document.createElement("div");
     txtContainer.setAttribute("class", "txt__Container");
     txtContainer.innerHTML = `<div">
                              <h4>Lorem ipsum dolor sit amet.</h4>
                              </div>`
     container.appendChild(txtContainer);

     let priceTxt = document.createElement("div");
     priceTxt.setAttribute("class", "price__Txt");
     priceTxt.innerHTML = `<div">
                         <p>$999</p>
                         </div>`
     container.appendChild(priceTxt);

     let btnContainer = document.createElement("div");
     btnContainer.setAttribute("class", "btn__Container");
     btnContainer.innerHTML = ` <div">
                              <button>Agregar al carrito</button>
                              </div>`
     container.appendChild(btnContainer);
}
//-----------------------------------------------------------------------------