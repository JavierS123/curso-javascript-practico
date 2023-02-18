const $ = (selector) =>document.querySelector(selector);
const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const mobileMenuIcon = $('.mobile-menu-icon')
const mobileMenu = $('.mobile-menu');
const menuCarritoIcon = $('.navbar-shopping-cart');
const aside = $('.product-detail')

menuEmail.addEventListener('click', showMyDesktopMenu);

function showMyDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

mobileMenuIcon.addEventListener('click', showMobileMenu);

function showMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

menuCarritoIcon.addEventListener('click', showMyOrder);

function showMyOrder(){
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}