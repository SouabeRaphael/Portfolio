

// cursor script
// ----------------------------------------------------

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX - 20)+"px;")
})

// menu full screen
// ----------------------------------------------------

let menu_burger = document.querySelector('.header_menu_burger');
let menu_burger_name = document.querySelector('.header_menu_burger .header_menu_burger_name');
let menu_burger_name_close = document.querySelector('.header_menu_burger .header_menu_burger_name_close');
let menu_full_screen = document.querySelector('.menu_full_screen');

menu_burger.addEventListener('click', openMenu);

function openMenu(){
    console.log('coucouy');
    menu_full_screen.classList.toggle('open');
    menu_burger.classList.toggle('open');

    menu_burger_name.classList.toggle('close');
    menu_burger_name_close.classList.toggle('close');
}

// menu link actif
// ---------------------

let link_menu = document.querySelectorAll('.link_menu');
console.log(link_menu);

link_menu.forEach(function(item, index){
    item.onclick = function () {
        changeActivLink(index);
        console.log('coucou');
    }
})

function changeActivLink(index){
    let link_menu_active = document.querySelector('.link_menu_active');
    link_menu_active.classList.remove('link_menu_active');

    link_menu[index].classList.add('link_menu_active');
}





// network
// ----------------------------------------------------

let trait = document.querySelector('.trait');
let trait_span = document.querySelector('.trait span');
let network = document.querySelector('.network');
console.log(trait_span)

trait.addEventListener('click', functionNetwrok);

function functionNetwrok(){
    console.log('coucou');
    trait_span.classList.toggle('is-open');
    network.classList.toggle('is-open');
}


window.addEventListener('scroll', changeNetwork_scroll);

function changeNetwork_scroll(){
    if(window.scrollY){
        trait_span.classList.remove('is-open');
        network.classList.remove('is-open');
    }
    if(window.scrollY == 0){
        trait_span.classList.add('is-open');
        network.classList.add('is-open');
    }
}
// audio
// ----------------------------------------------------

let song = document.querySelector('.my-song');

let icon_sound = document.querySelector('.icon_sound');

icon_sound.addEventListener('click', getSound);

function getSound(){
    if(song.paused){
        song.play();
        icon_sound.src = "./assets/img/Icon feather-volume-2.svg";
    }
    else{
        song.pause();
        icon_sound.src = "./assets/img/Icon feather-volume-x.svg";
    }
}

// scroll project section
// ----------------------------------------------------

// with button
// -------------------------
let scroll = document.querySelector('.project_section_container_carrousel')
let carrousel = document.querySelector(('.carrousel'));

let btnNext = document.querySelector('.next_arrow');
let btnBack = document.querySelector('.back_arrow');
let test = 0;
btnNext.addEventListener('click', () => {
    test -= 30;
    carrousel.animate({
        transform: `translate(${test}%, 0%)`}, {
            duration: 600, fill: "forwards"});
})
btnBack.addEventListener('click', () => {
    // carrousel.scrollBy(-350, 0);
    test += 30;
    carrousel.animate({
        transform: `translate(${test}%, 0%)`}, {
            duration: 600, fill: "forwards"});
})


// with dragging
// ---------------------
const slide = document.querySelector('.carrousel');
const images = document.querySelectorAll(".image_project")

window.onmousedown = e =>{
    slide.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = e => {
    if(slide.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(slide.dataset.mouseDownAt) - e.clientX,
        maxDelta  = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(slide.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 5), -150);

    slide.dataset.percentage = nextPercentage;
    // slide.style.transform = `translate(${nextPercentage}%, 0%)`;
    slide.animate({
        transform: `translate(${nextPercentage}%, 0%)`}, {
            duration: 600, fill: "forwards"});

    for(const image of images){
        // image.style.objectPosition = `${nextPercentage + 90}% 50%`;
        image.animate({
            objectPosition: `${nextPercentage + 90}% 50%`}, {
            duration: 800, fill: "forwards"});
    }
}

window.onmouseup = () =>{
    slide.dataset.mouseDownAt = "0";
    slide.dataset.prevPercentage = slide.dataset.percentage;
}