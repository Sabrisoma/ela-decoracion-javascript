/* import Swal from "sweetalert2";

export function confirmarEliminarProducto() {
    return Swal.fire({
        title: "Estas seguro de eliminar el producto?",
        text: "No podrás volver atrás",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f07ed3ff",
        cancelButtonColor: "rgba(250, 181, 246, 1)",
        confirmButtonText: "Sí, eliminar!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Eliminado",
                text: "El Producto ha sido Eliminado",
                icon: "success"
            });
        }
    });
}

confirmarEliminarProducto() */

import Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@11/+esm"; //revisar antes de entregar si hay otra forma de resolverlo

export function confirmarAgregarProducto(nombreProducto) {
    return Swal.fire({
        title: "¿Agregar al carrito?",
        text: `¿Desea agregar "${nombreProducto}" al carrito?`,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sí, agregar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#f07ed3ff",
        cancelButtonColor:"#f07ed3ff",
    });
}

export async function confirmarEliminarProducto(nombreProducto) {
  const result = await Swal.fire({
    title: "¿Estás seguro de eliminar el producto?",
    text: `No podrás volver atrás si eliminás "${nombreProducto}"`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#f07ed3ff",
    cancelButtonColor: "rgba(250, 181, 246, 1)",
    confirmButtonText: "Sí, eliminar!",
    cancelButtonText: "Cancelar"
  });

  if (result.isConfirmed) {
    await Swal.fire({
      title: "Eliminado",
      text: "El producto ha sido eliminado con éxito",
      icon: "success"
    });
  }
  return result;
}

export function mostrarToastExito(mensaje) {
    Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: mensaje,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    })
}

export function mostrarToastError(mensaje) {
    Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: mensaje,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    })
}