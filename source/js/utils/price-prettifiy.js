const prices = document.querySelectorAll('[data-price]');

const prettifyPrice = (price) => price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ');

const replacePrettyPrices = () => {
  if (prices) {
    prices.forEach((priceElement) => {
      const priceContent = priceElement.textContent;
      priceElement.textContent = prettifyPrice(priceContent);
    });
  }
};

export {replacePrettyPrices};
