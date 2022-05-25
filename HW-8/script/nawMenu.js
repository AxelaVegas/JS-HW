'use strict';
/* скрипт открывает и скрывает меню навигации */

let nawMenuButtonClose = document.querySelector('.menu-btn-close');
let nawMenuIcon = document.querySelector('.header-naw');
nawMenuIcon.addEventListener('click', () => {
    let nawMenuDiv = document.getElementById('naw-menu');
    if (nawMenuDiv.getAttribute('class') == 'naw-menu--close') {
        nawMenuDiv.setAttribute('class', 'naw-menu');
    } else {
        nawMenuDiv.setAttribute('class', 'naw-menu--close');
    }

});
nawMenuButtonClose.addEventListener('click', () => {
    let nawMenuDiv = document.querySelector('.naw-menu');
    nawMenuDiv.setAttribute('class', 'naw-menu--close');
});

/* реализация корзины заказов */
let cartIcon = document.querySelector('.cart-icon');
cartIcon.addEventListener('click', () => {
    let cartDiv = document.getElementById('cart-div');
    if (cartDiv.getAttribute('class') == 'cart-div--close') {
        cartDiv.setAttribute('class', 'cart-div');
    } else {
        cartDiv.setAttribute('class', 'cart-div--close');
    }

});

/* в массив arrCart закидываю название товара, количество товара и его цену. При каждом изменении массива перерисовываю 
div с корзиной */

let arrCart = [];

let buttonAddToCart = document.querySelectorAll('.btn-add');
buttonAddToCart.forEach(function(button){
    button.addEventListener('click', function(event){
        
        let quantity = 1;
        let arrToCart = [];
        let name = event.target.parentNode.parentNode.querySelector('.name-prodact').innerText;
        let price = +event.target.parentNode.parentNode.querySelector('.price').innerText.slice(-5);
        let finalPrice = 0;

        for (let i=0; i<arrCart.length; i++){
            if (arrCart[i][0] == name) {
                arrCart[i][1] += quantity;
                arrCart[i][2] = price*arrCart[i][1];
                quantity++;
            }
            finalPrice = finalPrice + arrCart[i][2];
        }

        if (quantity == 1) {
            /* массив arrToCart создает многомерность массива arrCart */
        arrToCart.push(name, quantity, price);
            /* получаем многомерный массив содержимого корзины */
        arrCart.push(arrToCart);

        finalPrice += price;
        }
        addToCartDiv(arrCart, finalPrice);
    });
});

function addToCartDiv(arr, finalPrice){
    let cartDiv = document.getElementById('cart-div');
    cartDiv.innerHTML = `<div class="cart-futter">final price: ${finalPrice}</div>`;
    
    arr.forEach(function(pozition){
        cartDiv.insertAdjacentHTML('afterbegin', `<div class="pozition-cart"><p>${pozition[0]}</p> 
        <p>quantity: ${pozition[1]}</p> <p>price: ${pozition[2]}</p></div>`);
    });
}
