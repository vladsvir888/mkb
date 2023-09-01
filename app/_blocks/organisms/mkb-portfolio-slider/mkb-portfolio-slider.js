function portfolioSlider() {
  const sliderElement = document.querySelector('.portfolio-slider-block__slider');

  if (!sliderElement) return;

  const sliderParams = {
    slidesPerView: 2.5,
    spaceBetween: 20,
    navigation: {
      nextEl: '.portfolio-slider-block__button--right',
      prevEl: '.portfolio-slider-block__button--left',
    },
  };

  Object.assign(sliderElement, sliderParams);
  sliderElement.initialize();
}

export default portfolioSlider;
