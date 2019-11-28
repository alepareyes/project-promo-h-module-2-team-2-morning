// Validación formulario

const form = document.querySelector(".form");
const shareButton = document.querySelector(".button");
const emailInput = document.querySelector(".js-email");
const githubInput = document.querySelector(".js-github");
const linkedinInput = document.querySelector(".js-linkedin");
const phoneInput = document.querySelector(".js-phone");
const shareTwitter = document.querySelector(".js-share__twitter");

const checkForm = function (ev) {
  if (form.checkValidity() === true) {
    shareButton.classList.add("js-button-active");


  } else {
    shareButton.classList.remove("js-button-active");
  }
};

formInputName.addEventListener("keyup", checkForm);
formInputRole.addEventListener("keyup", checkForm);
emailInput.addEventListener("keyup", checkForm);
phoneInput.addEventListener("keyup", checkForm);
linkedinInput.addEventListener("keyup", checkForm);
githubInput.addEventListener("keyup", checkForm);

// Crear tarjeta

const twitter = function (ev) {
  ev.preventDefault();
  if (form.checkValidity() === true) {
    shareTwitter.classList.remove("hiddenButton");
  }
};

shareButton.addEventListener("click", twitter);
