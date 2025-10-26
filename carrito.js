import {
    confirmarAgregarProducto,
    confirmarEliminarProducto,
    mostrarToastExito
} from "./notificaciones.js";

function agregarAlCarrito(title, precio) {
    const divCarrito = document.getElementById("carrito");
    const itemCarrito = document.createElement("div");

    itemCarrito.innerHTML = `
    <span class="item-info" data-precio="${precio}">
      <strong>${title}</strong> - $${precio}
    </span>
    <button class="btn-eliminar">Eliminar</button>
  `;

    const botonEliminar = itemCarrito.querySelector(".btn-eliminar");
    botonEliminar.addEventListener("click", function () {
        manejarEliminarDelCarrito(itemCarrito, title);
    });

    divCarrito.appendChild(itemCarrito);
    const totalCarrito = document.getElementById("totalCarrito");
    totalCarrito.textContent = calcularTotalCarrito();
}

export async function manejarAgregarAlCarrito(id, title, precio) {
    const resultado = await confirmarAgregarProducto(title);
    if (resultado.isConfirmed) {
        agregarAlCarrito(title, precio);
        mostrarToastExito("Producto agregado al carrito");
    }
}

async function manejarEliminarDelCarrito(itemCarrito, title) {
    const resultado = await confirmarEliminarProducto(title);
    if (resultado.isConfirmed) {
        itemCarrito.remove();
        const totalCarrito = document.getElementById("totalCarrito");
        totalCarrito.textContent = calcularTotalCarrito();
        mostrarToastExito("Producto eliminado con éxito");
    }
}

function calcularTotalCarrito() {
    const items = document.querySelectorAll('.item-info');
    let total = 0;

    items.forEach(item => {
        total += Number(item.dataset.precio);
    });
    return total;
}
