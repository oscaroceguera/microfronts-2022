import Chance from "chance";

const chance = new Chance();

let products = "";

for (let i = 0; i < 5; i++) {
  const name = chance.animal();

  products += `<div>${name}</div>`;
}

document.querySelector("#dev-products").innerHTML = products;
