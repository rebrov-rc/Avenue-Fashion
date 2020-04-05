var oclock = document.querySelector('.gbp-wrap span');
var getTime = new Date;
var hours = getTime.getHours();
var minute = getTime.getMinutes();
oclock.innerHTML = hours + ' : ' + minute;
setInterval(function () {
    getTime = new Date;
    hours = getTime.getHours();
    minute = getTime.getMinutes();
    oclock.innerHTML = hours + ' : ' + minute;
}, 10000);
