const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

const ingredient = ingredients.map((element) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = element;
  itemEl.style.listStyle = "none";

  return itemEl;
});

ingredientsList.append(...ingredient);

// for (const ingredient of ingredients) {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = ingredient;++++
//   itemEl.classList.add("item");
//   itemEl.style.listStyle = "none";
//   ingredientsList.appendChild(itemEl);
// }
