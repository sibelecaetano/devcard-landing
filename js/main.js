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

//intersection observer - detecta quando elementos entram na tela
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        //para de observar depois de animar, economiza memória
        observer.unobserve(entry.target)
      }
    })
  },
  {
    threshold: 0.1 //dispara quando 10% do elemento estiver visível
  }
)
//registra cada elemento com a classe .reveal para ser observado
revealElements.forEach(function (el) {
  observer.observe(el)
})

// Validação do formulário
const form = document.querySelector('.contact-form')

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault() // impede envio real por enquanto
    let valid = true

    // Valida cada campo obrigatório
    form.querySelectorAll('[required]').forEach(function (field) {
      const group = field.closest('.form-group')

      if (!field.value.trim()) {
        group.classList.add('error')
        valid = false
      } else {
        group.classList.remove('error')
      }
    })

    if (valid) {
      form.innerHTML = '<p style="text-align:center; color: var(--color-primary); font-weight: 500;">✓ Mensagem enviada! Retornamos em breve.</p>'
    }
  })

  // Remove erro ao digitar
  form.querySelectorAll('input, textarea').forEach(function (field) {
    field.addEventListener('input', function () {
      field.closest('.form-group').classList.remove('error')
    })
  })
}