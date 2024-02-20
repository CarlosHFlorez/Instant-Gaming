`use strict`;

//Variables
const navMenuSearch = document.querySelector(`.navmenu__search`);
const navMenuInput = document.querySelector(`.navmenu__input`);
const navMenuAdvanced = document.querySelector(`.navmenu__advanced`);
const navMenuSvgMagnify = document.querySelector(`.navmenu__svg--magnify`);
const navMenuClose = document.querySelector(`.navmenu__close`);
const navMenuLi = document.querySelectorAll(`.navmenu__li`);
const subMenu = document.querySelector(`.submenu`);
const navMenu = document.querySelector(`.navmenu`);
const navMenuDiv = document.querySelector(`.navmenu__div`);
const subMenuCategory = document.querySelectorAll(`.submenu__category`);
const navMenuSpan = document.querySelectorAll(`.navmenu__span`);
const navMenuSvg = document.querySelectorAll(`.navmenu__svg`);
const listingVideo = document.querySelectorAll(`.listing__video`);
const listingLink = document.querySelectorAll(`.listing__link`);
const cardsLi = document.querySelectorAll(`.cards__li`);
const cardsLink = document.querySelectorAll(`.cards__link`);
const cardsVideo = document.querySelectorAll(`.cards__video`);
const listingIndieLink = document.querySelectorAll(`.listingindie__link`);
const listingIndieVideo = document.querySelectorAll(`.listingindie__video`);
const listingWeekLink = document.querySelectorAll(`.listingweek__link`);
const listingWeekVideo = document.querySelectorAll(`.listingweek__video`);
const header = document.querySelector(`.header`);
const headerDiv = document.querySelector(`.header__div`);
const trendsSection = document.querySelector(`.trends__section`);
const menuUl = document.querySelector(`.menu__ul`);
const menu = document.querySelector(`.menu`);
const observerBg = document.querySelector(`#observer__bg`);
const categoriesBtn = document.querySelector(`.categories__btn`);
const catGridCat = document.querySelectorAll(`.catgrid__cat`);

//Search menu
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

//Categories menu
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
listingLink.forEach((eachLi, i) => {
  listingLink[i].addEventListener(`mouseenter`, () => {
    listingVideo[i].play();
  });
  listingLink[i].addEventListener(`mouseleave`, () => {
    listingVideo[i].pause();
    listingVideo[i].currentTime = 0;
  });
});
cardsLink.forEach((eachLi, i) => {
  cardsLink[i].addEventListener(`mouseenter`, () => {
    cardsVideo[i].play();
  });
  cardsLink[i].addEventListener(`mouseleave`, () => {
    cardsVideo[i].pause();
    cardsVideo[i].currentTime = 0;
  });
});
listingIndieLink.forEach((eachLi, i) => {
  listingIndieLink[i].addEventListener(`mouseenter`, () => {
    listingIndieVideo[i].play();
  });
  listingIndieLink[i].addEventListener(`mouseleave`, () => {
    listingIndieVideo[i].pause();
    listingIndieVideo[i].currentTime = 0;
  });
});
listingWeekLink.forEach((eachLi, i) => {
  listingWeekLink[i].addEventListener(`mouseenter`, () => {
    listingWeekVideo[i].play();
  });
  listingWeekLink[i].addEventListener(`mouseleave`, () => {
    listingWeekVideo[i].pause();
    listingWeekVideo[i].currentTime = 0;
  });
});

//Header observer
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
      navMenuDiv.classList.remove(`is--hidden`);
      headerDiv.classList.remove(`is--hidden`);
      menu.classList.remove(`is--deactivated`);
      menu.classList.remove(`is--hidden`);
      navMenuSvg.forEach((eachSvg, i) => {
        eachSvg.classList.remove(`is--deactivated`);
      });
    } else {
      header.style.setProperty(`--opacity`, 1);
      menuUl.classList.add(`is--hidden`);
      navMenuDiv.classList.add(`is--hidden`);
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

//Categories button
const arrayCategories = Array.from(catGridCat);
const arrayHidden = arrayCategories.slice(6, 26);
catGridCat.forEach((eachCat, i) => {
  if (i > 5) {
    eachCat.classList.add(`is--hidden`);
  }
});
categoriesBtn.addEventListener(`click`, () => {
  arrayHidden.forEach((eachCat, i) => {
    eachCat.classList.toggle(`is--hidden`);
  });
});
