const t1 = performance.now();
let nav = document.querySelector('.nav');
var navbar = document.querySelector('.navbar');
document.addEventListener( 'scroll', function(){
    if(window.scrollY > 0 ) {
        if ( nav && navbar) {
            nav.classList.add('scrolled')
            nav.style.position = 'sticky';
            nav.style.top= '-1px';
        }
    }
        else{
            if (nav,navbar) {
                nav.classList.remove('scrolled')
                nav.style.top= '0px';
                nav.style.position = 'static';
            }
        }
} );
const t2 = performance.now();
console.log("This took " + (t2-t1) + "  ms");



window.addEventListener('scroll', function () {
    var card =document.querySelector('.card');
    var cardNav =document.querySelector('.card-nav');
    const cardSection = card.getBoundingClientRect();

    if(cardSection.top <= 0 && cardSection.bottom>0){
        if(cardNav){
            cardNav.classList.add('card-nav-op');
            
            cardNav.style.position ='sticky';
            cardNav.style.top ='-30px';
            cardNav.style.animation
        }
    }
    else{
        cardNav.classList.add('card-nav-not-op');
        cardNav.classList.remove('card-nav-op');
    }
    
});

let sideBar = document.querySelector(".side-bar");
let asideSection = document.querySelector(".aside-section");
let closeAside = document.querySelector("#close");
let overlay = document.querySelector(".overlay");


sideBar.addEventListener("click",() =>{
    asideSection.classList.add("active");
    overlay.classList.add("overlayactive")
    asideSection.classList.add("animation");
    nav.classList.add('bg')
    sideBar.classList.add("remove");
    closeAside.classList.add("active");
})
closeAside.addEventListener("click",() =>{
    asideSection.classList.remove("active");
    overlay.classList.remove('overlayactive');
    asideSection.classList.remove("animation");
    nav.classList.remove('bg')
    sideBar.classList.remove("remove");
    closeAside.classList.remove("active");
})