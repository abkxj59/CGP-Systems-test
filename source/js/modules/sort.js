const select = document.querySelector('.sort__selector--js');
const selectNative = document.querySelector('.sort__selector--nojs');
const currentOption = document.querySelector('.sort__selected');
const items = document.querySelector('.sort__list');
let checkedItem = document.querySelector('.sort__item--current');

const toggleSortList = () => {
  select.classList.toggle('sort__selector--closed');
}

const initializeSort = () => {
  selectNative.hidden = true;
  select.hidden = false;
  select.addEventListener('click', toggleSortList);
  items.addEventListener('click', (evt) => {
    const clickedItem = evt.target;
    checkedItem.classList.remove('sort__item--current');
    clickedItem.classList.add('sort__item--current');
    checkedItem = clickedItem;
    currentOption.textContent = checkedItem.textContent
  });

}

export {initializeSort};
