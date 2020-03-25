window.onscroll = function drop () {
    const panel = document.querySelector('.customer-panel-wrap');
    const baner = document.querySelector('.baner');
    if ( window.pageYOffset > 200 ) {
        panel.classList.remove('opacityPanel');
        panel.classList.add('header_fixed');
        baner.style.paddingTop = 'calc(1em + 1vw)';
    }else if (window.pageYOffset === 0){
        panel.classList.remove('header_fixed');
        // panel.classList.remove('opacityPanel');
        baner.style.paddingTop = '0';

    }else if ( window.pageYOffset < 200 && window.pageYOffset > 50) {
        // panel.classList.add('opacityPanel');
    }

}