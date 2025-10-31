// CART SYSTEM
let productItemsBasket = [];
let total = 0;

function addItemBasket(name, price){
    const existing = productItemsBasket.find(item=>item.name===name);
    if(existing){ existing.quantity++; } 
    else{ productItemsBasket.push({name, price:parseFloat(price), quantity:1}); }
    updateCart();
}

function removeFromCart(name){
    productItemsBasket = productItemsBasket.filter(item=>item.name!==name);
    updateCart();
}

  function updateCart() {
    const productItems = document.getElementById("cartItemsList");
    const productItemsTotal = document.getElementById("cardTotalPrice");
    if (!productItems || !productItemsTotal) return; // Skip if not on cart page

    productItems.innerHTML = "";
    total = 0;

    productItemsBasket.forEach((product) => {
      const li = document.createElement("li");
      li.textContent = `${product.name} - £${product.price} x ${product.quantity}`;
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "X";
      removeBtn.onclick = () => removeFromCart(product.name);
      li.appendChild(removeBtn);
      productItems.appendChild(li);
      total += product.price * product.quantity;
    });
    productItemsTotal.textContent = total.toFixed(2);
  }

document.getElementById('buy-now').addEventListener('click', ()=>{
    if(productItemsBasket.length===0){ alert("Your cart is empty!"); return; }
    localStorage.setItem('cart', JSON.stringify(productItemsBasket));
    window.location.href='pages/buyPage.html';
});