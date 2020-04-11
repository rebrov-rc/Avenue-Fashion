// ЗАГРУЖАЕТСЯ СТРАНИЦА
var btnOfCart = document.querySelectorAll('.cart-i');
var cart1 = document.querySelector('.addNumberOfProduct');
var addNumInCart = 0;
var a1;
var arrForCart = [0], color, just, bord, w, h;
// localStorage.getItem('cart');
cart1.innerHTML = localStorage.getItem('cart', arrForCart);
cart1.style.background = localStorage.getItem('color', color);
cart1.style.justifyContent = localStorage.getItem('just', just);
cart1.style.borderRadius = localStorage.getItem('bord', bord);
cart1.style.width = localStorage.getItem('w', w);
cart1.style.height = localStorage.getItem('h', h);
var _loop_1 = function (i) {
    btnOfCart[i].onclick = addProd; // Включается функция
    function addProd() {
        var e = btnOfCart[i].innerHTML;
        if (e === 'оплата') {
        }
        else {
            addNumInCart = addNumInCart + 1;
            cart1.innerHTML = addNumInCart; // ДОБАВИЛАСЬ ЦИФРА В КОРЗИНУ
            color = cart1.style.background = '#d38b50f6';
            just = cart1.style.justifyContent = 'center';
            bord = cart1.style.borderRadius = '50%';
            w = cart1.style.width = '1.5em';
            h = cart1.style.height = '1.5em';
            // console.log(btnOfCart[i] + '-' + i)
            // 
            btnOfCart[i].style.background = '#d38b50f6';
            btnOfCart[i].style.color = '#ffffff';
            btnOfCart[i].style.width = '5em';
            btnOfCart[i].style.borderRadius = '10%';
            btnOfCart[i].innerHTML = 'оплата';
            // ====
            // ===
            arrForCart[0] = cart1.innerHTML;
            // ===
            localStorage.setItem('cart', arrForCart);
            localStorage.setItem('color', color);
            localStorage.setItem('just', just);
            localStorage.setItem('bord', bord);
            localStorage.setItem('w', w);
            localStorage.setItem('h', h);
            // console.log(arrForCart)
        }
    }
};
// console.log(btnOfCart.length)
for (var i = 0; i < btnOfCart.length; i++) {
    _loop_1(i);
}
var btnCustomerList = document.querySelector('.customer-cart-wrap');
btnCustomerList.onclick = function () {
    if (addNumInCart > 0) {
        // btnCustomerList.add.
    }
    else {
        alert('Корзина пуста');
    }
};
// =========================>
var like = document.querySelectorAll('.like');
var heart = document.querySelector('.addNumberOfProduct');
var _loop_2 = function (i) {
    like[i].onclick = addLike;
    function addLike() {
        // 
        var ppp = like[i].style.background;
        // like[i].style.color = '#ffffff';
        if (ppp === 'rgba(211, 139, 80, 0.965)') {
            like[i].style.background = '';
        }
        else {
            like[i].style.background = '#d38b50f6';
        }
    }
};
for (var i = 0; i < like.length; i++) {
    _loop_2(i);
}
