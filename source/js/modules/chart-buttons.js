const chartButtons = document.querySelectorAll('.charts__button');

const initChartButtons = () => {
  if (chartButtons) {
    chartButtons.forEach((button) => {
      button.addEventListener('click', () =>{
        const activeButton = document.querySelector('.charts__button--active');
        activeButton.classList.remove('charts__button--active');
        button.classList.add('charts__button--active');
      });
    });
  }
};

export {initChartButtons};
