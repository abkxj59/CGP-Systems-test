const openButton = document.querySelector('#open-popup');
const popup = document.querySelector('.popup');
const popupOverlay = document.querySelector('.popup__overlay');
const closeButton = document.querySelector('.popup__close');
const collapseButton = document.querySelector('.popup__collapse');

const openPopup = () => {
  popup.classList.add('popup--opened');
};

const closePopup = () => {
  popup.classList.remove('popup--opened');
};

const initPopup = () => {
  if (popup && openButton) {
    popup.classList.remove('popup--nojs');
    // popup.classList.remove('popup--opened');
    openButton.addEventListener('click', openPopup);
    closeButton.addEventListener('click', closePopup);
    collapseButton.addEventListener('click', closePopup);
    popupOverlay.addEventListener('click', closePopup);
    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        closePopup();
      }
    });
  }
};

export {initPopup};
