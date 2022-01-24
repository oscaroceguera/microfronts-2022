import Chance from "chance";

const chance = new Chance();

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = chance.animal();

    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Context #1
// we are running this file in development in isolation
// we are usiing our local index.html file
// wich DEFNITELY has an element with an id of 'dev-products'
// we want to immediately render our app  into thet element
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  if (el) {
    mount(el);
  }
}

// Context #2
// We  aare running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with han id of -dev-products'
//  WE DONT WANT try to immediatetly render the app

export { mount };
