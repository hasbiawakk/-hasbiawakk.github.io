'use strict';



// navbar toggle

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
    header.classList.toggle("nav-active");
    this.classList.toggle("active");
});

// toggle the navbar whem click amy navbar link

const navbarLinks = document.querySelector("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function () {
        header.classList.toggle("nav-active");
        navToggleBtn.classList.toggle("active");
    });
}

// Back to top and header

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function() {
    if (this.window.scrollY >= 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});