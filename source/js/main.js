import {initPopup} from './modules/popup.js';
import {initTabs} from './modules/tabs.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  initPopup();

  window.addEventListener('load', () => {
    initTabs('about');
  });
});
