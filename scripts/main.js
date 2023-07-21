const headerNav = document.querySelector('.header__nav');
const headerBtn = document.querySelector('.header__button-nav');

headerBtn.addEventListener('click', function() {
    headerNav.classList.toggle('header__nav_open');
    headerBtn.classList.toggle('.header__button-nav active');
});