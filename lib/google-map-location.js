(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("google"));
	else if(typeof define === 'function' && define.amd)
		define("google-map-location", ["google"], factory);
	else if(typeof exports === 'object')
		exports["google-map-location"] = factory(require("google"));
	else
		root["google-map-location"] = factory(root["google"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** external "google" ***!
  \*************************/
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_0__;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImdvb2dsZVwiPzFjMTkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImdvb2dsZVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _google = __webpack_require__(/*! google */ 0);\n\nvar _google2 = _interopRequireDefault(_google);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mapElement = document.querySelector('#location-map');\nvar mapOptions = function mapOptions() {\n    return {\n        draggable: true,\n        streetViewControl: true,\n        mapTypeControlOptions: {\n            mapTypeIds: [_google2.default.maps.MapTypeId.SATELLITE, _google2.default.maps.MapTypeId.ROADMAP]\n        },\n        mapTypeId: _google2.default.maps.MapTypeId.SATELLITE\n    };\n};\n\nvar map = new _google2.default.maps.Map(mapElement, mapOptions());\nvar lat = function lat() {\n    return parseFloat(mapElement.dataset.lat) || null;\n};\nvar lng = function lng() {\n    return parseFloat(mapElement.dataset.lng) || null;\n};\nvar zoom = function zoom() {\n    return parseInt(mapElement.dataset.zoom, 10) || 9;\n};\nvar latLng = new _google2.default.maps.LatLng(lat(), lng());\n\nvar marker = function marker() {\n\n    var marker = new _google2.default.maps.Marker({ position: latLng, map: map });\n\n    return marker;\n};\n\nvar center = {\n    lat: lat(),\n    lng: lng()\n};\n\nmap.setCenter(center);\nmap.setZoom(zoom());\n\n_google2.default.maps.event.addListenerOnce(map, 'idle', marker());//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ29vZ2xlIGZyb20gJ2dvb2dsZSc7XG5cbmNvbnN0IG1hcEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb24tbWFwJyk7XG5jb25zdCBtYXBPcHRpb25zID0gKCkgPT4gKHtcbiAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgc3RyZWV0Vmlld0NvbnRyb2w6IHRydWUsXG4gICAgbWFwVHlwZUNvbnRyb2xPcHRpb25zOiB7XG4gICAgICAgIG1hcFR5cGVJZHM6IFtcbiAgICAgICAgICAgIGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5TQVRFTExJVEUsXG4gICAgICAgICAgICBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuU0FURUxMSVRFXG59KTtcblxuY29uc3QgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChtYXBFbGVtZW50LCBtYXBPcHRpb25zKCkpO1xuY29uc3QgbGF0ID0gKCkgPT4gcGFyc2VGbG9hdChtYXBFbGVtZW50LmRhdGFzZXQubGF0KSB8fCBudWxsO1xuY29uc3QgbG5nID0gKCkgPT4gcGFyc2VGbG9hdChtYXBFbGVtZW50LmRhdGFzZXQubG5nKSB8fCBudWxsO1xuY29uc3Qgem9vbSA9ICgpID0+IHBhcnNlSW50KG1hcEVsZW1lbnQuZGF0YXNldC56b29tLCAxMCkgfHwgOTtcbmNvbnN0IGxhdExuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0KCksIGxuZygpKTtcblxuY29uc3QgbWFya2VyID0gKCkgPT4ge1xuXG4gICAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7IHBvc2l0aW9uOiBsYXRMbmcsIG1hcDogbWFwIH0pO1xuXG4gICAgcmV0dXJuIG1hcmtlcjtcbn07XG5cbmNvbnN0IGNlbnRlciA9IHtcbiAgICBsYXQ6IGxhdCgpLFxuICAgIGxuZzogbG5nKClcbn07XG5cbm1hcC5zZXRDZW50ZXIoY2VudGVyKTtcbm1hcC5zZXRab29tKHpvb20oKSk7XG5cbmdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyT25jZShtYXAsICdpZGxlJywgbWFya2VyKCkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFNQTtBQVRBO0FBQUE7QUFDQTtBQVdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);
});