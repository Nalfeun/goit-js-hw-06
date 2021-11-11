const сategoriesEl = document.querySelector("#categories");
// console.log(сategoriesEl);
console.log(`Number of categories: ${сategoriesEl.children.length}`);

const numOfCategories = document
  .querySelectorAll(".item")
  .forEach((elements) => {
    console.log("Category: ", elements.querySelector("h2").textContent);
    console.log("Elements: ", elements.querySelectorAll("li").length);
  });
