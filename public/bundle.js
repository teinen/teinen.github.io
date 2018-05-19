/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/css/style.scss?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ityped__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ityped */ \"./src/js/modules/ityped.js\");\n/* harmony import */ var _modules_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/action */ \"./src/js/modules/action.js\");\n/* harmony import */ var _modules_action__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_action__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/style.scss */ \"./src/css/style.scss\");\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_2__);\n// js modules\n\n\n\n// css modules\n\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/action.js":
/*!**********************************!*\
  !*** ./src/js/modules/action.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// menu click action\ndocument.getElementById(\"menu-button\").onclick = () => {\n  document.getElementById(\"menu-button\").classList.toggle(\"active\");\n};\n\n\n\n//# sourceURL=webpack:///./src/js/modules/action.js?");

/***/ }),

/***/ "./src/js/modules/ityped.js":
/*!**********************************!*\
  !*** ./src/js/modules/ityped.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// iTyped configuration\n/* harmony default export */ __webpack_exports__[\"default\"] = (ityped = ityped.init(`#ityped`, {\n  // required - for now, only accepting texts\n  strings: [\"print('Welcome to my page.')\"],\n  // strings: [\"Now at work...\"],\n  //optional\n  typeSpeed: 80,\n  //optional\n  backSpeed: 50,\n  // start after 5 sec\n  startDelay: 5000,\n  //optional\n  backDelay: 500,\n  //optional\n  loop: false,\n  //optional\n  showCursor: true,\n  //optional\n  cursorChar: \"|\",\n  //optional\n  disableBackTyping: true,\n  // optional callback called once the last string has been typed\n  onFinished: function() {}\n}));\n\n//# sourceURL=webpack:///./src/js/modules/ityped.js?");

/***/ })

/******/ });