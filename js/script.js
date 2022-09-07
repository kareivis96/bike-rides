// burger menu
let menuButton = document.querySelector('.menu-button');
let navList = document.querySelector('.header__nav-list');

menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('menu-button_active');
  navList.classList.toggle('header__nav-list_visible');
});

// hide header
let lastScroll = 0;
let defaultOffset = 200;
let header = document.querySelector('.header');

let scrollPosition = () => window.pageYOffset;
let isHeaderHide = () => header.classList.contains('header_hide');

window.addEventListener('scroll', function () {
  if (lastScroll < scrollPosition() && !isHeaderHide() && scrollPosition() > defaultOffset) {
    header.classList.add('header_hide');
  } else if (lastScroll > scrollPosition() && isHeaderHide()) {
    header.classList.remove('header_hide');
  }

  lastScroll = scrollPosition();
});
