import { cart } from "../data/cart";

cart.forEach((cartItem) => {
    const productId = cart.productId;

  `
  <div class="cart-item-container">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="images/products/athletic-cotton-socks-6-pairs.jpg">

              <div class="cart-item-details">
                <div class="product-name">
                  Black and Gray Athletic Cotton Socks - 6 Pairs
                </div>
                <div class="product-price">
                  $10.90
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">2</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary">
                    Delete
                  </span>
                </div>
              </div>

  `
})