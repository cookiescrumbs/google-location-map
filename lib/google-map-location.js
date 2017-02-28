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
	
	var mapElement = document.querySelector('#location-map');
	
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
	
	var map = new _google2.default.maps.Map(mapElement, mapOptions());
	var lat = function lat() {
	    return parseFloat(mapElement.dataset.lat) || null;
	};
	var lng = function lng() {
	    return parseFloat(mapElement.dataset.lng) || null;
	};
	var zoom = function zoom() {
	    return parseInt(mapElement.dataset.zoom, 10) || 9;
	};
	var latLng = function latLng() {
	
	    var latLng = new _google2.default.maps.LatLng(lat(), lng());
	
	    return latLng;
	};
	
	var marker = function marker() {
	
	    var marker = new _google2.default.maps.Marker({ position: latLng(), map: map });
	
	    return marker;
	};
	
	var center = {
	    lat: lat(),
	    lng: lng()
	};
	
	map.setCenter(center);
	map.setZoom(zoom());
	
	_google2.default.maps.event.addListenerOnce(map, 'idle', marker());

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=google-map-location.js.map