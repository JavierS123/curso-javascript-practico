const $ = (selector) =>document.querySelector(selector);
const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const mobileMenuIcon = $('.mobile-menu-icon')
const mobileMenu = $('.mobile-menu');
const menuCarritoIcon = $('.navbar-shopping-cart');
const shoppingCartContainer = $('.shoppingCartContainer')
const productDetailContainer = $('#productDetail')
const productDetailClose = $('.product-detail-close')
const cardsContainer = $('.cards-container')
const myOrderMobile = $('.myOrderArrow')

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive')
}

mobileMenuIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

menuCarritoIcon.addEventListener('click', toggleMyOrder);
/*CLOSE THE ORDER MENU ON MOBILE USING THE CLOSE ARROW*/
myOrderMobile.addEventListener('click', toggleMyOrder);

function toggleMyOrder(){
    shoppingCartContainer.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

productDetailClose.addEventListener('click', closeProductDetailAside);

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
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
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
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
