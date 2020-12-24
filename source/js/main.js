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


/* FILTER */

(function () {
  var filter = document.querySelector('.filter');
  var filterToggle = document.querySelector('#filter-toggle');
  var filterToggleLabel = document.querySelector('.main-catalog__toggle');
  var filterAccList = document.querySelectorAll('.filter-acc');

  if (filter) {
    filter.classList.remove('filter--nojs');

    filterToggle.addEventListener('change', function () {
      if (filterToggle.checked) {
        filter.classList.add('filter--opened');
        filterToggleLabel.classList.add('main-catalog__toggle--opened');
      } else {
        filter.classList.remove('filter--opened');
        filterToggleLabel.classList.remove('main-catalog__toggle--opened');
      }
    });

    for (var i = 0; i < filterAccList.length; i++) {
      var filterAcc = filterAccList[i];
      filterAcc.classList.remove('nojs');
    }
  }
}());


/* FAQ */

(function () {
  var faqList = document.querySelector('.faq__list');

  if (faqList) {
    faqList.classList.remove('faq__list--nojs');

    var toggleFaqItem = function (item) {
      item.classList.toggle('faq__item--opened');
    };

    faqList.addEventListener('click', function (evt) {
      var faqItem = evt.target.closest('li');
      toggleFaqItem(faqItem);
    });
  }
}());


/* SLIDER */

(function () {
  var sliderContainer = document.querySelector('.new__slider');

  if (sliderContainer) {
    // eslint-disable-next-line no-new
    // eslint-disable-next-line no-undef
    var swiper = new Swiper('.new__slider', {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
      loop: true,
      breakpoints: {
        0: {
          pagination: {
            el: '.new__item-count',
            clickable: true,
            type: 'custom',
            renderCustom: function (Swiper, current, total) {
              return current + ' of ' + total;
            },
          },
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            el: '.new__item-count',
            clickable: true,
            renderBullet: function (index, className) {
              return '<button class="' + className + '" aria-label="Slide ' + (index + 1) + '">' + (index + 1) + '</button>';
            },
          },
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          pagination: {
            el: '.new__item-count',
            clickable: true,
            renderBullet: function (index, className) {
              return '<button class="' + className + '" aria-label="Slide ' + (index + 1) + '">' + (index + 1) + '</button>';
            },
          },
        },
      },
      navigation: {
        nextEl: '.new__item-next-button',
        prevEl: '.new__item-prev-button',
      },
    });
    swiper.slideNext();
  }
}());
