//Seleciona os elementos do DOM
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('#main-nav');
const navLinks = document.querySelectorAll('.nav-links a');

//Função que abre e fecha o menu de navegação
function toggleMenu() {
    //lê o estado "true" ou "false" (string, não booleano) do atributo "aria-expanded"
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true'

    //alterna o estado do menu
    navToggle.setAttribute('aria-expanded', !isOpen);

    //adiciona ou remove a classe que mostra o menu
    mainNav.classList.toggle('nav--open');

}

//adiciona o evento clique no botão hambúrguer toggle
navToggle.addEventListener('click', toggleMenu)

//fecha o menu quando o usuário clicar em um link de navegação
navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
    navToggle.setAttribute('aria-expanded', 'false')
    mainNav.classList.remove('nav--open')
    })
})