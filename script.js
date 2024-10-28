let cart = [];

function addToCart(product) {
    cart.push(product);
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.innerHTML += ` <button onclick="removeFromCart(${index})">Eliminar</button>`;
        cartItems.appendChild(listItem);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("El carrito está vacío.");
    } else {
        alert("Compra finalizada. Gracias por su compra!");
        cart = [];
        displayCart();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Este código se ejecutará cuando el documento esté completamente cargado
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#0056b3';
        });
        link.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
        });
    });
});
