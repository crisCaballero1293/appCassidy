//FUNCIÓN CONSTRUCTORA DE OBJETOS
function Producto(id, nombre, stock, precio, imgValor) {
  (this.id = id),
    (this.nombre = nombre),
    (this.stock = stock),
    (this.precio = precio),
    (this.img = imgValor);
}

//const {imgValue} = imgProd;

//PRODUCTOS
const prod1 = new Producto(
  1,
  "Playera Rock",
  20,
  250,
  "../img/imgCommerce/1.png"
);
const prod2 = new Producto(
  2,
  "Playera Wow",
  20,
  350,
  "../img/imgCommerce/2.png"
);
const prod3 = new Producto(
  3,
  "Playera Fabulous",
  15,
  200,
  "../img/imgCommerce/3.png"
);
const prod4 = new Producto(
  4,
  "Playera Kiss",
  10,
  250,
  "../img/imgCommerce/4.png"
);
const prod5 = new Producto(
  5,
  "Gorra Rock",
  20,
  250,
  "../img/imgCommerce/5.png"
);
const prod6 = new Producto(
  6,
  "Gorra Eagle",
  20,
  350,
  "../img/imgCommerce/6.png"
);
const prod7 = new Producto(
  7,
  "Gorra Blue",
  15,
  200,
  "../img/imgCommerce/7.png"
);
const prod8 = new Producto(
  8,
  "Gorra Black",
  10,
  250,
  "../img/imgCommerce/8.png"
);
const prod9 = new Producto(9, "Pin Rayo", 20, 250, "../img/imgCommerce/9.png");
const prod10 = new Producto(
  10,
  "Pin Mano",
  20,
  350,
  "../img/imgCommerce/10.png"
);
const prod11 = new Producto(
  11,
  "Pin YouRock",
  15,
  200,
  "../img/imgCommerce/11.png"
);
const prod12 = new Producto(
  12,
  "Pin ManoNegra",
  10,
  250,
  "../img/imgCommerce/12.png"
);
const prod13 = new Producto(
  13,
  "Llavero Pluma",
  20,
  250,
  "../img/imgCommerce/13.png"
);
const prod14 = new Producto(
  14,
  "Llavero Floyd",
  20,
  350,
  "../img/imgCommerce/14.png"
);
const prod15 = new Producto(
  15,
  "Llavero Plumilla",
  15,
  200,
  "../img/imgCommerce/15.png"
);
const prod16 = new Producto(
  16,
  "Llavero Cadena",
  10,
  250,
  "../img/imgCommerce/16.png"
);

const listaProductos = [
  prod1,
  prod2,
  prod3,
  prod4,
  prod5,
  prod6,
  prod7,
  prod8,
  prod9,
  prod10,
  prod11,
  prod12,
  prod13,
  prod14,
  prod15,
  prod16,
];

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

for (const productos of listaProductos) {
  let container = document.createElement("div");
  //Agregando clases a los divs
  container.setAttribute("class", "container card");
  //Definimos el inner HTML del elemento con plantilla de txt
  container.innerHTML = `<div"> </div>`;
  products.appendChild(container);

  let imgContainer = document.createElement("div");
  imgContainer.setAttribute("class", "img__Container");
  imgContainer.innerHTML = `<div>
                                                    <img src="${productos.img}"/>
                                                    </div>`;
  container.appendChild(imgContainer);

  let txtContainer = document.createElement("div");
  txtContainer.setAttribute("class", "txt__Container");
  txtContainer.innerHTML = `<div">
                                                <h4>${productos.nombre}</h4>
                                                </div>`;
  container.appendChild(txtContainer);

  let priceTxt = document.createElement("div");
  priceTxt.setAttribute("class", "price__Txt");
  priceTxt.innerHTML = `<div">
                                            <p>$ ${productos.precio}</p>
                                            </div>`;
  container.appendChild(priceTxt);

  let btnContainer = document.createElement("div");
  btnContainer.setAttribute("class", "btn__Container");
  btnContainer.innerHTML = ` <div">
                                                    <button>Agregar al carrito</button>
                                                    </div>`;
  container.appendChild(btnContainer);
}

//-----------------------------------------------------------------------------

/*AGREGANDO FUNCIONALIDAD AL BOTÓN DE BUSQUEDA*/

const btnSearch = document.querySelector(".btnSearch");
btnSearch.addEventListener("click", filtrarProductos);

/* function saludo() {
  console.log("Hola");
} */

function filtrarProductos() {
  let buscarProducto = document.getElementById("buscarProducto").value;

  listaProductos.forEach((p) => {
    if (buscarProducto == p.nombre) {
      console.log("El producto existe");
    }
  });
}

const d = document;

d.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    e.target.value = "";
  }
});
