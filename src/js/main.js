$(document).ready(function() {
  let modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');

// Функционал модального окна
  modalBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });
  modal.on('сlick', function(e) {
    if ($(e.target).is('modal__dialog'))
    e.stopPropagation();
    else if ($(e.target).is('modal'))
    modal.removeClass('modal--visible');
  });
  $(document).on('keydown', function(e) {
    if (e.keyCode === 27 && $('.modal').hasClass('modal--visible'))
    modal.toggleClass('modal--visible');
  });

// Инициализация слайдеров
  const swiper = new Swiper('.swiper-container-hero', {
    autoplay: {
      delay: 5000,
    },
    // Optional parameters
    loop: true,
    speed: 800,
    spaceBetween: 100,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination-hero',
      type: 'bullets',
      clickable: 'true',
    },
  });
  
  const swiperServices = new Swiper('.swiper-container-services', {
    // Optional parameters
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    speed: 1200,
    
    navigation: {
      nextEl: '.swiper-button-next-services',
      prevEl: '.swiper-button-prev-services',
    },
    
  });

  const swiperGallery = new Swiper('.swiper-container-gallery', {
    // Optional parameters
    // spaceBetween: 30,
    loop: true,
    speed: 800,
    
    navigation: {
      nextEl: '.swiper-button-next-gallery',
      prevEl: '.swiper-button-prev-gallery',
    },

    pagination: {
      el: '.swiper-pagination-gallery',
      type: 'bullets',
      clickable: 'true',
    },
    
  });
});
