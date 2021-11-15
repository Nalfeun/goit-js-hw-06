let counterValue = 0;

const minusBtn = document.querySelector('button[data-action="decrement"]');
const addBtn = document.querySelector('button[data-action="increment"]');
const changCountVal = document.querySelector("#value");

addBtn.addEventListener("click", () => {
  counterValue += 1;
  return (changCountVal.textContent = counterValue);
});

minusBtn.addEventListener("click", () => {
  counterValue -= 1;
  return (changCountVal.textContent = counterValue);
});
