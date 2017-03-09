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
/*!***************************!*\
  !*** ./src/google-map.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.addMarker = exports.render = undefined;\n\nvar _google = __webpack_require__(/*! google */ 1);\n\nvar _google2 = _interopRequireDefault(_google);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar latLng = function latLng(lat, lng) {\n    var latLng = new _google2.default.maps.LatLng(lat, lng);\n\n    return latLng;\n};\n\nvar addMarker = function addMarker(map, lat, lng) {\n    _google2.default.maps.event.addListenerOnce(map, 'idle', function () {\n\n        var marker = new _google2.default.maps.Marker({ position: latLng(lat, lng), map: map });\n\n        return marker;\n    });\n};\n\nvar render = function render(mapElement, mapOptions, mapSettings) {\n    var map = new _google2.default.maps.Map(mapElement, mapOptions());\n\n    map.setCenter(mapSettings().center);\n    map.setZoom(mapSettings().zoom);\n\n    return map;\n};\n\nexports.render = render;\nexports.addMarker = addMarker;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZ29vZ2xlLW1hcC5qcz8xNmU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnb29nbGUgZnJvbSAnZ29vZ2xlJztcblxuY29uc3QgbGF0TG5nID0gKGxhdCwgbG5nKSA9PiB7XG4gICAgY29uc3QgbGF0TG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXQsIGxuZyk7XG5cbiAgICByZXR1cm4gbGF0TG5nO1xufTtcblxuY29uc3QgYWRkTWFya2VyID0gKG1hcCwgbGF0LCBsbmcpID0+IHtcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lck9uY2UobWFwLCAnaWRsZScsICgpID0+IHtcblxuICAgICAgICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHsgcG9zaXRpb246IGxhdExuZyhsYXQsIGxuZyksIG1hcDogbWFwIH0pO1xuXG4gICAgICAgIHJldHVybiBtYXJrZXI7XG4gICAgfSk7XG59O1xuXG5jb25zdCByZW5kZXIgPSAobWFwRWxlbWVudCwgbWFwT3B0aW9ucywgbWFwU2V0dGluZ3MpID0+IHtcbiAgICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKG1hcEVsZW1lbnQsIG1hcE9wdGlvbnMoKSk7XG5cbiAgICBtYXAuc2V0Q2VudGVyKG1hcFNldHRpbmdzKCkuY2VudGVyKTtcbiAgICBtYXAuc2V0Wm9vbShtYXBTZXR0aW5ncygpLnpvb20pO1xuXG4gICAgcmV0dXJuIG1hcDtcbn07XG5cbmV4cG9ydCB7IHJlbmRlciwgYWRkTWFya2VyIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2dvb2dsZS1tYXAuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** external "google" ***!
  \*************************/
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_1__;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImdvb2dsZVwiPzFjMTkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImdvb2dsZVwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _googleMap = __webpack_require__(/*! ../src/google-map.js */ 0);\n\nvar googleMap = _interopRequireWildcard(_googleMap);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    var mapElement = document.querySelector('#location-map');\n    var mapOptions = function mapOptions() {\n        return {\n            draggable: true,\n            streetViewControl: true,\n            mapTypeControlOptions: {\n                mapTypeIds: ['satellite', 'roadmap']\n            },\n            mapTypeId: 'satellite'\n        };\n    };\n    var lat = function lat(el) {\n        return parseFloat(el.dataset.lat) || null;\n    };\n    var lng = function lng(el) {\n        return parseFloat(el.dataset.lng) || null;\n    };\n    var zoom = function zoom(el) {\n        return parseInt(el.dataset.zoom, 10) || 9;\n    };\n    var center = function center(el) {\n        return {\n            lat: lat(el),\n            lng: lng(el)\n        };\n    };\n    var mapSettings = function mapSettings() {\n        return {\n            lat: lat(mapElement),\n            lng: lng(mapElement),\n            zoom: zoom(mapElement),\n            center: center(mapElement)\n        };\n    };\n\n    var map = googleMap.render(mapElement, mapOptions, mapSettings);\n\n    googleMap.addMarker(map, mapSettings().lat, mapSettings().lng);\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBnb29nbGVNYXAgZnJvbSAnLi4vc3JjL2dvb2dsZS1tYXAuanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IG1hcEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb24tbWFwJyk7XG4gICAgY29uc3QgbWFwT3B0aW9ucyA9ICgpID0+ICh7XG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IHRydWUsXG4gICAgICAgIG1hcFR5cGVDb250cm9sT3B0aW9uczoge1xuICAgICAgICAgICAgbWFwVHlwZUlkczogW1xuICAgICAgICAgICAgICAgICdzYXRlbGxpdGUnLFxuICAgICAgICAgICAgICAgICdyb2FkbWFwJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgbWFwVHlwZUlkOiAnc2F0ZWxsaXRlJ1xuICAgIH0pO1xuICAgIGNvbnN0IGxhdCA9IChlbCkgPT4gcGFyc2VGbG9hdChlbC5kYXRhc2V0LmxhdCkgfHwgbnVsbDtcbiAgICBjb25zdCBsbmcgPSAoZWwpID0+IHBhcnNlRmxvYXQoZWwuZGF0YXNldC5sbmcpIHx8IG51bGw7XG4gICAgY29uc3Qgem9vbSA9IChlbCkgPT4gcGFyc2VJbnQoZWwuZGF0YXNldC56b29tLCAxMCkgfHwgOTtcbiAgICBjb25zdCBjZW50ZXIgPSAoZWwpID0+ICh7XG4gICAgICAgIGxhdDogbGF0KGVsKSxcbiAgICAgICAgbG5nOiBsbmcoZWwpXG4gICAgfSk7XG4gICAgY29uc3QgbWFwU2V0dGluZ3MgPSAoKSA9PiAoe1xuICAgICAgICBsYXQ6IGxhdChtYXBFbGVtZW50KSxcbiAgICAgICAgbG5nOiBsbmcobWFwRWxlbWVudCksXG4gICAgICAgIHpvb206IHpvb20obWFwRWxlbWVudCksXG4gICAgICAgIGNlbnRlcjogY2VudGVyKG1hcEVsZW1lbnQpXG4gICAgfSk7XG5cbiAgICBjb25zdCBtYXAgPSBnb29nbGVNYXAucmVuZGVyKG1hcEVsZW1lbnQsIG1hcE9wdGlvbnMsIG1hcFNldHRpbmdzKTtcblxuICAgIGdvb2dsZU1hcC5hZGRNYXJrZXIobWFwLCBtYXBTZXR0aW5ncygpLmxhdCwgbWFwU2V0dGluZ3MoKS5sbmcpO1xuXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQURBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQU1BO0FBVEE7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);
});