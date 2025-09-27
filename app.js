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

const form = document.getElementById("productEla");
const contenedor = document.getElementById("contenedorDeProductos");
let productId = 1;
let products = [];


form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.getElementById("ProductNombre").value;
    const precio = document.getElementById("ProductPrecio").value;
    const descripcion = document.getElementById("ProductDescripcion").value;
    const stock = document.getElementById("ProductStock").value;


    const producto = {
        id: productId++,
        nombre: nombre,
        precio: precio,
        descripcion: descripcion,
        stock: stock,
    }

    products.push(producto)
    renderProduct (producto);
    form.reset();
});

//Renderizado de productos//

function renderProduct(producto) {
    const productDiv = document.createElement("div");
    productDiv.dataset.id = producto.id;


    productDiv.innerHTML = `
    <div>
    <p><strong>${producto.nombre}</strong> 
    <p> ${producto.descripcion}</p>
    <p> $ ${producto.precio} </p>
    <p> ${producto.stock}</p>
    <button>Eliminar</button>
    </div>
    `;

    productDiv.querySelector("button").addEventListener("click", () => {
        deleteProducto(producto.id);
    });
    contenedorDeProductos.appendChild(productDiv);
}

function deleteProducto(id) {
    products = products.filter((producto) => producto.id != id);

    const productDiv = contenedorDeProductos.querySelector(`[data-id= "${id}"]`)
    if (productDiv) {
        productDiv.remove()
        alert("Producto Eliminado Correctamente del Stock");
    }
}
