const textInput = document.querySelector("#validation-input[data-length]");

// console.log(textInput);
// textInput.addEventListener("focus", onInputFocus);
// textInput.addEventListener("blur", onInputBlur);
// function onInputFocus() {
//   console.log("Input received focus - focus ");
// }
// function onInputBlur() {
//   console.log("Input lost focus - blur");
// }

const addText = (event) => {
  if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
};

textInput.addEventListener("blur", addText);
