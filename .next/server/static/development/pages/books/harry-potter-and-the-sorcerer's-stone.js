module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./pages/books/harry-potter-and-the-sorcerer's-stone.tsx":
/*!***************************************************************!*\
  !*** ./pages/books/harry-potter-and-the-sorcerer's-stone.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_PageBorder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/PageBorder */ \"./components/PageBorder.tsx\");\nvar _jsxFileName = \"/Users/ahb/code/personal-site-v2/pages/books/harry-potter-and-the-sorcerer's-stone.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Review() {\n  return __jsx(\"div\", {\n    className: \"max-w-5xl mx-auto my-20\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(_components_PageBorder__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"space-y-6 tracking-wider text-gray-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-4xl leading-none\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 11\n    }\n  }, \"Harry Potter and the Sorcerer's Stone\"), __jsx(\"hr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    className: \"space-y-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 11\n    }\n  }, __jsx(\"h2\", {\n    className: \"p-2 text-2xl leading-none bg-gray-100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }\n  }, \"TLDR\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, \"This is the first book in J.K. Rowling's famous Harry Potter series. I read it because I'm trying to make reading a more consistent habit in my life and one suggestion for doing that is to read what you enjoy until you enjoy reading. The books is well written by YA standards, it accomplished my goal of getting me excited about reading again.\")), __jsx(\"div\", {\n    className: \"space-y-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }, __jsx(\"h2\", {\n    className: \"p-2 text-2xl leading-none bg-gray-100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, \"Why\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, \"At some point in the last year I stopped reading. I couldn't tell you why, but I went from reading fairly often (a book a week or so) to literally not even picking up a book over the month of February. As someone generally interested in being successful in life, that was a problem. If there's one thing that the vast majority of hyper-successful (how you define that hardly matters in this case) people do, it's read. Famously Warren Buffet reads for between 5 and 6 hours every day, Bill Gates reads ~50 books per year, Mark Zuckerberg reads a book every ~2 weeks, and according to Elon Musk's brother as a child Elon read ~2 books per day.\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 15\n    }\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 15\n    }\n  }), \"The point is, not reading is not really an option if you want to be successful, or at the very least, it puts one at a massive disadvantage. So, with this in mind, I decided that to start reading consistently again.\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 15\n    }\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 15\n    }\n  }), \"So, how did I do this? Well, unsurprisingly, the answer was to get a book and read it -- thank you for coming to my Ted Talk.\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 15\n    }\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 15\n    }\n  }), \"In all seriousness, I choose a childhood favorite of mine that I knew would be quick and easy for a pretty specific reason. Naval Ravikant, founder of Angel List turned twitter cult leader, once said:\", __jsx(\"q\", {\n    className: \"block px-4 py-1 mx-4 my-2 text-lg font-semibold leading-snug tracking-widest bg-gray-100 border-l-4 border-gray-700 /w-max-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 15\n    }\n  }, \"Read what you love until you love reading.\"), \"I think he's right. In fact, I think his advice is a lot more general than it might seem at first. Reading may be a good example, but the advice applies to just about any skill. Want to learn programming? Code what you enjoy (stupid web apps, meaningless suduko solvers, etc.) until you enjoy programming.\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 15\n    }\n  }), \"Ask any skilled programmer and they'll tell you that this is how you really learn to program. Books are necessary and classes can certainly help, but if you don't actual write code you won't get better, and you won't initially write code if you don't like the project you're building. This is all to say, I chose Harry Potter not because I'm secretly a nerdy 10 year old boy (well...), but because I needed to bootstrap my habit.\")), __jsx(\"div\", {\n    className: \"space-y-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 11\n    }\n  }, __jsx(\"h2\", {\n    className: \"p-2 text-2xl leading-none bg-gray-100\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, \"Review\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }, \"Okay, so this is where I'd normally give a review of the book and note things that I took away from it, but because I clearly didn't read this book for deep truths or life lessons, I'm just gunna say this:\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 15\n    }\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 15\n    }\n  }), \"I enjoyed it, and it served its purpose. If you're in a similar position to me and liked Harry Potter as a child, it's a great candidate for kick-starting your reading habit.\")))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Review);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ib29rcy9oYXJyeS1wb3R0ZXItYW5kLXRoZS1zb3JjZXJlcidzLXN0b25lLnRzeD81MGJkIl0sIm5hbWVzIjpbIlJldmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQ2hCLFNBQ0U7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyx1QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsdUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrVkFGRixDQUxGLEVBZ0JFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLHVDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMm9CQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixFQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRiw2TkFrQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxCRixFQW1CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJGLG1JQXNCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEJGLEVBdUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2QkYsOE1BNEJFO0FBQUcsYUFBUyxFQUFDLG9JQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBNUJGLHVUQW9DRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcENGLEVBcUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQ0Ysa2JBRkYsQ0FoQkYsRUFpRUU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsdUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzTkFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsbUxBRkYsQ0FqRUYsQ0FERixDQURGLENBREY7QUFxRkQ7O0FBRWNBLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYm9va3MvaGFycnktcG90dGVyLWFuZC10aGUtc29yY2VyZXIncy1zdG9uZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGFnZUJvcmRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QYWdlQm9yZGVyXCI7XG5cbmZ1bmN0aW9uIFJldmlldygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTV4bCBteC1hdXRvIG15LTIwXCI+XG4gICAgICA8UGFnZUJvcmRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTYgdHJhY2tpbmctd2lkZXIgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBsZWFkaW5nLW5vbmVcIj5cbiAgICAgICAgICAgIEhhcnJ5IFBvdHRlciBhbmQgdGhlIFNvcmNlcmVyJ3MgU3RvbmVcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicC0yIHRleHQtMnhsIGxlYWRpbmctbm9uZSBiZy1ncmF5LTEwMFwiPlRMRFI8L2gyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFRoaXMgaXMgdGhlIGZpcnN0IGJvb2sgaW4gSi5LLiBSb3dsaW5nJ3MgZmFtb3VzIEhhcnJ5IFBvdHRlclxuICAgICAgICAgICAgICBzZXJpZXMuIEkgcmVhZCBpdCBiZWNhdXNlIEknbSB0cnlpbmcgdG8gbWFrZSByZWFkaW5nIGEgbW9yZVxuICAgICAgICAgICAgICBjb25zaXN0ZW50IGhhYml0IGluIG15IGxpZmUgYW5kIG9uZSBzdWdnZXN0aW9uIGZvciBkb2luZyB0aGF0IGlzXG4gICAgICAgICAgICAgIHRvIHJlYWQgd2hhdCB5b3UgZW5qb3kgdW50aWwgeW91IGVuam95IHJlYWRpbmcuIFRoZSBib29rcyBpcyB3ZWxsXG4gICAgICAgICAgICAgIHdyaXR0ZW4gYnkgWUEgc3RhbmRhcmRzLCBpdCBhY2NvbXBsaXNoZWQgbXkgZ29hbCBvZiBnZXR0aW5nIG1lXG4gICAgICAgICAgICAgIGV4Y2l0ZWQgYWJvdXQgcmVhZGluZyBhZ2Fpbi5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInAtMiB0ZXh0LTJ4bCBsZWFkaW5nLW5vbmUgYmctZ3JheS0xMDBcIj5XaHk8L2gyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEF0IHNvbWUgcG9pbnQgaW4gdGhlIGxhc3QgeWVhciBJIHN0b3BwZWQgcmVhZGluZy4gSSBjb3VsZG4ndCB0ZWxsXG4gICAgICAgICAgICAgIHlvdSB3aHksIGJ1dCBJIHdlbnQgZnJvbSByZWFkaW5nIGZhaXJseSBvZnRlbiAoYSBib29rIGEgd2VlayBvclxuICAgICAgICAgICAgICBzbykgdG8gbGl0ZXJhbGx5IG5vdCBldmVuIHBpY2tpbmcgdXAgYSBib29rIG92ZXIgdGhlIG1vbnRoIG9mXG4gICAgICAgICAgICAgIEZlYnJ1YXJ5LiBBcyBzb21lb25lIGdlbmVyYWxseSBpbnRlcmVzdGVkIGluIGJlaW5nIHN1Y2Nlc3NmdWwgaW5cbiAgICAgICAgICAgICAgbGlmZSwgdGhhdCB3YXMgYSBwcm9ibGVtLiBJZiB0aGVyZSdzIG9uZSB0aGluZyB0aGF0IHRoZSB2YXN0XG4gICAgICAgICAgICAgIG1ham9yaXR5IG9mIGh5cGVyLXN1Y2Nlc3NmdWwgKGhvdyB5b3UgZGVmaW5lIHRoYXQgaGFyZGx5IG1hdHRlcnNcbiAgICAgICAgICAgICAgaW4gdGhpcyBjYXNlKSBwZW9wbGUgZG8sIGl0J3MgcmVhZC4gRmFtb3VzbHkgV2FycmVuIEJ1ZmZldCByZWFkc1xuICAgICAgICAgICAgICBmb3IgYmV0d2VlbiA1IGFuZCA2IGhvdXJzIGV2ZXJ5IGRheSwgQmlsbCBHYXRlcyByZWFkcyB+NTAgYm9va3NcbiAgICAgICAgICAgICAgcGVyIHllYXIsIE1hcmsgWnVja2VyYmVyZyByZWFkcyBhIGJvb2sgZXZlcnkgfjIgd2Vla3MsIGFuZFxuICAgICAgICAgICAgICBhY2NvcmRpbmcgdG8gRWxvbiBNdXNrJ3MgYnJvdGhlciBhcyBhIGNoaWxkIEVsb24gcmVhZCB+MiBib29rcyBwZXJcbiAgICAgICAgICAgICAgZGF5LlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIFRoZSBwb2ludCBpcywgbm90IHJlYWRpbmcgaXMgbm90IHJlYWxseSBhbiBvcHRpb24gaWYgeW91IHdhbnQgdG9cbiAgICAgICAgICAgICAgYmUgc3VjY2Vzc2Z1bCwgb3IgYXQgdGhlIHZlcnkgbGVhc3QsIGl0IHB1dHMgb25lIGF0IGEgbWFzc2l2ZVxuICAgICAgICAgICAgICBkaXNhZHZhbnRhZ2UuIFNvLCB3aXRoIHRoaXMgaW4gbWluZCwgSSBkZWNpZGVkIHRoYXQgdG8gc3RhcnRcbiAgICAgICAgICAgICAgcmVhZGluZyBjb25zaXN0ZW50bHkgYWdhaW4uXG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgU28sIGhvdyBkaWQgSSBkbyB0aGlzPyBXZWxsLCB1bnN1cnByaXNpbmdseSwgdGhlIGFuc3dlciB3YXMgdG8gZ2V0XG4gICAgICAgICAgICAgIGEgYm9vayBhbmQgcmVhZCBpdCAtLSB0aGFuayB5b3UgZm9yIGNvbWluZyB0byBteSBUZWQgVGFsay5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICBJbiBhbGwgc2VyaW91c25lc3MsIEkgY2hvb3NlIGEgY2hpbGRob29kIGZhdm9yaXRlIG9mIG1pbmUgdGhhdCBJXG4gICAgICAgICAgICAgIGtuZXcgd291bGQgYmUgcXVpY2sgYW5kIGVhc3kgZm9yIGEgcHJldHR5IHNwZWNpZmljIHJlYXNvbi4gTmF2YWxcbiAgICAgICAgICAgICAgUmF2aWthbnQsIGZvdW5kZXIgb2YgQW5nZWwgTGlzdCB0dXJuZWQgdHdpdHRlciBjdWx0IGxlYWRlciwgb25jZVxuICAgICAgICAgICAgICBzYWlkOlxuICAgICAgICAgICAgICA8cSBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTEgbXgtNCBteS0yIHRleHQtbGcgZm9udC1zZW1pYm9sZCBsZWFkaW5nLXNudWcgdHJhY2tpbmctd2lkZXN0IGJnLWdyYXktMTAwIGJvcmRlci1sLTQgYm9yZGVyLWdyYXktNzAwIC93LW1heC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgUmVhZCB3aGF0IHlvdSBsb3ZlIHVudGlsIHlvdSBsb3ZlIHJlYWRpbmcuXG4gICAgICAgICAgICAgIDwvcT5cbiAgICAgICAgICAgICAgSSB0aGluayBoZSdzIHJpZ2h0LiBJbiBmYWN0LCBJIHRoaW5rIGhpcyBhZHZpY2UgaXMgYSBsb3QgbW9yZVxuICAgICAgICAgICAgICBnZW5lcmFsIHRoYW4gaXQgbWlnaHQgc2VlbSBhdCBmaXJzdC4gUmVhZGluZyBtYXkgYmUgYSBnb29kXG4gICAgICAgICAgICAgIGV4YW1wbGUsIGJ1dCB0aGUgYWR2aWNlIGFwcGxpZXMgdG8ganVzdCBhYm91dCBhbnkgc2tpbGwuIFdhbnQgdG9cbiAgICAgICAgICAgICAgbGVhcm4gcHJvZ3JhbW1pbmc/IENvZGUgd2hhdCB5b3UgZW5qb3kgKHN0dXBpZCB3ZWIgYXBwcyxcbiAgICAgICAgICAgICAgbWVhbmluZ2xlc3Mgc3VkdWtvIHNvbHZlcnMsIGV0Yy4pIHVudGlsIHlvdSBlbmpveSBwcm9ncmFtbWluZy5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICBBc2sgYW55IHNraWxsZWQgcHJvZ3JhbW1lciBhbmQgdGhleSdsbCB0ZWxsIHlvdSB0aGF0IHRoaXMgaXMgaG93XG4gICAgICAgICAgICAgIHlvdSByZWFsbHkgbGVhcm4gdG8gcHJvZ3JhbS4gQm9va3MgYXJlIG5lY2Vzc2FyeSBhbmQgY2xhc3NlcyBjYW5cbiAgICAgICAgICAgICAgY2VydGFpbmx5IGhlbHAsIGJ1dCBpZiB5b3UgZG9uJ3QgYWN0dWFsIHdyaXRlIGNvZGUgeW91IHdvbid0IGdldFxuICAgICAgICAgICAgICBiZXR0ZXIsIGFuZCB5b3Ugd29uJ3QgaW5pdGlhbGx5IHdyaXRlIGNvZGUgaWYgeW91IGRvbid0IGxpa2UgdGhlXG4gICAgICAgICAgICAgIHByb2plY3QgeW91J3JlIGJ1aWxkaW5nLiBUaGlzIGlzIGFsbCB0byBzYXksIEkgY2hvc2UgSGFycnkgUG90dGVyXG4gICAgICAgICAgICAgIG5vdCBiZWNhdXNlIEknbSBzZWNyZXRseSBhIG5lcmR5IDEwIHllYXIgb2xkIGJveSAod2VsbC4uLiksIGJ1dFxuICAgICAgICAgICAgICBiZWNhdXNlIEkgbmVlZGVkIHRvIGJvb3RzdHJhcCBteSBoYWJpdC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInAtMiB0ZXh0LTJ4bCBsZWFkaW5nLW5vbmUgYmctZ3JheS0xMDBcIj5SZXZpZXc8L2gyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIE9rYXksIHNvIHRoaXMgaXMgd2hlcmUgSSdkIG5vcm1hbGx5IGdpdmUgYSByZXZpZXcgb2YgdGhlIGJvb2sgYW5kXG4gICAgICAgICAgICAgIG5vdGUgdGhpbmdzIHRoYXQgSSB0b29rIGF3YXkgZnJvbSBpdCwgYnV0IGJlY2F1c2UgSSBjbGVhcmx5IGRpZG4ndFxuICAgICAgICAgICAgICByZWFkIHRoaXMgYm9vayBmb3IgZGVlcCB0cnV0aHMgb3IgbGlmZSBsZXNzb25zLCBJJ20ganVzdCBndW5uYSBzYXlcbiAgICAgICAgICAgICAgdGhpczpcbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxiciAvPkkgZW5qb3llZCBpdCwgYW5kIGl0IHNlcnZlZCBpdHMgcHVycG9zZS4gSWYgeW91J3JlIGluIGFcbiAgICAgICAgICAgICAgc2ltaWxhciBwb3NpdGlvbiB0byBtZSBhbmQgbGlrZWQgSGFycnkgUG90dGVyIGFzIGEgY2hpbGQsIGl0J3MgYVxuICAgICAgICAgICAgICBncmVhdCBjYW5kaWRhdGUgZm9yIGtpY2stc3RhcnRpbmcgeW91ciByZWFkaW5nIGhhYml0LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUGFnZUJvcmRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/books/harry-potter-and-the-sorcerer's-stone.tsx\n");

/***/ }),

/***/ 4:
/*!*********************************************************************!*\
  !*** multi ./pages/books/harry-potter-and-the-sorcerer's-stone.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ahb/code/personal-site-v2/pages/books/harry-potter-and-the-sorcerer's-stone.tsx */"./pages/books/harry-potter-and-the-sorcerer's-stone.tsx");


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