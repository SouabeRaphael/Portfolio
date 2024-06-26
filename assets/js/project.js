
let url = new URL(window.location.href);
let params = new URLSearchParams(url.search);

let paramValue = params.get('id');


// @@@
// fonction fetch qui va chercher les valeur des projects dans un json
// @@@

fetch('data/project.json')
    .then((reponse) => reponse.json())
    .then((jsonProject) => {
        jsonProject.page_project.map((project) => {

            let tools = project.details.tools;

            let bg_img_hero = document.querySelector('.background_image');
            let title_hero = document.querySelector('.title_project');
            let desc_section = document.querySelector('.desc_section');
            let info_project_section = document.querySelector('.info_project_section');
            let galertie_image_project_section = document.querySelector('.image_project_section');

            if (params.has('id')) {
                
                if(paramValue == project.id){

                    bg_img_hero.innerHTML += `
                <img src="./assets/img/img_project/${project.img_bg_hero}">
                `;

                title_hero.innerHTML += `
                <h1 class="name">${project.title}</h1>
                <div class="line_title"></div>
                `;

                desc_section.innerHTML += `
                    <div class="content_section">
                        <span>${project.spe}</span>
                        <p>${project.desc}</p>
                    </div>
                `;

                info_project_section.innerHTML += `
                    <div class="background_image">
                        <img src="./assets/img/img_project/${project.details.bg_img}">
                    </div> 
                    <div class="content_info">
                        <div class="left">
                            <h2>${project.details.name}</h2>
                            <span class="subtitle">${project.details.realisation}</span>
                            <div class="line"></div>
                            <div class="text">
                                <p><span>Brief:</span> ${project.details.brief}</p>
                                <p><span>Concept:</span> ${project.details.concept}</p>
                            </div>
                            <div class="line"></div>
                            <p class="title_tools">Logiciel:</p>
                            <div class="tools">
                                <span>${tools.join(' - ')}</span>
                            </div>
                            <br>
                            <a href="${project.details.link_project}" class="link_project" target="_blank">Lien du projet</a>
                        </div>      
                    <div class="right"></div>
                `;

                galertie_image_project_section.innerHTML += `
                    <div class="first_image">
                        <img src="./assets/img/img_project/${project.galeries[1]}">
                    </div>        
                    <div class="seconde_image">
                        <img src="./assets/img/img_project/${project.galeries[0]}">
                        <img src="./assets/img/img_project/${project.galeries[2]}">
                    </div> 
                    <div class="next_project">
                        <div class="container_button">
                            <figure>
                                <img src="./assets/img/arrow_next.svg">
                            </figure>
                            <h2>Projet suivant</h2>
                        </div>    
                    </div>
                `;
                }
            } 
            else{
                window.location.replace("https://souaberaphael.github.io/Portfolio/");
            }

        })
    })



// change color header scroll
// ---------------------------------------------------------------

window.addEventListener("scroll", function() {
    
    let network_and_sound = document.querySelector('.project_page_bottom');
    let header_logo_back = document.querySelector('.header_logo_black');
    let header_logo_white = document.querySelector('.header_logo_white');
    let menu_name = document.querySelector('.header_menu_burger_name');
    let menu_burger_dot = document.querySelector('.header_menu_burger_dot');

    if(window.scrollY >= 200){
        network_and_sound.style.filter = "invert(0)";  
    }
    if(window.scrollY < 200){
        network_and_sound.style.filter = "invert(1)";  
    }
    if(window.scrollY >= 900){
        header_logo_white.style.opacity = "0";
        header_logo_back.style.opacity = "1";
        menu_name.style.color = "black";
        menu_burger_dot.style.backgroundColor = "black";
    }
    if(window.scrollY < 900){
        header_logo_white.style.opacity = "1";
        header_logo_back.style.opacity = "0";
        menu_name.style.color = "white";
        menu_burger_dot.style.backgroundColor = "white";
    }    


    // affichage bottom page, network and sound
    // ---------------------------------------------------------------

    // appel de variable dans le script.js

    if(window.scrollY > (document.body.scrollHeight / 1.3)){
        network_and_sound.style.opacity = 0;
    }
    else{
        network_and_sound.style.opacity = 1;
    }

});


// next project 
// -----------------------------------------

window.addEventListener("load", (event) => {
    let btn_next = document.querySelector('.container_button');
    console.log(btn_next);

    btn_next.addEventListener('click', () => {
        let next_id = parseInt(paramValue) + 1;
        console.log(next_id);
        if(next_id <= 7){
            window.location.replace(`https://souaberaphael.github.io/Portfolio/project.html?id=${next_id}`);
        }
        else{
            next_id = 1;
            window.location.replace(`https://souaberaphael.github.io/Portfolio/project.html?id=${next_id}`);
        }
    })
});

    

let header = this.document.querySelector('.header_content_header');
let burger = document.querySelector('.header_menu_burger');
let dot = document.querySelector('.header_menu_burger_dot');

burger.addEventListener('click', () => {
    header.classList.toggle('open');
    dot.classList.toggle('open');
})





