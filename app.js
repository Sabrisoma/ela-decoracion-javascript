// // Lista de Productos// ENTREGA NRO 1

// const productos = [
//     { id: 1, nombre: "Agenda 2025 Blanca", precio: 21700 },
//     { id: 2, nombre: "Agenda 2025 Ela", precio: 21700 },
//     { id: 3, nombre: "Combo Ela", precio: 16800 },
//     { id: 4, nombre: "Mate Campo Lola", precio: 23600 },
//     { id: 5, nombre: "Vela Horus", precio: 20000 },
//     { id: 6, nombre: "Mate Gardenia", precio: 17000 },
//     { id: 7, nombre: "Mate Emilia", precio: 14000 },
//     { id: 8, nombre: "Combo Tina", precio: 16800 },
// ]

// // carrito vacio//
// let carrito = []

// // funcion para mostrar productos disponibles//

// function mostrarProductos() {
//     console.log("Lista de productos disponibles");
//     for (let i = 0; i < productos.length; i++) {
//         console.log(productos[i].id + ":" + productos[i].nombre + "$" + productos[i].precio + "\n");
//     }
// }

// function buscarProducto(producto) {
//     for (let i = 0; i < productos.length; i++) {
//         if (productos[i].id == producto) {
//             return productos[i].nombre
//         }
//     }
// }

// mostrarProductos();
// let productoElegido = prompt("Elegi un producto para agregar al carrito");
// productoParaAgregarCarrito = buscarProducto(productoElegido)
 

// acepto = confirm ("Realmente quieres agregar el producto " + productoParaAgregarCarrito + "?");

// if (acepto == true) {
//     carrito.push(productoParaAgregarCarrito);
//     console.log("Tu carrito contiene " + carrito);
// } else {
//     console.log("vuelve a elegir un producto");
// } 


// ENTREGA NRO 2 // 

const form= document.getElementById("productela");
const contenedor=document.getElementById ("contenedordeproductos");


form.addEventListener("submit", ()=>{
    const nombre = document.getElementById("Productname").value;
    const precio = document.getElementById("Productprice").value;
    const descripcion = document.getElementById("Productdescription").value;

});
