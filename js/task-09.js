function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBgColorBtn = document.querySelector(".change-color");
const changeBgColorTxt = document.querySelector(".color");

changeBgColorBtn.addEventListener("click", onChangeBgColor);

function onChangeBgColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = `${color}`;
  changeBgColorTxt.textContent = `${color}`;
}
