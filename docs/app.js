"use strict";
flatpickr(".calendar__body", {
     enableTime: true,
    dateFormat: "Y-m-d H:i",
});

const navLink = document.querySelectorAll(".nav__link");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");
const geo = document.querySelector(".geography");
const js = document.querySelector(".js");
const photography = document.querySelector(".photography");
const course = document.querySelector(".course");


navLink.forEach(i => {
    i.addEventListener("click", function () {
        i.classList.toggle("active");

    })
})


// course.addEventListener("mouseover", () => {
//     course.style.transform = "translateY(5rem)";
//     // geo.style.height = "35rem";

// })


document.querySelector(".nav__subscription").style.setProperty('--animate-duration', '3s');
document.querySelector(".homework__1").style.setProperty('--animate-duration', '1.5s');
document.querySelector(".homework__2").style.setProperty('--animate-duration', '2s');
document.querySelector(".homework__3").style.setProperty('--animate-duration', '3s');
document.querySelector(".nav__links__dashboard").style.setProperty('--animate-duration', '1s');
document.querySelector(".nav__links__courses").style.setProperty('--animate-duration', '1.2s');
document.querySelector(".nav__links__chats").style.setProperty('--animate-duration', '1.4s');
document.querySelector(".nav__links__grades").style.setProperty('--animate-duration', '1.6s');
document.querySelector(".nav__links__schedule").style.setProperty('--animate-duration', '1.8s');
document.querySelector(".nav__links__settings").style.setProperty('--animate-duration', '2s');


