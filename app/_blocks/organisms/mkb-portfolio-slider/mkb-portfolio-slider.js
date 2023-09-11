function portfolioSlider() {
  const sliderElement = document.querySelector('.portfolio-slider-block__slider');

  if (!sliderElement) return;

  const sliderParams = {
    slidesPerView: 1.2,
    spaceBetween: 20,
    navigation: {
      nextEl: '.portfolio-slider-block__button--right',
      prevEl: '.portfolio-slider-block__button--left',
    },
    breakpoints: {
      901: {
        slidesPerView: 2.5,
      },
    },
  };

  Object.assign(sliderElement, sliderParams);
  sliderElement.initialize();
}

export default portfolioSlider;
