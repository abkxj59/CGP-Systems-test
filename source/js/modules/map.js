// const mapImg = document.querySelector('.map__placeholder');
const map = document.querySelector('.map');

const initMap = () => {
  map.classList.remove('map--nojs');

  const myMap = new ymaps.Map('map', {
    center: [59.998205, 30.385250],
    zoom: 15,
  });

  const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/svg/pin.svg',
    iconImageSize: [27, 39],
    iconImageOffset: [-13.5, -39],
  });

  myMap.geoObjects.add(myPlacemark);

  // myMap.balloon.open([59.998205, 30.385250], '', {
  //   closeButton: false,
  // });
};

export {initMap};
