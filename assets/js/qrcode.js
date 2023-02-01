let curs = document.querySelector('.cursor');
let qrcode = document.querySelector('.qrcode');

qrcode.addEventListener('mouseenter', () => {
    curs.classList.add('actif');
    curs.style.transform = "translate(50%,50%)";
})

qrcode.addEventListener('mouseleave', () => {
    curs.classList.remove('actif');
    
})