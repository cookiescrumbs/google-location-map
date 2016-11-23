(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("google"));
	else if(typeof define === 'function' && define.amd)
		define("google-map-location", ["google"], factory);
	else if(typeof exports === 'object')
		exports["google-map-location"] = factory(require("google"));
	else
		root["google-map-location"] = factory(root["google"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _google = __webpack_require__(1);
	
	var _google2 = _interopRequireDefault(_google);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapOptions = function mapOptions() {
	    return {
	        draggable: true,
	        scrollwheel: false,
	        streetViewControl: true,
	        mapTypeControlOptions: {
	            mapTypeIds: [_google2.default.maps.MapTypeId.SATELLITE, _google2.default.maps.MapTypeId.ROADMAP]
	        },
	        mapTypeId: _google2.default.maps.MapTypeId.SATELLITE
	    };
	};
	
	var mapElement = document.querySelector('#location-map');
	var map = new _google2.default.maps.Map(mapElement, mapOptions());
	
	map.setCenter({ lat: 52.9999956, lng: -3.9429671 });
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

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=google-map-location.js.map