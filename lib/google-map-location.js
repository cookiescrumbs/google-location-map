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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
/*!***************************!*\
  !*** ./src/google-map.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.render = undefined;\n\nvar _google = __webpack_require__(/*! google */ 0);\n\nvar _google2 = _interopRequireDefault(_google);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar lat = function lat(el) {\n    return parseFloat(el.dataset.lat) || null;\n};\nvar lng = function lng(el) {\n    return parseFloat(el.dataset.lng) || null;\n};\nvar zoom = function zoom(el) {\n    return parseInt(el.dataset.zoom, 10) || 9;\n};\nvar center = function center(el) {\n    return {\n        lat: lat(el),\n        lng: lng(el)\n    };\n};\n\nvar latLng = function latLng(lat, lng) {\n    var latLng = new _google2.default.maps.LatLng(lat, lng);\n\n    return latLng;\n};\n\nvar addMarker = function addMarker(map, lat, lng) {\n    _google2.default.maps.event.addListenerOnce(map, 'idle', function () {\n\n        var marker = new _google2.default.maps.Marker({ position: latLng(lat, lng), map: map });\n\n        return marker;\n    });\n};\n\nvar render = function render(mapElement, mapOptions) {\n    var map = new _google2.default.maps.Map(mapElement, mapOptions());\n\n    map.setCenter(center(mapElement));\n    map.setZoom(zoom(mapElement));\n\n    addMarker(map, lat(mapElement), lng(mapElement));\n};\n\nexports.render = render;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZ29vZ2xlLW1hcC5qcz8xNmU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnb29nbGUgZnJvbSAnZ29vZ2xlJztcblxuY29uc3QgbGF0ID0gKGVsKSA9PiBwYXJzZUZsb2F0KGVsLmRhdGFzZXQubGF0KSB8fCBudWxsO1xuY29uc3QgbG5nID0gKGVsKSA9PiBwYXJzZUZsb2F0KGVsLmRhdGFzZXQubG5nKSB8fCBudWxsO1xuY29uc3Qgem9vbSA9IChlbCkgPT4gcGFyc2VJbnQoZWwuZGF0YXNldC56b29tLCAxMCkgfHwgOTtcbmNvbnN0IGNlbnRlciA9IChlbCkgPT4gKHtcbiAgICBsYXQ6IGxhdChlbCksXG4gICAgbG5nOiBsbmcoZWwpXG59KTtcblxuY29uc3QgbGF0TG5nID0gKGxhdCwgbG5nKSA9PiB7XG4gICAgY29uc3QgbGF0TG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXQsIGxuZyk7XG5cbiAgICByZXR1cm4gbGF0TG5nO1xufTtcblxuY29uc3QgYWRkTWFya2VyID0gKG1hcCwgbGF0LCBsbmcpID0+IHtcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lck9uY2UobWFwLCAnaWRsZScsICgpID0+IHtcblxuICAgICAgICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHsgcG9zaXRpb246IGxhdExuZyhsYXQsIGxuZyksIG1hcDogbWFwIH0pO1xuXG4gICAgICAgIHJldHVybiBtYXJrZXI7XG4gICAgfSk7XG59O1xuXG5jb25zdCByZW5kZXIgPSAobWFwRWxlbWVudCwgbWFwT3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAobWFwRWxlbWVudCwgbWFwT3B0aW9ucygpKTtcblxuICAgIG1hcC5zZXRDZW50ZXIoY2VudGVyKG1hcEVsZW1lbnQpKTtcbiAgICBtYXAuc2V0Wm9vbSh6b29tKG1hcEVsZW1lbnQpKTtcblxuICAgIGFkZE1hcmtlcihtYXAsIGxhdChtYXBFbGVtZW50KSwgbG5nKG1hcEVsZW1lbnQpKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9nb29nbGUtbWFwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _google = __webpack_require__(/*! google */ 0);\n\nvar _google2 = _interopRequireDefault(_google);\n\nvar _googleMap = __webpack_require__(/*! ../src/google-map.js */ 1);\n\nvar googleMap = _interopRequireWildcard(_googleMap);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    var mapElement = document.querySelector('#location-map');\n    var mapOptions = function mapOptions() {\n        return {\n            draggable: true,\n            streetViewControl: true,\n            mapTypeControlOptions: {\n                mapTypeIds: [_google2.default.maps.MapTypeId.SATELLITE, _google2.default.maps.MapTypeId.ROADMAP]\n            },\n            mapTypeId: _google2.default.maps.MapTypeId.SATELLITE\n        };\n    };\n\n    googleMap.render(mapElement, mapOptions);\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ29vZ2xlIGZyb20gJ2dvb2dsZSc7XG5pbXBvcnQgKiBhcyBnb29nbGVNYXAgZnJvbSAnLi4vc3JjL2dvb2dsZS1tYXAuanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IG1hcEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb24tbWFwJyk7XG4gICAgY29uc3QgbWFwT3B0aW9ucyA9ICgpID0+ICh7XG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IHRydWUsXG4gICAgICAgIG1hcFR5cGVDb250cm9sT3B0aW9uczoge1xuICAgICAgICAgICAgbWFwVHlwZUlkczogW1xuICAgICAgICAgICAgICAgIGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5TQVRFTExJVEUsXG4gICAgICAgICAgICAgICAgZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVBcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIG1hcFR5cGVJZDogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlNBVEVMTElURVxuICAgIH0pO1xuXG4gICAgZ29vZ2xlTWFwLnJlbmRlcihtYXBFbGVtZW50LCBtYXBPcHRpb25zKTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBREE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFNQTtBQVRBO0FBQUE7QUFDQTtBQVdBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);
});