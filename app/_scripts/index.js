/* eslint-disable import/no-unresolved */
import { register } from 'swiper/element/bundle';
import getScrollbarWidth from './helpers/getScrollbarWidth';
import maintenanceSlider from '../_blocks/organisms/mkb-maintenance/mkb-maintenance';

register();

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.style.setProperty('--scrollbar-width', `${getScrollbarWidth()}px`);

  maintenanceSlider();
});
