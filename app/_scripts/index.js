/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { register } from 'swiper/element/bundle';
import getScrollbarWidth from './helpers/getScrollbarWidth';
import maintenanceSlider from '../_blocks/organisms/mkb-maintenance/mkb-maintenance';
import portfolioSlider from '../_blocks/organisms/mkb-portfolio-slider/mkb-portfolio-slider';
import clientsSlider from '../_blocks/organisms/mkb-clients-slider/mkb-clients-slider';
import '@shoelace-style/shoelace/dist/components/details/details.js';
import changeColorHeader from '../_blocks/organisms/mkb-header/mkb-header';
// eslint-disable-next-line no-unused-vars
import MkbRangeSlider from '../_blocks/molecules/mkb-range-slider/mkb-range-slider';

register();

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.style.setProperty('--scrollbar-width', `${getScrollbarWidth()}px`);

  maintenanceSlider();
  portfolioSlider();
  clientsSlider();
  changeColorHeader();
});
