window.onscroll = function drop () {
    const panel = document.querySelector('.customer-panel-wrap');
    const baner = document.querySelector('.baner');
    if ( window.pageYOffset > 100 ) {
        panel.classList.add('header_fixed');
        baner.style.paddingTop = 'calc(1em + 1vw)';
    }else if (window.pageYOffset === 0){
        panel.classList.remove('header_fixed');
        baner.style.paddingTop = '0';

    }

}