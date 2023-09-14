/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { register } from 'swiper/element/bundle';

import getScrollbarWidth from './helpers/getScrollbarWidth';
import maintenanceSlider from '../_blocks/organisms/mkb-maintenance/mkb-maintenance';
import portfolioSlider from '../_blocks/organisms/mkb-portfolio-slider/mkb-portfolio-slider';
import clientsSlider from '../_blocks/organisms/mkb-clients-slider/mkb-clients-slider';
import thumbsGallery from '../_blocks/organisms/mkb-thumbs-gallery/mkb-thumbs-gallery';
import changeColorHeader from '../_blocks/organisms/mkb-header/mkb-header';
import initMap from './map';
// eslint-disable-next-line no-unused-vars
import MkbRangeSlider from '../_blocks/molecules/mkb-range-slider/mkb-range-slider';

import '@shoelace-style/shoelace/dist/components/details/details.js';
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';
import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@justinribeiro/lite-youtube';

register();

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.style.setProperty('--scrollbar-width', `${getScrollbarWidth()}px`);

  changeColorHeader();
  maintenanceSlider();
  portfolioSlider();
  clientsSlider();
  thumbsGallery();
  initMap();
});
