import { manejarAgregarAlCarrito } from "./carrito.js";

async function obtenerListaProductos() {
    const response = await fetch("mates.json");
    const data = await response.json();

    return data;
}


export async function mostrarCardsProductos() {
    try {
        const productoList = await obtenerListaProductos();

        productoList.forEach((producto) => {
            crearTarjetaProducto(producto);

        });
    } catch (error) {
        console.log(error);

    }

}

function crearTarjetaProducto(producto) {
    const div = document.getElementById("output");
    const tarjeta = document.createElement("div");

    tarjeta.innerHTML = `
    <img src="${producto.image}" alt="${producto.title}" class ="product-image">
    <h4>${producto.title}</h4>
    <p class="product-price">$${producto.price} </p>
    <button class= "btn-comprar"> Agregar </button>
    `;

    const botonComprar = tarjeta.querySelector(".btn-comprar");

    botonComprar.addEventListener("click", function () {
        manejarAgregarAlCarrito(producto.id, producto.title, producto.price);
    });

    div.appendChild(tarjeta);

}
