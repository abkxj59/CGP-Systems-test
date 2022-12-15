import {closePopup} from './popup.js';

const initTabs = (blockName) => {
  const block = document.querySelector(`.${blockName}`);
  if (block) {
    const tabs = block.querySelectorAll(`.${blockName}__tab`);
    const tabsCollection = block.querySelector(`.${blockName}__tabs`).children;
    const items = block.querySelectorAll(`.${blockName}__item`);
    const itemsCollection = block.querySelector(`.${blockName}__content`).children;
    const closeButtons = block.querySelectorAll(`.${blockName}__tab-close`);
    block.classList.remove(`${blockName}--nojs`);

    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', () => {
        tabs.forEach((tab) => {
          tab.classList.remove(`${blockName}__tab--active`);
        });
        items.forEach((item) => {
          item.classList.remove(`${blockName}__item--active`);
        });
        tabs[i].classList.add(`${blockName}__tab--active`);
        items[i].classList.add(`${blockName}__item--active`);
      });

      if (closeButtons[i]) {
        closeButtons[i].addEventListener('click', (evt) => {
          evt.stopPropagation();
          if (tabs[i].classList.contains(`${blockName}__tab--active`)) {
            if (tabsCollection.length < 2) {
              closePopup();
            } else {
              tabs[i].remove();
              items[i].remove();
              tabsCollection[0].classList.add(`${blockName}__tab--active`);
              itemsCollection[0].classList.add(`${blockName}__item--active`);
            }
          }
        });
      }
    }
  }
};

export {initTabs};
