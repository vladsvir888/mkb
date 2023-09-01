function clientsSlider() {
  const sliderElement = document.querySelector('.clients-slider-block__slider');

  if (!sliderElement) return;

  const sliderParams = {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.clients-slider-block__button--right',
      prevEl: '.clients-slider-block__button--left',
    },
  };

  Object.assign(sliderElement, sliderParams);
  sliderElement.initialize();
}

export default clientsSlider;
