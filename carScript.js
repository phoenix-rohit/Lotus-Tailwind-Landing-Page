"use strict";
// CHEVRON

const firstChevButton = document.getElementById("first-spec-chev-down");
const firstChevContent = document.getElementById("first-chev");
const secondChevButton = document.getElementById("second-spec-chev-down");
const secondChevContent = document.getElementById("second-chev");
const thirdChevButton = document.getElementById("third-spec-chev-down");
const thirdChevContent = document.getElementById("third-chev");

firstChevButton.addEventListener("click", () => {
  firstChevContent.classList.toggle("hidden");
  firstChevButton.classList.toggle("btn-rotate");
});
secondChevButton.addEventListener("click", () => {
  secondChevContent.classList.toggle("hidden");
  secondChevButton.classList.toggle("btn-rotate");
});
thirdChevButton.addEventListener("click", () => {
  thirdChevContent.classList.toggle("hidden");
  thirdChevButton.classList.toggle("btn-rotate");
});
