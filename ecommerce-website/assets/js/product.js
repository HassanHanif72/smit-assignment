const listing = document.getElementById('product-listing');


const fetchProducts = async () => {
  try {
    const listingResponse = await fetch('https://fakestoreapi.com/products/');
    if (!listingResponse.ok) {
      throw new Error("Product Failed");
    }
    const listingProducts = await listingResponse.json();
    showProducts(listingProducts.slice(0, 4));
    // console.log(listingProducts)
  } catch (error) {
    console.error("Error", error);
    listing.innerHTML = "Please Try Again";
  }
}

const showProducts = (listingProducts) => {
  listing.innerHTML = listingProducts.map((product) => `
      <div class="col-xl-3 col-lg-4 col-md-6">
        <a href="product-detail.html?id=${product.id}" class="text-decoration-none">
          <div class="listing-product">
            <img src="${product.image}" alt="${product.title}">
            <span>${product.category}</span>
            <h3 title="${product.title}">${product.title.length > 18 ? product.title.slice(0, 18) + '...' : product.title}</h3>
            <p>$${product.price}</p>
          </div>
        </a>
      </div>
  `).join("");
}

fetchProducts();



// Sticky header

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

// end Sticky header



