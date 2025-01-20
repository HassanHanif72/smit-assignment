const cartSection = document.getElementById('cartSection');


const fetchCartData = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        cartSection.innerHTML = "<p>Empty Cart</p>";

    }
    else {
        displayCart(cart);
    }
}

const displayCart = (cart) => {
    cartSection.innerHTML = cart.map((items) => `
        <div class="cart-info">
                <div class="id"><span>${items.id}</span></div>
                <div class="product-image"><img src="${items.image}" alt="" height="100"/></div>
                <div class="title"><span>${items.title}</span></div>
                <div class="price"><span>$ ${items.price}</span></div>
        </div>
   `).join("");
}

fetchCartData();
// localStorage.clear();