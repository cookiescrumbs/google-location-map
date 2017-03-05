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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _google = __webpack_require__(/*! google */ 0);\n\nvar _google2 = _interopRequireDefault(_google);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar googleLocationMap = function googleLocationMap() {\n    var mapElement = document.querySelector('#location-map');\n    var mapOptions = function mapOptions() {\n        return {\n            draggable: true,\n            scrollwheel: false,\n            streetViewControl: true,\n            mapTypeControlOptions: {\n                mapTypeIds: [_google2.default.maps.MapTypeId.SATELLITE, _google2.default.maps.MapTypeId.ROADMAP]\n            },\n            mapTypeId: _google2.default.maps.MapTypeId.SATELLITE\n        };\n    };\n\n    var map = new _google2.default.maps.Map(mapElement, mapOptions());\n    var lat = function lat() {\n        return parseFloat(mapElement.dataset.lat) || null;\n    };\n    var lng = function lng() {\n        return parseFloat(mapElement.dataset.lng) || null;\n    };\n    var zoom = function zoom() {\n        return parseInt(mapElement.dataset.zoom, 10) || 9;\n    };\n    var latLng = new _google2.default.maps.LatLng(lat(), lng());\n\n    var marker = function marker() {\n\n        var marker = new _google2.default.maps.Marker({ position: latLng, map: map });\n\n        return marker;\n    };\n\n    var center = {\n        lat: lat(),\n        lng: lng()\n    };\n\n    map.setCenter(center);\n    map.setZoom(zoom());\n\n    _google2.default.maps.event.addListenerOnce(map, 'idle', marker());\n};\n\nexports.default = googleLocationMap;\n\n\ngoogleLocationMap();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ29vZ2xlIGZyb20gJ2dvb2dsZSc7XG5cblxuY29uc3QgZ29vZ2xlTG9jYXRpb25NYXAgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbi1tYXAnKTtcbiAgICBjb25zdCBtYXBPcHRpb25zID0gKCkgPT4gKHtcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXG4gICAgICAgIHN0cmVldFZpZXdDb250cm9sOiB0cnVlLFxuICAgICAgICBtYXBUeXBlQ29udHJvbE9wdGlvbnM6IHtcbiAgICAgICAgICAgIG1hcFR5cGVJZHM6IFtcbiAgICAgICAgICAgICAgICBnb29nbGUubWFwcy5NYXBUeXBlSWQuU0FURUxMSVRFLFxuICAgICAgICAgICAgICAgIGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5TQVRFTExJVEVcbiAgICB9KTtcblxuXG4gICAgY29uc3QgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChtYXBFbGVtZW50LCBtYXBPcHRpb25zKCkpO1xuICAgIGNvbnN0IGxhdCA9ICgpID0+IHBhcnNlRmxvYXQobWFwRWxlbWVudC5kYXRhc2V0LmxhdCkgfHwgbnVsbDtcbiAgICBjb25zdCBsbmcgPSAoKSA9PiBwYXJzZUZsb2F0KG1hcEVsZW1lbnQuZGF0YXNldC5sbmcpIHx8IG51bGw7XG4gICAgY29uc3Qgem9vbSA9ICgpID0+IHBhcnNlSW50KG1hcEVsZW1lbnQuZGF0YXNldC56b29tLCAxMCkgfHwgOTtcbiAgICBjb25zdCBsYXRMbmcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdCgpLCBsbmcoKSk7XG5cbiAgICBjb25zdCBtYXJrZXIgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7IHBvc2l0aW9uOiBsYXRMbmcsIG1hcDogbWFwIH0pO1xuXG4gICAgICAgIHJldHVybiBtYXJrZXI7XG4gICAgfTtcblxuICAgIGNvbnN0IGNlbnRlciA9IHtcbiAgICAgICAgbGF0OiBsYXQoKSxcbiAgICAgICAgbG5nOiBsbmcoKVxuICAgIH07XG5cbiAgICBtYXAuc2V0Q2VudGVyKGNlbnRlcik7XG4gICAgbWFwLnNldFpvb20oem9vbSgpKTtcblxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyT25jZShtYXAsICdpZGxlJywgbWFya2VyKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ29vZ2xlTG9jYXRpb25NYXA7XG5cblxuZ29vZ2xlTG9jYXRpb25NYXAoKTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBTUE7QUFWQTtBQUFBO0FBQ0E7QUFhQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);
});