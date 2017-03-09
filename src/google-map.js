import google from 'google';

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

const render = (mapElement, mapOptions, mapSettings) => {
    const map = new google.maps.Map(mapElement, mapOptions());

    map.setCenter(mapSettings().center);
    map.setZoom(mapSettings().zoom);

    return map;
};

export { render, addMarker };
