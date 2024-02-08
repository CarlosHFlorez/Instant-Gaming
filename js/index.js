"use strict";

const navMenuSearch = document.querySelector(`.navmenu__search`);
const navMenuInput = document.querySelector(`.navmenu__input`);
const navMenuAdvanced = document.querySelector(`.navmenu__advanced`);
const navMenuSvgMagnify = document.querySelector(`.navmenu__svg--magnify`);
const navMenuClose = document.querySelector(`.navmenu__close`);
const navMenuLi = document.querySelectorAll(`.navmenu__li`);
const subMenu = document.querySelector(`.submenu`);
const navMenu = document.querySelector(`.navmenu`);
const navMenuUl = document.querySelector(`.navmenu__ul`);
const subMenuCategory = document.querySelectorAll(`.submenu__category`);
const navMenuSpan = document.querySelectorAll(`.navmenu__span`);
const navMenuSvg = document.querySelectorAll(`.navmenu__svg`);
const listingVideo = document.querySelectorAll(`.listing__video`);
const listingLi = document.querySelectorAll(`.listing__li`);
const cardsLi = document.querySelectorAll(`.cards__li`);
const cardsVideo = document.querySelectorAll(`.cards__video`);
const listingIndieLi = document.querySelectorAll(`.listingindie__li`);
const listingIndieVideo = document.querySelectorAll(`.listingindie__video`);
const listingWeekLi = document.querySelectorAll(`.listingweek__li`);
const listingWeekVideo = document.querySelectorAll(`.listingweek__video`);
const header = document.querySelector(`.header`);
const headerDiv = document.querySelector(`.header__div`);
const trendsSection = document.querySelector(`.trends__section`);
const menuUl = document.querySelector(`.menu__ul`);
const menu = document.querySelector(`.menu`);
const observerBg = document.querySelector(`#observer__bg`);

//Para el slider
const commentsLi = document.querySelectorAll(`.comments__li`);

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
    navMenuSpan.forEach((eachSpan, k) => {
      eachSpan.classList.toggle(`is--hidden`);
      navMenuSpan[category].classList.remove(`is--hidden`);
    });
    navMenuSvg.forEach((eachSvg, p) => {
      eachSvg.classList.toggle(`is--hidden`);
      navMenuSvg[category].classList.remove(`is--hidden`);
    });

    subMenu.addEventListener(`mouseleave`, () => {
      subMenu.classList.remove(`is--active`);
      subMenuCategory[category].classList.remove(`is--active`);
      navMenuSpan.forEach((eachSpan, k) => {
        eachSpan.classList.remove(`is--hidden`);
      });
      navMenuSvg.forEach((eachSvg, p) => {
        eachSvg.classList.remove(`is--hidden`);
      });
    });

    navMenuLi.forEach((eachLi, j) => {
      navMenuLi[j].addEventListener(`mouseenter`, () => {
        subMenu.classList.remove(`is--active`);
        subMenuCategory[category].classList.remove(`is--active`);
        navMenuSpan.forEach((eachSpan, k) => {
          eachSpan.classList.remove(`is--hidden`);
        });
        navMenuSvg.forEach((eachSvg, p) => {
          eachSvg.classList.remove(`is--hidden`);
        });
      });
      navMenuSearch.addEventListener(`mouseenter`, () => {
        subMenu.classList.remove(`is--active`);
        subMenuCategory[category].classList.remove(`is--active`);
        navMenuSpan.forEach((eachSpan, k) => {
          eachSpan.classList.remove(`is--hidden`);
        });
        navMenuSvg.forEach((eachSvg, p) => {
          eachSvg.classList.remove(`is--hidden`);
        });
      });
    });
  });
});

//Videos on hover
listingLi.forEach((eachLi, i) => {
  listingLi[i].addEventListener(`mouseenter`, () => {
    listingVideo[i].play();
  });
  listingLi[i].addEventListener(`mouseleave`, () => {
    listingVideo[i].pause();
    listingVideo[i].currentTime = 0;
  });
});
cardsLi.forEach((eachLi, i) => {
  cardsLi[i].addEventListener(`mouseenter`, () => {
    cardsVideo[i].play();
  });
  cardsLi[i].addEventListener(`mouseleave`, () => {
    cardsVideo[i].pause();
    cardsVideo[i].currentTime = 0;
  });
});
listingIndieLi.forEach((eachLi, i) => {
  listingIndieLi[i].addEventListener(`mouseenter`, () => {
    listingIndieVideo[i].play();
  });
  listingIndieLi[i].addEventListener(`mouseleave`, () => {
    listingIndieVideo[i].pause();
    listingIndieVideo[i].currentTime = 0;
  });
});
listingWeekLi.forEach((eachLi, i) => {
  listingWeekLi[i].addEventListener(`mouseenter`, () => {
    listingWeekVideo[i].play();
  });
  listingWeekLi[i].addEventListener(`mouseleave`, () => {
    listingWeekVideo[i].pause();
    listingWeekVideo[i].currentTime = 0;
  });
});

//Header
let observerHeaderOptions = {
  root: null,
  rootMargin: `0px`,
  threshold: [0.9],
};
let observerHeaderCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      header.style.setProperty(`--opacity`, 0);
      menuUl.classList.remove(`is--hidden`);
      navMenuUl.classList.remove(`is--hidden`);
      headerDiv.classList.remove(`is--hidden`);
      menu.classList.remove(`is--deactivated`);
      menu.classList.remove(`is--hidden`);
      navMenuSvg.forEach((eachSvg, i) => {
        eachSvg.classList.remove(`is--deactivated`);
      });
    } else {
      header.style.setProperty(`--opacity`, 1);
      menuUl.classList.add(`is--hidden`);
      navMenuUl.classList.add(`is--hidden`);
      headerDiv.classList.add(`is--hidden`);
      menu.classList.add(`is--deactivated`);
      menu.classList.add(`is--hidden`);
      navMenuSvg.forEach((eachSvg, i) => {
        eachSvg.classList.add(`is--deactivated`);
      });
    }
  });
};
let observerHeader = new IntersectionObserver(observerHeaderCallback, observerHeaderOptions);
observerHeader.observe(observerBg);
