var carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    var listaCarrito = document.getElementById('elementosCarrito');
    var totalCarrito = document.getElementById('totalCarrito');

    while (listaCarrito.firstChild) {
        listaCarrito.firstChild.remove();
    }

    var total = 0;
    for (var i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }

    for (var i = 0; i < carrito.length; i++) {
        var lista = document.createElement('li');
        lista.textContent = carrito[i].nombre + ': ' + carrito[i].precio + ' USD';
        listaCarrito.appendChild(lista);
    }

    totalCarrito.textContent = total;
}
