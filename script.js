// Seleciona os elementos do HTML que vamos usar
const menuHamburger = document.getElementById('menu-hamburger');
const navMenu = document.getElementById('nav-menu');

// NOVO: Seleciona todos os links dentro do menu de navegação
const navLinks = document.querySelectorAll('#nav-menu a');

// Adiciona um "ouvinte de evento" de clique no ícone três traços
menuHamburger.addEventListener('click', () => {
    // A cada clique, ele adiciona ou remove a classe 'active' do menu
    navMenu.classList.toggle('active');
});

// NOVO: Adiciona um "ouvinte" para cada link do menu
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Quando um link é clicado, remove a classe 'active' para fechar o menu
        navMenu.classList.remove('active');
    });
});