import * as googleMap from '../src/google-map.js';

document.addEventListener('DOMContentLoaded', () => {
    const mapElement = document.querySelector('#location-map');
    const mapOptions = () => ({
        draggable: true,
        streetViewControl: true,
        mapTypeControlOptions: {
            mapTypeIds: [
                'satellite',
                'roadmap'
            ],
        },
        mapTypeId: 'satellite'
    });
    const lat = (el) => parseFloat(el.dataset.lat) || null;
    const lng = (el) => parseFloat(el.dataset.lng) || null;
    const zoom = (el) => parseInt(el.dataset.zoom, 10) || 9;
    const center = (el) => ({
        lat: lat(el),
        lng: lng(el)
    });
    const mapSettings = () => ({
        lat: lat(mapElement),
        lng: lng(mapElement),
        zoom: zoom(mapElement),
        center: center(mapElement)
    });

    const map = googleMap.render(mapElement, mapOptions, mapSettings);

    googleMap.addMarker(map, mapSettings().lat, mapSettings().lng);

});
