// Seleciona os elementos do HTML que vamos usar
const menuHamburger = document.getElementById('menu-hamburger');
const navMenu = document.getElementById('nav-menu');

// Adiciona um "ouvinte de evento" de clique no ícone do hambúrguer
menuHamburger.addEventListener('click', () => {
    // A cada clique, ele adiciona ou remove a classe 'active' do menu
    navMenu.classList.toggle('active');
});