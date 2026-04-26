// Seleciona os elementos do DOM
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector("#main-nav");
const navLinks = document.querySelectorAll(".nav-links a");

// Função que abre e fecha o menu de navegação
function toggleMenu() {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";

  navToggle.setAttribute("aria-expanded", String(!isOpen));
  mainNav.classList.toggle("nav--open");
}

// Abre/fecha ao clicar no botão hambúrguer
navToggle.addEventListener("click", toggleMenu);

// Fecha o menu quando clicar em um link
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navToggle.setAttribute("aria-expanded", "false");
    mainNav.classList.remove("nav--open");
  });
});