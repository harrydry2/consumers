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

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
    $(".tom, .p1line1").animate({ backgroundColor: "rgba(150, 240, 75, 0.65)", opacity: 1 }, 1000, twoanimation);
    $(".tom, .p1line1").removeClass("disableClick");
  }, 1000);
}

function twoanimation() {
  setTimeout(function () {
    $(".jim, .p1line2").animate({ backgroundColor: "rgba(266, 238, 110, 0.78)", opacity: 1 }, 1000, threeanimation);
    $(".jim, .p1line2").removeClass("disableClick");
  }, 1000);
}

function threeanimation() {
  setTimeout(function () {
    $(".austin, .p1line3").animate({ backgroundColor: "rgba(80, 205, 236, 0.62)", opacity: 1 }, 1000, fouranimation);
    $(".austin, .p1line3").removeClass("disableClick");
  }, 1000);
}

function fouranimation() {
  setTimeout(function () {
    $(".mark, .p1line4").animate({ backgroundColor: "rgba(277, 80, 210, 0.44)", opacity: 1 }, 1000, fiveanimation);
    $(" .mark, .p1line4").removeClass("disableClick");
  }, 1000);
}

function fiveanimation() {
  setTimeout(function () {
    $(".james, .p1line5").animate({ backgroundColor: "rgba(299, 140, 0, 0.50)", opacity: 1 }, 1000, sixanimation);
    $(".james, .p1line5").removeClass("disableClick");
  }, 1000);
}

function sixanimation() {
  setTimeout(function () {
    $(".james2, .p1line6").animate({ backgroundColor: "rgba(87, 130, 365, 0.53)", opacity: 1 }, 1000, sevenanimation);
    $(".james2, .p1line6").removeClass("disableClick");
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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

skip.on("click", skipHighlights);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bling = __webpack_require__(0);

var section1 = (0, _bling.$)(".section-1");
var section2 = (0, _bling.$)(".section-2");
var section3 = (0, _bling.$)(".section-3");
var section4 = (0, _bling.$)(".section-4");
var section5 = (0, _bling.$)(".section-5");
var section6 = (0, _bling.$)(".section-6");
var section7 = (0, _bling.$)(".section-7");
var section8 = (0, _bling.$)(".section-8");
var section9 = (0, _bling.$)(".section-9");
var section10 = (0, _bling.$)(".section-10");
var section11 = (0, _bling.$)(".section-11");
var section12 = (0, _bling.$)(".section-12");
var section13 = (0, _bling.$)(".section-13");
var section14 = (0, _bling.$)(".section-14");
var section15 = (0, _bling.$)(".section-15");
var section16 = (0, _bling.$)(".section-16");
var section17 = (0, _bling.$)(".section-17");
var section18 = (0, _bling.$)(".section-18");
var section19 = (0, _bling.$)(".section-19");
var section20 = (0, _bling.$)(".section-20");
var section21 = (0, _bling.$)(".section-21");
var section22 = (0, _bling.$)(".section-22");

// Page1
(0, _bling.$)(".s1-s2").on("click", function () {
  section1.classList.add("animate-out");
  section2.classList.add("animate-in");
});

// Page2
(0, _bling.$)(".s2-s1").on("click", function () {
  section1.classList.remove("animate-out");
  section2.classList.remove("animate-in");
});

(0, _bling.$)(".s2-s3").on("click", function () {
  section2.classList.remove("animate-in");
  section2.classList.add("animate-out");
  section3.classList.add("animate-in");
});

// Page3
(0, _bling.$)(".s3-s2").on("click", function () {
  section2.classList.remove("animate-out");
  section2.classList.add("animate-in");
  section3.classList.remove("animate-in");
});

(0, _bling.$)(".s3-s4").on("click", function () {
  section3.classList.remove("animate-in");
  section3.classList.add("animate-out");
  section4.classList.add("animate-in");
});

// Page4
(0, _bling.$)(".s4-s3").on("click", function () {
  section3.classList.remove("animate-out");
  section3.classList.add("animate-in");
  section4.classList.remove("animate-in");
});

(0, _bling.$)(".s4-s5").on("click", function () {
  section4.classList.remove("animate-in");
  section4.classList.add("animate-out");
  section5.classList.add("animate-in");
});

// Page5
(0, _bling.$)(".s5-s4").on("click", function () {
  section4.classList.remove("animate-out");
  section4.classList.add("animate-in");
  section5.classList.remove("animate-in");
});

(0, _bling.$)(".s5-s6").on("click", function () {
  section5.classList.remove("animate-in");
  section5.classList.add("animate-out");
  section6.classList.add("animate-in");
});

// Page6
(0, _bling.$)(".s6-s5").on("click", function () {
  section5.classList.remove("animate-out");
  section5.classList.add("animate-in");
  section6.classList.remove("animate-in");
});

(0, _bling.$)(".s6-s7").on("click", function () {
  section6.classList.remove("animate-in");
  section6.classList.add("animate-out");
  section7.classList.add("animate-in");
});

// Page7
(0, _bling.$)(".s7-s6").on("click", function () {
  section6.classList.remove("animate-out");
  section6.classList.add("animate-in");
  section7.classList.remove("animate-in");
});

(0, _bling.$)(".s7-s8").on("click", function () {
  section7.classList.remove("animate-in");
  section7.classList.add("animate-out");
  section8.classList.add("animate-in");
});

// Page8
(0, _bling.$)(".s8-s7").on("click", function () {
  section7.classList.remove("animate-out");
  section7.classList.add("animate-in");
  section8.classList.remove("animate-in");
});

(0, _bling.$)(".s8-s9").on("click", function () {
  section8.classList.remove("animate-in");
  section8.classList.add("animate-out");
  section9.classList.add("animate-in");
});

// Page9
(0, _bling.$)(".s9-s8").on("click", function () {
  section8.classList.remove("animate-out");
  section8.classList.add("animate-in");
  section9.classList.remove("animate-in");
});

(0, _bling.$)(".s9-s10").on("click", function () {
  section9.classList.remove("animate-in");
  section9.classList.add("animate-out");
  section10.classList.add("animate-in");
});

// Page10
(0, _bling.$)(".s10-s9").on("click", function () {
  section9.classList.remove("animate-out");
  section9.classList.add("animate-in");
  section10.classList.remove("animate-in");
});

(0, _bling.$)(".s10-s11").on("click", function () {
  section10.classList.remove("animate-in");
  section10.classList.add("animate-out");
  section11.classList.add("animate-in");
});

// Page11
(0, _bling.$)(".s11-s10").on("click", function () {
  section10.classList.remove("animate-out");
  section10.classList.add("animate-in");
  section11.classList.remove("animate-in");
});

(0, _bling.$)(".s11-s12").on("click", function () {
  section11.classList.remove("animate-in");
  section11.classList.add("animate-out");
  section12.classList.add("animate-in");
});

// Page12
(0, _bling.$)(".s12-s11").on("click", function () {
  section11.classList.remove("animate-out");
  section11.classList.add("animate-in");
  section12.classList.remove("animate-in");
});

(0, _bling.$)(".s12-s13").on("click", function () {
  section12.classList.remove("animate-in");
  section12.classList.add("animate-out");
  section13.classList.add("animate-in");
});

// Page13
(0, _bling.$)(".s13-s12").on("click", function () {
  section12.classList.remove("animate-out");
  section12.classList.add("animate-in");
  section13.classList.remove("animate-in");
});

(0, _bling.$)(".s13-s14").on("click", function () {
  section13.classList.remove("animate-in");
  section13.classList.add("animate-out");
  section14.classList.add("animate-in");
});

// Page14
(0, _bling.$)(".s14-s13").on("click", function () {
  section13.classList.remove("animate-out");
  section13.classList.add("animate-in");
  section14.classList.remove("animate-in");
});

(0, _bling.$)(".s14-s15").on("click", function () {
  section14.classList.remove("animate-in");
  section14.classList.add("animate-out");
  section15.classList.add("animate-in");
});

// Page15
(0, _bling.$)(".s15-s14").on("click", function () {
  section14.classList.remove("animate-out");
  section14.classList.add("animate-in");
  section15.classList.remove("animate-in");
});

(0, _bling.$)(".s15-s16").on("click", function () {
  section15.classList.remove("animate-in");
  section15.classList.add("animate-out");
  section16.classList.add("animate-in");
});

// Page16
(0, _bling.$)(".s16-s15").on("click", function () {
  section15.classList.remove("animate-out");
  section15.classList.add("animate-in");
  section16.classList.remove("animate-in");
});

(0, _bling.$)(".s16-s17").on("click", function () {
  section16.classList.remove("animate-in");
  section16.classList.add("animate-out");
  section17.classList.add("animate-in");
});

// Page17
(0, _bling.$)(".s17-s16").on("click", function () {
  section16.classList.remove("animate-out");
  section16.classList.add("animate-in");
  section17.classList.remove("animate-in");
});

(0, _bling.$)(".s17-s18").on("click", function () {
  section17.classList.remove("animate-in");
  section17.classList.add("animate-out");
  section18.classList.add("animate-in");
});

// Page18
(0, _bling.$)(".s18-s17").on("click", function () {
  section17.classList.remove("animate-out");
  section17.classList.add("animate-in");
  section18.classList.remove("animate-in");
});

(0, _bling.$)(".s18-s19").on("click", function () {
  section18.classList.remove("animate-in");
  section18.classList.add("animate-out");
  section19.classList.add("animate-in");
});

// Page19
(0, _bling.$)(".s19-s18").on("click", function () {
  section18.classList.remove("animate-out");
  section18.classList.add("animate-in");
  section19.classList.remove("animate-in");
});

(0, _bling.$)(".s19-s20").on("click", function () {
  section19.classList.remove("animate-in");
  section19.classList.add("animate-out");
  section20.classList.add("animate-in");
});

// Page20
(0, _bling.$)(".s20-s19").on("click", function () {
  section19.classList.remove("animate-out");
  section19.classList.add("animate-in");
  section20.classList.remove("animate-in");
});

(0, _bling.$)(".s20-s21").on("click", function () {
  section20.classList.remove("animate-in");
  section20.classList.add("animate-out");
  section21.classList.add("animate-in");
});

// Page21
(0, _bling.$)(".s21-s20").on("click", function () {
  section20.classList.remove("animate-out");
  section20.classList.add("animate-in");
  section21.classList.remove("animate-in");
});

(0, _bling.$)(".s21-s22").on("click", function () {
  section21.classList.remove("animate-in");
  section21.classList.add("animate-out");
  section22.classList.add("animate-in");
});

// Page22
// $(".s22-s21").on("click", function() {
//   section21.classList.remove("animate-out");
//   section21.classList.add("animate-in");
//   section22.classList.remove("animate-in");
// });

/***/ })
/******/ ]);