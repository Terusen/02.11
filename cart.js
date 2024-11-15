`use strict`;
updateCartCount();

let productData = JSON.parse(localStorage.getItem("cart")) || {};
let allProductDiv = document.querySelector("products");

for (let key in productData) {
  let product = productData[key];
  let productItem = document.createElement("div");
  // productItem.className = 'product';
  productItem.innerHTML = ` 
    <div class="products">
      <div class="product-info">
        <i class="fa-solid fa-circle-xmark"></i>
        <img src="images/${product.id}.png" alt="Подпись" />
        <div class="product-name">${product.name}</div>
      </div>
      <div class="product-price">${product.price}</div>
      <div class="amount">${product.amount}</div>
      <div class="product-total">${product.price * product.amount}</div>
    </div>`;

  allProductDiv.append(productItem);

  productItem.addEventListener("click", function (event) {
    handleButtons(event, product);
  });
}

function handleButtons(event, product) {
  if (event.target.classList.contains("#iconRemove")) {
    event.currentTarget.remove();
    deleteProductFromCart(product.id);
    updateCartCount();
    return;
  }
  if (event.target.classList.contains("#increase")) {
    productData[product.id].amount +=1;
   updateProduct(event.currentTarget, product.id);
   return
  }
  if (event.target.classList.contains("#decrease")){

  }
}

function updateProduct(elem, id){
  localStorage.setItem("cart", JSON.stringify(productData));
elem.querySelector('.amount').textContent = productData[id].amount


updateCartCount()
}

function deleteProductFromCart(id) {
  delete productData[id];
  localStorage.setItem("cart", JSON.stringify(productData));
}

function updateCartCount() {
  let itemCount = 0;
  for (let key in productData) {
    itemCount += productData[key].amount;
  }
  let cartItem = document.querySelector("#counter");
  cartItem.textContent = itemCount;
}

// updateCartDisplay();
// updateCartCount();
// productItem.addEventListener('click', function(event){

// })
