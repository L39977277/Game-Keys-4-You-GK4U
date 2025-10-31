// buy.js
// Load cart from localStorage
let productItems = JSON.parse(localStorage.getItem('cart')) || [];
let cartTotalValue = 0;

displayBuyPageCart();

function displayBuyPageCart() {
  const cartList = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  const cartCount = document.getElementById('cartCount');
  cartList.innerHTML = '';
  cartTotalValue = 0;

  if (productItems.length === 0) {
    cartList.innerHTML = '<li>Your cart is empty.</li>';
  } else {
    productItems.forEach(product => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span style="font-weight: bold;">${product.name} x ${product.quantity}</span>
        <span>£${(product.price * product.quantity).toFixed(2)}</span>
      `;
      cartList.appendChild(listItem);
      cartTotalValue += product.price * product.quantity;
    });
  }

  cartTotal.textContent = cartTotalValue.toFixed(2);
  cartCount.textContent = productItems.length;
}

// Modal Logic
const modal = document.getElementById('myModal');
const closeButton = document.querySelector('.closeBtn');
const buyButton = document.querySelector('.btnBuy');

buyButton.addEventListener('click', function (event) {
  event.preventDefault();

  // Check if email is filled
  if (document.getElementById('email').value.length === 0) {
    alert('Please enter your email before purchasing.');
    return;
  }

  // SHOW Modal (Games, Thank you!)
  const purchasedGames = productItems.map(p => `${p.name} (x${p.quantity})`).join(', ');
  const thankYouMessage = document.getElementById('thankYouMessage');
  thankYouMessage.innerHTML = `
    <h3 style="text-decoration: underline;font-size; 12px;"> Game Keys 4 You | GK4U </h3>
    <p>Thank you for your purchase!</p>
    <p><strong>Games Bought:</strong> ${purchasedGames || 'No games listed'}</p>
    <p><strong>Confirmation will be sent to:</strong> ${document.getElementById('email').value}</p>
  `;

  modal.style.display = 'block';

  // Clear cart
  localStorage.removeItem('cart');
  productItems = [];
  displayBuyPageCart();
});

// Close modal
closeButton.onclick = function () {
  modal.style.display = 'none';
};

// Close modal on click outside
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};