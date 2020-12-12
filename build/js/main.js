'use strict';

/* MENU */

(function () {

  var headerBody = document.querySelector('.header__wrapper');
  var burger = document.querySelector('.burger');

  headerBody.classList.add('header__wrapper--js');

  if (burger) {
    burger.addEventListener('click', function () {
      headerBody.classList.toggle('header__wrapper--js');
      burger.classList.toggle('active');
    });
  }
}());


/* FAQ */

(function () {

  var faqList = document.querySelector('.faq__list');

  faqList.classList.remove('faq__list--nojs');

  if (faqList) {
    var toggleFaqItem = function (item) {
      item.classList.toggle('faq__item--opened');
    };

    faqList.addEventListener('click', function (evt) {
      var faqItem = evt.target.closest('li');
      toggleFaqItem(faqItem);
    });
  }
}());
