const btnOfCart: NodeListOf<Element> = document.querySelectorAll('.cart-i');
const cart1: HTMLElement = document.querySelector('.addNumberOfProduct');
let addNumInCart: number = 0; 

// console.log(btnOfCart.length)
for (let i  = 0; i < btnOfCart.length; i++) {
    btnOfCart[i].onclick = addProd;
    function addProd() {
        let e = btnOfCart[i].innerHTML;
        if ( e === 'оплата' ) {

        }else {
            addNumInCart = addNumInCart  + 1;
            cart1.innerHTML = addNumInCart;
            cart1.style.background = '#d38b50f6';
            cart1.style.justifyContent = 'center';
            cart1.style.borderRadius = '50%';
            cart1.style.width = '1.5em';
            cart1.style.height = '1.5em';
            console.log(btnOfCart[i] + '-' + i)
            // 
            btnOfCart[i].style.background = '#d38b50f6';
            btnOfCart[i].style.color = '#ffffff';
            btnOfCart[i].style.width = '5em';
            btnOfCart[i].style.borderRadius = '10%';
            btnOfCart[i].innerHTML = 'оплата';
        }
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

// =========================>
const like: NodeListOf<Element> = document.querySelectorAll('.like');
const heart: NodeListOf<Element> = document.querySelector('.addNumberOfProduct');


for (let i  = 0; i < like.length; i++) {
    like[i].onclick = addLike;
    function addLike() {
        // 
        let ppp = like[i].style.background;
        // like[i].style.color = '#ffffff';
        if ( ppp === 'rgba(211, 139, 80, 0.965)' ) {
            like[i].style.background = '';
            
        } else {
            like[i].style.background = '#d38b50f6';
            
        }
        

    } 
    // console.log(btnOfCart[i])
}