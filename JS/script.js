

// =================================================== DARK Theme ==========================================
const themeButton = document.getElementById("theme-button");
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';     // icon changes dark theme to light theme


// ========================================== Previously selected (if user selected) =======================

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon')


// we oobtain the current theme that the interface has by vliadationg the dark theme class 

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ?'dark':'light';

const setCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun';


// we need to validate if the user has previously chosen a topic

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ?'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ?'add' : 'remove'](iconTheme);
}

//Activate or deactivate the button manually when it is clicked

themeButton.addEventListener('click',() => {
    // add or remove the dark/light item
    
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // we have to save this theme and current icon that the user has selected
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-theme', getCurrentIcon());

});


console.log("My theme setting is working");


// ============================================= Menu Show Y Hidden ========================

const navMenu = document.getElementById('nav-menu');
const navToggle =document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


//  ======================  Menu Show  =========
// 
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    });
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    });
}


console.log("Menu Y is Setting working !");

//  ========================================== Remove menu profile ===========================
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n=>n.addEventListener('click',linkAction));

console.log("Remove menu profile is working");



//  ========================================== Typewriting effect ===========================

// Here we don't need any thing to import 

new Typewriter('#typewriter', {
  strings: ['Vivek Kumar', 'An Engineer' , 'Artist', 'Bike Lover'],
  autoStart: true,
  loop:true,
  cursor:"|"
});

console.log("Type writer is woorking");


// ================================ Portfolio Swipper

// Swipper script
    var swiper = new Swiper(".block-slider", {
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
    });


    var swiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        mousewheel: {
          invert: false,
        },
        // autoHeight: true,
        pagination: {
          el: '.blog-slider__pagination',
          clickable: true,
        }
      });