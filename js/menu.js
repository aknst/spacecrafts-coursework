const navMobileMenu = document.querySelector(".navbar__mobile-menu-icon");
const header = document.querySelector("header");
const navItems = document.querySelector(".navbar__items");

navMobileMenu.addEventListener("click", () => {
  header.classList.toggle("active");
  navMobileMenu.classList.toggle("active");
  navItems.classList.toggle("active");
})
