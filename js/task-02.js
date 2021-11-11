const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
// console.log(ingredienEl);

for (const ingredient of ingredients) {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");
  itemEl.style.listStyle = "none";
  ingredientsList.appendChild(itemEl);
}

// console.log(ingredientsList);
