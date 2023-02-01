

// cursor script
// ----------------------------------------------------

let cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX - 20)+"px;")
})


// menu full screen
// ----------------------------------------------------

let menu_burger = document.querySelector('.header_menu_burger');
let menu_burger_name = document.querySelector('.header_menu_burger .header_menu_burger_name');
let menu_burger_name_close = document.querySelector('.header_menu_burger .header_menu_burger_name_close');
let menu_full_screen = document.querySelector('.menu_full_screen');
let logo_black = document.querySelector('.header_logo_back');
let logo_white = document.querySelector('.header_logo_white');

menu_burger.addEventListener('click', openMenu);

function openMenu(){
    // console.log('coucouy');
    menu_full_screen.classList.toggle('open');
    menu_burger.classList.toggle('open');
    logo_black.classList.toggle('open');
    logo_white.classList.toggle('open');

    menu_burger_name.classList.toggle('close');
    menu_burger_name_close.classList.toggle('close');
}

// menu link actif
// ---------------------

let link_menu = document.querySelectorAll('.link_menu');
// console.log(link_menu);

function changeActivLink(index){
    let link_menu_active = document.querySelector('.link_menu_active');
    link_menu_active.classList.remove('link_menu_active');

    link_menu[index].classList.add('link_menu_active');
}

link_menu.forEach(function(item, index){
    item.onclick = function () {
        changeActivLink(index);
        openMenu();
        // console.log('coucou');
    }
})





// network
// ----------------------------------------------------

let trait = document.querySelector('.trait');
let trait_span = document.querySelector('.trait span');
let network = document.querySelector('.network');
console.log(trait_span)

trait.addEventListener('click', functionNetwrok);

function functionNetwrok(){
    // console.log('coucou');
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

function slider(slide){
    // scroll project section
    // ----------------------------------------------------
    const images = document.querySelectorAll(".image_project")
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
}


// change overflow for mobile
// -------------------------------------
function change_overflow(){
    let slide = document.querySelector('.carrousel');

    if(screen.width <= 1100){
        slide.style.overflow = "scroll";
    }
    else{
        slide.style.overflow = "none";
        slider(slide);
    }
}
change_overflow();

// affichage bottom page, network and sound
// ---------------------------------------------------------------
let body = document.querySelector('body');
let height = document.body.scrollHeight / 1.8;
let page_bottom = document.querySelector('.home_page_bottom');

window.addEventListener('scroll', () => {

    if(window.scrollY > height){
        page_bottom.style.opacity = 0;
    }
    else{
        page_bottom.style.opacity = 100;
    }
})


// let t = document.querySelector('.header_logo');
// t.style.fill = "#E16753";


// @@@
// fonction fetch qui va chercher les valeur des projects dans un json
// @@@

fetch('data/project.json')
    .then((reponse) => reponse.json())
    .then((jsonProject) => {
        jsonProject.project_first_home.map((project) => {
            let id = project.id
            let title = project.title;
            let dec = project.desc;
            let img = project.img;

            let content_project = document.querySelector('.carrousel');

            content_project.innerHTML += `
            <div class="item_card" id="${id}">
                <div class="carrousel_item" draggable="false">
                    <img class="image_project" src="./assets/img/img_project/${img}.png">
                    <div class="name">
                        <p class="name_project">${title}</p>
                        <div class="line_name"></div>
                    </div>
                    <span class="categories_project">${dec}</span>
                    <a href="./project.html?id=${id}">
                        <div class="discover_project">
                            <p class="link_discover">DECOUVRIR</p>
                            <div class="line_link"></div>
                        </div>
                    </a>
                </div>
            </div>`;

        })
    })


