"use strict";

const navMenuSearch = document.querySelector(`.navmenu__search`);
const navMenuInput = document.querySelector(`.navmenu__input`);
const navMenuAdvanced = document.querySelector(`.navmenu__advanced`);
const navMenuSvgMagnify = document.querySelector(`.navmenu__svg--magnify`);
const navMenuClose = document.querySelector(`.navmenu__close`);

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
