

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
const images = document.querySelectorAll(".image_project")
const slide = document.querySelector('.carrousel');
let line_scroll = document.querySelector('.line_scroll');

// with button
// -------------------------
let scroll = document.querySelector('.project_section_container_carrousel')

let btnNext = document.querySelector('.next_arrow');
let btnBack = document.querySelector('.back_arrow');

let currentPosition = 5;
let calcLimit = 5;
let position;
let test = 90;


btnNext.addEventListener('click', () => {
    currentPosition -= 30;
    test -= 20;

    calcLimit = Math.max(Math.min(currentPosition, 0), -90);
    position = `translate(${calcLimit}%, 0%)`;

    if(calcLimit == -90){
        currentPosition = -90;
        test = 40;
    }

    slide.animate({
        transform: `${position}`}, {
            duration: 600, fill: "forwards"});

    for(const image of images){
        // image.style.objectPosition = `${nextPercentage + 90}% 50%`;
        image.animate({
            objectPosition: `${test}% 50%`}, {
            duration: 600, fill: "forwards"});
        }

    line_scroll.animate({
        width: `${3 + -calcLimit / 2.5}%`}, {
        duration: 800, fill: "forwards"});

})

btnBack.addEventListener('click', () => {
    currentPosition += 30;
    test += 10;

    calcLimit = Math.max(Math.min(currentPosition, 0), -90);
    position = `translate(${calcLimit}%, 0%)`;

    if(calcLimit == 0){
        currentPosition = 0;
        test = 90;
    }

    slide.animate({
        transform: `${position}`}, {
            duration: 600, fill: "forwards"});
    
    for(const image of images){
        // image.style.objectPosition = `${nextPercentage + 90}% 50%`;
        image.animate({
            objectPosition: `${test}% 50%`}, {
            duration: 600, fill: "forwards"});
        }
    
    line_scroll.animate({
        width: `${3 + -calcLimit / 2.5}%`}, {
        duration: 800, fill: "forwards"});
})


// with dragging
// ---------------------
slide.onpointerdown = e =>{
    slide.dataset.mouseDownAt = e.clientX;
}

slide.onpointermove = e => {
    if(slide.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(slide.dataset.mouseDownAt) - e.clientX,
        maxDelta  = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(slide.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -90);

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

    // line_scroll.style.width = `${5 + -nextPercentage / 2}%`;
    line_scroll.animate({
        width: `${3 + -nextPercentage / 2.5}%`}, {
            duration: 800, fill: "forwards"});

}

slide.onpointerup = () =>{
    slide.dataset.mouseDownAt = "0";
    slide.dataset.prevPercentage = slide.dataset.percentage;
}

if(screen.width <= 1100){
    slide.style.overflow = "scroll";
}
else{
    slide.style.overflow = "none";
}
