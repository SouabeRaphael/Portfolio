// loader script
// ----------------------------------------------------

let preloader = document.querySelector('.preloader');
let percentage_loader = document.querySelector('.loader');
let circle = document.querySelector('.preloader svg path');

let counter = 0;
let c = 0;


// let i = setInterval(function () {

//     percentage_loader.innerHTML = counter + '%';
//     circle.style.strokeDasharray = `${counter} 100`;
//     counter++;

//     if(counter == 101){
//         clearInterval(i);
//         setTimeout(() => {
//             preloader.style.transform = `translateY(-100%)`
//         }, 300);
//     }


// },20);

// window.addEventListener('load', () => {
//     preloader.style.transform = `translateY(-100%)`
// })