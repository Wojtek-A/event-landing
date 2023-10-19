const menuIcon = document.querySelector('.header__menu-icon');
const nav = document.querySelector('.header-nav');
const navLink = document.querySelectorAll('.header-nav__link');

const showMenu = () => {
  if (nav.classList.contains('hidden')) {
    nav.classList.remove('hidden');
  } else {
    nav.classList.add('hidden');
  }
};

export const navigation = () => {
  menuIcon.addEventListener('click', showMenu);
  navLink.forEach(elem => {
    elem.addEventListener('click', showMenu);
  });
};
