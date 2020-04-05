const btnOfCart: NodeListOf<Element> = document.querySelectorAll('.cart-i');
const cart1: HTMLElement = document.querySelector('.addNumberOfProduct');
let addNumInCart: number = 0; 

// console.log(btnOfCart.length)
for (let i  = 0; i < btnOfCart.length; i++) {
    btnOfCart[i].onclick = addProd;
    function addProd() {
        addNumInCart = addNumInCart  + 1;
        cart1.innerHTML = addNumInCart;
        cart1.style.background = '#b67b4bf6';
        cart1.style.justifyContent = 'center';
        cart1.style.borderRadius = '50%';
        cart1.style.width = '1.5em';
        cart1.style.height = '1.5em';
        console.log(btnOfCart[i] + '-' + i)
        // 
        btnOfCart[i].style.background = '#b64b4bf6';
        btnOfCart[i].style.color = '#ffffff';
        btnOfCart[i].style.width = '5em';
        btnOfCart[i].style.borderRadius = '10%';
        btnOfCart[i].innerHTML = 'оплата';
    } 
    // console.log(btnOfCart[i])
}

const btnCustomerList: HTMLElement = document.querySelector('.customer-cart-wrap');
btnCustomerList.onclick = () => {
    if (addNumInCart > 0){
        // btnCustomerList.add.
    } else {
        alert('Корзина пуста')
    }
}


