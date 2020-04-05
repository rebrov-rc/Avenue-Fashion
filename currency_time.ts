
        let oclock: HTMLElement = document.querySelector('.gbp-wrap span');
        let getTime: Date = new Date;
        let hours: number = getTime.getHours();
        let minute: number = getTime.getMinutes();
        oclock.innerHTML = hours + ' : ' + minute;
setInterval(
    () => {  
        getTime = new Date; 
         hours = getTime.getHours();
        minute = getTime.getMinutes(); 
        oclock.innerHTML = hours + ' : ' + minute;
    }, 10000
)
