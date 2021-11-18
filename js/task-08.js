const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const emailVal = event.currentTarget.elements.email.value;
  const passwordVal = event.currentTarget.elements.password.value;

  const formObj = { emailVal, passwordVal };

  if (emailVal === "" || passwordVal === "") {
    return alert("Fill in all the fields!");
  } else {
    console.log(formObj);
  }
  event.currentTarget.reset();
}

// const form = document.querySelector(".login-form");

// form.addEventListener("submit", onSubmit);

// function onSubmit(event) {
//   event.preventDefault();

//   const emailVal = event.currentTarget.elements.email.value;
//   const passwordVal = event.currentTarget.elements.password.value;

//   if (emailVal === "" || passwordVal === "") {
//     alert("Fill in all the fields!");
//   }

//   console.log({ emailVal, passwordVal });
//   event.currentTarget.reset();
// }
