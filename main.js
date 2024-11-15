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
            "name": "Bag Gray",
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
let cart = JSON.parse(localStorage.getItem("cart")) || {};


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

  divProduct.append(imgProduct, nameProduct, price, addButton);

  addButton.onclick = function () {
    addToCart(product);
  };

  function addToCart(product) {
    // let cart = JSON.parse(localStorage.getItem("cart")) || {};
    if (cart[product.id]) {
      cart[product.id].amount += 1;
    } else {
      cart[product.id] = { ...product, amount: 1 };
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  } 
     function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem("cart")) || {};

      let itemCount = 0;
      for (const key in cart) {
        itemCount += cart[key].amount;
      }
      let cartItem = document.querySelector("#counter");
      cartItem.textContent = itemCount;
    }
    updateCartCount();
    // function updateCartCount() {
    //   // const carts = JSON.parse(localStorage.getItem("cart")) || {};

    //   let itemCount = 0;
    //   for (const key in carts) {
    //     itemCount += cart[key].amount;
    //   }
    //   let cartItem = document.querySelector("#counter");
    //   cartItem.textContent = itemCount;
    // }
}




// function updateCartCount() {
//   const cart = JSON.parse(localStorage.getItem("cart")) || {};
//   let itemCount = 0;
//   for (let key in cart) {
//     itemCount += cart[key].amount;
//   }
//   let cartItem = document.querySelector("#counter");
//   cartItem.textContent = itemCount;
// }
  // container.onclick = function (product) {
  //   // alert(product.id);
  //   addToCart(product);
  // };