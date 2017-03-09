import google from 'google';

const lat = (el) => parseFloat(el.dataset.lat) || null;
const lng = (el) => parseFloat(el.dataset.lng) || null;
const zoom = (el) => parseInt(el.dataset.zoom, 10) || 9;
const center = (el) => ({
    lat: lat(el),
    lng: lng(el)
});

const latLng = (lat, lng) => {
    const latLng = new google.maps.LatLng(lat, lng);

    return latLng;
};

const addMarker = (map, lat, lng) => {
    google.maps.event.addListenerOnce(map, 'idle', () => {

        const marker = new google.maps.Marker({ position: latLng(lat, lng), map: map });

        return marker;
    });
};

const render = (mapElement, mapOptions) => {
    const map = new google.maps.Map(mapElement, mapOptions());

    map.setCenter(center(mapElement));
    map.setZoom(zoom(mapElement));

    addMarker(map, lat(mapElement), lng(mapElement));
};

export { render };
