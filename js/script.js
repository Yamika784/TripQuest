"use strict";
let btn = document.querySelector(".header__btn");
let lines = document.querySelectorAll(".line");
let nav = document.querySelector("nav");
// let navLinks = document.querySelectorAll("nav ul li a");


btn.addEventListener("click", function() {
    btn.classList.toggle("open");
    for (let i = 0; i < lines.length; i++){
        lines[i].classList.toggle("open");
    }
    nav.classList.toggle("open");

})

// // / ナビゲーションリンクをクリックしたとき、メニューを閉じる
// navLinks.forEach(link => {
//     link.addEventListener("click", function () {
//         btn.classList.remove("open");
//         lines.forEach(line => line.classList.remove("open"));
//         nav.classList.remove("open");
//     });
// });

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
  });
  