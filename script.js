const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const navClose = document.getElementById("nav-close");

menuToggle.addEventListener("click", () => {
  nav.classList.add("open");
  nav.setAttribute("aria-hidden", "false");
});

navClose.addEventListener("click", () => {
  nav.classList.remove("open");
  nav.setAttribute("aria-hidden", "true");
});