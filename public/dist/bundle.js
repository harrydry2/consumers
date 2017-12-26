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

var _elements = __webpack_require__(4);

var _elements2 = _interopRequireDefault(_elements);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stripe = Stripe("pk_live_SYAmCo2SAlL03XizufhUazZk");
var elements = stripe.elements();

var style = {
  base: {
    color: "#36434D",
    lineHeight: "18px",
    fontFamily: "CamphorStd-Regular",
    fontSmoothing: "antialiased",
    fontSize: "12px",
    "::placeholder": {
      color: "#A09EA2"
    }
  },
  invalid: {
    color: "#fa755a",
    iconColor: "#fa755a"
  }
};

var card = elements.create("card", {
  style: style,
  hidePostalCode: true
});
card.mount("#card-element");
console.log(card, "card");

// Handle real-time validation errors from the card Element.
card.addEventListener("change", function (event) {
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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bling = __webpack_require__(0);

var modalOuter = (0, _bling.$)(".modalOuterContainer");
var modalInner = (0, _bling.$)(".modalInnerContainer");
var pcButton = (0, _bling.$)(".pcButton");

pcButton.on("click", modalOpen);
window.on("click", closeModalOnClick);
document.on("keydown", closeModalOnEsc);

function modalOpen() {
  modalOuter.style.display = "block";
  setTimeout(function () {
    return modalInner.style.opacity = "1";
  }, 50);
  document.body.classList.add("modalNoScroll");
}

function closeModalOnClick(e) {
  if (e.target == modalOuter) {
    modalInner.style.opacity = "0";
    document.body.classList.remove("modalNoScroll");
    setTimeout(function () {
      return modalOuter.style.display = "none";
    }, 100);
  }
}

function closeModalOnEsc(e) {
  if (e.keyCode == 27) {
    modalInner.style.opacity = "0";
    document.body.classList.remove("modalNoScroll");
    setTimeout(function () {
      return modalOuter.style.display = "none";
    }, 100);
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bling = __webpack_require__(0);

var formInputs = (0, _bling.$$)(".formInput");

formInputs.forEach(function (input) {
  input.on("keypress", function (e) {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  });
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bling = __webpack_require__(0);

var refresh = (0, _bling.$)(".refreshIcon");
var couponInput = (0, _bling.$)(".couponInput");
var chargesContainerHidden = (0, _bling.$)(".chargesContainerHidden");
var heavyCharge = (0, _bling.$)(".heavyCharge");
var plan = (0, _bling.$)(".plan");
var couponFM = (0, _bling.$)(".couponFM");

refresh.on("click", function (e) {
  if (couponInput.value === "kidsleepy") {
    chargesContainerHidden.style.display = "flex";
    setTimeout(function () {
      couponFM.innerHTML = "Success!";
      couponFM.style.color = "#3ECF8E";
      chargesContainerHidden.style.height = "4rem";
      chargesContainerHidden.style.opacity = "1";
      heavyCharge.innerHTML = "$4.40";
      plan.innerHTML = "$4.40";
    }, 100);
  } else {
    couponFM.innerHTML = "Invalid Coupon Code!";
    couponFM.style.color = "red";
  }
});

/***/ })
/******/ ]);