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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(30)('wks');
var uid = __webpack_require__(31);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var createDesc = __webpack_require__(28);
module.exports = __webpack_require__(7) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(27)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(4);
var ctx = __webpack_require__(10);
var hide = __webpack_require__(5);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(11);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var IE8_DOM_DEFINE = __webpack_require__(60);
var toPrimitive = __webpack_require__(61);
var dP = Object.defineProperty;

exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = skipHighlights;

var _bling = __webpack_require__(2);

var skip = (0, _bling.$)(".hcSkipActive");
console.log(skip);
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
/* 16 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(68);
var defined = __webpack_require__(17);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(30)('keys');
var uid = __webpack_require__(31);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(12).f;
var has = __webpack_require__(13);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(11);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === "production") {
  module.exports = __webpack_require__(47);
} else {
  module.exports = __webpack_require__(48);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(26);
var $export = __webpack_require__(9);
var redefine = __webpack_require__(62);
var hide = __webpack_require__(5);
var has = __webpack_require__(13);
var Iterators = __webpack_require__(8);
var $iterCreate = __webpack_require__(63);
var setToStringTag = __webpack_require__(21);
var getPrototypeOf = __webpack_require__(71);
var ITERATOR = __webpack_require__(1)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(16);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(14);
var TAG = __webpack_require__(1)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(3);
var aFunction = __webpack_require__(11);
var SPECIES = __webpack_require__(1)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(10);
var invoke = __webpack_require__(83);
var html = __webpack_require__(33);
var cel = __webpack_require__(18);
var global = __webpack_require__(0);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(14)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var isObject = __webpack_require__(6);
var newPromiseCapability = __webpack_require__(22);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(41);

var _bling = __webpack_require__(2);

__webpack_require__(42);

var _skip = __webpack_require__(15);

var _skip2 = _interopRequireDefault(_skip);

__webpack_require__(43);

__webpack_require__(44);

__webpack_require__(45);

__webpack_require__(46);

__webpack_require__(49);

__webpack_require__(50);

__webpack_require__(90);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _skip = __webpack_require__(15);

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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bling = __webpack_require__(2);

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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bling = __webpack_require__(2);

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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bling = __webpack_require__(2);

var puOuter = (0, _bling.$)(".puOuterContainer");
var puInner = (0, _bling.$)(".puInnerContainer");
var plusButton = (0, _bling.$)(".plusButton");
var plusButton1 = (0, _bling.$)(".plusButton1");

var bhOuter = (0, _bling.$)(".bhOuterContainer");
var bhInner = (0, _bling.$)(".bhInnerContainer");
var buyHardback = (0, _bling.$)(".buyHardback");

var eOuter = (0, _bling.$)(".eOuterContainer");
var eInner = (0, _bling.$)(".eInnerContainer");
var emailMe = (0, _bling.$)(".emailMe");

var dOuter = (0, _bling.$)(".dOuterContainer");
var dInner = (0, _bling.$)(".dInnerContainer");
var donate = (0, _bling.$)(".donate");

var bhOpenVar = false;
var dOpenVar = false;
var eOpenVar = false;

// plus Button Click
plusButton.on("click", puOpen);
plusButton1.on("click", puOpen);
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
  if (e.target == puOuter && bhOpenVar === false && eOpenVar === false && dOpenVar === false) {
    puInner.style.opacity = "0";
    document.body.classList.remove("noScroll");
    setTimeout(function () {
      return puOuter.style.display = "none";
    }, 100);
  }
}

function closepuOnEsc(e) {
  if (e.keyCode == 27 && bhOpenVar === false && eOpenVar === false && dOpenVar === false) {
    puInner.style.opacity = "0";
    document.body.classList.remove("noScroll");
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
    }, 800);
    bhOpenVar = false;
  }
}

function closebhOnEsc(e) {
  if (e.keyCode == 27 && bhOpenVar === true) {
    bhInner.style.opacity = "0";
    setTimeout(function () {
      return bhOuter.style.display = "none";
    }, 800);
    bhOpenVar = false;
  }
}

// Donate
donate.on("click", dOpen);
window.on("click", closedOnClick);
document.on("keydown", closedOnEsc);

function dOpen() {
  dOuter.style.display = "flex";
  dOpenVar = true;
  setTimeout(function () {
    return dInner.style.opacity = "1";
  }, 50);
}

function closedOnClick(e) {
  if (e.target == dOuter && dOpenVar === true) {
    dInner.style.opacity = "0";
    setTimeout(function () {
      return dOuter.style.display = "none";
    }, 800);
    dOpenVar = false;
  }
}

function closedOnEsc(e) {
  if (e.keyCode == 27 && dOpenVar === true) {
    dInner.style.opacity = "0";
    setTimeout(function () {
      return dOuter.style.display = "none";
    }, 800);
    dOpenVar = false;
  }
}

// Email Me Click
emailMe.on("click", eOpen);
window.on("click", closeEOnClick);
document.on("keydown", closeEOnEsc);

function eOpen() {
  eOuter.style.display = "flex";
  puInner.style.opacity = "0";
  eOpenVar = true;
  setTimeout(function () {
    return eInner.style.opacity = "1";
  }, 50);
  setTimeout(function () {
    return puInner.style.display = "none";
  }, 800);
}

function closeEOnClick(e) {
  if (e.target == eOuter && eOpenVar === true) {
    eInner.style.opacity = "0";
    puInner.style.display = "flex";
    setTimeout(function () {
      return eOuter.style.display = "none";
    }, 800);
    setTimeout(function () {
      return puInner.style.opacity = "1";
    }, 50);
    eOpenVar = false;
  }
}

function closeEOnEsc(e) {
  if (e.keyCode == 27 && eOpenVar === true) {
    eInner.style.opacity = "0";
    puInner.style.display = "flex";
    setTimeout(function () {
      return eOuter.style.display = "none";
    }, 800);
    setTimeout(function () {
      return puInner.style.opacity = "1";
    }, 50);
    eOpenVar = false;
  }
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(23);
var stripe = Stripe(keys.STRIPE_P);
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
      color: "#333333"
    },
    "::placeholder": {
      color: "#333333"
    },
    ":focus::placeholder": {
      color: "#333333"
    }
  },
  invalid: {
    color: "red",
    ":focus": {
      color: "red"
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

var cardNumberAlt = document.querySelector(".cardNumberAlt");
var cardExpiryAlt = document.querySelector(".cardExpiryAlt");

cardNumber.on("focus", function () {
  cardNumberAlt.classList.remove("opacityDown");
});

cardNumber.on("blur", function () {
  if (cardNumberAlt.classList.contains("empty")) {
    cardNumberAlt.classList.add("opacityDown");
  }
});

cardExpiry.on("focus", function () {
  cardExpiryAlt.classList.remove("opacityDown");
});

cardExpiry.on("blur", function () {
  if (cardExpiryAlt.classList.contains("empty")) {
    cardExpiryAlt.classList.add("opacityDown");
  }
});

// Handle form submission
var form = document.getElementById("payment-form");
console.log(form, "form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  stripe.createToken(cardNumber).then(function (result) {
    if (result.error) {
      console.log(result.error.message);
    } else {
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

module.exports = {
  STRIPE_P: process.env.STRIPE_P,
  STRIPE_S: process.env.STRIPE_S
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  STRIPE_P: "pk_test_pmETjXLzVxZ9ujD19IgjONJb",
  STRIPE_S: "sk_test_Kd9Y2W1xCrhLBOUwGZWJ5z09"
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(23);
var stripe = Stripe(keys.STRIPE_P);

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
      color: "#333333"
    },
    "::placeholder": {
      color: "#333333"
    },
    ":focus::placeholder": {
      color: "#333333"
    }
  },
  invalid: {
    color: "red",
    ":focus": {
      color: "red"
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

var cardNumberD = elements.create("cardNumber", {
  style: elementStyles,
  classes: elementClasses
});
cardNumberD.mount("#cardNumberD");

var cardExpiryD = elements.create("cardExpiry", {
  style: elementStyles,
  classes: elementClasses
});
cardExpiryD.mount("#cardExpiryD");

var cardCvcD = elements.create("cardCvc", {
  style: elementStyles,
  classes: elementClasses
});
cardCvcD.mount("#cardCvcD");

var cardNumberAltD = document.querySelector(".cardNumberAltD");
var cardExpiryAltD = document.querySelector(".cardExpiryAltD");

cardNumberD.on("focus", function () {
  cardNumberAltD.classList.remove("opacityDown");
});

cardNumberD.on("blur", function () {
  if (cardNumberAltD.classList.contains("empty")) {
    cardNumberAltD.classList.add("opacityDown");
  }
});

cardExpiryD.on("focus", function () {
  cardExpiryAltD.classList.remove("opacityDown");
});

cardExpiryD.on("blur", function () {
  if (cardExpiryAltD.classList.contains("empty")) {
    cardExpiryAltD.classList.add("opacityDown");
  }
});

// Handle form submission
var formD = document.getElementById("payment-formD");
console.log(formD, "form");
formD.addEventListener("submit", function (event) {
  event.preventDefault();

  stripe.createToken(cardNumberD).then(function (result) {
    if (result.error) {
      console.log(result.error.message);
    } else {
      stripeTokenHandler(result.token);
    }
  });
});

var stripeTokenHandler = function stripeTokenHandler(token) {
  // Insert the token ID into the form so it gets submitted to the server
  var formD = document.getElementById("payment-formD");
  var hiddenInput = document.createElement("input");
  hiddenInput.setAttribute("type", "hidden");
  hiddenInput.setAttribute("name", "stripeToken");
  hiddenInput.setAttribute("value", token.id);
  formD.appendChild(hiddenInput);
  // Submit the form
  formD.submit();
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(51);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(54);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _bling = __webpack_require__(2);

var _skip = __webpack_require__(15);

var _skip2 = _interopRequireDefault(_skip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var returnSkip1 = (0, _bling.$)(".buyButton");
var returnSkip2 = (0, _bling.$)(".donateButton");
var puOuterContainerFlash = (0, _bling.$)(".puOuterContainerFlash");
var puInnerContainerFlash = (0, _bling.$)(".puInnerContainerFlash");
var skipOpenVar = false;

returnSkip1.on("click", function () {
  sessionStorage.setItem("skip", "yes");
});

returnSkip2.on("click", function () {
  sessionStorage.setItem("skip", "yes");
});

window.addEventListener("load", (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var skip;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          skip = sessionStorage.getItem("skip");

          if (!(skip && skipOpenVar === false)) {
            _context.next = 8;
            break;
          }

          sessionStorage.removeItem("skip");
          document.body.classList.add("noScroll");
          skipOpenVar = true;
          _context.next = 7;
          return (0, _skip2.default)();

        case 7:
          if (puOuterContainerFlash) {
            puOuterContainerFlash.style.backgroundColor = "rgba(0,0,0,0.5)";
          }

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
})));

window.on("click", closeFlashOnClick);
document.on("keydown", closeFlashOnEsc);

function closeFlashOnClick(e) {
  if (e.target == puOuterContainerFlash && skipOpenVar === true) {
    puInnerContainerFlash.style.opacity = "0";
    setTimeout(function () {
      return puOuterContainerFlash.style.display = "none";
    }, 100);
    document.body.classList.remove("noScroll");
    skipOpenVar = false;
  }
}

function closeFlashOnEsc(e) {
  if (e.keyCode == 27 && skipOpenVar === true) {
    puInnerContainerFlash.style.opacity = "0";
    setTimeout(function () {
      return puOuterContainerFlash.style.display = "none";
    }, 100);
    document.body.classList.remove("noScroll");
    skipOpenVar = false;
  }
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(52);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(53);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 53 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(55);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(56), __esModule: true };

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(57);
__webpack_require__(58);
__webpack_require__(73);
__webpack_require__(77);
__webpack_require__(88);
__webpack_require__(89);
module.exports = __webpack_require__(4).Promise;


/***/ }),
/* 57 */
/***/ (function(module, exports) {



/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(59)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(25)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(16);
var defined = __webpack_require__(17);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(7) && !__webpack_require__(27)(function () {
  return Object.defineProperty(__webpack_require__(18)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(6);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(64);
var descriptor = __webpack_require__(28);
var setToStringTag = __webpack_require__(21);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(5)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(3);
var dPs = __webpack_require__(65);
var enumBugKeys = __webpack_require__(32);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(18)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(33).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(12);
var anObject = __webpack_require__(3);
var getKeys = __webpack_require__(66);

module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(67);
var enumBugKeys = __webpack_require__(32);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(13);
var toIObject = __webpack_require__(19);
var arrayIndexOf = __webpack_require__(69)(false);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(14);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(19);
var toLength = __webpack_require__(29);
var toAbsoluteIndex = __webpack_require__(70);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(16);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(13);
var toObject = __webpack_require__(72);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(17);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74);
var global = __webpack_require__(0);
var hide = __webpack_require__(5);
var Iterators = __webpack_require__(8);
var TO_STRING_TAG = __webpack_require__(1)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(75);
var step = __webpack_require__(76);
var Iterators = __webpack_require__(8);
var toIObject = __webpack_require__(19);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(25)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(26);
var global = __webpack_require__(0);
var ctx = __webpack_require__(10);
var classof = __webpack_require__(34);
var $export = __webpack_require__(9);
var isObject = __webpack_require__(6);
var aFunction = __webpack_require__(11);
var anInstance = __webpack_require__(78);
var forOf = __webpack_require__(79);
var speciesConstructor = __webpack_require__(35);
var task = __webpack_require__(36).set;
var microtask = __webpack_require__(84)();
var newPromiseCapabilityModule = __webpack_require__(22);
var perform = __webpack_require__(37);
var promiseResolve = __webpack_require__(38);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(85)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(21)($Promise, PROMISE);
__webpack_require__(86)(PROMISE);
Wrapper = __webpack_require__(4)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(87)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(10);
var call = __webpack_require__(80);
var isArrayIter = __webpack_require__(81);
var anObject = __webpack_require__(3);
var toLength = __webpack_require__(29);
var getIterFn = __webpack_require__(82);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(3);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(8);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(34);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(8);
module.exports = __webpack_require__(4).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 83 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var macrotask = __webpack_require__(36).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(14)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(5);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(0);
var core = __webpack_require__(4);
var dP = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(7);
var SPECIES = __webpack_require__(1)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(1)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(9);
var core = __webpack_require__(4);
var global = __webpack_require__(0);
var speciesConstructor = __webpack_require__(35);
var promiseResolve = __webpack_require__(38);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(9);
var newPromiseCapability = __webpack_require__(22);
var perform = __webpack_require__(37);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _bling = __webpack_require__(2);

var stripeDonationAmount = (0, _bling.$)(".stripeDonationAmount");
var middleMoney = (0, _bling.$)(".middleMoney");
var moneyUp = (0, _bling.$)(".moneyUp");
var moneyDown = (0, _bling.$)(".moneyDown");

var donationAmount = 500;
var donationLevel = 1;

function updateAmount() {
  if (donationLevel <= 0) {
    donationAmount = 200;
    middleMoney.innerText = "\xA32.00";
    moneyDown.style.opacity = "0.5";
  } else if (donationLevel === 1) {
    donationAmount = 500;
    middleMoney.innerText = "\xA35.00";
    moneyDown.style.opacity = "1";
  } else if (donationLevel === 2) {
    donationAmount = 1000;
    middleMoney.innerText = "\xA310.00";
    moneyUp.style.opacity = "1";
  } else if (donationLevel >= 3) {
    donationAmount = 1500;
    middleMoney.innerText = "\xA315.00";
    moneyUp.style.opacity = "0.5";
  }
  stripeDonationAmount.value = "" + donationAmount;
}

moneyUp.on("click", function (e) {
  if (donationLevel < 3) {
    donationLevel++;
    updateAmount();
  }
});

moneyDown.on("click", function (e) {
  if (donationLevel > 0) {
    donationLevel--;
    updateAmount();
  }
});

updateAmount();

/***/ })
/******/ ]);