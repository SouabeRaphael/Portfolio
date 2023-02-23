let curs = document.querySelector('.cursor');
let qrcode = document.querySelector('.qrcode');
let container_qrcode = document.querySelector('.area_qrcode');

container_qrcode.addEventListener('mouseenter', () => {
    curs.classList.add('actif');
    // qrcode.classList.add('actif');
    // curs.style.transform = "translate(-50%,-50%)";
})

container_qrcode.addEventListener('mouseleave', () => {
    curs.classList.remove('actif');
    // qrcode.classList.remove('actif');
})