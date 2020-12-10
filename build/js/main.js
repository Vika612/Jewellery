'use strict';

/* MENU */

var headerBody = document.querySelector('.header__wrapper');
var burger = document.querySelector('.burger');

headerBody.classList.add('header__wrapper--js');

if (burger) {
  burger.addEventListener('click', function () {
    headerBody.classList.toggle('header__wrapper--js');
    burger.classList.toggle('active');
  });
}
