import { A11y } from 'swiper/modules';

function maintenanceSlider() {
  const sliderElement = document.querySelector('.maintenance__slider');

  if (!sliderElement) return;

  const sliderParams = {
    modules: [A11y],
    a11y: {
      id: null,
      nextSlideMessage: 'Следующий список услуг',
    },
    navigation: {
      nextEl: '.maintenance__slide-button',
    },
  };

  Object.assign(sliderElement, sliderParams);
  sliderElement.initialize();
}

export default maintenanceSlider;
