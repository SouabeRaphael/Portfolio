// var urlcourante = document.location.href; 
// // alert (urlcourante); 
// var queue_url = urlcourante.substring(urlcourante.lastIndexOf( "=" ) + 1 );
// alert (queue_url)

let  header_logo_back = document.querySelector('.header_logo_back');
let  header_logo_white = document.querySelector('.header_logo_white');
let menu_name = document.querySelector('.header_menu_burger_name');
let menu_burger_dot = document.querySelector('.header_menu_burger_dot');
let network_and_sound = document.querySelector('.project_page_bottom');

window.addEventListener('scroll', changeColor_scroll);

function changeColor_scroll(){
    if(window.scrollY >= 200){
        network_and_sound.style.filter = "invert(0)";  
    }
    if(window.scrollY < 200){
        network_and_sound.style.filter = "invert(1)";  
    }
    if(window.scrollY >= 900){
        header_logo_white.style.opacity = "1";
        header_logo_back.style.opacity = "0";
        menu_name.style.color = "black";
        menu_burger_dot.style.backgroundColor = "black";
    }
    if(window.scrollY < 900){
        header_logo_white.style.opacity = "0";
        header_logo_back.style.opacity = "1";
        menu_name.style.color = "white";
        menu_burger_dot.style.backgroundColor = "white";
    }
}