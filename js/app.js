// PORTFOLIO SWIPER
let swiper = new Swiper('.mySwiper', {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Anima scroll
const sections = document.querySelectorAll('.js-scroll');
const windowHalf = window.innerHeight * 0.5;

function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top - windowHalf;
    if (sectionTop < 0) {
      section.classList.add('active');
    }
  });
}

window.addEventListener('scroll', animaScroll);
