import {initPopup} from './modules/popup.js';
import {initTabs} from './modules/tabs.js';
import {initAccordion} from './modules/accordion.js';
import {initPriceChart} from './modules/init-price-chart.js';
import {initAnalystsChart} from './modules/init-analysts-chart.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  initPopup();
  initPriceChart();
  initAnalystsChart();

  window.addEventListener('load', () => {
    initTabs('about');
    initTabs('popup');
    initAccordion();
  });
});
