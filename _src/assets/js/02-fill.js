"use strict";
console.log("fill");

// Fill Inputs

const formInputName = document.querySelector(".js-name");
const formInputRole = document.querySelector(".js-role");
const cardName = document.querySelector(".card__name");
const cardRole = document.querySelector(".card__role");

const data = JSON.parse(localStorage.getItem("data"));

const defaultName = !data ? "Nombre Apellido" : data.name;

const defaultRole = !data ? "Front-end developer" : data.role;

const isEmpty = ""; // No está relleno
const icons = document.querySelector(".js-card__icon");

function changeTextItem(inputElement, cardElement, defaultValue) {
  if (inputElement.value === isEmpty) {
    cardElement.innerHTML = defaultValue;
  } else {
    cardElement.innerHTML = inputElement.value;
  }
}

function updateData() {
  changeTextItem(formInputName, cardName, defaultName);
  changeTextItem(formInputRole, cardRole, defaultRole);
  updateIcons();
  changeColorToPalette();
  previewImage();
}

formInputName.addEventListener("keyup", updateData);
formInputRole.addEventListener("keyup", updateData);

changeTextItem(formInputName, cardName, defaultName);
changeTextItem(formInputRole, cardRole, defaultRole);
