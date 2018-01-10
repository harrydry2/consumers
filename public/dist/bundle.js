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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
};

NodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(function (elem) {
    elem.on(name, fn);
  });
};

exports.$ = $;
exports.$$ = $$;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var _bling = __webpack_require__(0);

var _typed = __webpack_require__(4);

var _typed2 = _interopRequireDefault(_typed);

var _skip = __webpack_require__(5);

var _returnSkip = __webpack_require__(6);

var _returnSkip2 = _interopRequireDefault(_returnSkip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if ((0, _bling.$)("body").classList.contains("page1")) {
  (0, _typed2.default)();
  (0, _skip.skipWrapperFunction)();
}

// solves skipReturn Problem

// p2


// p1
if ((0, _bling.$)("body").classList.contains("page2")) {
  (0, _returnSkip2.default)();
}

window.addEventListener("load", function () {
  var reloading = sessionStorage.getItem("reloading");
  if ((0, _bling.$)("body").classList.contains("page1") && reloading) {
    sessionStorage.removeItem("reloading");
    (0, _skip.skipHighlights)();
  }
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = typedWrapperFunction;
// add Class of Disabled Click to all the names

var typedStringsContainer = document.querySelector(".typedStringsContainer");
var wraphighlightsPage1 = document.querySelector(".wraphighlightsPage1");
var p1ptContainer = document.querySelector(".p1ptContainer");
var disableClickSection = [typedStringsContainer, wraphighlightsPage1, p1ptContainer];

var skip = document.querySelector(".hcSkipActive");

// Style all lines with opacity 0
var line1a = document.querySelectorAll(".p1line1")[0];
var line1b = document.querySelectorAll(".p1line1")[1];
var line2a = document.querySelectorAll(".p1line2")[0];
var line2b = document.querySelectorAll(".p1line2")[1];
var line3a = document.querySelectorAll(".p1line3")[0];
var line3b = document.querySelectorAll(".p1line3")[1];
var line4a = document.querySelectorAll(".p1line4")[0];
var line4b = document.querySelectorAll(".p1line4")[1];
var line5a = document.querySelectorAll(".p1line5")[0];
var line5b = document.querySelectorAll(".p1line5")[1];
var line6a = document.querySelectorAll(".p1line6")[0];
var line6b = document.querySelectorAll(".p1line6")[1];
var lines = [line1a, line1b, line2a, line2b, line3a, line3b, line4a, line4b, line5a, line5b, line6a, line6b, p1ptContainer];

function typedWrapperFunction() {
  disableClickSection.forEach(function (section) {
    return section.classList.add("disableClick");
  });
  lines.forEach(function (line) {
    return line.style.opacity = "0";
  });

  // Run typed.js
  $(document).ready(function () {
    $("#typed").typed({
      stringsElement: $("#typed-strings"),
      startDelay: 2000,
      typeSpeed: 1.7,
      callback: oneanimation
    });
  });

  // Series of Animations
  function oneanimation() {
    setTimeout(function () {
      $(".tom, .p1line1").animate({ backgroundColor: "rgba(199, 220, 101, .7)", opacity: 1 }, 1000, twoanimation);
      $(".tom, .p1line1").removeClass("disableClick");
    }, 1000);
  }

  function twoanimation() {
    setTimeout(function () {
      $(".jim, .p1line2").animate({ backgroundColor: "rgba(236, 208, 120, .7)", opacity: 1 }, 1000, threeanimation);
      $(".jim, .p1line2").removeClass("disableClick");
    }, 1000);
  }

  function threeanimation() {
    setTimeout(function () {
      $(".austin, .p1line3").animate({ backgroundColor: "rgba(80, 197, 186, 0.7)", opacity: 1 }, 1000, fouranimation);
      $(".austin, .p1line3").removeClass("disableClick");
    }, 1000);
  }

  function fouranimation() {
    setTimeout(function () {
      $(".kirby, .p1line4").animate({ backgroundColor: "rgba(237, 50, 147, 0.6)", opacity: 1 }, 1000, fiveanimation);
      $(" .kirby, .p1line4").removeClass("disableClick");
    }, 1000);
  }

  function fiveanimation() {
    setTimeout(function () {
      $(".mark, .p1line5").animate({ backgroundColor: "rgba(239, 153, 87, 0.8)", opacity: 1 }, 1000, sixanimation);
      $(".mark, .p1line5").removeClass("disableClick");
    }, 1000);
  }

  function sixanimation() {
    setTimeout(function () {
      $(".james, .p1line6").animate({ backgroundColor: "rgba(100,130,400,0.7)", opacity: 1 }, 1000, sevenanimation);
      $(".james, .p1line6").removeClass("disableClick");
    }, 1000);
  }

  function sevenanimation() {
    skip.style.pointerEvents = "none";
    disableClickSection.forEach(function (section) {
      return section.classList.remove("disableClick");
    });
    setTimeout(function () {
      $(".p1ptContainer").animate({ opacity: 1 }, 1000);
    }, 500);
  }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = skipWrapperFunction;

var _bling = __webpack_require__(0);

var skip = (0, _bling.$)(".hcSkipActive");
var wraphighlightsPage1 = (0, _bling.$)(".wraphighlightsPage1");
var p1ptContainer = (0, _bling.$)(".p1ptContainer");
var typedStringsContainer = (0, _bling.$)(".typedStringsContainer");
var typedStringsContainerSkip = (0, _bling.$)(".typedStringsContainerSkip");

function skipHighlights() {
  // stop/start click on skip/body>
  skip.style.pointerEvents = "none";
  p1ptContainer.classList.remove("disableClick");
  wraphighlightsPage1.classList.remove("disableClick");
  // remove typedStrings
  typedStringsContainer.style.display = "none";
  // add Stuff
  typedStringsContainerSkip.style.display = "block";
  typedStringsContainerSkip.classList.add("tscsActive");
  wraphighlightsPage1.classList.add("whActive");
  p1ptContainer.classList.add("ptActive");
}

function skipWrapperFunction() {
  skip.on("click", skipHighlights);
}

module.exports = {
  skipWrapperFunction: skipWrapperFunction,
  skipHighlights: skipHighlights
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = returnskipWrapperFunction;

var _bling = __webpack_require__(0);

function returnskipWrapperFunction() {
  var returnSkip = (0, _bling.$)(".ptbReturnSkip");
  returnSkip.on("click", function () {
    sessionStorage.setItem("reloading", "true");
  });
}

/***/ })
/******/ ]);