import google from 'google';
import * as googleMap from '../src/google-map.js';

document.addEventListener('DOMContentLoaded', () => {
    const mapElement = document.querySelector('#location-map');
    const mapOptions = () => ({
        draggable: true,
        streetViewControl: true,
        mapTypeControlOptions: {
            mapTypeIds: [
                google.maps.MapTypeId.SATELLITE,
                google.maps.MapTypeId.ROADMAP
            ],
        },
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    googleMap.render(mapElement, mapOptions);
});
