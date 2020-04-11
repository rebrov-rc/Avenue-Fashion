// ЗАГРУЖАЕТСЯ СТРАНИЦА
var btnOfCart = document.querySelectorAll('.cart-i');
var cart1 = document.querySelector('.addNumberOfProduct');
var addNumInCart = 0;
// let arrForCart: any[] = [0], color: string, just: string, bord: string, w:string, 
// h: string;
// localStorage.getItem('cart');
cart1.innerHTML = localStorage.getItem('cart');
cart1.style.background = localStorage.getItem('color');
cart1.style.justifyContent = localStorage.getItem('just');
cart1.style.borderRadius = localStorage.getItem('bord');
cart1.style.width = localStorage.getItem('w');
cart1.style.height = localStorage.getItem('h');
var _loop_1 = function (i) {
    btnOfCart[i].onclick = addProd; // Включается функция
    function addProd() {
        var e = btnOfCart[i].innerHTML;
        if (e === 'оплата') {
        }
        else {
            addNumInCart = addNumInCart + 1;
            cart1.innerHTML = addNumInCart; // ДОБАВИЛАСЬ ЦИФРА В КОРЗИНУ
            localStorage.cart = cart1.innerHTML;
            localStorage.color = cart1.style.background = '#d38b50f6';
            localStorage.just = cart1.style.justifyContent = 'center';
            localStorage.bord = cart1.style.borderRadius = '50%';
            localStorage.w = cart1.style.width = '1.5em';
            localStorage.h = cart1.style.height = '1.5em';
            // console.log(btnOfCart[i] + '-' + i)
            // 
            localStorage.btnBack = btnOfCart[i].style.background = '#d38b50f6';
            localStorage.btnColor = btnOfCart[i].style.color = '#ffffff';
            localStorage.btnW = btnOfCart[i].style.width = '5em';
            localStorage.btnBord = btnOfCart[i].style.borderRadius = '10%';
            localStorage.btnInner = btnOfCart[i].innerHTML = 'оплата';
            // localStorage.btnInner = '456'; 
            // ====
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
var likeIndex = [];
for (var i = void 0; i < likeIndex.length; i++) {
    console.log(likeIndex);
}
var _loop_2 = function (i) {
    // if (like[i]) {
    //     like[i].style.background = '#d38b50f6';
    // }
    like[i].onclick = addLike;
    function addLike() {
        // 
        var ppp = like[i].style.background;
        // like[i].style.color = '#ffffff';
        if (ppp === 'rgba(211, 139, 80, 0.965)') {
            like[i].style.background = '';
            // likeIndex.pop(i);
            // likeIndex[i] = null;
            // console.log(likeIndex)
        }
        else {
            like[i].style.background = '#d38b50f6';
            // likeIndex.push(i);
            likeIndex[i] = i;
            localStorage.setItem('key', likeIndex);
            // console.log(likeIndex)
        }
        console.log(likeIndex);
    }
};
for (var i = 0; i < like.length; i++) {
    _loop_2(i);
}
