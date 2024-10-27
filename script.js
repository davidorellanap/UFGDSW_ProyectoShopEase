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
        alert("Compra finalizada.");
        cart = [];
        displayCart();
    }
}