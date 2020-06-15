module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/PageBorder.tsx":
/*!***********************************!*\
  !*** ./components/PageBorder.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/ahb/code/personal-site-v2/components/PageBorder.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction PageBorder({\n  children\n}) {\n  return __jsx(\"div\", {\n    className: \"flex flex-col h-full p-4 space-y-4 border border-gray-700 rounded-md\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 5\n    }\n  }, children);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageBorder);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2VCb3JkZXIudHN4PzkzYmQiXSwibmFtZXMiOlsiUGFnZUJvcmRlciIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsU0FBU0EsVUFBVCxDQUFvQjtBQUFFQztBQUFGLENBQXBCLEVBQWtDO0FBQ2hDLFNBQ0U7QUFBSyxhQUFTLEVBQUMsc0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxRQURILENBREY7QUFLRDs7QUFFY0QseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2VCb3JkZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gUGFnZUJvcmRlcih7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1mdWxsIHAtNCBzcGFjZS15LTQgYm9yZGVyIGJvcmRlci1ncmF5LTcwMCByb3VuZGVkLW1kXCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VCb3JkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PageBorder.tsx\n");

/***/ }),

/***/ "./components/Title.tsx":
/*!******************************!*\
  !*** ./components/Title.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/ahb/code/personal-site-v2/components/Title.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction Title({\n  children\n}) {\n  return __jsx(\"h1\", {\n    className: \"px-2 py-2 text-2xl font-semibold leading-none tracking-widest text-white uppercase bg-gray-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 5\n    }\n  }, children);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Title);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RpdGxlLnRzeD8wYjdlIl0sIm5hbWVzIjpbIlRpdGxlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxTQUFTQSxLQUFULENBQWU7QUFBRUM7QUFBRixDQUFmLEVBQTZCO0FBQzNCLFNBQ0U7QUFBSSxhQUFTLEVBQUMsZ0dBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxRQURILENBREY7QUFLRDs7QUFFY0Qsb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RpdGxlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFRpdGxlKHsgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxoMSBjbGFzc05hbWU9XCJweC0yIHB5LTIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCBsZWFkaW5nLW5vbmUgdHJhY2tpbmctd2lkZXN0IHRleHQtd2hpdGUgdXBwZXJjYXNlIGJnLWdyYXktNzAwXCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9oMT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGl0bGU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Title.tsx\n");

/***/ }),

/***/ "./pages/philosophy.tsx":
/*!******************************!*\
  !*** ./pages/philosophy.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Title */ \"./components/Title.tsx\");\n/* harmony import */ var _components_PageBorder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageBorder */ \"./components/PageBorder.tsx\");\nvar _jsxFileName = \"/Users/ahb/code/personal-site-v2/pages/philosophy.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Philosophy() {\n  return __jsx(_components_PageBorder__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Title__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, \"Politics & Philosophy\"), __jsx(\"p\", {\n    className: \"tracking-wider text-gray-700 text-lighter\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, \"Nothing here yet. Check back soon, I guess.\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Philosophy);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9waGlsb3NvcGh5LnRzeD81NjNkIl0sIm5hbWVzIjpbIlBoaWxvc29waHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxVQUFULEdBQXNCO0FBQ3BCLFNBQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLEVBRUU7QUFBRyxhQUFTLEVBQUMsMkNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtREFGRixDQURGO0FBUUQ7O0FBRWNBLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcGhpbG9zb3BoeS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGl0bGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGl0bGVcIjtcbmltcG9ydCBQYWdlQm9yZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1BhZ2VCb3JkZXJcIjtcblxuZnVuY3Rpb24gUGhpbG9zb3BoeSgpIHtcbiAgcmV0dXJuIChcbiAgICA8UGFnZUJvcmRlcj5cbiAgICAgIDxUaXRsZT5Qb2xpdGljcyAmIFBoaWxvc29waHk8L1RpdGxlPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidHJhY2tpbmctd2lkZXIgdGV4dC1ncmF5LTcwMCB0ZXh0LWxpZ2h0ZXJcIj5cbiAgICAgICAgTm90aGluZyBoZXJlIHlldC4gQ2hlY2sgYmFjayBzb29uLCBJIGd1ZXNzLlxuICAgICAgPC9wPlxuICAgIDwvUGFnZUJvcmRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGhpbG9zb3BoeTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/philosophy.tsx\n");

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/philosophy.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ahb/code/personal-site-v2/pages/philosophy.tsx */"./pages/philosophy.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });