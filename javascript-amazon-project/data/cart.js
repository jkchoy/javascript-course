export const cart = [];
// added text="module" to amazon.html scrpt: <script type="module" src="scripts/amazon.js"></script>
// added import { cart } from '../data/cart.js'; to amazon.js

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quanity += 1;
  } else {
    cart.push({
      productId: productId,
      quanity: 1
    });
  }
}