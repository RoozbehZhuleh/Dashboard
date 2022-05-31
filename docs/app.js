"use strict";
flatpickr(".calendar__body", {
     enableTime: true,
    dateFormat: "Y-m-d H:i",
});

const navLink = document.querySelector(".nav__link");

navLink.addEventListener("click", () => {
navLink.classList.add(".active");
})


document.querySelector(".nav__subscription").style.setProperty('--animate-duration', '4s');