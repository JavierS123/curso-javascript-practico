const $ = (selector) =>document.querySelector(selector);
const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const mobileMenuIcon = $('.mobile-menu-icon')
const mobileMenu = $('.mobile-menu');
const menuCarritoIcon = $('.navbar-shopping-cart');
const shoppingCartContainer = $('.shoppingCartContainer')
const cardsContainer = $('.cards-container')

menuEmail.addEventListener('click', showMyDesktopMenu);

function showMyDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
}

mobileMenuIcon.addEventListener('click', showMobileMenu);

function showMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
}

menuCarritoIcon.addEventListener('click', showMyOrder);

function showMyOrder(){
    shoppingCartContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Qtie',
    price: 220,
    image: './img/qtgirl.png'
})
productList.push({
    name: 'Tokyo',
    price: 620,
    image: './img/Tokyo-Shibuya-neon-lights.jpg'
})
for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    //product = {name, price, image}--> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info');
    
    const productInfoDiv= document.createElement('div')
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    
    const productName = document.createElement('p');
    productName.innerText = product.name;
    
    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    productInfoFigure.appendChild(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure)

    productCard.append(productImg, productInfo)
    
    cardsContainer.append(productCard);
}
