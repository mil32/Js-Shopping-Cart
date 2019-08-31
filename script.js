let cart = [];

const prods = [
  {
    id: 1,
    name: "Producto 1",
    description: "Descripcion del producto 1",
    price: "145"
  },
  {
    id: 7,
    name: "Producto 11",
    description: "Descripcion del producto 11",
    price: "245"
  },
  {
    id: 2,
    name: "Producto 2",
    description: "Descripcion del producto 2",
    price: "195"
  }
];

function fillProds() {
  prods.forEach((pr, i) => {
    let card = `<article class="card"><div class="cardImage"></div><div class="cardData"><h3>${pr.name}</h3><p>${pr.description}</p><div class="cardFooter"><div class="price">$ ${pr.price}</div><button type="button" class="btn btn-outline-success" onclick="add(${i})">Add</button></div></div></article>`;
    let doc = document.getElementById("PrGrid");
    doc.insertAdjacentHTML("beforeend", card);
  });

  if (cart.length < 1) {
    cartIsEmpty();
  }
}

function add(id) {
  const pr = prods[id];
  cartHasProds();

  const myElement = `<div id="prod_${pr.id}" class="cartProd"><button type="button" class="btn btn-outline-danger btn-sm" onclick="erase(${pr.id})">X</button><span class="cartProdTitle">${pr.name}</span></div>`;

  cart.push(pr);
  document
    .getElementById("ShopItems")
    .insertAdjacentHTML("beforeend", myElement);
}

function cartIsEmpty() {
  const myElement = `<div id="emptyCart"><h5>Carrito Vacio</h5></div>`;
  document
    .getElementById("ShopItems")
    .insertAdjacentHTML("beforeend", myElement);
}

function eraseFromCart(id) {
  cart = cart.filter(pr => pr.id != id);
}

function cartHasProds() {
  let x = document.getElementById("emptyCart");
  if (x) {
    x.parentElement.removeChild(x);
  }
}

function erase(id) {
  let eraseMe = document.getElementById("prod_" + id);
  eraseFromCart(id);
  document.getElementById("ShopItems").removeChild(eraseMe);
  if (cart.length < 1) {
    cartIsEmpty();
  }
}

fillProds();
