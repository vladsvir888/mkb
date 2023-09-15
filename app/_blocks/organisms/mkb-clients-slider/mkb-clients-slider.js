import { A11y } from 'swiper/modules';

function clientsSlider() {
  const sliderElement = document.querySelector('.clients-slider-block__slider');

  if (!sliderElement) return;

  const sliderParams = {
    modules: [A11y],
    a11y: {
      id: null,
      prevSlideMessage: 'Предыдущий клиент',
      nextSlideMessage: 'Следующий клиент',
    },
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.clients-slider-block__button--right',
      prevEl: '.clients-slider-block__button--left',
    },
    breakpoints: {
      601: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      901: {
        slidesPerView: 4,
      },
    },
  };

  Object.assign(sliderElement, sliderParams);
  sliderElement.initialize();
}

export default clientsSlider;
