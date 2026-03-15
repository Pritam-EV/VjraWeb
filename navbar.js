// HAMBURGER MENU TOGGLE
const hamburger = document.querySelector(".mobile-hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// support dropdown toggling on click (mobile)
document.querySelectorAll(".dropdown .drop-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const parent = btn.closest('.dropdown');
    if (parent) parent.classList.toggle('active');
  });
});




