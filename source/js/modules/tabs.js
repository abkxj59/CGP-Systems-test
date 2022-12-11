const initTabs = (blockName) => {
  const block = document.querySelector(`.${blockName}`);
  if (block) {
    const tabs = block.querySelectorAll(`${blockName}__tab`);
    const items = block.querySelectorAll(`${blockName}__item`);
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
    }
  }
};

export {initTabs};
