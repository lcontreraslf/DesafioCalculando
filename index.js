
const precioBase = 400000;
const precioInicialSpan = document.querySelector(".precio-inicial");
const btnAumentar = document.querySelector(".aumentarCantidad");
const btnDisminuir = document.querySelector(".disminuirCantidad");
const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");

precioInicialSpan.innerHTML = precioBase;

let cantidad = 0;
let valorTotal = 0;

function actualizarTotal() {
  valorTotal = cantidad * precioBase;
  valorTotalSpan.innerHTML = valorTotal;
}

function aumentarCantidad() {
  cantidad++;
  cantidadSpan.innerHTML = cantidad;
  actualizarTotal();
}
function disminuirCantidad() {
  if (cantidad > 0) {
    cantidad--;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
  }
}
actualizarTotal();
