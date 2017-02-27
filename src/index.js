import google from 'google'

const mapElement = document.querySelector('#location-map');

const mapOptions = () => {
  return {
    draggable: true,
    scrollwheel: false,
    streetViewControl: true,
    mapTypeControlOptions: {
        mapTypeIds: [
            google.maps.MapTypeId.SATELLITE,
            google.maps.MapTypeId.ROADMAP
        ]
    },
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };
}

const lat = () => parseFloat(mapElement.dataset.lat) || null;
const lng = () => parseFloat(mapElement.dataset.lng) || null;
const zoom = () => parseInt(mapElement.dataset.zoom) || 9;
const center = {lat: lat(), lng: lng()};
const map = new google.maps.Map(mapElement, mapOptions());

map.setCenter(center);
map.setZoom(zoom());


google.maps.event.addListenerOnce(map, 'idle', () => {
    new google.maps.Marker({
      position: new google.maps.LatLng(lat(), lng()),
      map: map
    });
});