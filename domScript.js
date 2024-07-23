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
