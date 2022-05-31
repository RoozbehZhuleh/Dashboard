"use strict";
flatpickr(".calendar__body", {
     enableTime: true,
    dateFormat: "Y-m-d H:i",
});

const navLink = document.querySelector(".nav__link");

navLink.addEventListener("click", () => {
navLink.classList.add(".active");
})


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
