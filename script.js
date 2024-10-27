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
        toggleCart();
    }
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'flex' ? 'none' : 'flex';
}

function filterCategory(category) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        product.style.display = product.getAttribute('data-category') === category ? 'inline-block' : 'none';
    });
}

function searchProducts(query) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        product.style.display = productName.includes(query.toLowerCase()) ? 'inline-block' : 'none';
    });
}
