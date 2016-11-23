import google from 'google'


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

const mapElement = document.querySelector('#location-map');
const map = new google.maps.Map(mapElement, mapOptions());

map.setCenter({lat: 52.9999956 , lng: -3.9429671});
map.setZoom(9);



 // <div id="location-map"></div>

  // var map,
  // mapElement = document.getElementById('location-map'),
  // lat = getLat(),
  // lng = getLng(),
  // zoom = getZoom(),
  // marker,
  // mapOptions = {
  //   draggable: true,
  //   scrollwheel: false,
  //   streetViewControl: true,
  //   mapTypeControlOptions: {
  //     mapTypeIds: [
  //       google.maps.MapTypeId.SATELLITE,
  //       google.maps.MapTypeId.ROADMAP
  //     ]
  //   },
  //   mapTypeId: google.maps.MapTypeId.SATELLITE
  // };

  //   // $('#location').click(function () {
  //   //   $('#location-map').css("pointer-events", "auto");
  //   // });

  // if ("ontouchend" in document) {
  //   mapOptions.streetViewControl = false;
  //   mapOptions.mapTypeControl = false;
  //   mapOptions.zoomControl = false;
  //   mapOptions.draggable = false;
  // }
  // ////////Map
  // //make a new instance of google maps
  // map = new google.maps.Map(mapElement, mapOptions);
  // map.setCenter({lat: lat , lng: lng});
  // map.setZoom(zoom);
  // //////////////////////////////////////////////////////

  // //wait till map has loaded and add a  marker
  // google.maps.event.addListenerOnce(map,'idle', function(){
  //     new google.maps.Marker({
  //       position: new google.maps.LatLng(lat,lng),
  //       map: map
  //     });
  // });


  // function getLat() {
  //   return parseFloat(mapElement.dataset.lat) || null;
  // }

  // function getLng() {
  //   return parseFloat(mapElement.dataset.lng) || null;
  // }

  // function getZoom() {
  //   return  parseInt(mapElement.dataset.zoom) || 9;
  // }