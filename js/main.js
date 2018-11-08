// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
//const menuBranding = document.querySelector('.menu-branding');
const main = document.querySelector('#home');
const title = document.querySelector('#title');
const footer = document.querySelector('#main-footer');
const navItems = document.querySelectorAll('.nav-item');

//set initial state of menu
let showMenu = false;

// document.getElementById("hideAll").style.display = "block";

// window.onload = function() 
// { document.getElementById("hideAll").style.display = "none"; }

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        //menuBranding.classList.add('show');
        main.classList.add('show');
        title.classList.add('show');
        footer.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        //menuBranding.classList.remove('show');
        main.classList.remove('show');
        title.classList.remove('show');
        footer.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set Menu State
        showMenu = false;
    }
}