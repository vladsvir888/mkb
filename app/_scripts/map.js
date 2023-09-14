export default function initMap() {
  if (typeof ymaps === 'undefined') return;

  ymaps.ready(() => {
    const maps = document.querySelectorAll('.map');

    if (!maps.length) return;

    maps.forEach((map) => {
      const myMap = new ymaps.Map(
        map,
        {
          center: map.dataset.mapCoords.split(', '),
          zoom: 12,
        },
        {
          searchControlProvider: 'yandex#search',
        },
      );
      const icon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iOSIgZmlsbD0iIzcwODRDOCIvPgo8Y2lyY2xlIGN4PSIyNCIgY3k9IjI0IiByPSIxMi41IiBzdHJva2U9IiM3MDg0QzgiLz4KPGNpcmNsZSBvcGFjaXR5PSIwLjUiIGN4PSIyNCIgY3k9IjI0IiByPSIyMy41IiBzdHJva2U9IiM3MDg0QzgiLz4KPC9zdmc+Cg==';
      const placemark = new ymaps.Placemark(myMap.getCenter(), {}, {
        iconLayout: 'default#image',
        iconImageHref: icon,
        iconImageSize: [48, 48],
      });

      myMap.geoObjects.add(placemark);
    });
  });
}
