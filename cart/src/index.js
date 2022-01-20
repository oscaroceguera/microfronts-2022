import Chance from "chance";

const chance = new Chance();

const cartText = `<div>You have ${chance.integer()} items in your cart</div>`;

document.querySelector("#dev-cart").innerHTML = cartText;
