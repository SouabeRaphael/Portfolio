

// cursor script
// ----------------------------------------------------

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX - 20)+"px;")
})


// network
// ----------------------------------------------------

let trait = document.querySelector('.trait');
let trait_span = document.querySelector('.trait span');
let network = document.querySelector('.network');
console.log(trait_span)

trait.addEventListener('click', test);

function test(){
    console.log('coucou');
    trait_span.classList.toggle('is-open');
    network.classList.toggle('is-open');
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