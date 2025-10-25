import { manejarAgregarAlCarrito } from "./carrito.js";

async function obtenerListaProductos() {
    return matesJson;
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

    const botonComprar=tarjeta.querySelector(".btn-comprar");

    botonComprar.addEventListener("click", function(){
        manejarAgregarAlCarrito(producto.id, producto.title, producto.price);
    });

    div.appendChild(tarjeta);

}


const matesJson = [
  {
    "id": 1,
    "title": "Mate Emilia",
    "price": "18.500",
    "description": "descripcion mate 1",
    "image": "./imagenes/emilia.jpeg"
  },
  {
    "id": 2,
    "title": "Combo Agnes",
    "price": "25.200",
    "description": "description mate 2",
    "image": "./imagenes/agnes.jpeg"
  },
    {
    "id": 3,
    "title": "Agenda Ela",
    "price": "30.000",
    "description": "description mate 2",
    "image": "./imagenes/agendaela.png"
  },
    {
    "id": 4,
    "title": "Agenda Blanca",
    "price": "30.000",
    "description": "description mate 2",
    "image": "./imagenes/agendablanca.png"
  },
    {
    "id": 5,
    "title": "Combo Ela",
    "price": "18.500",
    "description": "description mate 2",
    "image": "./imagenes/comboela.jpeg"
  },
    {
    "id": 6,
    "title": "Mate Gardenia",
    "price": "16.000",
    "description": "description mate 2",
    "image": "./imagenes/mategardenia.jpeg"
  },
]


