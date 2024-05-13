// Підключаємо слайдер Swiper з node_modules
import Swiper from 'swiper';
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";

// Ініціалізація слайдерів
function initSliders() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці
  if (document.querySelector('.portfolio-slider')) {
    // Створюємо слайдер
    new Swiper('.portfolio-slider', {
      modules: [Navigation, Keyboard, Pagination, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 20,
      keyboard: {
        enabled: true,
      },
      initialSlide: 1,
      centeredSlides: true,
      speed: 1000,
      lazy: true,

      // Ефекти
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      // Пагінація
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
      // Брейкпоінти
      breakpoints: {
        740: {
          spaceBetween: 16,
          slidesPerView: 1.3,
        },
        1268: {
          spaceBetween: 30,
          slidesPerView: 2.0,
        },
      },
    });
  }
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск ініціалізації слайдерів
  initSliders();
  // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
  //initSlidersScroll();
});