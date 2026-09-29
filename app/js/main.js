
// NAVBAR 

const navBurger = document.querySelector('#navBurger');
const navMenu = document.querySelector('#navMenu');

navBurger.addEventListener('click', toggleNavMenu);

function toggleNavMenu() {
  navBurger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

const navMenuLinks = document.querySelectorAll('.nav-menu-link');

Array.from(navMenuLinks).forEach(element => element.addEventListener('click', closeNavMenu));

function closeNavMenu() {
  navMenu.classList.toggle('active');
}
