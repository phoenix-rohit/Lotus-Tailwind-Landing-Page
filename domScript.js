"use strict";
//      TOGGLE MENU WITH SMOOTH EFFECT
const open = document.getElementById("openBtn");
const close = document.getElementById("closeBtn");
const menu = document.getElementById("toggleMenu");
const menuLink = document.querySelectorAll(".menuLink");

open.addEventListener("click", () => {
  open.classList.toggle("hidden");
  menu.classList.toggle("translate-x-0");
  menu.classList.toggle("translate-x-full");
  close.classList.toggle("hidden");
});
close.addEventListener("click", () => {
  open.classList.toggle("hidden");
  menu.classList.toggle("translate-x-full");
  menu.classList.toggle("translate-x-0");
  close.classList.toggle("hidden");
});

menuLink.forEach((ele) => {
  ele.addEventListener("click", () => {
    open.classList.toggle("hidden");
    menu.classList.toggle("translate-x-full");
    menu.classList.toggle("translate-x-0");
    close.classList.toggle("hidden");
  });
});

// dfs
// ITEMS
const item1 = document.querySelector(".item-1");
const item2 = document.querySelector(".item-2");
const item3 = document.querySelector(".item-3");

const btnMidLeft = document.querySelector(".btn-mid-left");
const btnMidRight = document.querySelector(".btn-mid-right");

const btnFRight = document.querySelector(".btn-f-right");
const btnLLeft = document.querySelector(".btn-l-left");

btnFRight.addEventListener("click", () => {
  item2.classList.toggle("hidden");
  item1.classList.toggle("hidden");
});

btnMidLeft.addEventListener("click", () => {
  item1.classList.toggle("hidden");
  item2.classList.toggle("hidden");
});
btnMidRight.addEventListener("click", () => {
  item2.classList.toggle("hidden");
  item3.classList.toggle("hidden");
});

btnLLeft.addEventListener("click", () => {
  item2.classList.toggle("hidden");
  item3.classList.toggle("hidden");
});

// Cokkie
const acceptCookieButton = document.getElementById("btn-accept-cookie");
const rejectCookieButton = document.getElementById("btn-reject-cookie");
const openCookieButton = document.getElementById("open-cookies");

const cokkieContainer = document.getElementById("cookie-container");
const termsContainer = document.getElementById("terms-container");
const btnTerms = document.getElementById("btn-terms");

acceptCookieButton.addEventListener("click", () => {
  cokkieContainer.classList.add("hidden");
});
rejectCookieButton.addEventListener("click", () => {
  cokkieContainer.classList.add("hidden");
});

openCookieButton.addEventListener("click", () => {
  cokkieContainer.classList.toggle("hidden");
});

btnTerms.addEventListener("click", () => {
  termsContainer.classList.toggle("hidden");
});
