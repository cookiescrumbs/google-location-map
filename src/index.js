import google from 'google';

const mapElement = document.querySelector('#location-map');

const mapOptions = () => ({
    draggable: true,
    scrollwheel: false,
    streetViewControl: true,
    mapTypeControlOptions: {
        mapTypeIds: [
            google.maps.MapTypeId.SATELLITE,
            google.maps.MapTypeId.ROADMAP
        ],
    },
    mapTypeId: google.maps.MapTypeId.SATELLITE
});


const map = new google.maps.Map(mapElement, mapOptions());
const lat = () => parseFloat(mapElement.dataset.lat) || null;
const lng = () => parseFloat(mapElement.dataset.lng) || null;
const zoom = () => parseInt(mapElement.dataset.zoom, 10) || 9;
const latLng = () => {

    const latLng = new google.maps.LatLng(lat(), lng());

    return latLng;

};

// const latLng = new google.maps.LatLng(lat(), lng());


const marker = () => {

    const marker = new google.maps.Marker({ position: latLng(), map: map });

    return marker;
};

const center = {
    lat: lat(),
    lng: lng()
};

map.setCenter(center);
map.setZoom(zoom());

google.maps.event.addListenerOnce(map, 'idle', marker());
