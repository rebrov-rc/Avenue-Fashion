var btnOfCart = document.querySelectorAll('.cart-i');
var cart1 = document.querySelector('.addNumberOfProduct');
var addNumInCart = 0;
var _loop_1 = function (i) {
    btnOfCart[i].onclick = addProd;
    function addProd() {
        var e = btnOfCart[i].innerHTML;
        if (e === 'оплата') {
        }
        else {
            addNumInCart = addNumInCart + 1;
            cart1.innerHTML = addNumInCart;
            cart1.style.background = '#d38b50f6';
            cart1.style.justifyContent = 'center';
            cart1.style.borderRadius = '50%';
            cart1.style.width = '1.5em';
            cart1.style.height = '1.5em';
            console.log(btnOfCart[i] + '-' + i);
            // 
            btnOfCart[i].style.background = '#d38b50f6';
            btnOfCart[i].style.color = '#ffffff';
            btnOfCart[i].style.width = '5em';
            btnOfCart[i].style.borderRadius = '10%';
            btnOfCart[i].innerHTML = 'оплата';
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
