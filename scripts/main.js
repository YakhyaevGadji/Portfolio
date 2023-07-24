const headerBtn = document.querySelector('.header__button-nav');
const headerNav = document.querySelector('.header__nav');
const body = document.querySelector('body');


headerBtn.addEventListener('click', function() {
    headerBtn.classList.toggle('header__button-nav_active');
    headerNav.classList.toggle('header__nav_active');
    body.classList.toggle('lock');
});