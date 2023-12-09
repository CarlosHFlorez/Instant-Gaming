"use strict";

const navMenuSearch = document.querySelector(`.navmenu__search`);
const navMenuInput = document.querySelector(`.navmenu__input`);
const navMenuAdvanced = document.querySelector(`.navmenu__advanced`);
const navMenuSvgMagnify = document.querySelector(`.navmenu__svg--magnify`);
const navMenuClose = document.querySelector(`.navmenu__close`);
const navMenuLi = document.querySelectorAll(`.navmenu__li`);
const subMenu = document.querySelector(`.submenu`);
const navMenu = document.querySelector(`.navmenu`);
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
navMenuLi.forEach((eachLi, i) => {
  navMenuLi[i].addEventListener(`click`, () => {
    let category = i;
    subMenu.classList.toggle(`is--active`);
    subMenuCategory[category].classList.toggle(`is--active`);

    navMenu.addEventListener(`mouseleave`, () => {
      subMenu.classList.remove(`is--active`);
      subMenuCategory[category].classList.remove(`is--active`);
    });
    navMenuLi.forEach((eachLi, j) => {
      navMenuLi[j].addEventListener(`mouseenter`, () => {
        subMenu.classList.remove(`is--active`);
        subMenuCategory[category].classList.remove(`is--active`);
      });
    });
  });
});
