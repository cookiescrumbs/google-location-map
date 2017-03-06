import * as googleLocationMap from '../src/index.js';

describe('Something about the map', () => {

    beforeEach(function() {

        const mapElement = '<div id="location-map" data-lat="52.9999956" data-lng="-3.9429671" data-zoom="9"></div>';

        document.body.insertAdjacentHTML(
            'afterbegin',
            mapElement
        );
    });

    afterEach(function() {
        document.body.removeChild(document.getElementById('location-map'));
    });

    beforeEach(function() {
        googleLocationMap.render();
    });

    it('should do Something', () => {
        expect("hello").toBe('Hello');
    });

});
