const $ = (selector) =>document.querySelector(selector);
const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const mobileMenuIcon = $('.mobile-menu-icon')
const mobileMenu = $('.mobile-menu');

menuEmail.addEventListener('click', function(){toggleMenu(desktopMenu)})
mobileMenuIcon.addEventListener('click', function(){toggleMenu(mobileMenu)})

function toggleMenu(elemento) {
    elemento.classList.toggle('inactive')
}
