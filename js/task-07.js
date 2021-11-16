const inputSize = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

// console.dir(inputSize);

inputSize.setAttribute("value", 16);

inputSize.addEventListener("input", () => {
  const size = inputSize.value;
  inputText.style.fontSize = size + "px";
});
