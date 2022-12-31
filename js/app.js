let products = new Array();
products[0] = "../assets/img/products/f1.jpg";
products[1] = "../assets/img/products/f2.jpg";
products[2] = "../assets/img/products/f3.jpg";
products[3] = "../assets/img/products/f4.jpg";
products[4] = "../assets/img/products/f5.jpg";
products[5] = "../assets/img/products/f6.jpg";
products[6] = "../assets/img/products/f7.jpg";
products[7] = "../assets/img/products/f8.jpg";

const renderProducts = () => {
  let div = "";
  products.forEach((el) => {
    div = div += `
        <div class="product">
          <img
            src="${el}"
            alt="product"
            class="product-img"
          />
          <div class="product-des">
            <span class="product-brand">brand</span>
            <h5 class="product-title">Flower colorfull T-Shirt</h5>
            <div class="product-stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4 class="product-price">$78</h4>
          </div>
          <a href="#" class="product_cart-link">
            <i class="fas fa-shopping-cart cart"></i>
          </a>
        </div>
    `;
    document.getElementById("product-container").innerHTML = div;
  });
};

document.addEventListener("DOMContentLoaded", renderProducts);
