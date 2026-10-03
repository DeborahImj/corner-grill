
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
  navBurger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

// REVIEWS SWIPER

const swiper = new Swiper('.swiper', {
  effect: 'cube',
  grabCursor: true,
  cubeEffect: {
    shadow: false,
    slideShadows: false,
  },
  speed: 500,
  navigation: {
    nextEl: '.swipe-button-next',
    prevEl: '.swipe-button-prev',
  },
});
