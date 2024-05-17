function addToCart(product, price, imageUrl) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ product, price, imageUrl });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product} has been added to your cart!`);
}
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    navToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
});
