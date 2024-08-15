$(document).ready(function() {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 17,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      320: {
        centeredSlides: true,
      },
      426: {
        centeredSlides: false,
      },
    },
    navigation: {
      nextEl: '.nav-btn-next',
      prevEl: '.nav-btn-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
});
