import { createApp, reactive } from 'petite-vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import throttle from 'lodash.throttle';

const store = reactive({
  isCallbackModalShow: false,
  isThanksModalShow: false,
  isMobileCatalogFilterShow: false,
  isMenuShow: false,
  isSubmenuInMenuShow: false,
  isHeaderHasActiveClass: false,
  toggleMobileCatalogFilter(state) {
    if (state === 'open') {
      this.isMobileCatalogFilterShow = true;
    } else {
      this.isMobileCatalogFilterShow = false;
    }
  },
  handleScroll() {
    const changeColorHeader = () => {
      if (window.scrollY > 0) {
        this.isHeaderHasActiveClass = true;
      } else {
        this.isHeaderHasActiveClass = false;
      }
    };

    changeColorHeader();

    window.addEventListener('scroll', throttle(changeColorHeader, 150));
  },
});

function Form() {
  return {
    formData: {
      name: {
        value: '',
        isError: false,
        regExp: /[а-яА-Я]+/,
      },
      phone: {
        value: '',
        isError: false,
        regExp: /./,
      },
      comment: {
        value: '',
        isError: false,
        regExp: /./,
      },
    },
    validateInput(type) {
      const dataElement = this.formData[type];

      if (!dataElement.value.match(dataElement.regExp)) {
        dataElement.isError = true;
      } else {
        dataElement.isError = false;
      }
    },
    async fetchData(form) {
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: new FormData(form),
        });

        if (!response.ok) {
          throw new Error(`HTTP error. Status: ${response.status}`);
        }

        const result = await response.json();

        if (!result.status) return;

        form.reset();
        store.isCallbackModalShow = false;
        store.isThanksModalShow = true;
      } catch (error) {
        console.error(error);
        form.reset();
        store.isCallbackModalShow = false;
      }
    },
    onFormSubmit() {
      const { form } = this.$refs;
      const arrayFormData = Object.entries(this.formData);
      arrayFormData.forEach((formData) => {
        this.validateInput(formData[0]);
      });

      if (arrayFormData.find((formData) => formData[1].isError)) return;

      this.fetchData(form);
    },
  };
}

createApp({
  Form,
  store,
}).mount();
