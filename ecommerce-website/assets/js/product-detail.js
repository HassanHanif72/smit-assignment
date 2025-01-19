const listing = document.getElementById('product-listing');

const getProductId = () => {
    const paramId = new URLSearchParams(window.location.search);
    return paramId.get("id");
}

// console.log(getProductId());

const fetchProductsDetails = async (id) => {
    try {
        const listingResponse = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!listingResponse.ok) {
            throw new Error("Product Failed");
        }
        const listingProducts = await listingResponse.json();
        showProductDetails(listingProducts);
        // console.log(listingProducts)
    } catch (error) {
        console.error("Error", error);
        listing.innerHTML = "Product Detail Failed";
    }
}

const showProductDetails = (listingProducts) => {
    listing.innerHTML = `
      <div class="col-xl-5 col-lg-5 col-md-5">
          <div class="product-image">
            <img src="${listingProducts.image}" alt="${listingProducts.title}" class="w-100">
          </div>
      </div>
      <div class="col-xl-7 col-lg-7 col-md-7">
          <div class="listing-product">
            <h3 title="${listingProducts.title}">${listingProducts.title}</h3>
            <span>$ ${listingProducts.price}</span>
            <p>${listingProducts.description}</p>
            <button class="btn btn-theme" id="add-to-cart" data-id="${listingProducts.id}">Add to Cart</button>
          </div>
      </div>
  `;
  document.getElementById("add-to-cart").addEventListener("click", () => {
    addToCart(listingProducts);
  });
}

const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} has been added to your cart!`);
  };

const productId = getProductId();
// console.log(fetchProductsDetails(productId));
if (productId) {
    fetchProductsDetails(productId);
} else {
    listing.innerHTML = "<p>Invalid Product ID.</p>";
}