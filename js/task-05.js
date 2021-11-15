const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// console.log(nameInput);
// console.log(nameOutput);

const onInputChange = () => {
  return nameInput.value === ""
    ? (nameOutput.textContent = "Anonymous")
    : (nameOutput.textContent = nameInput.value);
};

nameInput.addEventListener("input", onInputChange);

// nameInput.addEventListener("input", onInputNameChange);
// function onInputNameChange() {
//   if (nameInput.value === "") {
//     nameOutput.textContent = "Anonymous";
//   } else {
//     nameOutput.textContent = nameInput.value;
//   }
// }
