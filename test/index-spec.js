import * as googleMap from '../src/google-map.js';


describe('Google Maps', () => {

    beforeEach(() => {

        const mapElement = '<div id="location-map" data-lat="52.9999956" data-lng="-3.9429671" data-zoom="9"></div>';

        document.body.insertAdjacentHTML(
            'afterbegin',
            mapElement
        );

        document.addEventListener('DOMContentLoaded', () => {
            googleMap.render();
        });

    });

    afterEach(() => {
        document.body.removeChild(document.getElementById('location-map'));
    });

    it('should render a Google map with a marker for the location', () => {
        const map = document.querySelector('.gm-style');
        console.log(map);
    });

});
