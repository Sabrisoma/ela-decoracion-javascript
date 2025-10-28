import Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@11/+esm"; 

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