const button = document.querySelector('.about__more-button');
const text = document.querySelector('.about__text');
const hiddenText = document.querySelector('.about__more');

const initAccordion = () => {
  if (button) {
    text.classList.remove('about__text--nojs');

    button.addEventListener('click', () => {
      hiddenText.classList.toggle('about__more--visible');
      button.classList.toggle('about__more-button--hide');

      button.textContent = 'Show More';
      if (button.classList.contains('about__more-button--hide')) {
        button.textContent = 'Show Less';
      }
    });
  }
};

export {initAccordion};
