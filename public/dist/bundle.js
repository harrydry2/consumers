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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = skipHighlights;

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

var _bling = __webpack_require__(0);

__webpack_require__(5);

var _skip = __webpack_require__(1);

var _skip2 = _interopRequireDefault(_skip);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _skip = __webpack_require__(1);

var _skip2 = _interopRequireDefault(_skip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// add Class of Disabled Click to all the names
var tom = document.querySelector(".tom");

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
var lines = [line1a, line1b, line2a, line2b, line3a, line3b, line4a, line4b, line5a, line5b, line6a, line6b];

disableClickSection.forEach(function (section) {
  return section.classList.add("disableClick");
});
// lines.forEach(line => (line.style.opacity = `0`));
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
  eightAnimation();
  setTimeout(function () {
    $(".p1ptContainer").animate({ opacity: 1 }, 1000);
  }, 500);
}

function eightAnimation() {
  $("span .tom").on("mouseover", function () {
    document.querySelector("span .tom").classList.add("hoverOpacityG");
  });

  $("span .tom").on("mouseleave", function () {
    document.querySelector("span .tom").classList.remove("hoverOpacityG");
  });

  $("span .jim").on("mouseover", function () {
    document.querySelectorAll("span .jim").forEach(function (color) {
      color.classList.add("hoverOpacityY");
    });
  });

  $("span .jim").on("mouseleave", function () {
    document.querySelectorAll("span .jim").forEach(function (color) {
      color.classList.remove("hoverOpacityY");
    });
  });

  $("span .austin").on("mouseover", function () {
    document.querySelector("span .austin").classList.add("hoverOpacityB");
  });

  $("span .austin").on("mouseleave", function () {
    document.querySelector("span .austin").classList.remove("hoverOpacityB");
  });

  $("span .mark").on("mouseover", function () {
    document.querySelectorAll("span .mark").forEach(function (color) {
      color.classList.add("hoverOpacityP");
    });
  });

  $("span .mark").on("mouseleave", function () {
    document.querySelectorAll("span .mark").forEach(function (color) {
      color.classList.remove("hoverOpacityP");
    });
  });

  $("span .james").on("mouseover", function () {
    document.querySelectorAll("span .james").forEach(function (color) {
      color.classList.add("hoverOpacityO");
    });
  });

  $("span .james").on("mouseleave", function () {
    document.querySelectorAll("span .james").forEach(function (color) {
      color.classList.remove("hoverOpacityO");
    });
  });

  $("span .james2").on("mouseover", function () {
    document.querySelector("span .james2").classList.add("hoverOpacityM");
  });

  $("span .james2").on("mouseleave", function () {
    document.querySelector("span .james2").classList.remove("hoverOpacityM");
  });
}

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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bling = __webpack_require__(0);

var green = (0, _bling.$$)("a.green");
var yellow = (0, _bling.$$)("a.yellow");
var blue = (0, _bling.$$)("a.blue");
var pink = (0, _bling.$$)("a.pink");
var orange = (0, _bling.$$)("a.orange");

var green1 = (0, _bling.$$)("div.green");
var yellow1 = (0, _bling.$$)("div.yellow");
var blue1 = (0, _bling.$$)("div.blue");
var pink1 = (0, _bling.$$)("div.pink");
var orange1 = (0, _bling.$$)("div.orange");

var tom = (0, _bling.$$)(".tom");
var jim = (0, _bling.$$)(".jim");
var austin = (0, _bling.$$)(".austin");
var mark = (0, _bling.$$)(".mark");
var james = (0, _bling.$$)(".james");
var james2 = (0, _bling.$$)(".james2");

var line1 = (0, _bling.$$)(".p1line1");
var line2 = (0, _bling.$$)(".p1line2");
var line3 = (0, _bling.$$)(".p1line3");
var line4 = (0, _bling.$$)(".p1line4");
var line5 = (0, _bling.$$)(".p1line5");
var line6 = (0, _bling.$$)(".p1line6");

green.on("mouseover", hoverOnGreen);
green.on("mouseleave", hoverOffGreen);
yellow.on("mouseover", hoverOnYellow);
yellow.on("mouseleave", hoverOffYellow);
blue.on("mouseover", hoverOnBlue);
blue.on("mouseleave", hoverOffBlue);
pink.on("mouseover", hoverOnPink);
pink.on("mouseleave", hoverOffPink);
orange.on("mouseover", hoverOnOrange);
orange.on("mouseleave", hoverOffOrange);

green1.on("mouseover", hoverOnGreen1);
green1.on("mouseleave", hoverOffGreen1);
yellow1.on("mouseover", hoverOnYellow1);
yellow1.on("mouseleave", hoverOffYellow1);
blue1.on("mouseover", hoverOnBlue1);
blue1.on("mouseleave", hoverOffBlue1);
pink1.on("mouseover", hoverOnPink1);
pink1.on("mouseleave", hoverOffPink1);
orange1.on("mouseover", hoverOnOrange1);
orange1.on("mouseleave", hoverOffOrange1);

tom.on("mouseover", hoverOnTom);
tom.on("mouseleave", hoverOffTom);
jim.on("mouseover", hoverOnJim);
jim.on("mouseleave", hoverOffJim);
austin.on("mouseover", hoverOnAustin);
austin.on("mouseleave", hoverOffAustin);
mark.on("mouseover", hoverOnMark);
mark.on("mouseleave", hoverOffMark);
james.on("mouseover", hoverOnJames);
james.on("mouseleave", hoverOffJames);
james2.on("mouseover", hoverOnJames2);
james2.on("mouseleave", hoverOffJames2);

function hoverOnGreen() {
  green.forEach(function (color) {
    color.classList.add("hoverOpacityG");
  });
}

function hoverOffGreen() {
  green.forEach(function (color) {
    color.classList.remove("hoverOpacityG");
  });
}

function hoverOnGreen1() {
  green1.forEach(function (color) {
    color.classList.add("hoverOpacityG");
  });
}

function hoverOffGreen1() {
  green1.forEach(function (color) {
    color.classList.remove("hoverOpacityG");
  });
}

function hoverOnYellow() {
  yellow.forEach(function (color) {
    color.classList.add("hoverOpacityY");
  });
}

function hoverOffYellow() {
  yellow.forEach(function (color) {
    color.classList.remove("hoverOpacityY");
  });
}

function hoverOnYellow1() {
  yellow1.forEach(function (color) {
    color.classList.add("hoverOpacityY");
  });
}

function hoverOffYellow1() {
  yellow1.forEach(function (color) {
    color.classList.remove("hoverOpacityY");
  });
}

function hoverOnBlue() {
  blue.forEach(function (color) {
    color.classList.add("hoverOpacityB");
  });
}

function hoverOffBlue() {
  blue.forEach(function (color) {
    color.classList.remove("hoverOpacityB");
  });
}

function hoverOnBlue1() {
  blue1.forEach(function (color) {
    color.classList.add("hoverOpacityB");
  });
}

function hoverOffBlue1() {
  blue1.forEach(function (color) {
    color.classList.remove("hoverOpacityB");
  });
}

function hoverOnPink() {
  pink.forEach(function (color) {
    color.classList.add("hoverOpacityP");
  });
}

function hoverOffPink() {
  pink.forEach(function (color) {
    color.classList.remove("hoverOpacityP");
  });
}

function hoverOnPink1() {
  pink1.forEach(function (color) {
    color.classList.add("hoverOpacityP");
  });
}

function hoverOffPink1() {
  pink1.forEach(function (color) {
    color.classList.remove("hoverOpacityP");
  });
}

function hoverOnOrange() {
  orange.forEach(function (color) {
    color.classList.add("hoverOpacityO");
  });
}

function hoverOffOrange() {
  orange.forEach(function (color) {
    color.classList.remove("hoverOpacityO");
  });
}

function hoverOnOrange1() {
  orange1.forEach(function (color) {
    color.classList.add("hoverOpacityO");
  });
}

function hoverOffOrange1() {
  orange1.forEach(function (color) {
    color.classList.remove("hoverOpacityO");
  });
}

// Page1b

function hoverOnTom() {
  tom.forEach(function (color) {
    color.classList.add("hoverOpacityG");
  });
}
function hoverOffTom() {
  tom.forEach(function (color) {
    color.classList.remove("hoverOpacityG");
  });
}

function hoverOnJim() {
  jim.forEach(function (color) {
    color.classList.add("hoverOpacityY");
  });
}

function hoverOffJim() {
  jim.forEach(function (color) {
    color.classList.remove("hoverOpacityY");
  });
}

function hoverOnAustin() {
  austin.forEach(function (color) {
    color.classList.add("hoverOpacityB");
  });
}

function hoverOffAustin() {
  austin.forEach(function (color) {
    color.classList.remove("hoverOpacityB");
  });
}

function hoverOnMark() {
  mark.forEach(function (color) {
    color.classList.add("hoverOpacityP");
  });
}

function hoverOffMark() {
  mark.forEach(function (color) {
    color.classList.remove("hoverOpacityP");
  });
}

function hoverOnJames() {
  james.forEach(function (color) {
    color.classList.add("hoverOpacityO");
  });
}

function hoverOffJames() {
  james.forEach(function (color) {
    color.classList.remove("hoverOpacityO");
  });
}

function hoverOnJames2() {
  james2.forEach(function (color) {
    color.classList.add("hoverOpacityM");
  });
}

function hoverOffJames2() {
  james2.forEach(function (color) {
    color.classList.remove("hoverOpacityM");
  });
}

// Page 1 Highlights

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bling = __webpack_require__(0);

var nightMode = (0, _bling.$)(".nightModeOn");

nightMode.on("click", function () {
  document.body.classList.toggle("nightmode");
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bling = __webpack_require__(0);

var puOuter = (0, _bling.$)(".puOuterContainer");
var puInner = (0, _bling.$)(".puInnerContainer");
var plusButton = (0, _bling.$)(".plusButton");

var bhOuter = (0, _bling.$)(".bhOuterContainer");
var bhInner = (0, _bling.$)(".bhInnerContainer");
var buyHardback = (0, _bling.$)(".buyHardback");

var bhOpenVar = false;

// plus Button Click
plusButton.on("click", puOpen);
window.on("click", closepuOnClick);
document.on("keydown", closepuOnEsc);

function puOpen() {
  puOuter.style.display = "flex";
  setTimeout(function () {
    return puInner.style.opacity = "1";
  }, 50);
  document.body.classList.add("noScroll");
}

function closepuOnClick(e) {
  if (e.target == puOuter && bhOpenVar === false) {
    puInner.style.opacity = "0";
    document.body.classList.remove("noScroll");
    setTimeout(function () {
      return puOuter.style.display = "none";
    }, 100);
  }
}

function closepuOnEsc(e) {
  if (e.keyCode == 27 && bhOpenVar === false) {
    puInner.style.opacity = "0";
    document.body.classList.remove("modalNoScroll");
    setTimeout(function () {
      return puOuter.style.display = "none";
    }, 100);
  }
}

// buyHardback Click

buyHardback.on("click", bhOpen);
window.on("click", closebhOnClick);
document.on("keydown", closebhOnEsc);

function bhOpen() {
  bhOuter.style.display = "flex";
  bhOpenVar = true;
  setTimeout(function () {
    return bhInner.style.opacity = "1";
  }, 50);
}

function closebhOnClick(e) {
  if (e.target == bhOuter && bhOpenVar === true) {
    bhInner.style.opacity = "0";
    setTimeout(function () {
      return bhOuter.style.display = "none";
    }, 100);
    bhOpenVar = false;
  }
}

function closebhOnEsc(e) {
  if (e.keyCode == 27 && bhOpenVar === true) {
    bhInner.style.opacity = "0";
    setTimeout(function () {
      return bhOuter.style.display = "none";
    }, 100);
    bhOpenVar = false;
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stripe = Stripe("pk_live_SYAmCo2SAlL03XizufhUazZk");
var elements = stripe.elements({
  fonts: [{
    family: "PerpetuaStdR",
    src: "url(https://hd999.herokuapp.com/fonts/PerpetuaStdR.woff2) format(\"woff\")"
  }]
});

var elementStyles = {
  base: {
    color: "#333333",
    fontFamily: "PerpetuaStdR",
    fontSmoothing: "antialiased",
    fontSize: "15px",
    ":focus": {
      color: "#424770"
    },
    "::placeholder": {
      color: "#333333"
    },
    ":focus::placeholder": {
      color: "#CFD7DF"
    }
  },
  invalid: {
    color: "#fff",
    ":focus": {
      color: "#FA755A"
    },
    "::placeholder": {
      color: "red"
    }
  }
};

var elementClasses = {
  focus: "focus",
  empty: "empty",
  invalid: "invalid"
};

var cardNumber = elements.create("cardNumber", {
  style: elementStyles,
  classes: elementClasses
});
cardNumber.mount("#cardNumber");

var cardExpiry = elements.create("cardExpiry", {
  style: elementStyles,
  classes: elementClasses
});
cardExpiry.mount("#cardExpiry");

var cardCvc = elements.create("cardCvc", {
  style: elementStyles,
  classes: elementClasses
});
cardCvc.mount("#cardCvc");

// Handle real-time validation errors from the card Element.
cardNumber.addEventListener("change", function (event) {
  var displayError = document.getElementById("card-errors");
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = "";
  }
});

// Handle form submission
var form = document.getElementById("payment-form");
console.log(form, "form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  stripe.createToken(card).then(function (result) {
    if (result.error) {
      // Inform the user if there was an error
      var errorElement = document.getElementById("card-errors");
      errorElement.textContent = result.error.message;
    } else {
      // Send the token to your server
      stripeTokenHandler(result.token);
    }
  });
});

var stripeTokenHandler = function stripeTokenHandler(token) {
  // Insert the token ID into the form so it gets submitted to the server
  var form = document.getElementById("payment-form");
  var hiddenInput = document.createElement("input");
  hiddenInput.setAttribute("type", "hidden");
  hiddenInput.setAttribute("name", "stripeToken");
  hiddenInput.setAttribute("value", token.id);
  form.appendChild(hiddenInput);

  // Submit the form
  form.submit();
};

/***/ })
/******/ ]);