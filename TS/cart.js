var btnOfCart = document.querySelectorAll('.cart-i');
var cart = document.querySelector('.addNumberOfProduct');
var addNumInCart = 0;
var _loop_1 = function (i) {
    btnOfCart[i].onclick = addProd;
    function addProd() {
        addNumInCart = addNumInCart + 1;
        cart.innerHTML = addNumInCart;
        cart.style.background = '#b67b4bf6';
        cart.style.justifyContent = 'center';
        cart.style.borderRadius = '50%';
        cart.style.width = '1.5em';
        cart.style.height = '1.5em';
        console.log(btnOfCart[i] + '-' + i);
        // 
        btnOfCart[i].style.background = '#b64b4bf6';
        btnOfCart[i].style.color = '#ffffff';
        btnOfCart[i].style.width = '5em';
        btnOfCart[i].style.borderRadius = '10%';
        btnOfCart[i].innerHTML = 'оплата';
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
