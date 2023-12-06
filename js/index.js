"use strict";

const navMenuSearch = document.querySelector(`.navmenu__search`);
const navMenuInput = document.querySelector(`.navmenu__input`);
const navMenuAdvanced = document.querySelector(`.navmenu__advanced`);
const navMenuSvgMagnify = document.querySelector(`.navmenu__svg--magnify`);
const navMenuClose = document.querySelector(`.navmenu__close`);

const navMenuLink = document.querySelectorAll(`.navmenu__a`);

const subMenu = document.querySelector(`.submenu`);

// const subMenuPc = document.querySelector(`.submenu__pc`);
// const subMenuPlaystation = document.querySelector(`.submenu__playstation`);
// const subMenuXbox = document.querySelector(`.submenu__xbox`);
// const subMenuNintendo = document.querySelector(`.submenu__nintendo`);

const subMenuCategory = document.querySelectorAll(`.submenu__category`);

// Menú de búsqueda
navMenuSearch.addEventListener(`click`, () => {
  navMenuSearch.classList.add(`is--active`);
  navMenuInput.classList.add(`is--active`);
  navMenuAdvanced.classList.add(`is--active`);
  navMenuSvgMagnify.classList.add(`is--hidden`);
  navMenuClose.classList.add(`is--active`);
});

navMenuClose.addEventListener(`click`, () => {
  navMenuSearch.classList.remove(`is--active`);
  navMenuInput.classList.remove(`is--active`);
  navMenuAdvanced.classList.remove(`is--active`);
  navMenuSvgMagnify.classList.remove(`is--hidden`);
  navMenuClose.classList.remove(`is--active`);
});

// Menú categorías
navMenuLink.forEach((eachLink, i) => {
  navMenuLink[i].addEventListener(`click`, () => {
    let category = i;
    subMenu.classList.remove(`is--active`);
    subMenuCategory.forEach((eachCategory, j) => {
      eachCategory.classList.remove(`is--active`);
      subMenuCategory[category].classList.add(`is--active`);
    });
    subMenu.classList.add(`is--active`);

    navMenuLink[i].addEventListener(`mouseout`, () => {
      subMenu.classList.remove(`is--active`);
      subMenuCategory[category].classList.remove(`is--active`);
    });
    subMenu.addEventListener(`mouseout`, () => {
      subMenu.classList.remove(`is--active`);
      subMenuCategory[category].classList.remove(`is--active`);
    });
  });
});
