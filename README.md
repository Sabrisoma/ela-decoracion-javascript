# Ela Decoracion — Proyecto Final (JavaScript)

Resumen
-------
Mi propia web personal de mi emprendimiento "Ela Decoracion". Dedicada a la venta de mates e insumos materos y accesorios (mates, agendas, combos) creada con HTML, CSS y JavaScript modular. Presenta un listado de productos desde `mates.json`, agregado y eliminación de ítems en un carrito con confirmaciones y toasts usando SweetAlert2, y diseño responsivo con estilos personalizados y Bootstrap.

Estructura del proyecto
-----------------------
- [index.html](index.html) — Página principal (carrusel, sección de productos y carrito).
- [styles.css](styles.css) — Hoja de estilos principal.
- [app.js](app.js) — Punto de entrada; inicializa la carga de productos.
- [productos.js](productos.js) — Lógica de obtención y renderizado de productos.
- [carrito.js](carrito.js) — Lógica del carrito (agregar, eliminar, total).
- [notificaciones.js](notificaciones.js) — Wrappers de SweetAlert2 para confirmaciones y toasts.
- [mates.json](mates.json) — Datos de productos.
- [package.json](package.json) — Dependencias (SweetAlert2).
- [README.md](README.md) — Este archivo.
- carpeta `imagenes/` — Recursos visuales usados en las tarjetas.

Cómo ejecutar (modo desarrollo)
-------------------------------
1. Servir la carpeta del proyecto mediante un servidor local (por ejemplo, Live Server de VSCode o `npx serve`) para permitir fetch de `mates.json`.
   - Sugerencia: abrir [index.html](index.html) con Live Server.
2. Opcional: instalar dependencias si deseas manejar SweetAlert2 por npm:
   ```sh
   npm install
   ```
3. Abrir la app en el navegador. `app.js` inicializa la carga: ver [`app.js`](app.js).

Flujo y uso
-----------
- Al cargar la página, [`mostrarCardsProductos`](productos.js) lee [mates.json](mates.json) y crea tarjetas dinámicas con imagen, título, descripción y precio.
  - Ver [`mostrarCardsProductos`](productos.js) en [productos.js](productos.js).
- Pulsar "Agregar" en una tarjeta dispara [`manejarAgregarAlCarrito`](carrito.js) que solicita confirmación via [`confirmarAgregarProducto`](notificaciones.js) y luego añade el ítem al carrito.
  - Ver [`manejarAgregarAlCarrito`](carrito.js) en [carrito.js](carrito.js).
  - Ver [`confirmarAgregarProducto`](notificaciones.js) en [notificaciones.js](notificaciones.js).
- Al eliminar un ítem, [`manejarEliminarDelCarrito`](carrito.js) solicita confirmación via [`confirmarEliminarProducto`](notificaciones.js) y actualiza el total.
  - Ver [`manejarEliminarDelCarrito`](carrito.js) y [`calcularTotalCarrito`](carrito.js) en [carrito.js](carrito.js).
- Los toasts de éxito/error son mostrados con [`mostrarToastExito`](notificaciones.js) / [`mostrarToastError`](notificaciones.js).
  - Ver [notificaciones.js](notificaciones.js).

Puntos técnicos y buenas prácticas
---------------------------------
- Los productos se cargan con fetch desde [mates.json](mates.json) (ruta relativa). Asegúrate de servir el proyecto sobre HTTP(S) para evitar bloqueos por CORS/file://.
- En [mates.json](mates.json) los precios están como strings. Es recomendable convertirlos a número al calcular totales en [`calcularTotalCarrito`](carrito.js).
- Las importaciones usan módulos ES (`type="module"` en [index.html](index.html)); mantener estructura de archivos relativa.
- SweetAlert2 se utiliza desde CDN/ESM en [notificaciones.js](notificaciones.js). Para producción considera instalarlo vía npm y usar bundler.
- Estilos globales y componentes visuales centralizados en [styles.css](styles.css). Revisa clases como `.product-card`, `.btn-comprar`, `.carrito-item` para consistencia visual y accesibilidad.

Archivos y funciones clave (referencias)
---------------------------------------
- Archivo: [app.js](app.js) — función de arranque: [`mostrarCardsProductos`](productos.js)
- Archivo: [productos.js](productos.js) — export: [`mostrarCardsProductos`](productos.js); función interna: `crearTarjetaProducto`
- Archivo: [carrito.js](carrito.js) — export: [`manejarAgregarAlCarrito`](carrito.js); funciones internas: [`agregarAlCarrito`](carrito.js), [`manejarEliminarDelCarrito`](carrito.js), [`calcularTotalCarrito`](carrito.js)
- Archivo: [notificaciones.js](notificaciones.js) — exports: [`confirmarAgregarProducto`](notificaciones.js), [`confirmarEliminarProducto`](notificaciones.js), [`mostrarToastExito`](notificaciones.js), [`mostrarToastError`](notificaciones.js)
- Datos: [mates.json](mates.json)
- Estilos: [styles.css](styles.css)


