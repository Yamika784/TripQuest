"use strict";
let btn = document.querySelector(".header__btn");
let lines = document.querySelectorAll(".line");
let nav = document.querySelector("nav");

btn.addEventListener("click", function() {
    btn.classList.toggle("open");
    for (let i = 0; i < lines.length; i++){
        lines[i].classList.toggle("open");
    }
    nav.classList.toggle("open");

})