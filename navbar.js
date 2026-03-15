// HAMBURGER MENU TOGGLE
const hamburger = document.querySelector(".mobile-hamburger");
const navMenu = document.querySelector(".nav-menu");

const overlay = document.querySelector(".menu-overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});
overlay.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
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




