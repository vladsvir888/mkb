function maintenanceSlider() {
  const sliderElement = document.querySelector('.maintenance__slider');

  if (!sliderElement) return;

  const sliderParams = {
    spaceBetween: 10,
    navigation: {
      nextEl: '.maintenance__slide-button',
    },
  };

  Object.assign(sliderElement, sliderParams);
  sliderElement.initialize();
}

export default maintenanceSlider;
