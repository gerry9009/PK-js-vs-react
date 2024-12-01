// const API = "https://dummyjson.com/products?limit=194";
const API = "https://dummyjson.com/products?limit=10";

const $productsElement = document.querySelector("#products");
const $cartElement = document.querySelector("#cart");

//* Változók
let productsList = [];
let cart = [];

//* funkciók
async function fetchData(API) {
  // fetch().then().then()
  const response = await fetch(API);
  const data = await response.json();
  const products = data.products;

  renderProducts(products);
  productsList = products;
}

//* renderelésért felelős függvények
function createProductElement(product) {
  const wrapper = document.createElement("div");

  wrapper.classList = "product";

  wrapper.innerHTML = `
      <h2>${product.title}</h2>
      <img src="${product.thumbnail}" alt="${product.title}" />
      <p>$ ${product.price}</p>
      <p>${product.description}</p>
      <p>${product.stock} item(s) left</p>
      <button>Add to cart</button>
    `;

  const btn = wrapper.querySelector("button");

  btn.addEventListener("click", () => {
    productsList = productsList.map((item) => {
      if (product.id === item.id) {
        if (item.stock > 0) {
          item.stock = item.stock - 1;

          // hozzáadjuk a cart-hoz
          cart.push(item);
        }
      }

      return item;
    });

    renderProducts(productsList);
    renderCart();
  });

  return wrapper;
}

function renderProducts(productsList) {
  $productsElement.innerHTML = "";

  for (let product of productsList) {
    const productElement = createProductElement(product);

    $productsElement.appendChild(productElement);
  }
}

function renderCart() {
  const cartHTML = cart.map((item) => `<p>${item.title}</p>`).join("");
  $cartElement.innerHTML = cartHTML;
}

//* eseményfigyelők

//* az alkalmazás betöltéséért felelős függvények meghívása

fetchData(API);
