`use strict`;

let productsJSON = `{
    "allProducts": [
        {
            "name": "Bag Black",
            "price": 1200,
            "id": "bag_black"
        },
        {
            "name": "Bag Brown",
            "price": 800,
            "id": "bag_brown"
        },
                    {
            "name": "Bag White",
            "price": 1000,
            "id": "bag_white"
        },
                    {
            "name": "Bag Red",
            "price": 800,
            "id": "bag_red"
        },
                    {
            "name": "Bag Blue",
            "price": 800,
            "id": "bag_gray"
        },
                    {
            "name": "Bag Green",
            "price": 850,
            "id": "bag_green"
        }
    ]
  }`;

let products = JSON.parse(productsJSON)["allProducts"];

// вызвать фун корз+обнов подпись

for (let product of products) {
  let divProduct = document.createElement("div");
  divProduct.className = "divProduct";
  container.append(divProduct);

  let imgProduct = document.createElement("img");
  imgProduct.src = `images/${product.id}.png`;
  imgProduct.alt = `${product.name}`;
  imgProduct.className = "imgProduct";

  let nameProduct = document.createElement("p");
  nameProduct.textContent = `${product.name}`;

  let price = document.createElement("p");
  price.textContent = product.price + `${"$"}`;

  let addButton = document.createElement("div");
  addButton.className = "addButton";
  addButton.textContent = "В корзину";

  divProduct.append(imgProduct, nameProduct, price);
  divProduct.append(addButton);
}

divProduct.onclick = function (product) {
  addToCard(product);
};

function addToCard(product) {
  alert(product.id);



  // for (let product of divProduct) {
  //   // clicked.id == product.id;
  //   alert(product.id);
  //   // return;
  // }
}

// }

//   divProduct.onclick = function(){
//   for (let product of products){
//     clicked.id == product.id;
//   alert(product.id)
// return;}
//   }

// divProduct.onclick = function(){
//   for (let product of products){
//     clicked.divProduct == product.id;
//   alert(product.id)
// return;}
//   }

// function addToCard(divProduct)

//
//function updateCartCount(){
// const cart = JSON.parse(localStorage.getItem("cart")) || {};

// for (let key in cart)
// cart[key].amound

// }


      // cartItem.textContent = +cartItem.textContent + 1;
      // document.querySelector(".cart span").textContent = itemCount;

      
// function updateCartCount() {
//   const cart = JSON.parse(localStorage.getItem("cart")) || {};
//   let itemCount = 0;
//   for (let key in cart) {
//     itemCount += card[key].amount;
//   }

//   cartItem.textContent = itemCount;
//   document.querySelector(".cart span").textContent = itemCount;
// }


// function addToCart(product) {
//   let cart = JSON.parse(localStorage.getItem("cart")) || {};
//   if (cart[product.id]) {
//     cart[product.id].amount += 1;
//   } else {
//     cart[product.id] = { ...product, amount: 1 };
//   }
//   localStorage.setItem("cart", JSON.stringify(cart));
//   // localStorage.setItem("cart", JSON.stringify(cart));
//   updateCartCount();


// cart cart cart crar CART

// let productDiv = document.createElement('div'); *

// productItem.className = 'product-item'