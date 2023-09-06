import noUiSlider from 'nouislider';

export default class MkbRangeSlider extends HTMLElement {
  connectedCallback() {
    this.slider = this.querySelector('.range-slider__slider');
    this.inputFrom = this.querySelector('.range-slider__input--from');
    this.inputTo = this.querySelector('.range-slider__input--to');
    this.inputs = [this.inputFrom, this.inputTo];

    this.initSlider();
    this.onKeypressInput();
  }

  initSlider() {
    noUiSlider.create(this.slider, {
      start: [
        Number(this.slider.dataset.rangeSliderStartValue),
        Number(this.slider.dataset.rangeSliderEndValue),
      ],
      connect: true,
      range: {
        min: Number(this.slider.dataset.rangeSliderMinValue),
        max: Number(this.slider.dataset.rangeSliderMaxValue),
      },
    });

    this.slider.noUiSlider.on('update', (values, handle) => {
      this.inputs[handle].value = values[handle];
    });
  }

  onKeypressInput() {
    this.inputs.forEach((input, handle) => {
      input.addEventListener('change', () => {
        this.slider.noUiSlider.setHandle(handle, input.value);
      });

      input.addEventListener('keydown', (e) => {
        const values = this.slider.noUiSlider.get();
        const value = Number(values[handle]);
        const steps = this.slider.noUiSlider.steps();
        const step = steps[handle];
        let position;

        switch (e.which) {
          case 13:
            this.slider.noUiSlider.setHandle(handle, this.value);
            break;

          case 38:
            position = step[1];

            if (position === false) {
              position = 1;
            }

            if (position !== null) {
              this.slider.noUiSlider.setHandle(handle, value + position);
            }

            break;

          case 40:
            position = step[0];

            if (position === false) {
              position = 1;
            }

            if (position !== null) {
              this.slider.noUiSlider.setHandle(handle, value - position);
            }

            break;
          default:
            break;
        }
      });
    });
  }
}

customElements.define('mkb-range-slider', MkbRangeSlider);
