const carrito = document.querySelector('#carrito');
const botones = document.querySelectorAll('.card .btn');
const fragment = document.createDocumentFragment();
const template = document.querySelector('#template');

//carrito vacio
const carritoObjeto = {};

// SEGUNDO funcion para meter los items al carrito
const agregarAlCarrito = (e) => {
    //creo objeto del producto con info traida del btn
    const producto = {
        titulo: e.target.dataset.item,
        cantidad: 1
    }
    // pregunto si el producto existe en el carrito y le sumo la cantidad al objeto
    if(carritoObjeto.hasOwnProperty(producto.titulo)){
        producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1;
    }

    carritoObjeto[producto.titulo] = producto;
    pintarCarrito()
};


// TERCERO agrego carrito al Html

const pintarCarrito = (producto) => {
    //limpio carrito antes de cada vuelta
    carrito.textContent = '';
    // hago clon del template y agrego la info del objeto producto
    Object.values(carritoObjeto).forEach(item => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad;

        fragment.appendChild(clone);
    })
    carrito.appendChild(fragment);
}


// PRIMERO capturo los botones y disparo funcion agregar al carrito
botones.forEach((btn) => btn.addEventListener('click',agregarAlCarrito));