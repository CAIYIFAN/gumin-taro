(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["vendors"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _construct; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if (Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createSuper; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
  return function _createSuperInternal() {
    var Super = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, result);
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/get.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/get.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _get; });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = Object(_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isNativeFunction; });
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isNativeReflectConstruct; });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return Object(_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/set.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/set.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _set; });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = Object(_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, property);
      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr, i) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr, i) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/superPropBase.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _superPropBase; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object);
    if (object === null) break;
  }

  return object;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _wrapNativeSuper; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construct.js */ "./node_modules/@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !Object(_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return Object(_construct_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Class, arguments, Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/ObserverComponent.js":
/*!**************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/ObserverComponent.js ***!
  \**************************************************************/
/*! exports provided: Observer */
/*! exports used: Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObserverComponent; });
/* harmony import */ var _Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useObserver */ "./node_modules/mobx-react-lite/es/useObserver.js");



function ObserverComponent(_a) {
  var children = _a.children,
      render = _a.render;
  var component = children || render;

  if (typeof component !== "function") {
    return null;
  }

  return Object(_useObserver__WEBPACK_IMPORTED_MODULE_1__[/* useObserver */ "a"])(component);
}

ObserverComponent.propTypes = {
  children: ObserverPropsCheck,
  render: ObserverPropsCheck
};
ObserverComponent.displayName = "Observer";


function ObserverPropsCheck(props, key, componentName, location, propFullName) {
  var extraKey = key === "children" ? "render" : "children";
  var hasProp = typeof props[key] === "function";
  var hasExtraProp = typeof props[extraKey] === "function";

  if (hasProp && hasExtraProp) {
    return new Error("MobX Observer: Do not use children and render in the same time in`" + componentName);
  }

  if (hasProp || hasExtraProp) {
    return null;
  }

  return new Error("Invalid prop `" + propFullName + "` of type `" + Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(props[key]) + "` supplied to" + " `" + componentName + "`, expected `function`.");
}

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/assertEnvironment.js":
/*!**************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/assertEnvironment.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



if (!react__WEBPACK_IMPORTED_MODULE_1__["useState"]) {
  throw new Error("mobx-react-lite requires React with Hooks support");
}

if (!mobx__WEBPACK_IMPORTED_MODULE_0__[/* spy */ "n"]) {
  throw new Error("mobx-react-lite requires mobx at least version 4 to be available");
}

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/index.js ***!
  \**************************************************/
/*! exports provided: isUsingStaticRendering, useStaticRendering, observer, useObserver, Observer, useForceUpdate, useAsObservableSource, useLocalStore, useQueuedForceUpdate, useQueuedForceUpdateBlock, isObserverBatched, observerBatching */
/*! exports used: Observer, isUsingStaticRendering, observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _assertEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assertEnvironment */ "./node_modules/mobx-react-lite/es/assertEnvironment.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js");
/* harmony import */ var _observerBatching__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observerBatching */ "./node_modules/mobx-react-lite/es/observerBatching.js");
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/mobx-react-lite/es/staticRendering.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _staticRendering__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observer */ "./node_modules/mobx-react-lite/es/observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _observer__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useObserver */ "./node_modules/mobx-react-lite/es/useObserver.js");
/* harmony import */ var _ObserverComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ObserverComponent */ "./node_modules/mobx-react-lite/es/ObserverComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _ObserverComponent__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");
/* harmony import */ var _useAsObservableSource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useAsObservableSource */ "./node_modules/mobx-react-lite/es/useAsObservableSource.js");
/* harmony import */ var _useLocalStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useLocalStore */ "./node_modules/mobx-react-lite/es/useLocalStore.js");
/* harmony import */ var _useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useQueuedForceUpdate */ "./node_modules/mobx-react-lite/es/useQueuedForceUpdate.js");



Object(_observerBatching__WEBPACK_IMPORTED_MODULE_2__[/* observerBatching */ "a"])(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__[/* unstable_batchedUpdates */ "a"]);










/***/ }),

/***/ "./node_modules/mobx-react-lite/es/observer.js":
/*!*****************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/observer.js ***!
  \*****************************************************/
/*! exports provided: observer */
/*! exports used: observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return observer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/mobx-react-lite/es/staticRendering.js");
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useObserver */ "./node_modules/mobx-react-lite/es/useObserver.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};



 // n.b. base case is not used for actual typings or exported in the typing files

function observer(baseComponent, options) {
  // The working of observer is explained step by step in this talk: https://www.youtube.com/watch?v=cPF4iBedoF0&feature=youtu.be&t=1307
  if (Object(_staticRendering__WEBPACK_IMPORTED_MODULE_1__[/* isUsingStaticRendering */ "a"])()) {
    return baseComponent;
  }

  var realOptions = __assign({
    forwardRef: false
  }, options);

  var baseComponentName = baseComponent.displayName || baseComponent.name;

  var wrappedComponent = function wrappedComponent(props, ref) {
    return Object(_useObserver__WEBPACK_IMPORTED_MODULE_2__[/* useObserver */ "a"])(function () {
      return baseComponent(props, ref);
    }, baseComponentName);
  };

  wrappedComponent.displayName = baseComponentName; // memo; we are not interested in deep updates
  // in props; we assume that if deep objects are changed,
  // this is in observables, which would have been tracked anyway

  var memoComponent;

  if (realOptions.forwardRef) {
    // we have to use forwardRef here because:
    // 1. it cannot go before memo, only after it
    // 2. forwardRef converts the function into an actual component, so we can't let the baseComponent do it
    //    since it wouldn't be a callable function anymore
    memoComponent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])( /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(wrappedComponent));
  } else {
    memoComponent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(wrappedComponent);
  }

  copyStaticProperties(baseComponent, memoComponent);
  memoComponent.displayName = baseComponentName;
  return memoComponent;
} // based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js

var hoistBlackList = {
  $$typeof: true,
  render: true,
  compare: true,
  type: true
};

function copyStaticProperties(base, target) {
  Object.keys(base).forEach(function (key) {
    if (!hoistBlackList[key]) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
    }
  });
}

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/observerBatching.js":
/*!*************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/observerBatching.js ***!
  \*************************************************************/
/*! exports provided: defaultNoopBatch, observerBatching, isObserverBatched */
/*! exports used: observerBatching */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultNoopBatch */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return observerBatching; });
/* unused harmony export isObserverBatched */
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");


var observerBatchingConfiguredSymbol = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* getSymbol */ "b"])("observerBatching");
function defaultNoopBatch(callback) {
  callback();
}
function observerBatching(reactionScheduler) {
  if (!reactionScheduler) {
    reactionScheduler = defaultNoopBatch;

    if (true) {
      console.warn("[MobX] Failed to get unstable_batched updates from react-dom / react-native");
    }
  }

  Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* configure */ "f"])({
    reactionScheduler: reactionScheduler
  });
  Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* getGlobal */ "a"])()[observerBatchingConfiguredSymbol] = true;
}
var isObserverBatched = function isObserverBatched() {
  return !!Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* getGlobal */ "a"])()[observerBatchingConfiguredSymbol];
};

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/printDebugValue.js":
/*!************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/printDebugValue.js ***!
  \************************************************************/
/*! exports provided: printDebugValue */
/*! exports used: printDebugValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return printDebugValue; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

function printDebugValue(v) {
  return Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* getDependencyTree */ "h"])(v);
}

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/reactionCleanupTracking.js":
/*!********************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/reactionCleanupTracking.js ***!
  \********************************************************************/
/*! exports provided: createTrackingData, CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS, CLEANUP_TIMER_LOOP_MILLIS, scheduleCleanupOfReactionIfLeaked, recordReactionAsCommitted, forceCleanupTimerToRunNowForTests, resetCleanupScheduleForTests */
/*! exports used: createTrackingData, recordReactionAsCommitted, scheduleCleanupOfReactionIfLeaked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createTrackingData; });
/* unused harmony export CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS */
/* unused harmony export CLEANUP_TIMER_LOOP_MILLIS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return scheduleCleanupOfReactionIfLeaked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return recordReactionAsCommitted; });
/* unused harmony export forceCleanupTimerToRunNowForTests */
/* unused harmony export resetCleanupScheduleForTests */
function createTrackingData(reaction) {
  var trackingData = {
    cleanAt: Date.now() + CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS,
    reaction: reaction
  };
  return trackingData;
}
/**
 * The minimum time before we'll clean up a Reaction created in a render
 * for a component that hasn't managed to run its effects. This needs to
 * be big enough to ensure that a component won't turn up and have its
 * effects run without being re-rendered.
 */

var CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS = 10000;
/**
 * The frequency with which we'll check for leaked reactions.
 */

var CLEANUP_TIMER_LOOP_MILLIS = 10000;
/**
 * Reactions created by components that have yet to be fully mounted.
 */

var uncommittedReactionRefs = new Set();
/**
 * Latest 'uncommitted reactions' cleanup timer handle.
 */

var reactionCleanupHandle;

function ensureCleanupTimerRunning() {
  if (reactionCleanupHandle === undefined) {
    reactionCleanupHandle = setTimeout(cleanUncommittedReactions, CLEANUP_TIMER_LOOP_MILLIS);
  }
}

function scheduleCleanupOfReactionIfLeaked(ref) {
  uncommittedReactionRefs.add(ref);
  ensureCleanupTimerRunning();
}
function recordReactionAsCommitted(reactionRef) {
  uncommittedReactionRefs.delete(reactionRef);
}
/**
 * Run by the cleanup timer to dispose any outstanding reactions
 */

function cleanUncommittedReactions() {
  reactionCleanupHandle = undefined; // Loop through all the candidate leaked reactions; those older
  // than CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS get tidied.

  var now = Date.now();
  uncommittedReactionRefs.forEach(function (ref) {
    var tracking = ref.current;

    if (tracking) {
      if (now >= tracking.cleanAt) {
        // It's time to tidy up this leaked reaction.
        tracking.reaction.dispose();
        ref.current = null;
        uncommittedReactionRefs.delete(ref);
      }
    }
  });

  if (uncommittedReactionRefs.size > 0) {
    // We've just finished a round of cleanups but there are still
    // some leak candidates outstanding.
    ensureCleanupTimerRunning();
  }
}
/* istanbul ignore next */

/**
 * Only to be used by test functions; do not export outside of mobx-react-lite
 */


function forceCleanupTimerToRunNowForTests() {
  // This allows us to control the execution of the cleanup timer
  // to force it to run at awkward times in unit tests.
  if (reactionCleanupHandle) {
    clearTimeout(reactionCleanupHandle);
    cleanUncommittedReactions();
  }
}
/* istanbul ignore next */

function resetCleanupScheduleForTests() {
  if (reactionCleanupHandle) {
    clearTimeout(reactionCleanupHandle);
    reactionCleanupHandle = undefined;
  }

  uncommittedReactionRefs.clear();
}

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/staticRendering.js":
/*!************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/staticRendering.js ***!
  \************************************************************/
/*! exports provided: useStaticRendering, isUsingStaticRendering */
/*! exports used: isUsingStaticRendering */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useStaticRendering */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isUsingStaticRendering; });
var globalIsUsingStaticRendering = false;
function useStaticRendering(enable) {
  globalIsUsingStaticRendering = enable;
}
function isUsingStaticRendering() {
  return globalIsUsingStaticRendering;
}

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useAsObservableSource.js":
/*!******************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useAsObservableSource.js ***!
  \******************************************************************/
/*! exports provided: useAsObservableSourceInternal, useAsObservableSource */
/*! exports used: useAsObservableSourceInternal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useAsObservableSourceInternal; });
/* unused harmony export useAsObservableSource */
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");
var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};




function useAsObservableSourceInternal(current, usedByLocalStore) {
  var culprit = usedByLocalStore ? "useLocalStore" : "useAsObservableSource";

  if ( true && usedByLocalStore) {
    var _a = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(current), 1),
        initialSource = _a[0];

    if (initialSource !== undefined && current === undefined || initialSource === undefined && current !== undefined) {
      throw new Error("make sure you never pass `undefined` to " + culprit);
    }
  }

  if (usedByLocalStore && current === undefined) {
    return undefined;
  }

  if ( true && !Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* isPlainObject */ "c"])(current)) {
    throw new Error(culprit + " expects a plain object as " + (usedByLocalStore ? "second" : "first") + " argument");
  }

  var _b = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(function () {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* observable */ "l"])(current, {}, {
      deep: false
    });
  }), 1),
      res = _b[0];

  if ( true && Object.keys(res).length !== Object.keys(current).length) {
    throw new Error("the shape of objects passed to " + culprit + " should be stable");
  }

  Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* runInAction */ "m"])(function () {
    Object.assign(res, current);
  });
  return res;
}
function useAsObservableSource(current) {
  return useAsObservableSourceInternal(current, false);
}

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useLocalStore.js":
/*!**********************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useLocalStore.js ***!
  \**********************************************************/
/*! exports provided: useLocalStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useLocalStore */
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useAsObservableSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAsObservableSource */ "./node_modules/mobx-react-lite/es/useAsObservableSource.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");




function useLocalStore(initializer, current) {
  var source = Object(_useAsObservableSource__WEBPACK_IMPORTED_MODULE_2__[/* useAsObservableSourceInternal */ "a"])(current, true);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(function () {
    var local = Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* observable */ "l"])(initializer(source));

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* isPlainObject */ "c"])(local)) {
      Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* runInAction */ "m"])(function () {
        Object.keys(local).forEach(function (key) {
          var value = local[key];

          if (typeof value === "function") {
            // @ts-ignore No idea why ts2536 is popping out here
            local[key] = wrapInTransaction(value, local);
          }
        });
      });
    }

    return local;
  })[0];
} // tslint:disable-next-line: ban-types

function wrapInTransaction(fn, context) {
  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* transaction */ "o"])(function () {
      return fn.apply(context, args);
    });
  };
}

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useObserver.js":
/*!********************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useObserver.js ***!
  \********************************************************/
/*! exports provided: useObserver */
/*! exports used: useObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useObserver; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _printDebugValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printDebugValue */ "./node_modules/mobx-react-lite/es/printDebugValue.js");
/* harmony import */ var _reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactionCleanupTracking */ "./node_modules/mobx-react-lite/es/reactionCleanupTracking.js");
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/mobx-react-lite/es/staticRendering.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");
/* harmony import */ var _useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useQueuedForceUpdate */ "./node_modules/mobx-react-lite/es/useQueuedForceUpdate.js");







var EMPTY_OBJECT = {};

function observerComponentNameFor(baseComponentName) {
  return "observer" + baseComponentName;
}

function useObserver(fn, baseComponentName, options) {
  if (baseComponentName === void 0) {
    baseComponentName = "observed";
  }

  if (options === void 0) {
    options = EMPTY_OBJECT;
  }

  if (Object(_staticRendering__WEBPACK_IMPORTED_MODULE_4__[/* isUsingStaticRendering */ "a"])()) {
    return fn();
  }

  var wantedForceUpdateHook = options.useForceUpdate || _utils__WEBPACK_IMPORTED_MODULE_5__[/* useForceUpdate */ "d"];
  var forceUpdate = wantedForceUpdateHook();
  var queuedForceUpdate = Object(_useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_6__[/* useQueuedForceUpdate */ "a"])(forceUpdate); // StrictMode/ConcurrentMode/Suspense may mean that our component is
  // rendered and abandoned multiple times, so we need to track leaked
  // Reactions.

  var reactionTrackingRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);

  if (!reactionTrackingRef.current) {
    // First render for this component (or first time since a previous
    // reaction from an abandoned render was disposed).
    var newReaction_1 = new mobx__WEBPACK_IMPORTED_MODULE_0__[/* Reaction */ "b"](observerComponentNameFor(baseComponentName), function () {
      // Observable has changed, meaning we want to re-render
      // BUT if we're a component that hasn't yet got to the useEffect()
      // stage, we might be a component that _started_ to render, but
      // got dropped, and we don't want to make state changes then.
      // (It triggers warnings in StrictMode, for a start.)
      if (trackingData_1.mounted) {
        // We have reached useEffect(), so we're mounted, and can trigger an update
        queuedForceUpdate();
      } else {
        // We haven't yet reached useEffect(), so we'll need to trigger a re-render
        // when (and if) useEffect() arrives.  The easiest way to do that is just to
        // drop our current reaction and allow useEffect() to recreate it.
        newReaction_1.dispose();
        reactionTrackingRef.current = null;
      }
    });
    var trackingData_1 = Object(_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__[/* createTrackingData */ "a"])(newReaction_1);
    reactionTrackingRef.current = trackingData_1;
    Object(_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__[/* scheduleCleanupOfReactionIfLeaked */ "c"])(reactionTrackingRef);
  }

  var reaction = reactionTrackingRef.current.reaction;
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useDebugValue(reaction, _printDebugValue__WEBPACK_IMPORTED_MODULE_2__[/* printDebugValue */ "a"]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    // Called on first mount only
    Object(_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__[/* recordReactionAsCommitted */ "b"])(reactionTrackingRef);

    if (reactionTrackingRef.current) {
      // Great. We've already got our reaction from our render;
      // all we need to do is to record that it's now mounted,
      // to allow future observable changes to trigger re-renders
      reactionTrackingRef.current.mounted = true;
    } else {
      // The reaction we set up in our render has been disposed.
      // This is either due to bad timings of renderings, e.g. our
      // component was paused for a _very_ long time, and our
      // reaction got cleaned up, or we got a observable change
      // between render and useEffect
      // Re-create the reaction
      reactionTrackingRef.current = {
        reaction: new mobx__WEBPACK_IMPORTED_MODULE_0__[/* Reaction */ "b"](observerComponentNameFor(baseComponentName), function () {
          // We've definitely already been mounted at this point
          queuedForceUpdate();
        }),
        cleanAt: Infinity
      };
      queuedForceUpdate();
    }

    return function () {
      reactionTrackingRef.current.reaction.dispose();
      reactionTrackingRef.current = null;
    };
  }, []); // delay all force-update calls after rendering of this component

  return Object(_useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_6__[/* useQueuedForceUpdateBlock */ "b"])(function () {
    // render the original component, but have the
    // reaction track the observables, so that rendering
    // can be invalidated (see above) once a dependency changes
    var rendering;
    var exception;
    reaction.track(function () {
      try {
        rendering = fn();
      } catch (e) {
        exception = e;
      }
    });

    if (exception) {
      throw exception; // re-throw any exceptions caught during rendering
    }

    return rendering;
  });
}

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useQueuedForceUpdate.js":
/*!*****************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useQueuedForceUpdate.js ***!
  \*****************************************************************/
/*! exports provided: useQueuedForceUpdate, useQueuedForceUpdateBlock */
/*! exports used: useQueuedForceUpdate, useQueuedForceUpdateBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useQueuedForceUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useQueuedForceUpdateBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var insideRender = false;
var forceUpdateQueue = [];
function useQueuedForceUpdate(forceUpdate) {
  return function () {
    if (insideRender) {
      forceUpdateQueue.push(forceUpdate);
    } else {
      forceUpdate();
    }
  };
}
function useQueuedForceUpdateBlock(callback) {
  // start intercepting force-update calls
  insideRender = true;
  forceUpdateQueue = [];

  try {
    var result = callback(); // stop intercepting force-update

    insideRender = false; // store queue or nothing if it was empty to execute useLayoutEffect only when necessary

    var queue_1 = forceUpdateQueue.length > 0 ? forceUpdateQueue : undefined; // run force-update queue in useLayoutEffect

    react__WEBPACK_IMPORTED_MODULE_0___default.a.useLayoutEffect(function () {
      if (queue_1) {
        queue_1.forEach(function (x) {
          return x();
        });
      }
    }, [queue_1]);
    return result;
  } finally {
    insideRender = false;
  }
}

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils.js ***!
  \**************************************************/
/*! exports provided: useUnmount, useForceUpdate, isPlainObject, getSymbol, getGlobal */
/*! exports used: getGlobal, getSymbol, isPlainObject, useForceUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window, global) {/* unused harmony export useUnmount */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useForceUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getGlobal; });
/* harmony import */ var _Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __read = undefined && undefined.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};


var EMPTY_ARRAY = [];
function useUnmount(fn) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return fn;
  }, EMPTY_ARRAY);
}
function useForceUpdate() {
  var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0), 2),
      setTick = _a[1];

  var update = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setTick(function (tick) {
      return tick + 1;
    });
  }, []);
  return update;
}
function isPlainObject(value) {
  if (!value || Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) !== "object") {
    return false;
  }

  var proto = Object.getPrototypeOf(value);
  return !proto || proto === Object.prototype;
}
function getSymbol(name) {
  if (typeof Symbol === "function") {
    return Symbol.for(name);
  }

  return "__$mobx-react " + name + "__";
}
var mockGlobal = {};
function getGlobal() {
  if (typeof window !== "undefined") {
    return window;
  }

  if (typeof global !== "undefined") {
    return global;
  }

  if (typeof self !== "undefined") {
    return self;
  }

  return mockGlobal;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js ***!
  \**********************************************************************/
/*! exports provided: unstable_batchedUpdates */
/*! exports used: unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/@tarojs/react/dist/react.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["b"]; });



/***/ }),

/***/ "./node_modules/mobx-react/dist/mobxreact.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/mobx-react/dist/mobxreact.esm.js ***!
  \*******************************************************/
/*! exports provided: Observer, isUsingStaticRendering, observerBatching, useAsObservableSource, useLocalStore, useObserver, useStaticRendering, MobXProviderContext, PropTypes, Provider, disposeOnUnmount, inject, observer */
/*! exports used: Provider, inject, observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MobXProviderContext */
/* unused harmony export PropTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Provider; });
/* unused harmony export disposeOnUnmount */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return inject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return observer; });
/* harmony import */ var _Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");





var symbolId = 0;

function createSymbol(name) {
  if (typeof Symbol === "function") {
    return Symbol(name);
  }

  var symbol = "__$mobx-react " + name + " (" + symbolId + ")";
  symbolId++;
  return symbol;
}

var createdSymbols = {};

function newSymbol(name) {
  if (!createdSymbols[name]) {
    createdSymbols[name] = createSymbol(name);
  }

  return createdSymbols[name];
}

function shallowEqual(objA, objB) {
  //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (is(objA, objB)) return true;

  if (Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(objA) !== "object" || objA === null || Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(objB) !== "object" || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

function is(x, y) {
  // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
} // based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js


var hoistBlackList = {
  $$typeof: 1,
  render: 1,
  compare: 1,
  type: 1,
  childContextTypes: 1,
  contextType: 1,
  contextTypes: 1,
  defaultProps: 1,
  getDefaultProps: 1,
  getDerivedStateFromError: 1,
  getDerivedStateFromProps: 1,
  mixins: 1,
  propTypes: 1
};

function copyStaticProperties(base, target) {
  var protoProps = Object.getOwnPropertyNames(Object.getPrototypeOf(base));
  Object.getOwnPropertyNames(base).forEach(function (key) {
    if (!hoistBlackList[key] && protoProps.indexOf(key) === -1) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
    }
  });
}
/**
 * Helper to set `prop` to `this` as non-enumerable (hidden prop)
 * @param target
 * @param prop
 * @param value
 */


function setHiddenProp(target, prop, value) {
  if (!Object.hasOwnProperty.call(target, prop)) {
    Object.defineProperty(target, prop, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: value
    });
  } else {
    target[prop] = value;
  }
}
/**
 * Utilities for patching componentWillUnmount, to make sure @disposeOnUnmount works correctly icm with user defined hooks
 * and the handler provided by mobx-react
 */


var mobxMixins = /*#__PURE__*/newSymbol("patchMixins");
var mobxPatchedDefinition = /*#__PURE__*/newSymbol("patchedDefinition");

function getMixins(target, methodName) {
  var mixins = target[mobxMixins] = target[mobxMixins] || {};
  var methodMixins = mixins[methodName] = mixins[methodName] || {};
  methodMixins.locks = methodMixins.locks || 0;
  methodMixins.methods = methodMixins.methods || [];
  return methodMixins;
}

function wrapper(realMethod, mixins) {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  } // locks are used to ensure that mixins are invoked only once per invocation, even on recursive calls


  mixins.locks++;

  try {
    var retVal;

    if (realMethod !== undefined && realMethod !== null) {
      retVal = realMethod.apply(this, args);
    }

    return retVal;
  } finally {
    mixins.locks--;

    if (mixins.locks === 0) {
      mixins.methods.forEach(function (mx) {
        mx.apply(_this, args);
      });
    }
  }
}

function wrapFunction(realMethod, mixins) {
  var fn = function fn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    wrapper.call.apply(wrapper, [this, realMethod, mixins].concat(args));
  };

  return fn;
}

function patch(target, methodName, mixinMethod) {
  var mixins = getMixins(target, methodName);

  if (mixins.methods.indexOf(mixinMethod) < 0) {
    mixins.methods.push(mixinMethod);
  }

  var oldDefinition = Object.getOwnPropertyDescriptor(target, methodName);

  if (oldDefinition && oldDefinition[mobxPatchedDefinition]) {
    // already patched definition, do not repatch
    return;
  }

  var originalMethod = target[methodName];
  var newDefinition = createDefinition(target, methodName, oldDefinition ? oldDefinition.enumerable : undefined, mixins, originalMethod);
  Object.defineProperty(target, methodName, newDefinition);
}

function createDefinition(target, methodName, enumerable, mixins, originalMethod) {
  var _ref;

  var wrappedFunc = wrapFunction(originalMethod, mixins);
  return _ref = {}, _ref[mobxPatchedDefinition] = true, _ref.get = function get() {
    return wrappedFunc;
  }, _ref.set = function set(value) {
    if (this === target) {
      wrappedFunc = wrapFunction(value, mixins);
    } else {
      // when it is an instance of the prototype/a child prototype patch that particular case again separately
      // since we need to store separate values depending on wether it is the actual instance, the prototype, etc
      // e.g. the method for super might not be the same as the method for the prototype which might be not the same
      // as the method for the instance
      var newDefinition = createDefinition(this, methodName, enumerable, mixins, value);
      Object.defineProperty(this, methodName, newDefinition);
    }
  }, _ref.configurable = true, _ref.enumerable = enumerable, _ref;
}

var mobxAdminProperty = mobx__WEBPACK_IMPORTED_MODULE_1__[/* $mobx */ "a"] || "$mobx";
var mobxObserverProperty = /*#__PURE__*/newSymbol("isMobXReactObserver");
var mobxIsUnmounted = /*#__PURE__*/newSymbol("isUnmounted");
var skipRenderKey = /*#__PURE__*/newSymbol("skipRender");
var isForcingUpdateKey = /*#__PURE__*/newSymbol("isForcingUpdate");

function makeClassComponentObserver(componentClass) {
  var target = componentClass.prototype;

  if (componentClass[mobxObserverProperty]) {
    var displayName = getDisplayName(target);
    console.warn("The provided component class (" + displayName + ") \n                has already been declared as an observer component.");
  } else {
    componentClass[mobxObserverProperty] = true;
  }

  if (target.componentWillReact) throw new Error("The componentWillReact life-cycle event is no longer supported");

  if (componentClass["__proto__"] !== react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]) {
    if (!target.shouldComponentUpdate) target.shouldComponentUpdate = observerSCU;else if (target.shouldComponentUpdate !== observerSCU) // n.b. unequal check, instead of existence check, as @observer might be on superclass as well
      throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.");
  } // this.props and this.state are made observable, just to make sure @computed fields that
  // are defined inside the component, and which rely on state or props, re-compute if state or props change
  // (otherwise the computed wouldn't update and become stale on props change, since props are not observable)
  // However, this solution is not without it's own problems: https://github.com/mobxjs/mobx-react/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Aobservable-props-or-not+


  makeObservableProp(target, "props");
  makeObservableProp(target, "state");
  var baseRender = target.render;

  target.render = function () {
    return makeComponentReactive.call(this, baseRender);
  };

  patch(target, "componentWillUnmount", function () {
    var _this$render$mobxAdmi;

    if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__[/* isUsingStaticRendering */ "b"])() === true) return;
    (_this$render$mobxAdmi = this.render[mobxAdminProperty]) === null || _this$render$mobxAdmi === void 0 ? void 0 : _this$render$mobxAdmi.dispose();
    this[mobxIsUnmounted] = true;

    if (!this.render[mobxAdminProperty]) {
      // Render may have been hot-swapped and/or overriden by a subclass.
      var _displayName = getDisplayName(this);

      console.warn("The reactive render of an observer class component (" + _displayName + ") \n                was overriden after MobX attached. This may result in a memory leak if the \n                overriden reactive render was not properly disposed.");
    }
  });
  return componentClass;
} // Generates a friendly name for debugging


function getDisplayName(comp) {
  return comp.displayName || comp.name || comp.constructor && (comp.constructor.displayName || comp.constructor.name) || "<component>";
}

function makeComponentReactive(render) {
  var _this = this;

  if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__[/* isUsingStaticRendering */ "b"])() === true) return render.call(this);
  /**
   * If props are shallowly modified, react will render anyway,
   * so atom.reportChanged() should not result in yet another re-render
   */

  setHiddenProp(this, skipRenderKey, false);
  /**
   * forceUpdate will re-assign this.props. We don't want that to cause a loop,
   * so detect these changes
   */

  setHiddenProp(this, isForcingUpdateKey, false);
  var initialName = getDisplayName(this);
  var baseRender = render.bind(this);
  var isRenderingPending = false;
  var reaction = new mobx__WEBPACK_IMPORTED_MODULE_1__[/* Reaction */ "b"](initialName + ".render()", function () {
    if (!isRenderingPending) {
      // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.js)
      // This unidiomatic React usage but React will correctly warn about this so we continue as usual
      // See #85 / Pull #44
      isRenderingPending = true;

      if (_this[mobxIsUnmounted] !== true) {
        var hasError = true;

        try {
          setHiddenProp(_this, isForcingUpdateKey, true);
          if (!_this[skipRenderKey]) react__WEBPACK_IMPORTED_MODULE_2__["Component"].prototype.forceUpdate.call(_this);
          hasError = false;
        } finally {
          setHiddenProp(_this, isForcingUpdateKey, false);
          if (hasError) reaction.dispose();
        }
      }
    }
  });
  reaction["reactComponent"] = this;
  reactiveRender[mobxAdminProperty] = reaction;
  this.render = reactiveRender;

  function reactiveRender() {
    isRenderingPending = false;
    var exception = undefined;
    var rendering = undefined;
    reaction.track(function () {
      try {
        rendering = Object(mobx__WEBPACK_IMPORTED_MODULE_1__[/* _allowStateChanges */ "c"])(false, baseRender);
      } catch (e) {
        exception = e;
      }
    });

    if (exception) {
      throw exception;
    }

    return rendering;
  }

  return reactiveRender.call(this);
}

function observerSCU(nextProps, nextState) {
  if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__[/* isUsingStaticRendering */ "b"])()) {
    console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
  } // update on any state changes (as is the default)


  if (this.state !== nextState) {
    return true;
  } // update if props are shallowly not equal, inspired by PureRenderMixin
  // we could return just 'false' here, and avoid the `skipRender` checks etc
  // however, it is nicer if lifecycle events are triggered like usually,
  // so we return true here if props are shallowly modified.


  return !shallowEqual(this.props, nextProps);
}

function makeObservableProp(target, propName) {
  var valueHolderKey = newSymbol("reactProp_" + propName + "_valueHolder");
  var atomHolderKey = newSymbol("reactProp_" + propName + "_atomHolder");

  function getAtom() {
    if (!this[atomHolderKey]) {
      setHiddenProp(this, atomHolderKey, Object(mobx__WEBPACK_IMPORTED_MODULE_1__[/* createAtom */ "g"])("reactive " + propName));
    }

    return this[atomHolderKey];
  }

  Object.defineProperty(target, propName, {
    configurable: true,
    enumerable: true,
    get: function get() {
      var prevReadState = false;

      if (mobx__WEBPACK_IMPORTED_MODULE_1__[/* _allowStateReadsStart */ "e"] && mobx__WEBPACK_IMPORTED_MODULE_1__[/* _allowStateReadsEnd */ "d"]) {
        prevReadState = Object(mobx__WEBPACK_IMPORTED_MODULE_1__[/* _allowStateReadsStart */ "e"])(true);
      }

      getAtom.call(this).reportObserved();

      if (mobx__WEBPACK_IMPORTED_MODULE_1__[/* _allowStateReadsStart */ "e"] && mobx__WEBPACK_IMPORTED_MODULE_1__[/* _allowStateReadsEnd */ "d"]) {
        Object(mobx__WEBPACK_IMPORTED_MODULE_1__[/* _allowStateReadsEnd */ "d"])(prevReadState);
      }

      return this[valueHolderKey];
    },
    set: function set(v) {
      if (!this[isForcingUpdateKey] && !shallowEqual(this[valueHolderKey], v)) {
        setHiddenProp(this, valueHolderKey, v);
        setHiddenProp(this, skipRenderKey, true);
        getAtom.call(this).reportChanged();
        setHiddenProp(this, skipRenderKey, false);
      } else {
        setHiddenProp(this, valueHolderKey, v);
      }
    }
  });
}

var hasSymbol = typeof Symbol === "function" && Symbol.for; // Using react-is had some issues (and operates on elements, not on types), see #608 / #609

var ReactForwardRefSymbol = hasSymbol ? /*#__PURE__*/Symbol.for("react.forward_ref") : typeof react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"] === "function" && /*#__PURE__*/ /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function (props) {
  return null;
})["$$typeof"];
var ReactMemoSymbol = hasSymbol ? /*#__PURE__*/Symbol.for("react.memo") : typeof react__WEBPACK_IMPORTED_MODULE_2__["memo"] === "function" && /*#__PURE__*/ /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(function (props) {
  return null;
})["$$typeof"];
/**
 * Observer function / decorator
 */

function observer(component) {
  if (component["isMobxInjector"] === true) {
    console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'");
  }

  if (ReactMemoSymbol && component["$$typeof"] === ReactMemoSymbol) {
    throw new Error("Mobx observer: You are trying to use 'observer' on a function component wrapped in either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");
  } // Unwrap forward refs into `<Observer>` component
  // we need to unwrap the render, because it is the inner render that needs to be tracked,
  // not the ForwardRef HoC


  if (ReactForwardRefSymbol && component["$$typeof"] === ReactForwardRefSymbol) {
    var baseRender = component["render"];
    if (typeof baseRender !== "function") throw new Error("render property of ForwardRef was not a function");
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function ObserverForwardRef() {
      var args = arguments;
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__[/* Observer */ "a"], null, function () {
        return baseRender.apply(undefined, args);
      });
    });
  } // Function component


  if (typeof component === "function" && (!component.prototype || !component.prototype.render) && !component["isReactClass"] && !Object.prototype.isPrototypeOf.call(react__WEBPACK_IMPORTED_MODULE_2__["Component"], component)) {
    return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_3__[/* observer */ "c"])(component);
  }

  return makeClassComponentObserver(component);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var MobXProviderContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});

function Provider(props) {
  var children = props.children,
      stores = _objectWithoutPropertiesLoose(props, ["children"]);

  var parentValue = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(MobXProviderContext);
  var mutableProviderRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(_extends({}, parentValue, stores));
  var value = mutableProviderRef.current;

  if (true) {
    var newValue = _extends({}, value, stores); // spread in previous state for the context based stores


    if (!shallowEqual(value, newValue)) {
      throw new Error("MobX Provider: The set of provided stores has changed. See: https://github.com/mobxjs/mobx-react#the-set-of-provided-stores-has-changed-error.");
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MobXProviderContext.Provider, {
    value: value
  }, children);
}

Provider.displayName = "MobXProvider";
/**
 * Store Injection
 */

function createStoreInjector(grabStoresFn, component, injectNames, makeReactive) {
  // Support forward refs
  var Injector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
    var newProps = _extends({}, props);

    var context = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(MobXProviderContext);
    Object.assign(newProps, grabStoresFn(context || {}, newProps) || {});

    if (ref) {
      newProps.ref = ref;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component, newProps);
  });
  if (makeReactive) Injector = observer(Injector);
  Injector["isMobxInjector"] = true; // assigned late to suppress observer warning
  // Static fields from component should be visible on the generated Injector

  copyStaticProperties(component, Injector);
  Injector["wrappedComponent"] = component;
  Injector.displayName = getInjectName(component, injectNames);
  return Injector;
}

function getInjectName(component, injectNames) {
  var displayName;
  var componentName = component.displayName || component.name || component.constructor && component.constructor.name || "Component";
  if (injectNames) displayName = "inject-with-" + injectNames + "(" + componentName + ")";else displayName = "inject(" + componentName + ")";
  return displayName;
}

function grabStoresByName(storeNames) {
  return function (baseStores, nextProps) {
    storeNames.forEach(function (storeName) {
      if (storeName in nextProps // prefer props over stores
      ) return;
      if (!(storeName in baseStores)) throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
      nextProps[storeName] = baseStores[storeName];
    });
    return nextProps;
  };
}
/**
 * higher order component that injects stores to a child.
 * takes either a varargs list of strings, which are stores read from the context,
 * or a function that manually maps the available stores from the context to props:
 * storesToProps(mobxStores, props, context) => newProps
 */


function inject() {
  for (var _len = arguments.length, storeNames = new Array(_len), _key = 0; _key < _len; _key++) {
    storeNames[_key] = arguments[_key];
  }

  if (typeof arguments[0] === "function") {
    var grabStoresFn = arguments[0];
    return function (componentClass) {
      return createStoreInjector(grabStoresFn, componentClass, grabStoresFn.name, true);
    };
  } else {
    return function (componentClass) {
      return createStoreInjector(grabStoresByName(storeNames), componentClass, storeNames.join("-"), false);
    };
  }
}

var protoStoreKey = /*#__PURE__*/newSymbol("disposeOnUnmountProto");
var instStoreKey = /*#__PURE__*/newSymbol("disposeOnUnmountInst");

function runDisposersOnWillUnmount() {
  var _this = this;

  [].concat(this[protoStoreKey] || [], this[instStoreKey] || []).forEach(function (propKeyOrFunction) {
    var prop = typeof propKeyOrFunction === "string" ? _this[propKeyOrFunction] : propKeyOrFunction;

    if (prop !== undefined && prop !== null) {
      if (Array.isArray(prop)) prop.map(function (f) {
        return f();
      });else prop();
    }
  });
}

function disposeOnUnmount(target, propertyKeyOrFunction) {
  if (Array.isArray(propertyKeyOrFunction)) {
    return propertyKeyOrFunction.map(function (fn) {
      return disposeOnUnmount(target, fn);
    });
  }

  var c = Object.getPrototypeOf(target).constructor;
  var c2 = Object.getPrototypeOf(target.constructor); // Special case for react-hot-loader

  var c3 = Object.getPrototypeOf(Object.getPrototypeOf(target));

  if (!(c === react__WEBPACK_IMPORTED_MODULE_2___default.a.Component || c === react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent || c2 === react__WEBPACK_IMPORTED_MODULE_2___default.a.Component || c2 === react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent || c3 === react__WEBPACK_IMPORTED_MODULE_2___default.a.Component || c3 === react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent)) {
    throw new Error("[mobx-react] disposeOnUnmount only supports direct subclasses of React.Component or React.PureComponent.");
  }

  if (typeof propertyKeyOrFunction !== "string" && typeof propertyKeyOrFunction !== "function" && !Array.isArray(propertyKeyOrFunction)) {
    throw new Error("[mobx-react] disposeOnUnmount only works if the parameter is either a property key or a function.");
  } // decorator's target is the prototype, so it doesn't have any instance properties like props


  var isDecorator = typeof propertyKeyOrFunction === "string"; // add property key / function we want run (disposed) to the store

  var componentWasAlreadyModified = !!target[protoStoreKey] || !!target[instStoreKey];
  var store = isDecorator ? // decorators are added to the prototype store
  target[protoStoreKey] || (target[protoStoreKey] = []) : // functions are added to the instance store
  target[instStoreKey] || (target[instStoreKey] = []);
  store.push(propertyKeyOrFunction); // tweak the component class componentWillUnmount if not done already

  if (!componentWasAlreadyModified) {
    patch(target, "componentWillUnmount", runDisposersOnWillUnmount);
  } // return the disposer as is if invoked as a non decorator


  if (typeof propertyKeyOrFunction !== "string") {
    return propertyKeyOrFunction;
  }
}

function createChainableTypeChecker(validator) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      rest[_key - 6] = arguments[_key];
    }

    return Object(mobx__WEBPACK_IMPORTED_MODULE_1__[/* untracked */ "p"])(function () {
      componentName = componentName || "<<anonymous>>";
      propFullName = propFullName || propName;

      if (props[propName] == null) {
        if (isRequired) {
          var actual = props[propName] === null ? "null" : "undefined";
          return new Error("The " + location + " `" + propFullName + "` is marked as required " + "in `" + componentName + "`, but its value is `" + actual + "`.");
        }

        return null;
      } else {
        // @ts-ignore rest arg is necessary for some React internals - fails tests otherwise
        return validator.apply(void 0, [props, propName, componentName, location, propFullName].concat(rest));
      }
    });
  }

  var chainedCheckType = checkType.bind(null, false); // Add isRequired to satisfy Requirable

  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
} // Copied from React.PropTypes


function isSymbol(propType, propValue) {
  // Native Symbol.
  if (propType === "symbol") {
    return true;
  } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


  if (propValue["@@toStringTag"] === "Symbol") {
    return true;
  } // Fallback for non-spec compliant Symbols which are polyfilled.


  if (typeof Symbol === "function" && propValue instanceof Symbol) {
    return true;
  }

  return false;
} // Copied from React.PropTypes


function getPropType(propValue) {
  var propType = Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(propValue);

  if (Array.isArray(propValue)) {
    return "array";
  }

  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return "object";
  }

  if (isSymbol(propType, propValue)) {
    return "symbol";
  }

  return propType;
} // This handles more types than `getPropType`. Only used for error messages.
// Copied from React.PropTypes


function getPreciseType(propValue) {
  var propType = getPropType(propValue);

  if (propType === "object") {
    if (propValue instanceof Date) {
      return "date";
    } else if (propValue instanceof RegExp) {
      return "regexp";
    }
  }

  return propType;
}

function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_1__[/* untracked */ "p"])(function () {
      if (allowNativeType) {
        if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
      }

      var mobxChecker;

      switch (mobxType) {
        case "Array":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_1__[/* isObservableArray */ "i"];
          break;

        case "Object":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_1__[/* isObservableObject */ "k"];
          break;

        case "Map":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_1__[/* isObservableMap */ "j"];
          break;

        default:
          throw new Error("Unexpected mobxType: " + mobxType);
      }

      var propValue = props[propName];

      if (!mobxChecker(propValue)) {
        var preciseType = getPreciseType(propValue);
        var nativeTypeExpectationMessage = allowNativeType ? " or javascript `" + mobxType.toLowerCase() + "`" : "";
        return new Error("Invalid prop `" + propFullName + "` of type `" + preciseType + "` supplied to" + " `" + componentName + "`, expected `mobx.Observable" + mobxType + "`" + nativeTypeExpectationMessage + ".");
      }

      return null;
    });
  });
}

function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
      rest[_key2 - 5] = arguments[_key2];
    }

    return Object(mobx__WEBPACK_IMPORTED_MODULE_1__[/* untracked */ "p"])(function () {
      if (typeof typeChecker !== "function") {
        return new Error("Property `" + propFullName + "` of component `" + componentName + "` has " + "invalid PropType notation.");
      } else {
        var error = createObservableTypeCheckerCreator(allowNativeType, "Array")(props, propName, componentName, location, propFullName);
        if (error instanceof Error) return error;
        var propValue = props[propName];

        for (var i = 0; i < propValue.length; i++) {
          error = typeChecker.apply(void 0, [propValue, i, componentName, location, propFullName + "[" + i + "]"].concat(rest));
          if (error instanceof Error) return error;
        }

        return null;
      }
    });
  });
}

var observableArray = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Array");
var observableArrayOf = /*#__PURE__*/createObservableArrayOfTypeChecker.bind(null, false);
var observableMap = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Map");
var observableObject = /*#__PURE__*/createObservableTypeCheckerCreator(false, "Object");
var arrayOrObservableArray = /*#__PURE__*/createObservableTypeCheckerCreator(true, "Array");
var arrayOrObservableArrayOf = /*#__PURE__*/createObservableArrayOfTypeChecker.bind(null, true);
var objectOrObservableObject = /*#__PURE__*/createObservableTypeCheckerCreator(true, "Object");
var PropTypes = {
  observableArray: observableArray,
  observableArrayOf: observableArrayOf,
  observableMap: observableMap,
  observableObject: observableObject,
  arrayOrObservableArray: arrayOrObservableArray,
  arrayOrObservableArrayOf: arrayOrObservableArrayOf,
  objectOrObservableObject: objectOrObservableObject
};
if (!react__WEBPACK_IMPORTED_MODULE_2__["Component"]) throw new Error("mobx-react requires React to be available");
if (!mobx__WEBPACK_IMPORTED_MODULE_1__[/* observable */ "l"]) throw new Error("mobx-react requires mobx to be available");


/***/ }),

/***/ "./node_modules/mobx/lib/mobx.module.js":
/*!**********************************************!*\
  !*** ./node_modules/mobx/lib/mobx.module.js ***!
  \**********************************************/
/*! exports provided: $mobx, FlowCancellationError, IDerivationState, ObservableMap, ObservableSet, Reaction, _allowStateChanges, _allowStateChangesInsideComputed, _allowStateReadsEnd, _allowStateReadsStart, _endAction, _getAdministration, _getGlobalState, _interceptReads, _isComputingDerivation, _resetGlobalState, _startAction, action, autorun, comparer, computed, configure, createAtom, decorate, entries, extendObservable, extendShallowObservable, flow, get, getAtom, getDebugName, getDependencyTree, getObserverTree, has, intercept, isAction, isArrayLike, isBoxedObservable, isComputed, isComputedProp, isFlowCancellationError, isObservable, isObservableArray, isObservableMap, isObservableObject, isObservableProp, isObservableSet, keys, observable, observe, onBecomeObserved, onBecomeUnobserved, onReactionError, reaction, remove, runInAction, set, spy, toJS, trace, transaction, untracked, values, when */
/*! exports used: $mobx, Reaction, _allowStateChanges, _allowStateReadsEnd, _allowStateReadsStart, configure, createAtom, getDependencyTree, isObservableArray, isObservableMap, isObservableObject, observable, runInAction, spy, transaction, untracked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window, global, process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return $mobx; });
/* unused harmony export FlowCancellationError */
/* unused harmony export IDerivationState */
/* unused harmony export ObservableMap */
/* unused harmony export ObservableSet */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return allowStateChanges; });
/* unused harmony export _allowStateChangesInsideComputed */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return allowStateReadsEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return allowStateReadsStart; });
/* unused harmony export _endAction */
/* unused harmony export _getAdministration */
/* unused harmony export _getGlobalState */
/* unused harmony export _interceptReads */
/* unused harmony export _isComputingDerivation */
/* unused harmony export _resetGlobalState */
/* unused harmony export _startAction */
/* unused harmony export action */
/* unused harmony export autorun */
/* unused harmony export comparer */
/* unused harmony export computed */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return configure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return createAtom; });
/* unused harmony export decorate */
/* unused harmony export entries */
/* unused harmony export extendObservable */
/* unused harmony export extendShallowObservable */
/* unused harmony export flow */
/* unused harmony export get */
/* unused harmony export getAtom */
/* unused harmony export getDebugName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getDependencyTree; });
/* unused harmony export getObserverTree */
/* unused harmony export has */
/* unused harmony export intercept */
/* unused harmony export isAction */
/* unused harmony export isArrayLike */
/* unused harmony export isBoxedObservable */
/* unused harmony export isComputed */
/* unused harmony export isComputedProp */
/* unused harmony export isFlowCancellationError */
/* unused harmony export isObservable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isObservableArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isObservableObject; });
/* unused harmony export isObservableProp */
/* unused harmony export isObservableSet */
/* unused harmony export keys */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return observable; });
/* unused harmony export observe */
/* unused harmony export onBecomeObserved */
/* unused harmony export onBecomeUnobserved */
/* unused harmony export onReactionError */
/* unused harmony export reaction */
/* unused harmony export remove */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return runInAction; });
/* unused harmony export set */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return spy; });
/* unused harmony export toJS */
/* unused harmony export trace */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return untracked; });
/* unused harmony export values */
/* unused harmony export when */
/* harmony import */ var _Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");


/** MobX - (c) Michel Weststrate 2015 - 2020 - MIT Licensed */
var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is an production build.";
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var mockGlobal = {};

function getGlobal() {
  if (typeof window !== "undefined") {
    return window;
  }

  if (typeof global !== "undefined") {
    return global;
  }

  if (typeof self !== "undefined") {
    return self;
  }

  return mockGlobal;
}

function getNextId() {
  return ++globalState.mobxGuid;
}

function fail(message) {
  invariant(false, message);
  throw "X"; // unreachable
}

function invariant(check, message) {
  if (!check) throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */


var deprecatedMessages = [];

function deprecated(msg, thing) {
  if (false) {}

  if (thing) {
    return deprecated("'" + msg + "', use '" + thing + "' instead.");
  }

  if (deprecatedMessages.indexOf(msg) !== -1) return false;
  deprecatedMessages.push(msg);
  console.error("[mobx] Deprecated: " + msg);
  return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */


function once(func) {
  var invoked = false;
  return function () {
    if (invoked) return;
    invoked = true;
    return func.apply(this, arguments);
  };
}

var noop = function noop() {};

function unique(list) {
  var res = [];
  list.forEach(function (item) {
    if (res.indexOf(item) === -1) res.push(item);
  });
  return res;
}

function isObject(value) {
  return value !== null && Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) === "object";
}

function isPlainObject(value) {
  if (value === null || Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) !== "object") return false;
  var proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

function convertToMap(dataStructure) {
  if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
    return dataStructure;
  } else if (Array.isArray(dataStructure)) {
    return new Map(dataStructure);
  } else if (isPlainObject(dataStructure)) {
    var map = new Map();

    for (var key in dataStructure) {
      map.set(key, dataStructure[key]);
    }

    return map;
  } else {
    return fail("Cannot convert to map from '" + dataStructure + "'");
  }
}

function makeNonEnumerable(object, propNames) {
  for (var i = 0; i < propNames.length; i++) {
    addHiddenProp(object, propNames[i], object[propNames[i]]);
  }
}

function addHiddenProp(object, propName, value) {
  Object.defineProperty(object, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value: value
  });
}

function addHiddenFinalProp(object, propName, value) {
  Object.defineProperty(object, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: value
  });
}

function isPropertyConfigurable(object, prop) {
  var descriptor = Object.getOwnPropertyDescriptor(object, prop);
  return !descriptor || descriptor.configurable !== false && descriptor.writable !== false;
}

function assertPropertyConfigurable(object, prop) {
  if ( true && !isPropertyConfigurable(object, prop)) fail("Cannot make property '" + prop + "' observable, it is not configurable and writable in the target object");
}

function createInstanceofPredicate(name, clazz) {
  var propName = "isMobX" + name;
  clazz.prototype[propName] = true;
  return function (x) {
    return isObject(x) && x[propName] === true;
  };
}

function areBothNaN(a, b) {
  return typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b);
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */


function isArrayLike(x) {
  return Array.isArray(x) || isObservableArray(x);
}

function isES6Map(thing) {
  if (getGlobal().Map !== undefined && thing instanceof getGlobal().Map) return true;
  return false;
}

function isES6Set(thing) {
  return thing instanceof Set;
} // use Array.from in Mobx 5


function iteratorToArray(it) {
  var res = [];

  while (true) {
    var r = it.next();
    if (r.done) break;
    res.push(r.value);
  }

  return res;
}

function primitiveSymbol() {
  // es-disable-next-line
  return typeof Symbol === "function" && Symbol.toPrimitive || "@@toPrimitive";
}

function toPrimitive(value) {
  return value === null ? null : Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) === "object" ? "" + value : value;
} // Use "for of" in V5


function forOf(iter, callback) {
  var next = iter.next();

  while (!next.done) {
    callback(next.value);
    next = iter.next();
  }
}

function iteratorSymbol() {
  return typeof Symbol === "function" && Symbol.iterator || "@@iterator";
}

function declareIterator(prototType, iteratorFactory) {
  addHiddenFinalProp(prototType, iteratorSymbol(), iteratorFactory);
}

function makeIterable(iterator) {
  iterator[iteratorSymbol()] = getSelf;
  return iterator;
}

function toStringTagSymbol() {
  return typeof Symbol === "function" && Symbol.toStringTag || "@@toStringTag";
}

function getSelf() {
  return this;
}
/**
 * Anything that can be used to _store_ state is an Atom in mobx. Atoms have two important jobs
 *
 * 1) detect when they are being _used_ and report this (using reportObserved). This allows mobx to make the connection between running functions and the data they used
 * 2) they should notify mobx whenever they have _changed_. This way mobx can re-run any functions (derivations) that are using this atom.
 */


var Atom = function () {
  /**
   * Create a new atom. For debugging purposes it is recommended to give it a name.
   * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
   */
  function Atom(name) {
    if (name === void 0) {
      name = "Atom@" + getNextId();
    }

    this.name = name;
    this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed

    this.isBeingObserved = false;
    this.observers = [];
    this.observersIndexes = {};
    this.diffValue = 0;
    this.lastAccessedBy = 0;
    this.lowestObserverState = IDerivationState.NOT_TRACKING;
  }

  Atom.prototype.onBecomeUnobserved = function () {// noop
  };

  Atom.prototype.onBecomeObserved = function () {
    /* noop */
  };
  /**
   * Invoke this method to notify mobx that your atom has been used somehow.
   * Returns true if there is currently a reactive context.
   */


  Atom.prototype.reportObserved = function () {
    return reportObserved(this);
  };
  /**
   * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
   */


  Atom.prototype.reportChanged = function () {
    startBatch();
    propagateChanged(this);
    endBatch();
  };

  Atom.prototype.toString = function () {
    return this.name;
  };

  return Atom;
}();

var isAtom = createInstanceofPredicate("Atom", Atom);

function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
  if (onBecomeObservedHandler === void 0) {
    onBecomeObservedHandler = noop;
  }

  if (onBecomeUnobservedHandler === void 0) {
    onBecomeUnobservedHandler = noop;
  }

  var atom = new Atom(name);
  onBecomeObserved(atom, onBecomeObservedHandler);
  onBecomeUnobserved(atom, onBecomeUnobservedHandler);
  return atom;
}

function identityComparer(a, b) {
  return a === b;
}

function structuralComparer(a, b) {
  return deepEqual(a, b);
}

function shallowComparer(a, b) {
  return deepEqual(a, b, 1);
}

function defaultComparer(a, b) {
  return areBothNaN(a, b) || identityComparer(a, b);
}

var comparer = {
  identity: identityComparer,
  structural: structuralComparer,
  default: defaultComparer,
  shallow: shallowComparer
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */

var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return _extendStatics(d, b);
};

function __extends(d, b) {
  _extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
}

var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};

function createPropertyInitializerDescriptor(prop, enumerable) {
  var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
  return cache[prop] || (cache[prop] = {
    configurable: true,
    enumerable: enumerable,
    get: function get() {
      initializeInstance(this);
      return this[prop];
    },
    set: function set(value) {
      initializeInstance(this);
      this[prop] = value;
    }
  });
}

function initializeInstance(target) {
  if (target.__mobxDidRunLazyInitializers === true) return;
  var decorators = target.__mobxDecorators;

  if (decorators) {
    addHiddenProp(target, "__mobxDidRunLazyInitializers", true);

    for (var key in decorators) {
      var d = decorators[key];
      d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
    }
  }
}

function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
  return function decoratorFactory() {
    var decoratorArguments;

    var decorator = function decorate(target, prop, descriptor, applyImmediately // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
    // as the instance to apply the decorator to equals the target
    ) {
      if (applyImmediately === true) {
        propertyCreator(target, prop, descriptor, target, decoratorArguments);
        return null;
      }

      if ( true && !quacksLikeADecorator(arguments)) fail("This function is a decorator, but it wasn't invoked like a decorator");

      if (!Object.prototype.hasOwnProperty.call(target, "__mobxDecorators")) {
        var inheritedDecorators = target.__mobxDecorators;
        addHiddenProp(target, "__mobxDecorators", _assign({}, inheritedDecorators));
      }

      target.__mobxDecorators[prop] = {
        prop: prop,
        propertyCreator: propertyCreator,
        descriptor: descriptor,
        decoratorTarget: target,
        decoratorArguments: decoratorArguments
      };
      return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
    };

    if (quacksLikeADecorator(arguments)) {
      // @decorator
      decoratorArguments = EMPTY_ARRAY;
      return decorator.apply(null, arguments);
    } else {
      // @decorator(args)
      decoratorArguments = Array.prototype.slice.call(arguments);
      return decorator;
    }
  };
}

function quacksLikeADecorator(args) {
  return (args.length === 2 || args.length === 3) && typeof args[1] === "string" || args.length === 4 && args[3] === true;
}

function deepEnhancer(v, _, name) {
  // it is an observable already, done
  if (isObservable(v)) return v; // something that can be converted and mutated?

  if (Array.isArray(v)) return observable.array(v, {
    name: name
  });
  if (isPlainObject(v)) return observable.object(v, undefined, {
    name: name
  });
  if (isES6Map(v)) return observable.map(v, {
    name: name
  });
  if (isES6Set(v)) return observable.set(v, {
    name: name
  });
  return v;
}

function shallowEnhancer(v, _, name) {
  if (v === undefined || v === null) return v;
  if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) return v;
  if (Array.isArray(v)) return observable.array(v, {
    name: name,
    deep: false
  });
  if (isPlainObject(v)) return observable.object(v, undefined, {
    name: name,
    deep: false
  });
  if (isES6Map(v)) return observable.map(v, {
    name: name,
    deep: false
  });
  if (isES6Set(v)) return observable.set(v, {
    name: name,
    deep: false
  });
  return fail( true && "The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}

function referenceEnhancer(newValue) {
  // never turn into an observable
  return newValue;
}

function refStructEnhancer(v, oldValue, name) {
  if ( true && isObservable(v)) throw "observable.struct should not be used with observable values";
  if (deepEqual(v, oldValue)) return oldValue;
  return v;
}

function createDecoratorForEnhancer(enhancer) {
  invariant(enhancer);
  var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
    if (true) {
      invariant(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + propertyName + "\"), use @computed instead.");
    }

    var initialValue = descriptor ? descriptor.initializer ? descriptor.initializer.call(target) : descriptor.value : undefined;
    defineObservableProperty(target, propertyName, initialValue, enhancer);
  });
  var res = // Extra process checks, as this happens during module initialization
  typeof process !== "undefined" && process.env && "development" !== "production" ? function observableDecorator() {
    // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
    // and simply return the created prop decorator
    if (arguments.length < 2) return fail("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
    return decorator.apply(null, arguments);
  } : decorator;
  res.enhancer = enhancer;
  return res;
} // Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases


var defaultCreateObservableOptions = {
  deep: true,
  name: undefined,
  defaultDecorator: undefined
};
var shallowCreateObservableOptions = {
  deep: false,
  name: undefined,
  defaultDecorator: undefined
};
Object.freeze(defaultCreateObservableOptions);
Object.freeze(shallowCreateObservableOptions);

function assertValidOption(key) {
  if (!/^(deep|name|equals|defaultDecorator)$/.test(key)) fail("invalid option for (extend)observable: " + key);
}

function asCreateObservableOptions(thing) {
  if (thing === null || thing === undefined) return defaultCreateObservableOptions;
  if (typeof thing === "string") return {
    name: thing,
    deep: true
  };

  if (true) {
    if (Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(thing) !== "object") return fail("expected options object");
    Object.keys(thing).forEach(assertValidOption);
  }

  return thing;
}

function getEnhancerFromOptions(options) {
  return options.defaultDecorator ? options.defaultDecorator.enhancer : options.deep === false ? referenceEnhancer : deepEnhancer;
}

var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */

function createObservable(v, arg2, arg3) {
  // @observable someProp;
  if (typeof arguments[1] === "string") {
    return deepDecorator.apply(null, arguments);
  } // it is an observable already, done


  if (isObservable(v)) return v; // something that can be converted and mutated?

  var res = isPlainObject(v) ? observable.object(v, arg2, arg3) : Array.isArray(v) ? observable.array(v, arg2) : isES6Map(v) ? observable.map(v, arg2) : isES6Set(v) ? observable.set(v, arg2) : v; // this value could be converted to a new observable data structure, return it

  if (res !== v) return res; // otherwise, just box it

  fail( true && "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
}

var observableFactories = {
  box: function box(value, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("box");
    var o = asCreateObservableOptions(options);
    return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
  },
  shallowBox: function shallowBox(value, name) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("shallowBox");
    deprecated("observable.shallowBox", "observable.box(value, { deep: false })");
    return observable.box(value, {
      name: name,
      deep: false
    });
  },
  array: function array(initialValues, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("array");
    var o = asCreateObservableOptions(options);
    return new ObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
  },
  shallowArray: function shallowArray(initialValues, name) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("shallowArray");
    deprecated("observable.shallowArray", "observable.array(values, { deep: false })");
    return observable.array(initialValues, {
      name: name,
      deep: false
    });
  },
  map: function map(initialValues, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("map");
    var o = asCreateObservableOptions(options);
    return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
  },
  shallowMap: function shallowMap(initialValues, name) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("shallowMap");
    deprecated("observable.shallowMap", "observable.map(values, { deep: false })");
    return observable.map(initialValues, {
      name: name,
      deep: false
    });
  },
  set: function set(initialValues, options) {
    if (arguments.length > 2) incorrectlyUsedAsDecorator("set");
    var o = asCreateObservableOptions(options);
    return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
  },
  object: function object(props, decorators, options) {
    if (typeof arguments[1] === "string") incorrectlyUsedAsDecorator("object");
    var o = asCreateObservableOptions(options);
    return extendObservable({}, props, decorators, o);
  },
  shallowObject: function shallowObject(props, name) {
    if (typeof arguments[1] === "string") incorrectlyUsedAsDecorator("shallowObject");
    deprecated("observable.shallowObject", "observable.object(values, {}, { deep: false })");
    return observable.object(props, {}, {
      name: name,
      deep: false
    });
  },
  ref: refDecorator,
  shallow: shallowDecorator,
  deep: deepDecorator,
  struct: refStructDecorator
};
var observable = createObservable; // weird trick to keep our typings nicely with our funcs, and still extend the observable function

Object.keys(observableFactories).forEach(function (name) {
  return observable[name] = observableFactories[name];
});

function incorrectlyUsedAsDecorator(methodName) {
  fail( // process.env.NODE_ENV !== "production" &&
  "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
  if (true) {
    invariant(descriptor && descriptor.get, "Trying to declare a computed value for unspecified getter '" + propertyName + "'");
  }

  var get = descriptor.get,
      set = descriptor.set; // initialValue is the descriptor for get / set props
  // Optimization: faster on decorator target or instance? Assuming target
  // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
  // Forcing instance now, fixes hot reloadig issues on React Native:

  var options = decoratorArgs[0] || {};
  defineComputedProperty(instance, propertyName, _assign({
    get: get,
    set: set
  }, options));
});
var computedStructDecorator = computedDecorator({
  equals: comparer.structural
});
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */

var computed = function computed(arg1, arg2, arg3) {
  if (typeof arg2 === "string") {
    // @computed
    return computedDecorator.apply(null, arguments);
  }

  if (arg1 !== null && Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arg1) === "object" && arguments.length === 1) {
    // @computed({ options })
    return computedDecorator.apply(null, arguments);
  } // computed(expr, options?)


  if (true) {
    invariant(typeof arg1 === "function", "First argument to `computed` should be an expression.");
    invariant(arguments.length < 3, "Computed takes one or two arguments if used as function");
  }

  var opts = Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arg2) === "object" ? arg2 : {};
  opts.get = arg1;
  opts.set = typeof arg2 === "function" ? arg2 : opts.set;
  opts.name = opts.name || arg1.name || "";
  /* for generated name */

  return new ComputedValue(opts);
};

computed.struct = computedStructDecorator;
var IDerivationState;

(function (IDerivationState) {
  // before being run or (outside batch and not being observed)
  // at this point derivation is not holding any data about dependency tree
  IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING"; // no shallow dependency changed since last computation
  // won't recalculate derivation
  // this is what makes mobx fast

  IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE"; // some deep dependency changed, but don't know if shallow dependency changed
  // will require to check first if UP_TO_DATE or POSSIBLY_STALE
  // currently only ComputedValue will propagate POSSIBLY_STALE
  //
  // having this state is second big optimization:
  // don't have to recompute on every dependency change, but only when it's needed

  IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE"; // A shallow dependency has changed since last computation and the derivation
  // will need to recompute when it's needed next.

  IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));

var TraceMode;

(function (TraceMode) {
  TraceMode[TraceMode["NONE"] = 0] = "NONE";
  TraceMode[TraceMode["LOG"] = 1] = "LOG";
  TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));

var CaughtException = function () {
  function CaughtException(cause) {
    this.cause = cause; // Empty
  }

  return CaughtException;
}();

function isCaughtException(e) {
  return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */


function shouldCompute(derivation) {
  switch (derivation.dependenciesState) {
    case IDerivationState.UP_TO_DATE:
      return false;

    case IDerivationState.NOT_TRACKING:
    case IDerivationState.STALE:
      return true;

    case IDerivationState.POSSIBLY_STALE:
      {
        // state propagation can occur outside of action/reactive context #2195
        var prevAllowStateReads = allowStateReadsStart(true);
        var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.

        var obs = derivation.observing,
            l = obs.length;

        for (var i = 0; i < l; i++) {
          var obj = obs[i];

          if (isComputedValue(obj)) {
            if (globalState.disableErrorBoundaries) {
              obj.get();
            } else {
              try {
                obj.get();
              } catch (e) {
                // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                untrackedEnd(prevUntracked);
                allowStateReadsEnd(prevAllowStateReads);
                return true;
              }
            } // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
            // and `derivation` is an observer of `obj`
            // invariantShouldCompute(derivation)


            if (derivation.dependenciesState === IDerivationState.STALE) {
              untrackedEnd(prevUntracked);
              allowStateReadsEnd(prevAllowStateReads);
              return true;
            }
          }
        }

        changeDependenciesStateTo0(derivation);
        untrackedEnd(prevUntracked);
        allowStateReadsEnd(prevAllowStateReads);
        return false;
      }
  }
} // function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         process.env.NODE_ENV === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }


function isComputingDerivation() {
  return globalState.trackingDerivation !== null; // filter out actions inside computations
}

function checkIfStateModificationsAreAllowed(atom) {
  var hasObservers = atom.observers.length > 0; // Should never be possible to change an observed observable from inside computed, see #798

  if (globalState.computationDepth > 0 && hasObservers) fail( true && "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name); // Should not be possible to change observed state outside strict mode, except during initialization, see #563

  if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "strict")) fail( true && (globalState.enforceActions ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") + atom.name);
}

function checkIfStateReadsAreAllowed(observable) {
  if ( true && !globalState.allowStateReads && globalState.observableRequiresReaction) {
    console.warn("[mobx] Observable " + observable.name + " being read outside a reactive context");
  }
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */


function trackDerivedFunction(derivation, f, context) {
  var prevAllowStateReads = allowStateReadsStart(true); // pre allocate array allocation + room for variation in deps
  // array will be trimmed by bindDependencies

  changeDependenciesStateTo0(derivation);
  derivation.newObserving = new Array(derivation.observing.length + 100);
  derivation.unboundDepsCount = 0;
  derivation.runId = ++globalState.runId;
  var prevTracking = globalState.trackingDerivation;
  globalState.trackingDerivation = derivation;
  var result;

  if (globalState.disableErrorBoundaries === true) {
    result = f.call(context);
  } else {
    try {
      result = f.call(context);
    } catch (e) {
      result = new CaughtException(e);
    }
  }

  globalState.trackingDerivation = prevTracking;
  bindDependencies(derivation);

  if (derivation.observing.length === 0) {
    warnAboutDerivationWithoutDependencies(derivation);
  }

  allowStateReadsEnd(prevAllowStateReads);
  return result;
}

function warnAboutDerivationWithoutDependencies(derivation) {
  if (false) {}

  if (globalState.reactionRequiresObservable || derivation.requiresObservable) {
    console.warn("[mobx] Derivation " + derivation.name + " is created/updated without reading any observable value");
  }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */


function bindDependencies(derivation) {
  // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
  var prevObserving = derivation.observing;
  var observing = derivation.observing = derivation.newObserving;
  var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE; // Go through all new observables and check diffValue: (this list can contain duplicates):
  //   0: first occurrence, change to 1 and keep it
  //   1: extra occurrence, drop it

  var i0 = 0,
      l = derivation.unboundDepsCount;

  for (var i = 0; i < l; i++) {
    var dep = observing[i];

    if (dep.diffValue === 0) {
      dep.diffValue = 1;
      if (i0 !== i) observing[i0] = dep;
      i0++;
    } // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
    // not hitting the condition


    if (dep.dependenciesState > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState;
    }
  }

  observing.length = i0;
  derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
  // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
  //   0: it's not in new observables, unobserve it
  //   1: it keeps being observed, don't want to notify it. change to 0

  l = prevObserving.length;

  while (l--) {
    var dep = prevObserving[l];

    if (dep.diffValue === 0) {
      removeObserver(dep, derivation);
    }

    dep.diffValue = 0;
  } // Go through all new observables and check diffValue: (now it should be unique)
  //   0: it was set to 0 in last loop. don't need to do anything.
  //   1: it wasn't observed, let's observe it. set back to 0


  while (i0--) {
    var dep = observing[i0];

    if (dep.diffValue === 1) {
      dep.diffValue = 0;
      addObserver(dep, derivation);
    }
  } // Some new observed derivations may become stale during this derivation computation
  // so they have had no chance to propagate staleness (#916)


  if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
    derivation.dependenciesState = lowestNewObservingDerivationState;
    derivation.onBecomeStale();
  }
}

function clearObserving(derivation) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
  var obs = derivation.observing;
  derivation.observing = [];
  var i = obs.length;

  while (i--) {
    removeObserver(obs[i], derivation);
  }

  derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}

function untracked(action) {
  var prev = untrackedStart();
  var res = action();
  untrackedEnd(prev);
  return res;
}

function untrackedStart() {
  var prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}

function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
}

function allowStateReadsStart(allowStateReads) {
  var prev = globalState.allowStateReads;
  globalState.allowStateReads = allowStateReads;
  return prev;
}

function allowStateReadsEnd(prev) {
  globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */


function changeDependenciesStateTo0(derivation) {
  if (derivation.dependenciesState === IDerivationState.UP_TO_DATE) return;
  derivation.dependenciesState = IDerivationState.UP_TO_DATE;
  var obs = derivation.observing;
  var i = obs.length;

  while (i--) {
    obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
  }
} // we don't use globalState for these in order to avoid possible issues with multiple
// mobx versions


var currentActionId = 0;
var nextActionId = 1;
var functionNameDescriptor = Object.getOwnPropertyDescriptor(function () {}, "name");
var isFunctionNameConfigurable = functionNameDescriptor && functionNameDescriptor.configurable;

function createAction(actionName, fn) {
  if (true) {
    invariant(typeof fn === "function", "`action` can only be invoked on functions");
    if (typeof actionName !== "string" || !actionName) fail("actions should have valid names, got: '" + actionName + "'");
  }

  var res = function res() {
    return executeAction(actionName, fn, this, arguments);
  };

  if (true) {
    if (isFunctionNameConfigurable) {
      Object.defineProperty(res, "name", {
        value: actionName
      });
    }
  }

  res.isMobxAction = true;
  return res;
}

function executeAction(actionName, fn, scope, args) {
  var runInfo = _startAction(actionName, scope, args);

  try {
    return fn.apply(scope, args);
  } catch (err) {
    runInfo.error = err;
    throw err;
  } finally {
    _endAction(runInfo);
  }
}

function _startAction(actionName, scope, args) {
  var notifySpy = isSpyEnabled() && !!actionName;
  var startTime = 0;

  if (notifySpy) {
    startTime = Date.now();
    var l = args && args.length || 0;
    var flattendArgs = new Array(l);
    if (l > 0) for (var i = 0; i < l; i++) {
      flattendArgs[i] = args[i];
    }
    spyReportStart({
      type: "action",
      name: actionName,
      object: scope,
      arguments: flattendArgs
    });
  }

  var prevDerivation = untrackedStart();
  startBatch();
  var prevAllowStateChanges = allowStateChangesStart(true);
  var prevAllowStateReads = allowStateReadsStart(true);
  var runInfo = {
    prevDerivation: prevDerivation,
    prevAllowStateChanges: prevAllowStateChanges,
    prevAllowStateReads: prevAllowStateReads,
    notifySpy: notifySpy,
    startTime: startTime,
    actionId: nextActionId++,
    parentActionId: currentActionId
  };
  currentActionId = runInfo.actionId;
  return runInfo;
}

function _endAction(runInfo) {
  if (currentActionId !== runInfo.actionId) {
    fail("invalid action stack. did you forget to finish an action?");
  }

  currentActionId = runInfo.parentActionId;

  if (runInfo.error !== undefined) {
    globalState.suppressReactionErrors = true;
  }

  allowStateChangesEnd(runInfo.prevAllowStateChanges);
  allowStateReadsEnd(runInfo.prevAllowStateReads);
  endBatch();
  untrackedEnd(runInfo.prevDerivation);

  if (runInfo.notifySpy) {
    spyReportEnd({
      time: Date.now() - runInfo.startTime
    });
  }

  globalState.suppressReactionErrors = false;
}

function allowStateChanges(allowStateChanges, func) {
  var prev = allowStateChangesStart(allowStateChanges);
  var res;

  try {
    res = func();
  } finally {
    allowStateChangesEnd(prev);
  }

  return res;
}

function allowStateChangesStart(allowStateChanges) {
  var prev = globalState.allowStateChanges;
  globalState.allowStateChanges = allowStateChanges;
  return prev;
}

function allowStateChangesEnd(prev) {
  globalState.allowStateChanges = prev;
}

function allowStateChangesInsideComputed(func) {
  var prev = globalState.computationDepth;
  globalState.computationDepth = 0;
  var res;

  try {
    res = func();
  } finally {
    globalState.computationDepth = prev;
  }

  return res;
}

var ObservableValue = function (_super) {
  __extends(ObservableValue, _super);

  function ObservableValue(value, enhancer, name, notifySpy, equals) {
    if (name === void 0) {
      name = "ObservableValue@" + getNextId();
    }

    if (notifySpy === void 0) {
      notifySpy = true;
    }

    if (equals === void 0) {
      equals = comparer.default;
    }

    var _this = _super.call(this, name) || this;

    _this.enhancer = enhancer;
    _this.name = name;
    _this.equals = equals;
    _this.hasUnreportedChange = false;
    _this.value = enhancer(value, undefined, name);

    if (notifySpy && isSpyEnabled()) {
      // only notify spy if this is a stand-alone observable
      spyReport({
        type: "create",
        name: _this.name,
        newValue: "" + _this.value
      });
    }

    return _this;
  }

  ObservableValue.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  ObservableValue.prototype.set = function (newValue) {
    var oldValue = this.value;
    newValue = this.prepareNewValue(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();

      if (notifySpy) {
        spyReportStart({
          type: "update",
          name: this.name,
          newValue: newValue,
          oldValue: oldValue
        });
      }

      this.setNewValue(newValue);
      if (notifySpy) spyReportEnd();
    }
  };

  ObservableValue.prototype.prepareNewValue = function (newValue) {
    checkIfStateModificationsAreAllowed(this);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this,
        type: "update",
        newValue: newValue
      });
      if (!change) return globalState.UNCHANGED;
      newValue = change.newValue;
    } // apply modifier


    newValue = this.enhancer(newValue, this.value, this.name);
    return this.equals(this.value, newValue) ? globalState.UNCHANGED : newValue;
  };

  ObservableValue.prototype.setNewValue = function (newValue) {
    var oldValue = this.value;
    this.value = newValue;
    this.reportChanged();

    if (hasListeners(this)) {
      notifyListeners(this, {
        type: "update",
        object: this,
        newValue: newValue,
        oldValue: oldValue
      });
    }
  };

  ObservableValue.prototype.get = function () {
    this.reportObserved();
    return this.dehanceValue(this.value);
  };

  ObservableValue.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };

  ObservableValue.prototype.observe = function (listener, fireImmediately) {
    if (fireImmediately) listener({
      object: this,
      type: "update",
      newValue: this.value,
      oldValue: undefined
    });
    return registerListener(this, listener);
  };

  ObservableValue.prototype.toJSON = function () {
    return this.get();
  };

  ObservableValue.prototype.toString = function () {
    return this.name + "[" + this.value + "]";
  };

  ObservableValue.prototype.valueOf = function () {
    return toPrimitive(this.get());
  };

  return ObservableValue;
}(Atom);

ObservableValue.prototype[primitiveSymbol()] = ObservableValue.prototype.valueOf;
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);
/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */

var ComputedValue = function () {
  /**
   * Create a new computed value based on a function expression.
   *
   * The `name` property is for debug purposes only.
   *
   * The `equals` property specifies the comparer function to use to determine if a newly produced
   * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
   * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
   * Structural comparison can be convenient if you always produce a new aggregated object and
   * don't want to notify observers if it is structurally the same.
   * This is useful for working with vectors, mouse coordinates etc.
   */
  function ComputedValue(options) {
    this.dependenciesState = IDerivationState.NOT_TRACKING;
    this.observing = []; // nodes we are looking at. Our value depends on these nodes

    this.newObserving = null; // during tracking it's an array with new observed observers

    this.isBeingObserved = false;
    this.isPendingUnobservation = false;
    this.observers = [];
    this.observersIndexes = {};
    this.diffValue = 0;
    this.runId = 0;
    this.lastAccessedBy = 0;
    this.lowestObserverState = IDerivationState.UP_TO_DATE;
    this.unboundDepsCount = 0;
    this.__mapid = "#" + getNextId();
    this.value = new CaughtException(null);
    this.isComputing = false; // to check for cycles

    this.isRunningSetter = false;
    this.isTracing = TraceMode.NONE;
    invariant(options.get, "missing option for computed: get");
    this.derivation = options.get;
    this.name = options.name || "ComputedValue@" + getNextId();
    if (options.set) this.setter = createAction(this.name + "-setter", options.set);
    this.equals = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer.default);
    this.scope = options.context;
    this.requiresReaction = !!options.requiresReaction;
    this.keepAlive = !!options.keepAlive;
  }

  ComputedValue.prototype.onBecomeStale = function () {
    propagateMaybeChanged(this);
  };

  ComputedValue.prototype.onBecomeUnobserved = function () {};

  ComputedValue.prototype.onBecomeObserved = function () {};
  /**
   * Returns the current value of this computed value.
   * Will evaluate its computation first if needed.
   */


  ComputedValue.prototype.get = function () {
    if (this.isComputing) fail("Cycle detected in computation " + this.name + ": " + this.derivation);

    if (globalState.inBatch === 0 && this.observers.length === 0 && !this.keepAlive) {
      if (shouldCompute(this)) {
        this.warnAboutUntrackedRead();
        startBatch(); // See perf test 'computed memoization'

        this.value = this.computeValue(false);
        endBatch();
      }
    } else {
      reportObserved(this);
      if (shouldCompute(this)) if (this.trackAndCompute()) propagateChangeConfirmed(this);
    }

    var result = this.value;
    if (isCaughtException(result)) throw result.cause;
    return result;
  };

  ComputedValue.prototype.peek = function () {
    var res = this.computeValue(false);
    if (isCaughtException(res)) throw res.cause;
    return res;
  };

  ComputedValue.prototype.set = function (value) {
    if (this.setter) {
      invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
      this.isRunningSetter = true;

      try {
        this.setter.call(this.scope, value);
      } finally {
        this.isRunningSetter = false;
      }
    } else invariant(false,  true && "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
  };

  ComputedValue.prototype.trackAndCompute = function () {
    if (isSpyEnabled()) {
      spyReport({
        object: this.scope,
        type: "compute",
        name: this.name
      });
    }

    var oldValue = this.value;
    var wasSuspended =
    /* see #1208 */
    this.dependenciesState === IDerivationState.NOT_TRACKING;
    var newValue = this.computeValue(true);
    var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals(oldValue, newValue);

    if (changed) {
      this.value = newValue;
    }

    return changed;
  };

  ComputedValue.prototype.computeValue = function (track) {
    this.isComputing = true;
    globalState.computationDepth++;
    var res;

    if (track) {
      res = trackDerivedFunction(this, this.derivation, this.scope);
    } else {
      if (globalState.disableErrorBoundaries === true) {
        res = this.derivation.call(this.scope);
      } else {
        try {
          res = this.derivation.call(this.scope);
        } catch (e) {
          res = new CaughtException(e);
        }
      }
    }

    globalState.computationDepth--;
    this.isComputing = false;
    return res;
  };

  ComputedValue.prototype.suspend = function () {
    if (!this.keepAlive) {
      clearObserving(this);
      this.value = undefined; // don't hold on to computed value!
    }
  };

  ComputedValue.prototype.observe = function (listener, fireImmediately) {
    var _this = this;

    var firstTime = true;
    var prevValue = undefined;
    return autorun(function () {
      var newValue = _this.get();

      if (!firstTime || fireImmediately) {
        var prevU = untrackedStart();
        listener({
          type: "update",
          object: _this,
          newValue: newValue,
          oldValue: prevValue
        });
        untrackedEnd(prevU);
      }

      firstTime = false;
      prevValue = newValue;
    });
  };

  ComputedValue.prototype.warnAboutUntrackedRead = function () {
    if (false) {}

    if (this.requiresReaction === true) {
      fail("[mobx] Computed value " + this.name + " is read outside a reactive context");
    }

    if (this.isTracing !== TraceMode.NONE) {
      console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
    }

    if (globalState.computedRequiresReaction) {
      console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
    }
  };

  ComputedValue.prototype.toJSON = function () {
    return this.get();
  };

  ComputedValue.prototype.toString = function () {
    return this.name + "[" + this.derivation.toString() + "]";
  };

  ComputedValue.prototype.valueOf = function () {
    return toPrimitive(this.get());
  };

  return ComputedValue;
}();

ComputedValue.prototype[primitiveSymbol()] = ComputedValue.prototype.valueOf;
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);
/**
 * These values will persist if global state is reset
 */

var persistentKeys = ["mobxGuid", "spyListeners", "enforceActions", "computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "allowStateReads", "disableErrorBoundaries", "runId", "UNCHANGED"];

var MobXGlobals = function () {
  function MobXGlobals() {
    /**
     * MobXGlobals version.
     * MobX compatiblity with other versions loaded in memory as long as this version matches.
     * It indicates that the global state still stores similar information
     *
     * N.B: this version is unrelated to the package version of MobX, and is only the version of the
     * internal state storage of MobX, and can be the same across many different package versions
     */
    this.version = 5;
    /**
     * globally unique token to signal unchanged
     */

    this.UNCHANGED = {};
    /**
     * Currently running derivation
     */

    this.trackingDerivation = null;
    /**
     * Are we running a computation currently? (not a reaction)
     */

    this.computationDepth = 0;
    /**
     * Each time a derivation is tracked, it is assigned a unique run-id
     */

    this.runId = 0;
    /**
     * 'guid' for general purpose. Will be persisted amongst resets.
     */

    this.mobxGuid = 0;
    /**
     * Are we in a batch block? (and how many of them)
     */

    this.inBatch = 0;
    /**
     * Observables that don't have observers anymore, and are about to be
     * suspended, unless somebody else accesses it in the same batch
     *
     * @type {IObservable[]}
     */

    this.pendingUnobservations = [];
    /**
     * List of scheduled, not yet executed, reactions.
     */

    this.pendingReactions = [];
    /**
     * Are we currently processing reactions?
     */

    this.isRunningReactions = false;
    /**
     * Is it allowed to change observables at this point?
     * In general, MobX doesn't allow that when running computations and React.render.
     * To ensure that those functions stay pure.
     */

    this.allowStateChanges = true;
    /**
     * Is it allowed to read observables at this point?
     * Used to hold the state needed for `observableRequiresReaction`
     */

    this.allowStateReads = true;
    /**
     * If strict mode is enabled, state changes are by default not allowed
     */

    this.enforceActions = false;
    /**
     * Spy callbacks
     */

    this.spyListeners = [];
    /**
     * Globally attached error handlers that react specifically to errors in reactions
     */

    this.globalReactionErrorHandlers = [];
    /**
     * Warn if computed values are accessed outside a reactive context
     */

    this.computedRequiresReaction = false;
    /**
     * (Experimental)
     * Warn if you try to create to derivation / reactive context without accessing any observable.
     */

    this.reactionRequiresObservable = false;
    /**
     * (Experimental)
     * Warn if observables are accessed outside a reactive context
     */

    this.observableRequiresReaction = false;
    /**
     * Allows overwriting of computed properties, useful in tests but not prod as it can cause
     * memory leaks. See https://github.com/mobxjs/mobx/issues/1867
     */

    this.computedConfigurable = false;
    /*
     * Don't catch and rethrow exceptions. This is useful for inspecting the state of
     * the stack when an exception occurs while debugging.
     */

    this.disableErrorBoundaries = false;
    /*
     * If true, we are already handling an exception in an action. Any errors in reactions should be supressed, as
     * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
     */

    this.suppressReactionErrors = false;
  }

  return MobXGlobals;
}();

var canMergeGlobalState = true;
var isolateCalled = false;

var globalState = function () {
  var global = getGlobal();
  if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) canMergeGlobalState = false;
  if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version) canMergeGlobalState = false;

  if (!canMergeGlobalState) {
    setTimeout(function () {
      if (!isolateCalled) {
        fail("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
      }
    }, 1);
    return new MobXGlobals();
  } else if (global.__mobxGlobals) {
    global.__mobxInstanceCount += 1;
    if (!global.__mobxGlobals.UNCHANGED) global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible

    return global.__mobxGlobals;
  } else {
    global.__mobxInstanceCount = 1;
    return global.__mobxGlobals = new MobXGlobals();
  }
}();

function isolateGlobalState() {
  if (globalState.pendingReactions.length || globalState.inBatch || globalState.isRunningReactions) fail("isolateGlobalState should be called before MobX is running any reactions");
  isolateCalled = true;

  if (canMergeGlobalState) {
    if (--getGlobal().__mobxInstanceCount === 0) getGlobal().__mobxGlobals = undefined;
    globalState = new MobXGlobals();
  }
}

function getGlobalState() {
  return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */


function resetGlobalState() {
  var defaultGlobals = new MobXGlobals();

  for (var key in defaultGlobals) {
    if (persistentKeys.indexOf(key) === -1) globalState[key] = defaultGlobals[key];
  }

  globalState.allowStateChanges = !globalState.enforceActions;
}

function hasObservers(observable) {
  return observable.observers && observable.observers.length > 0;
}

function getObservers(observable) {
  return observable.observers;
} // function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }


function addObserver(observable, node) {
  // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
  // invariantObservers(observable);
  var l = observable.observers.length;

  if (l) {
    // because object assignment is relatively expensive, let's not store data about index 0.
    observable.observersIndexes[node.__mapid] = l;
  }

  observable.observers[l] = node;
  if (observable.lowestObserverState > node.dependenciesState) observable.lowestObserverState = node.dependenciesState; // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}

function removeObserver(observable, node) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
  // invariantObservers(observable);
  if (observable.observers.length === 1) {
    // deleting last observer
    observable.observers.length = 0;
    queueForUnobservation(observable);
  } else {
    // deleting from _observersIndexes is straight forward, to delete from _observers, let's swap `node` with last element
    var list = observable.observers;
    var map = observable.observersIndexes;
    var filler = list.pop(); // get last element, which should fill the place of `node`, so the array doesn't have holes

    if (filler !== node) {
      // otherwise node was the last element, which already got removed from array
      var index = map[node.__mapid] || 0; // getting index of `node`. this is the only place we actually use map.

      if (index) {
        // map store all indexes but 0, see comment in `addObserver`
        map[filler.__mapid] = index;
      } else {
        delete map[filler.__mapid];
      }

      list[index] = filler;
    }

    delete map[node.__mapid];
  } // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");

}

function queueForUnobservation(observable) {
  if (observable.isPendingUnobservation === false) {
    // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
    observable.isPendingUnobservation = true;
    globalState.pendingUnobservations.push(observable);
  }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */


function startBatch() {
  globalState.inBatch++;
}

function endBatch() {
  if (--globalState.inBatch === 0) {
    runReactions(); // the batch is actually about to finish, all unobserving should happen here.

    var list = globalState.pendingUnobservations;

    for (var i = 0; i < list.length; i++) {
      var observable = list[i];
      observable.isPendingUnobservation = false;

      if (observable.observers.length === 0) {
        if (observable.isBeingObserved) {
          // if this observable had reactive observers, trigger the hooks
          observable.isBeingObserved = false;
          observable.onBecomeUnobserved();
        }

        if (observable instanceof ComputedValue) {
          // computed values are automatically teared down when the last observer leaves
          // this process happens recursively, this computed might be the last observable of another, etc..
          observable.suspend();
        }
      }
    }

    globalState.pendingUnobservations = [];
  }
}

function reportObserved(observable) {
  checkIfStateReadsAreAllowed(observable);
  var derivation = globalState.trackingDerivation;

  if (derivation !== null) {
    /**
     * Simple optimization, give each derivation run an unique id (runId)
     * Check if last time this observable was accessed the same runId is used
     * if this is the case, the relation is already known
     */
    if (derivation.runId !== observable.lastAccessedBy) {
      observable.lastAccessedBy = derivation.runId;
      derivation.newObserving[derivation.unboundDepsCount++] = observable;

      if (!observable.isBeingObserved) {
        observable.isBeingObserved = true;
        observable.onBecomeObserved();
      }
    }

    return true;
  } else if (observable.observers.length === 0 && globalState.inBatch > 0) {
    queueForUnobservation(observable);
  }

  return false;
} // function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }

/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes


function propagateChanged(observable) {
  // invariantLOS(observable, "changed start");
  if (observable.lowestObserverState === IDerivationState.STALE) return;
  observable.lowestObserverState = IDerivationState.STALE;
  var observers = observable.observers;
  var i = observers.length;

  while (i--) {
    var d = observers[i];

    if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
      if (d.isTracing !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }

      d.onBecomeStale();
    }

    d.dependenciesState = IDerivationState.STALE;
  } // invariantLOS(observable, "changed end");

} // Called by ComputedValue when it recalculate and its value changed


function propagateChangeConfirmed(observable) {
  // invariantLOS(observable, "confirmed start");
  if (observable.lowestObserverState === IDerivationState.STALE) return;
  observable.lowestObserverState = IDerivationState.STALE;
  var observers = observable.observers;
  var i = observers.length;

  while (i--) {
    var d = observers[i];
    if (d.dependenciesState === IDerivationState.POSSIBLY_STALE) d.dependenciesState = IDerivationState.STALE;else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
    ) observable.lowestObserverState = IDerivationState.UP_TO_DATE;
  } // invariantLOS(observable, "confirmed end");

} // Used by computed when its dependency changed, but we don't wan't to immediately recompute.


function propagateMaybeChanged(observable) {
  // invariantLOS(observable, "maybe start");
  if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE) return;
  observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
  var observers = observable.observers;
  var i = observers.length;

  while (i--) {
    var d = observers[i];

    if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
      d.dependenciesState = IDerivationState.POSSIBLY_STALE;

      if (d.isTracing !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }

      d.onBecomeStale();
    }
  } // invariantLOS(observable, "maybe end");

}

function logTraceInfo(derivation, observable) {
  console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");

  if (derivation.isTracing === TraceMode.BREAK) {
    var lines = [];
    printDepTree(getDependencyTree(derivation), lines, 1); // prettier-ignore

    new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
  }
}

function printDepTree(tree, lines, depth) {
  if (lines.length >= 1000) {
    lines.push("(and many more)");
    return;
  }

  lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)

  if (tree.dependencies) tree.dependencies.forEach(function (child) {
    return printDepTree(child, lines, depth + 1);
  });
}

var Reaction = function () {
  function Reaction(name, onInvalidate, errorHandler, requiresObservable) {
    if (name === void 0) {
      name = "Reaction@" + getNextId();
    }

    if (requiresObservable === void 0) {
      requiresObservable = false;
    }

    this.name = name;
    this.onInvalidate = onInvalidate;
    this.errorHandler = errorHandler;
    this.requiresObservable = requiresObservable;
    this.observing = []; // nodes we are looking at. Our value depends on these nodes

    this.newObserving = [];
    this.dependenciesState = IDerivationState.NOT_TRACKING;
    this.diffValue = 0;
    this.runId = 0;
    this.unboundDepsCount = 0;
    this.__mapid = "#" + getNextId();
    this.isDisposed = false;
    this._isScheduled = false;
    this._isTrackPending = false;
    this._isRunning = false;
    this.isTracing = TraceMode.NONE;
  }

  Reaction.prototype.onBecomeStale = function () {
    this.schedule();
  };

  Reaction.prototype.schedule = function () {
    if (!this._isScheduled) {
      this._isScheduled = true;
      globalState.pendingReactions.push(this);
      runReactions();
    }
  };

  Reaction.prototype.isScheduled = function () {
    return this._isScheduled;
  };
  /**
   * internal, use schedule() if you intend to kick off a reaction
   */


  Reaction.prototype.runReaction = function () {
    if (!this.isDisposed) {
      startBatch();
      this._isScheduled = false;

      if (shouldCompute(this)) {
        this._isTrackPending = true;

        try {
          this.onInvalidate();

          if (this._isTrackPending && isSpyEnabled()) {
            // onInvalidate didn't trigger track right away..
            spyReport({
              name: this.name,
              type: "scheduled-reaction"
            });
          }
        } catch (e) {
          this.reportExceptionInDerivation(e);
        }
      }

      endBatch();
    }
  };

  Reaction.prototype.track = function (fn) {
    startBatch();
    var notify = isSpyEnabled();
    var startTime;

    if (notify) {
      startTime = Date.now();
      spyReportStart({
        name: this.name,
        type: "reaction"
      });
    }

    this._isRunning = true;
    var result = trackDerivedFunction(this, fn, undefined);
    this._isRunning = false;
    this._isTrackPending = false;

    if (this.isDisposed) {
      // disposed during last run. Clean up everything that was bound after the dispose call.
      clearObserving(this);
    }

    if (isCaughtException(result)) this.reportExceptionInDerivation(result.cause);

    if (notify) {
      spyReportEnd({
        time: Date.now() - startTime
      });
    }

    endBatch();
  };

  Reaction.prototype.reportExceptionInDerivation = function (error) {
    var _this = this;

    if (this.errorHandler) {
      this.errorHandler(error, this);
      return;
    }

    if (globalState.disableErrorBoundaries) throw error;
    var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";

    if (globalState.suppressReactionErrors) {
      console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)"); // prettier-ignore
    } else {
      console.error(message, error);
      /** If debugging brought you here, please, read the above message :-). Tnx! */
    }

    if (isSpyEnabled()) {
      spyReport({
        type: "error",
        name: this.name,
        message: message,
        error: "" + error
      });
    }

    globalState.globalReactionErrorHandlers.forEach(function (f) {
      return f(error, _this);
    });
  };

  Reaction.prototype.dispose = function () {
    if (!this.isDisposed) {
      this.isDisposed = true;

      if (!this._isRunning) {
        // if disposed while running, clean up later. Maybe not optimal, but rare case
        startBatch();
        clearObserving(this);
        endBatch();
      }
    }
  };

  Reaction.prototype.getDisposer = function () {
    var r = this.dispose.bind(this);
    r.$mobx = this;
    return r;
  };

  Reaction.prototype.toString = function () {
    return "Reaction[" + this.name + "]";
  };

  Reaction.prototype.trace = function (enterBreakPoint) {
    if (enterBreakPoint === void 0) {
      enterBreakPoint = false;
    }

    trace(this, enterBreakPoint);
  };

  return Reaction;
}();

function onReactionError(handler) {
  globalState.globalReactionErrorHandlers.push(handler);
  return function () {
    var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
    if (idx >= 0) globalState.globalReactionErrorHandlers.splice(idx, 1);
  };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */


var MAX_REACTION_ITERATIONS = 100;

var reactionScheduler = function reactionScheduler(f) {
  return f();
};

function runReactions() {
  // Trampolining, if runReactions are already running, new reactions will be picked up
  if (globalState.inBatch > 0 || globalState.isRunningReactions) return;
  reactionScheduler(runReactionsHelper);
}

function runReactionsHelper() {
  globalState.isRunningReactions = true;
  var allReactions = globalState.pendingReactions;
  var iterations = 0; // While running reactions, new reactions might be triggered.
  // Hence we work with two variables and check whether
  // we converge to no remaining reactions after a while.

  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS) {
      console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]));
      allReactions.splice(0); // clear reactions
    }

    var remainingReactions = allReactions.splice(0);

    for (var i = 0, l = remainingReactions.length; i < l; i++) {
      remainingReactions[i].runReaction();
    }
  }

  globalState.isRunningReactions = false;
}

var isReaction = createInstanceofPredicate("Reaction", Reaction);

function setReactionScheduler(fn) {
  var baseScheduler = reactionScheduler;

  reactionScheduler = function reactionScheduler(f) {
    return fn(function () {
      return baseScheduler(f);
    });
  };
}

function isSpyEnabled() {
  return !!globalState.spyListeners.length;
}

function spyReport(event) {
  if (!globalState.spyListeners.length) return;
  var listeners = globalState.spyListeners;

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](event);
  }
}

function spyReportStart(event) {
  var change = _assign(_assign({}, event), {
    spyReportStart: true
  });

  spyReport(change);
}

var END_EVENT = {
  spyReportEnd: true
};

function spyReportEnd(change) {
  if (change) spyReport(_assign(_assign({}, change), {
    spyReportEnd: true
  }));else spyReport(END_EVENT);
}

function spy(listener) {
  globalState.spyListeners.push(listener);
  return once(function () {
    globalState.spyListeners = globalState.spyListeners.filter(function (l) {
      return l !== listener;
    });
  });
}

function dontReassignFields() {
  fail( true && "@action fields are not reassignable");
}

function namedActionDecorator(name) {
  return function (target, prop, descriptor) {
    if (descriptor) {
      if ( true && descriptor.get !== undefined) {
        return fail("@action cannot be used with getters");
      } // babel / typescript
      // @action method() { }


      if (descriptor.value) {
        // typescript
        return {
          value: createAction(name, descriptor.value),
          enumerable: false,
          configurable: true,
          writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)

        };
      } // babel only: @action method = () => {}


      var initializer_1 = descriptor.initializer;
      return {
        enumerable: false,
        configurable: true,
        writable: true,
        initializer: function initializer() {
          // N.B: we can't immediately invoke initializer; this would be wrong
          return createAction(name, initializer_1.call(this));
        }
      };
    } // bound instance methods


    return actionFieldDecorator(name).apply(this, arguments);
  };
}

function actionFieldDecorator(name) {
  // Simple property that writes on first invocation to the current instance
  return function (target, prop, descriptor) {
    Object.defineProperty(target, prop, {
      configurable: true,
      enumerable: false,
      get: function get() {
        return undefined;
      },
      set: function set(value) {
        addHiddenProp(this, prop, action(name, value));
      }
    });
  };
}

function boundActionDecorator(target, propertyName, descriptor, applyToInstance) {
  if (applyToInstance === true) {
    defineBoundAction(target, propertyName, descriptor.value);
    return null;
  }

  if (descriptor) {
    // if (descriptor.value)
    // Typescript / Babel: @action.bound method() { }
    // also: babel @action.bound method = () => {}
    return {
      configurable: true,
      enumerable: false,
      get: function get() {
        defineBoundAction(this, propertyName, descriptor.value || descriptor.initializer.call(this));
        return this[propertyName];
      },
      set: dontReassignFields
    };
  } // field decorator Typescript @action.bound method = () => {}


  return {
    enumerable: false,
    configurable: true,
    set: function set(v) {
      defineBoundAction(this, propertyName, v);
    },
    get: function get() {
      return undefined;
    }
  };
}

var action = function action(arg1, arg2, arg3, arg4) {
  // action(fn() {})
  if (arguments.length === 1 && typeof arg1 === "function") return createAction(arg1.name || "<unnamed action>", arg1); // action("name", fn() {})

  if (arguments.length === 2 && typeof arg2 === "function") return createAction(arg1, arg2); // @action("name") fn() {}

  if (arguments.length === 1 && typeof arg1 === "string") return namedActionDecorator(arg1); // @action fn() {}

  if (arg4 === true) {
    // apply to instance immediately
    arg1[arg2] = createAction(arg1.name || arg2, arg3.value);
  } else {
    return namedActionDecorator(arg2).apply(null, arguments);
  }
};

action.bound = boundActionDecorator;

function runInAction(arg1, arg2) {
  // TODO: deprecate?
  var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
  var fn = typeof arg1 === "function" ? arg1 : arg2;

  if (true) {
    invariant(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
    if (typeof actionName !== "string" || !actionName) fail("actions should have valid names, got: '" + actionName + "'");
  }

  return executeAction(actionName, fn, this, undefined);
}

function isAction(thing) {
  return typeof thing === "function" && thing.isMobxAction === true;
}

function defineBoundAction(target, propertyName, fn) {
  addHiddenProp(target, propertyName, createAction(propertyName, fn.bind(target)));
}
/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */


function autorun(view, opts) {
  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if (true) {
    invariant(typeof view === "function", "Autorun expects a function as first argument");
    invariant(isAction(view) === false, "Autorun does not accept actions since actions are untrackable");
  }

  var name = opts && opts.name || view.name || "Autorun@" + getNextId();
  var runSync = !opts.scheduler && !opts.delay;
  var reaction;

  if (runSync) {
    // normal autorun
    reaction = new Reaction(name, function () {
      this.track(reactionRunner);
    }, opts.onError, opts.requiresObservable);
  } else {
    var scheduler_1 = createSchedulerFromOptions(opts); // debounced autorun

    var isScheduled_1 = false;
    reaction = new Reaction(name, function () {
      if (!isScheduled_1) {
        isScheduled_1 = true;
        scheduler_1(function () {
          isScheduled_1 = false;
          if (!reaction.isDisposed) reaction.track(reactionRunner);
        });
      }
    }, opts.onError, opts.requiresObservable);
  }

  function reactionRunner() {
    view(reaction);
  }

  reaction.schedule();
  return reaction.getDisposer();
}

var run = function run(f) {
  return f();
};

function createSchedulerFromOptions(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function (f) {
    return setTimeout(f, opts.delay);
  } : run;
}

function reaction(expression, effect, opts) {
  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if (typeof opts === "boolean") {
    opts = {
      fireImmediately: opts
    };
    deprecated("Using fireImmediately as argument is deprecated. Use '{ fireImmediately: true }' instead");
  }

  if (true) {
    invariant(typeof expression === "function", "First argument to reaction should be a function");
    invariant(Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(opts) === "object", "Third argument of reactions should be an object");
  }

  var name = opts.name || "Reaction@" + getNextId();
  var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
  var runSync = !opts.scheduler && !opts.delay;
  var scheduler = createSchedulerFromOptions(opts);
  var firstTime = true;
  var isScheduled = false;
  var value;
  var equals = opts.compareStructural ? comparer.structural : opts.equals || comparer.default;
  var r = new Reaction(name, function () {
    if (firstTime || runSync) {
      reactionRunner();
    } else if (!isScheduled) {
      isScheduled = true;
      scheduler(reactionRunner);
    }
  }, opts.onError, opts.requiresObservable);

  function reactionRunner() {
    isScheduled = false; // Q: move into reaction runner?

    if (r.isDisposed) return;
    var changed = false;
    r.track(function () {
      var nextValue = expression(r);
      changed = firstTime || !equals(value, nextValue);
      value = nextValue;
    });
    if (firstTime && opts.fireImmediately) effectAction(value, r);
    if (!firstTime && changed === true) effectAction(value, r);
    if (firstTime) firstTime = false;
  }

  r.schedule();
  return r.getDisposer();
}

function wrapErrorHandler(errorHandler, baseFn) {
  return function () {
    try {
      return baseFn.apply(this, arguments);
    } catch (e) {
      errorHandler.call(this, e);
    }
  };
}

function onBecomeObserved(thing, arg2, arg3) {
  return interceptHook("onBecomeObserved", thing, arg2, arg3);
}

function onBecomeUnobserved(thing, arg2, arg3) {
  return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}

function interceptHook(hook, thing, arg2, arg3) {
  var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
  var cb = typeof arg3 === "function" ? arg3 : arg2;
  var orig = atom[hook];
  if (typeof orig !== "function") return fail( true && "Not an atom that can be (un)observed");

  atom[hook] = function () {
    orig.call(this);
    cb.call(this);
  };

  return function () {
    atom[hook] = orig;
  };
}

function configure(options) {
  var enforceActions = options.enforceActions,
      computedRequiresReaction = options.computedRequiresReaction,
      computedConfigurable = options.computedConfigurable,
      disableErrorBoundaries = options.disableErrorBoundaries,
      arrayBuffer = options.arrayBuffer,
      reactionScheduler = options.reactionScheduler,
      reactionRequiresObservable = options.reactionRequiresObservable,
      observableRequiresReaction = options.observableRequiresReaction;

  if (options.isolateGlobalState === true) {
    isolateGlobalState();
  }

  if (enforceActions !== undefined) {
    if (typeof enforceActions === "boolean" || enforceActions === "strict") deprecated("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
    var ea = void 0;

    switch (enforceActions) {
      case true:
      case "observed":
        ea = true;
        break;

      case false:
      case "never":
        ea = false;
        break;

      case "strict":
      case "always":
        ea = "strict";
        break;

      default:
        fail("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
    }

    globalState.enforceActions = ea;
    globalState.allowStateChanges = ea === true || ea === "strict" ? false : true;
  }

  if (computedRequiresReaction !== undefined) {
    globalState.computedRequiresReaction = !!computedRequiresReaction;
  }

  if (reactionRequiresObservable !== undefined) {
    globalState.reactionRequiresObservable = !!reactionRequiresObservable;
  }

  if (observableRequiresReaction !== undefined) {
    globalState.observableRequiresReaction = !!observableRequiresReaction;
    globalState.allowStateReads = !globalState.observableRequiresReaction;
  }

  if (computedConfigurable !== undefined) {
    globalState.computedConfigurable = !!computedConfigurable;
  }

  if (disableErrorBoundaries !== undefined) {
    if (disableErrorBoundaries === true) console.warn("WARNING: Debug feature only. MobX will NOT recover from errors if this is on.");
    globalState.disableErrorBoundaries = !!disableErrorBoundaries;
  }

  if (typeof arrayBuffer === "number") {
    reserveArrayBuffer(arrayBuffer);
  }

  if (reactionScheduler) {
    setReactionScheduler(reactionScheduler);
  }
}

function decorate(thing, decorators) {
  if ( true && !isPlainObject(decorators)) fail("Decorators should be a key value map");
  var target = typeof thing === "function" ? thing.prototype : thing;

  var _loop_1 = function _loop_1(prop) {
    var propertyDecorators = decorators[prop];

    if (!Array.isArray(propertyDecorators)) {
      propertyDecorators = [propertyDecorators];
    } // prettier-ignore


    if ( true && !propertyDecorators.every(function (decorator) {
      return typeof decorator === "function";
    })) fail("Decorate: expected a decorator function or array of decorator functions for '" + prop + "'");
    var descriptor = Object.getOwnPropertyDescriptor(target, prop);
    var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) {
      return decorator(target, prop, accDescriptor);
    }, descriptor);
    if (newDescriptor) Object.defineProperty(target, prop, newDescriptor);
  };

  for (var prop in decorators) {
    _loop_1(prop);
  }

  return thing;
}

function extendShallowObservable(target, properties, decorators) {
  deprecated("'extendShallowObservable' is deprecated, use 'extendObservable(target, props, { deep: false })' instead");
  return extendObservable(target, properties, decorators, shallowCreateObservableOptions);
}

function extendObservable(target, properties, decorators, options) {
  if (true) {
    invariant(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
    invariant(Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target) === "object", "'extendObservable' expects an object as first argument");
    invariant(!isObservableMap(target), "'extendObservable' should not be used on maps, use map.merge instead");
    invariant(!isObservable(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
    if (decorators) for (var key in decorators) {
      if (!(key in properties)) fail("Trying to declare a decorator for unspecified property '" + key + "'");
    }
  }

  options = asCreateObservableOptions(options);
  var defaultDecorator = options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
  initializeInstance(target);
  asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props

  startBatch();

  try {
    var keys = Object.getOwnPropertyNames(properties);

    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      var descriptor = Object.getOwnPropertyDescriptor(properties, key);

      if (true) {
        if (isComputed(descriptor.value)) fail("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
      }

      var decorator = decorators && key in decorators ? decorators[key] : descriptor.get ? computedDecorator : defaultDecorator;
      if ( true && typeof decorator !== "function") return fail("Not a valid decorator for '" + key + "', got: " + decorator);
      var resultDescriptor = decorator(target, key, descriptor, true);
      if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
      ) Object.defineProperty(target, key, resultDescriptor);
    }
  } finally {
    endBatch();
  }

  return target;
}

function getDependencyTree(thing, property) {
  return nodeToDependencyTree(getAtom(thing, property));
}

function nodeToDependencyTree(node) {
  var result = {
    name: node.name
  };
  if (node.observing && node.observing.length > 0) result.dependencies = unique(node.observing).map(nodeToDependencyTree);
  return result;
}

function getObserverTree(thing, property) {
  return nodeToObserverTree(getAtom(thing, property));
}

function nodeToObserverTree(node) {
  var result = {
    name: node.name
  };
  if (hasObservers(node)) result.observers = getObservers(node).map(nodeToObserverTree);
  return result;
}

var generatorId = 0;

function FlowCancellationError() {
  this.message = "FLOW_CANCELLED";
}

FlowCancellationError.prototype = Object.create(Error.prototype);

function isFlowCancellationError(error) {
  return error instanceof FlowCancellationError;
}

function flow(generator) {
  if (arguments.length !== 1) fail( true && "Flow expects one 1 argument and cannot be used as decorator");
  var name = generator.name || "<unnamed flow>"; // Implementation based on https://github.com/tj/co/blob/master/index.js

  return function () {
    var ctx = this;
    var args = arguments;
    var runId = ++generatorId;
    var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
    var rejector;
    var pendingPromise = undefined;
    var res = new Promise(function (resolve, reject) {
      var stepId = 0;
      rejector = reject;

      function onFulfilled(res) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function onRejected(err) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function next(ret) {
        if (ret && typeof ret.then === "function") {
          // an async iterator
          ret.then(next, reject);
          return;
        }

        if (ret.done) return resolve(ret.value);
        pendingPromise = Promise.resolve(ret.value);
        return pendingPromise.then(onFulfilled, onRejected);
      }

      onFulfilled(undefined); // kick off the process
    });
    res.cancel = action(name + " - runid: " + runId + " - cancel", function () {
      try {
        if (pendingPromise) cancelPromise(pendingPromise); // Finally block can return (or yield) stuff..

        var res_1 = gen.return(undefined); // eat anything that promise would do, it's cancelled!

        var yieldedPromise = Promise.resolve(res_1.value);
        yieldedPromise.then(noop, noop);
        cancelPromise(yieldedPromise); // maybe it can be cancelled :)
        // reject our original promise

        rejector(new FlowCancellationError());
      } catch (e) {
        rejector(e); // there could be a throwing finally block
      }
    });
    return res;
  };
}

function cancelPromise(promise) {
  if (typeof promise.cancel === "function") promise.cancel();
}

function interceptReads(thing, propOrHandler, handler) {
  var target;

  if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
    target = getAdministration(thing);
  } else if (isObservableObject(thing)) {
    if (typeof propOrHandler !== "string") return fail( true && "InterceptReads can only be used with a specific property, not with an object in general");
    target = getAdministration(thing, propOrHandler);
  } else {
    return fail( true && "Expected observable map, object or array as first array");
  }

  if (target.dehancer !== undefined) return fail( true && "An intercept reader was already established");
  target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
  return function () {
    target.dehancer = undefined;
  };
}

function intercept(thing, propOrHandler, handler) {
  if (typeof handler === "function") return interceptProperty(thing, propOrHandler, handler);else return interceptInterceptable(thing, propOrHandler);
}

function interceptInterceptable(thing, handler) {
  return getAdministration(thing).intercept(handler);
}

function interceptProperty(thing, property, handler) {
  return getAdministration(thing, property).intercept(handler);
}

function _isComputed(value, property) {
  if (value === null || value === undefined) return false;

  if (property !== undefined) {
    if (isObservableObject(value) === false) return false;
    if (!value.$mobx.values[property]) return false;
    var atom = getAtom(value, property);
    return isComputedValue(atom);
  }

  return isComputedValue(value);
}

function isComputed(value) {
  if (arguments.length > 1) return fail( true && "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
  return _isComputed(value);
}

function isComputedProp(value, propName) {
  if (typeof propName !== "string") return fail( true && "isComputed expected a property name as second argument");
  return _isComputed(value, propName);
}

function _isObservable(value, property) {
  if (value === null || value === undefined) return false;

  if (property !== undefined) {
    if ( true && (isObservableMap(value) || isObservableArray(value))) return fail("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");

    if (isObservableObject(value)) {
      var o = value.$mobx;
      return o.values && !!o.values[property];
    }

    return false;
  } // For first check, see #701


  return isObservableObject(value) || !!value.$mobx || isAtom(value) || isReaction(value) || isComputedValue(value);
}

function isObservable(value) {
  if (arguments.length !== 1) fail( true && "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
  return _isObservable(value);
}

function isObservableProp(value, propName) {
  if (typeof propName !== "string") return fail( true && "expected a property name as second argument");
  return _isObservable(value, propName);
}

function keys(obj) {
  if (isObservableObject(obj)) {
    return obj.$mobx.getKeys();
  }

  if (isObservableMap(obj)) {
    return iteratorToArray(obj.keys());
  }

  if (isObservableSet(obj)) {
    return iteratorToArray(obj.keys());
  }

  if (isObservableArray(obj)) {
    return obj.map(function (_, index) {
      return index;
    });
  }

  return fail( true && "'keys()' can only be used on observable objects, arrays, sets and maps");
}

function values(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return obj[key];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return obj.get(key);
    });
  }

  if (isObservableSet(obj)) {
    return iteratorToArray(obj.values());
  }

  if (isObservableArray(obj)) {
    return obj.slice();
  }

  return fail( true && "'values()' can only be used on observable objects, arrays, sets and maps");
}

function entries(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj[key]];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj.get(key)];
    });
  }

  if (isObservableSet(obj)) {
    return iteratorToArray(obj.entries());
  }

  if (isObservableArray(obj)) {
    return obj.map(function (key, index) {
      return [index, key];
    });
  }

  return fail( true && "'entries()' can only be used on observable objects, arrays and maps");
}

function set(obj, key, value) {
  if (arguments.length === 2 && !isObservableSet(obj)) {
    startBatch();
    var values_1 = key;

    try {
      for (var key_1 in values_1) {
        set(obj, key_1, values_1[key_1]);
      }
    } finally {
      endBatch();
    }

    return;
  }

  if (isObservableObject(obj)) {
    var adm = obj.$mobx;
    var existingObservable = adm.values[key];

    if (existingObservable) {
      adm.write(obj, key, value);
    } else {
      defineObservableProperty(obj, key, value, adm.defaultEnhancer);
    }
  } else if (isObservableMap(obj)) {
    obj.set(key, value);
  } else if (isObservableSet(obj)) {
    obj.add(key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    invariant(key >= 0, "Not a valid index: '" + key + "'");
    startBatch();
    if (key >= obj.length) obj.length = key + 1;
    obj[key] = value;
    endBatch();
  } else {
    return fail( true && "'set()' can only be used on observable objects, arrays and maps");
  }
}

function remove(obj, key) {
  if (isObservableObject(obj)) {
    obj.$mobx.remove(key);
  } else if (isObservableMap(obj)) {
    obj.delete(key);
  } else if (isObservableSet(obj)) {
    obj.delete(key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    invariant(key >= 0, "Not a valid index: '" + key + "'");
    obj.splice(key, 1);
  } else {
    return fail( true && "'remove()' can only be used on observable objects, arrays and maps");
  }
}

function has(obj, key) {
  if (isObservableObject(obj)) {
    // return keys(obj).indexOf(key) >= 0
    var adm = getAdministration(obj);
    adm.getKeys(); // make sure we get notified of key changes, but for performance, use the values map to look up existence

    return !!adm.values[key];
  } else if (isObservableMap(obj)) {
    return obj.has(key);
  } else if (isObservableSet(obj)) {
    return obj.has(key);
  } else if (isObservableArray(obj)) {
    return key >= 0 && key < obj.length;
  } else {
    return fail( true && "'has()' can only be used on observable objects, arrays and maps");
  }
}

function get(obj, key) {
  if (!has(obj, key)) return undefined;

  if (isObservableObject(obj)) {
    return obj[key];
  } else if (isObservableMap(obj)) {
    return obj.get(key);
  } else if (isObservableArray(obj)) {
    return obj[key];
  } else {
    return fail( true && "'get()' can only be used on observable objects, arrays and maps");
  }
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
  if (typeof cbOrFire === "function") return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);else return observeObservable(thing, propOrCb, cbOrFire);
}

function observeObservable(thing, listener, fireImmediately) {
  return getAdministration(thing).observe(listener, fireImmediately);
}

function observeObservableProperty(thing, property, listener, fireImmediately) {
  return getAdministration(thing, property).observe(listener, fireImmediately);
}

var defaultOptions = {
  detectCycles: true,
  exportMapsAsObjects: true,
  recurseEverything: false
};

function cache(map, key, value, options) {
  if (options.detectCycles) map.set(key, value);
  return value;
}

function toJSHelper(source, options, __alreadySeen) {
  if (!options.recurseEverything && !isObservable(source)) return source;
  if (Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(source) !== "object") return source; // Directly return null if source is null

  if (source === null) return null; // Directly return the Date object itself if contained in the observable

  if (source instanceof Date) return source;
  if (isObservableValue(source)) return toJSHelper(source.get(), options, __alreadySeen); // make sure we track the keys of the object

  if (isObservable(source)) keys(source);
  var detectCycles = options.detectCycles === true;

  if (detectCycles && source !== null && __alreadySeen.has(source)) {
    return __alreadySeen.get(source);
  }

  if (isObservableArray(source) || Array.isArray(source)) {
    var res_1 = cache(__alreadySeen, source, [], options);
    var toAdd = source.map(function (value) {
      return toJSHelper(value, options, __alreadySeen);
    });
    res_1.length = toAdd.length;

    for (var i = 0, l = toAdd.length; i < l; i++) {
      res_1[i] = toAdd[i];
    }

    return res_1;
  }

  if (isObservableSet(source) || Object.getPrototypeOf(source) === Set.prototype) {
    if (options.exportMapsAsObjects === false) {
      var res_2 = cache(__alreadySeen, source, new Set(), options);
      source.forEach(function (value) {
        res_2.add(toJSHelper(value, options, __alreadySeen));
      });
      return res_2;
    } else {
      var res_3 = cache(__alreadySeen, source, [], options);
      source.forEach(function (value) {
        res_3.push(toJSHelper(value, options, __alreadySeen));
      });
      return res_3;
    }
  }

  if (isObservableMap(source) || Object.getPrototypeOf(source) === Map.prototype) {
    if (options.exportMapsAsObjects === false) {
      var res_4 = cache(__alreadySeen, source, new Map(), options);
      source.forEach(function (value, key) {
        res_4.set(key, toJSHelper(value, options, __alreadySeen));
      });
      return res_4;
    } else {
      var res_5 = cache(__alreadySeen, source, {}, options);
      source.forEach(function (value, key) {
        res_5[key] = toJSHelper(value, options, __alreadySeen);
      });
      return res_5;
    }
  } // Fallback to the situation that source is an ObservableObject or a plain object


  var res = cache(__alreadySeen, source, {}, options);

  for (var key in source) {
    res[key] = toJSHelper(source[key], options, __alreadySeen);
  }

  return res;
}

function toJS(source, options) {
  // backward compatibility
  if (typeof options === "boolean") options = {
    detectCycles: options
  };
  if (!options) options = defaultOptions;
  options.detectCycles = options.detectCycles === undefined ? options.recurseEverything === true : options.detectCycles === true;

  var __alreadySeen;

  if (options.detectCycles) __alreadySeen = new Map();
  return toJSHelper(source, options, __alreadySeen);
}

function trace() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var enterBreakPoint = false;
  if (typeof args[args.length - 1] === "boolean") enterBreakPoint = args.pop();
  var derivation = getAtomFromArgs(args);

  if (!derivation) {
    return fail( true && "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
  }

  if (derivation.isTracing === TraceMode.NONE) {
    console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
  }

  derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}

function getAtomFromArgs(args) {
  switch (args.length) {
    case 0:
      return globalState.trackingDerivation;

    case 1:
      return getAtom(args[0]);

    case 2:
      return getAtom(args[0], args[1]);
  }
}
/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */


function transaction(action, thisArg) {
  if (thisArg === void 0) {
    thisArg = undefined;
  }

  startBatch();

  try {
    return action.apply(thisArg);
  } finally {
    endBatch();
  }
}

function when(predicate, arg1, arg2) {
  if (arguments.length === 1 || arg1 && Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arg1) === "object") return whenPromise(predicate, arg1);
  return _when(predicate, arg1, arg2 || {});
}

function _when(predicate, effect, opts) {
  var timeoutHandle;

  if (typeof opts.timeout === "number") {
    timeoutHandle = setTimeout(function () {
      if (!disposer.$mobx.isDisposed) {
        disposer();
        var error = new Error("WHEN_TIMEOUT");
        if (opts.onError) opts.onError(error);else throw error;
      }
    }, opts.timeout);
  }

  opts.name = opts.name || "When@" + getNextId();
  var effectAction = createAction(opts.name + "-effect", effect);
  var disposer = autorun(function (r) {
    if (predicate()) {
      r.dispose();
      if (timeoutHandle) clearTimeout(timeoutHandle);
      effectAction();
    }
  }, opts);
  return disposer;
}

function whenPromise(predicate, opts) {
  if ( true && opts && opts.onError) return fail("the options 'onError' and 'promise' cannot be combined");
  var cancel;
  var res = new Promise(function (resolve, reject) {
    var disposer = _when(predicate, resolve, _assign(_assign({}, opts), {
      onError: reject
    }));

    cancel = function cancel() {
      disposer();
      reject("WHEN_CANCELLED");
    };
  });
  res.cancel = cancel;
  return res;
}

function hasInterceptors(interceptable) {
  return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}

function registerInterceptor(interceptable, handler) {
  var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
  interceptors.push(handler);
  return once(function () {
    var idx = interceptors.indexOf(handler);
    if (idx !== -1) interceptors.splice(idx, 1);
  });
}

function interceptChange(interceptable, change) {
  var prevU = untrackedStart();

  try {
    var interceptors = interceptable.interceptors;
    if (interceptors) for (var i = 0, l = interceptors.length; i < l; i++) {
      change = interceptors[i](change);
      invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
      if (!change) break;
    }
    return change;
  } finally {
    untrackedEnd(prevU);
  }
}

function hasListeners(listenable) {
  return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}

function registerListener(listenable, handler) {
  var listeners = listenable.changeListeners || (listenable.changeListeners = []);
  listeners.push(handler);
  return once(function () {
    var idx = listeners.indexOf(handler);
    if (idx !== -1) listeners.splice(idx, 1);
  });
}

function notifyListeners(listenable, change) {
  var prevU = untrackedStart();
  var listeners = listenable.changeListeners;
  if (!listeners) return;
  listeners = listeners.slice();

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](change);
  }

  untrackedEnd(prevU);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
// Detects bug in safari 9.1.1 (or iOS 9 safari mobile). See #364

var safariPrototypeSetterInheritanceBug = function () {
  var v = false;
  var p = {};
  Object.defineProperty(p, "0", {
    set: function set() {
      v = true;
    }
  });
  Object.create(p)["0"] = 1;
  return v === false;
}();
/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */


var OBSERVABLE_ARRAY_BUFFER_SIZE = 0; // Typescript workaround to make sure ObservableArray extends Array

var StubArray = function () {
  function StubArray() {}

  return StubArray;
}();

function inherit(ctor, proto) {
  if (typeof Object["setPrototypeOf"] !== "undefined") {
    Object["setPrototypeOf"](ctor.prototype, proto);
  } else if (typeof ctor.prototype.__proto__ !== "undefined") {
    ctor.prototype.__proto__ = proto;
  } else {
    ctor["prototype"] = proto;
  }
}

inherit(StubArray, Array.prototype); // Weex freeze Array.prototype
// Make them writeable and configurable in prototype chain
// https://github.com/alibaba/weex/pull/1529

if (Object.isFrozen(Array)) {
  ["constructor", "push", "shift", "concat", "pop", "unshift", "replace", "find", "findIndex", "splice", "reverse", "sort"].forEach(function (key) {
    Object.defineProperty(StubArray.prototype, key, {
      configurable: true,
      writable: true,
      value: Array.prototype[key]
    });
  });
}

var ObservableArrayAdministration = function () {
  function ObservableArrayAdministration(name, enhancer, array, owned) {
    this.array = array;
    this.owned = owned;
    this.values = [];
    this.lastKnownLength = 0;
    this.atom = new Atom(name || "ObservableArray@" + getNextId());

    this.enhancer = function (newV, oldV) {
      return enhancer(newV, oldV, name + "[..]");
    };
  }

  ObservableArrayAdministration.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  ObservableArrayAdministration.prototype.dehanceValues = function (values) {
    if (this.dehancer !== undefined && values.length > 0) return values.map(this.dehancer);
    return values;
  };

  ObservableArrayAdministration.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };

  ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }

    if (fireImmediately) {
      listener({
        object: this.array,
        type: "splice",
        index: 0,
        added: this.values.slice(),
        addedCount: this.values.length,
        removed: [],
        removedCount: 0
      });
    }

    return registerListener(this, listener);
  };

  ObservableArrayAdministration.prototype.getArrayLength = function () {
    this.atom.reportObserved();
    return this.values.length;
  };

  ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
    if (typeof newLength !== "number" || newLength < 0) throw new Error("[mobx.array] Out of range: " + newLength);
    var currentLength = this.values.length;
    if (newLength === currentLength) return;else if (newLength > currentLength) {
      var newItems = new Array(newLength - currentLength);

      for (var i = 0; i < newLength - currentLength; i++) {
        newItems[i] = undefined;
      } // No Array.fill everywhere...


      this.spliceWithArray(currentLength, 0, newItems);
    } else this.spliceWithArray(newLength, currentLength - newLength);
  }; // adds / removes the necessary numeric properties to this object


  ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
    if (oldLength !== this.lastKnownLength) throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
    this.lastKnownLength += delta;
    if (delta > 0 && oldLength + delta + 1 > OBSERVABLE_ARRAY_BUFFER_SIZE) reserveArrayBuffer(oldLength + delta + 1);
  };

  ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
    var _this = this;

    checkIfStateModificationsAreAllowed(this.atom);
    var length = this.values.length;
    if (index === undefined) index = 0;else if (index > length) index = length;else if (index < 0) index = Math.max(0, length + index);
    if (arguments.length === 1) deleteCount = length - index;else if (deleteCount === undefined || deleteCount === null) deleteCount = 0;else deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    if (newItems === undefined) newItems = EMPTY_ARRAY;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.array,
        type: "splice",
        index: index,
        removedCount: deleteCount,
        added: newItems
      });
      if (!change) return EMPTY_ARRAY;
      deleteCount = change.removedCount;
      newItems = change.added;
    }

    newItems = newItems.length === 0 ? newItems : newItems.map(function (v) {
      return _this.enhancer(v, undefined);
    });
    var lengthDelta = newItems.length - deleteCount;
    this.updateArrayLength(length, lengthDelta); // create or remove new entries

    var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
    if (deleteCount !== 0 || newItems.length !== 0) this.notifyArraySplice(index, newItems, res);
    return this.dehanceValues(res);
  };

  ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
    var _a;

    if (newItems.length < MAX_SPLICE_SIZE) {
      return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
    } else {
      var res = this.values.slice(index, index + deleteCount);
      this.values = this.values.slice(0, index).concat(newItems, this.values.slice(index + deleteCount));
      return res;
    }
  };

  ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
    var notifySpy = !this.owned && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      object: this.array,
      type: "update",
      index: index,
      newValue: newValue,
      oldValue: oldValue
    } : null;
    if (notifySpy) spyReportStart(_assign(_assign({}, change), {
      name: this.atom.name
    }));
    this.atom.reportChanged();
    if (notify) notifyListeners(this, change);
    if (notifySpy) spyReportEnd();
  };

  ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
    var notifySpy = !this.owned && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      object: this.array,
      type: "splice",
      index: index,
      removed: removed,
      added: added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;
    if (notifySpy) spyReportStart(_assign(_assign({}, change), {
      name: this.atom.name
    }));
    this.atom.reportChanged(); // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe

    if (notify) notifyListeners(this, change);
    if (notifySpy) spyReportEnd();
  };

  return ObservableArrayAdministration;
}();

var ObservableArray = function (_super) {
  __extends(ObservableArray, _super);

  function ObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) {
      name = "ObservableArray@" + getNextId();
    }

    if (owned === void 0) {
      owned = false;
    }

    var _this = _super.call(this) || this;

    var adm = new ObservableArrayAdministration(name, enhancer, _this, owned);
    addHiddenFinalProp(_this, "$mobx", adm);

    if (initialValues && initialValues.length) {
      var prev = allowStateChangesStart(true);

      _this.spliceWithArray(0, 0, initialValues);

      allowStateChangesEnd(prev);
    }

    if (safariPrototypeSetterInheritanceBug) {
      // Seems that Safari won't use numeric prototype setter untill any * numeric property is
      // defined on the instance. After that it works fine, even if this property is deleted.
      Object.defineProperty(adm.array, "0", ENTRY_0);
    }

    return _this;
  }

  ObservableArray.prototype.intercept = function (handler) {
    return this.$mobx.intercept(handler);
  };

  ObservableArray.prototype.observe = function (listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }

    return this.$mobx.observe(listener, fireImmediately);
  };

  ObservableArray.prototype.clear = function () {
    return this.splice(0);
  };

  ObservableArray.prototype.concat = function () {
    var arrays = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      arrays[_i] = arguments[_i];
    }

    this.$mobx.atom.reportObserved();
    return Array.prototype.concat.apply(this.peek(), arrays.map(function (a) {
      return isObservableArray(a) ? a.peek() : a;
    }));
  };

  ObservableArray.prototype.replace = function (newItems) {
    return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
  };
  /**
   * Converts this array back to a (shallow) javascript structure.
   * For a deep clone use mobx.toJS
   */


  ObservableArray.prototype.toJS = function () {
    return this.slice();
  };

  ObservableArray.prototype.toJSON = function () {
    // Used by JSON.stringify
    return this.toJS();
  };

  ObservableArray.prototype.peek = function () {
    this.$mobx.atom.reportObserved();
    return this.$mobx.dehanceValues(this.$mobx.values);
  }; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find


  ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
    if (fromIndex === void 0) {
      fromIndex = 0;
    }

    if (arguments.length === 3) deprecated("The array.find fromIndex argument to find will not be supported anymore in the next major");
    var idx = this.findIndex.apply(this, arguments);
    return idx === -1 ? undefined : this.get(idx);
  }; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex


  ObservableArray.prototype.findIndex = function (predicate, thisArg, fromIndex) {
    if (fromIndex === void 0) {
      fromIndex = 0;
    }

    if (arguments.length === 3) deprecated("The array.findIndex fromIndex argument to find will not be supported anymore in the next major");
    var items = this.peek(),
        l = items.length;

    for (var i = fromIndex; i < l; i++) {
      if (predicate.call(thisArg, items[i], i, this)) return i;
    }

    return -1;
  };
  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */


  ObservableArray.prototype.splice = function (index, deleteCount) {
    var newItems = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      newItems[_i - 2] = arguments[_i];
    }

    switch (arguments.length) {
      case 0:
        return [];

      case 1:
        return this.$mobx.spliceWithArray(index);

      case 2:
        return this.$mobx.spliceWithArray(index, deleteCount);
    }

    return this.$mobx.spliceWithArray(index, deleteCount, newItems);
  };

  ObservableArray.prototype.spliceWithArray = function (index, deleteCount, newItems) {
    return this.$mobx.spliceWithArray(index, deleteCount, newItems);
  };

  ObservableArray.prototype.push = function () {
    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    var adm = this.$mobx;
    adm.spliceWithArray(adm.values.length, 0, items);
    return adm.values.length;
  };

  ObservableArray.prototype.pop = function () {
    return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
  };

  ObservableArray.prototype.shift = function () {
    return this.splice(0, 1)[0];
  };

  ObservableArray.prototype.unshift = function () {
    var items = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      items[_i] = arguments[_i];
    }

    var adm = this.$mobx;
    adm.spliceWithArray(0, 0, items);
    return adm.values.length;
  };

  ObservableArray.prototype.reverse = function () {
    // reverse by default mutates in place before returning the result
    // which makes it both a 'derivation' and a 'mutation'.
    // so we deviate from the default and just make it an dervitation
    var clone = this.slice();
    return clone.reverse.apply(clone, arguments);
  };

  ObservableArray.prototype.sort = function (compareFn) {
    // sort by default mutates in place before returning the result
    // which goes against all good practices. Let's not change the array in place!
    var clone = this.slice();
    return clone.sort.apply(clone, arguments);
  };

  ObservableArray.prototype.remove = function (value) {
    var idx = this.$mobx.dehanceValues(this.$mobx.values).indexOf(value);

    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }

    return false;
  };

  ObservableArray.prototype.move = function (fromIndex, toIndex) {
    deprecated("observableArray.move is deprecated, use .slice() & .replace() instead");

    function checkIndex(index) {
      if (index < 0) {
        throw new Error("[mobx.array] Index out of bounds: " + index + " is negative");
      }

      var length = this.$mobx.values.length;

      if (index >= length) {
        throw new Error("[mobx.array] Index out of bounds: " + index + " is not smaller than " + length);
      }
    }

    checkIndex.call(this, fromIndex);
    checkIndex.call(this, toIndex);

    if (fromIndex === toIndex) {
      return;
    }

    var oldItems = this.$mobx.values;
    var newItems;

    if (fromIndex < toIndex) {
      newItems = __spread(oldItems.slice(0, fromIndex), oldItems.slice(fromIndex + 1, toIndex + 1), [oldItems[fromIndex]], oldItems.slice(toIndex + 1));
    } else {
      // toIndex < fromIndex
      newItems = __spread(oldItems.slice(0, toIndex), [oldItems[fromIndex]], oldItems.slice(toIndex, fromIndex), oldItems.slice(fromIndex + 1));
    }

    this.replace(newItems);
  }; // See #734, in case property accessors are unreliable...


  ObservableArray.prototype.get = function (index) {
    var impl = this.$mobx;

    if (impl) {
      if (index < impl.values.length) {
        impl.atom.reportObserved();
        return impl.dehanceValue(impl.values[index]);
      }

      console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + impl.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
    }

    return undefined;
  }; // See #734, in case property accessors are unreliable...


  ObservableArray.prototype.set = function (index, newValue) {
    var adm = this.$mobx;
    var values = adm.values;

    if (index < values.length) {
      // update at index in range
      checkIfStateModificationsAreAllowed(adm.atom);
      var oldValue = values[index];

      if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
          type: "update",
          object: this,
          index: index,
          newValue: newValue
        });
        if (!change) return;
        newValue = change.newValue;
      }

      newValue = adm.enhancer(newValue, oldValue);
      var changed = newValue !== oldValue;

      if (changed) {
        values[index] = newValue;
        adm.notifyArrayChildUpdate(index, newValue, oldValue);
      }
    } else if (index === values.length) {
      // add a new item
      adm.spliceWithArray(index, 0, [newValue]);
    } else {
      // out of bounds
      throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
    }
  };

  return ObservableArray;
}(StubArray);

declareIterator(ObservableArray.prototype, function () {
  this.$mobx.atom.reportObserved();
  var self = this;
  var nextIndex = 0;
  return makeIterable({
    next: function next() {
      return nextIndex < self.length ? {
        value: self[nextIndex++],
        done: false
      } : {
        done: true,
        value: undefined
      };
    }
  });
});
Object.defineProperty(ObservableArray.prototype, "length", {
  enumerable: false,
  configurable: true,
  get: function get() {
    return this.$mobx.getArrayLength();
  },
  set: function set(newLength) {
    this.$mobx.setArrayLength(newLength);
  }
});
addHiddenProp(ObservableArray.prototype, toStringTagSymbol(), "Array");
["indexOf", "join", "lastIndexOf", "slice", "toString", "toLocaleString"].forEach(function (funcName) {
  var baseFunc = Array.prototype[funcName];
  invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
  addHiddenProp(ObservableArray.prototype, funcName, function () {
    return baseFunc.apply(this.peek(), arguments);
  });
});
["every", "filter", //"find", // implemented individually (IE support)
//"findIndex", // implemented individually (IE support)
//"flatMap", // not supported
"forEach", "map", "some"].forEach(function (funcName) {
  var baseFunc = Array.prototype[funcName];
  invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
  addHiddenProp(ObservableArray.prototype, funcName, function (callback, thisArg) {
    var _this = this;

    var adm = this.$mobx;
    adm.atom.reportObserved();
    var dehancedValues = adm.dehanceValues(adm.values);
    return dehancedValues[funcName](function (element, index) {
      return callback.call(thisArg, element, index, _this);
    }, thisArg);
  });
});
["reduce", "reduceRight"].forEach(function (funcName) {
  addHiddenProp(ObservableArray.prototype, funcName, function () {
    var _this = this;

    var adm = this.$mobx;
    adm.atom.reportObserved(); // #2432 - reduce behavior depends on arguments.length

    var callback = arguments[0];

    arguments[0] = function (accumulator, currentValue, index) {
      currentValue = adm.dehanceValue(currentValue);
      return callback(accumulator, currentValue, index, _this);
    };

    return adm.values[funcName].apply(adm.values, arguments);
  });
});
/**
 * We don't want those to show up in `for (const key in ar)` ...
 */

makeNonEnumerable(ObservableArray.prototype, ["constructor", "intercept", "observe", "clear", "concat", "get", "replace", "toJS", "toJSON", "peek", "find", "findIndex", "splice", "spliceWithArray", "push", "pop", "set", "shift", "unshift", "reverse", "sort", "remove", "move", "toString", "toLocaleString"]); // See #364

var ENTRY_0 = createArrayEntryDescriptor(0);

function createArrayEntryDescriptor(index) {
  return {
    enumerable: false,
    configurable: false,
    get: function get() {
      return this.get(index);
    },
    set: function set(value) {
      this.set(index, value);
    }
  };
}

function createArrayBufferItem(index) {
  Object.defineProperty(ObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}

function reserveArrayBuffer(max) {
  for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++) {
    createArrayBufferItem(index);
  }

  OBSERVABLE_ARRAY_BUFFER_SIZE = max;
}

reserveArrayBuffer(1000);
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);

function isObservableArray(thing) {
  return isObject(thing) && isObservableArrayAdministration(thing.$mobx);
}

var ObservableMapMarker = {};

var ObservableMap = function () {
  function ObservableMap(initialData, enhancer, name) {
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }

    if (name === void 0) {
      name = "ObservableMap@" + getNextId();
    }

    this.enhancer = enhancer;
    this.name = name;
    this.$mobx = ObservableMapMarker;
    this._keysAtom = createAtom(this.name + ".keys()");

    if (typeof Map !== "function") {
      throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
    }

    this._data = new Map();
    this._hasMap = new Map();
    this.merge(initialData);
  }

  ObservableMap.prototype._has = function (key) {
    return this._data.has(key);
  };

  ObservableMap.prototype.has = function (key) {
    var _this = this;

    if (!globalState.trackingDerivation) return this._has(key);

    var entry = this._hasMap.get(key);

    if (!entry) {
      // todo: replace with atom (breaking change)
      var newEntry = entry = new ObservableValue(this._has(key), referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false);

      this._hasMap.set(key, newEntry);

      onBecomeUnobserved(newEntry, function () {
        return _this._hasMap.delete(key);
      });
    }

    return entry.get();
  };

  ObservableMap.prototype.set = function (key, value) {
    var hasKey = this._has(key);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: hasKey ? "update" : "add",
        object: this,
        newValue: value,
        name: key
      });
      if (!change) return this;
      value = change.newValue;
    }

    if (hasKey) {
      this._updateValue(key, value);
    } else {
      this._addValue(key, value);
    }

    return this;
  };

  ObservableMap.prototype.delete = function (key) {
    var _this = this;

    checkIfStateModificationsAreAllowed(this._keysAtom);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: "delete",
        object: this,
        name: key
      });
      if (!change) return false;
    }

    if (this._has(key)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        type: "delete",
        object: this,
        oldValue: this._data.get(key).value,
        name: key
      } : null;
      if (notifySpy) spyReportStart(_assign(_assign({}, change), {
        name: this.name,
        key: key
      }));
      transaction(function () {
        _this._keysAtom.reportChanged();

        _this._updateHasMapEntry(key, false);

        var observable = _this._data.get(key);

        observable.setNewValue(undefined);

        _this._data.delete(key);
      });
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
      return true;
    }

    return false;
  };

  ObservableMap.prototype._updateHasMapEntry = function (key, value) {
    var entry = this._hasMap.get(key);

    if (entry) {
      entry.setNewValue(value);
    }
  };

  ObservableMap.prototype._updateValue = function (key, newValue) {
    var observable = this._data.get(key);

    newValue = observable.prepareNewValue(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        type: "update",
        object: this,
        oldValue: observable.value,
        name: key,
        newValue: newValue
      } : null;
      if (notifySpy) spyReportStart(_assign(_assign({}, change), {
        name: this.name,
        key: key
      }));
      observable.setNewValue(newValue);
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
    }
  };

  ObservableMap.prototype._addValue = function (key, newValue) {
    var _this = this;

    checkIfStateModificationsAreAllowed(this._keysAtom);
    transaction(function () {
      var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + stringifyKey(key), false);

      _this._data.set(key, observable);

      newValue = observable.value; // value might have been changed

      _this._updateHasMapEntry(key, true);

      _this._keysAtom.reportChanged();
    });
    var notifySpy = isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      type: "add",
      object: this,
      name: key,
      newValue: newValue
    } : null;
    if (notifySpy) spyReportStart(_assign(_assign({}, change), {
      name: this.name,
      key: key
    }));
    if (notify) notifyListeners(this, change);
    if (notifySpy) spyReportEnd();
  };

  ObservableMap.prototype.get = function (key) {
    if (this.has(key)) return this.dehanceValue(this._data.get(key).get());
    return this.dehanceValue(undefined);
  };

  ObservableMap.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  ObservableMap.prototype.keys = function () {
    this._keysAtom.reportObserved();

    return this._data.keys();
  };

  ObservableMap.prototype.values = function () {
    var self = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _a = keys.next(),
            done = _a.done,
            value = _a.value;

        return {
          done: done,
          value: done ? undefined : self.get(value)
        };
      }
    });
  };

  ObservableMap.prototype.entries = function () {
    var self = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _a = keys.next(),
            done = _a.done,
            value = _a.value;

        return {
          done: done,
          value: done ? undefined : [value, self.get(value)]
        };
      }
    });
  };

  ObservableMap.prototype.forEach = function (callback, thisArg) {
    var _this = this;

    this._keysAtom.reportObserved();

    this._data.forEach(function (_, key) {
      return callback.call(thisArg, _this.get(key), key, _this);
    });
  };
  /** Merge another object into this object, returns this. */


  ObservableMap.prototype.merge = function (other) {
    var _this = this;

    if (isObservableMap(other)) {
      other = other.toJS();
    }

    transaction(function () {
      var prev = allowStateChangesStart(true);

      try {
        if (isPlainObject(other)) Object.keys(other).forEach(function (key) {
          return _this.set(key, other[key]);
        });else if (Array.isArray(other)) other.forEach(function (_a) {
          var _b = __read(_a, 2),
              key = _b[0],
              value = _b[1];

          return _this.set(key, value);
        });else if (isES6Map(other)) {
          if (other.constructor !== Map) fail("Cannot initialize from classes that inherit from Map: " + other.constructor.name); // prettier-ignore
          else other.forEach(function (value, key) {
            return _this.set(key, value);
          });
        } else if (other !== null && other !== undefined) fail("Cannot initialize map from " + other);
      } finally {
        allowStateChangesEnd(prev);
      }
    });
    return this;
  };

  ObservableMap.prototype.clear = function () {
    var _this = this;

    transaction(function () {
      untracked(function () {
        // Note we are concurrently reading/deleting the same keys
        // forEach handles this properly
        _this._data.forEach(function (_, key) {
          return _this.delete(key);
        });
      });
    });
  };

  ObservableMap.prototype.replace = function (values) {
    var _this = this; // Implementation requirements:
    // - respect ordering of replacement map
    // - allow interceptors to run and potentially prevent individual operations
    // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
    // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
    // - note that result map may differ from replacement map due to the interceptors


    transaction(function () {
      // Convert to map so we can do quick key lookups
      var replacementMap = convertToMap(values);
      var orderedData = new Map(); // Used for optimization

      var keysReportChangedCalled = false; // Delete keys that don't exist in replacement map
      // if the key deletion is prevented by interceptor
      // add entry at the beginning of the result map

      forOf(_this._data.keys(), function (key) {
        // Concurrently iterating/deleting keys
        // iterator should handle this correctly
        if (!replacementMap.has(key)) {
          var deleted = _this.delete(key); // Was the key removed?


          if (deleted) {
            // _keysAtom.reportChanged() was already called
            keysReportChangedCalled = true;
          } else {
            // Delete prevented by interceptor
            var value = _this._data.get(key);

            orderedData.set(key, value);
          }
        }
      }); // Merge entries

      forOf(replacementMap.entries(), function (_a) {
        var _b = __read(_a, 2),
            key = _b[0],
            value = _b[1]; // We will want to know whether a new key is added


        var keyExisted = _this._data.has(key); // Add or update value


        _this.set(key, value); // The addition could have been prevent by interceptor


        if (_this._data.has(key)) {
          // The update could have been prevented by interceptor
          // and also we want to preserve existing values
          // so use value from _data map (instead of replacement map)
          var value_1 = _this._data.get(key);

          orderedData.set(key, value_1); // Was a new key added?

          if (!keyExisted) {
            // _keysAtom.reportChanged() was already called
            keysReportChangedCalled = true;
          }
        }
      }); // Check for possible key order change

      if (!keysReportChangedCalled) {
        if (_this._data.size !== orderedData.size) {
          // If size differs, keys are definitely modified
          _this._keysAtom.reportChanged();
        } else {
          var iter1 = _this._data.keys();

          var iter2 = orderedData.keys();
          var next1 = iter1.next();
          var next2 = iter2.next();

          while (!next1.done) {
            if (next1.value !== next2.value) {
              _this._keysAtom.reportChanged();

              break;
            }

            next1 = iter1.next();
            next2 = iter2.next();
          }
        }
      } // Use correctly ordered map


      _this._data = orderedData;
    });
    return this;
  };

  Object.defineProperty(ObservableMap.prototype, "size", {
    get: function get() {
      this._keysAtom.reportObserved();

      return this._data.size;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Returns a plain object that represents this map.
   * Note that all the keys being stringified.
   * If there are duplicating keys after converting them to strings, behaviour is undetermined.
   */

  ObservableMap.prototype.toPOJO = function () {
    var _this = this;

    var res = {};
    this.forEach(function (_, key) {
      return res[Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(key) === "symbol" ? key : stringifyKey(key)] = _this.get(key);
    });
    return res;
  };
  /**
   * Returns a shallow non observable object clone of this map.
   * Note that the values migth still be observable. For a deep clone use mobx.toJS.
   */


  ObservableMap.prototype.toJS = function () {
    return new Map(this);
  };

  ObservableMap.prototype.toJSON = function () {
    // Used by JSON.stringify
    return this.toPOJO();
  };

  ObservableMap.prototype.toString = function () {
    var _this = this;

    return this.name + "[{ " + iteratorToArray(this.keys()).map(function (key) {
      return stringifyKey(key) + ": " + ("" + _this.get(key));
    }).join(", ") + " }]";
  };
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */


  ObservableMap.prototype.observe = function (listener, fireImmediately) {
     true && invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
    return registerListener(this, listener);
  };

  ObservableMap.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };

  return ObservableMap;
}();

function stringifyKey(key) {
  if (key && key.toString) return key.toString();else return new String(key).toString();
}

declareIterator(ObservableMap.prototype, function () {
  return this.entries();
});
addHiddenFinalProp(ObservableMap.prototype, toStringTagSymbol(), "Map");
/* 'var' fixes small-build issue */

var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);
var ObservableSetMarker = {};

var ObservableSet = function () {
  function ObservableSet(initialData, enhancer, name) {
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }

    if (name === void 0) {
      name = "ObservableSet@" + getNextId();
    }

    this.name = name;
    this.$mobx = ObservableSetMarker;
    this._data = new Set();
    this._atom = createAtom(this.name);

    if (typeof Set !== "function") {
      throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
    }

    this.enhancer = function (newV, oldV) {
      return enhancer(newV, oldV, name);
    };

    if (initialData) {
      this.replace(initialData);
    }
  }

  ObservableSet.prototype.dehanceValue = function (value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  ObservableSet.prototype.clear = function () {
    var _this = this;

    transaction(function () {
      untracked(function () {
        _this._data.forEach(function (value) {
          _this.delete(value);
        });
      });
    });
  };

  ObservableSet.prototype.forEach = function (callbackFn, thisArg) {
    var _this = this;

    this._atom.reportObserved();

    this._data.forEach(function (value) {
      callbackFn.call(thisArg, value, value, _this);
    });
  };

  Object.defineProperty(ObservableSet.prototype, "size", {
    get: function get() {
      this._atom.reportObserved();

      return this._data.size;
    },
    enumerable: true,
    configurable: true
  });

  ObservableSet.prototype.add = function (value) {
    var _this = this;

    checkIfStateModificationsAreAllowed(this._atom);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: "add",
        object: this,
        newValue: value
      });
      if (!change) return this; // TODO: ideally, value = change.value would be done here, so that values can be
      // changed by interceptor. Same applies for other Set and Map api's.
    }

    if (!this.has(value)) {
      transaction(function () {
        _this._data.add(_this.enhancer(value, undefined));

        _this._atom.reportChanged();
      });
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        type: "add",
        object: this,
        newValue: value
      } : null;
      if (notifySpy && "development" !== "production") spyReportStart(change);
      if (notify) notifyListeners(this, change);
      if (notifySpy && "development" !== "production") spyReportEnd();
    }

    return this;
  };

  ObservableSet.prototype.delete = function (value) {
    var _this = this;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: "delete",
        object: this,
        oldValue: value
      });
      if (!change) return false;
    }

    if (this.has(value)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        type: "delete",
        object: this,
        oldValue: value
      } : null;
      if (notifySpy && "development" !== "production") spyReportStart(_assign(_assign({}, change), {
        name: this.name
      }));
      transaction(function () {
        _this._atom.reportChanged();

        _this._data.delete(value);
      });
      if (notify) notifyListeners(this, change);
      if (notifySpy && "development" !== "production") spyReportEnd();
      return true;
    }

    return false;
  };

  ObservableSet.prototype.has = function (value) {
    this._atom.reportObserved();

    return this._data.has(this.dehanceValue(value));
  };

  ObservableSet.prototype.entries = function () {
    var nextIndex = 0;
    var keys = iteratorToArray(this.keys());
    var values = iteratorToArray(this.values());
    return makeIterable({
      next: function next() {
        var index = nextIndex;
        nextIndex += 1;
        return index < values.length ? {
          value: [keys[index], values[index]],
          done: false
        } : {
          done: true
        };
      }
    });
  };

  ObservableSet.prototype.keys = function () {
    return this.values();
  };

  ObservableSet.prototype.values = function () {
    this._atom.reportObserved();

    var self = this;
    var nextIndex = 0;
    var observableValues;

    if (this._data.values !== undefined) {
      observableValues = iteratorToArray(this._data.values());
    } else {
      // There is no values function in IE11
      observableValues = [];

      this._data.forEach(function (e) {
        return observableValues.push(e);
      });
    }

    return makeIterable({
      next: function next() {
        return nextIndex < observableValues.length ? {
          value: self.dehanceValue(observableValues[nextIndex++]),
          done: false
        } : {
          done: true
        };
      }
    });
  };

  ObservableSet.prototype.replace = function (other) {
    var _this = this;

    if (isObservableSet(other)) {
      other = other.toJS();
    }

    transaction(function () {
      var prev = allowStateChangesStart(true);

      try {
        if (Array.isArray(other)) {
          _this.clear();

          other.forEach(function (value) {
            return _this.add(value);
          });
        } else if (isES6Set(other)) {
          _this.clear();

          other.forEach(function (value) {
            return _this.add(value);
          });
        } else if (other !== null && other !== undefined) {
          fail("Cannot initialize set from " + other);
        }
      } finally {
        allowStateChangesEnd(prev);
      }
    });
    return this;
  };

  ObservableSet.prototype.observe = function (listener, fireImmediately) {
    // TODO 'fireImmediately' can be true?
     true && invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with sets.");
    return registerListener(this, listener);
  };

  ObservableSet.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };

  ObservableSet.prototype.toJS = function () {
    return new Set(this);
  };

  ObservableSet.prototype.toString = function () {
    return this.name + "[ " + iteratorToArray(this.keys()).join(", ") + " ]";
  };

  return ObservableSet;
}();

declareIterator(ObservableSet.prototype, function () {
  return this.values();
});
addHiddenFinalProp(ObservableSet.prototype, toStringTagSymbol(), "Set");
var isObservableSet = createInstanceofPredicate("ObservableSet", ObservableSet);

var ObservableObjectAdministration = function () {
  function ObservableObjectAdministration(target, name, defaultEnhancer) {
    this.target = target;
    this.name = name;
    this.defaultEnhancer = defaultEnhancer;
    this.values = {};
  }

  ObservableObjectAdministration.prototype.read = function (owner, key) {
    if (false) {}

    return this.values[key].get();
  };

  ObservableObjectAdministration.prototype.write = function (owner, key, newValue) {
    var instance = this.target;

    if (false) {}

    var observable = this.values[key];

    if (observable instanceof ComputedValue) {
      observable.set(newValue);
      return;
    } // intercept


    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: "update",
        object: instance,
        name: key,
        newValue: newValue
      });
      if (!change) return;
      newValue = change.newValue;
    }

    newValue = observable.prepareNewValue(newValue); // notify spy & observers

    if (newValue !== globalState.UNCHANGED) {
      var notify = hasListeners(this);
      var notifySpy = isSpyEnabled();
      var change = notify || notifySpy ? {
        type: "update",
        object: instance,
        oldValue: observable.value,
        name: key,
        newValue: newValue
      } : null;
      if (notifySpy) spyReportStart(_assign(_assign({}, change), {
        name: this.name,
        key: key
      }));
      observable.setNewValue(newValue);
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
    }
  };

  ObservableObjectAdministration.prototype.remove = function (key) {
    if (!this.values[key]) return;
    var target = this.target;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: target,
        name: key,
        type: "remove"
      });
      if (!change) return;
    }

    try {
      startBatch();
      var notify = hasListeners(this);
      var notifySpy = isSpyEnabled();
      var oldValue = this.values[key].get();
      if (this.keys) this.keys.remove(key);
      delete this.values[key];
      delete this.target[key];
      var change = notify || notifySpy ? {
        type: "remove",
        object: target,
        oldValue: oldValue,
        name: key
      } : null;
      if (notifySpy) spyReportStart(_assign(_assign({}, change), {
        name: this.name,
        key: key
      }));
      if (notify) notifyListeners(this, change);
      if (notifySpy) spyReportEnd();
    } finally {
      endBatch();
    }
  };

  ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
    /**
     * This happens if a property is accessed through the prototype chain, but the property was
     * declared directly as own property on the prototype.
     *
     * E.g.:
     * class A {
     * }
     * extendObservable(A.prototype, { x: 1 })
     *
     * classB extens A {
     * }
     * console.log(new B().x)
     *
     * It is unclear whether the property should be considered 'static' or inherited.
     * Either use `console.log(A.x)`
     * or: decorate(A, { x: observable })
     *
     * When using decorate, the property will always be redeclared as own property on the actual instance
     */
    console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
  };
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */


  ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
     true && invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
    return registerListener(this, callback);
  };

  ObservableObjectAdministration.prototype.intercept = function (handler) {
    return registerInterceptor(this, handler);
  };

  ObservableObjectAdministration.prototype.getKeys = function () {
    var _this = this;

    if (this.keys === undefined) {
      this.keys = new ObservableArray(Object.keys(this.values).filter(function (key) {
        return _this.values[key] instanceof ObservableValue;
      }), referenceEnhancer, "keys(" + this.name + ")", true);
    }

    return this.keys.slice();
  };

  return ObservableObjectAdministration;
}();

function asObservableObject(target, name, defaultEnhancer) {
  if (name === void 0) {
    name = "";
  }

  if (defaultEnhancer === void 0) {
    defaultEnhancer = deepEnhancer;
  }

  var adm = target.$mobx;
  if (adm) return adm;
   true && invariant(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
  if (!isPlainObject(target)) name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
  if (!name) name = "ObservableObject@" + getNextId();
  adm = new ObservableObjectAdministration(target, name, defaultEnhancer);
  addHiddenFinalProp(target, "$mobx", adm);
  return adm;
}

function defineObservableProperty(target, propName, newValue, enhancer) {
  var adm = asObservableObject(target);
  assertPropertyConfigurable(target, propName);

  if (hasInterceptors(adm)) {
    var change = interceptChange(adm, {
      object: target,
      name: propName,
      type: "add",
      newValue: newValue
    });
    if (!change) return;
    newValue = change.newValue;
  }

  var observable = adm.values[propName] = new ObservableValue(newValue, enhancer, adm.name + "." + propName, false);
  newValue = observable.value; // observableValue might have changed it

  Object.defineProperty(target, propName, generateObservablePropConfig(propName));
  if (adm.keys) adm.keys.push(propName);
  notifyPropertyAddition(adm, target, propName, newValue);
}

function defineComputedProperty(target, // which objects holds the observable and provides `this` context?
propName, options) {
  var adm = asObservableObject(target);
  options.name = adm.name + "." + propName;
  options.context = target;
  adm.values[propName] = new ComputedValue(options);
  Object.defineProperty(target, propName, generateComputedPropConfig(propName));
}

var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);

function generateObservablePropConfig(propName) {
  return observablePropertyConfigs[propName] || (observablePropertyConfigs[propName] = {
    configurable: true,
    enumerable: true,
    get: function get() {
      return this.$mobx.read(this, propName);
    },
    set: function set(v) {
      this.$mobx.write(this, propName, v);
    }
  });
}

function getAdministrationForComputedPropOwner(owner) {
  var adm = owner.$mobx;

  if (!adm) {
    // because computed props are declared on proty,
    // the current instance might not have been initialized yet
    initializeInstance(owner);
    return owner.$mobx;
  }

  return adm;
}

function generateComputedPropConfig(propName) {
  return computedPropertyConfigs[propName] || (computedPropertyConfigs[propName] = {
    configurable: globalState.computedConfigurable,
    enumerable: false,
    get: function get() {
      return getAdministrationForComputedPropOwner(this).read(this, propName);
    },
    set: function set(v) {
      getAdministrationForComputedPropOwner(this).write(this, propName, v);
    }
  });
}

function notifyPropertyAddition(adm, object, key, newValue) {
  var notify = hasListeners(adm);
  var notifySpy = isSpyEnabled();
  var change = notify || notifySpy ? {
    type: "add",
    object: object,
    name: key,
    newValue: newValue
  } : null;
  if (notifySpy) spyReportStart(_assign(_assign({}, change), {
    name: adm.name,
    key: key
  }));
  if (notify) notifyListeners(adm, change);
  if (notifySpy) spyReportEnd();
}

var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);

function isObservableObject(thing) {
  if (isObject(thing)) {
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance(thing);
    return isObservableObjectAdministration(thing.$mobx);
  }

  return false;
}

function getAtom(thing, property) {
  if (Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(thing) === "object" && thing !== null) {
    if (isObservableArray(thing)) {
      if (property !== undefined) fail( true && "It is not possible to get index atoms from arrays");
      return thing.$mobx.atom;
    }

    if (isObservableSet(thing)) {
      return thing.$mobx;
    }

    if (isObservableMap(thing)) {
      var anyThing = thing;
      if (property === undefined) return anyThing._keysAtom;

      var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);

      if (!observable) fail( true && "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
      return observable;
    } // Initializers run lazily when transpiling to babel, so make sure they are run...


    initializeInstance(thing);
    if (property && !thing.$mobx) thing[property]; // See #1072

    if (isObservableObject(thing)) {
      if (!property) return fail( true && "please specify a property");
      var observable = thing.$mobx.values[property];
      if (!observable) fail( true && "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
      return observable;
    }

    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
  } else if (typeof thing === "function") {
    if (isReaction(thing.$mobx)) {
      // disposer function
      return thing.$mobx;
    }
  }

  return fail( true && "Cannot obtain atom from " + thing);
}

function getAdministration(thing, property) {
  if (!thing) fail("Expecting some object");
  if (property !== undefined) return getAdministration(getAtom(thing, property));
  if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) return thing;
  if (isObservableMap(thing) || isObservableSet(thing)) return thing; // Initializers run lazily when transpiling to babel, so make sure they are run...

  initializeInstance(thing);
  if (thing.$mobx) return thing.$mobx;
  fail( true && "Cannot obtain administration from " + thing);
}

function getDebugName(thing, property) {
  var named;
  if (property !== undefined) named = getAtom(thing, property);else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) named = getAdministration(thing);else named = getAtom(thing); // valid for arrays as well

  return named.name;
}

var toString = Object.prototype.toString;

function deepEqual(a, b, depth) {
  if (depth === void 0) {
    depth = -1;
  }

  return eq(a, b, depth);
} // Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.


function eq(a, b, depth, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b; // `null` or `undefined` only equal to itself (strict comparison).

  if (a == null || b == null) return false; // `NaN`s are equivalent, but non-reflexive.

  if (a !== a) return b !== b; // Exhaust primitive checks

  var type = Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(a);

  if (type !== "function" && type !== "object" && Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(b) != "object") return false; // Unwrap any wrapped objects.

  a = unwrap(a);
  b = unwrap(b); // Compare `[[Class]]` names.

  var className = toString.call(a);
  if (className !== toString.call(b)) return false;

  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case "[object RegExp]": // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')

    case "[object String]":
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return "" + a === "" + b;

    case "[object Number]":
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b; // An `egal` comparison is performed for other numeric values.

      return +a === 0 ? 1 / +a === 1 / b : +a === +b;

    case "[object Date]":
    case "[object Boolean]":
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;

    case "[object Symbol]":
      return (// eslint-disable-next-line
        typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b)
      );
  }

  var areArrays = className === "[object Array]";

  if (!areArrays) {
    if (Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(a) != "object" || Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(b) != "object") return false; // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.

    var aCtor = a.constructor,
        bCtor = b.constructor;

    if (aCtor !== bCtor && !(typeof aCtor === "function" && aCtor instanceof aCtor && typeof bCtor === "function" && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  }

  if (depth === 0) {
    return false;
  } else if (depth < 0) {
    depth = -1;
  } // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.


  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;

  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  } // Add the first object to the stack of traversed objects.


  aStack.push(a);
  bStack.push(b); // Recursively compare objects and arrays.

  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false; // Deep compare the contents, ignoring non-numeric properties.

    while (length--) {
      if (!eq(a[length], b[length], depth - 1, aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var keys = Object.keys(a);
    var key = void 0;
    length = keys.length; // Ensure that both objects contain the same number of properties before comparing deep equality.

    if (Object.keys(b).length !== length) return false;

    while (length--) {
      // Deep compare each member
      key = keys[length];
      if (!(has$1(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack))) return false;
    }
  } // Remove the first object from the stack of traversed objects.


  aStack.pop();
  bStack.pop();
  return true;
}

function unwrap(a) {
  if (isObservableArray(a)) return a.peek();
  if (isES6Map(a) || isObservableMap(a)) return iteratorToArray(a.entries());
  if (isES6Set(a) || isObservableSet(a)) return iteratorToArray(a.entries());
  return a;
}

function has$1(a, key) {
  return Object.prototype.hasOwnProperty.call(a, key);
}
/**
 * (c) Michel Weststrate 2015 - 2019
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */


try {
  // define process.env if needed
  // if this is not a production build in the first place
  // (in which case the expression below would be substituted with 'production')
  // tslint:disable-next-line
  "development";
} catch (e) {
  var g = getGlobal();
  if (typeof process === "undefined") g.process = {};
  g.process.env = {};
}

(function () {
  function testCodeMinification() {}

  if (testCodeMinification.name !== "testCodeMinification" && "development" !== "production" && typeof process !== 'undefined' && process.env.IGNORE_MOBX_MINIFY_WARNING !== "true") {
    // trick so it doesn't get replaced
    var varName = ["process", "env", "NODE_ENV"].join(".");
    console.warn("[mobx] you are running a minified build, but '" + varName + "' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
  }
})(); // forward compatibility with mobx, so that packages can easily support mobx 4 & 5


var $mobx = "$mobx";

if ((typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(__MOBX_DEVTOOLS_GLOBAL_HOOK__)) === "object") {
  // See: https://github.com/andykog/mobx-devtools/
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: spy,
    extras: {
      getDebugName: getDebugName
    },
    $mobx: $mobx
  });
} // TODO: remove in some future build


if ( true && typeof module.exports !== "undefined") {
  var warnedAboutDefaultExport_1 = false;
  Object.defineProperty(module.exports, "default", {
    enumerable: false,
    get: function get() {
      if (!warnedAboutDefaultExport_1) {
        warnedAboutDefaultExport_1 = true;
        console.warn("The MobX package does not have a default export. Use 'import { thing } from \"mobx\"' (recommended) or 'import * as mobx from \"mobx\"' instead.\"");
      }

      return undefined;
    }
  });
  ["extras", "Atom", "BaseAtom", "asFlat", "asMap", "asReference", "asStructure", "autorunAsync", "createTranformer", "expr", "isModifierDescriptor", "isStrictModeEnabled", "map", "useStrict", "whyRun"].forEach(function (prop) {
    Object.defineProperty(module.exports, prop, {
      enumerable: false,
      get: function get() {
        fail("'" + prop + "' is no longer part of the public MobX api. Please consult the changelog to find out where this functionality went");
      },
      set: function set() {}
    });
  });
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
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
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
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

  while (len) {
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
}; // v8 likes predictible objects


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

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js").default;

var printWarning = function printWarning() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/react-reconciler/cjs/react-reconciler.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-reconciler/cjs/react-reconciler.development.js ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window, document) {/** @license React v0.23.0
 * react-reconciler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _typeof=__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js").default;if(true){module.exports=function $$$reconciler($$$hostConfig){'use strict';var _assign=__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");var React=__webpack_require__(/*! react */ "./node_modules/react/index.js");var checkPropTypes=__webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");var Scheduler=__webpack_require__(/*! scheduler */ "./node_modules/scheduler/index.js");var tracing=__webpack_require__(/*! scheduler/tracing */ "./node_modules/scheduler/tracing.js");// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be replaced with error codes
// during build.
var FunctionComponent=0;var ClassComponent=1;var IndeterminateComponent=2;// Before we know whether it is function or class
var HostRoot=3;// Root of a host tree. Could be nested inside another node.
var HostPortal=4;// A subtree. Could be an entry point to a different renderer.
var HostComponent=5;var HostText=6;var Fragment=7;var Mode=8;var ContextConsumer=9;var ContextProvider=10;var ForwardRef=11;var Profiler=12;var SuspenseComponent=13;var MemoComponent=14;var SimpleMemoComponent=15;var LazyComponent=16;var IncompleteClassComponent=17;var DehydratedFragment=18;var SuspenseListComponent=19;var FundamentalComponent=20;var ScopeComponent=21;/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */ /**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */var warningWithoutStack=function warningWithoutStack(){};{warningWithoutStack=function warningWithoutStack(condition,format){for(var _len=arguments.length,args=new Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){args[_key-2]=arguments[_key];}if(format===undefined){throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning '+'message argument');}if(args.length>8){// Check before the condition to catch violations early.
throw new Error('warningWithoutStack() currently supports at most 8 arguments.');}if(condition){return;}if(typeof console!=='undefined'){var argsWithFormat=args.map(function(item){return''+item;});argsWithFormat.unshift('Warning: '+format);// We intentionally don't use spread (or .apply) directly because it
// breaks IE9: https://github.com/facebook/react/issues/13610
Function.prototype.apply.call(console.error,console,argsWithFormat);}try{// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
var argIndex=0;var message='Warning: '+format.replace(/%s/g,function(){return args[argIndex++];});throw new Error(message);}catch(x){}};}var warningWithoutStack$1=warningWithoutStack;/**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 *
 * Note that this module is currently shared and assumed to be stateless.
 * If this becomes an actual Map, that will break.
 */ /**
 * This API should be called `delete` but we'd have to make sure to always
 * transform these to strings for IE support. When this transform is fully
 * supported we can rename it.
 */function get(key){return key._reactInternalFiber;}function set(key,value){key._reactInternalFiber=value;}var ReactSharedInternals=React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;// Prevent newer renderers from RTE when used with older react package versions.
// Current owner and dispatcher used to share the same ref,
// but PR #14548 split them out to better support the react-debug-tools package.
if(!ReactSharedInternals.hasOwnProperty('ReactCurrentDispatcher')){ReactSharedInternals.ReactCurrentDispatcher={current:null};}if(!ReactSharedInternals.hasOwnProperty('ReactCurrentBatchConfig')){ReactSharedInternals.ReactCurrentBatchConfig={suspense:null};}// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol=typeof Symbol==='function'&&Symbol.for;var REACT_ELEMENT_TYPE=hasSymbol?Symbol.for('react.element'):0xeac7;var REACT_PORTAL_TYPE=hasSymbol?Symbol.for('react.portal'):0xeaca;var REACT_FRAGMENT_TYPE=hasSymbol?Symbol.for('react.fragment'):0xeacb;var REACT_STRICT_MODE_TYPE=hasSymbol?Symbol.for('react.strict_mode'):0xeacc;var REACT_PROFILER_TYPE=hasSymbol?Symbol.for('react.profiler'):0xead2;var REACT_PROVIDER_TYPE=hasSymbol?Symbol.for('react.provider'):0xeacd;var REACT_CONTEXT_TYPE=hasSymbol?Symbol.for('react.context'):0xeace;// TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?
var REACT_CONCURRENT_MODE_TYPE=hasSymbol?Symbol.for('react.concurrent_mode'):0xeacf;var REACT_FORWARD_REF_TYPE=hasSymbol?Symbol.for('react.forward_ref'):0xead0;var REACT_SUSPENSE_TYPE=hasSymbol?Symbol.for('react.suspense'):0xead1;var REACT_SUSPENSE_LIST_TYPE=hasSymbol?Symbol.for('react.suspense_list'):0xead8;var REACT_MEMO_TYPE=hasSymbol?Symbol.for('react.memo'):0xead3;var REACT_LAZY_TYPE=hasSymbol?Symbol.for('react.lazy'):0xead4;var REACT_FUNDAMENTAL_TYPE=hasSymbol?Symbol.for('react.fundamental'):0xead5;var REACT_RESPONDER_TYPE=hasSymbol?Symbol.for('react.responder'):0xead6;var REACT_SCOPE_TYPE=hasSymbol?Symbol.for('react.scope'):0xead7;var MAYBE_ITERATOR_SYMBOL=typeof Symbol==='function'&&Symbol.iterator;var FAUX_ITERATOR_SYMBOL='@@iterator';function getIteratorFn(maybeIterable){if(maybeIterable===null||_typeof(maybeIterable)!=='object'){return null;}var maybeIterator=MAYBE_ITERATOR_SYMBOL&&maybeIterable[MAYBE_ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL];if(typeof maybeIterator==='function'){return maybeIterator;}return null;}/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */var warning=warningWithoutStack$1;{warning=function warning(condition,format){if(condition){return;}var ReactDebugCurrentFrame=ReactSharedInternals.ReactDebugCurrentFrame;var stack=ReactDebugCurrentFrame.getStackAddendum();// eslint-disable-next-line react-internal/warning-and-invariant-args
for(var _len=arguments.length,args=new Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){args[_key-2]=arguments[_key];}warningWithoutStack$1.apply(void 0,[false,format+'%s'].concat(args,[stack]));};}var warning$1=warning;var Uninitialized=-1;var Pending=0;var Resolved=1;var Rejected=2;function refineResolvedLazyComponent(lazyComponent){return lazyComponent._status===Resolved?lazyComponent._result:null;}function initializeLazyComponentType(lazyComponent){if(lazyComponent._status===Uninitialized){lazyComponent._status=Pending;var ctor=lazyComponent._ctor;var thenable=ctor();lazyComponent._result=thenable;thenable.then(function(moduleObject){if(lazyComponent._status===Pending){var defaultExport=moduleObject.default;{if(defaultExport===undefined){warning$1(false,'lazy: Expected the result of a dynamic import() call. '+'Instead received: %s\n\nYour code should look like: \n  '+"const MyComponent = lazy(() => import('./MyComponent'))",moduleObject);}}lazyComponent._status=Resolved;lazyComponent._result=defaultExport;}},function(error){if(lazyComponent._status===Pending){lazyComponent._status=Rejected;lazyComponent._result=error;}});}}function getWrappedName(outerType,innerType,wrapperName){var functionName=innerType.displayName||innerType.name||'';return outerType.displayName||(functionName!==''?wrapperName+"("+functionName+")":wrapperName);}function getComponentName(type){if(type==null){// Host root, text node or just invalid type.
return null;}{if(typeof type.tag==='number'){warningWithoutStack$1(false,'Received an unexpected object in getComponentName(). '+'This is likely a bug in React. Please file an issue.');}}if(typeof type==='function'){return type.displayName||type.name||null;}if(typeof type==='string'){return type;}switch(type){case REACT_FRAGMENT_TYPE:return'Fragment';case REACT_PORTAL_TYPE:return'Portal';case REACT_PROFILER_TYPE:return"Profiler";case REACT_STRICT_MODE_TYPE:return'StrictMode';case REACT_SUSPENSE_TYPE:return'Suspense';case REACT_SUSPENSE_LIST_TYPE:return'SuspenseList';}if(_typeof(type)==='object'){switch(type.$$typeof){case REACT_CONTEXT_TYPE:return'Context.Consumer';case REACT_PROVIDER_TYPE:return'Context.Provider';case REACT_FORWARD_REF_TYPE:return getWrappedName(type,type.render,'ForwardRef');case REACT_MEMO_TYPE:return getComponentName(type.type);case REACT_LAZY_TYPE:{var thenable=type;var resolvedThenable=refineResolvedLazyComponent(thenable);if(resolvedThenable){return getComponentName(resolvedThenable);}break;}}}return null;}// Don't change these two values. They're used by React Dev Tools.
var NoEffect=/*              */0;var PerformedWork=/*         */1;// You can change the rest (and add more).
var Placement=/*             */2;var Update=/*                */4;var PlacementAndUpdate=/*    */6;var Deletion=/*              */8;var ContentReset=/*          */16;var Callback=/*              */32;var DidCapture=/*            */64;var Ref=/*                   */128;var Snapshot=/*              */256;var Passive=/*               */512;var Hydrating=/*             */1024;var HydratingAndUpdate=/*    */1028;// Passive & Update & Callback & Ref & Snapshot
var LifecycleEffectMask=/*   */932;// Union of all host effects
var HostEffectMask=/*        */2047;var Incomplete=/*            */2048;var ShouldCapture=/*         */4096;var enableUserTimingAPI=true;// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:
var debugRenderPhaseSideEffects=false;// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:
var debugRenderPhaseSideEffectsForStrictMode=true;// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.
var replayFailedUnitOfWorkWithInvokeGuardedCallback=true;// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:
var warnAboutDeprecatedLifecycles=true;// Gather advanced timing metrics for Profiler subtrees.
var enableProfilerTimer=true;// Trace which interactions trigger each commit.
var enableSchedulerTracing=true;// SSR experiments
var enableSuspenseServerRenderer=false;// Only used in www builds.
// Only used in www builds.
// Disable javascript: URL strings in href for XSS protection.
// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties
// These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.
// Experimental React Flare event system and event components support.
var enableFlareAPI=false;// Experimental Host Component support.
var enableFundamentalAPI=false;// Experimental Scope support.
var enableScopeAPI=false;// New API for JSX transforms to target - https://github.com/reactjs/rfcs/pull/107
// We will enforce mocking scheduler with scheduler/unstable_mock at some point. (v17?)
// Till then, we warn about the missing mock, but still fallback to a sync mode compatible version
var warnAboutUnmockedScheduler=false;// For tests, we flush suspense fallbacks in an act scope;
// *except* in some of our own tests, where we test incremental loading states.
var flushSuspenseFallbacksInTests=true;// Add a callback property to suspense to notify which promises are currently
// in the update queue. This allows reporting and tracing of what is causing
// the user to see a loading state.
// Also allows hydration callbacks to fire when a dehydrated boundary gets
// hydrated or deleted.
var enableSuspenseCallback=false;// Part of the simplification of React.createElement so we can eventually move
// from React.createElement to React.jsx
// https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md
var warnAboutDefaultPropsOnFunctionComponents=false;var warnAboutStringRefs=false;var disableLegacyContext=false;var disableSchedulerTimeoutBasedOnReactExpirationTime=false;var ReactCurrentOwner=ReactSharedInternals.ReactCurrentOwner;function getNearestMountedFiber(fiber){var node=fiber;var nearestMounted=fiber;if(!fiber.alternate){// If there is no alternate, this might be a new tree that isn't inserted
// yet. If it is, then it will have a pending insertion effect on it.
var nextNode=node;do{node=nextNode;if((node.effectTag&(Placement|Hydrating))!==NoEffect){// This is an insertion or in-progress hydration. The nearest possible
// mounted fiber is the parent but we need to continue to figure out
// if that one is still mounted.
nearestMounted=node.return;}nextNode=node.return;}while(nextNode);}else{while(node.return){node=node.return;}}if(node.tag===HostRoot){// TODO: Check if this was a nested HostRoot when used with
// renderContainerIntoSubtree.
return nearestMounted;}// If we didn't hit the root, that means that we're in an disconnected tree
// that has been unmounted.
return null;}function isFiberMounted(fiber){return getNearestMountedFiber(fiber)===fiber;}function isMounted(component){{var owner=ReactCurrentOwner.current;if(owner!==null&&owner.tag===ClassComponent){var ownerFiber=owner;var instance=ownerFiber.stateNode;!instance._warnedAboutRefsInRender?warningWithoutStack$1(false,'%s is accessing isMounted inside its render() function. '+'render() should be a pure function of props and state. It should '+'never access something that requires stale data from the previous '+'render, such as refs. Move this logic to componentDidMount and '+'componentDidUpdate instead.',getComponentName(ownerFiber.type)||'A component'):void 0;instance._warnedAboutRefsInRender=true;}}var fiber=get(component);if(!fiber){return false;}return getNearestMountedFiber(fiber)===fiber;}function assertIsMounted(fiber){if(!(getNearestMountedFiber(fiber)===fiber)){{throw Error("Unable to find node on an unmounted component.");}}}function findCurrentFiberUsingSlowPath(fiber){var alternate=fiber.alternate;if(!alternate){// If there is no alternate, then we only need to check if it is mounted.
var nearestMounted=getNearestMountedFiber(fiber);if(!(nearestMounted!==null)){{throw Error("Unable to find node on an unmounted component.");}}if(nearestMounted!==fiber){return null;}return fiber;}// If we have two possible branches, we'll walk backwards up to the root
// to see what path the root points to. On the way we may hit one of the
// special cases and we'll deal with them.
var a=fiber;var b=alternate;while(true){var parentA=a.return;if(parentA===null){// We're at the root.
break;}var parentB=parentA.alternate;if(parentB===null){// There is no alternate. This is an unusual case. Currently, it only
// happens when a Suspense component is hidden. An extra fragment fiber
// is inserted in between the Suspense fiber and its children. Skip
// over this extra fragment fiber and proceed to the next parent.
var nextParent=parentA.return;if(nextParent!==null){a=b=nextParent;continue;}// If there's no parent, we're at the root.
break;}// If both copies of the parent fiber point to the same child, we can
// assume that the child is current. This happens when we bailout on low
// priority: the bailed out fiber's child reuses the current child.
if(parentA.child===parentB.child){var child=parentA.child;while(child){if(child===a){// We've determined that A is the current branch.
assertIsMounted(parentA);return fiber;}if(child===b){// We've determined that B is the current branch.
assertIsMounted(parentA);return alternate;}child=child.sibling;}// We should never have an alternate for any mounting node. So the only
// way this could possibly happen is if this was unmounted, if at all.
{{throw Error("Unable to find node on an unmounted component.");}}}if(a.return!==b.return){// The return pointer of A and the return pointer of B point to different
// fibers. We assume that return pointers never criss-cross, so A must
// belong to the child set of A.return, and B must belong to the child
// set of B.return.
a=parentA;b=parentB;}else{// The return pointers point to the same fiber. We'll have to use the
// default, slow path: scan the child sets of each parent alternate to see
// which child belongs to which set.
//
// Search parent A's child set
var didFindChild=false;var _child=parentA.child;while(_child){if(_child===a){didFindChild=true;a=parentA;b=parentB;break;}if(_child===b){didFindChild=true;b=parentA;a=parentB;break;}_child=_child.sibling;}if(!didFindChild){// Search parent B's child set
_child=parentB.child;while(_child){if(_child===a){didFindChild=true;a=parentB;b=parentA;break;}if(_child===b){didFindChild=true;b=parentB;a=parentA;break;}_child=_child.sibling;}if(!didFindChild){{throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");}}}}if(!(a.alternate===b)){{throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");}}}// If the root is not a host container, we're in a disconnected tree. I.e.
// unmounted.
if(!(a.tag===HostRoot)){{throw Error("Unable to find node on an unmounted component.");}}if(a.stateNode.current===a){// We've determined that A is the current branch.
return fiber;}// Otherwise B has to be current branch.
return alternate;}function findCurrentHostFiber(parent){var currentParent=findCurrentFiberUsingSlowPath(parent);if(!currentParent){return null;}// Next we'll drill down this component to find the first HostComponent/Text.
var node=currentParent;while(true){if(node.tag===HostComponent||node.tag===HostText){return node;}else if(node.child){node.child.return=node;node=node.child;continue;}if(node===currentParent){return null;}while(!node.sibling){if(!node.return||node.return===currentParent){return null;}node=node.return;}node.sibling.return=node.return;node=node.sibling;}// Flow needs the return null here, but ESLint complains about it.
// eslint-disable-next-line no-unreachable
return null;}function findCurrentHostFiberWithNoPortals(parent){var currentParent=findCurrentFiberUsingSlowPath(parent);if(!currentParent){return null;}// Next we'll drill down this component to find the first HostComponent/Text.
var node=currentParent;while(true){if(node.tag===HostComponent||node.tag===HostText||enableFundamentalAPI&&node.tag===FundamentalComponent){return node;}else if(node.child&&node.tag!==HostPortal){node.child.return=node;node=node.child;continue;}if(node===currentParent){return null;}while(!node.sibling){if(!node.return||node.return===currentParent){return null;}node=node.return;}node.sibling.return=node.return;node=node.sibling;}// Flow needs the return null here, but ESLint complains about it.
// eslint-disable-next-line no-unreachable
return null;}// This is a host config that's used for the `react-reconciler` package on npm.
// It is only used by third-party renderers.
//
// Its API lets you pass the host config as an argument.
// However, inside the `react-reconciler` we treat host config as a module.
// This file is a shim between two worlds.
//
// It works because the `react-reconciler` bundle is wrapped in something like:
//
// module.exports = function ($$$config) {
//   /* reconciler code */
// }
//
// So `$$$config` looks like a global variable, but it's
// really an argument to a top-level wrapping function.
// eslint-disable-line no-undef
// eslint-disable-line no-undef
// eslint-disable-line no-undef
// eslint-disable-line no-undef
// eslint-disable-line no-undef
// eslint-disable-line no-undef
// eslint-disable-line no-undef
// eslint-disable-line no-undef
// eslint-disable-line no-undef
// eslint-disable-line no-undef
// eslint-disable-line no-undef
// eslint-disable-line no-undef
// eslint-disable-line no-undef
var getPublicInstance=$$$hostConfig.getPublicInstance;var getRootHostContext=$$$hostConfig.getRootHostContext;var getChildHostContext=$$$hostConfig.getChildHostContext;var prepareForCommit=$$$hostConfig.prepareForCommit;var resetAfterCommit=$$$hostConfig.resetAfterCommit;var createInstance=$$$hostConfig.createInstance;var appendInitialChild=$$$hostConfig.appendInitialChild;var finalizeInitialChildren=$$$hostConfig.finalizeInitialChildren;var prepareUpdate=$$$hostConfig.prepareUpdate;var shouldSetTextContent=$$$hostConfig.shouldSetTextContent;var shouldDeprioritizeSubtree=$$$hostConfig.shouldDeprioritizeSubtree;var createTextInstance=$$$hostConfig.createTextInstance;var scheduleTimeout=$$$hostConfig.setTimeout;var cancelTimeout=$$$hostConfig.clearTimeout;var noTimeout=$$$hostConfig.noTimeout;var now=$$$hostConfig.now;var isPrimaryRenderer=$$$hostConfig.isPrimaryRenderer;var warnsIfNotActing=$$$hostConfig.warnsIfNotActing;var supportsMutation=$$$hostConfig.supportsMutation;var supportsPersistence=$$$hostConfig.supportsPersistence;var supportsHydration=$$$hostConfig.supportsHydration;var mountResponderInstance=$$$hostConfig.mountResponderInstance;var unmountResponderInstance=$$$hostConfig.unmountResponderInstance;var getFundamentalComponentInstance=$$$hostConfig.getFundamentalComponentInstance;var mountFundamentalComponent=$$$hostConfig.mountFundamentalComponent;var shouldUpdateFundamentalComponent=$$$hostConfig.shouldUpdateFundamentalComponent;var getInstanceFromNode=$$$hostConfig.getInstanceFromNode;// -------------------
//      Mutation
//     (optional)
// -------------------
var appendChild=$$$hostConfig.appendChild;var appendChildToContainer=$$$hostConfig.appendChildToContainer;var commitTextUpdate=$$$hostConfig.commitTextUpdate;var commitMount=$$$hostConfig.commitMount;var commitUpdate=$$$hostConfig.commitUpdate;var insertBefore=$$$hostConfig.insertBefore;var insertInContainerBefore=$$$hostConfig.insertInContainerBefore;var removeChild=$$$hostConfig.removeChild;var removeChildFromContainer=$$$hostConfig.removeChildFromContainer;var resetTextContent=$$$hostConfig.resetTextContent;var hideInstance=$$$hostConfig.hideInstance;var hideTextInstance=$$$hostConfig.hideTextInstance;var unhideInstance=$$$hostConfig.unhideInstance;var unhideTextInstance=$$$hostConfig.unhideTextInstance;var updateFundamentalComponent=$$$hostConfig.updateFundamentalComponent;var unmountFundamentalComponent=$$$hostConfig.unmountFundamentalComponent;// -------------------
//     Persistence
//     (optional)
// -------------------
var cloneInstance=$$$hostConfig.cloneInstance;var createContainerChildSet=$$$hostConfig.createContainerChildSet;var appendChildToContainerChildSet=$$$hostConfig.appendChildToContainerChildSet;var finalizeContainerChildren=$$$hostConfig.finalizeContainerChildren;var replaceContainerChildren=$$$hostConfig.replaceContainerChildren;var cloneHiddenInstance=$$$hostConfig.cloneHiddenInstance;var cloneHiddenTextInstance=$$$hostConfig.cloneHiddenTextInstance;var cloneFundamentalInstance=$$$hostConfig.cloneInstance;// -------------------
//     Hydration
//     (optional)
// -------------------
var canHydrateInstance=$$$hostConfig.canHydrateInstance;var canHydrateTextInstance=$$$hostConfig.canHydrateTextInstance;var canHydrateSuspenseInstance=$$$hostConfig.canHydrateSuspenseInstance;var isSuspenseInstancePending=$$$hostConfig.isSuspenseInstancePending;var isSuspenseInstanceFallback=$$$hostConfig.isSuspenseInstanceFallback;var registerSuspenseInstanceRetry=$$$hostConfig.registerSuspenseInstanceRetry;var getNextHydratableSibling=$$$hostConfig.getNextHydratableSibling;var getFirstHydratableChild=$$$hostConfig.getFirstHydratableChild;var hydrateInstance=$$$hostConfig.hydrateInstance;var hydrateTextInstance=$$$hostConfig.hydrateTextInstance;var hydrateSuspenseInstance=$$$hostConfig.hydrateSuspenseInstance;var getNextHydratableInstanceAfterSuspenseInstance=$$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance;var commitHydratedContainer=$$$hostConfig.commitHydratedContainer;var commitHydratedSuspenseInstance=$$$hostConfig.commitHydratedSuspenseInstance;var clearSuspenseBoundary=$$$hostConfig.clearSuspenseBoundary;var clearSuspenseBoundaryFromContainer=$$$hostConfig.clearSuspenseBoundaryFromContainer;var didNotMatchHydratedContainerTextInstance=$$$hostConfig.didNotMatchHydratedContainerTextInstance;var didNotMatchHydratedTextInstance=$$$hostConfig.didNotMatchHydratedTextInstance;var didNotHydrateContainerInstance=$$$hostConfig.didNotHydrateContainerInstance;var didNotHydrateInstance=$$$hostConfig.didNotHydrateInstance;var didNotFindHydratableContainerInstance=$$$hostConfig.didNotFindHydratableContainerInstance;var didNotFindHydratableContainerTextInstance=$$$hostConfig.didNotFindHydratableContainerTextInstance;var didNotFindHydratableContainerSuspenseInstance=$$$hostConfig.didNotFindHydratableContainerSuspenseInstance;var didNotFindHydratableInstance=$$$hostConfig.didNotFindHydratableInstance;var didNotFindHydratableTextInstance=$$$hostConfig.didNotFindHydratableTextInstance;var didNotFindHydratableSuspenseInstance=$$$hostConfig.didNotFindHydratableSuspenseInstance;var BEFORE_SLASH_RE=/^(.*)[\\\/]/;var describeComponentFrame=function describeComponentFrame(name,source,ownerName){var sourceInfo='';if(source){var path=source.fileName;var fileName=path.replace(BEFORE_SLASH_RE,'');{// In DEV, include code for a common special case:
// prefer "folder/index.js" instead of just "index.js".
if(/^index\./.test(fileName)){var match=path.match(BEFORE_SLASH_RE);if(match){var pathBeforeSlash=match[1];if(pathBeforeSlash){var folderName=pathBeforeSlash.replace(BEFORE_SLASH_RE,'');fileName=folderName+'/'+fileName;}}}}sourceInfo=' (at '+fileName+':'+source.lineNumber+')';}else if(ownerName){sourceInfo=' (created by '+ownerName+')';}return'\n    in '+(name||'Unknown')+sourceInfo;};var ReactDebugCurrentFrame=ReactSharedInternals.ReactDebugCurrentFrame;function describeFiber(fiber){switch(fiber.tag){case HostRoot:case HostPortal:case HostText:case Fragment:case ContextProvider:case ContextConsumer:return'';default:var owner=fiber._debugOwner;var source=fiber._debugSource;var name=getComponentName(fiber.type);var ownerName=null;if(owner){ownerName=getComponentName(owner.type);}return describeComponentFrame(name,source,ownerName);}}function getStackByFiberInDevAndProd(workInProgress){var info='';var node=workInProgress;do{info+=describeFiber(node);node=node.return;}while(node);return info;}var current=null;var phase=null;function getCurrentFiberOwnerNameInDevOrNull(){{if(current===null){return null;}var owner=current._debugOwner;if(owner!==null&&typeof owner!=='undefined'){return getComponentName(owner.type);}}return null;}function getCurrentFiberStackInDev(){{if(current===null){return'';}// Safe because if current fiber exists, we are reconciling,
// and it is guaranteed to be the work-in-progress version.
return getStackByFiberInDevAndProd(current);}return'';}function resetCurrentFiber(){{ReactDebugCurrentFrame.getCurrentStack=null;current=null;phase=null;}}function setCurrentFiber(fiber){{ReactDebugCurrentFrame.getCurrentStack=getCurrentFiberStackInDev;current=fiber;phase=null;}}function setCurrentPhase(lifeCyclePhase){{phase=lifeCyclePhase;}}// Prefix measurements so that it's possible to filter them.
// Longer prefixes are hard to read in DevTools.
var reactEmoji="\u269B";var warningEmoji="\u26D4";var supportsUserTiming=typeof performance!=='undefined'&&typeof performance.mark==='function'&&typeof performance.clearMarks==='function'&&typeof performance.measure==='function'&&typeof performance.clearMeasures==='function';// Keep track of current fiber so that we know the path to unwind on pause.
// TODO: this looks the same as nextUnitOfWork in scheduler. Can we unify them?
var currentFiber=null;// If we're in the middle of user code, which fiber and method is it?
// Reusing `currentFiber` would be confusing for this because user code fiber
// can change during commit phase too, but we don't need to unwind it (since
// lifecycles in the commit phase don't resemble a tree).
var currentPhase=null;var currentPhaseFiber=null;// Did lifecycle hook schedule an update? This is often a performance problem,
// so we will keep track of it, and include it in the report.
// Track commits caused by cascading updates.
var isCommitting=false;var hasScheduledUpdateInCurrentCommit=false;var hasScheduledUpdateInCurrentPhase=false;var commitCountInCurrentWorkLoop=0;var effectCountInCurrentCommit=0;// to avoid stretch the commit phase with measurement overhead.
var labelsInCurrentCommit=new Set();var formatMarkName=function formatMarkName(markName){return reactEmoji+" "+markName;};var formatLabel=function formatLabel(label,warning){var prefix=warning?warningEmoji+" ":reactEmoji+" ";var suffix=warning?" Warning: "+warning:'';return""+prefix+label+suffix;};var beginMark=function beginMark(markName){performance.mark(formatMarkName(markName));};var clearMark=function clearMark(markName){performance.clearMarks(formatMarkName(markName));};var endMark=function endMark(label,markName,warning){var formattedMarkName=formatMarkName(markName);var formattedLabel=formatLabel(label,warning);try{performance.measure(formattedLabel,formattedMarkName);}catch(err){}// If previous mark was missing for some reason, this will throw.
// This could only happen if React crashed in an unexpected place earlier.
// Don't pile on with more errors.
// Clear marks immediately to avoid growing buffer.
performance.clearMarks(formattedMarkName);performance.clearMeasures(formattedLabel);};var getFiberMarkName=function getFiberMarkName(label,debugID){return label+" (#"+debugID+")";};var getFiberLabel=function getFiberLabel(componentName,isMounted,phase){if(phase===null){// These are composite component total time measurements.
return componentName+" ["+(isMounted?'update':'mount')+"]";}else{// Composite component methods.
return componentName+"."+phase;}};var beginFiberMark=function beginFiberMark(fiber,phase){var componentName=getComponentName(fiber.type)||'Unknown';var debugID=fiber._debugID;var isMounted=fiber.alternate!==null;var label=getFiberLabel(componentName,isMounted,phase);if(isCommitting&&labelsInCurrentCommit.has(label)){// During the commit phase, we don't show duplicate labels because
// there is a fixed overhead for every measurement, and we don't
// want to stretch the commit phase beyond necessary.
return false;}labelsInCurrentCommit.add(label);var markName=getFiberMarkName(label,debugID);beginMark(markName);return true;};var clearFiberMark=function clearFiberMark(fiber,phase){var componentName=getComponentName(fiber.type)||'Unknown';var debugID=fiber._debugID;var isMounted=fiber.alternate!==null;var label=getFiberLabel(componentName,isMounted,phase);var markName=getFiberMarkName(label,debugID);clearMark(markName);};var endFiberMark=function endFiberMark(fiber,phase,warning){var componentName=getComponentName(fiber.type)||'Unknown';var debugID=fiber._debugID;var isMounted=fiber.alternate!==null;var label=getFiberLabel(componentName,isMounted,phase);var markName=getFiberMarkName(label,debugID);endMark(label,markName,warning);};var shouldIgnoreFiber=function shouldIgnoreFiber(fiber){// Host components should be skipped in the timeline.
// We could check typeof fiber.type, but does this work with RN?
switch(fiber.tag){case HostRoot:case HostComponent:case HostText:case HostPortal:case Fragment:case ContextProvider:case ContextConsumer:case Mode:return true;default:return false;}};var clearPendingPhaseMeasurement=function clearPendingPhaseMeasurement(){if(currentPhase!==null&&currentPhaseFiber!==null){clearFiberMark(currentPhaseFiber,currentPhase);}currentPhaseFiber=null;currentPhase=null;hasScheduledUpdateInCurrentPhase=false;};var pauseTimers=function pauseTimers(){// Stops all currently active measurements so that they can be resumed
// if we continue in a later deferred loop from the same unit of work.
var fiber=currentFiber;while(fiber){if(fiber._debugIsCurrentlyTiming){endFiberMark(fiber,null,null);}fiber=fiber.return;}};var resumeTimersRecursively=function resumeTimersRecursively(fiber){if(fiber.return!==null){resumeTimersRecursively(fiber.return);}if(fiber._debugIsCurrentlyTiming){beginFiberMark(fiber,null);}};var resumeTimers=function resumeTimers(){// Resumes all measurements that were active during the last deferred loop.
if(currentFiber!==null){resumeTimersRecursively(currentFiber);}};function recordEffect(){if(enableUserTimingAPI){effectCountInCurrentCommit++;}}function recordScheduleUpdate(){if(enableUserTimingAPI){if(isCommitting){hasScheduledUpdateInCurrentCommit=true;}if(currentPhase!==null&&currentPhase!=='componentWillMount'&&currentPhase!=='componentWillReceiveProps'){hasScheduledUpdateInCurrentPhase=true;}}}function startWorkTimer(fiber){if(enableUserTimingAPI){if(!supportsUserTiming||shouldIgnoreFiber(fiber)){return;}// If we pause, this is the fiber to unwind from.
currentFiber=fiber;if(!beginFiberMark(fiber,null)){return;}fiber._debugIsCurrentlyTiming=true;}}function cancelWorkTimer(fiber){if(enableUserTimingAPI){if(!supportsUserTiming||shouldIgnoreFiber(fiber)){return;}// Remember we shouldn't complete measurement for this fiber.
// Otherwise flamechart will be deep even for small updates.
fiber._debugIsCurrentlyTiming=false;clearFiberMark(fiber,null);}}function stopWorkTimer(fiber){if(enableUserTimingAPI){if(!supportsUserTiming||shouldIgnoreFiber(fiber)){return;}// If we pause, its parent is the fiber to unwind from.
currentFiber=fiber.return;if(!fiber._debugIsCurrentlyTiming){return;}fiber._debugIsCurrentlyTiming=false;endFiberMark(fiber,null,null);}}function stopFailedWorkTimer(fiber){if(enableUserTimingAPI){if(!supportsUserTiming||shouldIgnoreFiber(fiber)){return;}// If we pause, its parent is the fiber to unwind from.
currentFiber=fiber.return;if(!fiber._debugIsCurrentlyTiming){return;}fiber._debugIsCurrentlyTiming=false;var warning=fiber.tag===SuspenseComponent?'Rendering was suspended':'An error was thrown inside this error boundary';endFiberMark(fiber,null,warning);}}function startPhaseTimer(fiber,phase){if(enableUserTimingAPI){if(!supportsUserTiming){return;}clearPendingPhaseMeasurement();if(!beginFiberMark(fiber,phase)){return;}currentPhaseFiber=fiber;currentPhase=phase;}}function stopPhaseTimer(){if(enableUserTimingAPI){if(!supportsUserTiming){return;}if(currentPhase!==null&&currentPhaseFiber!==null){var warning=hasScheduledUpdateInCurrentPhase?'Scheduled a cascading update':null;endFiberMark(currentPhaseFiber,currentPhase,warning);}currentPhase=null;currentPhaseFiber=null;}}function startWorkLoopTimer(nextUnitOfWork){if(enableUserTimingAPI){currentFiber=nextUnitOfWork;if(!supportsUserTiming){return;}commitCountInCurrentWorkLoop=0;// This is top level call.
// Any other measurements are performed within.
beginMark('(React Tree Reconciliation)');// Resume any measurements that were in progress during the last loop.
resumeTimers();}}function stopWorkLoopTimer(interruptedBy,didCompleteRoot){if(enableUserTimingAPI){if(!supportsUserTiming){return;}var warning=null;if(interruptedBy!==null){if(interruptedBy.tag===HostRoot){warning='A top-level update interrupted the previous render';}else{var componentName=getComponentName(interruptedBy.type)||'Unknown';warning="An update to "+componentName+" interrupted the previous render";}}else if(commitCountInCurrentWorkLoop>1){warning='There were cascading updates';}commitCountInCurrentWorkLoop=0;var label=didCompleteRoot?'(React Tree Reconciliation: Completed Root)':'(React Tree Reconciliation: Yielded)';// Pause any measurements until the next loop.
pauseTimers();endMark(label,'(React Tree Reconciliation)',warning);}}function startCommitTimer(){if(enableUserTimingAPI){if(!supportsUserTiming){return;}isCommitting=true;hasScheduledUpdateInCurrentCommit=false;labelsInCurrentCommit.clear();beginMark('(Committing Changes)');}}function stopCommitTimer(){if(enableUserTimingAPI){if(!supportsUserTiming){return;}var warning=null;if(hasScheduledUpdateInCurrentCommit){warning='Lifecycle hook scheduled a cascading update';}else if(commitCountInCurrentWorkLoop>0){warning='Caused by a cascading update in earlier commit';}hasScheduledUpdateInCurrentCommit=false;commitCountInCurrentWorkLoop++;isCommitting=false;labelsInCurrentCommit.clear();endMark('(Committing Changes)','(Committing Changes)',warning);}}function startCommitSnapshotEffectsTimer(){if(enableUserTimingAPI){if(!supportsUserTiming){return;}effectCountInCurrentCommit=0;beginMark('(Committing Snapshot Effects)');}}function stopCommitSnapshotEffectsTimer(){if(enableUserTimingAPI){if(!supportsUserTiming){return;}var count=effectCountInCurrentCommit;effectCountInCurrentCommit=0;endMark("(Committing Snapshot Effects: "+count+" Total)",'(Committing Snapshot Effects)',null);}}function startCommitHostEffectsTimer(){if(enableUserTimingAPI){if(!supportsUserTiming){return;}effectCountInCurrentCommit=0;beginMark('(Committing Host Effects)');}}function stopCommitHostEffectsTimer(){if(enableUserTimingAPI){if(!supportsUserTiming){return;}var count=effectCountInCurrentCommit;effectCountInCurrentCommit=0;endMark("(Committing Host Effects: "+count+" Total)",'(Committing Host Effects)',null);}}function startCommitLifeCyclesTimer(){if(enableUserTimingAPI){if(!supportsUserTiming){return;}effectCountInCurrentCommit=0;beginMark('(Calling Lifecycle Methods)');}}function stopCommitLifeCyclesTimer(){if(enableUserTimingAPI){if(!supportsUserTiming){return;}var count=effectCountInCurrentCommit;effectCountInCurrentCommit=0;endMark("(Calling Lifecycle Methods: "+count+" Total)",'(Calling Lifecycle Methods)',null);}}var valueStack=[];var fiberStack;{fiberStack=[];}var index=-1;function createCursor(defaultValue){return{current:defaultValue};}function pop(cursor,fiber){if(index<0){{warningWithoutStack$1(false,'Unexpected pop.');}return;}{if(fiber!==fiberStack[index]){warningWithoutStack$1(false,'Unexpected Fiber popped.');}}cursor.current=valueStack[index];valueStack[index]=null;{fiberStack[index]=null;}index--;}function push(cursor,value,fiber){index++;valueStack[index]=cursor.current;{fiberStack[index]=fiber;}cursor.current=value;}var warnedAboutMissingGetChildContext;{warnedAboutMissingGetChildContext={};}var emptyContextObject={};{Object.freeze(emptyContextObject);}// A cursor to the current merged context object on the stack.
var contextStackCursor=createCursor(emptyContextObject);// A cursor to a boolean indicating whether the context has changed.
var didPerformWorkStackCursor=createCursor(false);// Keep track of the previous context object that was on the stack.
// We use this to get access to the parent context after we have already
// pushed the next context provider, and now need to merge their contexts.
var previousContext=emptyContextObject;function getUnmaskedContext(workInProgress,Component,didPushOwnContextIfProvider){if(disableLegacyContext){return emptyContextObject;}else{if(didPushOwnContextIfProvider&&isContextProvider(Component)){// If the fiber is a context provider itself, when we read its context
// we may have already pushed its own child context on the stack. A context
// provider should not "see" its own child context. Therefore we read the
// previous (parent) context instead for a context provider.
return previousContext;}return contextStackCursor.current;}}function cacheContext(workInProgress,unmaskedContext,maskedContext){if(disableLegacyContext){return;}else{var instance=workInProgress.stateNode;instance.__reactInternalMemoizedUnmaskedChildContext=unmaskedContext;instance.__reactInternalMemoizedMaskedChildContext=maskedContext;}}function getMaskedContext(workInProgress,unmaskedContext){if(disableLegacyContext){return emptyContextObject;}else{var type=workInProgress.type;var contextTypes=type.contextTypes;if(!contextTypes){return emptyContextObject;}// Avoid recreating masked context unless unmasked context has changed.
// Failing to do this will result in unnecessary calls to componentWillReceiveProps.
// This may trigger infinite loops if componentWillReceiveProps calls setState.
var instance=workInProgress.stateNode;if(instance&&instance.__reactInternalMemoizedUnmaskedChildContext===unmaskedContext){return instance.__reactInternalMemoizedMaskedChildContext;}var context={};for(var key in contextTypes){context[key]=unmaskedContext[key];}{var name=getComponentName(type)||'Unknown';checkPropTypes(contextTypes,context,'context',name,getCurrentFiberStackInDev);}// Cache unmasked context so we can avoid recreating masked context unless necessary.
// Context is created before the class component is instantiated so check for instance.
if(instance){cacheContext(workInProgress,unmaskedContext,context);}return context;}}function hasContextChanged(){if(disableLegacyContext){return false;}else{return didPerformWorkStackCursor.current;}}function isContextProvider(type){if(disableLegacyContext){return false;}else{var childContextTypes=type.childContextTypes;return childContextTypes!==null&&childContextTypes!==undefined;}}function popContext(fiber){if(disableLegacyContext){return;}else{pop(didPerformWorkStackCursor,fiber);pop(contextStackCursor,fiber);}}function popTopLevelContextObject(fiber){if(disableLegacyContext){return;}else{pop(didPerformWorkStackCursor,fiber);pop(contextStackCursor,fiber);}}function pushTopLevelContextObject(fiber,context,didChange){if(disableLegacyContext){return;}else{if(!(contextStackCursor.current===emptyContextObject)){{throw Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");}}push(contextStackCursor,context,fiber);push(didPerformWorkStackCursor,didChange,fiber);}}function processChildContext(fiber,type,parentContext){if(disableLegacyContext){return parentContext;}else{var instance=fiber.stateNode;var childContextTypes=type.childContextTypes;// TODO (bvaughn) Replace this behavior with an invariant() in the future.
// It has only been added in Fiber to match the (unintentional) behavior in Stack.
if(typeof instance.getChildContext!=='function'){{var componentName=getComponentName(type)||'Unknown';if(!warnedAboutMissingGetChildContext[componentName]){warnedAboutMissingGetChildContext[componentName]=true;warningWithoutStack$1(false,'%s.childContextTypes is specified but there is no getChildContext() method '+'on the instance. You can either define getChildContext() on %s or remove '+'childContextTypes from it.',componentName,componentName);}}return parentContext;}var childContext;{setCurrentPhase('getChildContext');}startPhaseTimer(fiber,'getChildContext');childContext=instance.getChildContext();stopPhaseTimer();{setCurrentPhase(null);}for(var contextKey in childContext){if(!(contextKey in childContextTypes)){{throw Error((getComponentName(type)||'Unknown')+".getChildContext(): key \""+contextKey+"\" is not defined in childContextTypes.");}}}{var name=getComponentName(type)||'Unknown';checkPropTypes(childContextTypes,childContext,'child context',name,// In practice, there is one case in which we won't get a stack. It's when
// somebody calls unstable_renderSubtreeIntoContainer() and we process
// context from the parent component instance. The stack will be missing
// because it's outside of the reconciliation, and so the pointer has not
// been set. This is rare and doesn't matter. We'll also remove that API.
getCurrentFiberStackInDev);}return _assign({},parentContext,{},childContext);}}function pushContextProvider(workInProgress){if(disableLegacyContext){return false;}else{var instance=workInProgress.stateNode;// We push the context as early as possible to ensure stack integrity.
// If the instance does not exist yet, we will push null at first,
// and replace it on the stack later when invalidating the context.
var memoizedMergedChildContext=instance&&instance.__reactInternalMemoizedMergedChildContext||emptyContextObject;// Remember the parent context so we can merge with it later.
// Inherit the parent's did-perform-work value to avoid inadvertently blocking updates.
previousContext=contextStackCursor.current;push(contextStackCursor,memoizedMergedChildContext,workInProgress);push(didPerformWorkStackCursor,didPerformWorkStackCursor.current,workInProgress);return true;}}function invalidateContextProvider(workInProgress,type,didChange){if(disableLegacyContext){return;}else{var instance=workInProgress.stateNode;if(!instance){{throw Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");}}if(didChange){// Merge parent and own context.
// Skip this if we're not updating due to sCU.
// This avoids unnecessarily recomputing memoized values.
var mergedContext=processChildContext(workInProgress,type,previousContext);instance.__reactInternalMemoizedMergedChildContext=mergedContext;// Replace the old (or empty) context with the new one.
// It is important to unwind the context in the reverse order.
pop(didPerformWorkStackCursor,workInProgress);pop(contextStackCursor,workInProgress);// Now push the new context and mark that it has changed.
push(contextStackCursor,mergedContext,workInProgress);push(didPerformWorkStackCursor,didChange,workInProgress);}else{pop(didPerformWorkStackCursor,workInProgress);push(didPerformWorkStackCursor,didChange,workInProgress);}}}function findCurrentUnmaskedContext(fiber){if(disableLegacyContext){return emptyContextObject;}else{// Currently this is only used with renderSubtreeIntoContainer; not sure if it
// makes sense elsewhere
if(!(isFiberMounted(fiber)&&fiber.tag===ClassComponent)){{throw Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");}}var node=fiber;do{switch(node.tag){case HostRoot:return node.stateNode.context;case ClassComponent:{var Component=node.type;if(isContextProvider(Component)){return node.stateNode.__reactInternalMemoizedMergedChildContext;}break;}}node=node.return;}while(node!==null);{{throw Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");}}}}var BatchedRoot=1;var ConcurrentRoot=2;// Intentionally not named imports because Rollup would use dynamic dispatch for
// CommonJS interop named imports.
var Scheduler_runWithPriority=Scheduler.unstable_runWithPriority;var Scheduler_scheduleCallback=Scheduler.unstable_scheduleCallback;var Scheduler_cancelCallback=Scheduler.unstable_cancelCallback;var Scheduler_shouldYield=Scheduler.unstable_shouldYield;var Scheduler_requestPaint=Scheduler.unstable_requestPaint;var Scheduler_now=Scheduler.unstable_now;var Scheduler_getCurrentPriorityLevel=Scheduler.unstable_getCurrentPriorityLevel;var Scheduler_ImmediatePriority=Scheduler.unstable_ImmediatePriority;var Scheduler_UserBlockingPriority=Scheduler.unstable_UserBlockingPriority;var Scheduler_NormalPriority=Scheduler.unstable_NormalPriority;var Scheduler_LowPriority=Scheduler.unstable_LowPriority;var Scheduler_IdlePriority=Scheduler.unstable_IdlePriority;if(enableSchedulerTracing){// Provide explicit error message when production+profiling bundle of e.g.
// react-dom is used with production (non-profiling) bundle of
// scheduler/tracing
if(!(tracing.__interactionsRef!=null&&tracing.__interactionsRef.current!=null)){{throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at http://fb.me/react-profiling");}}}var fakeCallbackNode={};// Except for NoPriority, these correspond to Scheduler priorities. We use
// ascending numbers so we can compare them like numbers. They start at 90 to
// avoid clashing with Scheduler's priorities.
var ImmediatePriority=99;var UserBlockingPriority=98;var NormalPriority=97;var LowPriority=96;var IdlePriority=95;// NoPriority is the absence of priority. Also React-only.
var NoPriority=90;var shouldYield=Scheduler_shouldYield;var requestPaint=// Fall back gracefully if we're running an older version of Scheduler.
Scheduler_requestPaint!==undefined?Scheduler_requestPaint:function(){};var syncQueue=null;var immediateQueueCallbackNode=null;var isFlushingSyncQueue=false;var initialTimeMs=Scheduler_now();// If the initial timestamp is reasonably small, use Scheduler's `now` directly.
// This will be the case for modern browsers that support `performance.now`. In
// older browsers, Scheduler falls back to `Date.now`, which returns a Unix
// timestamp. In that case, subtract the module initialization time to simulate
// the behavior of performance.now and keep our times small enough to fit
// within 32 bits.
// TODO: Consider lifting this into Scheduler.
var now$1=initialTimeMs<10000?Scheduler_now:function(){return Scheduler_now()-initialTimeMs;};function getCurrentPriorityLevel(){switch(Scheduler_getCurrentPriorityLevel()){case Scheduler_ImmediatePriority:return ImmediatePriority;case Scheduler_UserBlockingPriority:return UserBlockingPriority;case Scheduler_NormalPriority:return NormalPriority;case Scheduler_LowPriority:return LowPriority;case Scheduler_IdlePriority:return IdlePriority;default:{{throw Error("Unknown priority level.");}}}}function reactPriorityToSchedulerPriority(reactPriorityLevel){switch(reactPriorityLevel){case ImmediatePriority:return Scheduler_ImmediatePriority;case UserBlockingPriority:return Scheduler_UserBlockingPriority;case NormalPriority:return Scheduler_NormalPriority;case LowPriority:return Scheduler_LowPriority;case IdlePriority:return Scheduler_IdlePriority;default:{{throw Error("Unknown priority level.");}}}}function runWithPriority(reactPriorityLevel,fn){var priorityLevel=reactPriorityToSchedulerPriority(reactPriorityLevel);return Scheduler_runWithPriority(priorityLevel,fn);}function scheduleCallback(reactPriorityLevel,callback,options){var priorityLevel=reactPriorityToSchedulerPriority(reactPriorityLevel);return Scheduler_scheduleCallback(priorityLevel,callback,options);}function scheduleSyncCallback(callback){// Push this callback into an internal queue. We'll flush these either in
// the next tick, or earlier if something calls `flushSyncCallbackQueue`.
if(syncQueue===null){syncQueue=[callback];// Flush the queue in the next tick, at the earliest.
immediateQueueCallbackNode=Scheduler_scheduleCallback(Scheduler_ImmediatePriority,flushSyncCallbackQueueImpl);}else{// Push onto existing queue. Don't need to schedule a callback because
// we already scheduled one when we created the queue.
syncQueue.push(callback);}return fakeCallbackNode;}function cancelCallback(callbackNode){if(callbackNode!==fakeCallbackNode){Scheduler_cancelCallback(callbackNode);}}function flushSyncCallbackQueue(){if(immediateQueueCallbackNode!==null){var node=immediateQueueCallbackNode;immediateQueueCallbackNode=null;Scheduler_cancelCallback(node);}flushSyncCallbackQueueImpl();}function flushSyncCallbackQueueImpl(){if(!isFlushingSyncQueue&&syncQueue!==null){// Prevent re-entrancy.
isFlushingSyncQueue=true;var i=0;try{var _isSync=true;var queue=syncQueue;runWithPriority(ImmediatePriority,function(){for(;i<queue.length;i++){var callback=queue[i];do{callback=callback(_isSync);}while(callback!==null);}});syncQueue=null;}catch(error){// If something throws, leave the remaining callbacks on the queue.
if(syncQueue!==null){syncQueue=syncQueue.slice(i+1);}// Resume flushing in the next tick
Scheduler_scheduleCallback(Scheduler_ImmediatePriority,flushSyncCallbackQueue);throw error;}finally{isFlushingSyncQueue=false;}}}var NoMode=0;var StrictMode=1;// TODO: Remove BatchedMode and ConcurrentMode by reading from the root
// tag instead
var BatchedMode=2;var ConcurrentMode=4;var ProfileMode=8;// Max 31 bit integer. The max integer size in V8 for 32-bit systems.
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111
var MAX_SIGNED_31_BIT_INT=1073741823;var NoWork=0;// TODO: Think of a better name for Never. The key difference with Idle is that
// Never work can be committed in an inconsistent state without tearing the UI.
// The main example is offscreen content, like a hidden subtree. So one possible
// name is Offscreen. However, it also includes dehydrated Suspense boundaries,
// which are inconsistent in the sense that they haven't finished yet, but
// aren't visibly inconsistent because the server rendered HTML matches what the
// hydrated tree would look like.
var Never=1;// Idle is slightly higher priority than Never. It must completely finish in
// order to be consistent.
var Idle=2;// Continuous Hydration is a moving priority. It is slightly higher than Idle
// and is used to increase priority of hover targets. It is increasing with
// each usage so that last always wins.
var ContinuousHydration=3;var Sync=MAX_SIGNED_31_BIT_INT;var Batched=Sync-1;var UNIT_SIZE=10;var MAGIC_NUMBER_OFFSET=Batched-1;// 1 unit of expiration time represents 10ms.
function msToExpirationTime(ms){// Always add an offset so that we don't clash with the magic number for NoWork.
return MAGIC_NUMBER_OFFSET-(ms/UNIT_SIZE|0);}function expirationTimeToMs(expirationTime){return(MAGIC_NUMBER_OFFSET-expirationTime)*UNIT_SIZE;}function ceiling(num,precision){return((num/precision|0)+1)*precision;}function computeExpirationBucket(currentTime,expirationInMs,bucketSizeMs){return MAGIC_NUMBER_OFFSET-ceiling(MAGIC_NUMBER_OFFSET-currentTime+expirationInMs/UNIT_SIZE,bucketSizeMs/UNIT_SIZE);}// TODO: This corresponds to Scheduler's NormalPriority, not LowPriority. Update
// the names to reflect.
var LOW_PRIORITY_EXPIRATION=5000;var LOW_PRIORITY_BATCH_SIZE=250;function computeAsyncExpiration(currentTime){return computeExpirationBucket(currentTime,LOW_PRIORITY_EXPIRATION,LOW_PRIORITY_BATCH_SIZE);}function computeSuspenseExpiration(currentTime,timeoutMs){// TODO: Should we warn if timeoutMs is lower than the normal pri expiration time?
return computeExpirationBucket(currentTime,timeoutMs,LOW_PRIORITY_BATCH_SIZE);}// We intentionally set a higher expiration time for interactive updates in
// dev than in production.
//
// If the main thread is being blocked so long that you hit the expiration,
// it's a problem that could be solved with better scheduling.
//
// People will be more likely to notice this and fix it with the long
// expiration time in development.
//
// In production we opt for better UX at the risk of masking scheduling
// problems, by expiring fast.
var HIGH_PRIORITY_EXPIRATION=500;var HIGH_PRIORITY_BATCH_SIZE=100;function computeInteractiveExpiration(currentTime){return computeExpirationBucket(currentTime,HIGH_PRIORITY_EXPIRATION,HIGH_PRIORITY_BATCH_SIZE);}function computeContinuousHydrationExpiration(currentTime){// Each time we ask for a new one of these we increase the priority.
// This ensures that the last one always wins since we can't deprioritize
// once we've scheduled work already.
return ContinuousHydration++;}function inferPriorityFromExpirationTime(currentTime,expirationTime){if(expirationTime===Sync){return ImmediatePriority;}if(expirationTime===Never||expirationTime===Idle){return IdlePriority;}var msUntil=expirationTimeToMs(expirationTime)-expirationTimeToMs(currentTime);if(msUntil<=0){return ImmediatePriority;}if(msUntil<=HIGH_PRIORITY_EXPIRATION+HIGH_PRIORITY_BATCH_SIZE){return UserBlockingPriority;}if(msUntil<=LOW_PRIORITY_EXPIRATION+LOW_PRIORITY_BATCH_SIZE){return NormalPriority;}// TODO: Handle LowPriority
// Assume anything lower has idle priority
return IdlePriority;}/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */function is(x,y){return x===y&&(x!==0||1/x===1/y)||x!==x&&y!==y// eslint-disable-line no-self-compare
;}var is$1=typeof Object.is==='function'?Object.is:is;var hasOwnProperty=Object.prototype.hasOwnProperty;/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */function shallowEqual(objA,objB){if(is$1(objA,objB)){return true;}if(_typeof(objA)!=='object'||objA===null||_typeof(objB)!=='object'||objB===null){return false;}var keysA=Object.keys(objA);var keysB=Object.keys(objB);if(keysA.length!==keysB.length){return false;}// Test for A's keys different from B.
for(var i=0;i<keysA.length;i++){if(!hasOwnProperty.call(objB,keysA[i])||!is$1(objA[keysA[i]],objB[keysA[i]])){return false;}}return true;}/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */var lowPriorityWarningWithoutStack=function lowPriorityWarningWithoutStack(){};{var printWarning=function printWarning(format){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}var argIndex=0;var message='Warning: '+format.replace(/%s/g,function(){return args[argIndex++];});if(typeof console!=='undefined'){console.warn(message);}try{// --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(message);}catch(x){}};lowPriorityWarningWithoutStack=function lowPriorityWarningWithoutStack(condition,format){if(format===undefined){throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning '+'message argument');}if(!condition){for(var _len2=arguments.length,args=new Array(_len2>2?_len2-2:0),_key2=2;_key2<_len2;_key2++){args[_key2-2]=arguments[_key2];}printWarning.apply(void 0,[format].concat(args));}};}var lowPriorityWarningWithoutStack$1=lowPriorityWarningWithoutStack;var ReactStrictModeWarnings={recordUnsafeLifecycleWarnings:function recordUnsafeLifecycleWarnings(fiber,instance){},flushPendingUnsafeLifecycleWarnings:function flushPendingUnsafeLifecycleWarnings(){},recordLegacyContextWarning:function recordLegacyContextWarning(fiber,instance){},flushLegacyContextWarning:function flushLegacyContextWarning(){},discardPendingWarnings:function discardPendingWarnings(){}};{var findStrictRoot=function findStrictRoot(fiber){var maybeStrictRoot=null;var node=fiber;while(node!==null){if(node.mode&StrictMode){maybeStrictRoot=node;}node=node.return;}return maybeStrictRoot;};var setToSortedString=function setToSortedString(set){var array=[];set.forEach(function(value){array.push(value);});return array.sort().join(', ');};var pendingComponentWillMountWarnings=[];var pendingUNSAFE_ComponentWillMountWarnings=[];var pendingComponentWillReceivePropsWarnings=[];var pendingUNSAFE_ComponentWillReceivePropsWarnings=[];var pendingComponentWillUpdateWarnings=[];var pendingUNSAFE_ComponentWillUpdateWarnings=[];// Tracks components we have already warned about.
var didWarnAboutUnsafeLifecycles=new Set();ReactStrictModeWarnings.recordUnsafeLifecycleWarnings=function(fiber,instance){// Dedup strategy: Warn once per component.
if(didWarnAboutUnsafeLifecycles.has(fiber.type)){return;}if(typeof instance.componentWillMount==='function'&&// Don't warn about react-lifecycles-compat polyfilled components.
instance.componentWillMount.__suppressDeprecationWarning!==true){pendingComponentWillMountWarnings.push(fiber);}if(fiber.mode&StrictMode&&typeof instance.UNSAFE_componentWillMount==='function'){pendingUNSAFE_ComponentWillMountWarnings.push(fiber);}if(typeof instance.componentWillReceiveProps==='function'&&instance.componentWillReceiveProps.__suppressDeprecationWarning!==true){pendingComponentWillReceivePropsWarnings.push(fiber);}if(fiber.mode&StrictMode&&typeof instance.UNSAFE_componentWillReceiveProps==='function'){pendingUNSAFE_ComponentWillReceivePropsWarnings.push(fiber);}if(typeof instance.componentWillUpdate==='function'&&instance.componentWillUpdate.__suppressDeprecationWarning!==true){pendingComponentWillUpdateWarnings.push(fiber);}if(fiber.mode&StrictMode&&typeof instance.UNSAFE_componentWillUpdate==='function'){pendingUNSAFE_ComponentWillUpdateWarnings.push(fiber);}};ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings=function(){// We do an initial pass to gather component names
var componentWillMountUniqueNames=new Set();if(pendingComponentWillMountWarnings.length>0){pendingComponentWillMountWarnings.forEach(function(fiber){componentWillMountUniqueNames.add(getComponentName(fiber.type)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingComponentWillMountWarnings=[];}var UNSAFE_componentWillMountUniqueNames=new Set();if(pendingUNSAFE_ComponentWillMountWarnings.length>0){pendingUNSAFE_ComponentWillMountWarnings.forEach(function(fiber){UNSAFE_componentWillMountUniqueNames.add(getComponentName(fiber.type)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingUNSAFE_ComponentWillMountWarnings=[];}var componentWillReceivePropsUniqueNames=new Set();if(pendingComponentWillReceivePropsWarnings.length>0){pendingComponentWillReceivePropsWarnings.forEach(function(fiber){componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingComponentWillReceivePropsWarnings=[];}var UNSAFE_componentWillReceivePropsUniqueNames=new Set();if(pendingUNSAFE_ComponentWillReceivePropsWarnings.length>0){pendingUNSAFE_ComponentWillReceivePropsWarnings.forEach(function(fiber){UNSAFE_componentWillReceivePropsUniqueNames.add(getComponentName(fiber.type)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingUNSAFE_ComponentWillReceivePropsWarnings=[];}var componentWillUpdateUniqueNames=new Set();if(pendingComponentWillUpdateWarnings.length>0){pendingComponentWillUpdateWarnings.forEach(function(fiber){componentWillUpdateUniqueNames.add(getComponentName(fiber.type)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingComponentWillUpdateWarnings=[];}var UNSAFE_componentWillUpdateUniqueNames=new Set();if(pendingUNSAFE_ComponentWillUpdateWarnings.length>0){pendingUNSAFE_ComponentWillUpdateWarnings.forEach(function(fiber){UNSAFE_componentWillUpdateUniqueNames.add(getComponentName(fiber.type)||'Component');didWarnAboutUnsafeLifecycles.add(fiber.type);});pendingUNSAFE_ComponentWillUpdateWarnings=[];}// Finally, we flush all the warnings
// UNSAFE_ ones before the deprecated ones, since they'll be 'louder'
if(UNSAFE_componentWillMountUniqueNames.size>0){var sortedNames=setToSortedString(UNSAFE_componentWillMountUniqueNames);warningWithoutStack$1(false,'Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. '+'See https://fb.me/react-unsafe-component-lifecycles for details.\n\n'+'* Move code with side effects to componentDidMount, and set initial state in the constructor.\n'+'\nPlease update the following components: %s',sortedNames);}if(UNSAFE_componentWillReceivePropsUniqueNames.size>0){var _sortedNames=setToSortedString(UNSAFE_componentWillReceivePropsUniqueNames);warningWithoutStack$1(false,'Using UNSAFE_componentWillReceiveProps in strict mode is not recommended '+'and may indicate bugs in your code. '+'See https://fb.me/react-unsafe-component-lifecycles for details.\n\n'+'* Move data fetching code or side effects to componentDidUpdate.\n'+"* If you're updating state whenever props change, "+'refactor your code to use memoization techniques or move it to '+'static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state\n'+'\nPlease update the following components: %s',_sortedNames);}if(UNSAFE_componentWillUpdateUniqueNames.size>0){var _sortedNames2=setToSortedString(UNSAFE_componentWillUpdateUniqueNames);warningWithoutStack$1(false,'Using UNSAFE_componentWillUpdate in strict mode is not recommended '+'and may indicate bugs in your code. '+'See https://fb.me/react-unsafe-component-lifecycles for details.\n\n'+'* Move data fetching code or side effects to componentDidUpdate.\n'+'\nPlease update the following components: %s',_sortedNames2);}if(componentWillMountUniqueNames.size>0){var _sortedNames3=setToSortedString(componentWillMountUniqueNames);lowPriorityWarningWithoutStack$1(false,'componentWillMount has been renamed, and is not recommended for use. '+'See https://fb.me/react-unsafe-component-lifecycles for details.\n\n'+'* Move code with side effects to componentDidMount, and set initial state in the constructor.\n'+'* Rename componentWillMount to UNSAFE_componentWillMount to suppress '+'this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. '+'To rename all deprecated lifecycles to their new names, you can run '+'`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n'+'\nPlease update the following components: %s',_sortedNames3);}if(componentWillReceivePropsUniqueNames.size>0){var _sortedNames4=setToSortedString(componentWillReceivePropsUniqueNames);lowPriorityWarningWithoutStack$1(false,'componentWillReceiveProps has been renamed, and is not recommended for use. '+'See https://fb.me/react-unsafe-component-lifecycles for details.\n\n'+'* Move data fetching code or side effects to componentDidUpdate.\n'+"* If you're updating state whenever props change, refactor your "+'code to use memoization techniques or move it to '+'static getDerivedStateFromProps. Learn more at: https://fb.me/react-derived-state\n'+'* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress '+'this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. '+'To rename all deprecated lifecycles to their new names, you can run '+'`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n'+'\nPlease update the following components: %s',_sortedNames4);}if(componentWillUpdateUniqueNames.size>0){var _sortedNames5=setToSortedString(componentWillUpdateUniqueNames);lowPriorityWarningWithoutStack$1(false,'componentWillUpdate has been renamed, and is not recommended for use. '+'See https://fb.me/react-unsafe-component-lifecycles for details.\n\n'+'* Move data fetching code or side effects to componentDidUpdate.\n'+'* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress '+'this warning in non-strict mode. In React 17.x, only the UNSAFE_ name will work. '+'To rename all deprecated lifecycles to their new names, you can run '+'`npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n'+'\nPlease update the following components: %s',_sortedNames5);}};var pendingLegacyContextWarning=new Map();// Tracks components we have already warned about.
var didWarnAboutLegacyContext=new Set();ReactStrictModeWarnings.recordLegacyContextWarning=function(fiber,instance){var strictRoot=findStrictRoot(fiber);if(strictRoot===null){warningWithoutStack$1(false,'Expected to find a StrictMode component in a strict mode tree. '+'This error is likely caused by a bug in React. Please file an issue.');return;}// Dedup strategy: Warn once per component.
if(didWarnAboutLegacyContext.has(fiber.type)){return;}var warningsForRoot=pendingLegacyContextWarning.get(strictRoot);if(fiber.type.contextTypes!=null||fiber.type.childContextTypes!=null||instance!==null&&typeof instance.getChildContext==='function'){if(warningsForRoot===undefined){warningsForRoot=[];pendingLegacyContextWarning.set(strictRoot,warningsForRoot);}warningsForRoot.push(fiber);}};ReactStrictModeWarnings.flushLegacyContextWarning=function(){pendingLegacyContextWarning.forEach(function(fiberArray,strictRoot){var uniqueNames=new Set();fiberArray.forEach(function(fiber){uniqueNames.add(getComponentName(fiber.type)||'Component');didWarnAboutLegacyContext.add(fiber.type);});var sortedNames=setToSortedString(uniqueNames);var strictRootComponentStack=getStackByFiberInDevAndProd(strictRoot);warningWithoutStack$1(false,'Legacy context API has been detected within a strict-mode tree.'+'\n\nThe old API will be supported in all 16.x releases, but applications '+'using it should migrate to the new version.'+'\n\nPlease update the following components: %s'+'\n\nLearn more about this warning here: https://fb.me/react-legacy-context'+'%s',sortedNames,strictRootComponentStack);});};ReactStrictModeWarnings.discardPendingWarnings=function(){pendingComponentWillMountWarnings=[];pendingUNSAFE_ComponentWillMountWarnings=[];pendingComponentWillReceivePropsWarnings=[];pendingUNSAFE_ComponentWillReceivePropsWarnings=[];pendingComponentWillUpdateWarnings=[];pendingUNSAFE_ComponentWillUpdateWarnings=[];pendingLegacyContextWarning=new Map();};}var resolveFamily=null;// $FlowFixMe Flow gets confused by a WeakSet feature check below.
var failedBoundaries=null;var setRefreshHandler=function setRefreshHandler(handler){{resolveFamily=handler;}};function resolveFunctionForHotReloading(type){{if(resolveFamily===null){// Hot reloading is disabled.
return type;}var family=resolveFamily(type);if(family===undefined){return type;}// Use the latest known implementation.
return family.current;}}function resolveClassForHotReloading(type){// No implementation differences.
return resolveFunctionForHotReloading(type);}function resolveForwardRefForHotReloading(type){{if(resolveFamily===null){// Hot reloading is disabled.
return type;}var family=resolveFamily(type);if(family===undefined){// Check if we're dealing with a real forwardRef. Don't want to crash early.
if(type!==null&&type!==undefined&&typeof type.render==='function'){// ForwardRef is special because its resolved .type is an object,
// but it's possible that we only have its inner render function in the map.
// If that inner render function is different, we'll build a new forwardRef type.
var currentRender=resolveFunctionForHotReloading(type.render);if(type.render!==currentRender){var syntheticType={$$typeof:REACT_FORWARD_REF_TYPE,render:currentRender};if(type.displayName!==undefined){syntheticType.displayName=type.displayName;}return syntheticType;}}return type;}// Use the latest known implementation.
return family.current;}}function isCompatibleFamilyForHotReloading(fiber,element){{if(resolveFamily===null){// Hot reloading is disabled.
return false;}var prevType=fiber.elementType;var nextType=element.type;// If we got here, we know types aren't === equal.
var needsCompareFamilies=false;var $$typeofNextType=_typeof(nextType)==='object'&&nextType!==null?nextType.$$typeof:null;switch(fiber.tag){case ClassComponent:{if(typeof nextType==='function'){needsCompareFamilies=true;}break;}case FunctionComponent:{if(typeof nextType==='function'){needsCompareFamilies=true;}else if($$typeofNextType===REACT_LAZY_TYPE){// We don't know the inner type yet.
// We're going to assume that the lazy inner type is stable,
// and so it is sufficient to avoid reconciling it away.
// We're not going to unwrap or actually use the new lazy type.
needsCompareFamilies=true;}break;}case ForwardRef:{if($$typeofNextType===REACT_FORWARD_REF_TYPE){needsCompareFamilies=true;}else if($$typeofNextType===REACT_LAZY_TYPE){needsCompareFamilies=true;}break;}case MemoComponent:case SimpleMemoComponent:{if($$typeofNextType===REACT_MEMO_TYPE){// TODO: if it was but can no longer be simple,
// we shouldn't set this.
needsCompareFamilies=true;}else if($$typeofNextType===REACT_LAZY_TYPE){needsCompareFamilies=true;}break;}default:return false;}// Check if both types have a family and it's the same one.
if(needsCompareFamilies){// Note: memo() and forwardRef() we'll compare outer rather than inner type.
// This means both of them need to be registered to preserve state.
// If we unwrapped and compared the inner types for wrappers instead,
// then we would risk falsely saying two separate memo(Foo)
// calls are equivalent because they wrap the same Foo function.
var prevFamily=resolveFamily(prevType);if(prevFamily!==undefined&&prevFamily===resolveFamily(nextType)){return true;}}return false;}}function markFailedErrorBoundaryForHotReloading(fiber){{if(resolveFamily===null){// Hot reloading is disabled.
return;}if(typeof WeakSet!=='function'){return;}if(failedBoundaries===null){failedBoundaries=new WeakSet();}failedBoundaries.add(fiber);}}var scheduleRefresh=function scheduleRefresh(root,update){{if(resolveFamily===null){// Hot reloading is disabled.
return;}var staleFamilies=update.staleFamilies,updatedFamilies=update.updatedFamilies;flushPassiveEffects();flushSync(function(){scheduleFibersWithFamiliesRecursively(root.current,updatedFamilies,staleFamilies);});}};var scheduleRoot=function scheduleRoot(root,element){{if(root.context!==emptyContextObject){// Super edge case: root has a legacy _renderSubtree context
// but we don't know the parentComponent so we can't pass it.
// Just ignore. We'll delete this with _renderSubtree code path later.
return;}flushPassiveEffects();syncUpdates(function(){updateContainer(element,root,null,null);});}};function scheduleFibersWithFamiliesRecursively(fiber,updatedFamilies,staleFamilies){{var alternate=fiber.alternate,child=fiber.child,sibling=fiber.sibling,tag=fiber.tag,type=fiber.type;var candidateType=null;switch(tag){case FunctionComponent:case SimpleMemoComponent:case ClassComponent:candidateType=type;break;case ForwardRef:candidateType=type.render;break;default:break;}if(resolveFamily===null){throw new Error('Expected resolveFamily to be set during hot reload.');}var needsRender=false;var needsRemount=false;if(candidateType!==null){var family=resolveFamily(candidateType);if(family!==undefined){if(staleFamilies.has(family)){needsRemount=true;}else if(updatedFamilies.has(family)){if(tag===ClassComponent){needsRemount=true;}else{needsRender=true;}}}}if(failedBoundaries!==null){if(failedBoundaries.has(fiber)||alternate!==null&&failedBoundaries.has(alternate)){needsRemount=true;}}if(needsRemount){fiber._debugNeedsRemount=true;}if(needsRemount||needsRender){scheduleWork(fiber,Sync);}if(child!==null&&!needsRemount){scheduleFibersWithFamiliesRecursively(child,updatedFamilies,staleFamilies);}if(sibling!==null){scheduleFibersWithFamiliesRecursively(sibling,updatedFamilies,staleFamilies);}}}var findHostInstancesForRefresh=function findHostInstancesForRefresh(root,families){{var hostInstances=new Set();var types=new Set(families.map(function(family){return family.current;}));findHostInstancesForMatchingFibersRecursively(root.current,types,hostInstances);return hostInstances;}};function findHostInstancesForMatchingFibersRecursively(fiber,types,hostInstances){{var child=fiber.child,sibling=fiber.sibling,tag=fiber.tag,type=fiber.type;var candidateType=null;switch(tag){case FunctionComponent:case SimpleMemoComponent:case ClassComponent:candidateType=type;break;case ForwardRef:candidateType=type.render;break;default:break;}var didMatch=false;if(candidateType!==null){if(types.has(candidateType)){didMatch=true;}}if(didMatch){// We have a match. This only drills down to the closest host components.
// There's no need to search deeper because for the purpose of giving
// visual feedback, "flashing" outermost parent rectangles is sufficient.
findHostInstancesForFiberShallowly(fiber,hostInstances);}else{// If there's no match, maybe there will be one further down in the child tree.
if(child!==null){findHostInstancesForMatchingFibersRecursively(child,types,hostInstances);}}if(sibling!==null){findHostInstancesForMatchingFibersRecursively(sibling,types,hostInstances);}}}function findHostInstancesForFiberShallowly(fiber,hostInstances){{var foundHostInstances=findChildHostInstancesForFiberShallowly(fiber,hostInstances);if(foundHostInstances){return;}// If we didn't find any host children, fallback to closest host parent.
var node=fiber;while(true){switch(node.tag){case HostComponent:hostInstances.add(node.stateNode);return;case HostPortal:hostInstances.add(node.stateNode.containerInfo);return;case HostRoot:hostInstances.add(node.stateNode.containerInfo);return;}if(node.return===null){throw new Error('Expected to reach root first.');}node=node.return;}}}function findChildHostInstancesForFiberShallowly(fiber,hostInstances){{var node=fiber;var foundHostInstances=false;while(true){if(node.tag===HostComponent){// We got a match.
foundHostInstances=true;hostInstances.add(node.stateNode);// There may still be more, so keep searching.
}else if(node.child!==null){node.child.return=node;node=node.child;continue;}if(node===fiber){return foundHostInstances;}while(node.sibling===null){if(node.return===null||node.return===fiber){return foundHostInstances;}node=node.return;}node.sibling.return=node.return;node=node.sibling;}}return false;}function resolveDefaultProps(Component,baseProps){if(Component&&Component.defaultProps){// Resolve default props. Taken from ReactElement
var props=_assign({},baseProps);var defaultProps=Component.defaultProps;for(var propName in defaultProps){if(props[propName]===undefined){props[propName]=defaultProps[propName];}}return props;}return baseProps;}function readLazyComponentType(lazyComponent){initializeLazyComponentType(lazyComponent);if(lazyComponent._status!==Resolved){throw lazyComponent._result;}return lazyComponent._result;}var valueCursor=createCursor(null);var rendererSigil;{// Use this to detect multiple renderers using the same context
rendererSigil={};}var currentlyRenderingFiber=null;var lastContextDependency=null;var lastContextWithAllBitsObserved=null;var isDisallowedContextReadInDEV=false;function resetContextDependencies(){// This is called right before React yields execution, to ensure `readContext`
// cannot be called outside the render phase.
currentlyRenderingFiber=null;lastContextDependency=null;lastContextWithAllBitsObserved=null;{isDisallowedContextReadInDEV=false;}}function enterDisallowedContextReadInDEV(){{isDisallowedContextReadInDEV=true;}}function exitDisallowedContextReadInDEV(){{isDisallowedContextReadInDEV=false;}}function pushProvider(providerFiber,nextValue){var context=providerFiber.type._context;if(isPrimaryRenderer){push(valueCursor,context._currentValue,providerFiber);context._currentValue=nextValue;{!(context._currentRenderer===undefined||context._currentRenderer===null||context._currentRenderer===rendererSigil)?warningWithoutStack$1(false,'Detected multiple renderers concurrently rendering the '+'same context provider. This is currently unsupported.'):void 0;context._currentRenderer=rendererSigil;}}else{push(valueCursor,context._currentValue2,providerFiber);context._currentValue2=nextValue;{!(context._currentRenderer2===undefined||context._currentRenderer2===null||context._currentRenderer2===rendererSigil)?warningWithoutStack$1(false,'Detected multiple renderers concurrently rendering the '+'same context provider. This is currently unsupported.'):void 0;context._currentRenderer2=rendererSigil;}}}function popProvider(providerFiber){var currentValue=valueCursor.current;pop(valueCursor,providerFiber);var context=providerFiber.type._context;if(isPrimaryRenderer){context._currentValue=currentValue;}else{context._currentValue2=currentValue;}}function calculateChangedBits(context,newValue,oldValue){if(is$1(oldValue,newValue)){// No change
return 0;}else{var changedBits=typeof context._calculateChangedBits==='function'?context._calculateChangedBits(oldValue,newValue):MAX_SIGNED_31_BIT_INT;{!((changedBits&MAX_SIGNED_31_BIT_INT)===changedBits)?warning$1(false,'calculateChangedBits: Expected the return value to be a '+'31-bit integer. Instead received: %s',changedBits):void 0;}return changedBits|0;}}function scheduleWorkOnParentPath(parent,renderExpirationTime){// Update the child expiration time of all the ancestors, including
// the alternates.
var node=parent;while(node!==null){var alternate=node.alternate;if(node.childExpirationTime<renderExpirationTime){node.childExpirationTime=renderExpirationTime;if(alternate!==null&&alternate.childExpirationTime<renderExpirationTime){alternate.childExpirationTime=renderExpirationTime;}}else if(alternate!==null&&alternate.childExpirationTime<renderExpirationTime){alternate.childExpirationTime=renderExpirationTime;}else{// Neither alternate was updated, which means the rest of the
// ancestor path already has sufficient priority.
break;}node=node.return;}}function propagateContextChange(workInProgress,context,changedBits,renderExpirationTime){var fiber=workInProgress.child;if(fiber!==null){// Set the return pointer of the child to the work-in-progress fiber.
fiber.return=workInProgress;}while(fiber!==null){var nextFiber=void 0;// Visit this fiber.
var list=fiber.dependencies;if(list!==null){nextFiber=fiber.child;var dependency=list.firstContext;while(dependency!==null){// Check if the context matches.
if(dependency.context===context&&(dependency.observedBits&changedBits)!==0){// Match! Schedule an update on this fiber.
if(fiber.tag===ClassComponent){// Schedule a force update on the work-in-progress.
var update=createUpdate(renderExpirationTime,null);update.tag=ForceUpdate;// TODO: Because we don't have a work-in-progress, this will add the
// update to the current fiber, too, which means it will persist even if
// this render is thrown away. Since it's a race condition, not sure it's
// worth fixing.
enqueueUpdate(fiber,update);}if(fiber.expirationTime<renderExpirationTime){fiber.expirationTime=renderExpirationTime;}var alternate=fiber.alternate;if(alternate!==null&&alternate.expirationTime<renderExpirationTime){alternate.expirationTime=renderExpirationTime;}scheduleWorkOnParentPath(fiber.return,renderExpirationTime);// Mark the expiration time on the list, too.
if(list.expirationTime<renderExpirationTime){list.expirationTime=renderExpirationTime;}// Since we already found a match, we can stop traversing the
// dependency list.
break;}dependency=dependency.next;}}else if(fiber.tag===ContextProvider){// Don't scan deeper if this is a matching provider
nextFiber=fiber.type===workInProgress.type?null:fiber.child;}else if(enableSuspenseServerRenderer&&fiber.tag===DehydratedFragment){// If a dehydrated suspense bounudary is in this subtree, we don't know
// if it will have any context consumers in it. The best we can do is
// mark it as having updates.
var parentSuspense=fiber.return;if(!(parentSuspense!==null)){{throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");}}if(parentSuspense.expirationTime<renderExpirationTime){parentSuspense.expirationTime=renderExpirationTime;}var _alternate=parentSuspense.alternate;if(_alternate!==null&&_alternate.expirationTime<renderExpirationTime){_alternate.expirationTime=renderExpirationTime;}// This is intentionally passing this fiber as the parent
// because we want to schedule this fiber as having work
// on its children. We'll use the childExpirationTime on
// this fiber to indicate that a context has changed.
scheduleWorkOnParentPath(parentSuspense,renderExpirationTime);nextFiber=fiber.sibling;}else{// Traverse down.
nextFiber=fiber.child;}if(nextFiber!==null){// Set the return pointer of the child to the work-in-progress fiber.
nextFiber.return=fiber;}else{// No child. Traverse to next sibling.
nextFiber=fiber;while(nextFiber!==null){if(nextFiber===workInProgress){// We're back to the root of this subtree. Exit.
nextFiber=null;break;}var sibling=nextFiber.sibling;if(sibling!==null){// Set the return pointer of the sibling to the work-in-progress fiber.
sibling.return=nextFiber.return;nextFiber=sibling;break;}// No more siblings. Traverse up.
nextFiber=nextFiber.return;}}fiber=nextFiber;}}function prepareToReadContext(workInProgress,renderExpirationTime){currentlyRenderingFiber=workInProgress;lastContextDependency=null;lastContextWithAllBitsObserved=null;var dependencies=workInProgress.dependencies;if(dependencies!==null){var firstContext=dependencies.firstContext;if(firstContext!==null){if(dependencies.expirationTime>=renderExpirationTime){// Context list has a pending update. Mark that this fiber performed work.
markWorkInProgressReceivedUpdate();}// Reset the work-in-progress list
dependencies.firstContext=null;}}}function _readContext(context,observedBits){{// This warning would fire if you read context inside a Hook like useMemo.
// Unlike the class check below, it's not enforced in production for perf.
!!isDisallowedContextReadInDEV?warning$1(false,'Context can only be read while React is rendering. '+'In classes, you can read it in the render method or getDerivedStateFromProps. '+'In function components, you can read it directly in the function body, but not '+'inside Hooks like useReducer() or useMemo().'):void 0;}if(lastContextWithAllBitsObserved===context){// Nothing to do. We already observe everything in this context.
}else if(observedBits===false||observedBits===0){// Do not observe any updates.
}else{var resolvedObservedBits;// Avoid deopting on observable arguments or heterogeneous types.
if(typeof observedBits!=='number'||observedBits===MAX_SIGNED_31_BIT_INT){// Observe all updates.
lastContextWithAllBitsObserved=context;resolvedObservedBits=MAX_SIGNED_31_BIT_INT;}else{resolvedObservedBits=observedBits;}var contextItem={context:context,observedBits:resolvedObservedBits,next:null};if(lastContextDependency===null){if(!(currentlyRenderingFiber!==null)){{throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");}}// This is the first dependency for this component. Create a new list.
lastContextDependency=contextItem;currentlyRenderingFiber.dependencies={expirationTime:NoWork,firstContext:contextItem,responders:null};}else{// Append a new context item.
lastContextDependency=lastContextDependency.next=contextItem;}}return isPrimaryRenderer?context._currentValue:context._currentValue2;}// UpdateQueue is a linked list of prioritized updates.
//
// Like fibers, update queues come in pairs: a current queue, which represents
// the visible state of the screen, and a work-in-progress queue, which can be
// mutated and processed asynchronously before it is committed — a form of
// double buffering. If a work-in-progress render is discarded before finishing,
// we create a new work-in-progress by cloning the current queue.
//
// Both queues share a persistent, singly-linked list structure. To schedule an
// update, we append it to the end of both queues. Each queue maintains a
// pointer to first update in the persistent list that hasn't been processed.
// The work-in-progress pointer always has a position equal to or greater than
// the current queue, since we always work on that one. The current queue's
// pointer is only updated during the commit phase, when we swap in the
// work-in-progress.
//
// For example:
//
//   Current pointer:           A - B - C - D - E - F
//   Work-in-progress pointer:              D - E - F
//                                          ^
//                                          The work-in-progress queue has
//                                          processed more updates than current.
//
// The reason we append to both queues is because otherwise we might drop
// updates without ever processing them. For example, if we only add updates to
// the work-in-progress queue, some updates could be lost whenever a work-in
// -progress render restarts by cloning from current. Similarly, if we only add
// updates to the current queue, the updates will be lost whenever an already
// in-progress queue commits and swaps with the current queue. However, by
// adding to both queues, we guarantee that the update will be part of the next
// work-in-progress. (And because the work-in-progress queue becomes the
// current queue once it commits, there's no danger of applying the same
// update twice.)
//
// Prioritization
// --------------
//
// Updates are not sorted by priority, but by insertion; new updates are always
// appended to the end of the list.
//
// The priority is still important, though. When processing the update queue
// during the render phase, only the updates with sufficient priority are
// included in the result. If we skip an update because it has insufficient
// priority, it remains in the queue to be processed later, during a lower
// priority render. Crucially, all updates subsequent to a skipped update also
// remain in the queue *regardless of their priority*. That means high priority
// updates are sometimes processed twice, at two separate priorities. We also
// keep track of a base state, that represents the state before the first
// update in the queue is applied.
//
// For example:
//
//   Given a base state of '', and the following queue of updates
//
//     A1 - B2 - C1 - D2
//
//   where the number indicates the priority, and the update is applied to the
//   previous state by appending a letter, React will process these updates as
//   two separate renders, one per distinct priority level:
//
//   First render, at priority 1:
//     Base state: ''
//     Updates: [A1, C1]
//     Result state: 'AC'
//
//   Second render, at priority 2:
//     Base state: 'A'            <-  The base state does not include C1,
//                                    because B2 was skipped.
//     Updates: [B2, C1, D2]      <-  C1 was rebased on top of B2
//     Result state: 'ABCD'
//
// Because we process updates in insertion order, and rebase high priority
// updates when preceding updates are skipped, the final result is deterministic
// regardless of priority. Intermediate state may vary according to system
// resources, but the final state is always the same.
var UpdateState=0;var ReplaceState=1;var ForceUpdate=2;var CaptureUpdate=3;// Global state that is reset at the beginning of calling `processUpdateQueue`.
// It should only be read right after calling `processUpdateQueue`, via
// `checkHasForceUpdateAfterProcessing`.
var hasForceUpdate=false;var didWarnUpdateInsideUpdate;var currentlyProcessingQueue;{didWarnUpdateInsideUpdate=false;currentlyProcessingQueue=null;}function createUpdateQueue(baseState){var queue={baseState:baseState,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null};return queue;}function cloneUpdateQueue(currentQueue){var queue={baseState:currentQueue.baseState,firstUpdate:currentQueue.firstUpdate,lastUpdate:currentQueue.lastUpdate,// TODO: With resuming, if we bail out and resuse the child tree, we should
// keep these effects.
firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null};return queue;}function createUpdate(expirationTime,suspenseConfig){var update={expirationTime:expirationTime,suspenseConfig:suspenseConfig,tag:UpdateState,payload:null,callback:null,next:null,nextEffect:null};{update.priority=getCurrentPriorityLevel();}return update;}function appendUpdateToQueue(queue,update){// Append the update to the end of the list.
if(queue.lastUpdate===null){// Queue is empty
queue.firstUpdate=queue.lastUpdate=update;}else{queue.lastUpdate.next=update;queue.lastUpdate=update;}}function enqueueUpdate(fiber,update){// Update queues are created lazily.
var alternate=fiber.alternate;var queue1;var queue2;if(alternate===null){// There's only one fiber.
queue1=fiber.updateQueue;queue2=null;if(queue1===null){queue1=fiber.updateQueue=createUpdateQueue(fiber.memoizedState);}}else{// There are two owners.
queue1=fiber.updateQueue;queue2=alternate.updateQueue;if(queue1===null){if(queue2===null){// Neither fiber has an update queue. Create new ones.
queue1=fiber.updateQueue=createUpdateQueue(fiber.memoizedState);queue2=alternate.updateQueue=createUpdateQueue(alternate.memoizedState);}else{// Only one fiber has an update queue. Clone to create a new one.
queue1=fiber.updateQueue=cloneUpdateQueue(queue2);}}else{if(queue2===null){// Only one fiber has an update queue. Clone to create a new one.
queue2=alternate.updateQueue=cloneUpdateQueue(queue1);}else{// Both owners have an update queue.
}}}if(queue2===null||queue1===queue2){// There's only a single queue.
appendUpdateToQueue(queue1,update);}else{// There are two queues. We need to append the update to both queues,
// while accounting for the persistent structure of the list — we don't
// want the same update to be added multiple times.
if(queue1.lastUpdate===null||queue2.lastUpdate===null){// One of the queues is not empty. We must add the update to both queues.
appendUpdateToQueue(queue1,update);appendUpdateToQueue(queue2,update);}else{// Both queues are non-empty. The last update is the same in both lists,
// because of structural sharing. So, only append to one of the lists.
appendUpdateToQueue(queue1,update);// But we still need to update the `lastUpdate` pointer of queue2.
queue2.lastUpdate=update;}}{if(fiber.tag===ClassComponent&&(currentlyProcessingQueue===queue1||queue2!==null&&currentlyProcessingQueue===queue2)&&!didWarnUpdateInsideUpdate){warningWithoutStack$1(false,'An update (setState, replaceState, or forceUpdate) was scheduled '+'from inside an update function. Update functions should be pure, '+'with zero side-effects. Consider using componentDidUpdate or a '+'callback.');didWarnUpdateInsideUpdate=true;}}}function enqueueCapturedUpdate(workInProgress,update){// Captured updates go into a separate list, and only on the work-in-
// progress queue.
var workInProgressQueue=workInProgress.updateQueue;if(workInProgressQueue===null){workInProgressQueue=workInProgress.updateQueue=createUpdateQueue(workInProgress.memoizedState);}else{// TODO: I put this here rather than createWorkInProgress so that we don't
// clone the queue unnecessarily. There's probably a better way to
// structure this.
workInProgressQueue=ensureWorkInProgressQueueIsAClone(workInProgress,workInProgressQueue);}// Append the update to the end of the list.
if(workInProgressQueue.lastCapturedUpdate===null){// This is the first render phase update
workInProgressQueue.firstCapturedUpdate=workInProgressQueue.lastCapturedUpdate=update;}else{workInProgressQueue.lastCapturedUpdate.next=update;workInProgressQueue.lastCapturedUpdate=update;}}function ensureWorkInProgressQueueIsAClone(workInProgress,queue){var current=workInProgress.alternate;if(current!==null){// If the work-in-progress queue is equal to the current queue,
// we need to clone it first.
if(queue===current.updateQueue){queue=workInProgress.updateQueue=cloneUpdateQueue(queue);}}return queue;}function getStateFromUpdate(workInProgress,queue,update,prevState,nextProps,instance){switch(update.tag){case ReplaceState:{var payload=update.payload;if(typeof payload==='function'){// Updater function
{enterDisallowedContextReadInDEV();if(debugRenderPhaseSideEffects||debugRenderPhaseSideEffectsForStrictMode&&workInProgress.mode&StrictMode){payload.call(instance,prevState,nextProps);}}var nextState=payload.call(instance,prevState,nextProps);{exitDisallowedContextReadInDEV();}return nextState;}// State object
return payload;}case CaptureUpdate:{workInProgress.effectTag=workInProgress.effectTag&~ShouldCapture|DidCapture;}// Intentional fallthrough
case UpdateState:{var _payload=update.payload;var partialState;if(typeof _payload==='function'){// Updater function
{enterDisallowedContextReadInDEV();if(debugRenderPhaseSideEffects||debugRenderPhaseSideEffectsForStrictMode&&workInProgress.mode&StrictMode){_payload.call(instance,prevState,nextProps);}}partialState=_payload.call(instance,prevState,nextProps);{exitDisallowedContextReadInDEV();}}else{// Partial state object
partialState=_payload;}if(partialState===null||partialState===undefined){// Null and undefined are treated as no-ops.
return prevState;}// Merge the partial state and the previous state.
return _assign({},prevState,partialState);}case ForceUpdate:{hasForceUpdate=true;return prevState;}}return prevState;}function processUpdateQueue(workInProgress,queue,props,instance,renderExpirationTime){hasForceUpdate=false;queue=ensureWorkInProgressQueueIsAClone(workInProgress,queue);{currentlyProcessingQueue=queue;}// These values may change as we process the queue.
var newBaseState=queue.baseState;var newFirstUpdate=null;var newExpirationTime=NoWork;// Iterate through the list of updates to compute the result.
var update=queue.firstUpdate;var resultState=newBaseState;while(update!==null){var updateExpirationTime=update.expirationTime;if(updateExpirationTime<renderExpirationTime){// This update does not have sufficient priority. Skip it.
if(newFirstUpdate===null){// This is the first skipped update. It will be the first update in
// the new list.
newFirstUpdate=update;// Since this is the first update that was skipped, the current result
// is the new base state.
newBaseState=resultState;}// Since this update will remain in the list, update the remaining
// expiration time.
if(newExpirationTime<updateExpirationTime){newExpirationTime=updateExpirationTime;}}else{// This update does have sufficient priority.
// Mark the event time of this update as relevant to this render pass.
// TODO: This should ideally use the true event time of this update rather than
// its priority which is a derived and not reverseable value.
// TODO: We should skip this update if it was already committed but currently
// we have no way of detecting the difference between a committed and suspended
// update here.
markRenderEventTimeAndConfig(updateExpirationTime,update.suspenseConfig);// Process it and compute a new result.
resultState=getStateFromUpdate(workInProgress,queue,update,resultState,props,instance);var callback=update.callback;if(callback!==null){workInProgress.effectTag|=Callback;// Set this to null, in case it was mutated during an aborted render.
update.nextEffect=null;if(queue.lastEffect===null){queue.firstEffect=queue.lastEffect=update;}else{queue.lastEffect.nextEffect=update;queue.lastEffect=update;}}}// Continue to the next update.
update=update.next;}// Separately, iterate though the list of captured updates.
var newFirstCapturedUpdate=null;update=queue.firstCapturedUpdate;while(update!==null){var _updateExpirationTime=update.expirationTime;if(_updateExpirationTime<renderExpirationTime){// This update does not have sufficient priority. Skip it.
if(newFirstCapturedUpdate===null){// This is the first skipped captured update. It will be the first
// update in the new list.
newFirstCapturedUpdate=update;// If this is the first update that was skipped, the current result is
// the new base state.
if(newFirstUpdate===null){newBaseState=resultState;}}// Since this update will remain in the list, update the remaining
// expiration time.
if(newExpirationTime<_updateExpirationTime){newExpirationTime=_updateExpirationTime;}}else{// This update does have sufficient priority. Process it and compute
// a new result.
resultState=getStateFromUpdate(workInProgress,queue,update,resultState,props,instance);var _callback=update.callback;if(_callback!==null){workInProgress.effectTag|=Callback;// Set this to null, in case it was mutated during an aborted render.
update.nextEffect=null;if(queue.lastCapturedEffect===null){queue.firstCapturedEffect=queue.lastCapturedEffect=update;}else{queue.lastCapturedEffect.nextEffect=update;queue.lastCapturedEffect=update;}}}update=update.next;}if(newFirstUpdate===null){queue.lastUpdate=null;}if(newFirstCapturedUpdate===null){queue.lastCapturedUpdate=null;}else{workInProgress.effectTag|=Callback;}if(newFirstUpdate===null&&newFirstCapturedUpdate===null){// We processed every update, without skipping. That means the new base
// state is the same as the result state.
newBaseState=resultState;}queue.baseState=newBaseState;queue.firstUpdate=newFirstUpdate;queue.firstCapturedUpdate=newFirstCapturedUpdate;// Set the remaining expiration time to be whatever is remaining in the queue.
// This should be fine because the only two other things that contribute to
// expiration time are props and context. We're already in the middle of the
// begin phase by the time we start processing the queue, so we've already
// dealt with the props. Context in components that specify
// shouldComponentUpdate is tricky; but we'll have to account for
// that regardless.
markUnprocessedUpdateTime(newExpirationTime);workInProgress.expirationTime=newExpirationTime;workInProgress.memoizedState=resultState;{currentlyProcessingQueue=null;}}function callCallback(callback,context){if(!(typeof callback==='function')){{throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+callback);}}callback.call(context);}function resetHasForceUpdateBeforeProcessing(){hasForceUpdate=false;}function checkHasForceUpdateAfterProcessing(){return hasForceUpdate;}function commitUpdateQueue(finishedWork,finishedQueue,instance,renderExpirationTime){// If the finished render included captured updates, and there are still
// lower priority updates left over, we need to keep the captured updates
// in the queue so that they are rebased and not dropped once we process the
// queue again at the lower priority.
if(finishedQueue.firstCapturedUpdate!==null){// Join the captured update list to the end of the normal list.
if(finishedQueue.lastUpdate!==null){finishedQueue.lastUpdate.next=finishedQueue.firstCapturedUpdate;finishedQueue.lastUpdate=finishedQueue.lastCapturedUpdate;}// Clear the list of captured updates.
finishedQueue.firstCapturedUpdate=finishedQueue.lastCapturedUpdate=null;}// Commit the effects
commitUpdateEffects(finishedQueue.firstEffect,instance);finishedQueue.firstEffect=finishedQueue.lastEffect=null;commitUpdateEffects(finishedQueue.firstCapturedEffect,instance);finishedQueue.firstCapturedEffect=finishedQueue.lastCapturedEffect=null;}function commitUpdateEffects(effect,instance){while(effect!==null){var callback=effect.callback;if(callback!==null){effect.callback=null;callCallback(callback,instance);}effect=effect.nextEffect;}}var ReactCurrentBatchConfig=ReactSharedInternals.ReactCurrentBatchConfig;function requestCurrentSuspenseConfig(){return ReactCurrentBatchConfig.suspense;}var fakeInternalInstance={};var isArray$1=Array.isArray;// React.Component uses a shared frozen object by default.
// We'll use it to determine whether we need to initialize legacy refs.
var emptyRefsObject=new React.Component().refs;var didWarnAboutStateAssignmentForComponent;var didWarnAboutUninitializedState;var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;var didWarnAboutLegacyLifecyclesAndDerivedState;var didWarnAboutUndefinedDerivedState;var warnOnUndefinedDerivedState;var warnOnInvalidCallback;var didWarnAboutDirectlyAssigningPropsToState;var didWarnAboutContextTypeAndContextTypes;var didWarnAboutInvalidateContextType;{didWarnAboutStateAssignmentForComponent=new Set();didWarnAboutUninitializedState=new Set();didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate=new Set();didWarnAboutLegacyLifecyclesAndDerivedState=new Set();didWarnAboutDirectlyAssigningPropsToState=new Set();didWarnAboutUndefinedDerivedState=new Set();didWarnAboutContextTypeAndContextTypes=new Set();didWarnAboutInvalidateContextType=new Set();var didWarnOnInvalidCallback=new Set();warnOnInvalidCallback=function warnOnInvalidCallback(callback,callerName){if(callback===null||typeof callback==='function'){return;}var key=callerName+"_"+callback;if(!didWarnOnInvalidCallback.has(key)){didWarnOnInvalidCallback.add(key);warningWithoutStack$1(false,'%s(...): Expected the last optional `callback` argument to be a '+'function. Instead received: %s.',callerName,callback);}};warnOnUndefinedDerivedState=function warnOnUndefinedDerivedState(type,partialState){if(partialState===undefined){var componentName=getComponentName(type)||'Component';if(!didWarnAboutUndefinedDerivedState.has(componentName)){didWarnAboutUndefinedDerivedState.add(componentName);warningWithoutStack$1(false,'%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. '+'You have returned undefined.',componentName);}}};// This is so gross but it's at least non-critical and can be removed if
// it causes problems. This is meant to give a nicer error message for
// ReactDOM15.unstable_renderSubtreeIntoContainer(reactDOM16Component,
// ...)) which otherwise throws a "_processChildContext is not a function"
// exception.
Object.defineProperty(fakeInternalInstance,'_processChildContext',{enumerable:false,value:function value(){{{throw Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");}}}});Object.freeze(fakeInternalInstance);}function applyDerivedStateFromProps(workInProgress,ctor,getDerivedStateFromProps,nextProps){var prevState=workInProgress.memoizedState;{if(debugRenderPhaseSideEffects||debugRenderPhaseSideEffectsForStrictMode&&workInProgress.mode&StrictMode){// Invoke the function an extra time to help detect side-effects.
getDerivedStateFromProps(nextProps,prevState);}}var partialState=getDerivedStateFromProps(nextProps,prevState);{warnOnUndefinedDerivedState(ctor,partialState);}// Merge the partial state and the previous state.
var memoizedState=partialState===null||partialState===undefined?prevState:_assign({},prevState,partialState);workInProgress.memoizedState=memoizedState;// Once the update queue is empty, persist the derived state onto the
// base state.
var updateQueue=workInProgress.updateQueue;if(updateQueue!==null&&workInProgress.expirationTime===NoWork){updateQueue.baseState=memoizedState;}}var classComponentUpdater={isMounted:isMounted,enqueueSetState:function enqueueSetState(inst,payload,callback){var fiber=get(inst);var currentTime=requestCurrentTimeForUpdate();var suspenseConfig=requestCurrentSuspenseConfig();var expirationTime=computeExpirationForFiber(currentTime,fiber,suspenseConfig);var update=createUpdate(expirationTime,suspenseConfig);update.payload=payload;if(callback!==undefined&&callback!==null){{warnOnInvalidCallback(callback,'setState');}update.callback=callback;}enqueueUpdate(fiber,update);scheduleWork(fiber,expirationTime);},enqueueReplaceState:function enqueueReplaceState(inst,payload,callback){var fiber=get(inst);var currentTime=requestCurrentTimeForUpdate();var suspenseConfig=requestCurrentSuspenseConfig();var expirationTime=computeExpirationForFiber(currentTime,fiber,suspenseConfig);var update=createUpdate(expirationTime,suspenseConfig);update.tag=ReplaceState;update.payload=payload;if(callback!==undefined&&callback!==null){{warnOnInvalidCallback(callback,'replaceState');}update.callback=callback;}enqueueUpdate(fiber,update);scheduleWork(fiber,expirationTime);},enqueueForceUpdate:function enqueueForceUpdate(inst,callback){var fiber=get(inst);var currentTime=requestCurrentTimeForUpdate();var suspenseConfig=requestCurrentSuspenseConfig();var expirationTime=computeExpirationForFiber(currentTime,fiber,suspenseConfig);var update=createUpdate(expirationTime,suspenseConfig);update.tag=ForceUpdate;if(callback!==undefined&&callback!==null){{warnOnInvalidCallback(callback,'forceUpdate');}update.callback=callback;}enqueueUpdate(fiber,update);scheduleWork(fiber,expirationTime);}};function checkShouldComponentUpdate(workInProgress,ctor,oldProps,newProps,oldState,newState,nextContext){var instance=workInProgress.stateNode;if(typeof instance.shouldComponentUpdate==='function'){startPhaseTimer(workInProgress,'shouldComponentUpdate');var shouldUpdate=instance.shouldComponentUpdate(newProps,newState,nextContext);stopPhaseTimer();{!(shouldUpdate!==undefined)?warningWithoutStack$1(false,'%s.shouldComponentUpdate(): Returned undefined instead of a '+'boolean value. Make sure to return true or false.',getComponentName(ctor)||'Component'):void 0;}return shouldUpdate;}if(ctor.prototype&&ctor.prototype.isPureReactComponent){return!shallowEqual(oldProps,newProps)||!shallowEqual(oldState,newState);}return true;}function checkClassInstance(workInProgress,ctor,newProps){var instance=workInProgress.stateNode;{var name=getComponentName(ctor)||'Component';var renderPresent=instance.render;if(!renderPresent){if(ctor.prototype&&typeof ctor.prototype.render==='function'){warningWithoutStack$1(false,'%s(...): No `render` method found on the returned component '+'instance: did you accidentally return an object from the constructor?',name);}else{warningWithoutStack$1(false,'%s(...): No `render` method found on the returned component '+'instance: you may have forgotten to define `render`.',name);}}var noGetInitialStateOnES6=!instance.getInitialState||instance.getInitialState.isReactClassApproved||instance.state;!noGetInitialStateOnES6?warningWithoutStack$1(false,'getInitialState was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Did you mean to define a state property instead?',name):void 0;var noGetDefaultPropsOnES6=!instance.getDefaultProps||instance.getDefaultProps.isReactClassApproved;!noGetDefaultPropsOnES6?warningWithoutStack$1(false,'getDefaultProps was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Use a static property to define defaultProps instead.',name):void 0;var noInstancePropTypes=!instance.propTypes;!noInstancePropTypes?warningWithoutStack$1(false,'propTypes was defined as an instance property on %s. Use a static '+'property to define propTypes instead.',name):void 0;var noInstanceContextType=!instance.contextType;!noInstanceContextType?warningWithoutStack$1(false,'contextType was defined as an instance property on %s. Use a static '+'property to define contextType instead.',name):void 0;if(disableLegacyContext){if(ctor.childContextTypes){warningWithoutStack$1(false,'%s uses the legacy childContextTypes API which is no longer supported. '+'Use React.createContext() instead.',name);}if(ctor.contextTypes){warningWithoutStack$1(false,'%s uses the legacy contextTypes API which is no longer supported. '+'Use React.createContext() with static contextType instead.',name);}}else{var noInstanceContextTypes=!instance.contextTypes;!noInstanceContextTypes?warningWithoutStack$1(false,'contextTypes was defined as an instance property on %s. Use a static '+'property to define contextTypes instead.',name):void 0;if(ctor.contextType&&ctor.contextTypes&&!didWarnAboutContextTypeAndContextTypes.has(ctor)){didWarnAboutContextTypeAndContextTypes.add(ctor);warningWithoutStack$1(false,'%s declares both contextTypes and contextType static properties. '+'The legacy contextTypes property will be ignored.',name);}}var noComponentShouldUpdate=typeof instance.componentShouldUpdate!=='function';!noComponentShouldUpdate?warningWithoutStack$1(false,'%s has a method called '+'componentShouldUpdate(). Did you mean shouldComponentUpdate()? '+'The name is phrased as a question because the function is '+'expected to return a value.',name):void 0;if(ctor.prototype&&ctor.prototype.isPureReactComponent&&typeof instance.shouldComponentUpdate!=='undefined'){warningWithoutStack$1(false,'%s has a method called shouldComponentUpdate(). '+'shouldComponentUpdate should not be used when extending React.PureComponent. '+'Please extend React.Component if shouldComponentUpdate is used.',getComponentName(ctor)||'A pure component');}var noComponentDidUnmount=typeof instance.componentDidUnmount!=='function';!noComponentDidUnmount?warningWithoutStack$1(false,'%s has a method called '+'componentDidUnmount(). But there is no such lifecycle method. '+'Did you mean componentWillUnmount()?',name):void 0;var noComponentDidReceiveProps=typeof instance.componentDidReceiveProps!=='function';!noComponentDidReceiveProps?warningWithoutStack$1(false,'%s has a method called '+'componentDidReceiveProps(). But there is no such lifecycle method. '+'If you meant to update the state in response to changing props, '+'use componentWillReceiveProps(). If you meant to fetch data or '+'run side-effects or mutations after React has updated the UI, use componentDidUpdate().',name):void 0;var noComponentWillRecieveProps=typeof instance.componentWillRecieveProps!=='function';!noComponentWillRecieveProps?warningWithoutStack$1(false,'%s has a method called '+'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',name):void 0;var noUnsafeComponentWillRecieveProps=typeof instance.UNSAFE_componentWillRecieveProps!=='function';!noUnsafeComponentWillRecieveProps?warningWithoutStack$1(false,'%s has a method called '+'UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?',name):void 0;var hasMutatedProps=instance.props!==newProps;!(instance.props===undefined||!hasMutatedProps)?warningWithoutStack$1(false,'%s(...): When calling super() in `%s`, make sure to pass '+"up the same props that your component's constructor was passed.",name,name):void 0;var noInstanceDefaultProps=!instance.defaultProps;!noInstanceDefaultProps?warningWithoutStack$1(false,'Setting defaultProps as an instance property on %s is not supported and will be ignored.'+' Instead, define defaultProps as a static property on %s.',name,name):void 0;if(typeof instance.getSnapshotBeforeUpdate==='function'&&typeof instance.componentDidUpdate!=='function'&&!didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)){didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);warningWithoutStack$1(false,'%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). '+'This component defines getSnapshotBeforeUpdate() only.',getComponentName(ctor));}var noInstanceGetDerivedStateFromProps=typeof instance.getDerivedStateFromProps!=='function';!noInstanceGetDerivedStateFromProps?warningWithoutStack$1(false,'%s: getDerivedStateFromProps() is defined as an instance method '+'and will be ignored. Instead, declare it as a static method.',name):void 0;var noInstanceGetDerivedStateFromCatch=typeof instance.getDerivedStateFromError!=='function';!noInstanceGetDerivedStateFromCatch?warningWithoutStack$1(false,'%s: getDerivedStateFromError() is defined as an instance method '+'and will be ignored. Instead, declare it as a static method.',name):void 0;var noStaticGetSnapshotBeforeUpdate=typeof ctor.getSnapshotBeforeUpdate!=='function';!noStaticGetSnapshotBeforeUpdate?warningWithoutStack$1(false,'%s: getSnapshotBeforeUpdate() is defined as a static method '+'and will be ignored. Instead, declare it as an instance method.',name):void 0;var _state=instance.state;if(_state&&(_typeof(_state)!=='object'||isArray$1(_state))){warningWithoutStack$1(false,'%s.state: must be set to an object or null',name);}if(typeof instance.getChildContext==='function'){!(_typeof(ctor.childContextTypes)==='object')?warningWithoutStack$1(false,'%s.getChildContext(): childContextTypes must be defined in order to '+'use getChildContext().',name):void 0;}}}function adoptClassInstance(workInProgress,instance){instance.updater=classComponentUpdater;workInProgress.stateNode=instance;// The instance needs access to the fiber so that it can schedule updates
set(instance,workInProgress);{instance._reactInternalInstance=fakeInternalInstance;}}function constructClassInstance(workInProgress,ctor,props,renderExpirationTime){var isLegacyContextConsumer=false;var unmaskedContext=emptyContextObject;var context=emptyContextObject;var contextType=ctor.contextType;{if('contextType'in ctor){var isValid=// Allow null for conditional declaration
contextType===null||contextType!==undefined&&contextType.$$typeof===REACT_CONTEXT_TYPE&&contextType._context===undefined;// Not a <Context.Consumer>
if(!isValid&&!didWarnAboutInvalidateContextType.has(ctor)){didWarnAboutInvalidateContextType.add(ctor);var addendum='';if(contextType===undefined){addendum=' However, it is set to undefined. '+'This can be caused by a typo or by mixing up named and default imports. '+'This can also happen due to a circular dependency, so '+'try moving the createContext() call to a separate file.';}else if(_typeof(contextType)!=='object'){addendum=' However, it is set to a '+_typeof(contextType)+'.';}else if(contextType.$$typeof===REACT_PROVIDER_TYPE){addendum=' Did you accidentally pass the Context.Provider instead?';}else if(contextType._context!==undefined){// <Context.Consumer>
addendum=' Did you accidentally pass the Context.Consumer instead?';}else{addendum=' However, it is set to an object with keys {'+Object.keys(contextType).join(', ')+'}.';}warningWithoutStack$1(false,'%s defines an invalid contextType. '+'contextType should point to the Context object returned by React.createContext().%s',getComponentName(ctor)||'Component',addendum);}}}if(_typeof(contextType)==='object'&&contextType!==null){context=_readContext(contextType);}else if(!disableLegacyContext){unmaskedContext=getUnmaskedContext(workInProgress,ctor,true);var contextTypes=ctor.contextTypes;isLegacyContextConsumer=contextTypes!==null&&contextTypes!==undefined;context=isLegacyContextConsumer?getMaskedContext(workInProgress,unmaskedContext):emptyContextObject;}// Instantiate twice to help detect side-effects.
{if(debugRenderPhaseSideEffects||debugRenderPhaseSideEffectsForStrictMode&&workInProgress.mode&StrictMode){new ctor(props,context);// eslint-disable-line no-new
}}var instance=new ctor(props,context);var state=workInProgress.memoizedState=instance.state!==null&&instance.state!==undefined?instance.state:null;adoptClassInstance(workInProgress,instance);{if(typeof ctor.getDerivedStateFromProps==='function'&&state===null){var componentName=getComponentName(ctor)||'Component';if(!didWarnAboutUninitializedState.has(componentName)){didWarnAboutUninitializedState.add(componentName);warningWithoutStack$1(false,'`%s` uses `getDerivedStateFromProps` but its initial state is '+'%s. This is not recommended. Instead, define the initial state by '+'assigning an object to `this.state` in the constructor of `%s`. '+'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.',componentName,instance.state===null?'null':'undefined',componentName);}}// If new component APIs are defined, "unsafe" lifecycles won't be called.
// Warn about these lifecycles if they are present.
// Don't warn about react-lifecycles-compat polyfilled methods though.
if(typeof ctor.getDerivedStateFromProps==='function'||typeof instance.getSnapshotBeforeUpdate==='function'){var foundWillMountName=null;var foundWillReceivePropsName=null;var foundWillUpdateName=null;if(typeof instance.componentWillMount==='function'&&instance.componentWillMount.__suppressDeprecationWarning!==true){foundWillMountName='componentWillMount';}else if(typeof instance.UNSAFE_componentWillMount==='function'){foundWillMountName='UNSAFE_componentWillMount';}if(typeof instance.componentWillReceiveProps==='function'&&instance.componentWillReceiveProps.__suppressDeprecationWarning!==true){foundWillReceivePropsName='componentWillReceiveProps';}else if(typeof instance.UNSAFE_componentWillReceiveProps==='function'){foundWillReceivePropsName='UNSAFE_componentWillReceiveProps';}if(typeof instance.componentWillUpdate==='function'&&instance.componentWillUpdate.__suppressDeprecationWarning!==true){foundWillUpdateName='componentWillUpdate';}else if(typeof instance.UNSAFE_componentWillUpdate==='function'){foundWillUpdateName='UNSAFE_componentWillUpdate';}if(foundWillMountName!==null||foundWillReceivePropsName!==null||foundWillUpdateName!==null){var _componentName=getComponentName(ctor)||'Component';var newApiName=typeof ctor.getDerivedStateFromProps==='function'?'getDerivedStateFromProps()':'getSnapshotBeforeUpdate()';if(!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)){didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);warningWithoutStack$1(false,'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n'+'%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\n'+'The above lifecycles should be removed. Learn more about this warning here:\n'+'https://fb.me/react-unsafe-component-lifecycles',_componentName,newApiName,foundWillMountName!==null?"\n  "+foundWillMountName:'',foundWillReceivePropsName!==null?"\n  "+foundWillReceivePropsName:'',foundWillUpdateName!==null?"\n  "+foundWillUpdateName:'');}}}}// Cache unmasked context so we can avoid recreating masked context unless necessary.
// ReactFiberContext usually updates this cache but can't for newly-created instances.
if(isLegacyContextConsumer){cacheContext(workInProgress,unmaskedContext,context);}return instance;}function callComponentWillMount(workInProgress,instance){startPhaseTimer(workInProgress,'componentWillMount');var oldState=instance.state;if(typeof instance.componentWillMount==='function'){instance.componentWillMount();}if(typeof instance.UNSAFE_componentWillMount==='function'){instance.UNSAFE_componentWillMount();}stopPhaseTimer();if(oldState!==instance.state){{warningWithoutStack$1(false,'%s.componentWillMount(): Assigning directly to this.state is '+"deprecated (except inside a component's "+'constructor). Use setState instead.',getComponentName(workInProgress.type)||'Component');}classComponentUpdater.enqueueReplaceState(instance,instance.state,null);}}function callComponentWillReceiveProps(workInProgress,instance,newProps,nextContext){var oldState=instance.state;startPhaseTimer(workInProgress,'componentWillReceiveProps');if(typeof instance.componentWillReceiveProps==='function'){instance.componentWillReceiveProps(newProps,nextContext);}if(typeof instance.UNSAFE_componentWillReceiveProps==='function'){instance.UNSAFE_componentWillReceiveProps(newProps,nextContext);}stopPhaseTimer();if(instance.state!==oldState){{var componentName=getComponentName(workInProgress.type)||'Component';if(!didWarnAboutStateAssignmentForComponent.has(componentName)){didWarnAboutStateAssignmentForComponent.add(componentName);warningWithoutStack$1(false,'%s.componentWillReceiveProps(): Assigning directly to '+"this.state is deprecated (except inside a component's "+'constructor). Use setState instead.',componentName);}}classComponentUpdater.enqueueReplaceState(instance,instance.state,null);}}// Invokes the mount life-cycles on a previously never rendered instance.
function mountClassInstance(workInProgress,ctor,newProps,renderExpirationTime){{checkClassInstance(workInProgress,ctor,newProps);}var instance=workInProgress.stateNode;instance.props=newProps;instance.state=workInProgress.memoizedState;instance.refs=emptyRefsObject;var contextType=ctor.contextType;if(_typeof(contextType)==='object'&&contextType!==null){instance.context=_readContext(contextType);}else if(disableLegacyContext){instance.context=emptyContextObject;}else{var unmaskedContext=getUnmaskedContext(workInProgress,ctor,true);instance.context=getMaskedContext(workInProgress,unmaskedContext);}{if(instance.state===newProps){var componentName=getComponentName(ctor)||'Component';if(!didWarnAboutDirectlyAssigningPropsToState.has(componentName)){didWarnAboutDirectlyAssigningPropsToState.add(componentName);warningWithoutStack$1(false,'%s: It is not recommended to assign props directly to state '+"because updates to props won't be reflected in state. "+'In most cases, it is better to use props directly.',componentName);}}if(workInProgress.mode&StrictMode){ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress,instance);}if(warnAboutDeprecatedLifecycles){ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(workInProgress,instance);}}var updateQueue=workInProgress.updateQueue;if(updateQueue!==null){processUpdateQueue(workInProgress,updateQueue,newProps,instance,renderExpirationTime);instance.state=workInProgress.memoizedState;}var getDerivedStateFromProps=ctor.getDerivedStateFromProps;if(typeof getDerivedStateFromProps==='function'){applyDerivedStateFromProps(workInProgress,ctor,getDerivedStateFromProps,newProps);instance.state=workInProgress.memoizedState;}// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
if(typeof ctor.getDerivedStateFromProps!=='function'&&typeof instance.getSnapshotBeforeUpdate!=='function'&&(typeof instance.UNSAFE_componentWillMount==='function'||typeof instance.componentWillMount==='function')){callComponentWillMount(workInProgress,instance);// If we had additional state updates during this life-cycle, let's
// process them now.
updateQueue=workInProgress.updateQueue;if(updateQueue!==null){processUpdateQueue(workInProgress,updateQueue,newProps,instance,renderExpirationTime);instance.state=workInProgress.memoizedState;}}if(typeof instance.componentDidMount==='function'){workInProgress.effectTag|=Update;}}function resumeMountClassInstance(workInProgress,ctor,newProps,renderExpirationTime){var instance=workInProgress.stateNode;var oldProps=workInProgress.memoizedProps;instance.props=oldProps;var oldContext=instance.context;var contextType=ctor.contextType;var nextContext=emptyContextObject;if(_typeof(contextType)==='object'&&contextType!==null){nextContext=_readContext(contextType);}else if(!disableLegacyContext){var nextLegacyUnmaskedContext=getUnmaskedContext(workInProgress,ctor,true);nextContext=getMaskedContext(workInProgress,nextLegacyUnmaskedContext);}var getDerivedStateFromProps=ctor.getDerivedStateFromProps;var hasNewLifecycles=typeof getDerivedStateFromProps==='function'||typeof instance.getSnapshotBeforeUpdate==='function';// Note: During these life-cycles, instance.props/instance.state are what
// ever the previously attempted to render - not the "current". However,
// during componentDidUpdate we pass the "current" props.
// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
if(!hasNewLifecycles&&(typeof instance.UNSAFE_componentWillReceiveProps==='function'||typeof instance.componentWillReceiveProps==='function')){if(oldProps!==newProps||oldContext!==nextContext){callComponentWillReceiveProps(workInProgress,instance,newProps,nextContext);}}resetHasForceUpdateBeforeProcessing();var oldState=workInProgress.memoizedState;var newState=instance.state=oldState;var updateQueue=workInProgress.updateQueue;if(updateQueue!==null){processUpdateQueue(workInProgress,updateQueue,newProps,instance,renderExpirationTime);newState=workInProgress.memoizedState;}if(oldProps===newProps&&oldState===newState&&!hasContextChanged()&&!checkHasForceUpdateAfterProcessing()){// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
if(typeof instance.componentDidMount==='function'){workInProgress.effectTag|=Update;}return false;}if(typeof getDerivedStateFromProps==='function'){applyDerivedStateFromProps(workInProgress,ctor,getDerivedStateFromProps,newProps);newState=workInProgress.memoizedState;}var shouldUpdate=checkHasForceUpdateAfterProcessing()||checkShouldComponentUpdate(workInProgress,ctor,oldProps,newProps,oldState,newState,nextContext);if(shouldUpdate){// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
if(!hasNewLifecycles&&(typeof instance.UNSAFE_componentWillMount==='function'||typeof instance.componentWillMount==='function')){startPhaseTimer(workInProgress,'componentWillMount');if(typeof instance.componentWillMount==='function'){instance.componentWillMount();}if(typeof instance.UNSAFE_componentWillMount==='function'){instance.UNSAFE_componentWillMount();}stopPhaseTimer();}if(typeof instance.componentDidMount==='function'){workInProgress.effectTag|=Update;}}else{// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
if(typeof instance.componentDidMount==='function'){workInProgress.effectTag|=Update;}// If shouldComponentUpdate returned false, we should still update the
// memoized state to indicate that this work can be reused.
workInProgress.memoizedProps=newProps;workInProgress.memoizedState=newState;}// Update the existing instance's state, props, and context pointers even
// if shouldComponentUpdate returns false.
instance.props=newProps;instance.state=newState;instance.context=nextContext;return shouldUpdate;}// Invokes the update life-cycles and returns false if it shouldn't rerender.
function updateClassInstance(current,workInProgress,ctor,newProps,renderExpirationTime){var instance=workInProgress.stateNode;var oldProps=workInProgress.memoizedProps;instance.props=workInProgress.type===workInProgress.elementType?oldProps:resolveDefaultProps(workInProgress.type,oldProps);var oldContext=instance.context;var contextType=ctor.contextType;var nextContext=emptyContextObject;if(_typeof(contextType)==='object'&&contextType!==null){nextContext=_readContext(contextType);}else if(!disableLegacyContext){var nextUnmaskedContext=getUnmaskedContext(workInProgress,ctor,true);nextContext=getMaskedContext(workInProgress,nextUnmaskedContext);}var getDerivedStateFromProps=ctor.getDerivedStateFromProps;var hasNewLifecycles=typeof getDerivedStateFromProps==='function'||typeof instance.getSnapshotBeforeUpdate==='function';// Note: During these life-cycles, instance.props/instance.state are what
// ever the previously attempted to render - not the "current". However,
// during componentDidUpdate we pass the "current" props.
// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
if(!hasNewLifecycles&&(typeof instance.UNSAFE_componentWillReceiveProps==='function'||typeof instance.componentWillReceiveProps==='function')){if(oldProps!==newProps||oldContext!==nextContext){callComponentWillReceiveProps(workInProgress,instance,newProps,nextContext);}}resetHasForceUpdateBeforeProcessing();var oldState=workInProgress.memoizedState;var newState=instance.state=oldState;var updateQueue=workInProgress.updateQueue;if(updateQueue!==null){processUpdateQueue(workInProgress,updateQueue,newProps,instance,renderExpirationTime);newState=workInProgress.memoizedState;}if(oldProps===newProps&&oldState===newState&&!hasContextChanged()&&!checkHasForceUpdateAfterProcessing()){// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
if(typeof instance.componentDidUpdate==='function'){if(oldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress.effectTag|=Update;}}if(typeof instance.getSnapshotBeforeUpdate==='function'){if(oldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress.effectTag|=Snapshot;}}return false;}if(typeof getDerivedStateFromProps==='function'){applyDerivedStateFromProps(workInProgress,ctor,getDerivedStateFromProps,newProps);newState=workInProgress.memoizedState;}var shouldUpdate=checkHasForceUpdateAfterProcessing()||checkShouldComponentUpdate(workInProgress,ctor,oldProps,newProps,oldState,newState,nextContext);if(shouldUpdate){// In order to support react-lifecycles-compat polyfilled components,
// Unsafe lifecycles should not be invoked for components using the new APIs.
if(!hasNewLifecycles&&(typeof instance.UNSAFE_componentWillUpdate==='function'||typeof instance.componentWillUpdate==='function')){startPhaseTimer(workInProgress,'componentWillUpdate');if(typeof instance.componentWillUpdate==='function'){instance.componentWillUpdate(newProps,newState,nextContext);}if(typeof instance.UNSAFE_componentWillUpdate==='function'){instance.UNSAFE_componentWillUpdate(newProps,newState,nextContext);}stopPhaseTimer();}if(typeof instance.componentDidUpdate==='function'){workInProgress.effectTag|=Update;}if(typeof instance.getSnapshotBeforeUpdate==='function'){workInProgress.effectTag|=Snapshot;}}else{// If an update was already in progress, we should schedule an Update
// effect even though we're bailing out, so that cWU/cDU are called.
if(typeof instance.componentDidUpdate==='function'){if(oldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress.effectTag|=Update;}}if(typeof instance.getSnapshotBeforeUpdate==='function'){if(oldProps!==current.memoizedProps||oldState!==current.memoizedState){workInProgress.effectTag|=Snapshot;}}// If shouldComponentUpdate returned false, we should still update the
// memoized props/state to indicate that this work can be reused.
workInProgress.memoizedProps=newProps;workInProgress.memoizedState=newState;}// Update the existing instance's state, props, and context pointers even
// if shouldComponentUpdate returns false.
instance.props=newProps;instance.state=newState;instance.context=nextContext;return shouldUpdate;}var didWarnAboutMaps;var didWarnAboutGenerators;var didWarnAboutStringRefs;var ownerHasKeyUseWarning;var ownerHasFunctionTypeWarning;var warnForMissingKey=function warnForMissingKey(child){};{didWarnAboutMaps=false;didWarnAboutGenerators=false;didWarnAboutStringRefs={};/**
   * Warn if there's no key explicitly set on dynamic arrays of children or
   * object keys are not valid. This allows us to keep track of children between
   * updates.
   */ownerHasKeyUseWarning={};ownerHasFunctionTypeWarning={};warnForMissingKey=function warnForMissingKey(child){if(child===null||_typeof(child)!=='object'){return;}if(!child._store||child._store.validated||child.key!=null){return;}if(!(_typeof(child._store)==='object')){{throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");}}child._store.validated=true;var currentComponentErrorInfo='Each child in a list should have a unique '+'"key" prop. See https://fb.me/react-warning-keys for '+'more information.'+getCurrentFiberStackInDev();if(ownerHasKeyUseWarning[currentComponentErrorInfo]){return;}ownerHasKeyUseWarning[currentComponentErrorInfo]=true;warning$1(false,'Each child in a list should have a unique '+'"key" prop. See https://fb.me/react-warning-keys for '+'more information.');};}var isArray=Array.isArray;function coerceRef(returnFiber,current$$1,element){var mixedRef=element.ref;if(mixedRef!==null&&typeof mixedRef!=='function'&&_typeof(mixedRef)!=='object'){{// TODO: Clean this up once we turn on the string ref warning for
// everyone, because the strict mode case will no longer be relevant
if(returnFiber.mode&StrictMode||warnAboutStringRefs){var componentName=getComponentName(returnFiber.type)||'Component';if(!didWarnAboutStringRefs[componentName]){if(warnAboutStringRefs){warningWithoutStack$1(false,'Component "%s" contains the string ref "%s". Support for string refs '+'will be removed in a future major release. We recommend using '+'useRef() or createRef() instead. '+'Learn more about using refs safely here: '+'https://fb.me/react-strict-mode-string-ref%s',componentName,mixedRef,getStackByFiberInDevAndProd(returnFiber));}else{warningWithoutStack$1(false,'A string ref, "%s", has been found within a strict mode tree. '+'String refs are a source of potential bugs and should be avoided. '+'We recommend using useRef() or createRef() instead. '+'Learn more about using refs safely here: '+'https://fb.me/react-strict-mode-string-ref%s',mixedRef,getStackByFiberInDevAndProd(returnFiber));}didWarnAboutStringRefs[componentName]=true;}}}if(element._owner){var owner=element._owner;var inst;if(owner){var ownerFiber=owner;if(!(ownerFiber.tag===ClassComponent)){{throw Error("Function components cannot have refs. Did you mean to use React.forwardRef()?");}}inst=ownerFiber.stateNode;}if(!inst){{throw Error("Missing owner for string ref "+mixedRef+". This error is likely caused by a bug in React. Please file an issue.");}}var stringRef=''+mixedRef;// Check if previous string ref matches new string ref
if(current$$1!==null&&current$$1.ref!==null&&typeof current$$1.ref==='function'&&current$$1.ref._stringRef===stringRef){return current$$1.ref;}var ref=function ref(value){var refs=inst.refs;if(refs===emptyRefsObject){// This is a lazy pooled frozen object, so we need to initialize.
refs=inst.refs={};}if(value===null){delete refs[stringRef];}else{refs[stringRef]=value;}};ref._stringRef=stringRef;return ref;}else{if(!(typeof mixedRef==='string')){{throw Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");}}if(!element._owner){{throw Error("Element ref was specified as a string ("+mixedRef+") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://fb.me/react-refs-must-have-owner for more information.");}}}}return mixedRef;}function throwOnInvalidObjectType(returnFiber,newChild){if(returnFiber.type!=='textarea'){var addendum='';{addendum=' If you meant to render a collection of children, use an array '+'instead.'+getCurrentFiberStackInDev();}{{throw Error("Objects are not valid as a React child (found: "+(Object.prototype.toString.call(newChild)==='[object Object]'?'object with keys {'+Object.keys(newChild).join(', ')+'}':newChild)+")."+addendum);}}}}function warnOnFunctionType(){var currentComponentErrorInfo='Functions are not valid as a React child. This may happen if '+'you return a Component instead of <Component /> from render. '+'Or maybe you meant to call this function rather than return it.'+getCurrentFiberStackInDev();if(ownerHasFunctionTypeWarning[currentComponentErrorInfo]){return;}ownerHasFunctionTypeWarning[currentComponentErrorInfo]=true;warning$1(false,'Functions are not valid as a React child. This may happen if '+'you return a Component instead of <Component /> from render. '+'Or maybe you meant to call this function rather than return it.');}// This wrapper function exists because I expect to clone the code in each path
// to be able to optimize each path individually by branching early. This needs
// a compiler or we can do it manually. Helpers that don't need this branching
// live outside of this function.
function ChildReconciler(shouldTrackSideEffects){function deleteChild(returnFiber,childToDelete){if(!shouldTrackSideEffects){// Noop.
return;}// Deletions are added in reversed order so we add it to the front.
// At this point, the return fiber's effect list is empty except for
// deletions, so we can just append the deletion to the list. The remaining
// effects aren't added until the complete phase. Once we implement
// resuming, this may not be true.
var last=returnFiber.lastEffect;if(last!==null){last.nextEffect=childToDelete;returnFiber.lastEffect=childToDelete;}else{returnFiber.firstEffect=returnFiber.lastEffect=childToDelete;}childToDelete.nextEffect=null;childToDelete.effectTag=Deletion;}function deleteRemainingChildren(returnFiber,currentFirstChild){if(!shouldTrackSideEffects){// Noop.
return null;}// TODO: For the shouldClone case, this could be micro-optimized a bit by
// assuming that after the first child we've already added everything.
var childToDelete=currentFirstChild;while(childToDelete!==null){deleteChild(returnFiber,childToDelete);childToDelete=childToDelete.sibling;}return null;}function mapRemainingChildren(returnFiber,currentFirstChild){// Add the remaining children to a temporary map so that we can find them by
// keys quickly. Implicit (null) keys get added to this set with their index
// instead.
var existingChildren=new Map();var existingChild=currentFirstChild;while(existingChild!==null){if(existingChild.key!==null){existingChildren.set(existingChild.key,existingChild);}else{existingChildren.set(existingChild.index,existingChild);}existingChild=existingChild.sibling;}return existingChildren;}function useFiber(fiber,pendingProps,expirationTime){// We currently set sibling to null and index to 0 here because it is easy
// to forget to do before returning it. E.g. for the single child case.
var clone=createWorkInProgress(fiber,pendingProps,expirationTime);clone.index=0;clone.sibling=null;return clone;}function placeChild(newFiber,lastPlacedIndex,newIndex){newFiber.index=newIndex;if(!shouldTrackSideEffects){// Noop.
return lastPlacedIndex;}var current$$1=newFiber.alternate;if(current$$1!==null){var oldIndex=current$$1.index;if(oldIndex<lastPlacedIndex){// This is a move.
newFiber.effectTag=Placement;return lastPlacedIndex;}else{// This item can stay in place.
return oldIndex;}}else{// This is an insertion.
newFiber.effectTag=Placement;return lastPlacedIndex;}}function placeSingleChild(newFiber){// This is simpler for the single child case. We only need to do a
// placement for inserting new children.
if(shouldTrackSideEffects&&newFiber.alternate===null){newFiber.effectTag=Placement;}return newFiber;}function updateTextNode(returnFiber,current$$1,textContent,expirationTime){if(current$$1===null||current$$1.tag!==HostText){// Insert
var created=createFiberFromText(textContent,returnFiber.mode,expirationTime);created.return=returnFiber;return created;}else{// Update
var existing=useFiber(current$$1,textContent,expirationTime);existing.return=returnFiber;return existing;}}function updateElement(returnFiber,current$$1,element,expirationTime){if(current$$1!==null&&(current$$1.elementType===element.type||// Keep this check inline so it only runs on the false path:
isCompatibleFamilyForHotReloading(current$$1,element))){// Move based on index
var existing=useFiber(current$$1,element.props,expirationTime);existing.ref=coerceRef(returnFiber,current$$1,element);existing.return=returnFiber;{existing._debugSource=element._source;existing._debugOwner=element._owner;}return existing;}else{// Insert
var created=createFiberFromElement(element,returnFiber.mode,expirationTime);created.ref=coerceRef(returnFiber,current$$1,element);created.return=returnFiber;return created;}}function updatePortal(returnFiber,current$$1,portal,expirationTime){if(current$$1===null||current$$1.tag!==HostPortal||current$$1.stateNode.containerInfo!==portal.containerInfo||current$$1.stateNode.implementation!==portal.implementation){// Insert
var created=createFiberFromPortal(portal,returnFiber.mode,expirationTime);created.return=returnFiber;return created;}else{// Update
var existing=useFiber(current$$1,portal.children||[],expirationTime);existing.return=returnFiber;return existing;}}function updateFragment(returnFiber,current$$1,fragment,expirationTime,key){if(current$$1===null||current$$1.tag!==Fragment){// Insert
var created=createFiberFromFragment(fragment,returnFiber.mode,expirationTime,key);created.return=returnFiber;return created;}else{// Update
var existing=useFiber(current$$1,fragment,expirationTime);existing.return=returnFiber;return existing;}}function createChild(returnFiber,newChild,expirationTime){if(typeof newChild==='string'||typeof newChild==='number'){// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
var created=createFiberFromText(''+newChild,returnFiber.mode,expirationTime);created.return=returnFiber;return created;}if(_typeof(newChild)==='object'&&newChild!==null){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:{var _created=createFiberFromElement(newChild,returnFiber.mode,expirationTime);_created.ref=coerceRef(returnFiber,null,newChild);_created.return=returnFiber;return _created;}case REACT_PORTAL_TYPE:{var _created2=createFiberFromPortal(newChild,returnFiber.mode,expirationTime);_created2.return=returnFiber;return _created2;}}if(isArray(newChild)||getIteratorFn(newChild)){var _created3=createFiberFromFragment(newChild,returnFiber.mode,expirationTime,null);_created3.return=returnFiber;return _created3;}throwOnInvalidObjectType(returnFiber,newChild);}{if(typeof newChild==='function'){warnOnFunctionType();}}return null;}function updateSlot(returnFiber,oldFiber,newChild,expirationTime){// Update the fiber if the keys match, otherwise return null.
var key=oldFiber!==null?oldFiber.key:null;if(typeof newChild==='string'||typeof newChild==='number'){// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
if(key!==null){return null;}return updateTextNode(returnFiber,oldFiber,''+newChild,expirationTime);}if(_typeof(newChild)==='object'&&newChild!==null){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:{if(newChild.key===key){if(newChild.type===REACT_FRAGMENT_TYPE){return updateFragment(returnFiber,oldFiber,newChild.props.children,expirationTime,key);}return updateElement(returnFiber,oldFiber,newChild,expirationTime);}else{return null;}}case REACT_PORTAL_TYPE:{if(newChild.key===key){return updatePortal(returnFiber,oldFiber,newChild,expirationTime);}else{return null;}}}if(isArray(newChild)||getIteratorFn(newChild)){if(key!==null){return null;}return updateFragment(returnFiber,oldFiber,newChild,expirationTime,null);}throwOnInvalidObjectType(returnFiber,newChild);}{if(typeof newChild==='function'){warnOnFunctionType();}}return null;}function updateFromMap(existingChildren,returnFiber,newIdx,newChild,expirationTime){if(typeof newChild==='string'||typeof newChild==='number'){// Text nodes don't have keys, so we neither have to check the old nor
// new node for the key. If both are text nodes, they match.
var matchedFiber=existingChildren.get(newIdx)||null;return updateTextNode(returnFiber,matchedFiber,''+newChild,expirationTime);}if(_typeof(newChild)==='object'&&newChild!==null){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:{var _matchedFiber=existingChildren.get(newChild.key===null?newIdx:newChild.key)||null;if(newChild.type===REACT_FRAGMENT_TYPE){return updateFragment(returnFiber,_matchedFiber,newChild.props.children,expirationTime,newChild.key);}return updateElement(returnFiber,_matchedFiber,newChild,expirationTime);}case REACT_PORTAL_TYPE:{var _matchedFiber2=existingChildren.get(newChild.key===null?newIdx:newChild.key)||null;return updatePortal(returnFiber,_matchedFiber2,newChild,expirationTime);}}if(isArray(newChild)||getIteratorFn(newChild)){var _matchedFiber3=existingChildren.get(newIdx)||null;return updateFragment(returnFiber,_matchedFiber3,newChild,expirationTime,null);}throwOnInvalidObjectType(returnFiber,newChild);}{if(typeof newChild==='function'){warnOnFunctionType();}}return null;}/**
   * Warns if there is a duplicate or missing key
   */function warnOnInvalidKey(child,knownKeys){{if(_typeof(child)!=='object'||child===null){return knownKeys;}switch(child.$$typeof){case REACT_ELEMENT_TYPE:case REACT_PORTAL_TYPE:warnForMissingKey(child);var key=child.key;if(typeof key!=='string'){break;}if(knownKeys===null){knownKeys=new Set();knownKeys.add(key);break;}if(!knownKeys.has(key)){knownKeys.add(key);break;}warning$1(false,'Encountered two children with the same key, `%s`. '+'Keys should be unique so that components maintain their identity '+'across updates. Non-unique keys may cause children to be '+'duplicated and/or omitted — the behavior is unsupported and '+'could change in a future version.',key);break;default:break;}}return knownKeys;}function reconcileChildrenArray(returnFiber,currentFirstChild,newChildren,expirationTime){// This algorithm can't optimize by searching from both ends since we
// don't have backpointers on fibers. I'm trying to see how far we can get
// with that model. If it ends up not being worth the tradeoffs, we can
// add it later.
// Even with a two ended optimization, we'd want to optimize for the case
// where there are few changes and brute force the comparison instead of
// going for the Map. It'd like to explore hitting that path first in
// forward-only mode and only go for the Map once we notice that we need
// lots of look ahead. This doesn't handle reversal as well as two ended
// search but that's unusual. Besides, for the two ended optimization to
// work on Iterables, we'd need to copy the whole set.
// In this first iteration, we'll just live with hitting the bad case
// (adding everything to a Map) in for every insert/move.
// If you change this code, also update reconcileChildrenIterator() which
// uses the same algorithm.
{// First, validate keys.
var knownKeys=null;for(var i=0;i<newChildren.length;i++){var child=newChildren[i];knownKeys=warnOnInvalidKey(child,knownKeys);}}var resultingFirstChild=null;var previousNewFiber=null;var oldFiber=currentFirstChild;var lastPlacedIndex=0;var newIdx=0;var nextOldFiber=null;for(;oldFiber!==null&&newIdx<newChildren.length;newIdx++){if(oldFiber.index>newIdx){nextOldFiber=oldFiber;oldFiber=null;}else{nextOldFiber=oldFiber.sibling;}var newFiber=updateSlot(returnFiber,oldFiber,newChildren[newIdx],expirationTime);if(newFiber===null){// TODO: This breaks on empty slots like null children. That's
// unfortunate because it triggers the slow path all the time. We need
// a better way to communicate whether this was a miss or null,
// boolean, undefined, etc.
if(oldFiber===null){oldFiber=nextOldFiber;}break;}if(shouldTrackSideEffects){if(oldFiber&&newFiber.alternate===null){// We matched the slot, but we didn't reuse the existing fiber, so we
// need to delete the existing child.
deleteChild(returnFiber,oldFiber);}}lastPlacedIndex=placeChild(newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
resultingFirstChild=newFiber;}else{// TODO: Defer siblings if we're not at the right index for this slot.
// I.e. if we had null values before, then we want to defer this
// for each null value. However, we also don't want to call updateSlot
// with the previous one.
previousNewFiber.sibling=newFiber;}previousNewFiber=newFiber;oldFiber=nextOldFiber;}if(newIdx===newChildren.length){// We've reached the end of the new children. We can delete the rest.
deleteRemainingChildren(returnFiber,oldFiber);return resultingFirstChild;}if(oldFiber===null){// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;newIdx<newChildren.length;newIdx++){var _newFiber=createChild(returnFiber,newChildren[newIdx],expirationTime);if(_newFiber===null){continue;}lastPlacedIndex=placeChild(_newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
resultingFirstChild=_newFiber;}else{previousNewFiber.sibling=_newFiber;}previousNewFiber=_newFiber;}return resultingFirstChild;}// Add all children to a key map for quick lookups.
var existingChildren=mapRemainingChildren(returnFiber,oldFiber);// Keep scanning and use the map to restore deleted items as moves.
for(;newIdx<newChildren.length;newIdx++){var _newFiber2=updateFromMap(existingChildren,returnFiber,newIdx,newChildren[newIdx],expirationTime);if(_newFiber2!==null){if(shouldTrackSideEffects){if(_newFiber2.alternate!==null){// The new fiber is a work in progress, but if there exists a
// current, that means that we reused the fiber. We need to delete
// it from the child list so that we don't add it to the deletion
// list.
existingChildren.delete(_newFiber2.key===null?newIdx:_newFiber2.key);}}lastPlacedIndex=placeChild(_newFiber2,lastPlacedIndex,newIdx);if(previousNewFiber===null){resultingFirstChild=_newFiber2;}else{previousNewFiber.sibling=_newFiber2;}previousNewFiber=_newFiber2;}}if(shouldTrackSideEffects){// Any existing children that weren't consumed above were deleted. We need
// to add them to the deletion list.
existingChildren.forEach(function(child){return deleteChild(returnFiber,child);});}return resultingFirstChild;}function reconcileChildrenIterator(returnFiber,currentFirstChild,newChildrenIterable,expirationTime){// This is the same implementation as reconcileChildrenArray(),
// but using the iterator instead.
var iteratorFn=getIteratorFn(newChildrenIterable);if(!(typeof iteratorFn==='function')){{throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");}}{// We don't support rendering Generators because it's a mutation.
// See https://github.com/facebook/react/issues/12995
if(typeof Symbol==='function'&&// $FlowFixMe Flow doesn't know about toStringTag
newChildrenIterable[Symbol.toStringTag]==='Generator'){!didWarnAboutGenerators?warning$1(false,'Using Generators as children is unsupported and will likely yield '+'unexpected results because enumerating a generator mutates it. '+'You may convert it to an array with `Array.from()` or the '+'`[...spread]` operator before rendering. Keep in mind '+'you might need to polyfill these features for older browsers.'):void 0;didWarnAboutGenerators=true;}// Warn about using Maps as children
if(newChildrenIterable.entries===iteratorFn){!didWarnAboutMaps?warning$1(false,'Using Maps as children is unsupported and will likely yield '+'unexpected results. Convert it to a sequence/iterable of keyed '+'ReactElements instead.'):void 0;didWarnAboutMaps=true;}// First, validate keys.
// We'll get a different iterator later for the main pass.
var _newChildren=iteratorFn.call(newChildrenIterable);if(_newChildren){var knownKeys=null;var _step=_newChildren.next();for(;!_step.done;_step=_newChildren.next()){var child=_step.value;knownKeys=warnOnInvalidKey(child,knownKeys);}}}var newChildren=iteratorFn.call(newChildrenIterable);if(!(newChildren!=null)){{throw Error("An iterable object provided no iterator.");}}var resultingFirstChild=null;var previousNewFiber=null;var oldFiber=currentFirstChild;var lastPlacedIndex=0;var newIdx=0;var nextOldFiber=null;var step=newChildren.next();for(;oldFiber!==null&&!step.done;newIdx++,step=newChildren.next()){if(oldFiber.index>newIdx){nextOldFiber=oldFiber;oldFiber=null;}else{nextOldFiber=oldFiber.sibling;}var newFiber=updateSlot(returnFiber,oldFiber,step.value,expirationTime);if(newFiber===null){// TODO: This breaks on empty slots like null children. That's
// unfortunate because it triggers the slow path all the time. We need
// a better way to communicate whether this was a miss or null,
// boolean, undefined, etc.
if(oldFiber===null){oldFiber=nextOldFiber;}break;}if(shouldTrackSideEffects){if(oldFiber&&newFiber.alternate===null){// We matched the slot, but we didn't reuse the existing fiber, so we
// need to delete the existing child.
deleteChild(returnFiber,oldFiber);}}lastPlacedIndex=placeChild(newFiber,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
resultingFirstChild=newFiber;}else{// TODO: Defer siblings if we're not at the right index for this slot.
// I.e. if we had null values before, then we want to defer this
// for each null value. However, we also don't want to call updateSlot
// with the previous one.
previousNewFiber.sibling=newFiber;}previousNewFiber=newFiber;oldFiber=nextOldFiber;}if(step.done){// We've reached the end of the new children. We can delete the rest.
deleteRemainingChildren(returnFiber,oldFiber);return resultingFirstChild;}if(oldFiber===null){// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;!step.done;newIdx++,step=newChildren.next()){var _newFiber3=createChild(returnFiber,step.value,expirationTime);if(_newFiber3===null){continue;}lastPlacedIndex=placeChild(_newFiber3,lastPlacedIndex,newIdx);if(previousNewFiber===null){// TODO: Move out of the loop. This only happens for the first run.
resultingFirstChild=_newFiber3;}else{previousNewFiber.sibling=_newFiber3;}previousNewFiber=_newFiber3;}return resultingFirstChild;}// Add all children to a key map for quick lookups.
var existingChildren=mapRemainingChildren(returnFiber,oldFiber);// Keep scanning and use the map to restore deleted items as moves.
for(;!step.done;newIdx++,step=newChildren.next()){var _newFiber4=updateFromMap(existingChildren,returnFiber,newIdx,step.value,expirationTime);if(_newFiber4!==null){if(shouldTrackSideEffects){if(_newFiber4.alternate!==null){// The new fiber is a work in progress, but if there exists a
// current, that means that we reused the fiber. We need to delete
// it from the child list so that we don't add it to the deletion
// list.
existingChildren.delete(_newFiber4.key===null?newIdx:_newFiber4.key);}}lastPlacedIndex=placeChild(_newFiber4,lastPlacedIndex,newIdx);if(previousNewFiber===null){resultingFirstChild=_newFiber4;}else{previousNewFiber.sibling=_newFiber4;}previousNewFiber=_newFiber4;}}if(shouldTrackSideEffects){// Any existing children that weren't consumed above were deleted. We need
// to add them to the deletion list.
existingChildren.forEach(function(child){return deleteChild(returnFiber,child);});}return resultingFirstChild;}function reconcileSingleTextNode(returnFiber,currentFirstChild,textContent,expirationTime){// There's no need to check for keys on text nodes since we don't have a
// way to define them.
if(currentFirstChild!==null&&currentFirstChild.tag===HostText){// We already have an existing node so let's just update it and delete
// the rest.
deleteRemainingChildren(returnFiber,currentFirstChild.sibling);var existing=useFiber(currentFirstChild,textContent,expirationTime);existing.return=returnFiber;return existing;}// The existing first child is not a text node so we need to create one
// and delete the existing ones.
deleteRemainingChildren(returnFiber,currentFirstChild);var created=createFiberFromText(textContent,returnFiber.mode,expirationTime);created.return=returnFiber;return created;}function reconcileSingleElement(returnFiber,currentFirstChild,element,expirationTime){var key=element.key;var child=currentFirstChild;while(child!==null){// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(child.key===key){if(child.tag===Fragment?element.type===REACT_FRAGMENT_TYPE:child.elementType===element.type||// Keep this check inline so it only runs on the false path:
isCompatibleFamilyForHotReloading(child,element)){deleteRemainingChildren(returnFiber,child.sibling);var existing=useFiber(child,element.type===REACT_FRAGMENT_TYPE?element.props.children:element.props,expirationTime);existing.ref=coerceRef(returnFiber,child,element);existing.return=returnFiber;{existing._debugSource=element._source;existing._debugOwner=element._owner;}return existing;}else{deleteRemainingChildren(returnFiber,child);break;}}else{deleteChild(returnFiber,child);}child=child.sibling;}if(element.type===REACT_FRAGMENT_TYPE){var created=createFiberFromFragment(element.props.children,returnFiber.mode,expirationTime,element.key);created.return=returnFiber;return created;}else{var _created4=createFiberFromElement(element,returnFiber.mode,expirationTime);_created4.ref=coerceRef(returnFiber,currentFirstChild,element);_created4.return=returnFiber;return _created4;}}function reconcileSinglePortal(returnFiber,currentFirstChild,portal,expirationTime){var key=portal.key;var child=currentFirstChild;while(child!==null){// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(child.key===key){if(child.tag===HostPortal&&child.stateNode.containerInfo===portal.containerInfo&&child.stateNode.implementation===portal.implementation){deleteRemainingChildren(returnFiber,child.sibling);var existing=useFiber(child,portal.children||[],expirationTime);existing.return=returnFiber;return existing;}else{deleteRemainingChildren(returnFiber,child);break;}}else{deleteChild(returnFiber,child);}child=child.sibling;}var created=createFiberFromPortal(portal,returnFiber.mode,expirationTime);created.return=returnFiber;return created;}// This API will tag the children with the side-effect of the reconciliation
// itself. They will be added to the side-effect list as we pass through the
// children and the parent.
function reconcileChildFibers(returnFiber,currentFirstChild,newChild,expirationTime){// This function is not recursive.
// If the top level item is an array, we treat it as a set of children,
// not as a fragment. Nested arrays on the other hand will be treated as
// fragment nodes. Recursion happens at the normal flow.
// Handle top level unkeyed fragments as if they were arrays.
// This leads to an ambiguity between <>{[...]}</> and <>...</>.
// We treat the ambiguous cases above the same.
var isUnkeyedTopLevelFragment=_typeof(newChild)==='object'&&newChild!==null&&newChild.type===REACT_FRAGMENT_TYPE&&newChild.key===null;if(isUnkeyedTopLevelFragment){newChild=newChild.props.children;}// Handle object types
var isObject=_typeof(newChild)==='object'&&newChild!==null;if(isObject){switch(newChild.$$typeof){case REACT_ELEMENT_TYPE:return placeSingleChild(reconcileSingleElement(returnFiber,currentFirstChild,newChild,expirationTime));case REACT_PORTAL_TYPE:return placeSingleChild(reconcileSinglePortal(returnFiber,currentFirstChild,newChild,expirationTime));}}if(typeof newChild==='string'||typeof newChild==='number'){return placeSingleChild(reconcileSingleTextNode(returnFiber,currentFirstChild,''+newChild,expirationTime));}if(isArray(newChild)){return reconcileChildrenArray(returnFiber,currentFirstChild,newChild,expirationTime);}if(getIteratorFn(newChild)){return reconcileChildrenIterator(returnFiber,currentFirstChild,newChild,expirationTime);}if(isObject){throwOnInvalidObjectType(returnFiber,newChild);}{if(typeof newChild==='function'){warnOnFunctionType();}}if(typeof newChild==='undefined'&&!isUnkeyedTopLevelFragment){// If the new child is undefined, and the return fiber is a composite
// component, throw an error. If Fiber return types are disabled,
// we already threw above.
switch(returnFiber.tag){case ClassComponent:{{var instance=returnFiber.stateNode;if(instance.render._isMockFunction){// We allow auto-mocks to proceed as if they're returning null.
break;}}}// Intentionally fall through to the next case, which handles both
// functions and classes
// eslint-disable-next-lined no-fallthrough
case FunctionComponent:{var Component=returnFiber.type;{{throw Error((Component.displayName||Component.name||'Component')+"(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");}}}}}// Remaining cases are all treated as empty.
return deleteRemainingChildren(returnFiber,currentFirstChild);}return reconcileChildFibers;}var reconcileChildFibers=ChildReconciler(true);var mountChildFibers=ChildReconciler(false);function cloneChildFibers(current$$1,workInProgress){if(!(current$$1===null||workInProgress.child===current$$1.child)){{throw Error("Resuming work not yet implemented.");}}if(workInProgress.child===null){return;}var currentChild=workInProgress.child;var newChild=createWorkInProgress(currentChild,currentChild.pendingProps,currentChild.expirationTime);workInProgress.child=newChild;newChild.return=workInProgress;while(currentChild.sibling!==null){currentChild=currentChild.sibling;newChild=newChild.sibling=createWorkInProgress(currentChild,currentChild.pendingProps,currentChild.expirationTime);newChild.return=workInProgress;}newChild.sibling=null;}// Reset a workInProgress child set to prepare it for a second pass.
function resetChildFibers(workInProgress,renderExpirationTime){var child=workInProgress.child;while(child!==null){resetWorkInProgress(child,renderExpirationTime);child=child.sibling;}}var NO_CONTEXT={};var contextStackCursor$1=createCursor(NO_CONTEXT);var contextFiberStackCursor=createCursor(NO_CONTEXT);var rootInstanceStackCursor=createCursor(NO_CONTEXT);function requiredContext(c){if(!(c!==NO_CONTEXT)){{throw Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");}}return c;}function getRootHostContainer(){var rootInstance=requiredContext(rootInstanceStackCursor.current);return rootInstance;}function pushHostContainer(fiber,nextRootInstance){// Push current root instance onto the stack;
// This allows us to reset root when portals are popped.
push(rootInstanceStackCursor,nextRootInstance,fiber);// Track the context and the Fiber that provided it.
// This enables us to pop only Fibers that provide unique contexts.
push(contextFiberStackCursor,fiber,fiber);// Finally, we need to push the host context to the stack.
// However, we can't just call getRootHostContext() and push it because
// we'd have a different number of entries on the stack depending on
// whether getRootHostContext() throws somewhere in renderer code or not.
// So we push an empty value first. This lets us safely unwind on errors.
push(contextStackCursor$1,NO_CONTEXT,fiber);var nextRootContext=getRootHostContext(nextRootInstance);// Now that we know this function doesn't throw, replace it.
pop(contextStackCursor$1,fiber);push(contextStackCursor$1,nextRootContext,fiber);}function popHostContainer(fiber){pop(contextStackCursor$1,fiber);pop(contextFiberStackCursor,fiber);pop(rootInstanceStackCursor,fiber);}function getHostContext(){var context=requiredContext(contextStackCursor$1.current);return context;}function pushHostContext(fiber){var rootInstance=requiredContext(rootInstanceStackCursor.current);var context=requiredContext(contextStackCursor$1.current);var nextContext=getChildHostContext(context,fiber.type,rootInstance);// Don't push this Fiber's context unless it's unique.
if(context===nextContext){return;}// Track the context and the Fiber that provided it.
// This enables us to pop only Fibers that provide unique contexts.
push(contextFiberStackCursor,fiber,fiber);push(contextStackCursor$1,nextContext,fiber);}function popHostContext(fiber){// Do not pop unless this Fiber provided the current context.
// pushHostContext() only pushes Fibers that provide unique contexts.
if(contextFiberStackCursor.current!==fiber){return;}pop(contextStackCursor$1,fiber);pop(contextFiberStackCursor,fiber);}var DefaultSuspenseContext=0;// The Suspense Context is split into two parts. The lower bits is
// inherited deeply down the subtree. The upper bits only affect
// this immediate suspense boundary and gets reset each new
// boundary or suspense list.
var SubtreeSuspenseContextMask=1;// Subtree Flags:
// InvisibleParentSuspenseContext indicates that one of our parent Suspense
// boundaries is not currently showing visible main content.
// Either because it is already showing a fallback or is not mounted at all.
// We can use this to determine if it is desirable to trigger a fallback at
// the parent. If not, then we might need to trigger undesirable boundaries
// and/or suspend the commit to avoid hiding the parent content.
var InvisibleParentSuspenseContext=1;// Shallow Flags:
// ForceSuspenseFallback can be used by SuspenseList to force newly added
// items into their fallback state during one of the render passes.
var ForceSuspenseFallback=2;var suspenseStackCursor=createCursor(DefaultSuspenseContext);function hasSuspenseContext(parentContext,flag){return(parentContext&flag)!==0;}function setDefaultShallowSuspenseContext(parentContext){return parentContext&SubtreeSuspenseContextMask;}function setShallowSuspenseContext(parentContext,shallowContext){return parentContext&SubtreeSuspenseContextMask|shallowContext;}function addSubtreeSuspenseContext(parentContext,subtreeContext){return parentContext|subtreeContext;}function pushSuspenseContext(fiber,newContext){push(suspenseStackCursor,newContext,fiber);}function popSuspenseContext(fiber){pop(suspenseStackCursor,fiber);}function shouldCaptureSuspense(workInProgress,hasInvisibleParent){// If it was the primary children that just suspended, capture and render the
// fallback. Otherwise, don't capture and bubble to the next boundary.
var nextState=workInProgress.memoizedState;if(nextState!==null){if(nextState.dehydrated!==null){// A dehydrated boundary always captures.
return true;}return false;}var props=workInProgress.memoizedProps;// In order to capture, the Suspense component must have a fallback prop.
if(props.fallback===undefined){return false;}// Regular boundaries always capture.
if(props.unstable_avoidThisFallback!==true){return true;}// If it's a boundary we should avoid, then we prefer to bubble up to the
// parent boundary if it is currently invisible.
if(hasInvisibleParent){return false;}// If the parent is not able to handle it, we must handle it.
return true;}function findFirstSuspended(row){var node=row;while(node!==null){if(node.tag===SuspenseComponent){var state=node.memoizedState;if(state!==null){var dehydrated=state.dehydrated;if(dehydrated===null||isSuspenseInstancePending(dehydrated)||isSuspenseInstanceFallback(dehydrated)){return node;}}}else if(node.tag===SuspenseListComponent&&// revealOrder undefined can't be trusted because it don't
// keep track of whether it suspended or not.
node.memoizedProps.revealOrder!==undefined){var didSuspend=(node.effectTag&DidCapture)!==NoEffect;if(didSuspend){return node;}}else if(node.child!==null){node.child.return=node;node=node.child;continue;}if(node===row){return null;}while(node.sibling===null){if(node.return===null||node.return===row){return null;}node=node.return;}node.sibling.return=node.return;node=node.sibling;}return null;}var emptyObject={};var isArray$2=Array.isArray;function createResponderInstance(responder,responderProps,responderState,fiber){return{fiber:fiber,props:responderProps,responder:responder,rootEventTypes:null,state:responderState};}function mountEventResponder(responder,responderProps,fiber,respondersMap,rootContainerInstance){var responderState=emptyObject;var getInitialState=responder.getInitialState;if(getInitialState!==null){responderState=getInitialState(responderProps);}var responderInstance=createResponderInstance(responder,responderProps,responderState,fiber);if(!rootContainerInstance){var node=fiber;while(node!==null){var tag=node.tag;if(tag===HostComponent){rootContainerInstance=node.stateNode;break;}else if(tag===HostRoot){rootContainerInstance=node.stateNode.containerInfo;break;}node=node.return;}}mountResponderInstance(responder,responderInstance,responderProps,responderState,rootContainerInstance);respondersMap.set(responder,responderInstance);}function updateEventListener(listener,fiber,visistedResponders,respondersMap,rootContainerInstance){var responder;var props;if(listener){responder=listener.responder;props=listener.props;}if(!(responder&&responder.$$typeof===REACT_RESPONDER_TYPE)){{throw Error("An invalid value was used as an event listener. Expect one or many event listeners created via React.unstable_useResponder().");}}var listenerProps=props;if(visistedResponders.has(responder)){// show warning
{warning$1(false,'Duplicate event responder "%s" found in event listeners. '+'Event listeners passed to elements cannot use the same event responder more than once.',responder.displayName);}return;}visistedResponders.add(responder);var responderInstance=respondersMap.get(responder);if(responderInstance===undefined){// Mount (happens in either complete or commit phase)
mountEventResponder(responder,listenerProps,fiber,respondersMap,rootContainerInstance);}else{// Update (happens during commit phase only)
responderInstance.props=listenerProps;responderInstance.fiber=fiber;}}function updateEventListeners(listeners,fiber,rootContainerInstance){var visistedResponders=new Set();var dependencies=fiber.dependencies;if(listeners!=null){if(dependencies===null){dependencies=fiber.dependencies={expirationTime:NoWork,firstContext:null,responders:new Map()};}var respondersMap=dependencies.responders;if(respondersMap===null){respondersMap=new Map();}if(isArray$2(listeners)){for(var i=0,length=listeners.length;i<length;i++){var listener=listeners[i];updateEventListener(listener,fiber,visistedResponders,respondersMap,rootContainerInstance);}}else{updateEventListener(listeners,fiber,visistedResponders,respondersMap,rootContainerInstance);}}if(dependencies!==null){var _respondersMap=dependencies.responders;if(_respondersMap!==null){// Unmount
var mountedResponders=Array.from(_respondersMap.keys());for(var _i=0,_length=mountedResponders.length;_i<_length;_i++){var mountedResponder=mountedResponders[_i];if(!visistedResponders.has(mountedResponder)){var responderInstance=_respondersMap.get(mountedResponder);unmountResponderInstance(responderInstance);_respondersMap.delete(mountedResponder);}}}}}function createResponderListener(responder,props){var eventResponderListener={responder:responder,props:props};{Object.freeze(eventResponderListener);}return eventResponderListener;}var NoEffect$1=/*             */0;var UnmountSnapshot=/*      */2;var UnmountMutation=/*      */4;var MountMutation=/*        */8;var UnmountLayout=/*        */16;var MountLayout=/*          */32;var MountPassive=/*         */64;var UnmountPassive=/*       */128;var ReactCurrentDispatcher$1=ReactSharedInternals.ReactCurrentDispatcher;var ReactCurrentBatchConfig$1=ReactSharedInternals.ReactCurrentBatchConfig;var didWarnAboutMismatchedHooksForComponent;{didWarnAboutMismatchedHooksForComponent=new Set();}// These are set right before calling the component.
var renderExpirationTime$1=NoWork;// The work-in-progress fiber. I've named it differently to distinguish it from
// the work-in-progress hook.
var currentlyRenderingFiber$1=null;// Hooks are stored as a linked list on the fiber's memoizedState field. The
// current hook list is the list that belongs to the current fiber. The
// work-in-progress hook list is a new list that will be added to the
// work-in-progress fiber.
var currentHook=null;var nextCurrentHook=null;var firstWorkInProgressHook=null;var workInProgressHook=null;var nextWorkInProgressHook=null;var remainingExpirationTime=NoWork;var componentUpdateQueue=null;var sideEffectTag=0;// Updates scheduled during render will trigger an immediate re-render at the
// end of the current pass. We can't store these updates on the normal queue,
// because if the work is aborted, they should be discarded. Because this is
// a relatively rare case, we also don't want to add an additional field to
// either the hook or queue object types. So we store them in a lazily create
// map of queue -> render-phase updates, which are discarded once the component
// completes without re-rendering.
// Whether an update was scheduled during the currently executing render pass.
var didScheduleRenderPhaseUpdate=false;// Lazily created map of render-phase updates
var renderPhaseUpdates=null;// Counter to prevent infinite loops.
var numberOfReRenders=0;var RE_RENDER_LIMIT=25;// In DEV, this is the name of the currently executing primitive hook
var currentHookNameInDev=null;// In DEV, this list ensures that hooks are called in the same order between renders.
// The list stores the order of hooks used during the initial render (mount).
// Subsequent renders (updates) reference this list.
var hookTypesDev=null;var hookTypesUpdateIndexDev=-1;// In DEV, this tracks whether currently rendering component needs to ignore
// the dependencies for Hooks that need them (e.g. useEffect or useMemo).
// When true, such Hooks will always be "remounted". Only used during hot reload.
var ignorePreviousDependencies=false;function mountHookTypesDev(){{var hookName=currentHookNameInDev;if(hookTypesDev===null){hookTypesDev=[hookName];}else{hookTypesDev.push(hookName);}}}function updateHookTypesDev(){{var hookName=currentHookNameInDev;if(hookTypesDev!==null){hookTypesUpdateIndexDev++;if(hookTypesDev[hookTypesUpdateIndexDev]!==hookName){warnOnHookMismatchInDev(hookName);}}}}function checkDepsAreArrayDev(deps){{if(deps!==undefined&&deps!==null&&!Array.isArray(deps)){// Verify deps, but only on mount to avoid extra checks.
// It's unlikely their type would change as usually you define them inline.
warning$1(false,'%s received a final argument that is not an array (instead, received `%s`). When '+'specified, the final argument must be an array.',currentHookNameInDev,_typeof(deps));}}}function warnOnHookMismatchInDev(currentHookName){{var componentName=getComponentName(currentlyRenderingFiber$1.type);if(!didWarnAboutMismatchedHooksForComponent.has(componentName)){didWarnAboutMismatchedHooksForComponent.add(componentName);if(hookTypesDev!==null){var table='';var secondColumnStart=30;for(var i=0;i<=hookTypesUpdateIndexDev;i++){var oldHookName=hookTypesDev[i];var newHookName=i===hookTypesUpdateIndexDev?currentHookName:oldHookName;var row=i+1+". "+oldHookName;// Extra space so second column lines up
// lol @ IE not supporting String#repeat
while(row.length<secondColumnStart){row+=' ';}row+=newHookName+'\n';table+=row;}warning$1(false,'React has detected a change in the order of Hooks called by %s. '+'This will lead to bugs and errors if not fixed. '+'For more information, read the Rules of Hooks: https://fb.me/rules-of-hooks\n\n'+'   Previous render            Next render\n'+'   ------------------------------------------------------\n'+'%s'+'   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n',componentName,table);}}}}function throwInvalidHookError(){{{throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");}}}function areHookInputsEqual(nextDeps,prevDeps){{if(ignorePreviousDependencies){// Only true when this component is being hot reloaded.
return false;}}if(prevDeps===null){{warning$1(false,'%s received a final argument during this render, but not during '+'the previous render. Even though the final argument is optional, '+'its type cannot change between renders.',currentHookNameInDev);}return false;}{// Don't bother comparing lengths in prod because these arrays should be
// passed inline.
if(nextDeps.length!==prevDeps.length){warning$1(false,'The final argument passed to %s changed size between renders. The '+'order and size of this array must remain constant.\n\n'+'Previous: %s\n'+'Incoming: %s',currentHookNameInDev,"["+prevDeps.join(', ')+"]","["+nextDeps.join(', ')+"]");}}for(var i=0;i<prevDeps.length&&i<nextDeps.length;i++){if(is$1(nextDeps[i],prevDeps[i])){continue;}return false;}return true;}function renderWithHooks(current,workInProgress,Component,props,refOrContext,nextRenderExpirationTime){renderExpirationTime$1=nextRenderExpirationTime;currentlyRenderingFiber$1=workInProgress;nextCurrentHook=current!==null?current.memoizedState:null;{hookTypesDev=current!==null?current._debugHookTypes:null;hookTypesUpdateIndexDev=-1;// Used for hot reloading:
ignorePreviousDependencies=current!==null&&current.type!==workInProgress.type;}// The following should have already been reset
// currentHook = null;
// workInProgressHook = null;
// remainingExpirationTime = NoWork;
// componentUpdateQueue = null;
// didScheduleRenderPhaseUpdate = false;
// renderPhaseUpdates = null;
// numberOfReRenders = 0;
// sideEffectTag = 0;
// TODO Warn if no hooks are used at all during mount, then some are used during update.
// Currently we will identify the update render as a mount because nextCurrentHook === null.
// This is tricky because it's valid for certain types of components (e.g. React.lazy)
// Using nextCurrentHook to differentiate between mount/update only works if at least one stateful hook is used.
// Non-stateful hooks (e.g. context) don't get added to memoizedState,
// so nextCurrentHook would be null during updates and mounts.
{if(nextCurrentHook!==null){ReactCurrentDispatcher$1.current=HooksDispatcherOnUpdateInDEV;}else if(hookTypesDev!==null){// This dispatcher handles an edge case where a component is updating,
// but no stateful hooks have been used.
// We want to match the production code behavior (which will use HooksDispatcherOnMount),
// but with the extra DEV validation to ensure hooks ordering hasn't changed.
// This dispatcher does that.
ReactCurrentDispatcher$1.current=HooksDispatcherOnMountWithHookTypesInDEV;}else{ReactCurrentDispatcher$1.current=HooksDispatcherOnMountInDEV;}}var children=Component(props,refOrContext);if(didScheduleRenderPhaseUpdate){do{didScheduleRenderPhaseUpdate=false;numberOfReRenders+=1;{// Even when hot reloading, allow dependencies to stabilize
// after first render to prevent infinite render phase updates.
ignorePreviousDependencies=false;}// Start over from the beginning of the list
nextCurrentHook=current!==null?current.memoizedState:null;nextWorkInProgressHook=firstWorkInProgressHook;currentHook=null;workInProgressHook=null;componentUpdateQueue=null;{// Also validate hook order for cascading updates.
hookTypesUpdateIndexDev=-1;}ReactCurrentDispatcher$1.current=HooksDispatcherOnUpdateInDEV;children=Component(props,refOrContext);}while(didScheduleRenderPhaseUpdate);renderPhaseUpdates=null;numberOfReRenders=0;}// We can assume the previous dispatcher is always this one, since we set it
// at the beginning of the render phase and there's no re-entrancy.
ReactCurrentDispatcher$1.current=ContextOnlyDispatcher;var renderedWork=currentlyRenderingFiber$1;renderedWork.memoizedState=firstWorkInProgressHook;renderedWork.expirationTime=remainingExpirationTime;renderedWork.updateQueue=componentUpdateQueue;renderedWork.effectTag|=sideEffectTag;{renderedWork._debugHookTypes=hookTypesDev;}// This check uses currentHook so that it works the same in DEV and prod bundles.
// hookTypesDev could catch more cases (e.g. context) but only in DEV bundles.
var didRenderTooFewHooks=currentHook!==null&&currentHook.next!==null;renderExpirationTime$1=NoWork;currentlyRenderingFiber$1=null;currentHook=null;nextCurrentHook=null;firstWorkInProgressHook=null;workInProgressHook=null;nextWorkInProgressHook=null;{currentHookNameInDev=null;hookTypesDev=null;hookTypesUpdateIndexDev=-1;}remainingExpirationTime=NoWork;componentUpdateQueue=null;sideEffectTag=0;// These were reset above
// didScheduleRenderPhaseUpdate = false;
// renderPhaseUpdates = null;
// numberOfReRenders = 0;
if(!!didRenderTooFewHooks){{throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");}}return children;}function bailoutHooks(current,workInProgress,expirationTime){workInProgress.updateQueue=current.updateQueue;workInProgress.effectTag&=~(Passive|Update);if(current.expirationTime<=expirationTime){current.expirationTime=NoWork;}}function resetHooks(){// We can assume the previous dispatcher is always this one, since we set it
// at the beginning of the render phase and there's no re-entrancy.
ReactCurrentDispatcher$1.current=ContextOnlyDispatcher;// This is used to reset the state of this module when a component throws.
// It's also called inside mountIndeterminateComponent if we determine the
// component is a module-style component.
renderExpirationTime$1=NoWork;currentlyRenderingFiber$1=null;currentHook=null;nextCurrentHook=null;firstWorkInProgressHook=null;workInProgressHook=null;nextWorkInProgressHook=null;{hookTypesDev=null;hookTypesUpdateIndexDev=-1;currentHookNameInDev=null;}remainingExpirationTime=NoWork;componentUpdateQueue=null;sideEffectTag=0;didScheduleRenderPhaseUpdate=false;renderPhaseUpdates=null;numberOfReRenders=0;}function mountWorkInProgressHook(){var hook={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};if(workInProgressHook===null){// This is the first hook in the list
firstWorkInProgressHook=workInProgressHook=hook;}else{// Append to the end of the list
workInProgressHook=workInProgressHook.next=hook;}return workInProgressHook;}function updateWorkInProgressHook(){// This function is used both for updates and for re-renders triggered by a
// render phase update. It assumes there is either a current hook we can
// clone, or a work-in-progress hook from a previous render pass that we can
// use as a base. When we reach the end of the base list, we must switch to
// the dispatcher used for mounts.
if(nextWorkInProgressHook!==null){// There's already a work-in-progress. Reuse it.
workInProgressHook=nextWorkInProgressHook;nextWorkInProgressHook=workInProgressHook.next;currentHook=nextCurrentHook;nextCurrentHook=currentHook!==null?currentHook.next:null;}else{// Clone from the current hook.
if(!(nextCurrentHook!==null)){{throw Error("Rendered more hooks than during the previous render.");}}currentHook=nextCurrentHook;var newHook={memoizedState:currentHook.memoizedState,baseState:currentHook.baseState,queue:currentHook.queue,baseUpdate:currentHook.baseUpdate,next:null};if(workInProgressHook===null){// This is the first hook in the list.
workInProgressHook=firstWorkInProgressHook=newHook;}else{// Append to the end of the list.
workInProgressHook=workInProgressHook.next=newHook;}nextCurrentHook=currentHook.next;}return workInProgressHook;}function createFunctionComponentUpdateQueue(){return{lastEffect:null};}function basicStateReducer(state,action){return typeof action==='function'?action(state):action;}function mountReducer(reducer,initialArg,init){var hook=mountWorkInProgressHook();var initialState;if(init!==undefined){initialState=init(initialArg);}else{initialState=initialArg;}hook.memoizedState=hook.baseState=initialState;var queue=hook.queue={last:null,dispatch:null,lastRenderedReducer:reducer,lastRenderedState:initialState};var dispatch=queue.dispatch=dispatchAction.bind(null,// Flow doesn't know this is non-null, but we do.
currentlyRenderingFiber$1,queue);return[hook.memoizedState,dispatch];}function updateReducer(reducer,initialArg,init){var hook=updateWorkInProgressHook();var queue=hook.queue;if(!(queue!==null)){{throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");}}queue.lastRenderedReducer=reducer;if(numberOfReRenders>0){// This is a re-render. Apply the new render phase updates to the previous
// work-in-progress hook.
var _dispatch=queue.dispatch;if(renderPhaseUpdates!==null){// Render phase updates are stored in a map of queue -> linked list
var firstRenderPhaseUpdate=renderPhaseUpdates.get(queue);if(firstRenderPhaseUpdate!==undefined){renderPhaseUpdates.delete(queue);var newState=hook.memoizedState;var update=firstRenderPhaseUpdate;do{// Process this render phase update. We don't have to check the
// priority because it will always be the same as the current
// render's.
var action=update.action;newState=reducer(newState,action);update=update.next;}while(update!==null);// Mark that the fiber performed work, but only if the new state is
// different from the current state.
if(!is$1(newState,hook.memoizedState)){markWorkInProgressReceivedUpdate();}hook.memoizedState=newState;// Don't persist the state accumulated from the render phase updates to
// the base state unless the queue is empty.
// TODO: Not sure if this is the desired semantics, but it's what we
// do for gDSFP. I can't remember why.
if(hook.baseUpdate===queue.last){hook.baseState=newState;}queue.lastRenderedState=newState;return[newState,_dispatch];}}return[hook.memoizedState,_dispatch];}// The last update in the entire queue
var last=queue.last;// The last update that is part of the base state.
var baseUpdate=hook.baseUpdate;var baseState=hook.baseState;// Find the first unprocessed update.
var first;if(baseUpdate!==null){if(last!==null){// For the first update, the queue is a circular linked list where
// `queue.last.next = queue.first`. Once the first update commits, and
// the `baseUpdate` is no longer empty, we can unravel the list.
last.next=null;}first=baseUpdate.next;}else{first=last!==null?last.next:null;}if(first!==null){var _newState=baseState;var newBaseState=null;var newBaseUpdate=null;var prevUpdate=baseUpdate;var _update=first;var didSkip=false;do{var updateExpirationTime=_update.expirationTime;if(updateExpirationTime<renderExpirationTime$1){// Priority is insufficient. Skip this update. If this is the first
// skipped update, the previous update/state is the new base
// update/state.
if(!didSkip){didSkip=true;newBaseUpdate=prevUpdate;newBaseState=_newState;}// Update the remaining priority in the queue.
if(updateExpirationTime>remainingExpirationTime){remainingExpirationTime=updateExpirationTime;markUnprocessedUpdateTime(remainingExpirationTime);}}else{// This update does have sufficient priority.
// Mark the event time of this update as relevant to this render pass.
// TODO: This should ideally use the true event time of this update rather than
// its priority which is a derived and not reverseable value.
// TODO: We should skip this update if it was already committed but currently
// we have no way of detecting the difference between a committed and suspended
// update here.
markRenderEventTimeAndConfig(updateExpirationTime,_update.suspenseConfig);// Process this update.
if(_update.eagerReducer===reducer){// If this update was processed eagerly, and its reducer matches the
// current reducer, we can use the eagerly computed state.
_newState=_update.eagerState;}else{var _action=_update.action;_newState=reducer(_newState,_action);}}prevUpdate=_update;_update=_update.next;}while(_update!==null&&_update!==first);if(!didSkip){newBaseUpdate=prevUpdate;newBaseState=_newState;}// Mark that the fiber performed work, but only if the new state is
// different from the current state.
if(!is$1(_newState,hook.memoizedState)){markWorkInProgressReceivedUpdate();}hook.memoizedState=_newState;hook.baseUpdate=newBaseUpdate;hook.baseState=newBaseState;queue.lastRenderedState=_newState;}var dispatch=queue.dispatch;return[hook.memoizedState,dispatch];}function mountState(initialState){var hook=mountWorkInProgressHook();if(typeof initialState==='function'){initialState=initialState();}hook.memoizedState=hook.baseState=initialState;var queue=hook.queue={last:null,dispatch:null,lastRenderedReducer:basicStateReducer,lastRenderedState:initialState};var dispatch=queue.dispatch=dispatchAction.bind(null,// Flow doesn't know this is non-null, but we do.
currentlyRenderingFiber$1,queue);return[hook.memoizedState,dispatch];}function updateState(initialState){return updateReducer(basicStateReducer,initialState);}function pushEffect(tag,create,destroy,deps){var effect={tag:tag,create:create,destroy:destroy,deps:deps,// Circular
next:null};if(componentUpdateQueue===null){componentUpdateQueue=createFunctionComponentUpdateQueue();componentUpdateQueue.lastEffect=effect.next=effect;}else{var lastEffect=componentUpdateQueue.lastEffect;if(lastEffect===null){componentUpdateQueue.lastEffect=effect.next=effect;}else{var firstEffect=lastEffect.next;lastEffect.next=effect;effect.next=firstEffect;componentUpdateQueue.lastEffect=effect;}}return effect;}function mountRef(initialValue){var hook=mountWorkInProgressHook();var ref={current:initialValue};{Object.seal(ref);}hook.memoizedState=ref;return ref;}function updateRef(initialValue){var hook=updateWorkInProgressHook();return hook.memoizedState;}function mountEffectImpl(fiberEffectTag,hookEffectTag,create,deps){var hook=mountWorkInProgressHook();var nextDeps=deps===undefined?null:deps;sideEffectTag|=fiberEffectTag;hook.memoizedState=pushEffect(hookEffectTag,create,undefined,nextDeps);}function updateEffectImpl(fiberEffectTag,hookEffectTag,create,deps){var hook=updateWorkInProgressHook();var nextDeps=deps===undefined?null:deps;var destroy=undefined;if(currentHook!==null){var prevEffect=currentHook.memoizedState;destroy=prevEffect.destroy;if(nextDeps!==null){var prevDeps=prevEffect.deps;if(areHookInputsEqual(nextDeps,prevDeps)){pushEffect(NoEffect$1,create,destroy,nextDeps);return;}}}sideEffectTag|=fiberEffectTag;hook.memoizedState=pushEffect(hookEffectTag,create,destroy,nextDeps);}function mountEffect(create,deps){{// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
if('undefined'!==typeof jest){warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1);}}return mountEffectImpl(Update|Passive,UnmountPassive|MountPassive,create,deps);}function updateEffect(create,deps){{// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
if('undefined'!==typeof jest){warnIfNotCurrentlyActingEffectsInDEV(currentlyRenderingFiber$1);}}return updateEffectImpl(Update|Passive,UnmountPassive|MountPassive,create,deps);}function mountLayoutEffect(create,deps){return mountEffectImpl(Update,UnmountMutation|MountLayout,create,deps);}function updateLayoutEffect(create,deps){return updateEffectImpl(Update,UnmountMutation|MountLayout,create,deps);}function imperativeHandleEffect(create,ref){if(typeof ref==='function'){var refCallback=ref;var _inst=create();refCallback(_inst);return function(){refCallback(null);};}else if(ref!==null&&ref!==undefined){var refObject=ref;{!refObject.hasOwnProperty('current')?warning$1(false,'Expected useImperativeHandle() first argument to either be a '+'ref callback or React.createRef() object. Instead received: %s.','an object with keys {'+Object.keys(refObject).join(', ')+'}'):void 0;}var _inst2=create();refObject.current=_inst2;return function(){refObject.current=null;};}}function mountImperativeHandle(ref,create,deps){{!(typeof create==='function')?warning$1(false,'Expected useImperativeHandle() second argument to be a function '+'that creates a handle. Instead received: %s.',create!==null?_typeof(create):'null'):void 0;}// TODO: If deps are provided, should we skip comparing the ref itself?
var effectDeps=deps!==null&&deps!==undefined?deps.concat([ref]):null;return mountEffectImpl(Update,UnmountMutation|MountLayout,imperativeHandleEffect.bind(null,create,ref),effectDeps);}function updateImperativeHandle(ref,create,deps){{!(typeof create==='function')?warning$1(false,'Expected useImperativeHandle() second argument to be a function '+'that creates a handle. Instead received: %s.',create!==null?_typeof(create):'null'):void 0;}// TODO: If deps are provided, should we skip comparing the ref itself?
var effectDeps=deps!==null&&deps!==undefined?deps.concat([ref]):null;return updateEffectImpl(Update,UnmountMutation|MountLayout,imperativeHandleEffect.bind(null,create,ref),effectDeps);}function mountDebugValue(value,formatterFn){// This hook is normally a no-op.
// The react-debug-hooks package injects its own implementation
// so that e.g. DevTools can display custom hook values.
}var updateDebugValue=mountDebugValue;function mountCallback(callback,deps){var hook=mountWorkInProgressHook();var nextDeps=deps===undefined?null:deps;hook.memoizedState=[callback,nextDeps];return callback;}function updateCallback(callback,deps){var hook=updateWorkInProgressHook();var nextDeps=deps===undefined?null:deps;var prevState=hook.memoizedState;if(prevState!==null){if(nextDeps!==null){var prevDeps=prevState[1];if(areHookInputsEqual(nextDeps,prevDeps)){return prevState[0];}}}hook.memoizedState=[callback,nextDeps];return callback;}function mountMemo(nextCreate,deps){var hook=mountWorkInProgressHook();var nextDeps=deps===undefined?null:deps;var nextValue=nextCreate();hook.memoizedState=[nextValue,nextDeps];return nextValue;}function updateMemo(nextCreate,deps){var hook=updateWorkInProgressHook();var nextDeps=deps===undefined?null:deps;var prevState=hook.memoizedState;if(prevState!==null){// Assume these are defined. If they're not, areHookInputsEqual will warn.
if(nextDeps!==null){var prevDeps=prevState[1];if(areHookInputsEqual(nextDeps,prevDeps)){return prevState[0];}}}var nextValue=nextCreate();hook.memoizedState=[nextValue,nextDeps];return nextValue;}function mountDeferredValue(value,config){var _mountState=mountState(value),prevValue=_mountState[0],setValue=_mountState[1];mountEffect(function(){Scheduler.unstable_next(function(){var previousConfig=ReactCurrentBatchConfig$1.suspense;ReactCurrentBatchConfig$1.suspense=config===undefined?null:config;try{setValue(value);}finally{ReactCurrentBatchConfig$1.suspense=previousConfig;}});},[value,config]);return prevValue;}function updateDeferredValue(value,config){var _updateState=updateState(value),prevValue=_updateState[0],setValue=_updateState[1];updateEffect(function(){Scheduler.unstable_next(function(){var previousConfig=ReactCurrentBatchConfig$1.suspense;ReactCurrentBatchConfig$1.suspense=config===undefined?null:config;try{setValue(value);}finally{ReactCurrentBatchConfig$1.suspense=previousConfig;}});},[value,config]);return prevValue;}function mountTransition(config){var _mountState2=mountState(false),isPending=_mountState2[0],setPending=_mountState2[1];var startTransition=mountCallback(function(callback){setPending(true);Scheduler.unstable_next(function(){var previousConfig=ReactCurrentBatchConfig$1.suspense;ReactCurrentBatchConfig$1.suspense=config===undefined?null:config;try{setPending(false);callback();}finally{ReactCurrentBatchConfig$1.suspense=previousConfig;}});},[config,isPending]);return[startTransition,isPending];}function updateTransition(config){var _updateState2=updateState(false),isPending=_updateState2[0],setPending=_updateState2[1];var startTransition=updateCallback(function(callback){setPending(true);Scheduler.unstable_next(function(){var previousConfig=ReactCurrentBatchConfig$1.suspense;ReactCurrentBatchConfig$1.suspense=config===undefined?null:config;try{setPending(false);callback();}finally{ReactCurrentBatchConfig$1.suspense=previousConfig;}});},[config,isPending]);return[startTransition,isPending];}function dispatchAction(fiber,queue,action){if(!(numberOfReRenders<RE_RENDER_LIMIT)){{throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");}}{!(typeof arguments[3]!=='function')?warning$1(false,"State updates from the useState() and useReducer() Hooks don't support the "+'second callback argument. To execute a side effect after '+'rendering, declare it in the component body with useEffect().'):void 0;}var alternate=fiber.alternate;if(fiber===currentlyRenderingFiber$1||alternate!==null&&alternate===currentlyRenderingFiber$1){// This is a render phase update. Stash it in a lazily-created map of
// queue -> linked list of updates. After this render pass, we'll restart
// and apply the stashed updates on top of the work-in-progress hook.
didScheduleRenderPhaseUpdate=true;var update={expirationTime:renderExpirationTime$1,suspenseConfig:null,action:action,eagerReducer:null,eagerState:null,next:null};{update.priority=getCurrentPriorityLevel();}if(renderPhaseUpdates===null){renderPhaseUpdates=new Map();}var firstRenderPhaseUpdate=renderPhaseUpdates.get(queue);if(firstRenderPhaseUpdate===undefined){renderPhaseUpdates.set(queue,update);}else{// Append the update to the end of the list.
var lastRenderPhaseUpdate=firstRenderPhaseUpdate;while(lastRenderPhaseUpdate.next!==null){lastRenderPhaseUpdate=lastRenderPhaseUpdate.next;}lastRenderPhaseUpdate.next=update;}}else{var currentTime=requestCurrentTimeForUpdate();var suspenseConfig=requestCurrentSuspenseConfig();var expirationTime=computeExpirationForFiber(currentTime,fiber,suspenseConfig);var _update2={expirationTime:expirationTime,suspenseConfig:suspenseConfig,action:action,eagerReducer:null,eagerState:null,next:null};{_update2.priority=getCurrentPriorityLevel();}// Append the update to the end of the list.
var last=queue.last;if(last===null){// This is the first update. Create a circular list.
_update2.next=_update2;}else{var first=last.next;if(first!==null){// Still circular.
_update2.next=first;}last.next=_update2;}queue.last=_update2;if(fiber.expirationTime===NoWork&&(alternate===null||alternate.expirationTime===NoWork)){// The queue is currently empty, which means we can eagerly compute the
// next state before entering the render phase. If the new state is the
// same as the current state, we may be able to bail out entirely.
var lastRenderedReducer=queue.lastRenderedReducer;if(lastRenderedReducer!==null){var prevDispatcher;{prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;}try{var currentState=queue.lastRenderedState;var eagerState=lastRenderedReducer(currentState,action);// Stash the eagerly computed state, and the reducer used to compute
// it, on the update object. If the reducer hasn't changed by the
// time we enter the render phase, then the eager state can be used
// without calling the reducer again.
_update2.eagerReducer=lastRenderedReducer;_update2.eagerState=eagerState;if(is$1(eagerState,currentState)){// Fast path. We can bail out without scheduling React to re-render.
// It's still possible that we'll need to rebase this update later,
// if the component re-renders for a different reason and by that
// time the reducer has changed.
return;}}catch(error){// Suppress the error. It will throw again in the render phase.
}finally{{ReactCurrentDispatcher$1.current=prevDispatcher;}}}}{// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
if('undefined'!==typeof jest){warnIfNotScopedWithMatchingAct(fiber);warnIfNotCurrentlyActingUpdatesInDev(fiber);}}scheduleWork(fiber,expirationTime);}}var ContextOnlyDispatcher={readContext:_readContext,useCallback:throwInvalidHookError,useContext:throwInvalidHookError,useEffect:throwInvalidHookError,useImperativeHandle:throwInvalidHookError,useLayoutEffect:throwInvalidHookError,useMemo:throwInvalidHookError,useReducer:throwInvalidHookError,useRef:throwInvalidHookError,useState:throwInvalidHookError,useDebugValue:throwInvalidHookError,useResponder:throwInvalidHookError,useDeferredValue:throwInvalidHookError,useTransition:throwInvalidHookError};var HooksDispatcherOnMountInDEV=null;var HooksDispatcherOnMountWithHookTypesInDEV=null;var HooksDispatcherOnUpdateInDEV=null;var InvalidNestedHooksDispatcherOnMountInDEV=null;var InvalidNestedHooksDispatcherOnUpdateInDEV=null;{var warnInvalidContextAccess=function warnInvalidContextAccess(){warning$1(false,'Context can only be read while React is rendering. '+'In classes, you can read it in the render method or getDerivedStateFromProps. '+'In function components, you can read it directly in the function body, but not '+'inside Hooks like useReducer() or useMemo().');};var warnInvalidHookAccess=function warnInvalidHookAccess(){warning$1(false,'Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. '+'You can only call Hooks at the top level of your React function. '+'For more information, see '+'https://fb.me/rules-of-hooks');};HooksDispatcherOnMountInDEV={readContext:function readContext(context,observedBits){return _readContext(context,observedBits);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';mountHookTypesDev();checkDepsAreArrayDev(deps);return mountCallback(callback,deps);},useContext:function useContext(context,observedBits){currentHookNameInDev='useContext';mountHookTypesDev();return _readContext(context,observedBits);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';mountHookTypesDev();checkDepsAreArrayDev(deps);return mountEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';mountHookTypesDev();checkDepsAreArrayDev(deps);return mountImperativeHandle(ref,create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';mountHookTypesDev();checkDepsAreArrayDev(deps);return mountLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';mountHookTypesDev();checkDepsAreArrayDev(deps);var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';mountHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';mountHookTypesDev();return mountRef(initialValue);},useState:function useState(initialState){currentHookNameInDev='useState';mountHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';mountHookTypesDev();return mountDebugValue(value,formatterFn);},useResponder:function useResponder(responder,props){currentHookNameInDev='useResponder';mountHookTypesDev();return createResponderListener(responder,props);},useDeferredValue:function useDeferredValue(value,config){currentHookNameInDev='useDeferredValue';mountHookTypesDev();return mountDeferredValue(value,config);},useTransition:function useTransition(config){currentHookNameInDev='useTransition';mountHookTypesDev();return mountTransition(config);}};HooksDispatcherOnMountWithHookTypesInDEV={readContext:function readContext(context,observedBits){return _readContext(context,observedBits);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';updateHookTypesDev();return mountCallback(callback,deps);},useContext:function useContext(context,observedBits){currentHookNameInDev='useContext';updateHookTypesDev();return _readContext(context,observedBits);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';updateHookTypesDev();return mountEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';updateHookTypesDev();return mountImperativeHandle(ref,create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';updateHookTypesDev();return mountLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';updateHookTypesDev();return mountRef(initialValue);},useState:function useState(initialState){currentHookNameInDev='useState';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';updateHookTypesDev();return mountDebugValue(value,formatterFn);},useResponder:function useResponder(responder,props){currentHookNameInDev='useResponder';updateHookTypesDev();return createResponderListener(responder,props);},useDeferredValue:function useDeferredValue(value,config){currentHookNameInDev='useDeferredValue';updateHookTypesDev();return mountDeferredValue(value,config);},useTransition:function useTransition(config){currentHookNameInDev='useTransition';updateHookTypesDev();return mountTransition(config);}};HooksDispatcherOnUpdateInDEV={readContext:function readContext(context,observedBits){return _readContext(context,observedBits);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';updateHookTypesDev();return updateCallback(callback,deps);},useContext:function useContext(context,observedBits){currentHookNameInDev='useContext';updateHookTypesDev();return _readContext(context,observedBits);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';updateHookTypesDev();return updateEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';updateHookTypesDev();return updateImperativeHandle(ref,create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';updateHookTypesDev();return updateLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';updateHookTypesDev();return updateRef(initialValue);},useState:function useState(initialState){currentHookNameInDev='useState';updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';updateHookTypesDev();return updateDebugValue(value,formatterFn);},useResponder:function useResponder(responder,props){currentHookNameInDev='useResponder';updateHookTypesDev();return createResponderListener(responder,props);},useDeferredValue:function useDeferredValue(value,config){currentHookNameInDev='useDeferredValue';updateHookTypesDev();return updateDeferredValue(value,config);},useTransition:function useTransition(config){currentHookNameInDev='useTransition';updateHookTypesDev();return updateTransition(config);}};InvalidNestedHooksDispatcherOnMountInDEV={readContext:function readContext(context,observedBits){warnInvalidContextAccess();return _readContext(context,observedBits);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';warnInvalidHookAccess();mountHookTypesDev();return mountCallback(callback,deps);},useContext:function useContext(context,observedBits){currentHookNameInDev='useContext';warnInvalidHookAccess();mountHookTypesDev();return _readContext(context,observedBits);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';warnInvalidHookAccess();mountHookTypesDev();return mountEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';warnInvalidHookAccess();mountHookTypesDev();return mountImperativeHandle(ref,create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';warnInvalidHookAccess();mountHookTypesDev();return mountLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';warnInvalidHookAccess();mountHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';warnInvalidHookAccess();mountHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';warnInvalidHookAccess();mountHookTypesDev();return mountRef(initialValue);},useState:function useState(initialState){currentHookNameInDev='useState';warnInvalidHookAccess();mountHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnMountInDEV;try{return mountState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';warnInvalidHookAccess();mountHookTypesDev();return mountDebugValue(value,formatterFn);},useResponder:function useResponder(responder,props){currentHookNameInDev='useResponder';warnInvalidHookAccess();mountHookTypesDev();return createResponderListener(responder,props);},useDeferredValue:function useDeferredValue(value,config){currentHookNameInDev='useDeferredValue';warnInvalidHookAccess();mountHookTypesDev();return mountDeferredValue(value,config);},useTransition:function useTransition(config){currentHookNameInDev='useTransition';warnInvalidHookAccess();mountHookTypesDev();return mountTransition(config);}};InvalidNestedHooksDispatcherOnUpdateInDEV={readContext:function readContext(context,observedBits){warnInvalidContextAccess();return _readContext(context,observedBits);},useCallback:function useCallback(callback,deps){currentHookNameInDev='useCallback';warnInvalidHookAccess();updateHookTypesDev();return updateCallback(callback,deps);},useContext:function useContext(context,observedBits){currentHookNameInDev='useContext';warnInvalidHookAccess();updateHookTypesDev();return _readContext(context,observedBits);},useEffect:function useEffect(create,deps){currentHookNameInDev='useEffect';warnInvalidHookAccess();updateHookTypesDev();return updateEffect(create,deps);},useImperativeHandle:function useImperativeHandle(ref,create,deps){currentHookNameInDev='useImperativeHandle';warnInvalidHookAccess();updateHookTypesDev();return updateImperativeHandle(ref,create,deps);},useLayoutEffect:function useLayoutEffect(create,deps){currentHookNameInDev='useLayoutEffect';warnInvalidHookAccess();updateHookTypesDev();return updateLayoutEffect(create,deps);},useMemo:function useMemo(create,deps){currentHookNameInDev='useMemo';warnInvalidHookAccess();updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateMemo(create,deps);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useReducer:function useReducer(reducer,initialArg,init){currentHookNameInDev='useReducer';warnInvalidHookAccess();updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateReducer(reducer,initialArg,init);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useRef:function useRef(initialValue){currentHookNameInDev='useRef';warnInvalidHookAccess();updateHookTypesDev();return updateRef(initialValue);},useState:function useState(initialState){currentHookNameInDev='useState';warnInvalidHookAccess();updateHookTypesDev();var prevDispatcher=ReactCurrentDispatcher$1.current;ReactCurrentDispatcher$1.current=InvalidNestedHooksDispatcherOnUpdateInDEV;try{return updateState(initialState);}finally{ReactCurrentDispatcher$1.current=prevDispatcher;}},useDebugValue:function useDebugValue(value,formatterFn){currentHookNameInDev='useDebugValue';warnInvalidHookAccess();updateHookTypesDev();return updateDebugValue(value,formatterFn);},useResponder:function useResponder(responder,props){currentHookNameInDev='useResponder';warnInvalidHookAccess();updateHookTypesDev();return createResponderListener(responder,props);},useDeferredValue:function useDeferredValue(value,config){currentHookNameInDev='useDeferredValue';warnInvalidHookAccess();updateHookTypesDev();return updateDeferredValue(value,config);},useTransition:function useTransition(config){currentHookNameInDev='useTransition';warnInvalidHookAccess();updateHookTypesDev();return updateTransition(config);}};}// CommonJS interop named imports.
var now$2=Scheduler.unstable_now;var commitTime=0;var profilerStartTime=-1;function getCommitTime(){return commitTime;}function recordCommitTime(){if(!enableProfilerTimer){return;}commitTime=now$2();}function startProfilerTimer(fiber){if(!enableProfilerTimer){return;}profilerStartTime=now$2();if(fiber.actualStartTime<0){fiber.actualStartTime=now$2();}}function stopProfilerTimerIfRunning(fiber){if(!enableProfilerTimer){return;}profilerStartTime=-1;}function stopProfilerTimerIfRunningAndRecordDelta(fiber,overrideBaseTime){if(!enableProfilerTimer){return;}if(profilerStartTime>=0){var elapsedTime=now$2()-profilerStartTime;fiber.actualDuration+=elapsedTime;if(overrideBaseTime){fiber.selfBaseDuration=elapsedTime;}profilerStartTime=-1;}}// This may have been an insertion or a hydration.
var hydrationParentFiber=null;var nextHydratableInstance=null;var isHydrating=false;function warnIfHydrating(){{!!isHydrating?warning$1(false,'We should not be hydrating here. This is a bug in React. Please file a bug.'):void 0;}}function enterHydrationState(fiber){if(!supportsHydration){return false;}var parentInstance=fiber.stateNode.containerInfo;nextHydratableInstance=getFirstHydratableChild(parentInstance);hydrationParentFiber=fiber;isHydrating=true;return true;}function reenterHydrationStateFromDehydratedSuspenseInstance(fiber,suspenseInstance){if(!supportsHydration){return false;}nextHydratableInstance=getNextHydratableSibling(suspenseInstance);popToNextHostParent(fiber);isHydrating=true;return true;}function deleteHydratableInstance(returnFiber,instance){{switch(returnFiber.tag){case HostRoot:didNotHydrateContainerInstance(returnFiber.stateNode.containerInfo,instance);break;case HostComponent:didNotHydrateInstance(returnFiber.type,returnFiber.memoizedProps,returnFiber.stateNode,instance);break;}}var childToDelete=createFiberFromHostInstanceForDeletion();childToDelete.stateNode=instance;childToDelete.return=returnFiber;childToDelete.effectTag=Deletion;// This might seem like it belongs on progressedFirstDeletion. However,
// these children are not part of the reconciliation list of children.
// Even if we abort and rereconcile the children, that will try to hydrate
// again and the nodes are still in the host tree so these will be
// recreated.
if(returnFiber.lastEffect!==null){returnFiber.lastEffect.nextEffect=childToDelete;returnFiber.lastEffect=childToDelete;}else{returnFiber.firstEffect=returnFiber.lastEffect=childToDelete;}}function insertNonHydratedInstance(returnFiber,fiber){fiber.effectTag=fiber.effectTag&~Hydrating|Placement;{switch(returnFiber.tag){case HostRoot:{var parentContainer=returnFiber.stateNode.containerInfo;switch(fiber.tag){case HostComponent:var type=fiber.type;var props=fiber.pendingProps;didNotFindHydratableContainerInstance(parentContainer,type,props);break;case HostText:var text=fiber.pendingProps;didNotFindHydratableContainerTextInstance(parentContainer,text);break;case SuspenseComponent:didNotFindHydratableContainerSuspenseInstance(parentContainer);break;}break;}case HostComponent:{var parentType=returnFiber.type;var parentProps=returnFiber.memoizedProps;var parentInstance=returnFiber.stateNode;switch(fiber.tag){case HostComponent:var _type=fiber.type;var _props=fiber.pendingProps;didNotFindHydratableInstance(parentType,parentProps,parentInstance,_type,_props);break;case HostText:var _text=fiber.pendingProps;didNotFindHydratableTextInstance(parentType,parentProps,parentInstance,_text);break;case SuspenseComponent:didNotFindHydratableSuspenseInstance(parentType,parentProps,parentInstance);break;}break;}default:return;}}}function tryHydrate(fiber,nextInstance){switch(fiber.tag){case HostComponent:{var type=fiber.type;var props=fiber.pendingProps;var instance=canHydrateInstance(nextInstance,type,props);if(instance!==null){fiber.stateNode=instance;return true;}return false;}case HostText:{var text=fiber.pendingProps;var textInstance=canHydrateTextInstance(nextInstance,text);if(textInstance!==null){fiber.stateNode=textInstance;return true;}return false;}case SuspenseComponent:{if(enableSuspenseServerRenderer){var suspenseInstance=canHydrateSuspenseInstance(nextInstance);if(suspenseInstance!==null){var suspenseState={dehydrated:suspenseInstance,retryTime:Never};fiber.memoizedState=suspenseState;// Store the dehydrated fragment as a child fiber.
// This simplifies the code for getHostSibling and deleting nodes,
// since it doesn't have to consider all Suspense boundaries and
// check if they're dehydrated ones or not.
var dehydratedFragment=createFiberFromDehydratedFragment(suspenseInstance);dehydratedFragment.return=fiber;fiber.child=dehydratedFragment;return true;}}return false;}default:return false;}}function tryToClaimNextHydratableInstance(fiber){if(!isHydrating){return;}var nextInstance=nextHydratableInstance;if(!nextInstance){// Nothing to hydrate. Make it an insertion.
insertNonHydratedInstance(hydrationParentFiber,fiber);isHydrating=false;hydrationParentFiber=fiber;return;}var firstAttemptedInstance=nextInstance;if(!tryHydrate(fiber,nextInstance)){// If we can't hydrate this instance let's try the next one.
// We use this as a heuristic. It's based on intuition and not data so it
// might be flawed or unnecessary.
nextInstance=getNextHydratableSibling(firstAttemptedInstance);if(!nextInstance||!tryHydrate(fiber,nextInstance)){// Nothing to hydrate. Make it an insertion.
insertNonHydratedInstance(hydrationParentFiber,fiber);isHydrating=false;hydrationParentFiber=fiber;return;}// We matched the next one, we'll now assume that the first one was
// superfluous and we'll delete it. Since we can't eagerly delete it
// we'll have to schedule a deletion. To do that, this node needs a dummy
// fiber associated with it.
deleteHydratableInstance(hydrationParentFiber,firstAttemptedInstance);}hydrationParentFiber=fiber;nextHydratableInstance=getFirstHydratableChild(nextInstance);}function prepareToHydrateHostInstance(fiber,rootContainerInstance,hostContext){if(!supportsHydration){{{throw Error("Expected prepareToHydrateHostInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");}}}var instance=fiber.stateNode;var updatePayload=hydrateInstance(instance,fiber.type,fiber.memoizedProps,rootContainerInstance,hostContext,fiber);// TODO: Type this specific to this type of component.
fiber.updateQueue=updatePayload;// If the update payload indicates that there is a change or if there
// is a new ref we mark this as an update.
if(updatePayload!==null){return true;}return false;}function prepareToHydrateHostTextInstance(fiber){if(!supportsHydration){{{throw Error("Expected prepareToHydrateHostTextInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");}}}var textInstance=fiber.stateNode;var textContent=fiber.memoizedProps;var shouldUpdate=hydrateTextInstance(textInstance,textContent,fiber);{if(shouldUpdate){// We assume that prepareToHydrateHostTextInstance is called in a context where the
// hydration parent is the parent host component of this host text.
var returnFiber=hydrationParentFiber;if(returnFiber!==null){switch(returnFiber.tag){case HostRoot:{var parentContainer=returnFiber.stateNode.containerInfo;didNotMatchHydratedContainerTextInstance(parentContainer,textInstance,textContent);break;}case HostComponent:{var parentType=returnFiber.type;var parentProps=returnFiber.memoizedProps;var parentInstance=returnFiber.stateNode;didNotMatchHydratedTextInstance(parentType,parentProps,parentInstance,textInstance,textContent);break;}}}}}return shouldUpdate;}function prepareToHydrateHostSuspenseInstance(fiber){if(!supportsHydration){{{throw Error("Expected prepareToHydrateHostSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");}}}var suspenseState=fiber.memoizedState;var suspenseInstance=suspenseState!==null?suspenseState.dehydrated:null;if(!suspenseInstance){{throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");}}hydrateSuspenseInstance(suspenseInstance,fiber);}function skipPastDehydratedSuspenseInstance(fiber){if(!supportsHydration){{{throw Error("Expected skipPastDehydratedSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue.");}}}var suspenseState=fiber.memoizedState;var suspenseInstance=suspenseState!==null?suspenseState.dehydrated:null;if(!suspenseInstance){{throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");}}return getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance);}function popToNextHostParent(fiber){var parent=fiber.return;while(parent!==null&&parent.tag!==HostComponent&&parent.tag!==HostRoot&&parent.tag!==SuspenseComponent){parent=parent.return;}hydrationParentFiber=parent;}function popHydrationState(fiber){if(!supportsHydration){return false;}if(fiber!==hydrationParentFiber){// We're deeper than the current hydration context, inside an inserted
// tree.
return false;}if(!isHydrating){// If we're not currently hydrating but we're in a hydration context, then
// we were an insertion and now need to pop up reenter hydration of our
// siblings.
popToNextHostParent(fiber);isHydrating=true;return false;}var type=fiber.type;// If we have any remaining hydratable nodes, we need to delete them now.
// We only do this deeper than head and body since they tend to have random
// other nodes in them. We also ignore components with pure text content in
// side of them.
// TODO: Better heuristic.
if(fiber.tag!==HostComponent||type!=='head'&&type!=='body'&&!shouldSetTextContent(type,fiber.memoizedProps)){var nextInstance=nextHydratableInstance;while(nextInstance){deleteHydratableInstance(fiber,nextInstance);nextInstance=getNextHydratableSibling(nextInstance);}}popToNextHostParent(fiber);if(fiber.tag===SuspenseComponent){nextHydratableInstance=skipPastDehydratedSuspenseInstance(fiber);}else{nextHydratableInstance=hydrationParentFiber?getNextHydratableSibling(fiber.stateNode):null;}return true;}function resetHydrationState(){if(!supportsHydration){return;}hydrationParentFiber=null;nextHydratableInstance=null;isHydrating=false;}var ReactCurrentOwner$2=ReactSharedInternals.ReactCurrentOwner;var didReceiveUpdate=false;var didWarnAboutBadClass;var didWarnAboutModulePatternComponent;var didWarnAboutContextTypeOnFunctionComponent;var didWarnAboutGetDerivedStateOnFunctionComponent;var didWarnAboutFunctionRefs;var didWarnAboutReassigningProps;var didWarnAboutMaxDuration;var didWarnAboutRevealOrder;var didWarnAboutTailOptions;var didWarnAboutDefaultPropsOnFunctionComponent;{didWarnAboutBadClass={};didWarnAboutModulePatternComponent={};didWarnAboutContextTypeOnFunctionComponent={};didWarnAboutGetDerivedStateOnFunctionComponent={};didWarnAboutFunctionRefs={};didWarnAboutReassigningProps=false;didWarnAboutMaxDuration=false;didWarnAboutRevealOrder={};didWarnAboutTailOptions={};didWarnAboutDefaultPropsOnFunctionComponent={};}function reconcileChildren(current$$1,workInProgress,nextChildren,renderExpirationTime){if(current$$1===null){// If this is a fresh new component that hasn't been rendered yet, we
// won't update its child set by applying minimal side-effects. Instead,
// we will add them all to the child before it gets rendered. That means
// we can optimize this reconciliation pass by not tracking side-effects.
workInProgress.child=mountChildFibers(workInProgress,null,nextChildren,renderExpirationTime);}else{// If the current child is the same as the work in progress, it means that
// we haven't yet started any work on these children. Therefore, we use
// the clone algorithm to create a copy of all the current children.
// If we had any progressed work already, that is invalid at this point so
// let's throw it out.
workInProgress.child=reconcileChildFibers(workInProgress,current$$1.child,nextChildren,renderExpirationTime);}}function forceUnmountCurrentAndReconcile(current$$1,workInProgress,nextChildren,renderExpirationTime){// This function is fork of reconcileChildren. It's used in cases where we
// want to reconcile without matching against the existing set. This has the
// effect of all current children being unmounted; even if the type and key
// are the same, the old child is unmounted and a new child is created.
//
// To do this, we're going to go through the reconcile algorithm twice. In
// the first pass, we schedule a deletion for all the current children by
// passing null.
workInProgress.child=reconcileChildFibers(workInProgress,current$$1.child,null,renderExpirationTime);// In the second pass, we mount the new children. The trick here is that we
// pass null in place of where we usually pass the current child set. This has
// the effect of remounting all children regardless of whether their their
// identity matches.
workInProgress.child=reconcileChildFibers(workInProgress,null,nextChildren,renderExpirationTime);}function updateForwardRef(current$$1,workInProgress,Component,nextProps,renderExpirationTime){// TODO: current can be non-null here even if the component
// hasn't yet mounted. This happens after the first render suspends.
// We'll need to figure out if this is fine or can cause issues.
{if(workInProgress.type!==workInProgress.elementType){// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var innerPropTypes=Component.propTypes;if(innerPropTypes){checkPropTypes(innerPropTypes,nextProps,// Resolved props
'prop',getComponentName(Component),getCurrentFiberStackInDev);}}}var render=Component.render;var ref=workInProgress.ref;// The rest is a fork of updateFunctionComponent
var nextChildren;prepareToReadContext(workInProgress,renderExpirationTime);{ReactCurrentOwner$2.current=workInProgress;setCurrentPhase('render');nextChildren=renderWithHooks(current$$1,workInProgress,render,nextProps,ref,renderExpirationTime);if(debugRenderPhaseSideEffects||debugRenderPhaseSideEffectsForStrictMode&&workInProgress.mode&StrictMode){// Only double-render components with Hooks
if(workInProgress.memoizedState!==null){nextChildren=renderWithHooks(current$$1,workInProgress,render,nextProps,ref,renderExpirationTime);}}setCurrentPhase(null);}if(current$$1!==null&&!didReceiveUpdate){bailoutHooks(current$$1,workInProgress,renderExpirationTime);return bailoutOnAlreadyFinishedWork(current$$1,workInProgress,renderExpirationTime);}// React DevTools reads this flag.
workInProgress.effectTag|=PerformedWork;reconcileChildren(current$$1,workInProgress,nextChildren,renderExpirationTime);return workInProgress.child;}function updateMemoComponent(current$$1,workInProgress,Component,nextProps,updateExpirationTime,renderExpirationTime){if(current$$1===null){var type=Component.type;if(isSimpleFunctionComponent(type)&&Component.compare===null&&// SimpleMemoComponent codepath doesn't resolve outer props either.
Component.defaultProps===undefined){var resolvedType=type;{resolvedType=resolveFunctionForHotReloading(type);}// If this is a plain function component without default props,
// and with only the default shallow comparison, we upgrade it
// to a SimpleMemoComponent to allow fast path updates.
workInProgress.tag=SimpleMemoComponent;workInProgress.type=resolvedType;{validateFunctionComponentInDev(workInProgress,type);}return updateSimpleMemoComponent(current$$1,workInProgress,resolvedType,nextProps,updateExpirationTime,renderExpirationTime);}{var innerPropTypes=type.propTypes;if(innerPropTypes){// Inner memo component props aren't currently validated in createElement.
// We could move it there, but we'd still need this for lazy code path.
checkPropTypes(innerPropTypes,nextProps,// Resolved props
'prop',getComponentName(type),getCurrentFiberStackInDev);}}var child=createFiberFromTypeAndProps(Component.type,null,nextProps,null,workInProgress.mode,renderExpirationTime);child.ref=workInProgress.ref;child.return=workInProgress;workInProgress.child=child;return child;}{var _type=Component.type;var _innerPropTypes=_type.propTypes;if(_innerPropTypes){// Inner memo component props aren't currently validated in createElement.
// We could move it there, but we'd still need this for lazy code path.
checkPropTypes(_innerPropTypes,nextProps,// Resolved props
'prop',getComponentName(_type),getCurrentFiberStackInDev);}}var currentChild=current$$1.child;// This is always exactly one child
if(updateExpirationTime<renderExpirationTime){// This will be the props with resolved defaultProps,
// unlike current.memoizedProps which will be the unresolved ones.
var prevProps=currentChild.memoizedProps;// Default to shallow comparison
var compare=Component.compare;compare=compare!==null?compare:shallowEqual;if(compare(prevProps,nextProps)&&current$$1.ref===workInProgress.ref){return bailoutOnAlreadyFinishedWork(current$$1,workInProgress,renderExpirationTime);}}// React DevTools reads this flag.
workInProgress.effectTag|=PerformedWork;var newChild=createWorkInProgress(currentChild,nextProps,renderExpirationTime);newChild.ref=workInProgress.ref;newChild.return=workInProgress;workInProgress.child=newChild;return newChild;}function updateSimpleMemoComponent(current$$1,workInProgress,Component,nextProps,updateExpirationTime,renderExpirationTime){// TODO: current can be non-null here even if the component
// hasn't yet mounted. This happens when the inner render suspends.
// We'll need to figure out if this is fine or can cause issues.
{if(workInProgress.type!==workInProgress.elementType){// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var outerMemoType=workInProgress.elementType;if(outerMemoType.$$typeof===REACT_LAZY_TYPE){// We warn when you define propTypes on lazy()
// so let's just skip over it to find memo() outer wrapper.
// Inner props for memo are validated later.
outerMemoType=refineResolvedLazyComponent(outerMemoType);}var outerPropTypes=outerMemoType&&outerMemoType.propTypes;if(outerPropTypes){checkPropTypes(outerPropTypes,nextProps,// Resolved (SimpleMemoComponent has no defaultProps)
'prop',getComponentName(outerMemoType),getCurrentFiberStackInDev);}// Inner propTypes will be validated in the function component path.
}}if(current$$1!==null){var prevProps=current$$1.memoizedProps;if(shallowEqual(prevProps,nextProps)&&current$$1.ref===workInProgress.ref&&// Prevent bailout if the implementation changed due to hot reload:
workInProgress.type===current$$1.type){didReceiveUpdate=false;if(updateExpirationTime<renderExpirationTime){return bailoutOnAlreadyFinishedWork(current$$1,workInProgress,renderExpirationTime);}}}return updateFunctionComponent(current$$1,workInProgress,Component,nextProps,renderExpirationTime);}function updateFragment(current$$1,workInProgress,renderExpirationTime){var nextChildren=workInProgress.pendingProps;reconcileChildren(current$$1,workInProgress,nextChildren,renderExpirationTime);return workInProgress.child;}function updateMode(current$$1,workInProgress,renderExpirationTime){var nextChildren=workInProgress.pendingProps.children;reconcileChildren(current$$1,workInProgress,nextChildren,renderExpirationTime);return workInProgress.child;}function updateProfiler(current$$1,workInProgress,renderExpirationTime){if(enableProfilerTimer){workInProgress.effectTag|=Update;}var nextProps=workInProgress.pendingProps;var nextChildren=nextProps.children;reconcileChildren(current$$1,workInProgress,nextChildren,renderExpirationTime);return workInProgress.child;}function markRef(current$$1,workInProgress){var ref=workInProgress.ref;if(current$$1===null&&ref!==null||current$$1!==null&&current$$1.ref!==ref){// Schedule a Ref effect
workInProgress.effectTag|=Ref;}}function updateFunctionComponent(current$$1,workInProgress,Component,nextProps,renderExpirationTime){{if(workInProgress.type!==workInProgress.elementType){// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var innerPropTypes=Component.propTypes;if(innerPropTypes){checkPropTypes(innerPropTypes,nextProps,// Resolved props
'prop',getComponentName(Component),getCurrentFiberStackInDev);}}}var context;if(!disableLegacyContext){var unmaskedContext=getUnmaskedContext(workInProgress,Component,true);context=getMaskedContext(workInProgress,unmaskedContext);}var nextChildren;prepareToReadContext(workInProgress,renderExpirationTime);{ReactCurrentOwner$2.current=workInProgress;setCurrentPhase('render');nextChildren=renderWithHooks(current$$1,workInProgress,Component,nextProps,context,renderExpirationTime);if(debugRenderPhaseSideEffects||debugRenderPhaseSideEffectsForStrictMode&&workInProgress.mode&StrictMode){// Only double-render components with Hooks
if(workInProgress.memoizedState!==null){nextChildren=renderWithHooks(current$$1,workInProgress,Component,nextProps,context,renderExpirationTime);}}setCurrentPhase(null);}if(current$$1!==null&&!didReceiveUpdate){bailoutHooks(current$$1,workInProgress,renderExpirationTime);return bailoutOnAlreadyFinishedWork(current$$1,workInProgress,renderExpirationTime);}// React DevTools reads this flag.
workInProgress.effectTag|=PerformedWork;reconcileChildren(current$$1,workInProgress,nextChildren,renderExpirationTime);return workInProgress.child;}function updateClassComponent(current$$1,workInProgress,Component,nextProps,renderExpirationTime){{if(workInProgress.type!==workInProgress.elementType){// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var innerPropTypes=Component.propTypes;if(innerPropTypes){checkPropTypes(innerPropTypes,nextProps,// Resolved props
'prop',getComponentName(Component),getCurrentFiberStackInDev);}}}// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var hasContext;if(isContextProvider(Component)){hasContext=true;pushContextProvider(workInProgress);}else{hasContext=false;}prepareToReadContext(workInProgress,renderExpirationTime);var instance=workInProgress.stateNode;var shouldUpdate;if(instance===null){if(current$$1!==null){// An class component without an instance only mounts if it suspended
// inside a non- concurrent tree, in an inconsistent state. We want to
// tree it like a new mount, even though an empty version of it already
// committed. Disconnect the alternate pointers.
current$$1.alternate=null;workInProgress.alternate=null;// Since this is conceptually a new fiber, schedule a Placement effect
workInProgress.effectTag|=Placement;}// In the initial pass we might need to construct the instance.
constructClassInstance(workInProgress,Component,nextProps,renderExpirationTime);mountClassInstance(workInProgress,Component,nextProps,renderExpirationTime);shouldUpdate=true;}else if(current$$1===null){// In a resume, we'll already have an instance we can reuse.
shouldUpdate=resumeMountClassInstance(workInProgress,Component,nextProps,renderExpirationTime);}else{shouldUpdate=updateClassInstance(current$$1,workInProgress,Component,nextProps,renderExpirationTime);}var nextUnitOfWork=finishClassComponent(current$$1,workInProgress,Component,shouldUpdate,hasContext,renderExpirationTime);{var inst=workInProgress.stateNode;if(inst.props!==nextProps){!didWarnAboutReassigningProps?warning$1(false,'It looks like %s is reassigning its own `this.props` while rendering. '+'This is not supported and can lead to confusing bugs.',getComponentName(workInProgress.type)||'a component'):void 0;didWarnAboutReassigningProps=true;}}return nextUnitOfWork;}function finishClassComponent(current$$1,workInProgress,Component,shouldUpdate,hasContext,renderExpirationTime){// Refs should update even if shouldComponentUpdate returns false
markRef(current$$1,workInProgress);var didCaptureError=(workInProgress.effectTag&DidCapture)!==NoEffect;if(!shouldUpdate&&!didCaptureError){// Context providers should defer to sCU for rendering
if(hasContext){invalidateContextProvider(workInProgress,Component,false);}return bailoutOnAlreadyFinishedWork(current$$1,workInProgress,renderExpirationTime);}var instance=workInProgress.stateNode;// Rerender
ReactCurrentOwner$2.current=workInProgress;var nextChildren;if(didCaptureError&&typeof Component.getDerivedStateFromError!=='function'){// If we captured an error, but getDerivedStateFrom catch is not defined,
// unmount all the children. componentDidCatch will schedule an update to
// re-render a fallback. This is temporary until we migrate everyone to
// the new API.
// TODO: Warn in a future release.
nextChildren=null;if(enableProfilerTimer){stopProfilerTimerIfRunning(workInProgress);}}else{{setCurrentPhase('render');nextChildren=instance.render();if(debugRenderPhaseSideEffects||debugRenderPhaseSideEffectsForStrictMode&&workInProgress.mode&StrictMode){instance.render();}setCurrentPhase(null);}}// React DevTools reads this flag.
workInProgress.effectTag|=PerformedWork;if(current$$1!==null&&didCaptureError){// If we're recovering from an error, reconcile without reusing any of
// the existing children. Conceptually, the normal children and the children
// that are shown on error are two different sets, so we shouldn't reuse
// normal children even if their identities match.
forceUnmountCurrentAndReconcile(current$$1,workInProgress,nextChildren,renderExpirationTime);}else{reconcileChildren(current$$1,workInProgress,nextChildren,renderExpirationTime);}// Memoize state using the values we just used to render.
// TODO: Restructure so we never read values from the instance.
workInProgress.memoizedState=instance.state;// The context might have changed so we need to recalculate it.
if(hasContext){invalidateContextProvider(workInProgress,Component,true);}return workInProgress.child;}function pushHostRootContext(workInProgress){var root=workInProgress.stateNode;if(root.pendingContext){pushTopLevelContextObject(workInProgress,root.pendingContext,root.pendingContext!==root.context);}else if(root.context){// Should always be set
pushTopLevelContextObject(workInProgress,root.context,false);}pushHostContainer(workInProgress,root.containerInfo);}function updateHostRoot(current$$1,workInProgress,renderExpirationTime){pushHostRootContext(workInProgress);var updateQueue=workInProgress.updateQueue;if(!(updateQueue!==null)){{throw Error("If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.");}}var nextProps=workInProgress.pendingProps;var prevState=workInProgress.memoizedState;var prevChildren=prevState!==null?prevState.element:null;processUpdateQueue(workInProgress,updateQueue,nextProps,null,renderExpirationTime);var nextState=workInProgress.memoizedState;// Caution: React DevTools currently depends on this property
// being called "element".
var nextChildren=nextState.element;if(nextChildren===prevChildren){// If the state is the same as before, that's a bailout because we had
// no work that expires at this time.
resetHydrationState();return bailoutOnAlreadyFinishedWork(current$$1,workInProgress,renderExpirationTime);}var root=workInProgress.stateNode;if(root.hydrate&&enterHydrationState(workInProgress)){// If we don't have any current children this might be the first pass.
// We always try to hydrate. If this isn't a hydration pass there won't
// be any children to hydrate which is effectively the same thing as
// not hydrating.
var child=mountChildFibers(workInProgress,null,nextChildren,renderExpirationTime);workInProgress.child=child;var node=child;while(node){// Mark each child as hydrating. This is a fast path to know whether this
// tree is part of a hydrating tree. This is used to determine if a child
// node has fully mounted yet, and for scheduling event replaying.
// Conceptually this is similar to Placement in that a new subtree is
// inserted into the React tree here. It just happens to not need DOM
// mutations because it already exists.
node.effectTag=node.effectTag&~Placement|Hydrating;node=node.sibling;}}else{// Otherwise reset hydration state in case we aborted and resumed another
// root.
reconcileChildren(current$$1,workInProgress,nextChildren,renderExpirationTime);resetHydrationState();}return workInProgress.child;}function updateHostComponent(current$$1,workInProgress,renderExpirationTime){pushHostContext(workInProgress);if(current$$1===null){tryToClaimNextHydratableInstance(workInProgress);}var type=workInProgress.type;var nextProps=workInProgress.pendingProps;var prevProps=current$$1!==null?current$$1.memoizedProps:null;var nextChildren=nextProps.children;var isDirectTextChild=shouldSetTextContent(type,nextProps);if(isDirectTextChild){// We special case a direct text child of a host node. This is a common
// case. We won't handle it as a reified child. We will instead handle
// this in the host environment that also have access to this prop. That
// avoids allocating another HostText fiber and traversing it.
nextChildren=null;}else if(prevProps!==null&&shouldSetTextContent(type,prevProps)){// If we're switching from a direct text child to a normal child, or to
// empty, we need to schedule the text content to be reset.
workInProgress.effectTag|=ContentReset;}markRef(current$$1,workInProgress);// Check the host config to see if the children are offscreen/hidden.
if(workInProgress.mode&ConcurrentMode&&renderExpirationTime!==Never&&shouldDeprioritizeSubtree(type,nextProps)){if(enableSchedulerTracing){markSpawnedWork(Never);}// Schedule this fiber to re-render at offscreen priority. Then bailout.
workInProgress.expirationTime=workInProgress.childExpirationTime=Never;return null;}reconcileChildren(current$$1,workInProgress,nextChildren,renderExpirationTime);return workInProgress.child;}function updateHostText(current$$1,workInProgress){if(current$$1===null){tryToClaimNextHydratableInstance(workInProgress);}// Nothing to do here. This is terminal. We'll do the completion step
// immediately after.
return null;}function mountLazyComponent(_current,workInProgress,elementType,updateExpirationTime,renderExpirationTime){if(_current!==null){// An lazy component only mounts if it suspended inside a non-
// concurrent tree, in an inconsistent state. We want to treat it like
// a new mount, even though an empty version of it already committed.
// Disconnect the alternate pointers.
_current.alternate=null;workInProgress.alternate=null;// Since this is conceptually a new fiber, schedule a Placement effect
workInProgress.effectTag|=Placement;}var props=workInProgress.pendingProps;// We can't start a User Timing measurement with correct label yet.
// Cancel and resume right after we know the tag.
cancelWorkTimer(workInProgress);var Component=readLazyComponentType(elementType);// Store the unwrapped component in the type.
workInProgress.type=Component;var resolvedTag=workInProgress.tag=resolveLazyComponentTag(Component);startWorkTimer(workInProgress);var resolvedProps=resolveDefaultProps(Component,props);var child;switch(resolvedTag){case FunctionComponent:{{validateFunctionComponentInDev(workInProgress,Component);workInProgress.type=Component=resolveFunctionForHotReloading(Component);}child=updateFunctionComponent(null,workInProgress,Component,resolvedProps,renderExpirationTime);break;}case ClassComponent:{{workInProgress.type=Component=resolveClassForHotReloading(Component);}child=updateClassComponent(null,workInProgress,Component,resolvedProps,renderExpirationTime);break;}case ForwardRef:{{workInProgress.type=Component=resolveForwardRefForHotReloading(Component);}child=updateForwardRef(null,workInProgress,Component,resolvedProps,renderExpirationTime);break;}case MemoComponent:{{if(workInProgress.type!==workInProgress.elementType){var outerPropTypes=Component.propTypes;if(outerPropTypes){checkPropTypes(outerPropTypes,resolvedProps,// Resolved for outer only
'prop',getComponentName(Component),getCurrentFiberStackInDev);}}}child=updateMemoComponent(null,workInProgress,Component,resolveDefaultProps(Component.type,resolvedProps),// The inner type can have defaults too
updateExpirationTime,renderExpirationTime);break;}default:{var hint='';{if(Component!==null&&_typeof(Component)==='object'&&Component.$$typeof===REACT_LAZY_TYPE){hint=' Did you wrap a component in React.lazy() more than once?';}}// This message intentionally doesn't mention ForwardRef or MemoComponent
// because the fact that it's a separate type of work is an
// implementation detail.
{{throw Error("Element type is invalid. Received a promise that resolves to: "+Component+". Lazy element type must resolve to a class or function."+hint);}}}}return child;}function mountIncompleteClassComponent(_current,workInProgress,Component,nextProps,renderExpirationTime){if(_current!==null){// An incomplete component only mounts if it suspended inside a non-
// concurrent tree, in an inconsistent state. We want to treat it like
// a new mount, even though an empty version of it already committed.
// Disconnect the alternate pointers.
_current.alternate=null;workInProgress.alternate=null;// Since this is conceptually a new fiber, schedule a Placement effect
workInProgress.effectTag|=Placement;}// Promote the fiber to a class and try rendering again.
workInProgress.tag=ClassComponent;// The rest of this function is a fork of `updateClassComponent`
// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var hasContext;if(isContextProvider(Component)){hasContext=true;pushContextProvider(workInProgress);}else{hasContext=false;}prepareToReadContext(workInProgress,renderExpirationTime);constructClassInstance(workInProgress,Component,nextProps,renderExpirationTime);mountClassInstance(workInProgress,Component,nextProps,renderExpirationTime);return finishClassComponent(null,workInProgress,Component,true,hasContext,renderExpirationTime);}function mountIndeterminateComponent(_current,workInProgress,Component,renderExpirationTime){if(_current!==null){// An indeterminate component only mounts if it suspended inside a non-
// concurrent tree, in an inconsistent state. We want to treat it like
// a new mount, even though an empty version of it already committed.
// Disconnect the alternate pointers.
_current.alternate=null;workInProgress.alternate=null;// Since this is conceptually a new fiber, schedule a Placement effect
workInProgress.effectTag|=Placement;}var props=workInProgress.pendingProps;var context;if(!disableLegacyContext){var unmaskedContext=getUnmaskedContext(workInProgress,Component,false);context=getMaskedContext(workInProgress,unmaskedContext);}prepareToReadContext(workInProgress,renderExpirationTime);var value;{if(Component.prototype&&typeof Component.prototype.render==='function'){var componentName=getComponentName(Component)||'Unknown';if(!didWarnAboutBadClass[componentName]){warningWithoutStack$1(false,"The <%s /> component appears to have a render method, but doesn't extend React.Component. "+'This is likely to cause errors. Change %s to extend React.Component instead.',componentName,componentName);didWarnAboutBadClass[componentName]=true;}}if(workInProgress.mode&StrictMode){ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress,null);}ReactCurrentOwner$2.current=workInProgress;value=renderWithHooks(null,workInProgress,Component,props,context,renderExpirationTime);}// React DevTools reads this flag.
workInProgress.effectTag|=PerformedWork;if(_typeof(value)==='object'&&value!==null&&typeof value.render==='function'&&value.$$typeof===undefined){{var _componentName=getComponentName(Component)||'Unknown';if(!didWarnAboutModulePatternComponent[_componentName]){warningWithoutStack$1(false,'The <%s /> component appears to be a function component that returns a class instance. '+'Change %s to a class that extends React.Component instead. '+"If you can't use a class try assigning the prototype on the function as a workaround. "+"`%s.prototype = React.Component.prototype`. Don't use an arrow function since it "+'cannot be called with `new` by React.',_componentName,_componentName,_componentName);didWarnAboutModulePatternComponent[_componentName]=true;}}// Proceed under the assumption that this is a class instance
workInProgress.tag=ClassComponent;// Throw out any hooks that were used.
resetHooks();// Push context providers early to prevent context stack mismatches.
// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var hasContext=false;if(isContextProvider(Component)){hasContext=true;pushContextProvider(workInProgress);}else{hasContext=false;}workInProgress.memoizedState=value.state!==null&&value.state!==undefined?value.state:null;var getDerivedStateFromProps=Component.getDerivedStateFromProps;if(typeof getDerivedStateFromProps==='function'){applyDerivedStateFromProps(workInProgress,Component,getDerivedStateFromProps,props);}adoptClassInstance(workInProgress,value);mountClassInstance(workInProgress,Component,props,renderExpirationTime);return finishClassComponent(null,workInProgress,Component,true,hasContext,renderExpirationTime);}else{// Proceed under the assumption that this is a function component
workInProgress.tag=FunctionComponent;{if(disableLegacyContext&&Component.contextTypes){warningWithoutStack$1(false,'%s uses the legacy contextTypes API which is no longer supported. '+'Use React.createContext() with React.useContext() instead.',getComponentName(Component)||'Unknown');}if(debugRenderPhaseSideEffects||debugRenderPhaseSideEffectsForStrictMode&&workInProgress.mode&StrictMode){// Only double-render components with Hooks
if(workInProgress.memoizedState!==null){value=renderWithHooks(null,workInProgress,Component,props,context,renderExpirationTime);}}}reconcileChildren(null,workInProgress,value,renderExpirationTime);{validateFunctionComponentInDev(workInProgress,Component);}return workInProgress.child;}}function validateFunctionComponentInDev(workInProgress,Component){if(Component){!!Component.childContextTypes?warningWithoutStack$1(false,'%s(...): childContextTypes cannot be defined on a function component.',Component.displayName||Component.name||'Component'):void 0;}if(workInProgress.ref!==null){var info='';var ownerName=getCurrentFiberOwnerNameInDevOrNull();if(ownerName){info+='\n\nCheck the render method of `'+ownerName+'`.';}var warningKey=ownerName||workInProgress._debugID||'';var debugSource=workInProgress._debugSource;if(debugSource){warningKey=debugSource.fileName+':'+debugSource.lineNumber;}if(!didWarnAboutFunctionRefs[warningKey]){didWarnAboutFunctionRefs[warningKey]=true;warning$1(false,'Function components cannot be given refs. '+'Attempts to access this ref will fail. '+'Did you mean to use React.forwardRef()?%s',info);}}if(warnAboutDefaultPropsOnFunctionComponents&&Component.defaultProps!==undefined){var componentName=getComponentName(Component)||'Unknown';if(!didWarnAboutDefaultPropsOnFunctionComponent[componentName]){warningWithoutStack$1(false,'%s: Support for defaultProps will be removed from function components '+'in a future major release. Use JavaScript default parameters instead.',componentName);didWarnAboutDefaultPropsOnFunctionComponent[componentName]=true;}}if(typeof Component.getDerivedStateFromProps==='function'){var _componentName2=getComponentName(Component)||'Unknown';if(!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName2]){warningWithoutStack$1(false,'%s: Function components do not support getDerivedStateFromProps.',_componentName2);didWarnAboutGetDerivedStateOnFunctionComponent[_componentName2]=true;}}if(_typeof(Component.contextType)==='object'&&Component.contextType!==null){var _componentName3=getComponentName(Component)||'Unknown';if(!didWarnAboutContextTypeOnFunctionComponent[_componentName3]){warningWithoutStack$1(false,'%s: Function components do not support contextType.',_componentName3);didWarnAboutContextTypeOnFunctionComponent[_componentName3]=true;}}}var SUSPENDED_MARKER={dehydrated:null,retryTime:NoWork};function shouldRemainOnFallback(suspenseContext,current$$1,workInProgress){// If the context is telling us that we should show a fallback, and we're not
// already showing content, then we should show the fallback instead.
return hasSuspenseContext(suspenseContext,ForceSuspenseFallback)&&(current$$1===null||current$$1.memoizedState!==null);}function updateSuspenseComponent(current$$1,workInProgress,renderExpirationTime){var mode=workInProgress.mode;var nextProps=workInProgress.pendingProps;// This is used by DevTools to force a boundary to suspend.
{if(shouldSuspend(workInProgress)){workInProgress.effectTag|=DidCapture;}}var suspenseContext=suspenseStackCursor.current;var nextDidTimeout=false;var didSuspend=(workInProgress.effectTag&DidCapture)!==NoEffect;if(didSuspend||shouldRemainOnFallback(suspenseContext,current$$1,workInProgress)){// Something in this boundary's subtree already suspended. Switch to
// rendering the fallback children.
nextDidTimeout=true;workInProgress.effectTag&=~DidCapture;}else{// Attempting the main content
if(current$$1===null||current$$1.memoizedState!==null){// This is a new mount or this boundary is already showing a fallback state.
// Mark this subtree context as having at least one invisible parent that could
// handle the fallback state.
// Boundaries without fallbacks or should be avoided are not considered since
// they cannot handle preferred fallback states.
if(nextProps.fallback!==undefined&&nextProps.unstable_avoidThisFallback!==true){suspenseContext=addSubtreeSuspenseContext(suspenseContext,InvisibleParentSuspenseContext);}}}suspenseContext=setDefaultShallowSuspenseContext(suspenseContext);pushSuspenseContext(workInProgress,suspenseContext);{if('maxDuration'in nextProps){if(!didWarnAboutMaxDuration){didWarnAboutMaxDuration=true;warning$1(false,'maxDuration has been removed from React. '+'Remove the maxDuration prop.');}}}// This next part is a bit confusing. If the children timeout, we switch to
// showing the fallback children in place of the "primary" children.
// However, we don't want to delete the primary children because then their
// state will be lost (both the React state and the host state, e.g.
// uncontrolled form inputs). Instead we keep them mounted and hide them.
// Both the fallback children AND the primary children are rendered at the
// same time. Once the primary children are un-suspended, we can delete
// the fallback children — don't need to preserve their state.
//
// The two sets of children are siblings in the host environment, but
// semantically, for purposes of reconciliation, they are two separate sets.
// So we store them using two fragment fibers.
//
// However, we want to avoid allocating extra fibers for every placeholder.
// They're only necessary when the children time out, because that's the
// only time when both sets are mounted.
//
// So, the extra fragment fibers are only used if the children time out.
// Otherwise, we render the primary children directly. This requires some
// custom reconciliation logic to preserve the state of the primary
// children. It's essentially a very basic form of re-parenting.
if(current$$1===null){// If we're currently hydrating, try to hydrate this boundary.
// But only if this has a fallback.
if(nextProps.fallback!==undefined){tryToClaimNextHydratableInstance(workInProgress);// This could've been a dehydrated suspense component.
if(enableSuspenseServerRenderer){var suspenseState=workInProgress.memoizedState;if(suspenseState!==null){var dehydrated=suspenseState.dehydrated;if(dehydrated!==null){return mountDehydratedSuspenseComponent(workInProgress,dehydrated,renderExpirationTime);}}}}// This is the initial mount. This branch is pretty simple because there's
// no previous state that needs to be preserved.
if(nextDidTimeout){// Mount separate fragments for primary and fallback children.
var nextFallbackChildren=nextProps.fallback;var primaryChildFragment=createFiberFromFragment(null,mode,NoWork,null);primaryChildFragment.return=workInProgress;if((workInProgress.mode&BatchedMode)===NoMode){// Outside of batched mode, we commit the effects from the
// partially completed, timed-out tree, too.
var progressedState=workInProgress.memoizedState;var progressedPrimaryChild=progressedState!==null?workInProgress.child.child:workInProgress.child;primaryChildFragment.child=progressedPrimaryChild;var progressedChild=progressedPrimaryChild;while(progressedChild!==null){progressedChild.return=primaryChildFragment;progressedChild=progressedChild.sibling;}}var fallbackChildFragment=createFiberFromFragment(nextFallbackChildren,mode,renderExpirationTime,null);fallbackChildFragment.return=workInProgress;primaryChildFragment.sibling=fallbackChildFragment;// Skip the primary children, and continue working on the
// fallback children.
workInProgress.memoizedState=SUSPENDED_MARKER;workInProgress.child=primaryChildFragment;return fallbackChildFragment;}else{// Mount the primary children without an intermediate fragment fiber.
var nextPrimaryChildren=nextProps.children;workInProgress.memoizedState=null;return workInProgress.child=mountChildFibers(workInProgress,null,nextPrimaryChildren,renderExpirationTime);}}else{// This is an update. This branch is more complicated because we need to
// ensure the state of the primary children is preserved.
var prevState=current$$1.memoizedState;if(prevState!==null){if(enableSuspenseServerRenderer){var _dehydrated=prevState.dehydrated;if(_dehydrated!==null){if(!didSuspend){return updateDehydratedSuspenseComponent(current$$1,workInProgress,_dehydrated,prevState,renderExpirationTime);}else if(workInProgress.memoizedState!==null){// Something suspended and we should still be in dehydrated mode.
// Leave the existing child in place.
workInProgress.child=current$$1.child;// The dehydrated completion pass expects this flag to be there
// but the normal suspense pass doesn't.
workInProgress.effectTag|=DidCapture;return null;}else{// Suspended but we should no longer be in dehydrated mode.
// Therefore we now have to render the fallback. Wrap the children
// in a fragment fiber to keep them separate from the fallback
// children.
var _nextFallbackChildren=nextProps.fallback;var _primaryChildFragment=createFiberFromFragment(// It shouldn't matter what the pending props are because we aren't
// going to render this fragment.
null,mode,NoWork,null);_primaryChildFragment.return=workInProgress;// This is always null since we never want the previous child
// that we're not going to hydrate.
_primaryChildFragment.child=null;if((workInProgress.mode&BatchedMode)===NoMode){// Outside of batched mode, we commit the effects from the
// partially completed, timed-out tree, too.
var _progressedChild=_primaryChildFragment.child=workInProgress.child;while(_progressedChild!==null){_progressedChild.return=_primaryChildFragment;_progressedChild=_progressedChild.sibling;}}else{// We will have dropped the effect list which contains the deletion.
// We need to reconcile to delete the current child.
reconcileChildFibers(workInProgress,current$$1.child,null,renderExpirationTime);}// Because primaryChildFragment is a new fiber that we're inserting as the
// parent of a new tree, we need to set its treeBaseDuration.
if(enableProfilerTimer&&workInProgress.mode&ProfileMode){// treeBaseDuration is the sum of all the child tree base durations.
var treeBaseDuration=0;var hiddenChild=_primaryChildFragment.child;while(hiddenChild!==null){treeBaseDuration+=hiddenChild.treeBaseDuration;hiddenChild=hiddenChild.sibling;}_primaryChildFragment.treeBaseDuration=treeBaseDuration;}// Create a fragment from the fallback children, too.
var _fallbackChildFragment=createFiberFromFragment(_nextFallbackChildren,mode,renderExpirationTime,null);_fallbackChildFragment.return=workInProgress;_primaryChildFragment.sibling=_fallbackChildFragment;_fallbackChildFragment.effectTag|=Placement;_primaryChildFragment.childExpirationTime=NoWork;workInProgress.memoizedState=SUSPENDED_MARKER;workInProgress.child=_primaryChildFragment;// Skip the primary children, and continue working on the
// fallback children.
return _fallbackChildFragment;}}}// The current tree already timed out. That means each child set is
// wrapped in a fragment fiber.
var currentPrimaryChildFragment=current$$1.child;var currentFallbackChildFragment=currentPrimaryChildFragment.sibling;if(nextDidTimeout){// Still timed out. Reuse the current primary children by cloning
// its fragment. We're going to skip over these entirely.
var _nextFallbackChildren2=nextProps.fallback;var _primaryChildFragment2=createWorkInProgress(currentPrimaryChildFragment,currentPrimaryChildFragment.pendingProps,NoWork);_primaryChildFragment2.return=workInProgress;if((workInProgress.mode&BatchedMode)===NoMode){// Outside of batched mode, we commit the effects from the
// partially completed, timed-out tree, too.
var _progressedState=workInProgress.memoizedState;var _progressedPrimaryChild=_progressedState!==null?workInProgress.child.child:workInProgress.child;if(_progressedPrimaryChild!==currentPrimaryChildFragment.child){_primaryChildFragment2.child=_progressedPrimaryChild;var _progressedChild2=_progressedPrimaryChild;while(_progressedChild2!==null){_progressedChild2.return=_primaryChildFragment2;_progressedChild2=_progressedChild2.sibling;}}}// Because primaryChildFragment is a new fiber that we're inserting as the
// parent of a new tree, we need to set its treeBaseDuration.
if(enableProfilerTimer&&workInProgress.mode&ProfileMode){// treeBaseDuration is the sum of all the child tree base durations.
var _treeBaseDuration=0;var _hiddenChild=_primaryChildFragment2.child;while(_hiddenChild!==null){_treeBaseDuration+=_hiddenChild.treeBaseDuration;_hiddenChild=_hiddenChild.sibling;}_primaryChildFragment2.treeBaseDuration=_treeBaseDuration;}// Clone the fallback child fragment, too. These we'll continue
// working on.
var _fallbackChildFragment2=createWorkInProgress(currentFallbackChildFragment,_nextFallbackChildren2,currentFallbackChildFragment.expirationTime);_fallbackChildFragment2.return=workInProgress;_primaryChildFragment2.sibling=_fallbackChildFragment2;_primaryChildFragment2.childExpirationTime=NoWork;// Skip the primary children, and continue working on the
// fallback children.
workInProgress.memoizedState=SUSPENDED_MARKER;workInProgress.child=_primaryChildFragment2;return _fallbackChildFragment2;}else{// No longer suspended. Switch back to showing the primary children,
// and remove the intermediate fragment fiber.
var _nextPrimaryChildren=nextProps.children;var currentPrimaryChild=currentPrimaryChildFragment.child;var primaryChild=reconcileChildFibers(workInProgress,currentPrimaryChild,_nextPrimaryChildren,renderExpirationTime);// If this render doesn't suspend, we need to delete the fallback
// children. Wait until the complete phase, after we've confirmed the
// fallback is no longer needed.
// TODO: Would it be better to store the fallback fragment on
// the stateNode?
// Continue rendering the children, like we normally do.
workInProgress.memoizedState=null;return workInProgress.child=primaryChild;}}else{// The current tree has not already timed out. That means the primary
// children are not wrapped in a fragment fiber.
var _currentPrimaryChild=current$$1.child;if(nextDidTimeout){// Timed out. Wrap the children in a fragment fiber to keep them
// separate from the fallback children.
var _nextFallbackChildren3=nextProps.fallback;var _primaryChildFragment3=createFiberFromFragment(// It shouldn't matter what the pending props are because we aren't
// going to render this fragment.
null,mode,NoWork,null);_primaryChildFragment3.return=workInProgress;_primaryChildFragment3.child=_currentPrimaryChild;if(_currentPrimaryChild!==null){_currentPrimaryChild.return=_primaryChildFragment3;}// Even though we're creating a new fiber, there are no new children,
// because we're reusing an already mounted tree. So we don't need to
// schedule a placement.
// primaryChildFragment.effectTag |= Placement;
if((workInProgress.mode&BatchedMode)===NoMode){// Outside of batched mode, we commit the effects from the
// partially completed, timed-out tree, too.
var _progressedState2=workInProgress.memoizedState;var _progressedPrimaryChild2=_progressedState2!==null?workInProgress.child.child:workInProgress.child;_primaryChildFragment3.child=_progressedPrimaryChild2;var _progressedChild3=_progressedPrimaryChild2;while(_progressedChild3!==null){_progressedChild3.return=_primaryChildFragment3;_progressedChild3=_progressedChild3.sibling;}}// Because primaryChildFragment is a new fiber that we're inserting as the
// parent of a new tree, we need to set its treeBaseDuration.
if(enableProfilerTimer&&workInProgress.mode&ProfileMode){// treeBaseDuration is the sum of all the child tree base durations.
var _treeBaseDuration2=0;var _hiddenChild2=_primaryChildFragment3.child;while(_hiddenChild2!==null){_treeBaseDuration2+=_hiddenChild2.treeBaseDuration;_hiddenChild2=_hiddenChild2.sibling;}_primaryChildFragment3.treeBaseDuration=_treeBaseDuration2;}// Create a fragment from the fallback children, too.
var _fallbackChildFragment3=createFiberFromFragment(_nextFallbackChildren3,mode,renderExpirationTime,null);_fallbackChildFragment3.return=workInProgress;_primaryChildFragment3.sibling=_fallbackChildFragment3;_fallbackChildFragment3.effectTag|=Placement;_primaryChildFragment3.childExpirationTime=NoWork;// Skip the primary children, and continue working on the
// fallback children.
workInProgress.memoizedState=SUSPENDED_MARKER;workInProgress.child=_primaryChildFragment3;return _fallbackChildFragment3;}else{// Still haven't timed out.  Continue rendering the children, like we
// normally do.
workInProgress.memoizedState=null;var _nextPrimaryChildren2=nextProps.children;return workInProgress.child=reconcileChildFibers(workInProgress,_currentPrimaryChild,_nextPrimaryChildren2,renderExpirationTime);}}}}function retrySuspenseComponentWithoutHydrating(current$$1,workInProgress,renderExpirationTime){// We're now not suspended nor dehydrated.
workInProgress.memoizedState=null;// Retry with the full children.
var nextProps=workInProgress.pendingProps;var nextChildren=nextProps.children;// This will ensure that the children get Placement effects and
// that the old child gets a Deletion effect.
// We could also call forceUnmountCurrentAndReconcile.
reconcileChildren(current$$1,workInProgress,nextChildren,renderExpirationTime);return workInProgress.child;}function mountDehydratedSuspenseComponent(workInProgress,suspenseInstance,renderExpirationTime){// During the first pass, we'll bail out and not drill into the children.
// Instead, we'll leave the content in place and try to hydrate it later.
if((workInProgress.mode&BatchedMode)===NoMode){{warning$1(false,'Cannot hydrate Suspense in legacy mode. Switch from '+'ReactDOM.hydrate(element, container) to '+'ReactDOM.createSyncRoot(container, { hydrate: true })'+'.render(element) or remove the Suspense components from '+'the server rendered components.');}workInProgress.expirationTime=Sync;}else if(isSuspenseInstanceFallback(suspenseInstance)){// This is a client-only boundary. Since we won't get any content from the server
// for this, we need to schedule that at a higher priority based on when it would
// have timed out. In theory we could render it in this pass but it would have the
// wrong priority associated with it and will prevent hydration of parent path.
// Instead, we'll leave work left on it to render it in a separate commit.
// TODO This time should be the time at which the server rendered response that is
// a parent to this boundary was displayed. However, since we currently don't have
// a protocol to transfer that time, we'll just estimate it by using the current
// time. This will mean that Suspense timeouts are slightly shifted to later than
// they should be.
var serverDisplayTime=requestCurrentTimeForUpdate();// Schedule a normal pri update to render this content.
var newExpirationTime=computeAsyncExpiration(serverDisplayTime);if(enableSchedulerTracing){markSpawnedWork(newExpirationTime);}workInProgress.expirationTime=newExpirationTime;}else{// We'll continue hydrating the rest at offscreen priority since we'll already
// be showing the right content coming from the server, it is no rush.
workInProgress.expirationTime=Never;if(enableSchedulerTracing){markSpawnedWork(Never);}}return null;}function updateDehydratedSuspenseComponent(current$$1,workInProgress,suspenseInstance,suspenseState,renderExpirationTime){// We should never be hydrating at this point because it is the first pass,
// but after we've already committed once.
warnIfHydrating();if((workInProgress.mode&BatchedMode)===NoMode){return retrySuspenseComponentWithoutHydrating(current$$1,workInProgress,renderExpirationTime);}if(isSuspenseInstanceFallback(suspenseInstance)){// This boundary is in a permanent fallback state. In this case, we'll never
// get an update and we'll never be able to hydrate the final content. Let's just try the
// client side render instead.
return retrySuspenseComponentWithoutHydrating(current$$1,workInProgress,renderExpirationTime);}// We use childExpirationTime to indicate that a child might depend on context, so if
// any context has changed, we need to treat is as if the input might have changed.
var hasContextChanged$$1=current$$1.childExpirationTime>=renderExpirationTime;if(didReceiveUpdate||hasContextChanged$$1){// This boundary has changed since the first render. This means that we are now unable to
// hydrate it. We might still be able to hydrate it using an earlier expiration time, if
// we are rendering at lower expiration than sync.
if(renderExpirationTime<Sync){if(suspenseState.retryTime<=renderExpirationTime){// This render is even higher pri than we've seen before, let's try again
// at even higher pri.
var attemptHydrationAtExpirationTime=renderExpirationTime+1;suspenseState.retryTime=attemptHydrationAtExpirationTime;scheduleWork(current$$1,attemptHydrationAtExpirationTime);// TODO: Early abort this render.
}else{// We have already tried to ping at a higher priority than we're rendering with
// so if we got here, we must have failed to hydrate at those levels. We must
// now give up. Instead, we're going to delete the whole subtree and instead inject
// a new real Suspense boundary to take its place, which may render content
// or fallback. This might suspend for a while and if it does we might still have
// an opportunity to hydrate before this pass commits.
}}// If we have scheduled higher pri work above, this will probably just abort the render
// since we now have higher priority work, but in case it doesn't, we need to prepare to
// render something, if we time out. Even if that requires us to delete everything and
// skip hydration.
// Delay having to do this as long as the suspense timeout allows us.
renderDidSuspendDelayIfPossible();return retrySuspenseComponentWithoutHydrating(current$$1,workInProgress,renderExpirationTime);}else if(isSuspenseInstancePending(suspenseInstance)){// This component is still pending more data from the server, so we can't hydrate its
// content. We treat it as if this component suspended itself. It might seem as if
// we could just try to render it client-side instead. However, this will perform a
// lot of unnecessary work and is unlikely to complete since it often will suspend
// on missing data anyway. Additionally, the server might be able to render more
// than we can on the client yet. In that case we'd end up with more fallback states
// on the client than if we just leave it alone. If the server times out or errors
// these should update this boundary to the permanent Fallback state instead.
// Mark it as having captured (i.e. suspended).
workInProgress.effectTag|=DidCapture;// Leave the child in place. I.e. the dehydrated fragment.
workInProgress.child=current$$1.child;// Register a callback to retry this boundary once the server has sent the result.
registerSuspenseInstanceRetry(suspenseInstance,retryDehydratedSuspenseBoundary.bind(null,current$$1));return null;}else{// This is the first attempt.
reenterHydrationStateFromDehydratedSuspenseInstance(workInProgress,suspenseInstance);var nextProps=workInProgress.pendingProps;var nextChildren=nextProps.children;var child=mountChildFibers(workInProgress,null,nextChildren,renderExpirationTime);var node=child;while(node){// Mark each child as hydrating. This is a fast path to know whether this
// tree is part of a hydrating tree. This is used to determine if a child
// node has fully mounted yet, and for scheduling event replaying.
// Conceptually this is similar to Placement in that a new subtree is
// inserted into the React tree here. It just happens to not need DOM
// mutations because it already exists.
node.effectTag|=Hydrating;node=node.sibling;}workInProgress.child=child;return workInProgress.child;}}function scheduleWorkOnFiber(fiber,renderExpirationTime){if(fiber.expirationTime<renderExpirationTime){fiber.expirationTime=renderExpirationTime;}var alternate=fiber.alternate;if(alternate!==null&&alternate.expirationTime<renderExpirationTime){alternate.expirationTime=renderExpirationTime;}scheduleWorkOnParentPath(fiber.return,renderExpirationTime);}function propagateSuspenseContextChange(workInProgress,firstChild,renderExpirationTime){// Mark any Suspense boundaries with fallbacks as having work to do.
// If they were previously forced into fallbacks, they may now be able
// to unblock.
var node=firstChild;while(node!==null){if(node.tag===SuspenseComponent){var state=node.memoizedState;if(state!==null){scheduleWorkOnFiber(node,renderExpirationTime);}}else if(node.tag===SuspenseListComponent){// If the tail is hidden there might not be an Suspense boundaries
// to schedule work on. In this case we have to schedule it on the
// list itself.
// We don't have to traverse to the children of the list since
// the list will propagate the change when it rerenders.
scheduleWorkOnFiber(node,renderExpirationTime);}else if(node.child!==null){node.child.return=node;node=node.child;continue;}if(node===workInProgress){return;}while(node.sibling===null){if(node.return===null||node.return===workInProgress){return;}node=node.return;}node.sibling.return=node.return;node=node.sibling;}}function findLastContentRow(firstChild){// This is going to find the last row among these children that is already
// showing content on the screen, as opposed to being in fallback state or
// new. If a row has multiple Suspense boundaries, any of them being in the
// fallback state, counts as the whole row being in a fallback state.
// Note that the "rows" will be workInProgress, but any nested children
// will still be current since we haven't rendered them yet. The mounted
// order may not be the same as the new order. We use the new order.
var row=firstChild;var lastContentRow=null;while(row!==null){var currentRow=row.alternate;// New rows can't be content rows.
if(currentRow!==null&&findFirstSuspended(currentRow)===null){lastContentRow=row;}row=row.sibling;}return lastContentRow;}function validateRevealOrder(revealOrder){{if(revealOrder!==undefined&&revealOrder!=='forwards'&&revealOrder!=='backwards'&&revealOrder!=='together'&&!didWarnAboutRevealOrder[revealOrder]){didWarnAboutRevealOrder[revealOrder]=true;if(typeof revealOrder==='string'){switch(revealOrder.toLowerCase()){case'together':case'forwards':case'backwards':{warning$1(false,'"%s" is not a valid value for revealOrder on <SuspenseList />. '+'Use lowercase "%s" instead.',revealOrder,revealOrder.toLowerCase());break;}case'forward':case'backward':{warning$1(false,'"%s" is not a valid value for revealOrder on <SuspenseList />. '+'React uses the -s suffix in the spelling. Use "%ss" instead.',revealOrder,revealOrder.toLowerCase());break;}default:warning$1(false,'"%s" is not a supported revealOrder on <SuspenseList />. '+'Did you mean "together", "forwards" or "backwards"?',revealOrder);break;}}else{warning$1(false,'%s is not a supported value for revealOrder on <SuspenseList />. '+'Did you mean "together", "forwards" or "backwards"?',revealOrder);}}}}function validateTailOptions(tailMode,revealOrder){{if(tailMode!==undefined&&!didWarnAboutTailOptions[tailMode]){if(tailMode!=='collapsed'&&tailMode!=='hidden'){didWarnAboutTailOptions[tailMode]=true;warning$1(false,'"%s" is not a supported value for tail on <SuspenseList />. '+'Did you mean "collapsed" or "hidden"?',tailMode);}else if(revealOrder!=='forwards'&&revealOrder!=='backwards'){didWarnAboutTailOptions[tailMode]=true;warning$1(false,'<SuspenseList tail="%s" /> is only valid if revealOrder is '+'"forwards" or "backwards". '+'Did you mean to specify revealOrder="forwards"?',tailMode);}}}}function validateSuspenseListNestedChild(childSlot,index){{var isArray=Array.isArray(childSlot);var isIterable=!isArray&&typeof getIteratorFn(childSlot)==='function';if(isArray||isIterable){var type=isArray?'array':'iterable';warning$1(false,'A nested %s was passed to row #%s in <SuspenseList />. Wrap it in '+'an additional SuspenseList to configure its revealOrder: '+'<SuspenseList revealOrder=...> ... '+'<SuspenseList revealOrder=...>{%s}</SuspenseList> ... '+'</SuspenseList>',type,index,type);return false;}}return true;}function validateSuspenseListChildren(children,revealOrder){{if((revealOrder==='forwards'||revealOrder==='backwards')&&children!==undefined&&children!==null&&children!==false){if(Array.isArray(children)){for(var i=0;i<children.length;i++){if(!validateSuspenseListNestedChild(children[i],i)){return;}}}else{var iteratorFn=getIteratorFn(children);if(typeof iteratorFn==='function'){var childrenIterator=iteratorFn.call(children);if(childrenIterator){var step=childrenIterator.next();var _i=0;for(;!step.done;step=childrenIterator.next()){if(!validateSuspenseListNestedChild(step.value,_i)){return;}_i++;}}}else{warning$1(false,'A single row was passed to a <SuspenseList revealOrder="%s" />. '+'This is not useful since it needs multiple rows. '+'Did you mean to pass multiple children or an array?',revealOrder);}}}}}function initSuspenseListRenderState(workInProgress,isBackwards,tail,lastContentRow,tailMode,lastEffectBeforeRendering){var renderState=workInProgress.memoizedState;if(renderState===null){workInProgress.memoizedState={isBackwards:isBackwards,rendering:null,last:lastContentRow,tail:tail,tailExpiration:0,tailMode:tailMode,lastEffect:lastEffectBeforeRendering};}else{// We can reuse the existing object from previous renders.
renderState.isBackwards=isBackwards;renderState.rendering=null;renderState.last=lastContentRow;renderState.tail=tail;renderState.tailExpiration=0;renderState.tailMode=tailMode;renderState.lastEffect=lastEffectBeforeRendering;}}// This can end up rendering this component multiple passes.
// The first pass splits the children fibers into two sets. A head and tail.
// We first render the head. If anything is in fallback state, we do another
// pass through beginWork to rerender all children (including the tail) with
// the force suspend context. If the first render didn't have anything in
// in fallback state. Then we render each row in the tail one-by-one.
// That happens in the completeWork phase without going back to beginWork.
function updateSuspenseListComponent(current$$1,workInProgress,renderExpirationTime){var nextProps=workInProgress.pendingProps;var revealOrder=nextProps.revealOrder;var tailMode=nextProps.tail;var newChildren=nextProps.children;validateRevealOrder(revealOrder);validateTailOptions(tailMode,revealOrder);validateSuspenseListChildren(newChildren,revealOrder);reconcileChildren(current$$1,workInProgress,newChildren,renderExpirationTime);var suspenseContext=suspenseStackCursor.current;var shouldForceFallback=hasSuspenseContext(suspenseContext,ForceSuspenseFallback);if(shouldForceFallback){suspenseContext=setShallowSuspenseContext(suspenseContext,ForceSuspenseFallback);workInProgress.effectTag|=DidCapture;}else{var didSuspendBefore=current$$1!==null&&(current$$1.effectTag&DidCapture)!==NoEffect;if(didSuspendBefore){// If we previously forced a fallback, we need to schedule work
// on any nested boundaries to let them know to try to render
// again. This is the same as context updating.
propagateSuspenseContextChange(workInProgress,workInProgress.child,renderExpirationTime);}suspenseContext=setDefaultShallowSuspenseContext(suspenseContext);}pushSuspenseContext(workInProgress,suspenseContext);if((workInProgress.mode&BatchedMode)===NoMode){// Outside of batched mode, SuspenseList doesn't work so we just
// use make it a noop by treating it as the default revealOrder.
workInProgress.memoizedState=null;}else{switch(revealOrder){case'forwards':{var lastContentRow=findLastContentRow(workInProgress.child);var tail;if(lastContentRow===null){// The whole list is part of the tail.
// TODO: We could fast path by just rendering the tail now.
tail=workInProgress.child;workInProgress.child=null;}else{// Disconnect the tail rows after the content row.
// We're going to render them separately later.
tail=lastContentRow.sibling;lastContentRow.sibling=null;}initSuspenseListRenderState(workInProgress,false,// isBackwards
tail,lastContentRow,tailMode,workInProgress.lastEffect);break;}case'backwards':{// We're going to find the first row that has existing content.
// At the same time we're going to reverse the list of everything
// we pass in the meantime. That's going to be our tail in reverse
// order.
var _tail=null;var row=workInProgress.child;workInProgress.child=null;while(row!==null){var currentRow=row.alternate;// New rows can't be content rows.
if(currentRow!==null&&findFirstSuspended(currentRow)===null){// This is the beginning of the main content.
workInProgress.child=row;break;}var nextRow=row.sibling;row.sibling=_tail;_tail=row;row=nextRow;}// TODO: If workInProgress.child is null, we can continue on the tail immediately.
initSuspenseListRenderState(workInProgress,true,// isBackwards
_tail,null,// last
tailMode,workInProgress.lastEffect);break;}case'together':{initSuspenseListRenderState(workInProgress,false,// isBackwards
null,// tail
null,// last
undefined,workInProgress.lastEffect);break;}default:{// The default reveal order is the same as not having
// a boundary.
workInProgress.memoizedState=null;}}}return workInProgress.child;}function updatePortalComponent(current$$1,workInProgress,renderExpirationTime){pushHostContainer(workInProgress,workInProgress.stateNode.containerInfo);var nextChildren=workInProgress.pendingProps;if(current$$1===null){// Portals are special because we don't append the children during mount
// but at commit. Therefore we need to track insertions which the normal
// flow doesn't do during mount. This doesn't happen at the root because
// the root always starts with a "current" with a null child.
// TODO: Consider unifying this with how the root works.
workInProgress.child=reconcileChildFibers(workInProgress,null,nextChildren,renderExpirationTime);}else{reconcileChildren(current$$1,workInProgress,nextChildren,renderExpirationTime);}return workInProgress.child;}function updateContextProvider(current$$1,workInProgress,renderExpirationTime){var providerType=workInProgress.type;var context=providerType._context;var newProps=workInProgress.pendingProps;var oldProps=workInProgress.memoizedProps;var newValue=newProps.value;{var providerPropTypes=workInProgress.type.propTypes;if(providerPropTypes){checkPropTypes(providerPropTypes,newProps,'prop','Context.Provider',getCurrentFiberStackInDev);}}pushProvider(workInProgress,newValue);if(oldProps!==null){var oldValue=oldProps.value;var changedBits=calculateChangedBits(context,newValue,oldValue);if(changedBits===0){// No change. Bailout early if children are the same.
if(oldProps.children===newProps.children&&!hasContextChanged()){return bailoutOnAlreadyFinishedWork(current$$1,workInProgress,renderExpirationTime);}}else{// The context value changed. Search for matching consumers and schedule
// them to update.
propagateContextChange(workInProgress,context,changedBits,renderExpirationTime);}}var newChildren=newProps.children;reconcileChildren(current$$1,workInProgress,newChildren,renderExpirationTime);return workInProgress.child;}var hasWarnedAboutUsingContextAsConsumer=false;function updateContextConsumer(current$$1,workInProgress,renderExpirationTime){var context=workInProgress.type;// The logic below for Context differs depending on PROD or DEV mode. In
// DEV mode, we create a separate object for Context.Consumer that acts
// like a proxy to Context. This proxy object adds unnecessary code in PROD
// so we use the old behaviour (Context.Consumer references Context) to
// reduce size and overhead. The separate object references context via
// a property called "_context", which also gives us the ability to check
// in DEV mode if this property exists or not and warn if it does not.
{if(context._context===undefined){// This may be because it's a Context (rather than a Consumer).
// Or it may be because it's older React where they're the same thing.
// We only want to warn if we're sure it's a new React.
if(context!==context.Consumer){if(!hasWarnedAboutUsingContextAsConsumer){hasWarnedAboutUsingContextAsConsumer=true;warning$1(false,'Rendering <Context> directly is not supported and will be removed in '+'a future major release. Did you mean to render <Context.Consumer> instead?');}}}else{context=context._context;}}var newProps=workInProgress.pendingProps;var render=newProps.children;{!(typeof render==='function')?warningWithoutStack$1(false,'A context consumer was rendered with multiple children, or a child '+"that isn't a function. A context consumer expects a single child "+'that is a function. If you did pass a function, make sure there '+'is no trailing or leading whitespace around it.'):void 0;}prepareToReadContext(workInProgress,renderExpirationTime);var newValue=_readContext(context,newProps.unstable_observedBits);var newChildren;{ReactCurrentOwner$2.current=workInProgress;setCurrentPhase('render');newChildren=render(newValue);setCurrentPhase(null);}// React DevTools reads this flag.
workInProgress.effectTag|=PerformedWork;reconcileChildren(current$$1,workInProgress,newChildren,renderExpirationTime);return workInProgress.child;}function updateFundamentalComponent$1(current$$1,workInProgress,renderExpirationTime){var fundamentalImpl=workInProgress.type.impl;if(fundamentalImpl.reconcileChildren===false){return null;}var nextProps=workInProgress.pendingProps;var nextChildren=nextProps.children;reconcileChildren(current$$1,workInProgress,nextChildren,renderExpirationTime);return workInProgress.child;}function updateScopeComponent(current$$1,workInProgress,renderExpirationTime){var nextProps=workInProgress.pendingProps;var nextChildren=nextProps.children;reconcileChildren(current$$1,workInProgress,nextChildren,renderExpirationTime);return workInProgress.child;}function markWorkInProgressReceivedUpdate(){didReceiveUpdate=true;}function bailoutOnAlreadyFinishedWork(current$$1,workInProgress,renderExpirationTime){cancelWorkTimer(workInProgress);if(current$$1!==null){// Reuse previous dependencies
workInProgress.dependencies=current$$1.dependencies;}if(enableProfilerTimer){// Don't update "base" render times for bailouts.
stopProfilerTimerIfRunning(workInProgress);}var updateExpirationTime=workInProgress.expirationTime;if(updateExpirationTime!==NoWork){markUnprocessedUpdateTime(updateExpirationTime);}// Check if the children have any pending work.
var childExpirationTime=workInProgress.childExpirationTime;if(childExpirationTime<renderExpirationTime){// The children don't have any work either. We can skip them.
// TODO: Once we add back resuming, we should check if the children are
// a work-in-progress set. If so, we need to transfer their effects.
return null;}else{// This fiber doesn't have work, but its subtree does. Clone the child
// fibers and continue.
cloneChildFibers(current$$1,workInProgress);return workInProgress.child;}}function remountFiber(current$$1,oldWorkInProgress,newWorkInProgress){{var returnFiber=oldWorkInProgress.return;if(returnFiber===null){throw new Error('Cannot swap the root fiber.');}// Disconnect from the old current.
// It will get deleted.
current$$1.alternate=null;oldWorkInProgress.alternate=null;// Connect to the new tree.
newWorkInProgress.index=oldWorkInProgress.index;newWorkInProgress.sibling=oldWorkInProgress.sibling;newWorkInProgress.return=oldWorkInProgress.return;newWorkInProgress.ref=oldWorkInProgress.ref;// Replace the child/sibling pointers above it.
if(oldWorkInProgress===returnFiber.child){returnFiber.child=newWorkInProgress;}else{var prevSibling=returnFiber.child;if(prevSibling===null){throw new Error('Expected parent to have a child.');}while(prevSibling.sibling!==oldWorkInProgress){prevSibling=prevSibling.sibling;if(prevSibling===null){throw new Error('Expected to find the previous sibling.');}}prevSibling.sibling=newWorkInProgress;}// Delete the old fiber and place the new one.
// Since the old fiber is disconnected, we have to schedule it manually.
var last=returnFiber.lastEffect;if(last!==null){last.nextEffect=current$$1;returnFiber.lastEffect=current$$1;}else{returnFiber.firstEffect=returnFiber.lastEffect=current$$1;}current$$1.nextEffect=null;current$$1.effectTag=Deletion;newWorkInProgress.effectTag|=Placement;// Restart work from the new fiber.
return newWorkInProgress;}}function beginWork$1(current$$1,workInProgress,renderExpirationTime){var updateExpirationTime=workInProgress.expirationTime;{if(workInProgress._debugNeedsRemount&&current$$1!==null){// This will restart the begin phase with a new fiber.
return remountFiber(current$$1,workInProgress,createFiberFromTypeAndProps(workInProgress.type,workInProgress.key,workInProgress.pendingProps,workInProgress._debugOwner||null,workInProgress.mode,workInProgress.expirationTime));}}if(current$$1!==null){var oldProps=current$$1.memoizedProps;var newProps=workInProgress.pendingProps;if(oldProps!==newProps||hasContextChanged()||// Force a re-render if the implementation changed due to hot reload:
workInProgress.type!==current$$1.type){// If props or context changed, mark the fiber as having performed work.
// This may be unset if the props are determined to be equal later (memo).
didReceiveUpdate=true;}else if(updateExpirationTime<renderExpirationTime){didReceiveUpdate=false;// This fiber does not have any pending work. Bailout without entering
// the begin phase. There's still some bookkeeping we that needs to be done
// in this optimized path, mostly pushing stuff onto the stack.
switch(workInProgress.tag){case HostRoot:pushHostRootContext(workInProgress);resetHydrationState();break;case HostComponent:pushHostContext(workInProgress);if(workInProgress.mode&ConcurrentMode&&renderExpirationTime!==Never&&shouldDeprioritizeSubtree(workInProgress.type,newProps)){if(enableSchedulerTracing){markSpawnedWork(Never);}// Schedule this fiber to re-render at offscreen priority. Then bailout.
workInProgress.expirationTime=workInProgress.childExpirationTime=Never;return null;}break;case ClassComponent:{var Component=workInProgress.type;if(isContextProvider(Component)){pushContextProvider(workInProgress);}break;}case HostPortal:pushHostContainer(workInProgress,workInProgress.stateNode.containerInfo);break;case ContextProvider:{var newValue=workInProgress.memoizedProps.value;pushProvider(workInProgress,newValue);break;}case Profiler:if(enableProfilerTimer){workInProgress.effectTag|=Update;}break;case SuspenseComponent:{var state=workInProgress.memoizedState;if(state!==null){if(enableSuspenseServerRenderer){if(state.dehydrated!==null){pushSuspenseContext(workInProgress,setDefaultShallowSuspenseContext(suspenseStackCursor.current));// We know that this component will suspend again because if it has
// been unsuspended it has committed as a resolved Suspense component.
// If it needs to be retried, it should have work scheduled on it.
workInProgress.effectTag|=DidCapture;break;}}// If this boundary is currently timed out, we need to decide
// whether to retry the primary children, or to skip over it and
// go straight to the fallback. Check the priority of the primary
// child fragment.
var primaryChildFragment=workInProgress.child;var primaryChildExpirationTime=primaryChildFragment.childExpirationTime;if(primaryChildExpirationTime!==NoWork&&primaryChildExpirationTime>=renderExpirationTime){// The primary children have pending work. Use the normal path
// to attempt to render the primary children again.
return updateSuspenseComponent(current$$1,workInProgress,renderExpirationTime);}else{pushSuspenseContext(workInProgress,setDefaultShallowSuspenseContext(suspenseStackCursor.current));// The primary children do not have pending work with sufficient
// priority. Bailout.
var child=bailoutOnAlreadyFinishedWork(current$$1,workInProgress,renderExpirationTime);if(child!==null){// The fallback children have pending work. Skip over the
// primary children and work on the fallback.
return child.sibling;}else{return null;}}}else{pushSuspenseContext(workInProgress,setDefaultShallowSuspenseContext(suspenseStackCursor.current));}break;}case SuspenseListComponent:{var didSuspendBefore=(current$$1.effectTag&DidCapture)!==NoEffect;var hasChildWork=workInProgress.childExpirationTime>=renderExpirationTime;if(didSuspendBefore){if(hasChildWork){// If something was in fallback state last time, and we have all the
// same children then we're still in progressive loading state.
// Something might get unblocked by state updates or retries in the
// tree which will affect the tail. So we need to use the normal
// path to compute the correct tail.
return updateSuspenseListComponent(current$$1,workInProgress,renderExpirationTime);}// If none of the children had any work, that means that none of
// them got retried so they'll still be blocked in the same way
// as before. We can fast bail out.
workInProgress.effectTag|=DidCapture;}// If nothing suspended before and we're rendering the same children,
// then the tail doesn't matter. Anything new that suspends will work
// in the "together" mode, so we can continue from the state we had.
var renderState=workInProgress.memoizedState;if(renderState!==null){// Reset to the "together" mode in case we've started a different
// update in the past but didn't complete it.
renderState.rendering=null;renderState.tail=null;}pushSuspenseContext(workInProgress,suspenseStackCursor.current);if(hasChildWork){break;}else{// If none of the children had any work, that means that none of
// them got retried so they'll still be blocked in the same way
// as before. We can fast bail out.
return null;}}}return bailoutOnAlreadyFinishedWork(current$$1,workInProgress,renderExpirationTime);}else{// An update was scheduled on this fiber, but there are no new props
// nor legacy context. Set this to false. If an update queue or context
// consumer produces a changed value, it will set this to true. Otherwise,
// the component will assume the children have not changed and bail out.
didReceiveUpdate=false;}}else{didReceiveUpdate=false;}// Before entering the begin phase, clear the expiration time.
workInProgress.expirationTime=NoWork;switch(workInProgress.tag){case IndeterminateComponent:{return mountIndeterminateComponent(current$$1,workInProgress,workInProgress.type,renderExpirationTime);}case LazyComponent:{var elementType=workInProgress.elementType;return mountLazyComponent(current$$1,workInProgress,elementType,updateExpirationTime,renderExpirationTime);}case FunctionComponent:{var _Component=workInProgress.type;var unresolvedProps=workInProgress.pendingProps;var resolvedProps=workInProgress.elementType===_Component?unresolvedProps:resolveDefaultProps(_Component,unresolvedProps);return updateFunctionComponent(current$$1,workInProgress,_Component,resolvedProps,renderExpirationTime);}case ClassComponent:{var _Component2=workInProgress.type;var _unresolvedProps=workInProgress.pendingProps;var _resolvedProps=workInProgress.elementType===_Component2?_unresolvedProps:resolveDefaultProps(_Component2,_unresolvedProps);return updateClassComponent(current$$1,workInProgress,_Component2,_resolvedProps,renderExpirationTime);}case HostRoot:return updateHostRoot(current$$1,workInProgress,renderExpirationTime);case HostComponent:return updateHostComponent(current$$1,workInProgress,renderExpirationTime);case HostText:return updateHostText(current$$1,workInProgress);case SuspenseComponent:return updateSuspenseComponent(current$$1,workInProgress,renderExpirationTime);case HostPortal:return updatePortalComponent(current$$1,workInProgress,renderExpirationTime);case ForwardRef:{var type=workInProgress.type;var _unresolvedProps2=workInProgress.pendingProps;var _resolvedProps2=workInProgress.elementType===type?_unresolvedProps2:resolveDefaultProps(type,_unresolvedProps2);return updateForwardRef(current$$1,workInProgress,type,_resolvedProps2,renderExpirationTime);}case Fragment:return updateFragment(current$$1,workInProgress,renderExpirationTime);case Mode:return updateMode(current$$1,workInProgress,renderExpirationTime);case Profiler:return updateProfiler(current$$1,workInProgress,renderExpirationTime);case ContextProvider:return updateContextProvider(current$$1,workInProgress,renderExpirationTime);case ContextConsumer:return updateContextConsumer(current$$1,workInProgress,renderExpirationTime);case MemoComponent:{var _type2=workInProgress.type;var _unresolvedProps3=workInProgress.pendingProps;// Resolve outer props first, then resolve inner props.
var _resolvedProps3=resolveDefaultProps(_type2,_unresolvedProps3);{if(workInProgress.type!==workInProgress.elementType){var outerPropTypes=_type2.propTypes;if(outerPropTypes){checkPropTypes(outerPropTypes,_resolvedProps3,// Resolved for outer only
'prop',getComponentName(_type2),getCurrentFiberStackInDev);}}}_resolvedProps3=resolveDefaultProps(_type2.type,_resolvedProps3);return updateMemoComponent(current$$1,workInProgress,_type2,_resolvedProps3,updateExpirationTime,renderExpirationTime);}case SimpleMemoComponent:{return updateSimpleMemoComponent(current$$1,workInProgress,workInProgress.type,workInProgress.pendingProps,updateExpirationTime,renderExpirationTime);}case IncompleteClassComponent:{var _Component3=workInProgress.type;var _unresolvedProps4=workInProgress.pendingProps;var _resolvedProps4=workInProgress.elementType===_Component3?_unresolvedProps4:resolveDefaultProps(_Component3,_unresolvedProps4);return mountIncompleteClassComponent(current$$1,workInProgress,_Component3,_resolvedProps4,renderExpirationTime);}case SuspenseListComponent:{return updateSuspenseListComponent(current$$1,workInProgress,renderExpirationTime);}case FundamentalComponent:{if(enableFundamentalAPI){return updateFundamentalComponent$1(current$$1,workInProgress,renderExpirationTime);}break;}case ScopeComponent:{if(enableScopeAPI){return updateScopeComponent(current$$1,workInProgress,renderExpirationTime);}break;}}{{throw Error("Unknown unit of work tag ("+workInProgress.tag+"). This error is likely caused by a bug in React. Please file an issue.");}}}function createFundamentalStateInstance(currentFiber,props,impl,state){return{currentFiber:currentFiber,impl:impl,instance:null,prevProps:null,props:props,state:state};}function isFiberSuspenseAndTimedOut(fiber){return fiber.tag===SuspenseComponent&&fiber.memoizedState!==null;}function getSuspenseFallbackChild(fiber){return fiber.child.sibling.child;}function collectScopedNodes(node,fn,scopedNodes){if(enableScopeAPI){if(node.tag===HostComponent){var _type=node.type,memoizedProps=node.memoizedProps;if(fn(_type,memoizedProps)===true){scopedNodes.push(getPublicInstance(node.stateNode));}}var child=node.child;if(isFiberSuspenseAndTimedOut(node)){child=getSuspenseFallbackChild(node);}if(child!==null){collectScopedNodesFromChildren(child,fn,scopedNodes);}}}function collectFirstScopedNode(node,fn){if(enableScopeAPI){if(node.tag===HostComponent){var _type2=node.type,memoizedProps=node.memoizedProps;if(fn(_type2,memoizedProps)===true){return getPublicInstance(node.stateNode);}}var child=node.child;if(isFiberSuspenseAndTimedOut(node)){child=getSuspenseFallbackChild(node);}if(child!==null){return collectFirstScopedNodeFromChildren(child,fn);}}return null;}function collectScopedNodesFromChildren(startingChild,fn,scopedNodes){var child=startingChild;while(child!==null){collectScopedNodes(child,fn,scopedNodes);child=child.sibling;}}function collectFirstScopedNodeFromChildren(startingChild,fn){var child=startingChild;while(child!==null){var scopedNode=collectFirstScopedNode(child,fn);if(scopedNode!==null){return scopedNode;}child=child.sibling;}return null;}function collectNearestScopeMethods(node,scope,childrenScopes){if(isValidScopeNode(node,scope)){childrenScopes.push(node.stateNode.methods);}else{var child=node.child;if(isFiberSuspenseAndTimedOut(node)){child=getSuspenseFallbackChild(node);}if(child!==null){collectNearestChildScopeMethods(child,scope,childrenScopes);}}}function collectNearestChildScopeMethods(startingChild,scope,childrenScopes){var child=startingChild;while(child!==null){collectNearestScopeMethods(child,scope,childrenScopes);child=child.sibling;}}function isValidScopeNode(node,scope){return node.tag===ScopeComponent&&node.type===scope&&node.stateNode!==null;}function createScopeMethods(scope,instance){return{getChildren:function getChildren(){var currentFiber=instance.fiber;var child=currentFiber.child;var childrenScopes=[];if(child!==null){collectNearestChildScopeMethods(child,scope,childrenScopes);}return childrenScopes.length===0?null:childrenScopes;},getChildrenFromRoot:function getChildrenFromRoot(){var currentFiber=instance.fiber;var node=currentFiber;while(node!==null){var parent=node.return;if(parent===null){break;}node=parent;if(node.tag===ScopeComponent&&node.type===scope){break;}}var childrenScopes=[];collectNearestChildScopeMethods(node.child,scope,childrenScopes);return childrenScopes.length===0?null:childrenScopes;},getParent:function getParent(){var node=instance.fiber.return;while(node!==null){if(node.tag===ScopeComponent&&node.type===scope){return node.stateNode.methods;}node=node.return;}return null;},getProps:function getProps(){var currentFiber=instance.fiber;return currentFiber.memoizedProps;},queryAllNodes:function queryAllNodes(fn){var currentFiber=instance.fiber;var child=currentFiber.child;var scopedNodes=[];if(child!==null){collectScopedNodesFromChildren(child,fn,scopedNodes);}return scopedNodes.length===0?null:scopedNodes;},queryFirstNode:function queryFirstNode(fn){var currentFiber=instance.fiber;var child=currentFiber.child;if(child!==null){return collectFirstScopedNodeFromChildren(child,fn);}return null;},containsNode:function containsNode(node){var fiber=getInstanceFromNode(node);while(fiber!==null){if(fiber.tag===ScopeComponent&&fiber.type===scope&&fiber.stateNode===instance){return true;}fiber=fiber.return;}return false;}};}function markUpdate(workInProgress){// Tag the fiber with an update effect. This turns a Placement into
// a PlacementAndUpdate.
workInProgress.effectTag|=Update;}function markRef$1(workInProgress){workInProgress.effectTag|=Ref;}var _appendAllChildren;var updateHostContainer;var updateHostComponent$1;var updateHostText$1;if(supportsMutation){// Mutation mode
_appendAllChildren=function appendAllChildren(parent,workInProgress,needsVisibilityToggle,isHidden){// We only have the top Fiber that was created but we need recurse down its
// children to find all the terminal nodes.
var node=workInProgress.child;while(node!==null){if(node.tag===HostComponent||node.tag===HostText){appendInitialChild(parent,node.stateNode);}else if(enableFundamentalAPI&&node.tag===FundamentalComponent){appendInitialChild(parent,node.stateNode.instance);}else if(node.tag===HostPortal){// If we have a portal child, then we don't want to traverse
// down its children. Instead, we'll get insertions from each child in
// the portal directly.
}else if(node.child!==null){node.child.return=node;node=node.child;continue;}if(node===workInProgress){return;}while(node.sibling===null){if(node.return===null||node.return===workInProgress){return;}node=node.return;}node.sibling.return=node.return;node=node.sibling;}};updateHostContainer=function updateHostContainer(workInProgress){// Noop
};updateHostComponent$1=function updateHostComponent$1(current,workInProgress,type,newProps,rootContainerInstance){// If we have an alternate, that means this is an update and we need to
// schedule a side-effect to do the updates.
var oldProps=current.memoizedProps;if(oldProps===newProps){// In mutation mode, this is sufficient for a bailout because
// we won't touch this node even if children changed.
return;}// If we get updated because one of our children updated, we don't
// have newProps so we'll have to reuse them.
// TODO: Split the update API as separate for the props vs. children.
// Even better would be if children weren't special cased at all tho.
var instance=workInProgress.stateNode;var currentHostContext=getHostContext();// TODO: Experiencing an error where oldProps is null. Suggests a host
// component is hitting the resume path. Figure out why. Possibly
// related to `hidden`.
var updatePayload=prepareUpdate(instance,type,oldProps,newProps,rootContainerInstance,currentHostContext);// TODO: Type this specific to this type of component.
workInProgress.updateQueue=updatePayload;// If the update payload indicates that there is a change or if there
// is a new ref we mark this as an update. All the work is done in commitWork.
if(updatePayload){markUpdate(workInProgress);}};updateHostText$1=function updateHostText$1(current,workInProgress,oldText,newText){// If the text differs, mark it as an update. All the work in done in commitWork.
if(oldText!==newText){markUpdate(workInProgress);}};}else if(supportsPersistence){// Persistent host tree mode
_appendAllChildren=function appendAllChildren(parent,workInProgress,needsVisibilityToggle,isHidden){// We only have the top Fiber that was created but we need recurse down its
// children to find all the terminal nodes.
var node=workInProgress.child;while(node!==null){// eslint-disable-next-line no-labels
branches:if(node.tag===HostComponent){var instance=node.stateNode;if(needsVisibilityToggle&&isHidden){// This child is inside a timed out tree. Hide it.
var props=node.memoizedProps;var type=node.type;instance=cloneHiddenInstance(instance,type,props,node);}appendInitialChild(parent,instance);}else if(node.tag===HostText){var _instance=node.stateNode;if(needsVisibilityToggle&&isHidden){// This child is inside a timed out tree. Hide it.
var text=node.memoizedProps;_instance=cloneHiddenTextInstance(_instance,text,node);}appendInitialChild(parent,_instance);}else if(enableFundamentalAPI&&node.tag===FundamentalComponent){var _instance2=node.stateNode.instance;if(needsVisibilityToggle&&isHidden){// This child is inside a timed out tree. Hide it.
var _props=node.memoizedProps;var _type=node.type;_instance2=cloneHiddenInstance(_instance2,_type,_props,node);}appendInitialChild(parent,_instance2);}else if(node.tag===HostPortal){// If we have a portal child, then we don't want to traverse
// down its children. Instead, we'll get insertions from each child in
// the portal directly.
}else if(node.tag===SuspenseComponent){if((node.effectTag&Update)!==NoEffect){// Need to toggle the visibility of the primary children.
var newIsHidden=node.memoizedState!==null;if(newIsHidden){var primaryChildParent=node.child;if(primaryChildParent!==null){if(primaryChildParent.child!==null){primaryChildParent.child.return=primaryChildParent;_appendAllChildren(parent,primaryChildParent,true,newIsHidden);}var fallbackChildParent=primaryChildParent.sibling;if(fallbackChildParent!==null){fallbackChildParent.return=node;node=fallbackChildParent;continue;}}}}if(node.child!==null){// Continue traversing like normal
node.child.return=node;node=node.child;continue;}}else if(node.child!==null){node.child.return=node;node=node.child;continue;}// $FlowFixMe This is correct but Flow is confused by the labeled break.
node=node;if(node===workInProgress){return;}while(node.sibling===null){if(node.return===null||node.return===workInProgress){return;}node=node.return;}node.sibling.return=node.return;node=node.sibling;}};// An unfortunate fork of appendAllChildren because we have two different parent types.
var appendAllChildrenToContainer=function appendAllChildrenToContainer(containerChildSet,workInProgress,needsVisibilityToggle,isHidden){// We only have the top Fiber that was created but we need recurse down its
// children to find all the terminal nodes.
var node=workInProgress.child;while(node!==null){// eslint-disable-next-line no-labels
branches:if(node.tag===HostComponent){var instance=node.stateNode;if(needsVisibilityToggle&&isHidden){// This child is inside a timed out tree. Hide it.
var props=node.memoizedProps;var type=node.type;instance=cloneHiddenInstance(instance,type,props,node);}appendChildToContainerChildSet(containerChildSet,instance);}else if(node.tag===HostText){var _instance3=node.stateNode;if(needsVisibilityToggle&&isHidden){// This child is inside a timed out tree. Hide it.
var text=node.memoizedProps;_instance3=cloneHiddenTextInstance(_instance3,text,node);}appendChildToContainerChildSet(containerChildSet,_instance3);}else if(enableFundamentalAPI&&node.tag===FundamentalComponent){var _instance4=node.stateNode.instance;if(needsVisibilityToggle&&isHidden){// This child is inside a timed out tree. Hide it.
var _props2=node.memoizedProps;var _type2=node.type;_instance4=cloneHiddenInstance(_instance4,_type2,_props2,node);}appendChildToContainerChildSet(containerChildSet,_instance4);}else if(node.tag===HostPortal){// If we have a portal child, then we don't want to traverse
// down its children. Instead, we'll get insertions from each child in
// the portal directly.
}else if(node.tag===SuspenseComponent){if((node.effectTag&Update)!==NoEffect){// Need to toggle the visibility of the primary children.
var newIsHidden=node.memoizedState!==null;if(newIsHidden){var primaryChildParent=node.child;if(primaryChildParent!==null){if(primaryChildParent.child!==null){primaryChildParent.child.return=primaryChildParent;appendAllChildrenToContainer(containerChildSet,primaryChildParent,true,newIsHidden);}var fallbackChildParent=primaryChildParent.sibling;if(fallbackChildParent!==null){fallbackChildParent.return=node;node=fallbackChildParent;continue;}}}}if(node.child!==null){// Continue traversing like normal
node.child.return=node;node=node.child;continue;}}else if(node.child!==null){node.child.return=node;node=node.child;continue;}// $FlowFixMe This is correct but Flow is confused by the labeled break.
node=node;if(node===workInProgress){return;}while(node.sibling===null){if(node.return===null||node.return===workInProgress){return;}node=node.return;}node.sibling.return=node.return;node=node.sibling;}};updateHostContainer=function updateHostContainer(workInProgress){var portalOrRoot=workInProgress.stateNode;var childrenUnchanged=workInProgress.firstEffect===null;if(childrenUnchanged){// No changes, just reuse the existing instance.
}else{var container=portalOrRoot.containerInfo;var newChildSet=createContainerChildSet(container);// If children might have changed, we have to add them all to the set.
appendAllChildrenToContainer(newChildSet,workInProgress,false,false);portalOrRoot.pendingChildren=newChildSet;// Schedule an update on the container to swap out the container.
markUpdate(workInProgress);finalizeContainerChildren(container,newChildSet);}};updateHostComponent$1=function updateHostComponent$1(current,workInProgress,type,newProps,rootContainerInstance){var currentInstance=current.stateNode;var oldProps=current.memoizedProps;// If there are no effects associated with this node, then none of our children had any updates.
// This guarantees that we can reuse all of them.
var childrenUnchanged=workInProgress.firstEffect===null;if(childrenUnchanged&&oldProps===newProps){// No changes, just reuse the existing instance.
// Note that this might release a previous clone.
workInProgress.stateNode=currentInstance;return;}var recyclableInstance=workInProgress.stateNode;var currentHostContext=getHostContext();var updatePayload=null;if(oldProps!==newProps){updatePayload=prepareUpdate(recyclableInstance,type,oldProps,newProps,rootContainerInstance,currentHostContext);}if(childrenUnchanged&&updatePayload===null){// No changes, just reuse the existing instance.
// Note that this might release a previous clone.
workInProgress.stateNode=currentInstance;return;}var newInstance=cloneInstance(currentInstance,updatePayload,type,oldProps,newProps,workInProgress,childrenUnchanged,recyclableInstance);if(finalizeInitialChildren(newInstance,type,newProps,rootContainerInstance,currentHostContext)){markUpdate(workInProgress);}workInProgress.stateNode=newInstance;if(childrenUnchanged){// If there are no other effects in this tree, we need to flag this node as having one.
// Even though we're not going to use it for anything.
// Otherwise parents won't know that there are new children to propagate upwards.
markUpdate(workInProgress);}else{// If children might have changed, we have to add them all to the set.
_appendAllChildren(newInstance,workInProgress,false,false);}};updateHostText$1=function updateHostText$1(current,workInProgress,oldText,newText){if(oldText!==newText){// If the text content differs, we'll create a new text instance for it.
var rootContainerInstance=getRootHostContainer();var currentHostContext=getHostContext();workInProgress.stateNode=createTextInstance(newText,rootContainerInstance,currentHostContext,workInProgress);// We'll have to mark it as having an effect, even though we won't use the effect for anything.
// This lets the parents know that at least one of their children has changed.
markUpdate(workInProgress);}};}else{// No host operations
updateHostContainer=function updateHostContainer(workInProgress){// Noop
};updateHostComponent$1=function updateHostComponent$1(current,workInProgress,type,newProps,rootContainerInstance){// Noop
};updateHostText$1=function updateHostText$1(current,workInProgress,oldText,newText){// Noop
};}function cutOffTailIfNeeded(renderState,hasRenderedATailFallback){switch(renderState.tailMode){case'hidden':{// Any insertions at the end of the tail list after this point
// should be invisible. If there are already mounted boundaries
// anything before them are not considered for collapsing.
// Therefore we need to go through the whole tail to find if
// there are any.
var tailNode=renderState.tail;var lastTailNode=null;while(tailNode!==null){if(tailNode.alternate!==null){lastTailNode=tailNode;}tailNode=tailNode.sibling;}// Next we're simply going to delete all insertions after the
// last rendered item.
if(lastTailNode===null){// All remaining items in the tail are insertions.
renderState.tail=null;}else{// Detach the insertion after the last node that was already
// inserted.
lastTailNode.sibling=null;}break;}case'collapsed':{// Any insertions at the end of the tail list after this point
// should be invisible. If there are already mounted boundaries
// anything before them are not considered for collapsing.
// Therefore we need to go through the whole tail to find if
// there are any.
var _tailNode=renderState.tail;var _lastTailNode=null;while(_tailNode!==null){if(_tailNode.alternate!==null){_lastTailNode=_tailNode;}_tailNode=_tailNode.sibling;}// Next we're simply going to delete all insertions after the
// last rendered item.
if(_lastTailNode===null){// All remaining items in the tail are insertions.
if(!hasRenderedATailFallback&&renderState.tail!==null){// We suspended during the head. We want to show at least one
// row at the tail. So we'll keep on and cut off the rest.
renderState.tail.sibling=null;}else{renderState.tail=null;}}else{// Detach the insertion after the last node that was already
// inserted.
_lastTailNode.sibling=null;}break;}}}function completeWork(current,workInProgress,renderExpirationTime){var newProps=workInProgress.pendingProps;switch(workInProgress.tag){case IndeterminateComponent:break;case LazyComponent:break;case SimpleMemoComponent:case FunctionComponent:break;case ClassComponent:{var Component=workInProgress.type;if(isContextProvider(Component)){popContext(workInProgress);}break;}case HostRoot:{popHostContainer(workInProgress);popTopLevelContextObject(workInProgress);var fiberRoot=workInProgress.stateNode;if(fiberRoot.pendingContext){fiberRoot.context=fiberRoot.pendingContext;fiberRoot.pendingContext=null;}if(current===null||current.child===null){// If we hydrated, pop so that we can delete any remaining children
// that weren't hydrated.
var wasHydrated=popHydrationState(workInProgress);if(wasHydrated){// If we hydrated, then we'll need to schedule an update for
// the commit side-effects on the root.
markUpdate(workInProgress);}}updateHostContainer(workInProgress);break;}case HostComponent:{popHostContext(workInProgress);var rootContainerInstance=getRootHostContainer();var type=workInProgress.type;if(current!==null&&workInProgress.stateNode!=null){updateHostComponent$1(current,workInProgress,type,newProps,rootContainerInstance);if(enableFlareAPI){var prevListeners=current.memoizedProps.listeners;var nextListeners=newProps.listeners;if(prevListeners!==nextListeners){markUpdate(workInProgress);}}if(current.ref!==workInProgress.ref){markRef$1(workInProgress);}}else{if(!newProps){if(!(workInProgress.stateNode!==null)){{throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");}}// This can happen when we abort work.
break;}var currentHostContext=getHostContext();// TODO: Move createInstance to beginWork and keep it on a context
// "stack" as the parent. Then append children as we go in beginWork
// or completeWork depending on we want to add then top->down or
// bottom->up. Top->down is faster in IE11.
var _wasHydrated=popHydrationState(workInProgress);if(_wasHydrated){// TODO: Move this and createInstance step into the beginPhase
// to consolidate.
if(prepareToHydrateHostInstance(workInProgress,rootContainerInstance,currentHostContext)){// If changes to the hydrated node needs to be applied at the
// commit-phase we mark this as such.
markUpdate(workInProgress);}if(enableFlareAPI){var listeners=newProps.listeners;if(listeners!=null){updateEventListeners(listeners,workInProgress,rootContainerInstance);}}}else{var instance=createInstance(type,newProps,rootContainerInstance,currentHostContext,workInProgress);_appendAllChildren(instance,workInProgress,false,false);// This needs to be set before we mount Flare event listeners
workInProgress.stateNode=instance;if(enableFlareAPI){var _listeners=newProps.listeners;if(_listeners!=null){updateEventListeners(_listeners,workInProgress,rootContainerInstance);}}// Certain renderers require commit-time effects for initial mount.
// (eg DOM renderer supports auto-focus for certain elements).
// Make sure such renderers get scheduled for later work.
if(finalizeInitialChildren(instance,type,newProps,rootContainerInstance,currentHostContext)){markUpdate(workInProgress);}}if(workInProgress.ref!==null){// If there is a ref on a host node we need to schedule a callback
markRef$1(workInProgress);}}break;}case HostText:{var newText=newProps;if(current&&workInProgress.stateNode!=null){var oldText=current.memoizedProps;// If we have an alternate, that means this is an update and we need
// to schedule a side-effect to do the updates.
updateHostText$1(current,workInProgress,oldText,newText);}else{if(typeof newText!=='string'){if(!(workInProgress.stateNode!==null)){{throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");}}// This can happen when we abort work.
}var _rootContainerInstance=getRootHostContainer();var _currentHostContext=getHostContext();var _wasHydrated2=popHydrationState(workInProgress);if(_wasHydrated2){if(prepareToHydrateHostTextInstance(workInProgress)){markUpdate(workInProgress);}}else{workInProgress.stateNode=createTextInstance(newText,_rootContainerInstance,_currentHostContext,workInProgress);}}break;}case ForwardRef:break;case SuspenseComponent:{popSuspenseContext(workInProgress);var nextState=workInProgress.memoizedState;if(enableSuspenseServerRenderer){if(nextState!==null&&nextState.dehydrated!==null){if(current===null){var _wasHydrated3=popHydrationState(workInProgress);if(!_wasHydrated3){{throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");}}prepareToHydrateHostSuspenseInstance(workInProgress);if(enableSchedulerTracing){markSpawnedWork(Never);}return null;}else{// We should never have been in a hydration state if we didn't have a current.
// However, in some of those paths, we might have reentered a hydration state
// and then we might be inside a hydration state. In that case, we'll need to
// exit out of it.
resetHydrationState();if((workInProgress.effectTag&DidCapture)===NoEffect){// This boundary did not suspend so it's now hydrated and unsuspended.
workInProgress.memoizedState=null;}// If nothing suspended, we need to schedule an effect to mark this boundary
// as having hydrated so events know that they're free be invoked.
// It's also a signal to replay events and the suspense callback.
// If something suspended, schedule an effect to attach retry listeners.
// So we might as well always mark this.
workInProgress.effectTag|=Update;return null;}}}if((workInProgress.effectTag&DidCapture)!==NoEffect){// Something suspended. Re-render with the fallback children.
workInProgress.expirationTime=renderExpirationTime;// Do not reset the effect list.
return workInProgress;}var nextDidTimeout=nextState!==null;var prevDidTimeout=false;if(current===null){if(workInProgress.memoizedProps.fallback!==undefined){popHydrationState(workInProgress);}}else{var prevState=current.memoizedState;prevDidTimeout=prevState!==null;if(!nextDidTimeout&&prevState!==null){// We just switched from the fallback to the normal children.
// Delete the fallback.
// TODO: Would it be better to store the fallback fragment on
// the stateNode during the begin phase?
var currentFallbackChild=current.child.sibling;if(currentFallbackChild!==null){// Deletions go at the beginning of the return fiber's effect list
var first=workInProgress.firstEffect;if(first!==null){workInProgress.firstEffect=currentFallbackChild;currentFallbackChild.nextEffect=first;}else{workInProgress.firstEffect=workInProgress.lastEffect=currentFallbackChild;currentFallbackChild.nextEffect=null;}currentFallbackChild.effectTag=Deletion;}}}if(nextDidTimeout&&!prevDidTimeout){// If this subtreee is running in batched mode we can suspend,
// otherwise we won't suspend.
// TODO: This will still suspend a synchronous tree if anything
// in the concurrent tree already suspended during this render.
// This is a known bug.
if((workInProgress.mode&BatchedMode)!==NoMode){// TODO: Move this back to throwException because this is too late
// if this is a large tree which is common for initial loads. We
// don't know if we should restart a render or not until we get
// this marker, and this is too late.
// If this render already had a ping or lower pri updates,
// and this is the first time we know we're going to suspend we
// should be able to immediately restart from within throwException.
var hasInvisibleChildContext=current===null&&workInProgress.memoizedProps.unstable_avoidThisFallback!==true;if(hasInvisibleChildContext||hasSuspenseContext(suspenseStackCursor.current,InvisibleParentSuspenseContext)){// If this was in an invisible tree or a new render, then showing
// this boundary is ok.
renderDidSuspend();}else{// Otherwise, we're going to have to hide content so we should
// suspend for longer if possible.
renderDidSuspendDelayIfPossible();}}}if(supportsPersistence){// TODO: Only schedule updates if not prevDidTimeout.
if(nextDidTimeout){// If this boundary just timed out, schedule an effect to attach a
// retry listener to the proimse. This flag is also used to hide the
// primary children.
workInProgress.effectTag|=Update;}}if(supportsMutation){// TODO: Only schedule updates if these values are non equal, i.e. it changed.
if(nextDidTimeout||prevDidTimeout){// If this boundary just timed out, schedule an effect to attach a
// retry listener to the proimse. This flag is also used to hide the
// primary children. In mutation mode, we also need the flag to
// *unhide* children that were previously hidden, so check if the
// is currently timed out, too.
workInProgress.effectTag|=Update;}}if(enableSuspenseCallback&&workInProgress.updateQueue!==null&&workInProgress.memoizedProps.suspenseCallback!=null){// Always notify the callback
workInProgress.effectTag|=Update;}break;}case Fragment:break;case Mode:break;case Profiler:break;case HostPortal:popHostContainer(workInProgress);updateHostContainer(workInProgress);break;case ContextProvider:// Pop provider fiber
popProvider(workInProgress);break;case ContextConsumer:break;case MemoComponent:break;case IncompleteClassComponent:{// Same as class component case. I put it down here so that the tags are
// sequential to ensure this switch is compiled to a jump table.
var _Component=workInProgress.type;if(isContextProvider(_Component)){popContext(workInProgress);}break;}case SuspenseListComponent:{popSuspenseContext(workInProgress);var renderState=workInProgress.memoizedState;if(renderState===null){// We're running in the default, "independent" mode. We don't do anything
// in this mode.
break;}var didSuspendAlready=(workInProgress.effectTag&DidCapture)!==NoEffect;var renderedTail=renderState.rendering;if(renderedTail===null){// We just rendered the head.
if(!didSuspendAlready){// This is the first pass. We need to figure out if anything is still
// suspended in the rendered set.
// If new content unsuspended, but there's still some content that
// didn't. Then we need to do a second pass that forces everything
// to keep showing their fallbacks.
// We might be suspended if something in this render pass suspended, or
// something in the previous committed pass suspended. Otherwise,
// there's no chance so we can skip the expensive call to
// findFirstSuspended.
var cannotBeSuspended=renderHasNotSuspendedYet()&&(current===null||(current.effectTag&DidCapture)===NoEffect);if(!cannotBeSuspended){var row=workInProgress.child;while(row!==null){var suspended=findFirstSuspended(row);if(suspended!==null){didSuspendAlready=true;workInProgress.effectTag|=DidCapture;cutOffTailIfNeeded(renderState,false);// If this is a newly suspended tree, it might not get committed as
// part of the second pass. In that case nothing will subscribe to
// its thennables. Instead, we'll transfer its thennables to the
// SuspenseList so that it can retry if they resolve.
// There might be multiple of these in the list but since we're
// going to wait for all of them anyway, it doesn't really matter
// which ones gets to ping. In theory we could get clever and keep
// track of how many dependencies remain but it gets tricky because
// in the meantime, we can add/remove/change items and dependencies.
// We might bail out of the loop before finding any but that
// doesn't matter since that means that the other boundaries that
// we did find already has their listeners attached.
var newThennables=suspended.updateQueue;if(newThennables!==null){workInProgress.updateQueue=newThennables;workInProgress.effectTag|=Update;}// Rerender the whole list, but this time, we'll force fallbacks
// to stay in place.
// Reset the effect list before doing the second pass since that's now invalid.
if(renderState.lastEffect===null){workInProgress.firstEffect=null;}workInProgress.lastEffect=renderState.lastEffect;// Reset the child fibers to their original state.
resetChildFibers(workInProgress,renderExpirationTime);// Set up the Suspense Context to force suspense and immediately
// rerender the children.
pushSuspenseContext(workInProgress,setShallowSuspenseContext(suspenseStackCursor.current,ForceSuspenseFallback));return workInProgress.child;}row=row.sibling;}}}else{cutOffTailIfNeeded(renderState,false);}// Next we're going to render the tail.
}else{// Append the rendered row to the child list.
if(!didSuspendAlready){var _suspended=findFirstSuspended(renderedTail);if(_suspended!==null){workInProgress.effectTag|=DidCapture;didSuspendAlready=true;// Ensure we transfer the update queue to the parent so that it doesn't
// get lost if this row ends up dropped during a second pass.
var _newThennables=_suspended.updateQueue;if(_newThennables!==null){workInProgress.updateQueue=_newThennables;workInProgress.effectTag|=Update;}cutOffTailIfNeeded(renderState,true);// This might have been modified.
if(renderState.tail===null&&renderState.tailMode==='hidden'){// We need to delete the row we just rendered.
// Reset the effect list to what it w as before we rendered this
// child. The nested children have already appended themselves.
var lastEffect=workInProgress.lastEffect=renderState.lastEffect;// Remove any effects that were appended after this point.
if(lastEffect!==null){lastEffect.nextEffect=null;}// We're done.
return null;}}else if(now$1()>renderState.tailExpiration&&renderExpirationTime>Never){// We have now passed our CPU deadline and we'll just give up further
// attempts to render the main content and only render fallbacks.
// The assumption is that this is usually faster.
workInProgress.effectTag|=DidCapture;didSuspendAlready=true;cutOffTailIfNeeded(renderState,false);// Since nothing actually suspended, there will nothing to ping this
// to get it started back up to attempt the next item. If we can show
// them, then they really have the same priority as this render.
// So we'll pick it back up the very next render pass once we've had
// an opportunity to yield for paint.
var nextPriority=renderExpirationTime-1;workInProgress.expirationTime=workInProgress.childExpirationTime=nextPriority;if(enableSchedulerTracing){markSpawnedWork(nextPriority);}}}if(renderState.isBackwards){// The effect list of the backwards tail will have been added
// to the end. This breaks the guarantee that life-cycles fire in
// sibling order but that isn't a strong guarantee promised by React.
// Especially since these might also just pop in during future commits.
// Append to the beginning of the list.
renderedTail.sibling=workInProgress.child;workInProgress.child=renderedTail;}else{var previousSibling=renderState.last;if(previousSibling!==null){previousSibling.sibling=renderedTail;}else{workInProgress.child=renderedTail;}renderState.last=renderedTail;}}if(renderState.tail!==null){// We still have tail rows to render.
if(renderState.tailExpiration===0){// Heuristic for how long we're willing to spend rendering rows
// until we just give up and show what we have so far.
var TAIL_EXPIRATION_TIMEOUT_MS=500;renderState.tailExpiration=now$1()+TAIL_EXPIRATION_TIMEOUT_MS;}// Pop a row.
var next=renderState.tail;renderState.rendering=next;renderState.tail=next.sibling;renderState.lastEffect=workInProgress.lastEffect;next.sibling=null;// Restore the context.
// TODO: We can probably just avoid popping it instead and only
// setting it the first time we go from not suspended to suspended.
var suspenseContext=suspenseStackCursor.current;if(didSuspendAlready){suspenseContext=setShallowSuspenseContext(suspenseContext,ForceSuspenseFallback);}else{suspenseContext=setDefaultShallowSuspenseContext(suspenseContext);}pushSuspenseContext(workInProgress,suspenseContext);// Do a pass over the next row.
return next;}break;}case FundamentalComponent:{if(enableFundamentalAPI){var fundamentalImpl=workInProgress.type.impl;var fundamentalInstance=workInProgress.stateNode;if(fundamentalInstance===null){var getInitialState=fundamentalImpl.getInitialState;var fundamentalState;if(getInitialState!==undefined){fundamentalState=getInitialState(newProps);}fundamentalInstance=workInProgress.stateNode=createFundamentalStateInstance(workInProgress,newProps,fundamentalImpl,fundamentalState||{});var _instance5=getFundamentalComponentInstance(fundamentalInstance);fundamentalInstance.instance=_instance5;if(fundamentalImpl.reconcileChildren===false){return null;}_appendAllChildren(_instance5,workInProgress,false,false);mountFundamentalComponent(fundamentalInstance);}else{// We fire update in commit phase
var prevProps=fundamentalInstance.props;fundamentalInstance.prevProps=prevProps;fundamentalInstance.props=newProps;fundamentalInstance.currentFiber=workInProgress;if(supportsPersistence){var _instance6=cloneFundamentalInstance(fundamentalInstance);fundamentalInstance.instance=_instance6;_appendAllChildren(_instance6,workInProgress,false,false);}var shouldUpdate=shouldUpdateFundamentalComponent(fundamentalInstance);if(shouldUpdate){markUpdate(workInProgress);}}}break;}case ScopeComponent:{if(enableScopeAPI){if(current===null){var _type3=workInProgress.type;var scopeInstance={fiber:workInProgress,methods:null};workInProgress.stateNode=scopeInstance;scopeInstance.methods=createScopeMethods(_type3,scopeInstance);if(enableFlareAPI){var _listeners2=newProps.listeners;if(_listeners2!=null){var _rootContainerInstance2=getRootHostContainer();updateEventListeners(_listeners2,workInProgress,_rootContainerInstance2);}}if(workInProgress.ref!==null){markRef$1(workInProgress);markUpdate(workInProgress);}}else{if(enableFlareAPI){var _prevListeners=current.memoizedProps.listeners;var _nextListeners=newProps.listeners;if(_prevListeners!==_nextListeners||workInProgress.ref!==null){markUpdate(workInProgress);}}else{if(workInProgress.ref!==null){markUpdate(workInProgress);}}if(current.ref!==workInProgress.ref){markRef$1(workInProgress);}}}break;}default:{{throw Error("Unknown unit of work tag ("+workInProgress.tag+"). This error is likely caused by a bug in React. Please file an issue.");}}}return null;}function unwindWork(workInProgress,renderExpirationTime){switch(workInProgress.tag){case ClassComponent:{var Component=workInProgress.type;if(isContextProvider(Component)){popContext(workInProgress);}var effectTag=workInProgress.effectTag;if(effectTag&ShouldCapture){workInProgress.effectTag=effectTag&~ShouldCapture|DidCapture;return workInProgress;}return null;}case HostRoot:{popHostContainer(workInProgress);popTopLevelContextObject(workInProgress);var _effectTag=workInProgress.effectTag;if(!((_effectTag&DidCapture)===NoEffect)){{throw Error("The root failed to unmount after an error. This is likely a bug in React. Please file an issue.");}}workInProgress.effectTag=_effectTag&~ShouldCapture|DidCapture;return workInProgress;}case HostComponent:{// TODO: popHydrationState
popHostContext(workInProgress);return null;}case SuspenseComponent:{popSuspenseContext(workInProgress);if(enableSuspenseServerRenderer){var suspenseState=workInProgress.memoizedState;if(suspenseState!==null&&suspenseState.dehydrated!==null){if(!(workInProgress.alternate!==null)){{throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");}}resetHydrationState();}}var _effectTag2=workInProgress.effectTag;if(_effectTag2&ShouldCapture){workInProgress.effectTag=_effectTag2&~ShouldCapture|DidCapture;// Captured a suspense effect. Re-render the boundary.
return workInProgress;}return null;}case SuspenseListComponent:{popSuspenseContext(workInProgress);// SuspenseList doesn't actually catch anything. It should've been
// caught by a nested boundary. If not, it should bubble through.
return null;}case HostPortal:popHostContainer(workInProgress);return null;case ContextProvider:popProvider(workInProgress);return null;default:return null;}}function unwindInterruptedWork(interruptedWork){switch(interruptedWork.tag){case ClassComponent:{var childContextTypes=interruptedWork.type.childContextTypes;if(childContextTypes!==null&&childContextTypes!==undefined){popContext(interruptedWork);}break;}case HostRoot:{popHostContainer(interruptedWork);popTopLevelContextObject(interruptedWork);break;}case HostComponent:{popHostContext(interruptedWork);break;}case HostPortal:popHostContainer(interruptedWork);break;case SuspenseComponent:popSuspenseContext(interruptedWork);break;case SuspenseListComponent:popSuspenseContext(interruptedWork);break;case ContextProvider:popProvider(interruptedWork);break;default:break;}}function createCapturedValue(value,source){// If the value is an error, call this function immediately after it is thrown
// so the stack is accurate.
return{value:value,source:source,stack:getStackByFiberInDevAndProd(source)};}var invokeGuardedCallbackImpl=function invokeGuardedCallbackImpl(name,func,context,a,b,c,d,e,f){var funcArgs=Array.prototype.slice.call(arguments,3);try{func.apply(context,funcArgs);}catch(error){this.onError(error);}};{// In DEV mode, we swap out invokeGuardedCallback for a special version
// that plays more nicely with the browser's DevTools. The idea is to preserve
// "Pause on exceptions" behavior. Because React wraps all user-provided
// functions in invokeGuardedCallback, and the production version of
// invokeGuardedCallback uses a try-catch, all user exceptions are treated
// like caught exceptions, and the DevTools won't pause unless the developer
// takes the extra step of enabling pause on caught exceptions. This is
// unintuitive, though, because even though React has caught the error, from
// the developer's perspective, the error is uncaught.
//
// To preserve the expected "Pause on exceptions" behavior, we don't use a
// try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
// DOM node, and call the user-provided callback from inside an event handler
// for that fake event. If the callback throws, the error is "captured" using
// a global event handler. But because the error happens in a different
// event loop context, it does not interrupt the normal program flow.
// Effectively, this gives us try-catch behavior without actually using
// try-catch. Neat!
// Check that the browser supports the APIs we need to implement our special
// DEV version of invokeGuardedCallback
if(typeof window!=='undefined'&&typeof window.dispatchEvent==='function'&&typeof document!=='undefined'&&typeof document.createEvent==='function'){var fakeNode=document.createElement('react');var invokeGuardedCallbackDev=function invokeGuardedCallbackDev(name,func,context,a,b,c,d,e,f){// If document doesn't exist we know for sure we will crash in this method
// when we call document.createEvent(). However this can cause confusing
// errors: https://github.com/facebookincubator/create-react-app/issues/3482
// So we preemptively throw with a better message instead.
if(!(typeof document!=='undefined')){{throw Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");}}var evt=document.createEvent('Event');// Keeps track of whether the user-provided callback threw an error. We
// set this to true at the beginning, then set it to false right after
// calling the function. If the function errors, `didError` will never be
// set to false. This strategy works even if the browser is flaky and
// fails to call our global error handler, because it doesn't rely on
// the error event at all.
var didError=true;// Keeps track of the value of window.event so that we can reset it
// during the callback to let user code access window.event in the
// browsers that support it.
var windowEvent=window.event;// Keeps track of the descriptor of window.event to restore it after event
// dispatching: https://github.com/facebook/react/issues/13688
var windowEventDescriptor=Object.getOwnPropertyDescriptor(window,'event');// Create an event handler for our fake event. We will synchronously
// dispatch our fake event using `dispatchEvent`. Inside the handler, we
// call the user-provided callback.
var funcArgs=Array.prototype.slice.call(arguments,3);function callCallback(){// We immediately remove the callback from event listeners so that
// nested `invokeGuardedCallback` calls do not clash. Otherwise, a
// nested call would trigger the fake event handlers of any call higher
// in the stack.
fakeNode.removeEventListener(evtType,callCallback,false);// We check for window.hasOwnProperty('event') to prevent the
// window.event assignment in both IE <= 10 as they throw an error
// "Member not found" in strict mode, and in Firefox which does not
// support window.event.
if(typeof window.event!=='undefined'&&window.hasOwnProperty('event')){window.event=windowEvent;}func.apply(context,funcArgs);didError=false;}// Create a global error event handler. We use this to capture the value
// that was thrown. It's possible that this error handler will fire more
// than once; for example, if non-React code also calls `dispatchEvent`
// and a handler for that event throws. We should be resilient to most of
// those cases. Even if our error event handler fires more than once, the
// last error event is always used. If the callback actually does error,
// we know that the last error event is the correct one, because it's not
// possible for anything else to have happened in between our callback
// erroring and the code that follows the `dispatchEvent` call below. If
// the callback doesn't error, but the error event was fired, we know to
// ignore it because `didError` will be false, as described above.
var error;// Use this to track whether the error event is ever called.
var didSetError=false;var isCrossOriginError=false;function handleWindowError(event){error=event.error;didSetError=true;if(error===null&&event.colno===0&&event.lineno===0){isCrossOriginError=true;}if(event.defaultPrevented){// Some other error handler has prevented default.
// Browsers silence the error report if this happens.
// We'll remember this to later decide whether to log it or not.
if(error!=null&&_typeof(error)==='object'){try{error._suppressLogging=true;}catch(inner){// Ignore.
}}}}// Create a fake event type.
var evtType="react-"+(name?name:'invokeguardedcallback');// Attach our event handlers
window.addEventListener('error',handleWindowError);fakeNode.addEventListener(evtType,callCallback,false);// Synchronously dispatch our fake event. If the user-provided function
// errors, it will trigger our global error handler.
evt.initEvent(evtType,false,false);fakeNode.dispatchEvent(evt);if(windowEventDescriptor){Object.defineProperty(window,'event',windowEventDescriptor);}if(didError){if(!didSetError){// The callback errored, but the error event never fired.
error=new Error('An error was thrown inside one of your components, but React '+"doesn't know what it was. This is likely due to browser "+'flakiness. React does its best to preserve the "Pause on '+'exceptions" behavior of the DevTools, which requires some '+"DEV-mode only tricks. It's possible that these don't work in "+'your browser. Try triggering the error in production mode, '+'or switching to a modern browser. If you suspect that this is '+'actually an issue with React, please file an issue.');}else if(isCrossOriginError){error=new Error("A cross-origin error was thrown. React doesn't have access to "+'the actual error object in development. '+'See https://fb.me/react-crossorigin-error for more information.');}this.onError(error);}// Remove our event listeners
window.removeEventListener('error',handleWindowError);};invokeGuardedCallbackImpl=invokeGuardedCallbackDev;}}var invokeGuardedCallbackImpl$1=invokeGuardedCallbackImpl;var hasError=false;var caughtError=null;// Used by event system to capture/rethrow the first error.
var reporter={onError:function onError(error){hasError=true;caughtError=error;}};/**
 * Call a function while guarding against errors that happens within it.
 * Returns an error if it throws, otherwise null.
 *
 * In production, this is implemented using a try-catch. The reason we don't
 * use a try-catch directly is so that we can swap out a different
 * implementation in DEV mode.
 *
 * @param {String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} context The context to use when calling the function
 * @param {...*} args Arguments for function
 */function invokeGuardedCallback(name,func,context,a,b,c,d,e,f){hasError=false;caughtError=null;invokeGuardedCallbackImpl$1.apply(reporter,arguments);}/**
 * Same as invokeGuardedCallback, but instead of returning an error, it stores
 * it in a global so it can be rethrown by `rethrowCaughtError` later.
 * TODO: See if caughtError and rethrowError can be unified.
 *
 * @param {String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} context The context to use when calling the function
 * @param {...*} args Arguments for function
 */ /**
 * During execution of guarded functions we will capture the first error which
 * we will rethrow to be handled by the top level error handler.
 */function hasCaughtError(){return hasError;}function clearCaughtError(){if(hasError){var error=caughtError;hasError=false;caughtError=null;return error;}else{{{throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");}}}}// This module is forked in different environments.
// By default, return `true` to log errors to the console.
// Forks can return `false` if this isn't desirable.
function showErrorDialog(capturedError){return true;}function logCapturedError(capturedError){var logError=showErrorDialog(capturedError);// Allow injected showErrorDialog() to prevent default console.error logging.
// This enables renderers like ReactNative to better manage redbox behavior.
if(logError===false){return;}var error=capturedError.error;{var componentName=capturedError.componentName,componentStack=capturedError.componentStack,errorBoundaryName=capturedError.errorBoundaryName,errorBoundaryFound=capturedError.errorBoundaryFound,willRetry=capturedError.willRetry;// Browsers support silencing uncaught errors by calling
// `preventDefault()` in window `error` handler.
// We record this information as an expando on the error.
if(error!=null&&error._suppressLogging){if(errorBoundaryFound&&willRetry){// The error is recoverable and was silenced.
// Ignore it and don't print the stack addendum.
// This is handy for testing error boundaries without noise.
return;}// The error is fatal. Since the silencing might have
// been accidental, we'll surface it anyway.
// However, the browser would have silenced the original error
// so we'll print it first, and then print the stack addendum.
console.error(error);// For a more detailed description of this block, see:
// https://github.com/facebook/react/pull/13384
}var componentNameMessage=componentName?"The above error occurred in the <"+componentName+"> component:":'The above error occurred in one of your React components:';var errorBoundaryMessage;// errorBoundaryFound check is sufficient; errorBoundaryName check is to satisfy Flow.
if(errorBoundaryFound&&errorBoundaryName){if(willRetry){errorBoundaryMessage="React will try to recreate this component tree from scratch "+("using the error boundary you provided, "+errorBoundaryName+".");}else{errorBoundaryMessage="This error was initially handled by the error boundary "+errorBoundaryName+".\n"+"Recreating the tree from scratch failed so React will unmount the tree.";}}else{errorBoundaryMessage='Consider adding an error boundary to your tree to customize error handling behavior.\n'+'Visit https://fb.me/react-error-boundaries to learn more about error boundaries.';}var combinedMessage=""+componentNameMessage+componentStack+"\n\n"+(""+errorBoundaryMessage);// In development, we provide our own message with just the component stack.
// We don't include the original error message and JS stack because the browser
// has already printed it. Even if the application swallows the error, it is still
// displayed by the browser thanks to the DEV-only fake event trick in ReactErrorUtils.
console.error(combinedMessage);}}var didWarnAboutUndefinedSnapshotBeforeUpdate=null;{didWarnAboutUndefinedSnapshotBeforeUpdate=new Set();}var PossiblyWeakSet=typeof WeakSet==='function'?WeakSet:Set;function logError(boundary,errorInfo){var source=errorInfo.source;var stack=errorInfo.stack;if(stack===null&&source!==null){stack=getStackByFiberInDevAndProd(source);}var capturedError={componentName:source!==null?getComponentName(source.type):null,componentStack:stack!==null?stack:'',error:errorInfo.value,errorBoundary:null,errorBoundaryName:null,errorBoundaryFound:false,willRetry:false};if(boundary!==null&&boundary.tag===ClassComponent){capturedError.errorBoundary=boundary.stateNode;capturedError.errorBoundaryName=getComponentName(boundary.type);capturedError.errorBoundaryFound=true;capturedError.willRetry=true;}try{logCapturedError(capturedError);}catch(e){// This method must not throw, or React internal state will get messed up.
// If console.error is overridden, or logCapturedError() shows a dialog that throws,
// we want to report this error outside of the normal stack as a last resort.
// https://github.com/facebook/react/issues/13188
setTimeout(function(){throw e;});}}var callComponentWillUnmountWithTimer=function callComponentWillUnmountWithTimer(current$$1,instance){startPhaseTimer(current$$1,'componentWillUnmount');instance.props=current$$1.memoizedProps;instance.state=current$$1.memoizedState;instance.componentWillUnmount();stopPhaseTimer();};// Capture errors so they don't interrupt unmounting.
function safelyCallComponentWillUnmount(current$$1,instance){{invokeGuardedCallback(null,callComponentWillUnmountWithTimer,null,current$$1,instance);if(hasCaughtError()){var unmountError=clearCaughtError();captureCommitPhaseError(current$$1,unmountError);}}}function safelyDetachRef(current$$1){var ref=current$$1.ref;if(ref!==null){if(typeof ref==='function'){{invokeGuardedCallback(null,ref,null,null);if(hasCaughtError()){var refError=clearCaughtError();captureCommitPhaseError(current$$1,refError);}}}else{ref.current=null;}}}function safelyCallDestroy(current$$1,destroy){{invokeGuardedCallback(null,destroy,null);if(hasCaughtError()){var error=clearCaughtError();captureCommitPhaseError(current$$1,error);}}}function commitBeforeMutationLifeCycles(current$$1,finishedWork){switch(finishedWork.tag){case FunctionComponent:case ForwardRef:case SimpleMemoComponent:{commitHookEffectList(UnmountSnapshot,NoEffect$1,finishedWork);return;}case ClassComponent:{if(finishedWork.effectTag&Snapshot){if(current$$1!==null){var prevProps=current$$1.memoizedProps;var prevState=current$$1.memoizedState;startPhaseTimer(finishedWork,'getSnapshotBeforeUpdate');var instance=finishedWork.stateNode;// We could update instance props and state here,
// but instead we rely on them being set during last render.
// TODO: revisit this when we implement resuming.
{if(finishedWork.type===finishedWork.elementType&&!didWarnAboutReassigningProps){!(instance.props===finishedWork.memoizedProps)?warning$1(false,'Expected %s props to match memoized props before '+'getSnapshotBeforeUpdate. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.props`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance'):void 0;!(instance.state===finishedWork.memoizedState)?warning$1(false,'Expected %s state to match memoized state before '+'getSnapshotBeforeUpdate. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.props`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance'):void 0;}}var snapshot=instance.getSnapshotBeforeUpdate(finishedWork.elementType===finishedWork.type?prevProps:resolveDefaultProps(finishedWork.type,prevProps),prevState);{var didWarnSet=didWarnAboutUndefinedSnapshotBeforeUpdate;if(snapshot===undefined&&!didWarnSet.has(finishedWork.type)){didWarnSet.add(finishedWork.type);warningWithoutStack$1(false,'%s.getSnapshotBeforeUpdate(): A snapshot value (or null) '+'must be returned. You have returned undefined.',getComponentName(finishedWork.type));}}instance.__reactInternalSnapshotBeforeUpdate=snapshot;stopPhaseTimer();}}return;}case HostRoot:case HostComponent:case HostText:case HostPortal:case IncompleteClassComponent:// Nothing to do for these component types
return;default:{{{throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");}}}}}function commitHookEffectList(unmountTag,mountTag,finishedWork){var updateQueue=finishedWork.updateQueue;var lastEffect=updateQueue!==null?updateQueue.lastEffect:null;if(lastEffect!==null){var firstEffect=lastEffect.next;var effect=firstEffect;do{if((effect.tag&unmountTag)!==NoEffect$1){// Unmount
var destroy=effect.destroy;effect.destroy=undefined;if(destroy!==undefined){destroy();}}if((effect.tag&mountTag)!==NoEffect$1){// Mount
var create=effect.create;effect.destroy=create();{var _destroy=effect.destroy;if(_destroy!==undefined&&typeof _destroy!=='function'){var addendum=void 0;if(_destroy===null){addendum=' You returned null. If your effect does not require clean '+'up, return undefined (or nothing).';}else if(typeof _destroy.then==='function'){addendum='\n\nIt looks like you wrote useEffect(async () => ...) or returned a Promise. '+'Instead, write the async function inside your effect '+'and call it immediately:\n\n'+'useEffect(() => {\n'+'  async function fetchData() {\n'+'    // You can await here\n'+'    const response = await MyAPI.getData(someId);\n'+'    // ...\n'+'  }\n'+'  fetchData();\n'+"}, [someId]); // Or [] if effect doesn't need props or state\n\n"+'Learn more about data fetching with Hooks: https://fb.me/react-hooks-data-fetching';}else{addendum=' You returned: '+_destroy;}warningWithoutStack$1(false,'An effect function must not return anything besides a function, '+'which is used for clean-up.%s%s',addendum,getStackByFiberInDevAndProd(finishedWork));}}}effect=effect.next;}while(effect!==firstEffect);}}function commitPassiveHookEffects(finishedWork){if((finishedWork.effectTag&Passive)!==NoEffect){switch(finishedWork.tag){case FunctionComponent:case ForwardRef:case SimpleMemoComponent:{commitHookEffectList(UnmountPassive,NoEffect$1,finishedWork);commitHookEffectList(NoEffect$1,MountPassive,finishedWork);break;}default:break;}}}function commitLifeCycles(finishedRoot,current$$1,finishedWork,committedExpirationTime){switch(finishedWork.tag){case FunctionComponent:case ForwardRef:case SimpleMemoComponent:{commitHookEffectList(UnmountLayout,MountLayout,finishedWork);break;}case ClassComponent:{var instance=finishedWork.stateNode;if(finishedWork.effectTag&Update){if(current$$1===null){startPhaseTimer(finishedWork,'componentDidMount');// We could update instance props and state here,
// but instead we rely on them being set during last render.
// TODO: revisit this when we implement resuming.
{if(finishedWork.type===finishedWork.elementType&&!didWarnAboutReassigningProps){!(instance.props===finishedWork.memoizedProps)?warning$1(false,'Expected %s props to match memoized props before '+'componentDidMount. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.props`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance'):void 0;!(instance.state===finishedWork.memoizedState)?warning$1(false,'Expected %s state to match memoized state before '+'componentDidMount. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.props`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance'):void 0;}}instance.componentDidMount();stopPhaseTimer();}else{var prevProps=finishedWork.elementType===finishedWork.type?current$$1.memoizedProps:resolveDefaultProps(finishedWork.type,current$$1.memoizedProps);var prevState=current$$1.memoizedState;startPhaseTimer(finishedWork,'componentDidUpdate');// We could update instance props and state here,
// but instead we rely on them being set during last render.
// TODO: revisit this when we implement resuming.
{if(finishedWork.type===finishedWork.elementType&&!didWarnAboutReassigningProps){!(instance.props===finishedWork.memoizedProps)?warning$1(false,'Expected %s props to match memoized props before '+'componentDidUpdate. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.props`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance'):void 0;!(instance.state===finishedWork.memoizedState)?warning$1(false,'Expected %s state to match memoized state before '+'componentDidUpdate. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.props`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance'):void 0;}}instance.componentDidUpdate(prevProps,prevState,instance.__reactInternalSnapshotBeforeUpdate);stopPhaseTimer();}}var updateQueue=finishedWork.updateQueue;if(updateQueue!==null){{if(finishedWork.type===finishedWork.elementType&&!didWarnAboutReassigningProps){!(instance.props===finishedWork.memoizedProps)?warning$1(false,'Expected %s props to match memoized props before '+'processing the update queue. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.props`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance'):void 0;!(instance.state===finishedWork.memoizedState)?warning$1(false,'Expected %s state to match memoized state before '+'processing the update queue. '+'This might either be because of a bug in React, or because '+'a component reassigns its own `this.props`. '+'Please file an issue.',getComponentName(finishedWork.type)||'instance'):void 0;}}// We could update instance props and state here,
// but instead we rely on them being set during last render.
// TODO: revisit this when we implement resuming.
commitUpdateQueue(finishedWork,updateQueue,instance,committedExpirationTime);}return;}case HostRoot:{var _updateQueue=finishedWork.updateQueue;if(_updateQueue!==null){var _instance=null;if(finishedWork.child!==null){switch(finishedWork.child.tag){case HostComponent:_instance=getPublicInstance(finishedWork.child.stateNode);break;case ClassComponent:_instance=finishedWork.child.stateNode;break;}}commitUpdateQueue(finishedWork,_updateQueue,_instance,committedExpirationTime);}return;}case HostComponent:{var _instance2=finishedWork.stateNode;// Renderers may schedule work to be done after host components are mounted
// (eg DOM renderer may schedule auto-focus for inputs and form controls).
// These effects should only be committed when components are first mounted,
// aka when there is no current/alternate.
if(current$$1===null&&finishedWork.effectTag&Update){var type=finishedWork.type;var props=finishedWork.memoizedProps;commitMount(_instance2,type,props,finishedWork);}return;}case HostText:{// We have no life-cycles associated with text.
return;}case HostPortal:{// We have no life-cycles associated with portals.
return;}case Profiler:{if(enableProfilerTimer){var onRender=finishedWork.memoizedProps.onRender;if(typeof onRender==='function'){if(enableSchedulerTracing){onRender(finishedWork.memoizedProps.id,current$$1===null?'mount':'update',finishedWork.actualDuration,finishedWork.treeBaseDuration,finishedWork.actualStartTime,getCommitTime(),finishedRoot.memoizedInteractions);}else{onRender(finishedWork.memoizedProps.id,current$$1===null?'mount':'update',finishedWork.actualDuration,finishedWork.treeBaseDuration,finishedWork.actualStartTime,getCommitTime());}}}return;}case SuspenseComponent:{commitSuspenseHydrationCallbacks(finishedRoot,finishedWork);return;}case SuspenseListComponent:case IncompleteClassComponent:case FundamentalComponent:case ScopeComponent:return;default:{{{throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");}}}}}function hideOrUnhideAllChildren(finishedWork,isHidden){if(supportsMutation){// We only have the top Fiber that was inserted but we need to recurse down its
// children to find all the terminal nodes.
var node=finishedWork;while(true){if(node.tag===HostComponent){var instance=node.stateNode;if(isHidden){hideInstance(instance);}else{unhideInstance(node.stateNode,node.memoizedProps);}}else if(node.tag===HostText){var _instance3=node.stateNode;if(isHidden){hideTextInstance(_instance3);}else{unhideTextInstance(_instance3,node.memoizedProps);}}else if(node.tag===SuspenseComponent&&node.memoizedState!==null&&node.memoizedState.dehydrated===null){// Found a nested Suspense component that timed out. Skip over the
// primary child fragment, which should remain hidden.
var fallbackChildFragment=node.child.sibling;fallbackChildFragment.return=node;node=fallbackChildFragment;continue;}else if(node.child!==null){node.child.return=node;node=node.child;continue;}if(node===finishedWork){return;}while(node.sibling===null){if(node.return===null||node.return===finishedWork){return;}node=node.return;}node.sibling.return=node.return;node=node.sibling;}}}function commitAttachRef(finishedWork){var ref=finishedWork.ref;if(ref!==null){var instance=finishedWork.stateNode;var instanceToUse;switch(finishedWork.tag){case HostComponent:instanceToUse=getPublicInstance(instance);break;default:instanceToUse=instance;}// Moved outside to ensure DCE works with this flag
if(enableScopeAPI&&finishedWork.tag===ScopeComponent){instanceToUse=instance.methods;}if(typeof ref==='function'){ref(instanceToUse);}else{{if(!ref.hasOwnProperty('current')){warningWithoutStack$1(false,'Unexpected ref object provided for %s. '+'Use either a ref-setter function or React.createRef().%s',getComponentName(finishedWork.type),getStackByFiberInDevAndProd(finishedWork));}}ref.current=instanceToUse;}}}function commitDetachRef(current$$1){var currentRef=current$$1.ref;if(currentRef!==null){if(typeof currentRef==='function'){currentRef(null);}else{currentRef.current=null;}}}// User-originating errors (lifecycles and refs) should not interrupt
// deletion, so don't let them throw. Host-originating errors should
// interrupt deletion, so it's okay
function commitUnmount(finishedRoot,current$$1,renderPriorityLevel){onCommitUnmount(current$$1);switch(current$$1.tag){case FunctionComponent:case ForwardRef:case MemoComponent:case SimpleMemoComponent:{var updateQueue=current$$1.updateQueue;if(updateQueue!==null){var lastEffect=updateQueue.lastEffect;if(lastEffect!==null){var firstEffect=lastEffect.next;// When the owner fiber is deleted, the destroy function of a passive
// effect hook is called during the synchronous commit phase. This is
// a concession to implementation complexity. Calling it in the
// passive effect phase (like they usually are, when dependencies
// change during an update) would require either traversing the
// children of the deleted fiber again, or including unmount effects
// as part of the fiber effect list.
//
// Because this is during the sync commit phase, we need to change
// the priority.
//
// TODO: Reconsider this implementation trade off.
var priorityLevel=renderPriorityLevel>NormalPriority?NormalPriority:renderPriorityLevel;runWithPriority(priorityLevel,function(){var effect=firstEffect;do{var destroy=effect.destroy;if(destroy!==undefined){safelyCallDestroy(current$$1,destroy);}effect=effect.next;}while(effect!==firstEffect);});}}break;}case ClassComponent:{safelyDetachRef(current$$1);var instance=current$$1.stateNode;if(typeof instance.componentWillUnmount==='function'){safelyCallComponentWillUnmount(current$$1,instance);}return;}case HostComponent:{if(enableFlareAPI){var dependencies=current$$1.dependencies;if(dependencies!==null){var respondersMap=dependencies.responders;if(respondersMap!==null){var responderInstances=Array.from(respondersMap.values());for(var i=0,length=responderInstances.length;i<length;i++){var responderInstance=responderInstances[i];unmountResponderInstance(responderInstance);}dependencies.responders=null;}}}safelyDetachRef(current$$1);return;}case HostPortal:{// TODO: this is recursive.
// We are also not using this parent because
// the portal will get pushed immediately.
if(supportsMutation){unmountHostComponents(finishedRoot,current$$1,renderPriorityLevel);}else if(supportsPersistence){emptyPortalContainer(current$$1);}return;}case FundamentalComponent:{if(enableFundamentalAPI){var fundamentalInstance=current$$1.stateNode;if(fundamentalInstance!==null){unmountFundamentalComponent(fundamentalInstance);current$$1.stateNode=null;}}return;}case DehydratedFragment:{if(enableSuspenseCallback){var hydrationCallbacks=finishedRoot.hydrationCallbacks;if(hydrationCallbacks!==null){var onDeleted=hydrationCallbacks.onDeleted;if(onDeleted){onDeleted(current$$1.stateNode);}}}return;}case ScopeComponent:{if(enableScopeAPI){safelyDetachRef(current$$1);}}}}function commitNestedUnmounts(finishedRoot,root,renderPriorityLevel){// While we're inside a removed host node we don't want to call
// removeChild on the inner nodes because they're removed by the top
// call anyway. We also want to call componentWillUnmount on all
// composites before this host node is removed from the tree. Therefore
// we do an inner loop while we're still inside the host node.
var node=root;while(true){commitUnmount(finishedRoot,node,renderPriorityLevel);// Visit children because they may contain more composite or host nodes.
// Skip portals because commitUnmount() currently visits them recursively.
if(node.child!==null&&(// If we use mutation we drill down into portals using commitUnmount above.
// If we don't use mutation we drill down into portals here instead.
!supportsMutation||node.tag!==HostPortal)){node.child.return=node;node=node.child;continue;}if(node===root){return;}while(node.sibling===null){if(node.return===null||node.return===root){return;}node=node.return;}node.sibling.return=node.return;node=node.sibling;}}function detachFiber(current$$1){var alternate=current$$1.alternate;// Cut off the return pointers to disconnect it from the tree. Ideally, we
// should clear the child pointer of the parent alternate to let this
// get GC:ed but we don't know which for sure which parent is the current
// one so we'll settle for GC:ing the subtree of this child. This child
// itself will be GC:ed when the parent updates the next time.
current$$1.return=null;current$$1.child=null;current$$1.memoizedState=null;current$$1.updateQueue=null;current$$1.dependencies=null;current$$1.alternate=null;current$$1.firstEffect=null;current$$1.lastEffect=null;current$$1.pendingProps=null;current$$1.memoizedProps=null;if(alternate!==null){detachFiber(alternate);}}function emptyPortalContainer(current$$1){if(!supportsPersistence){return;}var portal=current$$1.stateNode;var containerInfo=portal.containerInfo;var emptyChildSet=createContainerChildSet(containerInfo);replaceContainerChildren(containerInfo,emptyChildSet);}function commitContainer(finishedWork){if(!supportsPersistence){return;}switch(finishedWork.tag){case ClassComponent:case HostComponent:case HostText:case FundamentalComponent:{return;}case HostRoot:case HostPortal:{var portalOrRoot=finishedWork.stateNode;var containerInfo=portalOrRoot.containerInfo,pendingChildren=portalOrRoot.pendingChildren;replaceContainerChildren(containerInfo,pendingChildren);return;}default:{{{throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");}}}}}function getHostParentFiber(fiber){var parent=fiber.return;while(parent!==null){if(isHostParent(parent)){return parent;}parent=parent.return;}{{throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");}}}function isHostParent(fiber){return fiber.tag===HostComponent||fiber.tag===HostRoot||fiber.tag===HostPortal;}function getHostSibling(fiber){// We're going to search forward into the tree until we find a sibling host
// node. Unfortunately, if multiple insertions are done in a row we have to
// search past them. This leads to exponential search for the next sibling.
// TODO: Find a more efficient way to do this.
var node=fiber;siblings:while(true){// If we didn't find anything, let's try the next sibling.
while(node.sibling===null){if(node.return===null||isHostParent(node.return)){// If we pop out of the root or hit the parent the fiber we are the
// last sibling.
return null;}node=node.return;}node.sibling.return=node.return;node=node.sibling;while(node.tag!==HostComponent&&node.tag!==HostText&&node.tag!==DehydratedFragment){// If it is not host node and, we might have a host node inside it.
// Try to search down until we find one.
if(node.effectTag&Placement){// If we don't have a child, try the siblings instead.
continue siblings;}// If we don't have a child, try the siblings instead.
// We also skip portals because they are not part of this host tree.
if(node.child===null||node.tag===HostPortal){continue siblings;}else{node.child.return=node;node=node.child;}}// Check if this host node is stable or about to be placed.
if(!(node.effectTag&Placement)){// Found it!
return node.stateNode;}}}function commitPlacement(finishedWork){if(!supportsMutation){return;}// Recursively insert all host nodes into the parent.
var parentFiber=getHostParentFiber(finishedWork);// Note: these two variables *must* always be updated together.
var parent;var isContainer;var parentStateNode=parentFiber.stateNode;switch(parentFiber.tag){case HostComponent:parent=parentStateNode;isContainer=false;break;case HostRoot:parent=parentStateNode.containerInfo;isContainer=true;break;case HostPortal:parent=parentStateNode.containerInfo;isContainer=true;break;case FundamentalComponent:if(enableFundamentalAPI){parent=parentStateNode.instance;isContainer=false;}// eslint-disable-next-line-no-fallthrough
default:{{throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");}}}if(parentFiber.effectTag&ContentReset){// Reset the text content of the parent before doing any insertions
resetTextContent(parent);// Clear ContentReset from the effect tag
parentFiber.effectTag&=~ContentReset;}var before=getHostSibling(finishedWork);// We only have the top Fiber that was inserted but we need to recurse down its
// children to find all the terminal nodes.
var node=finishedWork;while(true){var isHost=node.tag===HostComponent||node.tag===HostText;if(isHost||enableFundamentalAPI&&node.tag===FundamentalComponent){var stateNode=isHost?node.stateNode:node.stateNode.instance;if(before){if(isContainer){insertInContainerBefore(parent,stateNode,before);}else{insertBefore(parent,stateNode,before);}}else{if(isContainer){appendChildToContainer(parent,stateNode);}else{appendChild(parent,stateNode);}}}else if(node.tag===HostPortal){// If the insertion itself is a portal, then we don't want to traverse
// down its children. Instead, we'll get insertions from each child in
// the portal directly.
}else if(node.child!==null){node.child.return=node;node=node.child;continue;}if(node===finishedWork){return;}while(node.sibling===null){if(node.return===null||node.return===finishedWork){return;}node=node.return;}node.sibling.return=node.return;node=node.sibling;}}function unmountHostComponents(finishedRoot,current$$1,renderPriorityLevel){// We only have the top Fiber that was deleted but we need to recurse down its
// children to find all the terminal nodes.
var node=current$$1;// Each iteration, currentParent is populated with node's host parent if not
// currentParentIsValid.
var currentParentIsValid=false;// Note: these two variables *must* always be updated together.
var currentParent;var currentParentIsContainer;while(true){if(!currentParentIsValid){var parent=node.return;findParent:while(true){if(!(parent!==null)){{throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");}}var parentStateNode=parent.stateNode;switch(parent.tag){case HostComponent:currentParent=parentStateNode;currentParentIsContainer=false;break findParent;case HostRoot:currentParent=parentStateNode.containerInfo;currentParentIsContainer=true;break findParent;case HostPortal:currentParent=parentStateNode.containerInfo;currentParentIsContainer=true;break findParent;case FundamentalComponent:if(enableFundamentalAPI){currentParent=parentStateNode.instance;currentParentIsContainer=false;}}parent=parent.return;}currentParentIsValid=true;}if(node.tag===HostComponent||node.tag===HostText){commitNestedUnmounts(finishedRoot,node,renderPriorityLevel);// After all the children have unmounted, it is now safe to remove the
// node from the tree.
if(currentParentIsContainer){removeChildFromContainer(currentParent,node.stateNode);}else{removeChild(currentParent,node.stateNode);}// Don't visit children because we already visited them.
}else if(enableFundamentalAPI&&node.tag===FundamentalComponent){var fundamentalNode=node.stateNode.instance;commitNestedUnmounts(finishedRoot,node,renderPriorityLevel);// After all the children have unmounted, it is now safe to remove the
// node from the tree.
if(currentParentIsContainer){removeChildFromContainer(currentParent,fundamentalNode);}else{removeChild(currentParent,fundamentalNode);}}else if(enableSuspenseServerRenderer&&node.tag===DehydratedFragment){if(enableSuspenseCallback){var hydrationCallbacks=finishedRoot.hydrationCallbacks;if(hydrationCallbacks!==null){var onDeleted=hydrationCallbacks.onDeleted;if(onDeleted){onDeleted(node.stateNode);}}}// Delete the dehydrated suspense boundary and all of its content.
if(currentParentIsContainer){clearSuspenseBoundaryFromContainer(currentParent,node.stateNode);}else{clearSuspenseBoundary(currentParent,node.stateNode);}}else if(node.tag===HostPortal){if(node.child!==null){// When we go into a portal, it becomes the parent to remove from.
// We will reassign it back when we pop the portal on the way up.
currentParent=node.stateNode.containerInfo;currentParentIsContainer=true;// Visit children because portals might contain host components.
node.child.return=node;node=node.child;continue;}}else{commitUnmount(finishedRoot,node,renderPriorityLevel);// Visit children because we may find more host components below.
if(node.child!==null){node.child.return=node;node=node.child;continue;}}if(node===current$$1){return;}while(node.sibling===null){if(node.return===null||node.return===current$$1){return;}node=node.return;if(node.tag===HostPortal){// When we go out of the portal, we need to restore the parent.
// Since we don't keep a stack of them, we will search for it.
currentParentIsValid=false;}}node.sibling.return=node.return;node=node.sibling;}}function commitDeletion(finishedRoot,current$$1,renderPriorityLevel){if(supportsMutation){// Recursively delete all host nodes from the parent.
// Detach refs and call componentWillUnmount() on the whole subtree.
unmountHostComponents(finishedRoot,current$$1,renderPriorityLevel);}else{// Detach refs and call componentWillUnmount() on the whole subtree.
commitNestedUnmounts(finishedRoot,current$$1,renderPriorityLevel);}detachFiber(current$$1);}function commitWork(current$$1,finishedWork){if(!supportsMutation){switch(finishedWork.tag){case FunctionComponent:case ForwardRef:case MemoComponent:case SimpleMemoComponent:{// Note: We currently never use MountMutation, but useLayout uses
// UnmountMutation.
commitHookEffectList(UnmountMutation,MountMutation,finishedWork);return;}case Profiler:{return;}case SuspenseComponent:{commitSuspenseComponent(finishedWork);attachSuspenseRetryListeners(finishedWork);return;}case SuspenseListComponent:{attachSuspenseRetryListeners(finishedWork);return;}case HostRoot:{if(supportsHydration){var root=finishedWork.stateNode;if(root.hydrate){// We've just hydrated. No need to hydrate again.
root.hydrate=false;commitHydratedContainer(root.containerInfo);}}break;}}commitContainer(finishedWork);return;}switch(finishedWork.tag){case FunctionComponent:case ForwardRef:case MemoComponent:case SimpleMemoComponent:{// Note: We currently never use MountMutation, but useLayout uses
// UnmountMutation.
commitHookEffectList(UnmountMutation,MountMutation,finishedWork);return;}case ClassComponent:{return;}case HostComponent:{var instance=finishedWork.stateNode;if(instance!=null){// Commit the work prepared earlier.
var newProps=finishedWork.memoizedProps;// For hydration we reuse the update path but we treat the oldProps
// as the newProps. The updatePayload will contain the real change in
// this case.
var oldProps=current$$1!==null?current$$1.memoizedProps:newProps;var type=finishedWork.type;// TODO: Type the updateQueue to be specific to host components.
var updatePayload=finishedWork.updateQueue;finishedWork.updateQueue=null;if(updatePayload!==null){commitUpdate(instance,updatePayload,type,oldProps,newProps,finishedWork);}if(enableFlareAPI){var prevListeners=oldProps.listeners;var nextListeners=newProps.listeners;if(prevListeners!==nextListeners){updateEventListeners(nextListeners,finishedWork,null);}}}return;}case HostText:{if(!(finishedWork.stateNode!==null)){{throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");}}var textInstance=finishedWork.stateNode;var newText=finishedWork.memoizedProps;// For hydration we reuse the update path but we treat the oldProps
// as the newProps. The updatePayload will contain the real change in
// this case.
var oldText=current$$1!==null?current$$1.memoizedProps:newText;commitTextUpdate(textInstance,oldText,newText);return;}case HostRoot:{if(supportsHydration){var _root=finishedWork.stateNode;if(_root.hydrate){// We've just hydrated. No need to hydrate again.
_root.hydrate=false;commitHydratedContainer(_root.containerInfo);}}return;}case Profiler:{return;}case SuspenseComponent:{commitSuspenseComponent(finishedWork);attachSuspenseRetryListeners(finishedWork);return;}case SuspenseListComponent:{attachSuspenseRetryListeners(finishedWork);return;}case IncompleteClassComponent:{return;}case FundamentalComponent:{if(enableFundamentalAPI){var fundamentalInstance=finishedWork.stateNode;updateFundamentalComponent(fundamentalInstance);}return;}case ScopeComponent:{if(enableScopeAPI){var scopeInstance=finishedWork.stateNode;scopeInstance.fiber=finishedWork;if(enableFlareAPI){var _newProps=finishedWork.memoizedProps;var _oldProps=current$$1!==null?current$$1.memoizedProps:_newProps;var _prevListeners=_oldProps.listeners;var _nextListeners=_newProps.listeners;if(_prevListeners!==_nextListeners){updateEventListeners(_nextListeners,finishedWork,null);}}}return;}default:{{{throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");}}}}}function commitSuspenseComponent(finishedWork){var newState=finishedWork.memoizedState;var newDidTimeout;var primaryChildParent=finishedWork;if(newState===null){newDidTimeout=false;}else{newDidTimeout=true;primaryChildParent=finishedWork.child;markCommitTimeOfFallback();}if(supportsMutation&&primaryChildParent!==null){hideOrUnhideAllChildren(primaryChildParent,newDidTimeout);}if(enableSuspenseCallback&&newState!==null){var suspenseCallback=finishedWork.memoizedProps.suspenseCallback;if(typeof suspenseCallback==='function'){var thenables=finishedWork.updateQueue;if(thenables!==null){suspenseCallback(new Set(thenables));}}else{if(suspenseCallback!==undefined){warning$1(false,'Unexpected type for suspenseCallback.');}}}}function commitSuspenseHydrationCallbacks(finishedRoot,finishedWork){if(!supportsHydration){return;}var newState=finishedWork.memoizedState;if(newState===null){var current$$1=finishedWork.alternate;if(current$$1!==null){var prevState=current$$1.memoizedState;if(prevState!==null){var suspenseInstance=prevState.dehydrated;if(suspenseInstance!==null){commitHydratedSuspenseInstance(suspenseInstance);if(enableSuspenseCallback){var hydrationCallbacks=finishedRoot.hydrationCallbacks;if(hydrationCallbacks!==null){var onHydrated=hydrationCallbacks.onHydrated;if(onHydrated){onHydrated(suspenseInstance);}}}}}}}}function attachSuspenseRetryListeners(finishedWork){// If this boundary just timed out, then it will have a set of thenables.
// For each thenable, attach a listener so that when it resolves, React
// attempts to re-render the boundary in the primary (pre-timeout) state.
var thenables=finishedWork.updateQueue;if(thenables!==null){finishedWork.updateQueue=null;var retryCache=finishedWork.stateNode;if(retryCache===null){retryCache=finishedWork.stateNode=new PossiblyWeakSet();}thenables.forEach(function(thenable){// Memoize using the boundary fiber to prevent redundant listeners.
var retry=resolveRetryThenable.bind(null,finishedWork,thenable);if(!retryCache.has(thenable)){if(enableSchedulerTracing){if(thenable.__reactDoNotTraceInteractions!==true){retry=tracing.unstable_wrap(retry);}}retryCache.add(thenable);thenable.then(retry,retry);}});}}function commitResetTextContent(current$$1){if(!supportsMutation){return;}resetTextContent(current$$1.stateNode);}var PossiblyWeakMap=typeof WeakMap==='function'?WeakMap:Map;function createRootErrorUpdate(fiber,errorInfo,expirationTime){var update=createUpdate(expirationTime,null);// Unmount the root by rendering null.
update.tag=CaptureUpdate;// Caution: React DevTools currently depends on this property
// being called "element".
update.payload={element:null};var error=errorInfo.value;update.callback=function(){onUncaughtError(error);logError(fiber,errorInfo);};return update;}function createClassErrorUpdate(fiber,errorInfo,expirationTime){var update=createUpdate(expirationTime,null);update.tag=CaptureUpdate;var getDerivedStateFromError=fiber.type.getDerivedStateFromError;if(typeof getDerivedStateFromError==='function'){var error=errorInfo.value;update.payload=function(){logError(fiber,errorInfo);return getDerivedStateFromError(error);};}var inst=fiber.stateNode;if(inst!==null&&typeof inst.componentDidCatch==='function'){update.callback=function callback(){{markFailedErrorBoundaryForHotReloading(fiber);}if(typeof getDerivedStateFromError!=='function'){// To preserve the preexisting retry behavior of error boundaries,
// we keep track of which ones already failed during this batch.
// This gets reset before we yield back to the browser.
// TODO: Warn in strict mode if getDerivedStateFromError is
// not defined.
markLegacyErrorBoundaryAsFailed(this);// Only log here if componentDidCatch is the only error boundary method defined
logError(fiber,errorInfo);}var error=errorInfo.value;var stack=errorInfo.stack;this.componentDidCatch(error,{componentStack:stack!==null?stack:''});{if(typeof getDerivedStateFromError!=='function'){// If componentDidCatch is the only error boundary method defined,
// then it needs to call setState to recover from errors.
// If no state update is scheduled then the boundary will swallow the error.
!(fiber.expirationTime===Sync)?warningWithoutStack$1(false,'%s: Error boundaries should implement getDerivedStateFromError(). '+'In that method, return a state update to display an error message or fallback UI.',getComponentName(fiber.type)||'Unknown'):void 0;}}};}else{update.callback=function(){markFailedErrorBoundaryForHotReloading(fiber);};}return update;}function attachPingListener(root,renderExpirationTime,thenable){// Attach a listener to the promise to "ping" the root and retry. But
// only if one does not already exist for the current render expiration
// time (which acts like a "thread ID" here).
var pingCache=root.pingCache;var threadIDs;if(pingCache===null){pingCache=root.pingCache=new PossiblyWeakMap();threadIDs=new Set();pingCache.set(thenable,threadIDs);}else{threadIDs=pingCache.get(thenable);if(threadIDs===undefined){threadIDs=new Set();pingCache.set(thenable,threadIDs);}}if(!threadIDs.has(renderExpirationTime)){// Memoize using the thread ID to prevent redundant listeners.
threadIDs.add(renderExpirationTime);var ping=pingSuspendedRoot.bind(null,root,thenable,renderExpirationTime);thenable.then(ping,ping);}}function throwException(root,returnFiber,sourceFiber,value,renderExpirationTime){// The source fiber did not complete.
sourceFiber.effectTag|=Incomplete;// Its effect list is no longer valid.
sourceFiber.firstEffect=sourceFiber.lastEffect=null;if(value!==null&&_typeof(value)==='object'&&typeof value.then==='function'){// This is a thenable.
var thenable=value;checkForWrongSuspensePriorityInDEV(sourceFiber);var hasInvisibleParentBoundary=hasSuspenseContext(suspenseStackCursor.current,InvisibleParentSuspenseContext);// Schedule the nearest Suspense to re-render the timed out view.
var _workInProgress=returnFiber;do{if(_workInProgress.tag===SuspenseComponent&&shouldCaptureSuspense(_workInProgress,hasInvisibleParentBoundary)){// Found the nearest boundary.
// Stash the promise on the boundary fiber. If the boundary times out, we'll
// attach another listener to flip the boundary back to its normal state.
var thenables=_workInProgress.updateQueue;if(thenables===null){var updateQueue=new Set();updateQueue.add(thenable);_workInProgress.updateQueue=updateQueue;}else{thenables.add(thenable);}// If the boundary is outside of batched mode, we should *not*
// suspend the commit. Pretend as if the suspended component rendered
// null and keep rendering. In the commit phase, we'll schedule a
// subsequent synchronous update to re-render the Suspense.
//
// Note: It doesn't matter whether the component that suspended was
// inside a batched mode tree. If the Suspense is outside of it, we
// should *not* suspend the commit.
if((_workInProgress.mode&BatchedMode)===NoMode){_workInProgress.effectTag|=DidCapture;// We're going to commit this fiber even though it didn't complete.
// But we shouldn't call any lifecycle methods or callbacks. Remove
// all lifecycle effect tags.
sourceFiber.effectTag&=~(LifecycleEffectMask|Incomplete);if(sourceFiber.tag===ClassComponent){var currentSourceFiber=sourceFiber.alternate;if(currentSourceFiber===null){// This is a new mount. Change the tag so it's not mistaken for a
// completed class component. For example, we should not call
// componentWillUnmount if it is deleted.
sourceFiber.tag=IncompleteClassComponent;}else{// When we try rendering again, we should not reuse the current fiber,
// since it's known to be in an inconsistent state. Use a force update to
// prevent a bail out.
var update=createUpdate(Sync,null);update.tag=ForceUpdate;enqueueUpdate(sourceFiber,update);}}// The source fiber did not complete. Mark it with Sync priority to
// indicate that it still has pending work.
sourceFiber.expirationTime=Sync;// Exit without suspending.
return;}// Confirmed that the boundary is in a concurrent mode tree. Continue
// with the normal suspend path.
//
// After this we'll use a set of heuristics to determine whether this
// render pass will run to completion or restart or "suspend" the commit.
// The actual logic for this is spread out in different places.
//
// This first principle is that if we're going to suspend when we complete
// a root, then we should also restart if we get an update or ping that
// might unsuspend it, and vice versa. The only reason to suspend is
// because you think you might want to restart before committing. However,
// it doesn't make sense to restart only while in the period we're suspended.
//
// Restarting too aggressively is also not good because it starves out any
// intermediate loading state. So we use heuristics to determine when.
// Suspense Heuristics
//
// If nothing threw a Promise or all the same fallbacks are already showing,
// then don't suspend/restart.
//
// If this is an initial render of a new tree of Suspense boundaries and
// those trigger a fallback, then don't suspend/restart. We want to ensure
// that we can show the initial loading state as quickly as possible.
//
// If we hit a "Delayed" case, such as when we'd switch from content back into
// a fallback, then we should always suspend/restart. SuspenseConfig applies to
// this case. If none is defined, JND is used instead.
//
// If we're already showing a fallback and it gets "retried", allowing us to show
// another level, but there's still an inner boundary that would show a fallback,
// then we suspend/restart for 500ms since the last time we showed a fallback
// anywhere in the tree. This effectively throttles progressive loading into a
// consistent train of commits. This also gives us an opportunity to restart to
// get to the completed state slightly earlier.
//
// If there's ambiguity due to batching it's resolved in preference of:
// 1) "delayed", 2) "initial render", 3) "retry".
//
// We want to ensure that a "busy" state doesn't get force committed. We want to
// ensure that new initial loading states can commit as soon as possible.
attachPingListener(root,renderExpirationTime,thenable);_workInProgress.effectTag|=ShouldCapture;_workInProgress.expirationTime=renderExpirationTime;return;}// This boundary already captured during this render. Continue to the next
// boundary.
_workInProgress=_workInProgress.return;}while(_workInProgress!==null);// No boundary was found. Fallthrough to error mode.
// TODO: Use invariant so the message is stripped in prod?
value=new Error((getComponentName(sourceFiber.type)||'A React component')+' suspended while rendering, but no fallback UI was specified.\n'+'\n'+'Add a <Suspense fallback=...> component higher in the tree to '+'provide a loading indicator or placeholder to display.'+getStackByFiberInDevAndProd(sourceFiber));}// We didn't find a boundary that could handle this type of exception. Start
// over and traverse parent path again, this time treating the exception
// as an error.
renderDidError();value=createCapturedValue(value,sourceFiber);var workInProgress=returnFiber;do{switch(workInProgress.tag){case HostRoot:{var _errorInfo=value;workInProgress.effectTag|=ShouldCapture;workInProgress.expirationTime=renderExpirationTime;var _update=createRootErrorUpdate(workInProgress,_errorInfo,renderExpirationTime);enqueueCapturedUpdate(workInProgress,_update);return;}case ClassComponent:// Capture and retry
var errorInfo=value;var ctor=workInProgress.type;var instance=workInProgress.stateNode;if((workInProgress.effectTag&DidCapture)===NoEffect&&(typeof ctor.getDerivedStateFromError==='function'||instance!==null&&typeof instance.componentDidCatch==='function'&&!isAlreadyFailedLegacyErrorBoundary(instance))){workInProgress.effectTag|=ShouldCapture;workInProgress.expirationTime=renderExpirationTime;// Schedule the error boundary to re-render using updated state
var _update2=createClassErrorUpdate(workInProgress,errorInfo,renderExpirationTime);enqueueCapturedUpdate(workInProgress,_update2);return;}break;default:break;}workInProgress=workInProgress.return;}while(workInProgress!==null);}var ceil=Math.ceil;var ReactCurrentDispatcher=ReactSharedInternals.ReactCurrentDispatcher;var ReactCurrentOwner$1=ReactSharedInternals.ReactCurrentOwner;var IsSomeRendererActing=ReactSharedInternals.IsSomeRendererActing;var NoContext=/*                    */0;var BatchedContext=/*               */1;var EventContext=/*                 */2;var DiscreteEventContext=/*         */4;var LegacyUnbatchedContext=/*       */8;var RenderContext=/*                */16;var CommitContext=/*                */32;var RootIncomplete=0;var RootFatalErrored=1;var RootErrored=2;var RootSuspended=3;var RootSuspendedWithDelay=4;var RootCompleted=5;// Describes where we are in the React execution stack
var executionContext=NoContext;// The root we're working on
var workInProgressRoot=null;// The fiber we're working on
var workInProgress=null;// The expiration time we're rendering
var renderExpirationTime=NoWork;// Whether to root completed, errored, suspended, etc.
var workInProgressRootExitStatus=RootIncomplete;// A fatal error, if one is thrown
var workInProgressRootFatalError=null;// Most recent event time among processed updates during this render.
// This is conceptually a time stamp but expressed in terms of an ExpirationTime
// because we deal mostly with expiration times in the hot path, so this avoids
// the conversion happening in the hot path.
var workInProgressRootLatestProcessedExpirationTime=Sync;var workInProgressRootLatestSuspenseTimeout=Sync;var workInProgressRootCanSuspendUsingConfig=null;// The work left over by components that were visited during this render. Only
// includes unprocessed updates, not work in bailed out children.
var workInProgressRootNextUnprocessedUpdateTime=NoWork;// If we're pinged while rendering we don't always restart immediately.
// This flag determines if it might be worthwhile to restart if an opportunity
// happens latere.
var workInProgressRootHasPendingPing=false;// The most recent time we committed a fallback. This lets us ensure a train
// model where we don't commit new loading states in too quick succession.
var globalMostRecentFallbackTime=0;var FALLBACK_THROTTLE_MS=500;var nextEffect=null;var hasUncaughtError=false;var firstUncaughtError=null;var legacyErrorBoundariesThatAlreadyFailed=null;var rootDoesHavePassiveEffects=false;var rootWithPendingPassiveEffects=null;var pendingPassiveEffectsRenderPriority=NoPriority;var pendingPassiveEffectsExpirationTime=NoWork;var rootsWithPendingDiscreteUpdates=null;// Use these to prevent an infinite loop of nested updates
var NESTED_UPDATE_LIMIT=50;var nestedUpdateCount=0;var rootWithNestedUpdates=null;var NESTED_PASSIVE_UPDATE_LIMIT=50;var nestedPassiveUpdateCount=0;var interruptedBy=null;// Marks the need to reschedule pending interactions at these expiration times
// during the commit phase. This enables them to be traced across components
// that spawn new work during render. E.g. hidden boundaries, suspended SSR
// hydration or SuspenseList.
var spawnedWorkDuringRender=null;// Expiration times are computed by adding to the current time (the start
// time). However, if two updates are scheduled within the same event, we
// should treat their start times as simultaneous, even if the actual clock
// time has advanced between the first and second call.
// In other words, because expiration times determine how updates are batched,
// we want all updates of like priority that occur within the same event to
// receive the same expiration time. Otherwise we get tearing.
var currentEventTime=NoWork;function requestCurrentTimeForUpdate(){if((executionContext&(RenderContext|CommitContext))!==NoContext){// We're inside React, so it's fine to read the actual time.
return msToExpirationTime(now$1());}// We're not inside React, so we may be in the middle of a browser event.
if(currentEventTime!==NoWork){// Use the same start time for all updates until we enter React again.
return currentEventTime;}// This is the first update since React yielded. Compute a new start time.
currentEventTime=msToExpirationTime(now$1());return currentEventTime;}function getCurrentTime(){return msToExpirationTime(now$1());}function computeExpirationForFiber(currentTime,fiber,suspenseConfig){var mode=fiber.mode;if((mode&BatchedMode)===NoMode){return Sync;}var priorityLevel=getCurrentPriorityLevel();if((mode&ConcurrentMode)===NoMode){return priorityLevel===ImmediatePriority?Sync:Batched;}if((executionContext&RenderContext)!==NoContext){// Use whatever time we're already rendering
// TODO: Should there be a way to opt out, like with `runWithPriority`?
return renderExpirationTime;}var expirationTime;if(suspenseConfig!==null){// Compute an expiration time based on the Suspense timeout.
expirationTime=computeSuspenseExpiration(currentTime,suspenseConfig.timeoutMs|0||LOW_PRIORITY_EXPIRATION);}else{// Compute an expiration time based on the Scheduler priority.
switch(priorityLevel){case ImmediatePriority:expirationTime=Sync;break;case UserBlockingPriority:// TODO: Rename this to computeUserBlockingExpiration
expirationTime=computeInteractiveExpiration(currentTime);break;case NormalPriority:case LowPriority:// TODO: Handle LowPriority
// TODO: Rename this to... something better.
expirationTime=computeAsyncExpiration(currentTime);break;case IdlePriority:expirationTime=Idle;break;default:{{throw Error("Expected a valid priority level");}}}}// If we're in the middle of rendering a tree, do not update at the same
// expiration time that is already rendering.
// TODO: We shouldn't have to do this if the update is on a different root.
// Refactor computeExpirationForFiber + scheduleUpdate so we have access to
// the root when we check for this condition.
if(workInProgressRoot!==null&&expirationTime===renderExpirationTime){// This is a trick to move this update into a separate batch
expirationTime-=1;}return expirationTime;}function scheduleUpdateOnFiber(fiber,expirationTime){checkForNestedUpdates();warnAboutInvalidUpdatesOnClassComponentsInDEV(fiber);var root=markUpdateTimeFromFiberToRoot(fiber,expirationTime);if(root===null){warnAboutUpdateOnUnmountedFiberInDEV(fiber);return;}checkForInterruption(fiber,expirationTime);recordScheduleUpdate();// TODO: computeExpirationForFiber also reads the priority. Pass the
// priority as an argument to that function and this one.
var priorityLevel=getCurrentPriorityLevel();if(expirationTime===Sync){if(// Check if we're inside unbatchedUpdates
(executionContext&LegacyUnbatchedContext)!==NoContext&&// Check if we're not already rendering
(executionContext&(RenderContext|CommitContext))===NoContext){// Register pending interactions on the root to avoid losing traced interaction data.
schedulePendingInteractions(root,expirationTime);// This is a legacy edge case. The initial mount of a ReactDOM.render-ed
// root inside of batchedUpdates should be synchronous, but layout updates
// should be deferred until the end of the batch.
performSyncWorkOnRoot(root);}else{ensureRootIsScheduled(root);schedulePendingInteractions(root,expirationTime);if(executionContext===NoContext){// Flush the synchronous work now, unless we're already working or inside
// a batch. This is intentionally inside scheduleUpdateOnFiber instead of
// scheduleCallbackForFiber to preserve the ability to schedule a callback
// without immediately flushing it. We only do this for user-initiated
// updates, to preserve historical behavior of sync mode.
flushSyncCallbackQueue();}}}else{ensureRootIsScheduled(root);schedulePendingInteractions(root,expirationTime);}if((executionContext&DiscreteEventContext)!==NoContext&&(// Only updates at user-blocking priority or greater are considered
// discrete, even inside a discrete event.
priorityLevel===UserBlockingPriority||priorityLevel===ImmediatePriority)){// This is the result of a discrete event. Track the lowest priority
// discrete update per root so we can flush them early, if needed.
if(rootsWithPendingDiscreteUpdates===null){rootsWithPendingDiscreteUpdates=new Map([[root,expirationTime]]);}else{var lastDiscreteTime=rootsWithPendingDiscreteUpdates.get(root);if(lastDiscreteTime===undefined||lastDiscreteTime>expirationTime){rootsWithPendingDiscreteUpdates.set(root,expirationTime);}}}}var scheduleWork=scheduleUpdateOnFiber;// This is split into a separate function so we can mark a fiber with pending
// work without treating it as a typical update that originates from an event;
// e.g. retrying a Suspense boundary isn't an update, but it does schedule work
// on a fiber.
function markUpdateTimeFromFiberToRoot(fiber,expirationTime){// Update the source fiber's expiration time
if(fiber.expirationTime<expirationTime){fiber.expirationTime=expirationTime;}var alternate=fiber.alternate;if(alternate!==null&&alternate.expirationTime<expirationTime){alternate.expirationTime=expirationTime;}// Walk the parent path to the root and update the child expiration time.
var node=fiber.return;var root=null;if(node===null&&fiber.tag===HostRoot){root=fiber.stateNode;}else{while(node!==null){alternate=node.alternate;if(node.childExpirationTime<expirationTime){node.childExpirationTime=expirationTime;if(alternate!==null&&alternate.childExpirationTime<expirationTime){alternate.childExpirationTime=expirationTime;}}else if(alternate!==null&&alternate.childExpirationTime<expirationTime){alternate.childExpirationTime=expirationTime;}if(node.return===null&&node.tag===HostRoot){root=node.stateNode;break;}node=node.return;}}if(root!==null){if(workInProgressRoot===root){// Received an update to a tree that's in the middle of rendering. Mark
// that's unprocessed work on this root.
markUnprocessedUpdateTime(expirationTime);if(workInProgressRootExitStatus===RootSuspendedWithDelay){// The root already suspended with a delay, which means this render
// definitely won't finish. Since we have a new update, let's mark it as
// suspended now, right before marking the incoming update. This has the
// effect of interrupting the current render and switching to the update.
// TODO: This happens to work when receiving an update during the render
// phase, because of the trick inside computeExpirationForFiber to
// subtract 1 from `renderExpirationTime` to move it into a
// separate bucket. But we should probably model it with an exception,
// using the same mechanism we use to force hydration of a subtree.
// TODO: This does not account for low pri updates that were already
// scheduled before the root started rendering. Need to track the next
// pending expiration time (perhaps by backtracking the return path) and
// then trigger a restart in the `renderDidSuspendDelayIfPossible` path.
markRootSuspendedAtTime(root,renderExpirationTime);}}// Mark that the root has a pending update.
markRootUpdatedAtTime(root,expirationTime);}return root;}function getNextRootExpirationTimeToWorkOn(root){// Determines the next expiration time that the root should render, taking
// into account levels that may be suspended, or levels that may have
// received a ping.
var lastExpiredTime=root.lastExpiredTime;if(lastExpiredTime!==NoWork){return lastExpiredTime;}// "Pending" refers to any update that hasn't committed yet, including if it
// suspended. The "suspended" range is therefore a subset.
var firstPendingTime=root.firstPendingTime;if(!isRootSuspendedAtTime(root,firstPendingTime)){// The highest priority pending time is not suspended. Let's work on that.
return firstPendingTime;}// If the first pending time is suspended, check if there's a lower priority
// pending level that we know about. Or check if we received a ping. Work
// on whichever is higher priority.
var lastPingedTime=root.lastPingedTime;var nextKnownPendingLevel=root.nextKnownPendingLevel;return lastPingedTime>nextKnownPendingLevel?lastPingedTime:nextKnownPendingLevel;}// Use this function to schedule a task for a root. There's only one task per
// root; if a task was already scheduled, we'll check to make sure the
// expiration time of the existing task is the same as the expiration time of
// the next level that the root has work on. This function is called on every
// update, and right before exiting a task.
function ensureRootIsScheduled(root){var lastExpiredTime=root.lastExpiredTime;if(lastExpiredTime!==NoWork){// Special case: Expired work should flush synchronously.
root.callbackExpirationTime=Sync;root.callbackPriority=ImmediatePriority;root.callbackNode=scheduleSyncCallback(performSyncWorkOnRoot.bind(null,root));return;}var expirationTime=getNextRootExpirationTimeToWorkOn(root);var existingCallbackNode=root.callbackNode;if(expirationTime===NoWork){// There's nothing to work on.
if(existingCallbackNode!==null){root.callbackNode=null;root.callbackExpirationTime=NoWork;root.callbackPriority=NoPriority;}return;}// TODO: If this is an update, we already read the current time. Pass the
// time as an argument.
var currentTime=requestCurrentTimeForUpdate();var priorityLevel=inferPriorityFromExpirationTime(currentTime,expirationTime);// If there's an existing render task, confirm it has the correct priority and
// expiration time. Otherwise, we'll cancel it and schedule a new one.
if(existingCallbackNode!==null){var existingCallbackPriority=root.callbackPriority;var existingCallbackExpirationTime=root.callbackExpirationTime;if(// Callback must have the exact same expiration time.
existingCallbackExpirationTime===expirationTime&&// Callback must have greater or equal priority.
existingCallbackPriority>=priorityLevel){// Existing callback is sufficient.
return;}// Need to schedule a new task.
// TODO: Instead of scheduling a new task, we should be able to change the
// priority of the existing one.
cancelCallback(existingCallbackNode);}root.callbackExpirationTime=expirationTime;root.callbackPriority=priorityLevel;var callbackNode;if(expirationTime===Sync){// Sync React callbacks are scheduled on a special internal queue
callbackNode=scheduleSyncCallback(performSyncWorkOnRoot.bind(null,root));}else if(disableSchedulerTimeoutBasedOnReactExpirationTime){callbackNode=scheduleCallback(priorityLevel,performConcurrentWorkOnRoot.bind(null,root));}else{callbackNode=scheduleCallback(priorityLevel,performConcurrentWorkOnRoot.bind(null,root),// Compute a task timeout based on the expiration time. This also affects
// ordering because tasks are processed in timeout order.
{timeout:expirationTimeToMs(expirationTime)-now$1()});}root.callbackNode=callbackNode;}// This is the entry point for every concurrent task, i.e. anything that
// goes through Scheduler.
function performConcurrentWorkOnRoot(root,didTimeout){// Since we know we're in a React event, we can clear the current
// event time. The next update will compute a new event time.
currentEventTime=NoWork;if(didTimeout){// The render task took too long to complete. Mark the current time as
// expired to synchronously render all expired work in a single batch.
var currentTime=requestCurrentTimeForUpdate();markRootExpiredAtTime(root,currentTime);// This will schedule a synchronous callback.
ensureRootIsScheduled(root);return null;}// Determine the next expiration time to work on, using the fields stored
// on the root.
var expirationTime=getNextRootExpirationTimeToWorkOn(root);if(expirationTime!==NoWork){var originalCallbackNode=root.callbackNode;if(!((executionContext&(RenderContext|CommitContext))===NoContext)){{throw Error("Should not already be working.");}}flushPassiveEffects();// If the root or expiration time have changed, throw out the existing stack
// and prepare a fresh one. Otherwise we'll continue where we left off.
if(root!==workInProgressRoot||expirationTime!==renderExpirationTime){prepareFreshStack(root,expirationTime);startWorkOnPendingInteractions(root,expirationTime);}// If we have a work-in-progress fiber, it means there's still work to do
// in this root.
if(workInProgress!==null){var prevExecutionContext=executionContext;executionContext|=RenderContext;var prevDispatcher=pushDispatcher(root);var prevInteractions=pushInteractions(root);startWorkLoopTimer(workInProgress);do{try{workLoopConcurrent();break;}catch(thrownValue){handleError(root,thrownValue);}}while(true);resetContextDependencies();executionContext=prevExecutionContext;popDispatcher(prevDispatcher);if(enableSchedulerTracing){popInteractions(prevInteractions);}if(workInProgressRootExitStatus===RootFatalErrored){var fatalError=workInProgressRootFatalError;stopInterruptedWorkLoopTimer();prepareFreshStack(root,expirationTime);markRootSuspendedAtTime(root,expirationTime);ensureRootIsScheduled(root);throw fatalError;}if(workInProgress!==null){// There's still work left over. Exit without committing.
stopInterruptedWorkLoopTimer();}else{// We now have a consistent tree. The next step is either to commit it,
// or, if something suspended, wait to commit it after a timeout.
stopFinishedWorkLoopTimer();var finishedWork=root.finishedWork=root.current.alternate;root.finishedExpirationTime=expirationTime;finishConcurrentRender(root,finishedWork,workInProgressRootExitStatus,expirationTime);}ensureRootIsScheduled(root);if(root.callbackNode===originalCallbackNode){// The task node scheduled for this root is the same one that's
// currently executed. Need to return a continuation.
return performConcurrentWorkOnRoot.bind(null,root);}}}return null;}function finishConcurrentRender(root,finishedWork,exitStatus,expirationTime){// Set this to null to indicate there's no in-progress render.
workInProgressRoot=null;switch(exitStatus){case RootIncomplete:case RootFatalErrored:{{{throw Error("Root did not complete. This is a bug in React.");}}}// Flow knows about invariant, so it complains if I add a break
// statement, but eslint doesn't know about invariant, so it complains
// if I do. eslint-disable-next-line no-fallthrough
case RootErrored:{// If this was an async render, the error may have happened due to
// a mutation in a concurrent event. Try rendering one more time,
// synchronously, to see if the error goes away. If there are
// lower priority updates, let's include those, too, in case they
// fix the inconsistency. Render at Idle to include all updates.
// If it was Idle or Never or some not-yet-invented time, render
// at that time.
markRootExpiredAtTime(root,expirationTime>Idle?Idle:expirationTime);// We assume that this second render pass will be synchronous
// and therefore not hit this path again.
break;}case RootSuspended:{markRootSuspendedAtTime(root,expirationTime);var lastSuspendedTime=root.lastSuspendedTime;if(expirationTime===lastSuspendedTime){root.nextKnownPendingLevel=getRemainingExpirationTime(finishedWork);}flushSuspensePriorityWarningInDEV();// We have an acceptable loading state. We need to figure out if we
// should immediately commit it or wait a bit.
// If we have processed new updates during this render, we may now
// have a new loading state ready. We want to ensure that we commit
// that as soon as possible.
var hasNotProcessedNewUpdates=workInProgressRootLatestProcessedExpirationTime===Sync;if(hasNotProcessedNewUpdates&&// do not delay if we're inside an act() scope
!( true&&flushSuspenseFallbacksInTests&&IsThisRendererActing.current)){// If we have not processed any new updates during this pass, then
// this is either a retry of an existing fallback state or a
// hidden tree. Hidden trees shouldn't be batched with other work
// and after that's fixed it can only be a retry. We're going to
// throttle committing retries so that we don't show too many
// loading states too quickly.
var msUntilTimeout=globalMostRecentFallbackTime+FALLBACK_THROTTLE_MS-now$1();// Don't bother with a very short suspense time.
if(msUntilTimeout>10){if(workInProgressRootHasPendingPing){var lastPingedTime=root.lastPingedTime;if(lastPingedTime===NoWork||lastPingedTime>=expirationTime){// This render was pinged but we didn't get to restart
// earlier so try restarting now instead.
root.lastPingedTime=expirationTime;prepareFreshStack(root,expirationTime);break;}}var nextTime=getNextRootExpirationTimeToWorkOn(root);if(nextTime!==NoWork&&nextTime!==expirationTime){// There's additional work on this root.
break;}if(lastSuspendedTime!==NoWork&&lastSuspendedTime!==expirationTime){// We should prefer to render the fallback of at the last
// suspended level. Ping the last suspended level to try
// rendering it again.
root.lastPingedTime=lastSuspendedTime;break;}// The render is suspended, it hasn't timed out, and there's no
// lower priority work to do. Instead of committing the fallback
// immediately, wait for more data to arrive.
root.timeoutHandle=scheduleTimeout(commitRoot.bind(null,root),msUntilTimeout);break;}}// The work expired. Commit immediately.
commitRoot(root);break;}case RootSuspendedWithDelay:{markRootSuspendedAtTime(root,expirationTime);var _lastSuspendedTime=root.lastSuspendedTime;if(expirationTime===_lastSuspendedTime){root.nextKnownPendingLevel=getRemainingExpirationTime(finishedWork);}flushSuspensePriorityWarningInDEV();if(// do not delay if we're inside an act() scope
!( true&&flushSuspenseFallbacksInTests&&IsThisRendererActing.current)){// We're suspended in a state that should be avoided. We'll try to
// avoid committing it for as long as the timeouts let us.
if(workInProgressRootHasPendingPing){var _lastPingedTime=root.lastPingedTime;if(_lastPingedTime===NoWork||_lastPingedTime>=expirationTime){// This render was pinged but we didn't get to restart earlier
// so try restarting now instead.
root.lastPingedTime=expirationTime;prepareFreshStack(root,expirationTime);break;}}var _nextTime=getNextRootExpirationTimeToWorkOn(root);if(_nextTime!==NoWork&&_nextTime!==expirationTime){// There's additional work on this root.
break;}if(_lastSuspendedTime!==NoWork&&_lastSuspendedTime!==expirationTime){// We should prefer to render the fallback of at the last
// suspended level. Ping the last suspended level to try
// rendering it again.
root.lastPingedTime=_lastSuspendedTime;break;}var _msUntilTimeout;if(workInProgressRootLatestSuspenseTimeout!==Sync){// We have processed a suspense config whose expiration time we
// can use as the timeout.
_msUntilTimeout=expirationTimeToMs(workInProgressRootLatestSuspenseTimeout)-now$1();}else if(workInProgressRootLatestProcessedExpirationTime===Sync){// This should never normally happen because only new updates
// cause delayed states, so we should have processed something.
// However, this could also happen in an offscreen tree.
_msUntilTimeout=0;}else{// If we don't have a suspense config, we're going to use a
// heuristic to determine how long we can suspend.
var eventTimeMs=inferTimeFromExpirationTime(workInProgressRootLatestProcessedExpirationTime);var currentTimeMs=now$1();var timeUntilExpirationMs=expirationTimeToMs(expirationTime)-currentTimeMs;var timeElapsed=currentTimeMs-eventTimeMs;if(timeElapsed<0){// We get this wrong some time since we estimate the time.
timeElapsed=0;}_msUntilTimeout=jnd(timeElapsed)-timeElapsed;// Clamp the timeout to the expiration time. TODO: Once the
// event time is exact instead of inferred from expiration time
// we don't need this.
if(timeUntilExpirationMs<_msUntilTimeout){_msUntilTimeout=timeUntilExpirationMs;}}// Don't bother with a very short suspense time.
if(_msUntilTimeout>10){// The render is suspended, it hasn't timed out, and there's no
// lower priority work to do. Instead of committing the fallback
// immediately, wait for more data to arrive.
root.timeoutHandle=scheduleTimeout(commitRoot.bind(null,root),_msUntilTimeout);break;}}// The work expired. Commit immediately.
commitRoot(root);break;}case RootCompleted:{// The work completed. Ready to commit.
if(// do not delay if we're inside an act() scope
!( true&&flushSuspenseFallbacksInTests&&IsThisRendererActing.current)&&workInProgressRootLatestProcessedExpirationTime!==Sync&&workInProgressRootCanSuspendUsingConfig!==null){// If we have exceeded the minimum loading delay, which probably
// means we have shown a spinner already, we might have to suspend
// a bit longer to ensure that the spinner is shown for
// enough time.
var _msUntilTimeout2=computeMsUntilSuspenseLoadingDelay(workInProgressRootLatestProcessedExpirationTime,expirationTime,workInProgressRootCanSuspendUsingConfig);if(_msUntilTimeout2>10){markRootSuspendedAtTime(root,expirationTime);root.timeoutHandle=scheduleTimeout(commitRoot.bind(null,root),_msUntilTimeout2);break;}}commitRoot(root);break;}default:{{{throw Error("Unknown root exit status.");}}}}}// This is the entry point for synchronous tasks that don't go
// through Scheduler
function performSyncWorkOnRoot(root){// Check if there's expired work on this root. Otherwise, render at Sync.
var lastExpiredTime=root.lastExpiredTime;var expirationTime=lastExpiredTime!==NoWork?lastExpiredTime:Sync;if(root.finishedExpirationTime===expirationTime){// There's already a pending commit at this expiration time.
// TODO: This is poorly factored. This case only exists for the
// batch.commit() API.
commitRoot(root);}else{if(!((executionContext&(RenderContext|CommitContext))===NoContext)){{throw Error("Should not already be working.");}}flushPassiveEffects();// If the root or expiration time have changed, throw out the existing stack
// and prepare a fresh one. Otherwise we'll continue where we left off.
if(root!==workInProgressRoot||expirationTime!==renderExpirationTime){prepareFreshStack(root,expirationTime);startWorkOnPendingInteractions(root,expirationTime);}// If we have a work-in-progress fiber, it means there's still work to do
// in this root.
if(workInProgress!==null){var prevExecutionContext=executionContext;executionContext|=RenderContext;var prevDispatcher=pushDispatcher(root);var prevInteractions=pushInteractions(root);startWorkLoopTimer(workInProgress);do{try{workLoopSync();break;}catch(thrownValue){handleError(root,thrownValue);}}while(true);resetContextDependencies();executionContext=prevExecutionContext;popDispatcher(prevDispatcher);if(enableSchedulerTracing){popInteractions(prevInteractions);}if(workInProgressRootExitStatus===RootFatalErrored){var fatalError=workInProgressRootFatalError;stopInterruptedWorkLoopTimer();prepareFreshStack(root,expirationTime);markRootSuspendedAtTime(root,expirationTime);ensureRootIsScheduled(root);throw fatalError;}if(workInProgress!==null){// This is a sync render, so we should have finished the whole tree.
{{throw Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");}}}else{// We now have a consistent tree. Because this is a sync render, we
// will commit it even if something suspended.
stopFinishedWorkLoopTimer();root.finishedWork=root.current.alternate;root.finishedExpirationTime=expirationTime;finishSyncRender(root,workInProgressRootExitStatus,expirationTime);}// Before exiting, make sure there's a callback scheduled for the next
// pending level.
ensureRootIsScheduled(root);}}return null;}function finishSyncRender(root,exitStatus,expirationTime){// Set this to null to indicate there's no in-progress render.
workInProgressRoot=null;{if(exitStatus===RootSuspended||exitStatus===RootSuspendedWithDelay){flushSuspensePriorityWarningInDEV();}}commitRoot(root);}function flushRoot(root,expirationTime){markRootExpiredAtTime(root,expirationTime);ensureRootIsScheduled(root);if((executionContext&(RenderContext|CommitContext))===NoContext){flushSyncCallbackQueue();}}function flushDiscreteUpdates(){// TODO: Should be able to flush inside batchedUpdates, but not inside `act`.
// However, `act` uses `batchedUpdates`, so there's no way to distinguish
// those two cases. Need to fix this before exposing flushDiscreteUpdates
// as a public API.
if((executionContext&(BatchedContext|RenderContext|CommitContext))!==NoContext){if( true&&(executionContext&RenderContext)!==NoContext){warning$1(false,'unstable_flushDiscreteUpdates: Cannot flush updates when React is '+'already rendering.');}// We're already rendering, so we can't synchronously flush pending work.
// This is probably a nested event dispatch triggered by a lifecycle/effect,
// like `el.focus()`. Exit.
return;}flushPendingDiscreteUpdates();// If the discrete updates scheduled passive effects, flush them now so that
// they fire before the next serial event.
flushPassiveEffects();}function deferredUpdates(fn){// TODO: Remove in favor of Scheduler.next
return runWithPriority(NormalPriority,fn);}function syncUpdates(fn,a,b,c){return runWithPriority(ImmediatePriority,fn.bind(null,a,b,c));}function flushPendingDiscreteUpdates(){if(rootsWithPendingDiscreteUpdates!==null){// For each root with pending discrete updates, schedule a callback to
// immediately flush them.
var roots=rootsWithPendingDiscreteUpdates;rootsWithPendingDiscreteUpdates=null;roots.forEach(function(expirationTime,root){markRootExpiredAtTime(root,expirationTime);ensureRootIsScheduled(root);});// Now flush the immediate queue.
flushSyncCallbackQueue();}}function batchedUpdates(fn,a){var prevExecutionContext=executionContext;executionContext|=BatchedContext;try{return fn(a);}finally{executionContext=prevExecutionContext;if(executionContext===NoContext){// Flush the immediate callbacks that were scheduled during this batch
flushSyncCallbackQueue();}}}function batchedEventUpdates(fn,a){var prevExecutionContext=executionContext;executionContext|=EventContext;try{return fn(a);}finally{executionContext=prevExecutionContext;if(executionContext===NoContext){// Flush the immediate callbacks that were scheduled during this batch
flushSyncCallbackQueue();}}}function discreteUpdates(fn,a,b,c){var prevExecutionContext=executionContext;executionContext|=DiscreteEventContext;try{// Should this
return runWithPriority(UserBlockingPriority,fn.bind(null,a,b,c));}finally{executionContext=prevExecutionContext;if(executionContext===NoContext){// Flush the immediate callbacks that were scheduled during this batch
flushSyncCallbackQueue();}}}function unbatchedUpdates(fn,a){var prevExecutionContext=executionContext;executionContext&=~BatchedContext;executionContext|=LegacyUnbatchedContext;try{return fn(a);}finally{executionContext=prevExecutionContext;if(executionContext===NoContext){// Flush the immediate callbacks that were scheduled during this batch
flushSyncCallbackQueue();}}}function flushSync(fn,a){if((executionContext&(RenderContext|CommitContext))!==NoContext){{{throw Error("flushSync was called from inside a lifecycle method. It cannot be called when React is already rendering.");}}}var prevExecutionContext=executionContext;executionContext|=BatchedContext;try{return runWithPriority(ImmediatePriority,fn.bind(null,a));}finally{executionContext=prevExecutionContext;// Flush the immediate callbacks that were scheduled during this batch.
// Note that this will happen even if batchedUpdates is higher up
// the stack.
flushSyncCallbackQueue();}}function flushControlled(fn){var prevExecutionContext=executionContext;executionContext|=BatchedContext;try{runWithPriority(ImmediatePriority,fn);}finally{executionContext=prevExecutionContext;if(executionContext===NoContext){// Flush the immediate callbacks that were scheduled during this batch
flushSyncCallbackQueue();}}}function prepareFreshStack(root,expirationTime){root.finishedWork=null;root.finishedExpirationTime=NoWork;var timeoutHandle=root.timeoutHandle;if(timeoutHandle!==noTimeout){// The root previous suspended and scheduled a timeout to commit a fallback
// state. Now that we have additional work, cancel the timeout.
root.timeoutHandle=noTimeout;// $FlowFixMe Complains noTimeout is not a TimeoutID, despite the check above
cancelTimeout(timeoutHandle);}if(workInProgress!==null){var interruptedWork=workInProgress.return;while(interruptedWork!==null){unwindInterruptedWork(interruptedWork);interruptedWork=interruptedWork.return;}}workInProgressRoot=root;workInProgress=createWorkInProgress(root.current,null,expirationTime);renderExpirationTime=expirationTime;workInProgressRootExitStatus=RootIncomplete;workInProgressRootFatalError=null;workInProgressRootLatestProcessedExpirationTime=Sync;workInProgressRootLatestSuspenseTimeout=Sync;workInProgressRootCanSuspendUsingConfig=null;workInProgressRootNextUnprocessedUpdateTime=NoWork;workInProgressRootHasPendingPing=false;if(enableSchedulerTracing){spawnedWorkDuringRender=null;}{ReactStrictModeWarnings.discardPendingWarnings();componentsThatTriggeredHighPriSuspend=null;}}function handleError(root,thrownValue){do{try{// Reset module-level state that was set during the render phase.
resetContextDependencies();resetHooks();resetCurrentFiber();if(workInProgress===null||workInProgress.return===null){// Expected to be working on a non-root fiber. This is a fatal error
// because there's no ancestor that can handle it; the root is
// supposed to capture all errors that weren't caught by an error
// boundary.
workInProgressRootExitStatus=RootFatalErrored;workInProgressRootFatalError=thrownValue;return null;}if(enableProfilerTimer&&workInProgress.mode&ProfileMode){// Record the time spent rendering before an error was thrown. This
// avoids inaccurate Profiler durations in the case of a
// suspended render.
stopProfilerTimerIfRunningAndRecordDelta(workInProgress,true);}throwException(root,workInProgress.return,workInProgress,thrownValue,renderExpirationTime);workInProgress=completeUnitOfWork(workInProgress);}catch(yetAnotherThrownValue){// Something in the return path also threw.
thrownValue=yetAnotherThrownValue;continue;}// Return to the normal work loop.
return;}while(true);}function pushDispatcher(root){var prevDispatcher=ReactCurrentDispatcher.current;ReactCurrentDispatcher.current=ContextOnlyDispatcher;if(prevDispatcher===null){// The React isomorphic package does not include a default dispatcher.
// Instead the first renderer will lazily attach one, in order to give
// nicer error messages.
return ContextOnlyDispatcher;}else{return prevDispatcher;}}function popDispatcher(prevDispatcher){ReactCurrentDispatcher.current=prevDispatcher;}function pushInteractions(root){if(enableSchedulerTracing){var prevInteractions=tracing.__interactionsRef.current;tracing.__interactionsRef.current=root.memoizedInteractions;return prevInteractions;}return null;}function popInteractions(prevInteractions){if(enableSchedulerTracing){tracing.__interactionsRef.current=prevInteractions;}}function markCommitTimeOfFallback(){globalMostRecentFallbackTime=now$1();}function markRenderEventTimeAndConfig(expirationTime,suspenseConfig){if(expirationTime<workInProgressRootLatestProcessedExpirationTime&&expirationTime>Idle){workInProgressRootLatestProcessedExpirationTime=expirationTime;}if(suspenseConfig!==null){if(expirationTime<workInProgressRootLatestSuspenseTimeout&&expirationTime>Idle){workInProgressRootLatestSuspenseTimeout=expirationTime;// Most of the time we only have one config and getting wrong is not bad.
workInProgressRootCanSuspendUsingConfig=suspenseConfig;}}}function markUnprocessedUpdateTime(expirationTime){if(expirationTime>workInProgressRootNextUnprocessedUpdateTime){workInProgressRootNextUnprocessedUpdateTime=expirationTime;}}function renderDidSuspend(){if(workInProgressRootExitStatus===RootIncomplete){workInProgressRootExitStatus=RootSuspended;}}function renderDidSuspendDelayIfPossible(){if(workInProgressRootExitStatus===RootIncomplete||workInProgressRootExitStatus===RootSuspended){workInProgressRootExitStatus=RootSuspendedWithDelay;}// Check if there's a lower priority update somewhere else in the tree.
if(workInProgressRootNextUnprocessedUpdateTime!==NoWork&&workInProgressRoot!==null){// Mark the current render as suspended, and then mark that there's a
// pending update.
// TODO: This should immediately interrupt the current render, instead
// of waiting until the next time we yield.
markRootSuspendedAtTime(workInProgressRoot,renderExpirationTime);markRootUpdatedAtTime(workInProgressRoot,workInProgressRootNextUnprocessedUpdateTime);}}function renderDidError(){if(workInProgressRootExitStatus!==RootCompleted){workInProgressRootExitStatus=RootErrored;}}// Called during render to determine if anything has suspended.
// Returns false if we're not sure.
function renderHasNotSuspendedYet(){// If something errored or completed, we can't really be sure,
// so those are false.
return workInProgressRootExitStatus===RootIncomplete;}function inferTimeFromExpirationTime(expirationTime){// We don't know exactly when the update was scheduled, but we can infer an
// approximate start time from the expiration time.
var earliestExpirationTimeMs=expirationTimeToMs(expirationTime);return earliestExpirationTimeMs-LOW_PRIORITY_EXPIRATION;}function inferTimeFromExpirationTimeWithSuspenseConfig(expirationTime,suspenseConfig){// We don't know exactly when the update was scheduled, but we can infer an
// approximate start time from the expiration time by subtracting the timeout
// that was added to the event time.
var earliestExpirationTimeMs=expirationTimeToMs(expirationTime);return earliestExpirationTimeMs-(suspenseConfig.timeoutMs|0||LOW_PRIORITY_EXPIRATION);}// The work loop is an extremely hot path. Tell Closure not to inline it.
/** @noinline */function workLoopSync(){// Already timed out, so perform work without checking if we need to yield.
while(workInProgress!==null){workInProgress=performUnitOfWork(workInProgress);}}/** @noinline */function workLoopConcurrent(){// Perform work until Scheduler asks us to yield
while(workInProgress!==null&&!shouldYield()){workInProgress=performUnitOfWork(workInProgress);}}function performUnitOfWork(unitOfWork){// The current, flushed, state of this fiber is the alternate. Ideally
// nothing should rely on this, but relying on it here means that we don't
// need an additional field on the work in progress.
var current$$1=unitOfWork.alternate;startWorkTimer(unitOfWork);setCurrentFiber(unitOfWork);var next;if(enableProfilerTimer&&(unitOfWork.mode&ProfileMode)!==NoMode){startProfilerTimer(unitOfWork);next=beginWork$$1(current$$1,unitOfWork,renderExpirationTime);stopProfilerTimerIfRunningAndRecordDelta(unitOfWork,true);}else{next=beginWork$$1(current$$1,unitOfWork,renderExpirationTime);}resetCurrentFiber();unitOfWork.memoizedProps=unitOfWork.pendingProps;if(next===null){// If this doesn't spawn new work, complete the current work.
next=completeUnitOfWork(unitOfWork);}ReactCurrentOwner$1.current=null;return next;}function completeUnitOfWork(unitOfWork){// Attempt to complete the current unit of work, then move to the next
// sibling. If there are no more siblings, return to the parent fiber.
workInProgress=unitOfWork;do{// The current, flushed, state of this fiber is the alternate. Ideally
// nothing should rely on this, but relying on it here means that we don't
// need an additional field on the work in progress.
var current$$1=workInProgress.alternate;var returnFiber=workInProgress.return;// Check if the work completed or if something threw.
if((workInProgress.effectTag&Incomplete)===NoEffect){setCurrentFiber(workInProgress);var next=void 0;if(!enableProfilerTimer||(workInProgress.mode&ProfileMode)===NoMode){next=completeWork(current$$1,workInProgress,renderExpirationTime);}else{startProfilerTimer(workInProgress);next=completeWork(current$$1,workInProgress,renderExpirationTime);// Update render duration assuming we didn't error.
stopProfilerTimerIfRunningAndRecordDelta(workInProgress,false);}stopWorkTimer(workInProgress);resetCurrentFiber();resetChildExpirationTime(workInProgress);if(next!==null){// Completing this fiber spawned new work. Work on that next.
return next;}if(returnFiber!==null&&// Do not append effects to parents if a sibling failed to complete
(returnFiber.effectTag&Incomplete)===NoEffect){// Append all the effects of the subtree and this fiber onto the effect
// list of the parent. The completion order of the children affects the
// side-effect order.
if(returnFiber.firstEffect===null){returnFiber.firstEffect=workInProgress.firstEffect;}if(workInProgress.lastEffect!==null){if(returnFiber.lastEffect!==null){returnFiber.lastEffect.nextEffect=workInProgress.firstEffect;}returnFiber.lastEffect=workInProgress.lastEffect;}// If this fiber had side-effects, we append it AFTER the children's
// side-effects. We can perform certain side-effects earlier if needed,
// by doing multiple passes over the effect list. We don't want to
// schedule our own side-effect on our own list because if end up
// reusing children we'll schedule this effect onto itself since we're
// at the end.
var effectTag=workInProgress.effectTag;// Skip both NoWork and PerformedWork tags when creating the effect
// list. PerformedWork effect is read by React DevTools but shouldn't be
// committed.
if(effectTag>PerformedWork){if(returnFiber.lastEffect!==null){returnFiber.lastEffect.nextEffect=workInProgress;}else{returnFiber.firstEffect=workInProgress;}returnFiber.lastEffect=workInProgress;}}}else{// This fiber did not complete because something threw. Pop values off
// the stack without entering the complete phase. If this is a boundary,
// capture values if possible.
var _next=unwindWork(workInProgress,renderExpirationTime);// Because this fiber did not complete, don't reset its expiration time.
if(enableProfilerTimer&&(workInProgress.mode&ProfileMode)!==NoMode){// Record the render duration for the fiber that errored.
stopProfilerTimerIfRunningAndRecordDelta(workInProgress,false);// Include the time spent working on failed children before continuing.
var actualDuration=workInProgress.actualDuration;var child=workInProgress.child;while(child!==null){actualDuration+=child.actualDuration;child=child.sibling;}workInProgress.actualDuration=actualDuration;}if(_next!==null){// If completing this work spawned new work, do that next. We'll come
// back here again.
// Since we're restarting, remove anything that is not a host effect
// from the effect tag.
// TODO: The name stopFailedWorkTimer is misleading because Suspense
// also captures and restarts.
stopFailedWorkTimer(workInProgress);_next.effectTag&=HostEffectMask;return _next;}stopWorkTimer(workInProgress);if(returnFiber!==null){// Mark the parent fiber as incomplete and clear its effect list.
returnFiber.firstEffect=returnFiber.lastEffect=null;returnFiber.effectTag|=Incomplete;}}var siblingFiber=workInProgress.sibling;if(siblingFiber!==null){// If there is more work to do in this returnFiber, do that next.
return siblingFiber;}// Otherwise, return to the parent
workInProgress=returnFiber;}while(workInProgress!==null);// We've reached the root.
if(workInProgressRootExitStatus===RootIncomplete){workInProgressRootExitStatus=RootCompleted;}return null;}function getRemainingExpirationTime(fiber){var updateExpirationTime=fiber.expirationTime;var childExpirationTime=fiber.childExpirationTime;return updateExpirationTime>childExpirationTime?updateExpirationTime:childExpirationTime;}function resetChildExpirationTime(completedWork){if(renderExpirationTime!==Never&&completedWork.childExpirationTime===Never){// The children of this component are hidden. Don't bubble their
// expiration times.
return;}var newChildExpirationTime=NoWork;// Bubble up the earliest expiration time.
if(enableProfilerTimer&&(completedWork.mode&ProfileMode)!==NoMode){// In profiling mode, resetChildExpirationTime is also used to reset
// profiler durations.
var actualDuration=completedWork.actualDuration;var treeBaseDuration=completedWork.selfBaseDuration;// When a fiber is cloned, its actualDuration is reset to 0. This value will
// only be updated if work is done on the fiber (i.e. it doesn't bailout).
// When work is done, it should bubble to the parent's actualDuration. If
// the fiber has not been cloned though, (meaning no work was done), then
// this value will reflect the amount of time spent working on a previous
// render. In that case it should not bubble. We determine whether it was
// cloned by comparing the child pointer.
var shouldBubbleActualDurations=completedWork.alternate===null||completedWork.child!==completedWork.alternate.child;var child=completedWork.child;while(child!==null){var childUpdateExpirationTime=child.expirationTime;var childChildExpirationTime=child.childExpirationTime;if(childUpdateExpirationTime>newChildExpirationTime){newChildExpirationTime=childUpdateExpirationTime;}if(childChildExpirationTime>newChildExpirationTime){newChildExpirationTime=childChildExpirationTime;}if(shouldBubbleActualDurations){actualDuration+=child.actualDuration;}treeBaseDuration+=child.treeBaseDuration;child=child.sibling;}completedWork.actualDuration=actualDuration;completedWork.treeBaseDuration=treeBaseDuration;}else{var _child=completedWork.child;while(_child!==null){var _childUpdateExpirationTime=_child.expirationTime;var _childChildExpirationTime=_child.childExpirationTime;if(_childUpdateExpirationTime>newChildExpirationTime){newChildExpirationTime=_childUpdateExpirationTime;}if(_childChildExpirationTime>newChildExpirationTime){newChildExpirationTime=_childChildExpirationTime;}_child=_child.sibling;}}completedWork.childExpirationTime=newChildExpirationTime;}function commitRoot(root){var renderPriorityLevel=getCurrentPriorityLevel();runWithPriority(ImmediatePriority,commitRootImpl.bind(null,root,renderPriorityLevel));return null;}function commitRootImpl(root,renderPriorityLevel){flushPassiveEffects();flushRenderPhaseStrictModeWarningsInDEV();if(!((executionContext&(RenderContext|CommitContext))===NoContext)){{throw Error("Should not already be working.");}}var finishedWork=root.finishedWork;var expirationTime=root.finishedExpirationTime;if(finishedWork===null){return null;}root.finishedWork=null;root.finishedExpirationTime=NoWork;if(!(finishedWork!==root.current)){{throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");}}// commitRoot never returns a continuation; it always finishes synchronously.
// So we can clear these now to allow a new callback to be scheduled.
root.callbackNode=null;root.callbackExpirationTime=NoWork;root.callbackPriority=NoPriority;root.nextKnownPendingLevel=NoWork;startCommitTimer();// Update the first and last pending times on this root. The new first
// pending time is whatever is left on the root fiber.
var remainingExpirationTimeBeforeCommit=getRemainingExpirationTime(finishedWork);markRootFinishedAtTime(root,expirationTime,remainingExpirationTimeBeforeCommit);if(root===workInProgressRoot){// We can reset these now that they are finished.
workInProgressRoot=null;workInProgress=null;renderExpirationTime=NoWork;}else{}// This indicates that the last root we worked on is not the same one that
// we're committing now. This most commonly happens when a suspended root
// times out.
// Get the list of effects.
var firstEffect;if(finishedWork.effectTag>PerformedWork){// A fiber's effect list consists only of its children, not itself. So if
// the root has an effect, we need to add it to the end of the list. The
// resulting list is the set that would belong to the root's parent, if it
// had one; that is, all the effects in the tree including the root.
if(finishedWork.lastEffect!==null){finishedWork.lastEffect.nextEffect=finishedWork;firstEffect=finishedWork.firstEffect;}else{firstEffect=finishedWork;}}else{// There is no effect on the root.
firstEffect=finishedWork.firstEffect;}if(firstEffect!==null){var prevExecutionContext=executionContext;executionContext|=CommitContext;var prevInteractions=pushInteractions(root);// Reset this to null before calling lifecycles
ReactCurrentOwner$1.current=null;// The commit phase is broken into several sub-phases. We do a separate pass
// of the effect list for each phase: all mutation effects come before all
// layout effects, and so on.
// The first phase a "before mutation" phase. We use this phase to read the
// state of the host tree right before we mutate it. This is where
// getSnapshotBeforeUpdate is called.
startCommitSnapshotEffectsTimer();prepareForCommit(root.containerInfo);nextEffect=firstEffect;do{{invokeGuardedCallback(null,commitBeforeMutationEffects,null);if(hasCaughtError()){if(!(nextEffect!==null)){{throw Error("Should be working on an effect.");}}var error=clearCaughtError();captureCommitPhaseError(nextEffect,error);nextEffect=nextEffect.nextEffect;}}}while(nextEffect!==null);stopCommitSnapshotEffectsTimer();if(enableProfilerTimer){// Mark the current commit time to be shared by all Profilers in this
// batch. This enables them to be grouped later.
recordCommitTime();}// The next phase is the mutation phase, where we mutate the host tree.
startCommitHostEffectsTimer();nextEffect=firstEffect;do{{invokeGuardedCallback(null,commitMutationEffects,null,root,renderPriorityLevel);if(hasCaughtError()){if(!(nextEffect!==null)){{throw Error("Should be working on an effect.");}}var _error=clearCaughtError();captureCommitPhaseError(nextEffect,_error);nextEffect=nextEffect.nextEffect;}}}while(nextEffect!==null);stopCommitHostEffectsTimer();resetAfterCommit(root.containerInfo);// The work-in-progress tree is now the current tree. This must come after
// the mutation phase, so that the previous tree is still current during
// componentWillUnmount, but before the layout phase, so that the finished
// work is current during componentDidMount/Update.
root.current=finishedWork;// The next phase is the layout phase, where we call effects that read
// the host tree after it's been mutated. The idiomatic use case for this is
// layout, but class component lifecycles also fire here for legacy reasons.
startCommitLifeCyclesTimer();nextEffect=firstEffect;do{{invokeGuardedCallback(null,commitLayoutEffects,null,root,expirationTime);if(hasCaughtError()){if(!(nextEffect!==null)){{throw Error("Should be working on an effect.");}}var _error2=clearCaughtError();captureCommitPhaseError(nextEffect,_error2);nextEffect=nextEffect.nextEffect;}}}while(nextEffect!==null);stopCommitLifeCyclesTimer();nextEffect=null;// Tell Scheduler to yield at the end of the frame, so the browser has an
// opportunity to paint.
requestPaint();if(enableSchedulerTracing){popInteractions(prevInteractions);}executionContext=prevExecutionContext;}else{// No effects.
root.current=finishedWork;// Measure these anyway so the flamegraph explicitly shows that there were
// no effects.
// TODO: Maybe there's a better way to report this.
startCommitSnapshotEffectsTimer();stopCommitSnapshotEffectsTimer();if(enableProfilerTimer){recordCommitTime();}startCommitHostEffectsTimer();stopCommitHostEffectsTimer();startCommitLifeCyclesTimer();stopCommitLifeCyclesTimer();}stopCommitTimer();var rootDidHavePassiveEffects=rootDoesHavePassiveEffects;if(rootDoesHavePassiveEffects){// This commit has passive effects. Stash a reference to them. But don't
// schedule a callback until after flushing layout work.
rootDoesHavePassiveEffects=false;rootWithPendingPassiveEffects=root;pendingPassiveEffectsExpirationTime=expirationTime;pendingPassiveEffectsRenderPriority=renderPriorityLevel;}else{// We are done with the effect chain at this point so let's clear the
// nextEffect pointers to assist with GC. If we have passive effects, we'll
// clear this in flushPassiveEffects.
nextEffect=firstEffect;while(nextEffect!==null){var nextNextEffect=nextEffect.nextEffect;nextEffect.nextEffect=null;nextEffect=nextNextEffect;}}// Check if there's remaining work on this root
var remainingExpirationTime=root.firstPendingTime;if(remainingExpirationTime!==NoWork){if(enableSchedulerTracing){if(spawnedWorkDuringRender!==null){var expirationTimes=spawnedWorkDuringRender;spawnedWorkDuringRender=null;for(var i=0;i<expirationTimes.length;i++){scheduleInteractions(root,expirationTimes[i],root.memoizedInteractions);}}schedulePendingInteractions(root,remainingExpirationTime);}}else{// If there's no remaining work, we can clear the set of already failed
// error boundaries.
legacyErrorBoundariesThatAlreadyFailed=null;}if(enableSchedulerTracing){if(!rootDidHavePassiveEffects){// If there are no passive effects, then we can complete the pending interactions.
// Otherwise, we'll wait until after the passive effects are flushed.
// Wait to do this until after remaining work has been scheduled,
// so that we don't prematurely signal complete for interactions when there's e.g. hidden work.
finishPendingInteractions(root,expirationTime);}}if(remainingExpirationTime===Sync){// Count the number of times the root synchronously re-renders without
// finishing. If there are too many, it indicates an infinite update loop.
if(root===rootWithNestedUpdates){nestedUpdateCount++;}else{nestedUpdateCount=0;rootWithNestedUpdates=root;}}else{nestedUpdateCount=0;}onCommitRoot(finishedWork.stateNode,expirationTime);// Always call this before exiting `commitRoot`, to ensure that any
// additional work on this root is scheduled.
ensureRootIsScheduled(root);if(hasUncaughtError){hasUncaughtError=false;var _error3=firstUncaughtError;firstUncaughtError=null;throw _error3;}if((executionContext&LegacyUnbatchedContext)!==NoContext){// This is a legacy edge case. We just committed the initial mount of
// a ReactDOM.render-ed root inside of batchedUpdates. The commit fired
// synchronously, but layout updates should be deferred until the end
// of the batch.
return null;}// If layout work was scheduled, flush it now.
flushSyncCallbackQueue();return null;}function commitBeforeMutationEffects(){while(nextEffect!==null){var effectTag=nextEffect.effectTag;if((effectTag&Snapshot)!==NoEffect){setCurrentFiber(nextEffect);recordEffect();var current$$1=nextEffect.alternate;commitBeforeMutationLifeCycles(current$$1,nextEffect);resetCurrentFiber();}if((effectTag&Passive)!==NoEffect){// If there are passive effects, schedule a callback to flush at
// the earliest opportunity.
if(!rootDoesHavePassiveEffects){rootDoesHavePassiveEffects=true;scheduleCallback(NormalPriority,function(){flushPassiveEffects();return null;});}}nextEffect=nextEffect.nextEffect;}}function commitMutationEffects(root,renderPriorityLevel){// TODO: Should probably move the bulk of this function to commitWork.
while(nextEffect!==null){setCurrentFiber(nextEffect);var effectTag=nextEffect.effectTag;if(effectTag&ContentReset){commitResetTextContent(nextEffect);}if(effectTag&Ref){var current$$1=nextEffect.alternate;if(current$$1!==null){commitDetachRef(current$$1);}}// The following switch statement is only concerned about placement,
// updates, and deletions. To avoid needing to add a case for every possible
// bitmap value, we remove the secondary effects from the effect tag and
// switch on that value.
var primaryEffectTag=effectTag&(Placement|Update|Deletion|Hydrating);switch(primaryEffectTag){case Placement:{commitPlacement(nextEffect);// Clear the "placement" from effect tag so that we know that this is
// inserted, before any life-cycles like componentDidMount gets called.
// TODO: findDOMNode doesn't rely on this any more but isMounted does
// and isMounted is deprecated anyway so we should be able to kill this.
nextEffect.effectTag&=~Placement;break;}case PlacementAndUpdate:{// Placement
commitPlacement(nextEffect);// Clear the "placement" from effect tag so that we know that this is
// inserted, before any life-cycles like componentDidMount gets called.
nextEffect.effectTag&=~Placement;// Update
var _current=nextEffect.alternate;commitWork(_current,nextEffect);break;}case Hydrating:{nextEffect.effectTag&=~Hydrating;break;}case HydratingAndUpdate:{nextEffect.effectTag&=~Hydrating;// Update
var _current2=nextEffect.alternate;commitWork(_current2,nextEffect);break;}case Update:{var _current3=nextEffect.alternate;commitWork(_current3,nextEffect);break;}case Deletion:{commitDeletion(root,nextEffect,renderPriorityLevel);break;}}// TODO: Only record a mutation effect if primaryEffectTag is non-zero.
recordEffect();resetCurrentFiber();nextEffect=nextEffect.nextEffect;}}function commitLayoutEffects(root,committedExpirationTime){// TODO: Should probably move the bulk of this function to commitWork.
while(nextEffect!==null){setCurrentFiber(nextEffect);var effectTag=nextEffect.effectTag;if(effectTag&(Update|Callback)){recordEffect();var current$$1=nextEffect.alternate;commitLifeCycles(root,current$$1,nextEffect,committedExpirationTime);}if(effectTag&Ref){recordEffect();commitAttachRef(nextEffect);}resetCurrentFiber();nextEffect=nextEffect.nextEffect;}}function flushPassiveEffects(){if(pendingPassiveEffectsRenderPriority!==NoPriority){var priorityLevel=pendingPassiveEffectsRenderPriority>NormalPriority?NormalPriority:pendingPassiveEffectsRenderPriority;pendingPassiveEffectsRenderPriority=NoPriority;return runWithPriority(priorityLevel,flushPassiveEffectsImpl);}}function flushPassiveEffectsImpl(){if(rootWithPendingPassiveEffects===null){return false;}var root=rootWithPendingPassiveEffects;var expirationTime=pendingPassiveEffectsExpirationTime;rootWithPendingPassiveEffects=null;pendingPassiveEffectsExpirationTime=NoWork;if(!((executionContext&(RenderContext|CommitContext))===NoContext)){{throw Error("Cannot flush passive effects while already rendering.");}}var prevExecutionContext=executionContext;executionContext|=CommitContext;var prevInteractions=pushInteractions(root);// Note: This currently assumes there are no passive effects on the root
// fiber, because the root is not part of its own effect list. This could
// change in the future.
var effect=root.current.firstEffect;while(effect!==null){{setCurrentFiber(effect);invokeGuardedCallback(null,commitPassiveHookEffects,null,effect);if(hasCaughtError()){if(!(effect!==null)){{throw Error("Should be working on an effect.");}}var error=clearCaughtError();captureCommitPhaseError(effect,error);}resetCurrentFiber();}var nextNextEffect=effect.nextEffect;// Remove nextEffect pointer to assist GC
effect.nextEffect=null;effect=nextNextEffect;}if(enableSchedulerTracing){popInteractions(prevInteractions);finishPendingInteractions(root,expirationTime);}executionContext=prevExecutionContext;flushSyncCallbackQueue();// If additional passive effects were scheduled, increment a counter. If this
// exceeds the limit, we'll fire a warning.
nestedPassiveUpdateCount=rootWithPendingPassiveEffects===null?0:nestedPassiveUpdateCount+1;return true;}function isAlreadyFailedLegacyErrorBoundary(instance){return legacyErrorBoundariesThatAlreadyFailed!==null&&legacyErrorBoundariesThatAlreadyFailed.has(instance);}function markLegacyErrorBoundaryAsFailed(instance){if(legacyErrorBoundariesThatAlreadyFailed===null){legacyErrorBoundariesThatAlreadyFailed=new Set([instance]);}else{legacyErrorBoundariesThatAlreadyFailed.add(instance);}}function prepareToThrowUncaughtError(error){if(!hasUncaughtError){hasUncaughtError=true;firstUncaughtError=error;}}var onUncaughtError=prepareToThrowUncaughtError;function captureCommitPhaseErrorOnRoot(rootFiber,sourceFiber,error){var errorInfo=createCapturedValue(error,sourceFiber);var update=createRootErrorUpdate(rootFiber,errorInfo,Sync);enqueueUpdate(rootFiber,update);var root=markUpdateTimeFromFiberToRoot(rootFiber,Sync);if(root!==null){ensureRootIsScheduled(root);schedulePendingInteractions(root,Sync);}}function captureCommitPhaseError(sourceFiber,error){if(sourceFiber.tag===HostRoot){// Error was thrown at the root. There is no parent, so the root
// itself should capture it.
captureCommitPhaseErrorOnRoot(sourceFiber,sourceFiber,error);return;}var fiber=sourceFiber.return;while(fiber!==null){if(fiber.tag===HostRoot){captureCommitPhaseErrorOnRoot(fiber,sourceFiber,error);return;}else if(fiber.tag===ClassComponent){var ctor=fiber.type;var instance=fiber.stateNode;if(typeof ctor.getDerivedStateFromError==='function'||typeof instance.componentDidCatch==='function'&&!isAlreadyFailedLegacyErrorBoundary(instance)){var errorInfo=createCapturedValue(error,sourceFiber);var update=createClassErrorUpdate(fiber,errorInfo,// TODO: This is always sync
Sync);enqueueUpdate(fiber,update);var root=markUpdateTimeFromFiberToRoot(fiber,Sync);if(root!==null){ensureRootIsScheduled(root);schedulePendingInteractions(root,Sync);}return;}}fiber=fiber.return;}}function pingSuspendedRoot(root,thenable,suspendedTime){var pingCache=root.pingCache;if(pingCache!==null){// The thenable resolved, so we no longer need to memoize, because it will
// never be thrown again.
pingCache.delete(thenable);}if(workInProgressRoot===root&&renderExpirationTime===suspendedTime){// Received a ping at the same priority level at which we're currently
// rendering. We might want to restart this render. This should mirror
// the logic of whether or not a root suspends once it completes.
// TODO: If we're rendering sync either due to Sync, Batched or expired,
// we should probably never restart.
// If we're suspended with delay, we'll always suspend so we can always
// restart. If we're suspended without any updates, it might be a retry.
// If it's early in the retry we can restart. We can't know for sure
// whether we'll eventually process an update during this render pass,
// but it's somewhat unlikely that we get to a ping before that, since
// getting to the root most update is usually very fast.
if(workInProgressRootExitStatus===RootSuspendedWithDelay||workInProgressRootExitStatus===RootSuspended&&workInProgressRootLatestProcessedExpirationTime===Sync&&now$1()-globalMostRecentFallbackTime<FALLBACK_THROTTLE_MS){// Restart from the root. Don't need to schedule a ping because
// we're already working on this tree.
prepareFreshStack(root,renderExpirationTime);}else{// Even though we can't restart right now, we might get an
// opportunity later. So we mark this render as having a ping.
workInProgressRootHasPendingPing=true;}return;}if(!isRootSuspendedAtTime(root,suspendedTime)){// The root is no longer suspended at this time.
return;}var lastPingedTime=root.lastPingedTime;if(lastPingedTime!==NoWork&&lastPingedTime<suspendedTime){// There's already a lower priority ping scheduled.
return;}// Mark the time at which this ping was scheduled.
root.lastPingedTime=suspendedTime;if(root.finishedExpirationTime===suspendedTime){// If there's a pending fallback waiting to commit, throw it away.
root.finishedExpirationTime=NoWork;root.finishedWork=null;}ensureRootIsScheduled(root);schedulePendingInteractions(root,suspendedTime);}function retryTimedOutBoundary(boundaryFiber,retryTime){// The boundary fiber (a Suspense component or SuspenseList component)
// previously was rendered in its fallback state. One of the promises that
// suspended it has resolved, which means at least part of the tree was
// likely unblocked. Try rendering again, at a new expiration time.
if(retryTime===NoWork){var suspenseConfig=null;// Retries don't carry over the already committed update.
var currentTime=requestCurrentTimeForUpdate();retryTime=computeExpirationForFiber(currentTime,boundaryFiber,suspenseConfig);}// TODO: Special case idle priority?
var root=markUpdateTimeFromFiberToRoot(boundaryFiber,retryTime);if(root!==null){ensureRootIsScheduled(root);schedulePendingInteractions(root,retryTime);}}function retryDehydratedSuspenseBoundary(boundaryFiber){var suspenseState=boundaryFiber.memoizedState;var retryTime=NoWork;if(suspenseState!==null){retryTime=suspenseState.retryTime;}retryTimedOutBoundary(boundaryFiber,retryTime);}function resolveRetryThenable(boundaryFiber,thenable){var retryTime=NoWork;// Default
var retryCache;if(enableSuspenseServerRenderer){switch(boundaryFiber.tag){case SuspenseComponent:retryCache=boundaryFiber.stateNode;var suspenseState=boundaryFiber.memoizedState;if(suspenseState!==null){retryTime=suspenseState.retryTime;}break;case SuspenseListComponent:retryCache=boundaryFiber.stateNode;break;default:{{throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.");}}}}else{retryCache=boundaryFiber.stateNode;}if(retryCache!==null){// The thenable resolved, so we no longer need to memoize, because it will
// never be thrown again.
retryCache.delete(thenable);}retryTimedOutBoundary(boundaryFiber,retryTime);}// Computes the next Just Noticeable Difference (JND) boundary.
// The theory is that a person can't tell the difference between small differences in time.
// Therefore, if we wait a bit longer than necessary that won't translate to a noticeable
// difference in the experience. However, waiting for longer might mean that we can avoid
// showing an intermediate loading state. The longer we have already waited, the harder it
// is to tell small differences in time. Therefore, the longer we've already waited,
// the longer we can wait additionally. At some point we have to give up though.
// We pick a train model where the next boundary commits at a consistent schedule.
// These particular numbers are vague estimates. We expect to adjust them based on research.
function jnd(timeElapsed){return timeElapsed<120?120:timeElapsed<480?480:timeElapsed<1080?1080:timeElapsed<1920?1920:timeElapsed<3000?3000:timeElapsed<4320?4320:ceil(timeElapsed/1960)*1960;}function computeMsUntilSuspenseLoadingDelay(mostRecentEventTime,committedExpirationTime,suspenseConfig){var busyMinDurationMs=suspenseConfig.busyMinDurationMs|0;if(busyMinDurationMs<=0){return 0;}var busyDelayMs=suspenseConfig.busyDelayMs|0;// Compute the time until this render pass would expire.
var currentTimeMs=now$1();var eventTimeMs=inferTimeFromExpirationTimeWithSuspenseConfig(mostRecentEventTime,suspenseConfig);var timeElapsed=currentTimeMs-eventTimeMs;if(timeElapsed<=busyDelayMs){// If we haven't yet waited longer than the initial delay, we don't
// have to wait any additional time.
return 0;}var msUntilTimeout=busyDelayMs+busyMinDurationMs-timeElapsed;// This is the value that is passed to `setTimeout`.
return msUntilTimeout;}function checkForNestedUpdates(){if(nestedUpdateCount>NESTED_UPDATE_LIMIT){nestedUpdateCount=0;rootWithNestedUpdates=null;{{throw Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");}}}{if(nestedPassiveUpdateCount>NESTED_PASSIVE_UPDATE_LIMIT){nestedPassiveUpdateCount=0;warning$1(false,'Maximum update depth exceeded. This can happen when a component '+"calls setState inside useEffect, but useEffect either doesn't "+'have a dependency array, or one of the dependencies changes on '+'every render.');}}}function flushRenderPhaseStrictModeWarningsInDEV(){{ReactStrictModeWarnings.flushLegacyContextWarning();if(warnAboutDeprecatedLifecycles){ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings();}}}function stopFinishedWorkLoopTimer(){var didCompleteRoot=true;stopWorkLoopTimer(interruptedBy,didCompleteRoot);interruptedBy=null;}function stopInterruptedWorkLoopTimer(){// TODO: Track which fiber caused the interruption.
var didCompleteRoot=false;stopWorkLoopTimer(interruptedBy,didCompleteRoot);interruptedBy=null;}function checkForInterruption(fiberThatReceivedUpdate,updateExpirationTime){if(enableUserTimingAPI&&workInProgressRoot!==null&&updateExpirationTime>renderExpirationTime){interruptedBy=fiberThatReceivedUpdate;}}var didWarnStateUpdateForUnmountedComponent=null;function warnAboutUpdateOnUnmountedFiberInDEV(fiber){{var tag=fiber.tag;if(tag!==HostRoot&&tag!==ClassComponent&&tag!==FunctionComponent&&tag!==ForwardRef&&tag!==MemoComponent&&tag!==SimpleMemoComponent){// Only warn for user-defined components, not internal ones like Suspense.
return;}// We show the whole stack but dedupe on the top component's name because
// the problematic code almost always lies inside that component.
var componentName=getComponentName(fiber.type)||'ReactComponent';if(didWarnStateUpdateForUnmountedComponent!==null){if(didWarnStateUpdateForUnmountedComponent.has(componentName)){return;}didWarnStateUpdateForUnmountedComponent.add(componentName);}else{didWarnStateUpdateForUnmountedComponent=new Set([componentName]);}warningWithoutStack$1(false,"Can't perform a React state update on an unmounted component. This "+'is a no-op, but it indicates a memory leak in your application. To '+'fix, cancel all subscriptions and asynchronous tasks in %s.%s',tag===ClassComponent?'the componentWillUnmount method':'a useEffect cleanup function',getStackByFiberInDevAndProd(fiber));}}var beginWork$$1;if( true&&replayFailedUnitOfWorkWithInvokeGuardedCallback){var dummyFiber=null;beginWork$$1=function beginWork$$1(current$$1,unitOfWork,expirationTime){// If a component throws an error, we replay it again in a synchronously
// dispatched event, so that the debugger will treat it as an uncaught
// error See ReactErrorUtils for more information.
// Before entering the begin phase, copy the work-in-progress onto a dummy
// fiber. If beginWork throws, we'll use this to reset the state.
var originalWorkInProgressCopy=assignFiberPropertiesInDEV(dummyFiber,unitOfWork);try{return beginWork$1(current$$1,unitOfWork,expirationTime);}catch(originalError){if(originalError!==null&&_typeof(originalError)==='object'&&typeof originalError.then==='function'){// Don't replay promises. Treat everything else like an error.
throw originalError;}// Keep this code in sync with handleError; any changes here must have
// corresponding changes there.
resetContextDependencies();resetHooks();// Don't reset current debug fiber, since we're about to work on the
// same fiber again.
// Unwind the failed stack frame
unwindInterruptedWork(unitOfWork);// Restore the original properties of the fiber.
assignFiberPropertiesInDEV(unitOfWork,originalWorkInProgressCopy);if(enableProfilerTimer&&unitOfWork.mode&ProfileMode){// Reset the profiler timer.
startProfilerTimer(unitOfWork);}// Run beginWork again.
invokeGuardedCallback(null,beginWork$1,null,current$$1,unitOfWork,expirationTime);if(hasCaughtError()){var replayError=clearCaughtError();// `invokeGuardedCallback` sometimes sets an expando `_suppressLogging`.
// Rethrow this error instead of the original one.
throw replayError;}else{// This branch is reachable if the render phase is impure.
throw originalError;}}};}else{beginWork$$1=beginWork$1;}var didWarnAboutUpdateInRender=false;var didWarnAboutUpdateInGetChildContext=false;function warnAboutInvalidUpdatesOnClassComponentsInDEV(fiber){{if(fiber.tag===ClassComponent){switch(phase){case'getChildContext':if(didWarnAboutUpdateInGetChildContext){return;}warningWithoutStack$1(false,'setState(...): Cannot call setState() inside getChildContext()');didWarnAboutUpdateInGetChildContext=true;break;case'render':if(didWarnAboutUpdateInRender){return;}warningWithoutStack$1(false,'Cannot update during an existing state transition (such as '+'within `render`). Render methods should be a pure function of '+'props and state.');didWarnAboutUpdateInRender=true;break;}}}}// a 'shared' variable that changes when act() opens/closes in tests.
var IsThisRendererActing={current:false};function warnIfNotScopedWithMatchingAct(fiber){{if(warnsIfNotActing===true&&IsSomeRendererActing.current===true&&IsThisRendererActing.current!==true){warningWithoutStack$1(false,"It looks like you're using the wrong act() around your test interactions.\n"+'Be sure to use the matching version of act() corresponding to your renderer:\n\n'+'// for react-dom:\n'+"import {act} from 'react-dom/test-utils';\n"+'// ...\n'+'act(() => ...);\n\n'+'// for react-test-renderer:\n'+"import TestRenderer from 'react-test-renderer';\n"+'const {act} = TestRenderer;\n'+'// ...\n'+'act(() => ...);'+'%s',getStackByFiberInDevAndProd(fiber));}}}function warnIfNotCurrentlyActingEffectsInDEV(fiber){{if(warnsIfNotActing===true&&(fiber.mode&StrictMode)!==NoMode&&IsSomeRendererActing.current===false&&IsThisRendererActing.current===false){warningWithoutStack$1(false,'An update to %s ran an effect, but was not wrapped in act(...).\n\n'+'When testing, code that causes React state updates should be '+'wrapped into act(...):\n\n'+'act(() => {\n'+'  /* fire events that update state */\n'+'});\n'+'/* assert on the output */\n\n'+"This ensures that you're testing the behavior the user would see "+'in the browser.'+' Learn more at https://fb.me/react-wrap-tests-with-act'+'%s',getComponentName(fiber.type),getStackByFiberInDevAndProd(fiber));}}}function warnIfNotCurrentlyActingUpdatesInDEV(fiber){{if(warnsIfNotActing===true&&executionContext===NoContext&&IsSomeRendererActing.current===false&&IsThisRendererActing.current===false){warningWithoutStack$1(false,'An update to %s inside a test was not wrapped in act(...).\n\n'+'When testing, code that causes React state updates should be '+'wrapped into act(...):\n\n'+'act(() => {\n'+'  /* fire events that update state */\n'+'});\n'+'/* assert on the output */\n\n'+"This ensures that you're testing the behavior the user would see "+'in the browser.'+' Learn more at https://fb.me/react-wrap-tests-with-act'+'%s',getComponentName(fiber.type),getStackByFiberInDevAndProd(fiber));}}}var warnIfNotCurrentlyActingUpdatesInDev=warnIfNotCurrentlyActingUpdatesInDEV;// In tests, we want to enforce a mocked scheduler.
var didWarnAboutUnmockedScheduler=false;// TODO Before we release concurrent mode, revisit this and decide whether a mocked
// scheduler is the actual recommendation. The alternative could be a testing build,
// a new lib, or whatever; we dunno just yet. This message is for early adopters
// to get their tests right.
function warnIfUnmockedScheduler(fiber){{if(didWarnAboutUnmockedScheduler===false&&Scheduler.unstable_flushAllWithoutAsserting===undefined){if(fiber.mode&BatchedMode||fiber.mode&ConcurrentMode){didWarnAboutUnmockedScheduler=true;warningWithoutStack$1(false,'In Concurrent or Sync modes, the "scheduler" module needs to be mocked '+'to guarantee consistent behaviour across tests and browsers. '+'For example, with jest: \n'+"jest.mock('scheduler', () => require('scheduler/unstable_mock'));\n\n"+'For more info, visit https://fb.me/react-mock-scheduler');}else if(warnAboutUnmockedScheduler===true){didWarnAboutUnmockedScheduler=true;warningWithoutStack$1(false,'Starting from React v17, the "scheduler" module will need to be mocked '+'to guarantee consistent behaviour across tests and browsers. '+'For example, with jest: \n'+"jest.mock('scheduler', () => require('scheduler/unstable_mock'));\n\n"+'For more info, visit https://fb.me/react-mock-scheduler');}}}}var componentsThatTriggeredHighPriSuspend=null;function checkForWrongSuspensePriorityInDEV(sourceFiber){{var currentPriorityLevel=getCurrentPriorityLevel();if((sourceFiber.mode&ConcurrentMode)!==NoEffect&&(currentPriorityLevel===UserBlockingPriority||currentPriorityLevel===ImmediatePriority)){var workInProgressNode=sourceFiber;while(workInProgressNode!==null){// Add the component that triggered the suspense
var current$$1=workInProgressNode.alternate;if(current$$1!==null){// TODO: warn component that triggers the high priority
// suspend is the HostRoot
switch(workInProgressNode.tag){case ClassComponent:// Loop through the component's update queue and see whether the component
// has triggered any high priority updates
var updateQueue=current$$1.updateQueue;if(updateQueue!==null){var update=updateQueue.firstUpdate;while(update!==null){var priorityLevel=update.priority;if(priorityLevel===UserBlockingPriority||priorityLevel===ImmediatePriority){if(componentsThatTriggeredHighPriSuspend===null){componentsThatTriggeredHighPriSuspend=new Set([getComponentName(workInProgressNode.type)]);}else{componentsThatTriggeredHighPriSuspend.add(getComponentName(workInProgressNode.type));}break;}update=update.next;}}break;case FunctionComponent:case ForwardRef:case SimpleMemoComponent:if(workInProgressNode.memoizedState!==null&&workInProgressNode.memoizedState.baseUpdate!==null){var _update=workInProgressNode.memoizedState.baseUpdate;// Loop through the functional component's memoized state to see whether
// the component has triggered any high pri updates
while(_update!==null){var priority=_update.priority;if(priority===UserBlockingPriority||priority===ImmediatePriority){if(componentsThatTriggeredHighPriSuspend===null){componentsThatTriggeredHighPriSuspend=new Set([getComponentName(workInProgressNode.type)]);}else{componentsThatTriggeredHighPriSuspend.add(getComponentName(workInProgressNode.type));}break;}if(_update.next===workInProgressNode.memoizedState.baseUpdate){break;}_update=_update.next;}}break;default:break;}}workInProgressNode=workInProgressNode.return;}}}}function flushSuspensePriorityWarningInDEV(){{if(componentsThatTriggeredHighPriSuspend!==null){var componentNames=[];componentsThatTriggeredHighPriSuspend.forEach(function(name){return componentNames.push(name);});componentsThatTriggeredHighPriSuspend=null;if(componentNames.length>0){warningWithoutStack$1(false,'%s triggered a user-blocking update that suspended.'+'\n\n'+'The fix is to split the update into multiple parts: a user-blocking '+'update to provide immediate feedback, and another update that '+'triggers the bulk of the changes.'+'\n\n'+'Refer to the documentation for useTransition to learn how '+'to implement this pattern.',// TODO: Add link to React docs with more information, once it exists
componentNames.sort().join(', '));}}}}function computeThreadID(root,expirationTime){// Interaction threads are unique per root and expiration time.
return expirationTime*1000+root.interactionThreadID;}function markSpawnedWork(expirationTime){if(!enableSchedulerTracing){return;}if(spawnedWorkDuringRender===null){spawnedWorkDuringRender=[expirationTime];}else{spawnedWorkDuringRender.push(expirationTime);}}function scheduleInteractions(root,expirationTime,interactions){if(!enableSchedulerTracing){return;}if(interactions.size>0){var pendingInteractionMap=root.pendingInteractionMap;var pendingInteractions=pendingInteractionMap.get(expirationTime);if(pendingInteractions!=null){interactions.forEach(function(interaction){if(!pendingInteractions.has(interaction)){// Update the pending async work count for previously unscheduled interaction.
interaction.__count++;}pendingInteractions.add(interaction);});}else{pendingInteractionMap.set(expirationTime,new Set(interactions));// Update the pending async work count for the current interactions.
interactions.forEach(function(interaction){interaction.__count++;});}var subscriber=tracing.__subscriberRef.current;if(subscriber!==null){var threadID=computeThreadID(root,expirationTime);subscriber.onWorkScheduled(interactions,threadID);}}}function schedulePendingInteractions(root,expirationTime){// This is called when work is scheduled on a root.
// It associates the current interactions with the newly-scheduled expiration.
// They will be restored when that expiration is later committed.
if(!enableSchedulerTracing){return;}scheduleInteractions(root,expirationTime,tracing.__interactionsRef.current);}function startWorkOnPendingInteractions(root,expirationTime){// This is called when new work is started on a root.
if(!enableSchedulerTracing){return;}// Determine which interactions this batch of work currently includes, So that
// we can accurately attribute time spent working on it, And so that cascading
// work triggered during the render phase will be associated with it.
var interactions=new Set();root.pendingInteractionMap.forEach(function(scheduledInteractions,scheduledExpirationTime){if(scheduledExpirationTime>=expirationTime){scheduledInteractions.forEach(function(interaction){return interactions.add(interaction);});}});// Store the current set of interactions on the FiberRoot for a few reasons:
// We can re-use it in hot functions like performConcurrentWorkOnRoot()
// without having to recalculate it. We will also use it in commitWork() to
// pass to any Profiler onRender() hooks. This also provides DevTools with a
// way to access it when the onCommitRoot() hook is called.
root.memoizedInteractions=interactions;if(interactions.size>0){var subscriber=tracing.__subscriberRef.current;if(subscriber!==null){var threadID=computeThreadID(root,expirationTime);try{subscriber.onWorkStarted(interactions,threadID);}catch(error){// If the subscriber throws, rethrow it in a separate task
scheduleCallback(ImmediatePriority,function(){throw error;});}}}}function finishPendingInteractions(root,committedExpirationTime){if(!enableSchedulerTracing){return;}var earliestRemainingTimeAfterCommit=root.firstPendingTime;var subscriber;try{subscriber=tracing.__subscriberRef.current;if(subscriber!==null&&root.memoizedInteractions.size>0){var threadID=computeThreadID(root,committedExpirationTime);subscriber.onWorkStopped(root.memoizedInteractions,threadID);}}catch(error){// If the subscriber throws, rethrow it in a separate task
scheduleCallback(ImmediatePriority,function(){throw error;});}finally{// Clear completed interactions from the pending Map.
// Unless the render was suspended or cascading work was scheduled,
// In which case– leave pending interactions until the subsequent render.
var pendingInteractionMap=root.pendingInteractionMap;pendingInteractionMap.forEach(function(scheduledInteractions,scheduledExpirationTime){// Only decrement the pending interaction count if we're done.
// If there's still work at the current priority,
// That indicates that we are waiting for suspense data.
if(scheduledExpirationTime>earliestRemainingTimeAfterCommit){pendingInteractionMap.delete(scheduledExpirationTime);scheduledInteractions.forEach(function(interaction){interaction.__count--;if(subscriber!==null&&interaction.__count===0){try{subscriber.onInteractionScheduledWorkCompleted(interaction);}catch(error){// If the subscriber throws, rethrow it in a separate task
scheduleCallback(ImmediatePriority,function(){throw error;});}}});}});}}var onCommitFiberRoot=null;var onCommitFiberUnmount=null;var hasLoggedError=false;var isDevToolsPresent=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!=='undefined';function injectInternals(internals){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__==='undefined'){// No DevTools
return false;}var hook=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(hook.isDisabled){// This isn't a real property on the hook, but it can be set to opt out
// of DevTools integration and associated warnings and logs.
// https://github.com/facebook/react/issues/3877
return true;}if(!hook.supportsFiber){{warningWithoutStack$1(false,'The installed version of React DevTools is too old and will not work '+'with the current version of React. Please update React DevTools. '+'https://fb.me/react-devtools');}// DevTools exists, even though it doesn't support Fiber.
return true;}try{var rendererID=hook.inject(internals);// We have successfully injected, so now it is safe to set up hooks.
onCommitFiberRoot=function onCommitFiberRoot(root,expirationTime){try{var didError=(root.current.effectTag&DidCapture)===DidCapture;if(enableProfilerTimer){var currentTime=getCurrentTime();var priorityLevel=inferPriorityFromExpirationTime(currentTime,expirationTime);hook.onCommitFiberRoot(rendererID,root,priorityLevel,didError);}else{hook.onCommitFiberRoot(rendererID,root,undefined,didError);}}catch(err){if( true&&!hasLoggedError){hasLoggedError=true;warningWithoutStack$1(false,'React DevTools encountered an error: %s',err);}}};onCommitFiberUnmount=function onCommitFiberUnmount(fiber){try{hook.onCommitFiberUnmount(rendererID,fiber);}catch(err){if( true&&!hasLoggedError){hasLoggedError=true;warningWithoutStack$1(false,'React DevTools encountered an error: %s',err);}}};}catch(err){// Catch all errors because it is unsafe to throw during initialization.
{warningWithoutStack$1(false,'React DevTools encountered an error: %s.',err);}}// DevTools exists
return true;}function onCommitRoot(root,expirationTime){if(typeof onCommitFiberRoot==='function'){onCommitFiberRoot(root,expirationTime);}}function onCommitUnmount(fiber){if(typeof onCommitFiberUnmount==='function'){onCommitFiberUnmount(fiber);}}var hasBadMapPolyfill;{hasBadMapPolyfill=false;try{var nonExtensibleObject=Object.preventExtensions({});var testMap=new Map([[nonExtensibleObject,null]]);var testSet=new Set([nonExtensibleObject]);// This is necessary for Rollup to not consider these unused.
// https://github.com/rollup/rollup/issues/1771
// TODO: we can remove these if Rollup fixes the bug.
testMap.set(0,0);testSet.add(0);}catch(e){// TODO: Consider warning about bad polyfills
hasBadMapPolyfill=true;}}var debugCounter=1;function FiberNode(tag,pendingProps,key,mode){// Instance
this.tag=tag;this.key=key;this.elementType=null;this.type=null;this.stateNode=null;// Fiber
this.return=null;this.child=null;this.sibling=null;this.index=0;this.ref=null;this.pendingProps=pendingProps;this.memoizedProps=null;this.updateQueue=null;this.memoizedState=null;this.dependencies=null;this.mode=mode;// Effects
this.effectTag=NoEffect;this.nextEffect=null;this.firstEffect=null;this.lastEffect=null;this.expirationTime=NoWork;this.childExpirationTime=NoWork;this.alternate=null;if(enableProfilerTimer){// Note: The following is done to avoid a v8 performance cliff.
//
// Initializing the fields below to smis and later updating them with
// double values will cause Fibers to end up having separate shapes.
// This behavior/bug has something to do with Object.preventExtension().
// Fortunately this only impacts DEV builds.
// Unfortunately it makes React unusably slow for some applications.
// To work around this, initialize the fields below with doubles.
//
// Learn more about this here:
// https://github.com/facebook/react/issues/14365
// https://bugs.chromium.org/p/v8/issues/detail?id=8538
this.actualDuration=Number.NaN;this.actualStartTime=Number.NaN;this.selfBaseDuration=Number.NaN;this.treeBaseDuration=Number.NaN;// It's okay to replace the initial doubles with smis after initialization.
// This won't trigger the performance cliff mentioned above,
// and it simplifies other profiler code (including DevTools).
this.actualDuration=0;this.actualStartTime=-1;this.selfBaseDuration=0;this.treeBaseDuration=0;}// This is normally DEV-only except www when it adds listeners.
// TODO: remove the User Timing integration in favor of Root Events.
if(enableUserTimingAPI){this._debugID=debugCounter++;this._debugIsCurrentlyTiming=false;}{this._debugSource=null;this._debugOwner=null;this._debugNeedsRemount=false;this._debugHookTypes=null;if(!hasBadMapPolyfill&&typeof Object.preventExtensions==='function'){Object.preventExtensions(this);}}}// This is a constructor function, rather than a POJO constructor, still
// please ensure we do the following:
// 1) Nobody should add any instance methods on this. Instance methods can be
//    more difficult to predict when they get optimized and they are almost
//    never inlined properly in static compilers.
// 2) Nobody should rely on `instanceof Fiber` for type testing. We should
//    always know when it is a fiber.
// 3) We might want to experiment with using numeric keys since they are easier
//    to optimize in a non-JIT environment.
// 4) We can easily go from a constructor to a createFiber object literal if that
//    is faster.
// 5) It should be easy to port this to a C struct and keep a C implementation
//    compatible.
var createFiber=function createFiber(tag,pendingProps,key,mode){// $FlowFixMe: the shapes are exact here but Flow doesn't like constructors
return new FiberNode(tag,pendingProps,key,mode);};function shouldConstruct(Component){var prototype=Component.prototype;return!!(prototype&&prototype.isReactComponent);}function isSimpleFunctionComponent(type){return typeof type==='function'&&!shouldConstruct(type)&&type.defaultProps===undefined;}function resolveLazyComponentTag(Component){if(typeof Component==='function'){return shouldConstruct(Component)?ClassComponent:FunctionComponent;}else if(Component!==undefined&&Component!==null){var $$typeof=Component.$$typeof;if($$typeof===REACT_FORWARD_REF_TYPE){return ForwardRef;}if($$typeof===REACT_MEMO_TYPE){return MemoComponent;}}return IndeterminateComponent;}// This is used to create an alternate fiber to do work on.
function createWorkInProgress(current,pendingProps,expirationTime){var workInProgress=current.alternate;if(workInProgress===null){// We use a double buffering pooling technique because we know that we'll
// only ever need at most two versions of a tree. We pool the "other" unused
// node that we're free to reuse. This is lazily created to avoid allocating
// extra objects for things that are never updated. It also allow us to
// reclaim the extra memory if needed.
workInProgress=createFiber(current.tag,pendingProps,current.key,current.mode);workInProgress.elementType=current.elementType;workInProgress.type=current.type;workInProgress.stateNode=current.stateNode;{// DEV-only fields
workInProgress._debugID=current._debugID;workInProgress._debugSource=current._debugSource;workInProgress._debugOwner=current._debugOwner;workInProgress._debugHookTypes=current._debugHookTypes;}workInProgress.alternate=current;current.alternate=workInProgress;}else{workInProgress.pendingProps=pendingProps;// We already have an alternate.
// Reset the effect tag.
workInProgress.effectTag=NoEffect;// The effect list is no longer valid.
workInProgress.nextEffect=null;workInProgress.firstEffect=null;workInProgress.lastEffect=null;if(enableProfilerTimer){// We intentionally reset, rather than copy, actualDuration & actualStartTime.
// This prevents time from endlessly accumulating in new commits.
// This has the downside of resetting values for different priority renders,
// But works for yielding (the common case) and should support resuming.
workInProgress.actualDuration=0;workInProgress.actualStartTime=-1;}}workInProgress.childExpirationTime=current.childExpirationTime;workInProgress.expirationTime=current.expirationTime;workInProgress.child=current.child;workInProgress.memoizedProps=current.memoizedProps;workInProgress.memoizedState=current.memoizedState;workInProgress.updateQueue=current.updateQueue;// Clone the dependencies object. This is mutated during the render phase, so
// it cannot be shared with the current fiber.
var currentDependencies=current.dependencies;workInProgress.dependencies=currentDependencies===null?null:{expirationTime:currentDependencies.expirationTime,firstContext:currentDependencies.firstContext,responders:currentDependencies.responders};// These will be overridden during the parent's reconciliation
workInProgress.sibling=current.sibling;workInProgress.index=current.index;workInProgress.ref=current.ref;if(enableProfilerTimer){workInProgress.selfBaseDuration=current.selfBaseDuration;workInProgress.treeBaseDuration=current.treeBaseDuration;}{workInProgress._debugNeedsRemount=current._debugNeedsRemount;switch(workInProgress.tag){case IndeterminateComponent:case FunctionComponent:case SimpleMemoComponent:workInProgress.type=resolveFunctionForHotReloading(current.type);break;case ClassComponent:workInProgress.type=resolveClassForHotReloading(current.type);break;case ForwardRef:workInProgress.type=resolveForwardRefForHotReloading(current.type);break;default:break;}}return workInProgress;}// Used to reuse a Fiber for a second pass.
function resetWorkInProgress(workInProgress,renderExpirationTime){// This resets the Fiber to what createFiber or createWorkInProgress would
// have set the values to before during the first pass. Ideally this wouldn't
// be necessary but unfortunately many code paths reads from the workInProgress
// when they should be reading from current and writing to workInProgress.
// We assume pendingProps, index, key, ref, return are still untouched to
// avoid doing another reconciliation.
// Reset the effect tag but keep any Placement tags, since that's something
// that child fiber is setting, not the reconciliation.
workInProgress.effectTag&=Placement;// The effect list is no longer valid.
workInProgress.nextEffect=null;workInProgress.firstEffect=null;workInProgress.lastEffect=null;var current=workInProgress.alternate;if(current===null){// Reset to createFiber's initial values.
workInProgress.childExpirationTime=NoWork;workInProgress.expirationTime=renderExpirationTime;workInProgress.child=null;workInProgress.memoizedProps=null;workInProgress.memoizedState=null;workInProgress.updateQueue=null;workInProgress.dependencies=null;if(enableProfilerTimer){// Note: We don't reset the actualTime counts. It's useful to accumulate
// actual time across multiple render passes.
workInProgress.selfBaseDuration=0;workInProgress.treeBaseDuration=0;}}else{// Reset to the cloned values that createWorkInProgress would've.
workInProgress.childExpirationTime=current.childExpirationTime;workInProgress.expirationTime=current.expirationTime;workInProgress.child=current.child;workInProgress.memoizedProps=current.memoizedProps;workInProgress.memoizedState=current.memoizedState;workInProgress.updateQueue=current.updateQueue;// Clone the dependencies object. This is mutated during the render phase, so
// it cannot be shared with the current fiber.
var currentDependencies=current.dependencies;workInProgress.dependencies=currentDependencies===null?null:{expirationTime:currentDependencies.expirationTime,firstContext:currentDependencies.firstContext,responders:currentDependencies.responders};if(enableProfilerTimer){// Note: We don't reset the actualTime counts. It's useful to accumulate
// actual time across multiple render passes.
workInProgress.selfBaseDuration=current.selfBaseDuration;workInProgress.treeBaseDuration=current.treeBaseDuration;}}return workInProgress;}function createHostRootFiber(tag){var mode;if(tag===ConcurrentRoot){mode=ConcurrentMode|BatchedMode|StrictMode;}else if(tag===BatchedRoot){mode=BatchedMode|StrictMode;}else{mode=NoMode;}if(enableProfilerTimer&&isDevToolsPresent){// Always collect profile timings when DevTools are present.
// This enables DevTools to start capturing timing at any point–
// Without some nodes in the tree having empty base times.
mode|=ProfileMode;}return createFiber(HostRoot,null,null,mode);}function createFiberFromTypeAndProps(type,// React$ElementType
key,pendingProps,owner,mode,expirationTime){var fiber;var fiberTag=IndeterminateComponent;// The resolved type is set if we know what the final type will be. I.e. it's not lazy.
var resolvedType=type;if(typeof type==='function'){if(shouldConstruct(type)){fiberTag=ClassComponent;{resolvedType=resolveClassForHotReloading(resolvedType);}}else{{resolvedType=resolveFunctionForHotReloading(resolvedType);}}}else if(typeof type==='string'){fiberTag=HostComponent;}else{getTag:switch(type){case REACT_FRAGMENT_TYPE:return createFiberFromFragment(pendingProps.children,mode,expirationTime,key);case REACT_CONCURRENT_MODE_TYPE:fiberTag=Mode;mode|=ConcurrentMode|BatchedMode|StrictMode;break;case REACT_STRICT_MODE_TYPE:fiberTag=Mode;mode|=StrictMode;break;case REACT_PROFILER_TYPE:return createFiberFromProfiler(pendingProps,mode,expirationTime,key);case REACT_SUSPENSE_TYPE:return createFiberFromSuspense(pendingProps,mode,expirationTime,key);case REACT_SUSPENSE_LIST_TYPE:return createFiberFromSuspenseList(pendingProps,mode,expirationTime,key);default:{if(_typeof(type)==='object'&&type!==null){switch(type.$$typeof){case REACT_PROVIDER_TYPE:fiberTag=ContextProvider;break getTag;case REACT_CONTEXT_TYPE:// This is a consumer
fiberTag=ContextConsumer;break getTag;case REACT_FORWARD_REF_TYPE:fiberTag=ForwardRef;{resolvedType=resolveForwardRefForHotReloading(resolvedType);}break getTag;case REACT_MEMO_TYPE:fiberTag=MemoComponent;break getTag;case REACT_LAZY_TYPE:fiberTag=LazyComponent;resolvedType=null;break getTag;case REACT_FUNDAMENTAL_TYPE:if(enableFundamentalAPI){return createFiberFromFundamental(type,pendingProps,mode,expirationTime,key);}break;case REACT_SCOPE_TYPE:if(enableScopeAPI){return createFiberFromScope(type,pendingProps,mode,expirationTime,key);}}}var info='';{if(type===undefined||_typeof(type)==='object'&&type!==null&&Object.keys(type).length===0){info+=' You likely forgot to export your component from the file '+"it's defined in, or you might have mixed up default and "+'named imports.';}var ownerName=owner?getComponentName(owner.type):null;if(ownerName){info+='\n\nCheck the render method of `'+ownerName+'`.';}}{{throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(type==null?type:_typeof(type))+"."+info);}}}}}fiber=createFiber(fiberTag,pendingProps,key,mode);fiber.elementType=type;fiber.type=resolvedType;fiber.expirationTime=expirationTime;return fiber;}function createFiberFromElement(element,mode,expirationTime){var owner=null;{owner=element._owner;}var type=element.type;var key=element.key;var pendingProps=element.props;var fiber=createFiberFromTypeAndProps(type,key,pendingProps,owner,mode,expirationTime);{fiber._debugSource=element._source;fiber._debugOwner=element._owner;}return fiber;}function createFiberFromFragment(elements,mode,expirationTime,key){var fiber=createFiber(Fragment,elements,key,mode);fiber.expirationTime=expirationTime;return fiber;}function createFiberFromFundamental(fundamentalComponent,pendingProps,mode,expirationTime,key){var fiber=createFiber(FundamentalComponent,pendingProps,key,mode);fiber.elementType=fundamentalComponent;fiber.type=fundamentalComponent;fiber.expirationTime=expirationTime;return fiber;}function createFiberFromScope(scope,pendingProps,mode,expirationTime,key){var fiber=createFiber(ScopeComponent,pendingProps,key,mode);fiber.type=scope;fiber.elementType=scope;fiber.expirationTime=expirationTime;return fiber;}function createFiberFromProfiler(pendingProps,mode,expirationTime,key){{if(typeof pendingProps.id!=='string'||typeof pendingProps.onRender!=='function'){warningWithoutStack$1(false,'Profiler must specify an "id" string and "onRender" function as props');}}var fiber=createFiber(Profiler,pendingProps,key,mode|ProfileMode);// TODO: The Profiler fiber shouldn't have a type. It has a tag.
fiber.elementType=REACT_PROFILER_TYPE;fiber.type=REACT_PROFILER_TYPE;fiber.expirationTime=expirationTime;return fiber;}function createFiberFromSuspense(pendingProps,mode,expirationTime,key){var fiber=createFiber(SuspenseComponent,pendingProps,key,mode);// TODO: The SuspenseComponent fiber shouldn't have a type. It has a tag.
// This needs to be fixed in getComponentName so that it relies on the tag
// instead.
fiber.type=REACT_SUSPENSE_TYPE;fiber.elementType=REACT_SUSPENSE_TYPE;fiber.expirationTime=expirationTime;return fiber;}function createFiberFromSuspenseList(pendingProps,mode,expirationTime,key){var fiber=createFiber(SuspenseListComponent,pendingProps,key,mode);{// TODO: The SuspenseListComponent fiber shouldn't have a type. It has a tag.
// This needs to be fixed in getComponentName so that it relies on the tag
// instead.
fiber.type=REACT_SUSPENSE_LIST_TYPE;}fiber.elementType=REACT_SUSPENSE_LIST_TYPE;fiber.expirationTime=expirationTime;return fiber;}function createFiberFromText(content,mode,expirationTime){var fiber=createFiber(HostText,content,null,mode);fiber.expirationTime=expirationTime;return fiber;}function createFiberFromHostInstanceForDeletion(){var fiber=createFiber(HostComponent,null,null,NoMode);// TODO: These should not need a type.
fiber.elementType='DELETED';fiber.type='DELETED';return fiber;}function createFiberFromDehydratedFragment(dehydratedNode){var fiber=createFiber(DehydratedFragment,null,null,NoMode);fiber.stateNode=dehydratedNode;return fiber;}function createFiberFromPortal(portal,mode,expirationTime){var pendingProps=portal.children!==null?portal.children:[];var fiber=createFiber(HostPortal,pendingProps,portal.key,mode);fiber.expirationTime=expirationTime;fiber.stateNode={containerInfo:portal.containerInfo,pendingChildren:null,// Used by persistent updates
implementation:portal.implementation};return fiber;}// Used for stashing WIP properties to replay failed work in DEV.
function assignFiberPropertiesInDEV(target,source){if(target===null){// This Fiber's initial properties will always be overwritten.
// We only use a Fiber to ensure the same hidden class so DEV isn't slow.
target=createFiber(IndeterminateComponent,null,null,NoMode);}// This is intentionally written as a list of all properties.
// We tried to use Object.assign() instead but this is called in
// the hottest path, and Object.assign() was too slow:
// https://github.com/facebook/react/issues/12502
// This code is DEV-only so size is not a concern.
target.tag=source.tag;target.key=source.key;target.elementType=source.elementType;target.type=source.type;target.stateNode=source.stateNode;target.return=source.return;target.child=source.child;target.sibling=source.sibling;target.index=source.index;target.ref=source.ref;target.pendingProps=source.pendingProps;target.memoizedProps=source.memoizedProps;target.updateQueue=source.updateQueue;target.memoizedState=source.memoizedState;target.dependencies=source.dependencies;target.mode=source.mode;target.effectTag=source.effectTag;target.nextEffect=source.nextEffect;target.firstEffect=source.firstEffect;target.lastEffect=source.lastEffect;target.expirationTime=source.expirationTime;target.childExpirationTime=source.childExpirationTime;target.alternate=source.alternate;if(enableProfilerTimer){target.actualDuration=source.actualDuration;target.actualStartTime=source.actualStartTime;target.selfBaseDuration=source.selfBaseDuration;target.treeBaseDuration=source.treeBaseDuration;}target._debugID=source._debugID;target._debugSource=source._debugSource;target._debugOwner=source._debugOwner;target._debugIsCurrentlyTiming=source._debugIsCurrentlyTiming;target._debugNeedsRemount=source._debugNeedsRemount;target._debugHookTypes=source._debugHookTypes;return target;}function FiberRootNode(containerInfo,tag,hydrate){this.tag=tag;this.current=null;this.containerInfo=containerInfo;this.pendingChildren=null;this.pingCache=null;this.finishedExpirationTime=NoWork;this.finishedWork=null;this.timeoutHandle=noTimeout;this.context=null;this.pendingContext=null;this.hydrate=hydrate;this.callbackNode=null;this.callbackPriority=NoPriority;this.firstPendingTime=NoWork;this.firstSuspendedTime=NoWork;this.lastSuspendedTime=NoWork;this.nextKnownPendingLevel=NoWork;this.lastPingedTime=NoWork;this.lastExpiredTime=NoWork;if(enableSchedulerTracing){this.interactionThreadID=tracing.unstable_getThreadID();this.memoizedInteractions=new Set();this.pendingInteractionMap=new Map();}if(enableSuspenseCallback){this.hydrationCallbacks=null;}}function createFiberRoot(containerInfo,tag,hydrate,hydrationCallbacks){var root=new FiberRootNode(containerInfo,tag,hydrate);if(enableSuspenseCallback){root.hydrationCallbacks=hydrationCallbacks;}// Cyclic construction. This cheats the type system right now because
// stateNode is any.
var uninitializedFiber=createHostRootFiber(tag);root.current=uninitializedFiber;uninitializedFiber.stateNode=root;return root;}function isRootSuspendedAtTime(root,expirationTime){var firstSuspendedTime=root.firstSuspendedTime;var lastSuspendedTime=root.lastSuspendedTime;return firstSuspendedTime!==NoWork&&firstSuspendedTime>=expirationTime&&lastSuspendedTime<=expirationTime;}function markRootSuspendedAtTime(root,expirationTime){var firstSuspendedTime=root.firstSuspendedTime;var lastSuspendedTime=root.lastSuspendedTime;if(firstSuspendedTime<expirationTime){root.firstSuspendedTime=expirationTime;}if(lastSuspendedTime>expirationTime||firstSuspendedTime===NoWork){root.lastSuspendedTime=expirationTime;}if(expirationTime<=root.lastPingedTime){root.lastPingedTime=NoWork;}if(expirationTime<=root.lastExpiredTime){root.lastExpiredTime=NoWork;}}function markRootUpdatedAtTime(root,expirationTime){// Update the range of pending times
var firstPendingTime=root.firstPendingTime;if(expirationTime>firstPendingTime){root.firstPendingTime=expirationTime;}// Update the range of suspended times. Treat everything lower priority or
// equal to this update as unsuspended.
var firstSuspendedTime=root.firstSuspendedTime;if(firstSuspendedTime!==NoWork){if(expirationTime>=firstSuspendedTime){// The entire suspended range is now unsuspended.
root.firstSuspendedTime=root.lastSuspendedTime=root.nextKnownPendingLevel=NoWork;}else if(expirationTime>=root.lastSuspendedTime){root.lastSuspendedTime=expirationTime+1;}// This is a pending level. Check if it's higher priority than the next
// known pending level.
if(expirationTime>root.nextKnownPendingLevel){root.nextKnownPendingLevel=expirationTime;}}}function markRootFinishedAtTime(root,finishedExpirationTime,remainingExpirationTime){// Update the range of pending times
root.firstPendingTime=remainingExpirationTime;// Update the range of suspended times. Treat everything higher priority or
// equal to this update as unsuspended.
if(finishedExpirationTime<=root.lastSuspendedTime){// The entire suspended range is now unsuspended.
root.firstSuspendedTime=root.lastSuspendedTime=root.nextKnownPendingLevel=NoWork;}else if(finishedExpirationTime<=root.firstSuspendedTime){// Part of the suspended range is now unsuspended. Narrow the range to
// include everything between the unsuspended time (non-inclusive) and the
// last suspended time.
root.firstSuspendedTime=finishedExpirationTime-1;}if(finishedExpirationTime<=root.lastPingedTime){// Clear the pinged time
root.lastPingedTime=NoWork;}if(finishedExpirationTime<=root.lastExpiredTime){// Clear the expired time
root.lastExpiredTime=NoWork;}}function markRootExpiredAtTime(root,expirationTime){var lastExpiredTime=root.lastExpiredTime;if(lastExpiredTime===NoWork||lastExpiredTime>expirationTime){root.lastExpiredTime=expirationTime;}}// This lets us hook into Fiber to debug what it's doing.
// See https://github.com/facebook/react/pull/8033.
// This is not part of the public API, not even for React DevTools.
// You may only inject a debugTool if you work on React Fiber itself.
var ReactFiberInstrumentation={debugTool:null};var ReactFiberInstrumentation_1=ReactFiberInstrumentation;var didWarnAboutNestedUpdates;var didWarnAboutFindNodeInStrictMode;{didWarnAboutNestedUpdates=false;didWarnAboutFindNodeInStrictMode={};}function getContextForSubtree(parentComponent){if(!parentComponent){return emptyContextObject;}var fiber=get(parentComponent);var parentContext=findCurrentUnmaskedContext(fiber);if(fiber.tag===ClassComponent){var Component=fiber.type;if(isContextProvider(Component)){return processChildContext(fiber,Component,parentContext);}}return parentContext;}function findHostInstance(component){var fiber=get(component);if(fiber===undefined){if(typeof component.render==='function'){{{throw Error("Unable to find node on an unmounted component.");}}}else{{{throw Error("Argument appears to not be a ReactComponent. Keys: "+Object.keys(component));}}}}var hostFiber=findCurrentHostFiber(fiber);if(hostFiber===null){return null;}return hostFiber.stateNode;}function findHostInstanceWithWarning(component,methodName){{var fiber=get(component);if(fiber===undefined){if(typeof component.render==='function'){{{throw Error("Unable to find node on an unmounted component.");}}}else{{{throw Error("Argument appears to not be a ReactComponent. Keys: "+Object.keys(component));}}}}var hostFiber=findCurrentHostFiber(fiber);if(hostFiber===null){return null;}if(hostFiber.mode&StrictMode){var componentName=getComponentName(fiber.type)||'Component';if(!didWarnAboutFindNodeInStrictMode[componentName]){didWarnAboutFindNodeInStrictMode[componentName]=true;if(fiber.mode&StrictMode){warningWithoutStack$1(false,'%s is deprecated in StrictMode. '+'%s was passed an instance of %s which is inside StrictMode. '+'Instead, add a ref directly to the element you want to reference. '+'Learn more about using refs safely here: '+'https://fb.me/react-strict-mode-find-node%s',methodName,methodName,componentName,getStackByFiberInDevAndProd(hostFiber));}else{warningWithoutStack$1(false,'%s is deprecated in StrictMode. '+'%s was passed an instance of %s which renders StrictMode children. '+'Instead, add a ref directly to the element you want to reference. '+'Learn more about using refs safely here: '+'https://fb.me/react-strict-mode-find-node%s',methodName,methodName,componentName,getStackByFiberInDevAndProd(hostFiber));}}}return hostFiber.stateNode;}return findHostInstance(component);}function createContainer(containerInfo,tag,hydrate,hydrationCallbacks){return createFiberRoot(containerInfo,tag,hydrate,hydrationCallbacks);}function updateContainer(element,container,parentComponent,callback){var current$$1=container.current;var currentTime=requestCurrentTimeForUpdate();{// $FlowExpectedError - jest isn't a global, and isn't recognized outside of tests
if('undefined'!==typeof jest){warnIfUnmockedScheduler(current$$1);warnIfNotScopedWithMatchingAct(current$$1);}}var suspenseConfig=requestCurrentSuspenseConfig();var expirationTime=computeExpirationForFiber(currentTime,current$$1,suspenseConfig);{if(ReactFiberInstrumentation_1.debugTool){if(current$$1.alternate===null){ReactFiberInstrumentation_1.debugTool.onMountContainer(container);}else if(element===null){ReactFiberInstrumentation_1.debugTool.onUnmountContainer(container);}else{ReactFiberInstrumentation_1.debugTool.onUpdateContainer(container);}}}var context=getContextForSubtree(parentComponent);if(container.context===null){container.context=context;}else{container.pendingContext=context;}{if(phase==='render'&&current!==null&&!didWarnAboutNestedUpdates){didWarnAboutNestedUpdates=true;warningWithoutStack$1(false,'Render methods should be a pure function of props and state; '+'triggering nested component updates from render is not allowed. '+'If necessary, trigger nested updates in componentDidUpdate.\n\n'+'Check the render method of %s.',getComponentName(current.type)||'Unknown');}}var update=createUpdate(expirationTime,suspenseConfig);// Caution: React DevTools currently depends on this property
// being called "element".
update.payload={element:element};callback=callback===undefined?null:callback;if(callback!==null){!(typeof callback==='function')?warningWithoutStack$1(false,'render(...): Expected the last optional `callback` argument to be a '+'function. Instead received: %s.',callback):void 0;update.callback=callback;}enqueueUpdate(current$$1,update);scheduleWork(current$$1,expirationTime);return expirationTime;}function getPublicRootInstance(container){var containerFiber=container.current;if(!containerFiber.child){return null;}switch(containerFiber.child.tag){case HostComponent:return getPublicInstance(containerFiber.child.stateNode);default:return containerFiber.child.stateNode;}}function attemptSynchronousHydration(fiber){switch(fiber.tag){case HostRoot:var root=fiber.stateNode;if(root.hydrate){// Flush the first scheduled "update".
flushRoot(root,root.firstPendingTime);}break;case SuspenseComponent:flushSync(function(){return scheduleWork(fiber,Sync);});// If we're still blocked after this, we need to increase
// the priority of any promises resolving within this
// boundary so that they next attempt also has higher pri.
var retryExpTime=computeInteractiveExpiration(requestCurrentTimeForUpdate());markRetryTimeIfNotHydrated(fiber,retryExpTime);break;}}function markRetryTimeImpl(fiber,retryTime){var suspenseState=fiber.memoizedState;if(suspenseState!==null&&suspenseState.dehydrated!==null){if(suspenseState.retryTime<retryTime){suspenseState.retryTime=retryTime;}}}// Increases the priority of thennables when they resolve within this boundary.
function markRetryTimeIfNotHydrated(fiber,retryTime){markRetryTimeImpl(fiber,retryTime);var alternate=fiber.alternate;if(alternate){markRetryTimeImpl(alternate,retryTime);}}function attemptUserBlockingHydration(fiber){if(fiber.tag!==SuspenseComponent){// We ignore HostRoots here because we can't increase
// their priority and they should not suspend on I/O,
// since you have to wrap anything that might suspend in
// Suspense.
return;}var expTime=computeInteractiveExpiration(requestCurrentTimeForUpdate());scheduleWork(fiber,expTime);markRetryTimeIfNotHydrated(fiber,expTime);}function attemptContinuousHydration(fiber){if(fiber.tag!==SuspenseComponent){// We ignore HostRoots here because we can't increase
// their priority and they should not suspend on I/O,
// since you have to wrap anything that might suspend in
// Suspense.
return;}var expTime=computeContinuousHydrationExpiration(requestCurrentTimeForUpdate());scheduleWork(fiber,expTime);markRetryTimeIfNotHydrated(fiber,expTime);}function attemptHydrationAtCurrentPriority(fiber){if(fiber.tag!==SuspenseComponent){// We ignore HostRoots here because we can't increase
// their priority other than synchronously flush it.
return;}var currentTime=requestCurrentTimeForUpdate();var expTime=computeExpirationForFiber(currentTime,fiber,null);scheduleWork(fiber,expTime);markRetryTimeIfNotHydrated(fiber,expTime);}function findHostInstanceWithNoPortals(fiber){var hostFiber=findCurrentHostFiberWithNoPortals(fiber);if(hostFiber===null){return null;}if(hostFiber.tag===FundamentalComponent){return hostFiber.stateNode.instance;}return hostFiber.stateNode;}var shouldSuspendImpl=function shouldSuspendImpl(fiber){return false;};function shouldSuspend(fiber){return shouldSuspendImpl(fiber);}var overrideHookState=null;var overrideProps=null;var scheduleUpdate=null;var setSuspenseHandler=null;{var copyWithSetImpl=function copyWithSetImpl(obj,path,idx,value){if(idx>=path.length){return value;}var key=path[idx];var updated=Array.isArray(obj)?obj.slice():_assign({},obj);// $FlowFixMe number or string is fine here
updated[key]=copyWithSetImpl(obj[key],path,idx+1,value);return updated;};var copyWithSet=function copyWithSet(obj,path,value){return copyWithSetImpl(obj,path,0,value);};// Support DevTools editable values for useState and useReducer.
overrideHookState=function overrideHookState(fiber,id,path,value){// For now, the "id" of stateful hooks is just the stateful hook index.
// This may change in the future with e.g. nested hooks.
var currentHook=fiber.memoizedState;while(currentHook!==null&&id>0){currentHook=currentHook.next;id--;}if(currentHook!==null){var newState=copyWithSet(currentHook.memoizedState,path,value);currentHook.memoizedState=newState;currentHook.baseState=newState;// We aren't actually adding an update to the queue,
// because there is no update we can add for useReducer hooks that won't trigger an error.
// (There's no appropriate action type for DevTools overrides.)
// As a result though, React will see the scheduled update as a noop and bailout.
// Shallow cloning props works as a workaround for now to bypass the bailout check.
fiber.memoizedProps=_assign({},fiber.memoizedProps);scheduleWork(fiber,Sync);}};// Support DevTools props for function components, forwardRef, memo, host components, etc.
overrideProps=function overrideProps(fiber,path,value){fiber.pendingProps=copyWithSet(fiber.memoizedProps,path,value);if(fiber.alternate){fiber.alternate.pendingProps=fiber.pendingProps;}scheduleWork(fiber,Sync);};scheduleUpdate=function scheduleUpdate(fiber){scheduleWork(fiber,Sync);};setSuspenseHandler=function setSuspenseHandler(newShouldSuspendImpl){shouldSuspendImpl=newShouldSuspendImpl;};}function injectIntoDevTools(devToolsConfig){var _findFiberByHostInstance=devToolsConfig.findFiberByHostInstance;var ReactCurrentDispatcher=ReactSharedInternals.ReactCurrentDispatcher;return injectInternals(_assign({},devToolsConfig,{overrideHookState:overrideHookState,overrideProps:overrideProps,setSuspenseHandler:setSuspenseHandler,scheduleUpdate:scheduleUpdate,currentDispatcherRef:ReactCurrentDispatcher,findHostInstanceByFiber:function findHostInstanceByFiber(fiber){var hostFiber=findCurrentHostFiber(fiber);if(hostFiber===null){return null;}return hostFiber.stateNode;},findFiberByHostInstance:function findFiberByHostInstance(instance){if(!_findFiberByHostInstance){// Might not be implemented by the renderer.
return null;}return _findFiberByHostInstance(instance);},// React Refresh
findHostInstancesForRefresh:findHostInstancesForRefresh,scheduleRefresh:scheduleRefresh,scheduleRoot:scheduleRoot,setRefreshHandler:setRefreshHandler,// Enables DevTools to append owner stacks to error messages in DEV mode.
getCurrentFiber:function getCurrentFiber(){return current;}}));}var ReactFiberReconciler=Object.freeze({createContainer:createContainer,updateContainer:updateContainer,batchedEventUpdates:batchedEventUpdates,batchedUpdates:batchedUpdates,unbatchedUpdates:unbatchedUpdates,deferredUpdates:deferredUpdates,syncUpdates:syncUpdates,discreteUpdates:discreteUpdates,flushDiscreteUpdates:flushDiscreteUpdates,flushControlled:flushControlled,flushSync:flushSync,flushPassiveEffects:flushPassiveEffects,IsThisRendererActing:IsThisRendererActing,getPublicRootInstance:getPublicRootInstance,attemptSynchronousHydration:attemptSynchronousHydration,attemptUserBlockingHydration:attemptUserBlockingHydration,attemptContinuousHydration:attemptContinuousHydration,attemptHydrationAtCurrentPriority:attemptHydrationAtCurrentPriority,findHostInstance:findHostInstance,findHostInstanceWithWarning:findHostInstanceWithWarning,findHostInstanceWithNoPortals:findHostInstanceWithNoPortals,shouldSuspend:shouldSuspend,injectIntoDevTools:injectIntoDevTools});// This entry point is intentionally not typed. It exists only for third-party
// renderers. The renderers we ship (such as React DOM) instead import a named
// "inline" entry point (for example, `react-reconciler/inline.dom`). It uses
// the same code, but the Flow configuration redirects the host config to its
// real implementation so we can check it against exact intended host types.
//
// Only one renderer (the one you passed to `yarn flow <renderer>`) is fully
// type-checked at any given time. The Flow config maps the
// `react-reconciler/inline.<renderer>` import (which is *not* Flow typed) to
// `react-reconciler/inline-typed` (which *is*) for the current renderer.
// On CI, we run Flow checks for each renderer separately.
// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var reactReconciler=ReactFiberReconciler.default||ReactFiberReconciler;module.exports=reactReconciler;var $$$renderer=module.exports;module.exports=$$$reconciler;return $$$renderer;};}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"]))

/***/ }),

/***/ "./node_modules/react-reconciler/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-reconciler/index.js ***!
  \************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-reconciler.development.js */ "./node_modules/react-reconciler/cjs/react-reconciler.development.js");
}

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.14.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js").default;

if (true) {
  (function () {
    'use strict';

    var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

    var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

    var ReactVersion = '16.14.0'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary

    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';

    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || _typeof(maybeIterable) !== 'object') {
        return null;
      }

      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

      if (typeof maybeIterator === 'function') {
        return maybeIterator;
      }

      return null;
    }
    /**
     * Keeps track of the current dispatcher.
     */


    var ReactCurrentDispatcher = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };
    /**
     * Keeps track of the current batch's configuration such as how long an update
     * should suspend for if it needs to.
     */

    var ReactCurrentBatchConfig = {
      suspense: null
    };
    /**
     * Keeps track of the current owner.
     *
     * The current owner is the component who should own any components that are
     * currently being constructed.
     */

    var ReactCurrentOwner = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    };
    var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

    function describeComponentFrame(name, source, ownerName) {
      var sourceInfo = '';

      if (source) {
        var path = source.fileName;
        var fileName = path.replace(BEFORE_SLASH_RE, '');
        {
          // In DEV, include code for a common special case:
          // prefer "folder/index.js" instead of just "index.js".
          if (/^index\./.test(fileName)) {
            var match = path.match(BEFORE_SLASH_RE);

            if (match) {
              var pathBeforeSlash = match[1];

              if (pathBeforeSlash) {
                var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
                fileName = folderName + '/' + fileName;
              }
            }
          }
        }
        sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
      } else if (ownerName) {
        sourceInfo = ' (created by ' + ownerName + ')';
      }

      return '\n    in ' + (name || 'Unknown') + sourceInfo;
    }

    var Resolved = 1;

    function refineResolvedLazyComponent(lazyComponent) {
      return lazyComponent._status === Resolved ? lazyComponent._result : null;
    }

    function getWrappedName(outerType, innerType, wrapperName) {
      var functionName = innerType.displayName || innerType.name || '';
      return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
    }

    function getComponentName(type) {
      if (type == null) {
        // Host root, text node or just invalid type.
        return null;
      }

      {
        if (typeof type.tag === 'number') {
          error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
        }
      }

      if (typeof type === 'function') {
        return type.displayName || type.name || null;
      }

      if (typeof type === 'string') {
        return type;
      }

      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return 'Fragment';

        case REACT_PORTAL_TYPE:
          return 'Portal';

        case REACT_PROFILER_TYPE:
          return "Profiler";

        case REACT_STRICT_MODE_TYPE:
          return 'StrictMode';

        case REACT_SUSPENSE_TYPE:
          return 'Suspense';

        case REACT_SUSPENSE_LIST_TYPE:
          return 'SuspenseList';
      }

      if (_typeof(type) === 'object') {
        switch (type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            return 'Context.Consumer';

          case REACT_PROVIDER_TYPE:
            return 'Context.Provider';

          case REACT_FORWARD_REF_TYPE:
            return getWrappedName(type, type.render, 'ForwardRef');

          case REACT_MEMO_TYPE:
            return getComponentName(type.type);

          case REACT_BLOCK_TYPE:
            return getComponentName(type.render);

          case REACT_LAZY_TYPE:
            {
              var thenable = type;
              var resolvedThenable = refineResolvedLazyComponent(thenable);

              if (resolvedThenable) {
                return getComponentName(resolvedThenable);
              }

              break;
            }
        }
      }

      return null;
    }

    var ReactDebugCurrentFrame = {};
    var currentlyValidatingElement = null;

    function setCurrentlyValidatingElement(element) {
      {
        currentlyValidatingElement = element;
      }
    }

    {
      // Stack implementation injected by the current renderer.
      ReactDebugCurrentFrame.getCurrentStack = null;

      ReactDebugCurrentFrame.getStackAddendum = function () {
        var stack = ''; // Add an extra top frame while an element is being validated

        if (currentlyValidatingElement) {
          var name = getComponentName(currentlyValidatingElement.type);
          var owner = currentlyValidatingElement._owner;
          stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
        } // Delegate to the injected renderer-specific implementation


        var impl = ReactDebugCurrentFrame.getCurrentStack;

        if (impl) {
          stack += impl() || '';
        }

        return stack;
      };
    }
    /**
     * Used by act() to track whether you're inside an act() scope.
     */

    var IsSomeRendererActing = {
      current: false
    };
    var ReactSharedInternals = {
      ReactCurrentDispatcher: ReactCurrentDispatcher,
      ReactCurrentBatchConfig: ReactCurrentBatchConfig,
      ReactCurrentOwner: ReactCurrentOwner,
      IsSomeRendererActing: IsSomeRendererActing,
      // Used by renderers to avoid bundling object-assign twice in UMD bundles:
      assign: _assign
    };
    {
      _assign(ReactSharedInternals, {
        // These should not be included in production.
        ReactDebugCurrentFrame: ReactDebugCurrentFrame,
        // Shim for React DOM 16.0.0 which still destructured (but not used) this.
        // TODO: remove in React 17.0.
        ReactComponentTreeHook: {}
      });
    } // by calls to these methods by a Babel plugin.
    //
    // In PROD (or in packages without access to React internals),
    // they are left as they are instead.

    function warn(format) {
      {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        printWarning('warn', format, args);
      }
    }

    function error(format) {
      {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        printWarning('error', format, args);
      }
    }

    function printWarning(level, format, args) {
      // When changing this logic, you might want to also
      // update consoleWithStackDev.www.js as well.
      {
        var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

        if (!hasExistingStack) {
          var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
          var stack = ReactDebugCurrentFrame.getStackAddendum();

          if (stack !== '') {
            format += '%s';
            args = args.concat([stack]);
          }
        }

        var argsWithFormat = args.map(function (item) {
          return '' + item;
        }); // Careful: RN currently depends on this prefix

        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging

        Function.prototype.apply.call(console[level], console, argsWithFormat);

        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          var argIndex = 0;
          var message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
          });
          throw new Error(message);
        } catch (x) {}
      }
    }

    var didWarnStateUpdateForUnmountedComponent = {};

    function warnNoop(publicInstance, callerName) {
      {
        var _constructor = publicInstance.constructor;
        var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
        var warningKey = componentName + "." + callerName;

        if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
          return;
        }

        error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
      }
    }
    /**
     * This is the abstract API for an update queue.
     */


    var ReactNoopUpdateQueue = {
      /**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function isMounted(publicInstance) {
        return false;
      },

      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueForceUpdate: function enqueueForceUpdate(publicInstance, callback, callerName) {
        warnNoop(publicInstance, 'forceUpdate');
      },

      /**
       * Replaces all of the state. Always use this or `setState` to mutate state.
       * You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} completeState Next state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState, callback, callerName) {
        warnNoop(publicInstance, 'replaceState');
      },

      /**
       * Sets a subset of the state. This only exists because _pendingState is
       * internal. This provides a merging strategy that is not available to deep
       * properties which is confusing. TODO: Expose pendingState or don't use it
       * during the merge.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} partialState Next partial state to be merged with state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
      enqueueSetState: function enqueueSetState(publicInstance, partialState, callback, callerName) {
        warnNoop(publicInstance, 'setState');
      }
    };
    var emptyObject = {};
    {
      Object.freeze(emptyObject);
    }
    /**
     * Base class helpers for the updating state of a component.
     */

    function Component(props, context, updater) {
      this.props = props;
      this.context = context; // If a component has string refs, we will assign a different object later.

      this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
      // renderer.

      this.updater = updater || ReactNoopUpdateQueue;
    }

    Component.prototype.isReactComponent = {};
    /**
     * Sets a subset of the state. Always use this to mutate
     * state. You should treat `this.state` as immutable.
     *
     * There is no guarantee that `this.state` will be immediately updated, so
     * accessing `this.state` after calling this method may return the old value.
     *
     * There is no guarantee that calls to `setState` will run synchronously,
     * as they may eventually be batched together.  You can provide an optional
     * callback that will be executed when the call to setState is actually
     * completed.
     *
     * When a function is provided to setState, it will be called at some point in
     * the future (not synchronously). It will be called with the up to date
     * component arguments (state, props, context). These values can be different
     * from this.* because your function may be called after receiveProps but before
     * shouldComponentUpdate, and this new state, props, and context will not yet be
     * assigned to this.
     *
     * @param {object|function} partialState Next partial state or function to
     *        produce next partial state to be merged with current state.
     * @param {?function} callback Called after state is updated.
     * @final
     * @protected
     */

    Component.prototype.setState = function (partialState, callback) {
      if (!(_typeof(partialState) === 'object' || typeof partialState === 'function' || partialState == null)) {
        {
          throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        }
      }

      this.updater.enqueueSetState(this, partialState, callback, 'setState');
    };
    /**
     * Forces an update. This should only be invoked when it is known with
     * certainty that we are **not** in a DOM transaction.
     *
     * You may want to call this when you know that some deeper aspect of the
     * component's state has changed but `setState` was not called.
     *
     * This will not invoke `shouldComponentUpdate`, but it will invoke
     * `componentWillUpdate` and `componentDidUpdate`.
     *
     * @param {?function} callback Called after update is complete.
     * @final
     * @protected
     */


    Component.prototype.forceUpdate = function (callback) {
      this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
    };
    /**
     * Deprecated APIs. These APIs used to exist on classic React classes but since
     * we would like to deprecate them, we're not going to move them over to this
     * modern base class. Instead, we define a getter that warns if it's accessed.
     */


    {
      var deprecatedAPIs = {
        isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
        replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
      };

      var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
          get: function get() {
            warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
            return undefined;
          }
        });
      };

      for (var fnName in deprecatedAPIs) {
        if (deprecatedAPIs.hasOwnProperty(fnName)) {
          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        }
      }
    }

    function ComponentDummy() {}

    ComponentDummy.prototype = Component.prototype;
    /**
     * Convenience component with default shallow equality check for sCU.
     */

    function PureComponent(props, context, updater) {
      this.props = props;
      this.context = context; // If a component has string refs, we will assign a different object later.

      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }

    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

    _assign(pureComponentPrototype, Component.prototype);

    pureComponentPrototype.isPureReactComponent = true; // an immutable object with a single mutable value

    function createRef() {
      var refObject = {
        current: null
      };
      {
        Object.seal(refObject);
      }
      return refObject;
    }

    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
    {
      didWarnAboutStringRefs = {};
    }

    function hasValidRef(config) {
      {
        if (hasOwnProperty.call(config, 'ref')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.ref !== undefined;
    }

    function hasValidKey(config) {
      {
        if (hasOwnProperty.call(config, 'key')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.key !== undefined;
    }

    function defineKeyPropWarningGetter(props, displayName) {
      var warnAboutAccessingKey = function warnAboutAccessingKey() {
        {
          if (!specialPropKeyWarningShown) {
            specialPropKeyWarningShown = true;
            error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
          }
        }
      };

      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, 'key', {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }

    function defineRefPropWarningGetter(props, displayName) {
      var warnAboutAccessingRef = function warnAboutAccessingRef() {
        {
          if (!specialPropRefWarningShown) {
            specialPropRefWarningShown = true;
            error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
          }
        }
      };

      warnAboutAccessingRef.isReactWarning = true;
      Object.defineProperty(props, 'ref', {
        get: warnAboutAccessingRef,
        configurable: true
      });
    }

    function warnIfStringRefCannotBeAutoConverted(config) {
      {
        if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
          var componentName = getComponentName(ReactCurrentOwner.current.type);

          if (!didWarnAboutStringRefs[componentName]) {
            error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
            didWarnAboutStringRefs[componentName] = true;
          }
        }
      }
    }
    /**
     * Factory method to create a new React element. This no longer adheres to
     * the class pattern, so do not use new to call it. Also, instanceof check
     * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
     * if something is a React Element.
     *
     * @param {*} type
     * @param {*} props
     * @param {*} key
     * @param {string|object} ref
     * @param {*} owner
     * @param {*} self A *temporary* helper to detect places where `this` is
     * different from the `owner` when React.createElement is called, so that we
     * can warn. We want to get rid of owner and replace string `ref`s with arrow
     * functions, and as long as `this` and owner are the same, there will be no
     * change in behavior.
     * @param {*} source An annotation object (added by a transpiler or otherwise)
     * indicating filename, line number, and/or other information.
     * @internal
     */


    var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
      var element = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: REACT_ELEMENT_TYPE,
        // Built-in properties that belong on the element
        type: type,
        key: key,
        ref: ref,
        props: props,
        // Record the component responsible for creating this element.
        _owner: owner
      };
      {
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.

        Object.defineProperty(element._store, 'validated', {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false
        }); // self and source are DEV only properties.

        Object.defineProperty(element, '_self', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.

        Object.defineProperty(element, '_source', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: source
        });

        if (Object.freeze) {
          Object.freeze(element.props);
          Object.freeze(element);
        }
      }
      return element;
    };
    /**
     * Create and return a new ReactElement of the given type.
     * See https://reactjs.org/docs/react-api.html#createelement
     */


    function createElement(type, config, children) {
      var propName; // Reserved names are extracted

      var props = {};
      var key = null;
      var ref = null;
      var self = null;
      var source = null;

      if (config != null) {
        if (hasValidRef(config)) {
          ref = config.ref;
          {
            warnIfStringRefCannotBeAutoConverted(config);
          }
        }

        if (hasValidKey(config)) {
          key = '' + config.key;
        }

        self = config.__self === undefined ? null : config.__self;
        source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        }
      } // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.


      var childrenLength = arguments.length - 2;

      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }

        {
          if (Object.freeze) {
            Object.freeze(childArray);
          }
        }
        props.children = childArray;
      } // Resolve default props


      if (type && type.defaultProps) {
        var defaultProps = type.defaultProps;

        for (propName in defaultProps) {
          if (props[propName] === undefined) {
            props[propName] = defaultProps[propName];
          }
        }
      }

      {
        if (key || ref) {
          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

          if (key) {
            defineKeyPropWarningGetter(props, displayName);
          }

          if (ref) {
            defineRefPropWarningGetter(props, displayName);
          }
        }
      }
      return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }

    function cloneAndReplaceKey(oldElement, newKey) {
      var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
      return newElement;
    }
    /**
     * Clone and return a new ReactElement using element as the starting point.
     * See https://reactjs.org/docs/react-api.html#cloneelement
     */


    function cloneElement(element, config, children) {
      if (!!(element === null || element === undefined)) {
        {
          throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
        }
      }

      var propName; // Original props are copied

      var props = _assign({}, element.props); // Reserved names are extracted


      var key = element.key;
      var ref = element.ref; // Self is preserved since the owner is preserved.

      var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
      // transpiler, and the original source is probably a better indicator of the
      // true owner.

      var source = element._source; // Owner will be preserved, unless ref is overridden

      var owner = element._owner;

      if (config != null) {
        if (hasValidRef(config)) {
          // Silently steal the ref from the parent.
          ref = config.ref;
          owner = ReactCurrentOwner.current;
        }

        if (hasValidKey(config)) {
          key = '' + config.key;
        } // Remaining properties override existing props


        var defaultProps;

        if (element.type && element.type.defaultProps) {
          defaultProps = element.type.defaultProps;
        }

        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            if (config[propName] === undefined && defaultProps !== undefined) {
              // Resolve default props
              props[propName] = defaultProps[propName];
            } else {
              props[propName] = config[propName];
            }
          }
        }
      } // Children can be more than one argument, and those are transferred onto
      // the newly allocated props object.


      var childrenLength = arguments.length - 2;

      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);

        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }

        props.children = childArray;
      }

      return ReactElement(element.type, key, ref, self, source, owner, props);
    }
    /**
     * Verifies the object is a ReactElement.
     * See https://reactjs.org/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if `object` is a ReactElement.
     * @final
     */


    function isValidElement(object) {
      return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    var SEPARATOR = '.';
    var SUBSEPARATOR = ':';
    /**
     * Escape and wrap key so it is safe to use as a reactid
     *
     * @param {string} key to be escaped.
     * @return {string} the escaped key.
     */

    function escape(key) {
      var escapeRegex = /[=:]/g;
      var escaperLookup = {
        '=': '=0',
        ':': '=2'
      };
      var escapedString = ('' + key).replace(escapeRegex, function (match) {
        return escaperLookup[match];
      });
      return '$' + escapedString;
    }
    /**
     * TODO: Test that a single child and an array with one item have the same key
     * pattern.
     */


    var didWarnAboutMaps = false;
    var userProvidedKeyEscapeRegex = /\/+/g;

    function escapeUserProvidedKey(text) {
      return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
    }

    var POOL_SIZE = 10;
    var traverseContextPool = [];

    function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
      if (traverseContextPool.length) {
        var traverseContext = traverseContextPool.pop();
        traverseContext.result = mapResult;
        traverseContext.keyPrefix = keyPrefix;
        traverseContext.func = mapFunction;
        traverseContext.context = mapContext;
        traverseContext.count = 0;
        return traverseContext;
      } else {
        return {
          result: mapResult,
          keyPrefix: keyPrefix,
          func: mapFunction,
          context: mapContext,
          count: 0
        };
      }
    }

    function releaseTraverseContext(traverseContext) {
      traverseContext.result = null;
      traverseContext.keyPrefix = null;
      traverseContext.func = null;
      traverseContext.context = null;
      traverseContext.count = 0;

      if (traverseContextPool.length < POOL_SIZE) {
        traverseContextPool.push(traverseContext);
      }
    }
    /**
     * @param {?*} children Children tree container.
     * @param {!string} nameSoFar Name of the key path so far.
     * @param {!function} callback Callback to invoke with each child found.
     * @param {?*} traverseContext Used to pass information throughout the traversal
     * process.
     * @return {!number} The number of children in this subtree.
     */


    function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
      var type = _typeof(children);

      if (type === 'undefined' || type === 'boolean') {
        // All of the above are perceived as null.
        children = null;
      }

      var invokeCallback = false;

      if (children === null) {
        invokeCallback = true;
      } else {
        switch (type) {
          case 'string':
          case 'number':
            invokeCallback = true;
            break;

          case 'object':
            switch (children.$$typeof) {
              case REACT_ELEMENT_TYPE:
              case REACT_PORTAL_TYPE:
                invokeCallback = true;
            }

        }
      }

      if (invokeCallback) {
        callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
        // so that it's consistent if the number of children grows.
        nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
        return 1;
      }

      var child;
      var nextName;
      var subtreeCount = 0; // Count of children found in the current subtree.

      var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          child = children[i];
          nextName = nextNamePrefix + getComponentKey(child, i);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        var iteratorFn = getIteratorFn(children);

        if (typeof iteratorFn === 'function') {
          {
            // Warn about using Maps as children
            if (iteratorFn === children.entries) {
              if (!didWarnAboutMaps) {
                warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
              }

              didWarnAboutMaps = true;
            }
          }
          var iterator = iteratorFn.call(children);
          var step;
          var ii = 0;

          while (!(step = iterator.next()).done) {
            child = step.value;
            nextName = nextNamePrefix + getComponentKey(child, ii++);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        } else if (type === 'object') {
          var addendum = '';
          {
            addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
          }
          var childrenString = '' + children;
          {
            {
              throw Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum);
            }
          }
        }
      }

      return subtreeCount;
    }
    /**
     * Traverses children that are typically specified as `props.children`, but
     * might also be specified through attributes:
     *
     * - `traverseAllChildren(this.props.children, ...)`
     * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
     *
     * The `traverseContext` is an optional argument that is passed through the
     * entire traversal. It can be used to store accumulations or anything else that
     * the callback might find relevant.
     *
     * @param {?*} children Children tree object.
     * @param {!function} callback To invoke upon traversing each child.
     * @param {?*} traverseContext Context for traversal.
     * @return {!number} The number of children in this subtree.
     */


    function traverseAllChildren(children, callback, traverseContext) {
      if (children == null) {
        return 0;
      }

      return traverseAllChildrenImpl(children, '', callback, traverseContext);
    }
    /**
     * Generate a key string that identifies a component within a set.
     *
     * @param {*} component A component that could contain a manual key.
     * @param {number} index Index that is used if a manual key is not provided.
     * @return {string}
     */


    function getComponentKey(component, index) {
      // Do some typechecking here since we call this blindly. We want to ensure
      // that we don't block potential future ES APIs.
      if (_typeof(component) === 'object' && component !== null && component.key != null) {
        // Explicit key
        return escape(component.key);
      } // Implicit key determined by the index in the set


      return index.toString(36);
    }

    function forEachSingleChild(bookKeeping, child, name) {
      var func = bookKeeping.func,
          context = bookKeeping.context;
      func.call(context, child, bookKeeping.count++);
    }
    /**
     * Iterates through children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
     *
     * The provided forEachFunc(child, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} forEachFunc
     * @param {*} forEachContext Context for forEachContext.
     */


    function forEachChildren(children, forEachFunc, forEachContext) {
      if (children == null) {
        return children;
      }

      var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
      traverseAllChildren(children, forEachSingleChild, traverseContext);
      releaseTraverseContext(traverseContext);
    }

    function mapSingleChildIntoContext(bookKeeping, child, childKey) {
      var result = bookKeeping.result,
          keyPrefix = bookKeeping.keyPrefix,
          func = bookKeeping.func,
          context = bookKeeping.context;
      var mappedChild = func.call(context, child, bookKeeping.count++);

      if (Array.isArray(mappedChild)) {
        mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
          return c;
        });
      } else if (mappedChild != null) {
        if (isValidElement(mappedChild)) {
          mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
          // traverseAllChildren used to do for objects as children
          keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
        }

        result.push(mappedChild);
      }
    }

    function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
      var escapedPrefix = '';

      if (prefix != null) {
        escapedPrefix = escapeUserProvidedKey(prefix) + '/';
      }

      var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
      traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
      releaseTraverseContext(traverseContext);
    }
    /**
     * Maps children that are typically specified as `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenmap
     *
     * The provided mapFunction(child, key, index) will be called for each
     * leaf child.
     *
     * @param {?*} children Children tree container.
     * @param {function(*, int)} func The map function.
     * @param {*} context Context for mapFunction.
     * @return {object} Object containing the ordered map of results.
     */


    function mapChildren(children, func, context) {
      if (children == null) {
        return children;
      }

      var result = [];
      mapIntoWithKeyPrefixInternal(children, result, null, func, context);
      return result;
    }
    /**
     * Count the number of children that are typically specified as
     * `props.children`.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrencount
     *
     * @param {?*} children Children tree container.
     * @return {number} The number of children.
     */


    function countChildren(children) {
      return traverseAllChildren(children, function () {
        return null;
      }, null);
    }
    /**
     * Flatten a children object (typically specified as `props.children`) and
     * return an array with appropriately re-keyed children.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
     */


    function toArray(children) {
      var result = [];
      mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
        return child;
      });
      return result;
    }
    /**
     * Returns the first child in a collection of children and verifies that there
     * is only one child in the collection.
     *
     * See https://reactjs.org/docs/react-api.html#reactchildrenonly
     *
     * The current implementation of this function assumes that a single child gets
     * passed without a wrapper, but the purpose of this helper function is to
     * abstract away the particular structure of children.
     *
     * @param {?object} children Child collection structure.
     * @return {ReactElement} The first and only `ReactElement` contained in the
     * structure.
     */


    function onlyChild(children) {
      if (!isValidElement(children)) {
        {
          throw Error("React.Children.only expected to receive a single React element child.");
        }
      }

      return children;
    }

    function createContext(defaultValue, calculateChangedBits) {
      if (calculateChangedBits === undefined) {
        calculateChangedBits = null;
      } else {
        {
          if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
            error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
          }
        }
      }

      var context = {
        $$typeof: REACT_CONTEXT_TYPE,
        _calculateChangedBits: calculateChangedBits,
        // As a workaround to support multiple concurrent renderers, we categorize
        // some renderers as primary and others as secondary. We only expect
        // there to be two concurrent renderers at most: React Native (primary) and
        // Fabric (secondary); React DOM (primary) and React ART (secondary).
        // Secondary renderers store their context values on separate fields.
        _currentValue: defaultValue,
        _currentValue2: defaultValue,
        // Used to track how many concurrent renderers this context currently
        // supports within in a single renderer. Such as parallel server rendering.
        _threadCount: 0,
        // These are circular
        Provider: null,
        Consumer: null
      };
      context.Provider = {
        $$typeof: REACT_PROVIDER_TYPE,
        _context: context
      };
      var hasWarnedAboutUsingNestedContextConsumers = false;
      var hasWarnedAboutUsingConsumerProvider = false;
      {
        // A separate object, but proxies back to the original context object for
        // backwards compatibility. It has a different $$typeof, so we can properly
        // warn for the incorrect usage of Context as a Consumer.
        var Consumer = {
          $$typeof: REACT_CONTEXT_TYPE,
          _context: context,
          _calculateChangedBits: context._calculateChangedBits
        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

        Object.defineProperties(Consumer, {
          Provider: {
            get: function get() {
              if (!hasWarnedAboutUsingConsumerProvider) {
                hasWarnedAboutUsingConsumerProvider = true;
                error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
              }

              return context.Provider;
            },
            set: function set(_Provider) {
              context.Provider = _Provider;
            }
          },
          _currentValue: {
            get: function get() {
              return context._currentValue;
            },
            set: function set(_currentValue) {
              context._currentValue = _currentValue;
            }
          },
          _currentValue2: {
            get: function get() {
              return context._currentValue2;
            },
            set: function set(_currentValue2) {
              context._currentValue2 = _currentValue2;
            }
          },
          _threadCount: {
            get: function get() {
              return context._threadCount;
            },
            set: function set(_threadCount) {
              context._threadCount = _threadCount;
            }
          },
          Consumer: {
            get: function get() {
              if (!hasWarnedAboutUsingNestedContextConsumers) {
                hasWarnedAboutUsingNestedContextConsumers = true;
                error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
              }

              return context.Consumer;
            }
          }
        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

        context.Consumer = Consumer;
      }
      {
        context._currentRenderer = null;
        context._currentRenderer2 = null;
      }
      return context;
    }

    function lazy(ctor) {
      var lazyType = {
        $$typeof: REACT_LAZY_TYPE,
        _ctor: ctor,
        // React uses these fields to store the result.
        _status: -1,
        _result: null
      };
      {
        // In production, this would just set it on the object.
        var defaultProps;
        var propTypes;
        Object.defineProperties(lazyType, {
          defaultProps: {
            configurable: true,
            get: function get() {
              return defaultProps;
            },
            set: function set(newDefaultProps) {
              error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
              defaultProps = newDefaultProps; // Match production behavior more closely:

              Object.defineProperty(lazyType, 'defaultProps', {
                enumerable: true
              });
            }
          },
          propTypes: {
            configurable: true,
            get: function get() {
              return propTypes;
            },
            set: function set(newPropTypes) {
              error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
              propTypes = newPropTypes; // Match production behavior more closely:

              Object.defineProperty(lazyType, 'propTypes', {
                enumerable: true
              });
            }
          }
        });
      }
      return lazyType;
    }

    function forwardRef(render) {
      {
        if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
          error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
        } else if (typeof render !== 'function') {
          error('forwardRef requires a render function but was given %s.', render === null ? 'null' : _typeof(render));
        } else {
          if (render.length !== 0 && render.length !== 2) {
            error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
          }
        }

        if (render != null) {
          if (render.defaultProps != null || render.propTypes != null) {
            error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
          }
        }
      }
      return {
        $$typeof: REACT_FORWARD_REF_TYPE,
        render: render
      };
    }

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function memo(type, compare) {
      {
        if (!isValidElementType(type)) {
          error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : _typeof(type));
        }
      }
      return {
        $$typeof: REACT_MEMO_TYPE,
        type: type,
        compare: compare === undefined ? null : compare
      };
    }

    function resolveDispatcher() {
      var dispatcher = ReactCurrentDispatcher.current;

      if (!(dispatcher !== null)) {
        {
          throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");
        }
      }

      return dispatcher;
    }

    function useContext(Context, unstable_observedBits) {
      var dispatcher = resolveDispatcher();
      {
        if (unstable_observedBits !== undefined) {
          error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
        } // TODO: add a more generic warning for invalid values.


        if (Context._context !== undefined) {
          var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
          // and nobody should be using this in existing code.

          if (realContext.Consumer === Context) {
            error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
          } else if (realContext.Provider === Context) {
            error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
          }
        }
      }
      return dispatcher.useContext(Context, unstable_observedBits);
    }

    function useState(initialState) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useState(initialState);
    }

    function useReducer(reducer, initialArg, init) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useReducer(reducer, initialArg, init);
    }

    function useRef(initialValue) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useRef(initialValue);
    }

    function useEffect(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useEffect(create, deps);
    }

    function useLayoutEffect(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useLayoutEffect(create, deps);
    }

    function useCallback(callback, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useCallback(callback, deps);
    }

    function useMemo(create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useMemo(create, deps);
    }

    function useImperativeHandle(ref, create, deps) {
      var dispatcher = resolveDispatcher();
      return dispatcher.useImperativeHandle(ref, create, deps);
    }

    function useDebugValue(value, formatterFn) {
      {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDebugValue(value, formatterFn);
      }
    }

    var propTypesMisspellWarningShown;
    {
      propTypesMisspellWarningShown = false;
    }

    function getDeclarationErrorAddendum() {
      if (ReactCurrentOwner.current) {
        var name = getComponentName(ReactCurrentOwner.current.type);

        if (name) {
          return '\n\nCheck the render method of `' + name + '`.';
        }
      }

      return '';
    }

    function getSourceInfoErrorAddendum(source) {
      if (source !== undefined) {
        var fileName = source.fileName.replace(/^.*[\\\/]/, '');
        var lineNumber = source.lineNumber;
        return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
      }

      return '';
    }

    function getSourceInfoErrorAddendumForProps(elementProps) {
      if (elementProps !== null && elementProps !== undefined) {
        return getSourceInfoErrorAddendum(elementProps.__source);
      }

      return '';
    }
    /**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */


    var ownerHasKeyUseWarning = {};

    function getCurrentComponentErrorInfo(parentType) {
      var info = getDeclarationErrorAddendum();

      if (!info) {
        var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

        if (parentName) {
          info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
      }

      return info;
    }
    /**
     * Warn if the element doesn't have an explicit key assigned to it.
     * This element is in an array. The array could grow and shrink or be
     * reordered. All children that haven't already been validated are required to
     * have a "key" property assigned to it. Error statuses are cached so a warning
     * will only be shown once.
     *
     * @internal
     * @param {ReactElement} element Element that requires a key.
     * @param {*} parentType element's parent's type.
     */


    function validateExplicitKey(element, parentType) {
      if (!element._store || element._store.validated || element.key != null) {
        return;
      }

      element._store.validated = true;
      var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

      if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
        return;
      }

      ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
      // property, it may be the creator of the child that's responsible for
      // assigning it a key.

      var childOwner = '';

      if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
        // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
      }

      setCurrentlyValidatingElement(element);
      {
        error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
      }
      setCurrentlyValidatingElement(null);
    }
    /**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */


    function validateChildKeys(node, parentType) {
      if (_typeof(node) !== 'object') {
        return;
      }

      if (Array.isArray(node)) {
        for (var i = 0; i < node.length; i++) {
          var child = node[i];

          if (isValidElement(child)) {
            validateExplicitKey(child, parentType);
          }
        }
      } else if (isValidElement(node)) {
        // This element was passed in a valid location.
        if (node._store) {
          node._store.validated = true;
        }
      } else if (node) {
        var iteratorFn = getIteratorFn(node);

        if (typeof iteratorFn === 'function') {
          // Entry iterators used to provide implicit keys,
          // but now we print a separate warning for them later.
          if (iteratorFn !== node.entries) {
            var iterator = iteratorFn.call(node);
            var step;

            while (!(step = iterator.next()).done) {
              if (isValidElement(step.value)) {
                validateExplicitKey(step.value, parentType);
              }
            }
          }
        }
      }
    }
    /**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */


    function validatePropTypes(element) {
      {
        var type = element.type;

        if (type === null || type === undefined || typeof type === 'string') {
          return;
        }

        var name = getComponentName(type);
        var propTypes;

        if (typeof type === 'function') {
          propTypes = type.propTypes;
        } else if (_typeof(type) === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) {
          propTypes = type.propTypes;
        } else {
          return;
        }

        if (propTypes) {
          setCurrentlyValidatingElement(element);
          checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
          setCurrentlyValidatingElement(null);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
          propTypesMisspellWarningShown = true;
          error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
        }

        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
          error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
        }
      }
    }
    /**
     * Given a fragment, validate that it can only be provided with fragment props
     * @param {ReactElement} fragment
     */


    function validateFragmentProps(fragment) {
      {
        setCurrentlyValidatingElement(fragment);
        var keys = Object.keys(fragment.props);

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];

          if (key !== 'children' && key !== 'key') {
            error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
            break;
          }
        }

        if (fragment.ref !== null) {
          error('Invalid attribute `ref` supplied to `React.Fragment`.');
        }

        setCurrentlyValidatingElement(null);
      }
    }

    function createElementWithValidation(type, props, children) {
      var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
      // succeed and there will likely be errors in render.

      if (!validType) {
        var info = '';

        if (type === undefined || _typeof(type) === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
        }

        var sourceInfo = getSourceInfoErrorAddendumForProps(props);

        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }

        var typeString;

        if (type === null) {
          typeString = 'null';
        } else if (Array.isArray(type)) {
          typeString = 'array';
        } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
          typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
          info = ' Did you accidentally export a JSX literal instead of a component?';
        } else {
          typeString = _typeof(type);
        }

        {
          error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
        }
      }

      var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
      // TODO: Drop this when these are no longer allowed as the type argument.

      if (element == null) {
        return element;
      } // Skip key warning if the type isn't valid since our key validation logic
      // doesn't expect a non-string/function type and can throw confusing errors.
      // We don't want exception behavior to differ between dev and prod.
      // (Rendering will throw with a helpful message and as soon as the type is
      // fixed, the key warnings will appear.)


      if (validType) {
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], type);
        }
      }

      if (type === REACT_FRAGMENT_TYPE) {
        validateFragmentProps(element);
      } else {
        validatePropTypes(element);
      }

      return element;
    }

    var didWarnAboutDeprecatedCreateFactory = false;

    function createFactoryWithValidation(type) {
      var validatedFactory = createElementWithValidation.bind(null, type);
      validatedFactory.type = type;
      {
        if (!didWarnAboutDeprecatedCreateFactory) {
          didWarnAboutDeprecatedCreateFactory = true;
          warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
        } // Legacy hook: remove it


        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function get() {
            warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
      return validatedFactory;
    }

    function cloneElementWithValidation(element, props, children) {
      var newElement = cloneElement.apply(this, arguments);

      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], newElement.type);
      }

      validatePropTypes(newElement);
      return newElement;
    }

    {
      try {
        var frozenObject = Object.freeze({});
        var testMap = new Map([[frozenObject, null]]);
        var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
        // https://github.com/rollup/rollup/issues/1771
        // TODO: we can remove these if Rollup fixes the bug.

        testMap.set(0, 0);
        testSet.add(0);
      } catch (e) {}
    }
    var createElement$1 = createElementWithValidation;
    var cloneElement$1 = cloneElementWithValidation;
    var createFactory = createFactoryWithValidation;
    var Children = {
      map: mapChildren,
      forEach: forEachChildren,
      count: countChildren,
      toArray: toArray,
      only: onlyChild
    };
    exports.Children = Children;
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
    exports.cloneElement = cloneElement$1;
    exports.createContext = createContext;
    exports.createElement = createElement$1;
    exports.createFactory = createFactory;
    exports.createRef = createRef;
    exports.forwardRef = forwardRef;
    exports.isValidElement = isValidElement;
    exports.lazy = lazy;
    exports.memo = memo;
    exports.useCallback = useCallback;
    exports.useContext = useContext;
    exports.useDebugValue = useDebugValue;
    exports.useEffect = useEffect;
    exports.useImperativeHandle = useImperativeHandle;
    exports.useLayoutEffect = useLayoutEffect;
    exports.useMemo = useMemo;
    exports.useReducer = useReducer;
    exports.useRef = useRef;
    exports.useState = useState;
    exports.version = ReactVersion;
  })();
}

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}

/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler-tracing.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler-tracing.development.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.17.0
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


if (true) {
  (function () {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    }); // Helps identify side effects in begin-phase lifecycle hooks and setState reducers:
    // In some cases, StrictMode should also double-render lifecycles.
    // This can be confusing for tests though,
    // And it can be bad for performance in production.
    // This feature flag can be used to control the behavior:
    // To preserve the "Pause on caught exceptions" behavior of the debugger, we
    // replay the begin phase of a failed component inside invokeGuardedCallback.
    // Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:
    // Gather advanced timing metrics for Profiler subtrees.
    // Trace which interactions trigger each commit.

    var enableSchedulerTracing = true; // SSR experiments
    // Only used in www builds.
    // Only used in www builds.
    // Disable javascript: URL strings in href for XSS protection.
    // React Fire: prevent the value and checked attributes from syncing
    // with their related DOM properties
    // These APIs will no longer be "unstable" in the upcoming 16.7 release,
    // Control this behavior with a flag to support 16.6 minor releases in the meanwhile.
    // Experimental React Flare event system and event components support.
    // Experimental Host Component support.
    // Experimental Scope support.
    // New API for JSX transforms to target - https://github.com/reactjs/rfcs/pull/107
    // We will enforce mocking scheduler with scheduler/unstable_mock at some point. (v17?)
    // Till then, we warn about the missing mock, but still fallback to a sync mode compatible version
    // For tests, we flush suspense fallbacks in an act scope;
    // *except* in some of our own tests, where we test incremental loading states.
    // Add a callback property to suspense to notify which promises are currently
    // in the update queue. This allows reporting and tracing of what is causing
    // the user to see a loading state.
    // Also allows hydration callbacks to fire when a dehydrated boundary gets
    // hydrated or deleted.
    // Part of the simplification of React.createElement so we can eventually move
    // from React.createElement to React.jsx
    // https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md

    var DEFAULT_THREAD_ID = 0; // Counters used to generate unique IDs.

    var interactionIDCounter = 0;
    var threadIDCounter = 0; // Set of currently traced interactions.
    // Interactions "stack"–
    // Meaning that newly traced interactions are appended to the previously active set.
    // When an interaction goes out of scope, the previous set (if any) is restored.

    exports.__interactionsRef = null; // Listener(s) to notify when interactions begin and end.

    exports.__subscriberRef = null;

    if (enableSchedulerTracing) {
      exports.__interactionsRef = {
        current: new Set()
      };
      exports.__subscriberRef = {
        current: null
      };
    }

    function unstable_clear(callback) {
      if (!enableSchedulerTracing) {
        return callback();
      }

      var prevInteractions = exports.__interactionsRef.current;
      exports.__interactionsRef.current = new Set();

      try {
        return callback();
      } finally {
        exports.__interactionsRef.current = prevInteractions;
      }
    }

    function unstable_getCurrent() {
      if (!enableSchedulerTracing) {
        return null;
      } else {
        return exports.__interactionsRef.current;
      }
    }

    function unstable_getThreadID() {
      return ++threadIDCounter;
    }

    function unstable_trace(name, timestamp, callback) {
      var threadID = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_THREAD_ID;

      if (!enableSchedulerTracing) {
        return callback();
      }

      var interaction = {
        __count: 1,
        id: interactionIDCounter++,
        name: name,
        timestamp: timestamp
      };
      var prevInteractions = exports.__interactionsRef.current; // Traced interactions should stack/accumulate.
      // To do that, clone the current interactions.
      // The previous set will be restored upon completion.

      var interactions = new Set(prevInteractions);
      interactions.add(interaction);
      exports.__interactionsRef.current = interactions;
      var subscriber = exports.__subscriberRef.current;
      var returnValue;

      try {
        if (subscriber !== null) {
          subscriber.onInteractionTraced(interaction);
        }
      } finally {
        try {
          if (subscriber !== null) {
            subscriber.onWorkStarted(interactions, threadID);
          }
        } finally {
          try {
            returnValue = callback();
          } finally {
            exports.__interactionsRef.current = prevInteractions;

            try {
              if (subscriber !== null) {
                subscriber.onWorkStopped(interactions, threadID);
              }
            } finally {
              interaction.__count--; // If no async work was scheduled for this interaction,
              // Notify subscribers that it's completed.

              if (subscriber !== null && interaction.__count === 0) {
                subscriber.onInteractionScheduledWorkCompleted(interaction);
              }
            }
          }
        }
      }

      return returnValue;
    }

    function unstable_wrap(callback) {
      var threadID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_THREAD_ID;

      if (!enableSchedulerTracing) {
        return callback;
      }

      var wrappedInteractions = exports.__interactionsRef.current;
      var subscriber = exports.__subscriberRef.current;

      if (subscriber !== null) {
        subscriber.onWorkScheduled(wrappedInteractions, threadID);
      } // Update the pending async work count for the current interactions.
      // Update after calling subscribers in case of error.


      wrappedInteractions.forEach(function (interaction) {
        interaction.__count++;
      });
      var hasRun = false;

      function wrapped() {
        var prevInteractions = exports.__interactionsRef.current;
        exports.__interactionsRef.current = wrappedInteractions;
        subscriber = exports.__subscriberRef.current;

        try {
          var returnValue;

          try {
            if (subscriber !== null) {
              subscriber.onWorkStarted(wrappedInteractions, threadID);
            }
          } finally {
            try {
              returnValue = callback.apply(undefined, arguments);
            } finally {
              exports.__interactionsRef.current = prevInteractions;

              if (subscriber !== null) {
                subscriber.onWorkStopped(wrappedInteractions, threadID);
              }
            }
          }

          return returnValue;
        } finally {
          if (!hasRun) {
            // We only expect a wrapped function to be executed once,
            // But in the event that it's executed more than once–
            // Only decrement the outstanding interaction counts once.
            hasRun = true; // Update pending async counts for all wrapped interactions.
            // If this was the last scheduled async work for any of them,
            // Mark them as completed.

            wrappedInteractions.forEach(function (interaction) {
              interaction.__count--;

              if (subscriber !== null && interaction.__count === 0) {
                subscriber.onInteractionScheduledWorkCompleted(interaction);
              }
            });
          }
        }
      }

      wrapped.cancel = function cancel() {
        subscriber = exports.__subscriberRef.current;

        try {
          if (subscriber !== null) {
            subscriber.onWorkCanceled(wrappedInteractions, threadID);
          }
        } finally {
          // Update pending async counts for all wrapped interactions.
          // If this was the last scheduled async work for any of them,
          // Mark them as completed.
          wrappedInteractions.forEach(function (interaction) {
            interaction.__count--;

            if (subscriber && interaction.__count === 0) {
              subscriber.onInteractionScheduledWorkCompleted(interaction);
            }
          });
        }
      };

      return wrapped;
    }

    var subscribers = null;

    if (enableSchedulerTracing) {
      subscribers = new Set();
    }

    function unstable_subscribe(subscriber) {
      if (enableSchedulerTracing) {
        subscribers.add(subscriber);

        if (subscribers.size === 1) {
          exports.__subscriberRef.current = {
            onInteractionScheduledWorkCompleted: onInteractionScheduledWorkCompleted,
            onInteractionTraced: onInteractionTraced,
            onWorkCanceled: onWorkCanceled,
            onWorkScheduled: onWorkScheduled,
            onWorkStarted: onWorkStarted,
            onWorkStopped: onWorkStopped
          };
        }
      }
    }

    function unstable_unsubscribe(subscriber) {
      if (enableSchedulerTracing) {
        subscribers.delete(subscriber);

        if (subscribers.size === 0) {
          exports.__subscriberRef.current = null;
        }
      }
    }

    function onInteractionTraced(interaction) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onInteractionTraced(interaction);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onInteractionScheduledWorkCompleted(interaction) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onInteractionScheduledWorkCompleted(interaction);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onWorkScheduled(interactions, threadID) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onWorkScheduled(interactions, threadID);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onWorkStarted(interactions, threadID) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onWorkStarted(interactions, threadID);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onWorkStopped(interactions, threadID) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onWorkStopped(interactions, threadID);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onWorkCanceled(interactions, threadID) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onWorkCanceled(interactions, threadID);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    exports.unstable_clear = unstable_clear;
    exports.unstable_getCurrent = unstable_getCurrent;
    exports.unstable_getThreadID = unstable_getThreadID;
    exports.unstable_trace = unstable_trace;
    exports.unstable_wrap = unstable_wrap;
    exports.unstable_subscribe = unstable_subscribe;
    exports.unstable_unsubscribe = unstable_unsubscribe;
  })();
}

/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.development.js":
/*!*************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.development.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window, navigator) {/** @license React v0.17.0
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js").default;

if (true) {
  (function () {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    var enableSchedulerDebugging = false;
    var enableIsInputPending = false;
    var enableMessageLoopImplementation = true;
    var enableProfiling = true; // works by scheduling a requestAnimationFrame, storing the time for the start
    // of the frame, then scheduling a postMessage which gets scheduled after paint.
    // Within the postMessage handler do as much work as possible until time + frame
    // rate. By separating the idle call into a separate event tick we ensure that
    // layout, paint and other browser work is counted against the available time.
    // The frame rate is dynamically adjusted.

    var _requestHostCallback;

    var requestHostTimeout;
    var cancelHostTimeout;
    var shouldYieldToHost;
    var requestPaint;

    if ( // If Scheduler runs in a non-DOM environment, it falls back to a naive
    // implementation using setTimeout.
    typeof window === 'undefined' || // Check if MessageChannel is supported, too.
    typeof MessageChannel !== 'function') {
      // If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,
      // fallback to a naive implementation.
      var _callback = null;
      var _timeoutID = null;

      var _flushCallback = function _flushCallback() {
        if (_callback !== null) {
          try {
            var currentTime = exports.unstable_now();
            var hasRemainingTime = true;

            _callback(hasRemainingTime, currentTime);

            _callback = null;
          } catch (e) {
            setTimeout(_flushCallback, 0);
            throw e;
          }
        }
      };

      var initialTime = Date.now();

      exports.unstable_now = function () {
        return Date.now() - initialTime;
      };

      _requestHostCallback = function requestHostCallback(cb) {
        if (_callback !== null) {
          // Protect against re-entrancy.
          setTimeout(_requestHostCallback, 0, cb);
        } else {
          _callback = cb;
          setTimeout(_flushCallback, 0);
        }
      };

      requestHostTimeout = function requestHostTimeout(cb, ms) {
        _timeoutID = setTimeout(cb, ms);
      };

      cancelHostTimeout = function cancelHostTimeout() {
        clearTimeout(_timeoutID);
      };

      shouldYieldToHost = function shouldYieldToHost() {
        return false;
      };

      requestPaint = exports.unstable_forceFrameRate = function () {};
    } else {
      // Capture local references to native APIs, in case a polyfill overrides them.
      var performance = window.performance;
      var _Date = window.Date;
      var _setTimeout = window.setTimeout;
      var _clearTimeout = window.clearTimeout;
      var requestAnimationFrame = window.requestAnimationFrame;
      var cancelAnimationFrame = window.cancelAnimationFrame;

      if (typeof console !== 'undefined') {
        // TODO: Remove fb.me link
        if (typeof requestAnimationFrame !== 'function') {
          console.error("This browser doesn't support requestAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
        }

        if (typeof cancelAnimationFrame !== 'function') {
          console.error("This browser doesn't support cancelAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
        }
      }

      if (_typeof(performance) === 'object' && typeof performance.now === 'function') {
        exports.unstable_now = function () {
          return performance.now();
        };
      } else {
        var _initialTime = _Date.now();

        exports.unstable_now = function () {
          return _Date.now() - _initialTime;
        };
      }

      var isRAFLoopRunning = false;
      var isMessageLoopRunning = false;
      var scheduledHostCallback = null;
      var rAFTimeoutID = -1;
      var taskTimeoutID = -1;
      var frameLength = enableMessageLoopImplementation ? // We won't attempt to align with the vsync. Instead we'll yield multiple
      // times per frame, often enough to keep it responsive even at really
      // high frame rates > 120.
      5 : // Use a heuristic to measure the frame rate and yield at the end of the
      // frame. We start out assuming that we run at 30fps but then the
      // heuristic tracking will adjust this value to a faster fps if we get
      // more frequent animation frames.
      33.33;
      var prevRAFTime = -1;
      var prevRAFInterval = -1;
      var frameDeadline = 0;
      var fpsLocked = false; // TODO: Make this configurable
      // TODO: Adjust this based on priority?

      var maxFrameLength = 300;
      var needsPaint = false;

      if (enableIsInputPending && navigator !== undefined && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined) {
        var scheduling = navigator.scheduling;

        shouldYieldToHost = function shouldYieldToHost() {
          var currentTime = exports.unstable_now();

          if (currentTime >= frameDeadline) {
            // There's no time left in the frame. We may want to yield control of
            // the main thread, so the browser can perform high priority tasks. The
            // main ones are painting and user input. If there's a pending paint or
            // a pending input, then we should yield. But if there's neither, then
            // we can yield less often while remaining responsive. We'll eventually
            // yield regardless, since there could be a pending paint that wasn't
            // accompanied by a call to `requestPaint`, or other main thread tasks
            // like network events.
            if (needsPaint || scheduling.isInputPending()) {
              // There is either a pending paint or a pending input.
              return true;
            } // There's no pending input. Only yield if we've reached the max
            // frame length.


            return currentTime >= frameDeadline + maxFrameLength;
          } else {
            // There's still time left in the frame.
            return false;
          }
        };

        requestPaint = function requestPaint() {
          needsPaint = true;
        };
      } else {
        // `isInputPending` is not available. Since we have no way of knowing if
        // there's pending input, always yield at the end of the frame.
        shouldYieldToHost = function shouldYieldToHost() {
          return exports.unstable_now() >= frameDeadline;
        }; // Since we yield every frame regardless, `requestPaint` has no effect.


        requestPaint = function requestPaint() {};
      }

      exports.unstable_forceFrameRate = function (fps) {
        if (fps < 0 || fps > 125) {
          console.error('forceFrameRate takes a positive int between 0 and 125, ' + 'forcing framerates higher than 125 fps is not unsupported');
          return;
        }

        if (fps > 0) {
          frameLength = Math.floor(1000 / fps);
          fpsLocked = true;
        } else {
          // reset the framerate
          frameLength = 33.33;
          fpsLocked = false;
        }
      };

      var performWorkUntilDeadline = function performWorkUntilDeadline() {
        if (enableMessageLoopImplementation) {
          if (scheduledHostCallback !== null) {
            var currentTime = exports.unstable_now(); // Yield after `frameLength` ms, regardless of where we are in the vsync
            // cycle. This means there's always time remaining at the beginning of
            // the message event.

            frameDeadline = currentTime + frameLength;
            var hasTimeRemaining = true;

            try {
              var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);

              if (!hasMoreWork) {
                isMessageLoopRunning = false;
                scheduledHostCallback = null;
              } else {
                // If there's more work, schedule the next message event at the end
                // of the preceding one.
                port.postMessage(null);
              }
            } catch (error) {
              // If a scheduler task throws, exit the current browser task so the
              // error can be observed.
              port.postMessage(null);
              throw error;
            }
          } else {
            isMessageLoopRunning = false;
          } // Yielding to the browser will give it a chance to paint, so we can
          // reset this.


          needsPaint = false;
        } else {
          if (scheduledHostCallback !== null) {
            var _currentTime = exports.unstable_now();

            var _hasTimeRemaining = frameDeadline - _currentTime > 0;

            try {
              var _hasMoreWork = scheduledHostCallback(_hasTimeRemaining, _currentTime);

              if (!_hasMoreWork) {
                scheduledHostCallback = null;
              }
            } catch (error) {
              // If a scheduler task throws, exit the current browser task so the
              // error can be observed, and post a new task as soon as possible
              // so we can continue where we left off.
              port.postMessage(null);
              throw error;
            }
          } // Yielding to the browser will give it a chance to paint, so we can
          // reset this.


          needsPaint = false;
        }
      };

      var channel = new MessageChannel();
      var port = channel.port2;
      channel.port1.onmessage = performWorkUntilDeadline;

      var onAnimationFrame = function onAnimationFrame(rAFTime) {
        if (scheduledHostCallback === null) {
          // No scheduled work. Exit.
          prevRAFTime = -1;
          prevRAFInterval = -1;
          isRAFLoopRunning = false;
          return;
        } // Eagerly schedule the next animation callback at the beginning of the
        // frame. If the scheduler queue is not empty at the end of the frame, it
        // will continue flushing inside that callback. If the queue *is* empty,
        // then it will exit immediately. Posting the callback at the start of the
        // frame ensures it's fired within the earliest possible frame. If we
        // waited until the end of the frame to post the callback, we risk the
        // browser skipping a frame and not firing the callback until the frame
        // after that.


        isRAFLoopRunning = true;
        requestAnimationFrame(function (nextRAFTime) {
          _clearTimeout(rAFTimeoutID);

          onAnimationFrame(nextRAFTime);
        }); // requestAnimationFrame is throttled when the tab is backgrounded. We
        // don't want to stop working entirely. So we'll fallback to a timeout loop.
        // TODO: Need a better heuristic for backgrounded work.

        var onTimeout = function onTimeout() {
          frameDeadline = exports.unstable_now() + frameLength / 2;
          performWorkUntilDeadline();
          rAFTimeoutID = _setTimeout(onTimeout, frameLength * 3);
        };

        rAFTimeoutID = _setTimeout(onTimeout, frameLength * 3);

        if (prevRAFTime !== -1 && // Make sure this rAF time is different from the previous one. This check
        // could fail if two rAFs fire in the same frame.
        rAFTime - prevRAFTime > 0.1) {
          var rAFInterval = rAFTime - prevRAFTime;

          if (!fpsLocked && prevRAFInterval !== -1) {
            // We've observed two consecutive frame intervals. We'll use this to
            // dynamically adjust the frame rate.
            //
            // If one frame goes long, then the next one can be short to catch up.
            // If two frames are short in a row, then that's an indication that we
            // actually have a higher frame rate than what we're currently
            // optimizing. For example, if we're running on 120hz display or 90hz VR
            // display. Take the max of the two in case one of them was an anomaly
            // due to missed frame deadlines.
            if (rAFInterval < frameLength && prevRAFInterval < frameLength) {
              frameLength = rAFInterval < prevRAFInterval ? prevRAFInterval : rAFInterval;

              if (frameLength < 8.33) {
                // Defensive coding. We don't support higher frame rates than 120hz.
                // If the calculated frame length gets lower than 8, it is probably
                // a bug.
                frameLength = 8.33;
              }
            }
          }

          prevRAFInterval = rAFInterval;
        }

        prevRAFTime = rAFTime;
        frameDeadline = rAFTime + frameLength; // We use the postMessage trick to defer idle work until after the repaint.

        port.postMessage(null);
      };

      _requestHostCallback = function _requestHostCallback(callback) {
        scheduledHostCallback = callback;

        if (enableMessageLoopImplementation) {
          if (!isMessageLoopRunning) {
            isMessageLoopRunning = true;
            port.postMessage(null);
          }
        } else {
          if (!isRAFLoopRunning) {
            // Start a rAF loop.
            isRAFLoopRunning = true;
            requestAnimationFrame(function (rAFTime) {
              onAnimationFrame(rAFTime);
            });
          }
        }
      };

      requestHostTimeout = function requestHostTimeout(callback, ms) {
        taskTimeoutID = _setTimeout(function () {
          callback(exports.unstable_now());
        }, ms);
      };

      cancelHostTimeout = function cancelHostTimeout() {
        _clearTimeout(taskTimeoutID);

        taskTimeoutID = -1;
      };
    }

    function push(heap, node) {
      var index = heap.length;
      heap.push(node);
      siftUp(heap, node, index);
    }

    function peek(heap) {
      var first = heap[0];
      return first === undefined ? null : first;
    }

    function pop(heap) {
      var first = heap[0];

      if (first !== undefined) {
        var last = heap.pop();

        if (last !== first) {
          heap[0] = last;
          siftDown(heap, last, 0);
        }

        return first;
      } else {
        return null;
      }
    }

    function siftUp(heap, node, i) {
      var index = i;

      while (true) {
        var parentIndex = Math.floor((index - 1) / 2);
        var parent = heap[parentIndex];

        if (parent !== undefined && compare(parent, node) > 0) {
          // The parent is larger. Swap positions.
          heap[parentIndex] = node;
          heap[index] = parent;
          index = parentIndex;
        } else {
          // The parent is smaller. Exit.
          return;
        }
      }
    }

    function siftDown(heap, node, i) {
      var index = i;
      var length = heap.length;

      while (index < length) {
        var leftIndex = (index + 1) * 2 - 1;
        var left = heap[leftIndex];
        var rightIndex = leftIndex + 1;
        var right = heap[rightIndex]; // If the left or right node is smaller, swap with the smaller of those.

        if (left !== undefined && compare(left, node) < 0) {
          if (right !== undefined && compare(right, left) < 0) {
            heap[index] = right;
            heap[rightIndex] = node;
            index = rightIndex;
          } else {
            heap[index] = left;
            heap[leftIndex] = node;
            index = leftIndex;
          }
        } else if (right !== undefined && compare(right, node) < 0) {
          heap[index] = right;
          heap[rightIndex] = node;
          index = rightIndex;
        } else {
          // Neither child is smaller. Exit.
          return;
        }
      }
    }

    function compare(a, b) {
      // Compare sort index first, then task id.
      var diff = a.sortIndex - b.sortIndex;
      return diff !== 0 ? diff : a.id - b.id;
    } // TODO: Use symbols?


    var NoPriority = 0;
    var ImmediatePriority = 1;
    var UserBlockingPriority = 2;
    var NormalPriority = 3;
    var LowPriority = 4;
    var IdlePriority = 5;
    var runIdCounter = 0;
    var mainThreadIdCounter = 0;
    var profilingStateSize = 4;
    var sharedProfilingBuffer = enableProfiling ? // $FlowFixMe Flow doesn't know about SharedArrayBuffer
    typeof SharedArrayBuffer === 'function' ? new SharedArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT) : // $FlowFixMe Flow doesn't know about ArrayBuffer
    typeof ArrayBuffer === 'function' ? new ArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT) : null // Don't crash the init path on IE9
    : null;
    var profilingState = enableProfiling && sharedProfilingBuffer !== null ? new Int32Array(sharedProfilingBuffer) : []; // We can't read this but it helps save bytes for null checks

    var PRIORITY = 0;
    var CURRENT_TASK_ID = 1;
    var CURRENT_RUN_ID = 2;
    var QUEUE_SIZE = 3;

    if (enableProfiling) {
      profilingState[PRIORITY] = NoPriority; // This is maintained with a counter, because the size of the priority queue
      // array might include canceled tasks.

      profilingState[QUEUE_SIZE] = 0;
      profilingState[CURRENT_TASK_ID] = 0;
    } // Bytes per element is 4


    var INITIAL_EVENT_LOG_SIZE = 131072;
    var MAX_EVENT_LOG_SIZE = 524288; // Equivalent to 2 megabytes

    var eventLogSize = 0;
    var eventLogBuffer = null;
    var eventLog = null;
    var eventLogIndex = 0;
    var TaskStartEvent = 1;
    var TaskCompleteEvent = 2;
    var TaskErrorEvent = 3;
    var TaskCancelEvent = 4;
    var TaskRunEvent = 5;
    var TaskYieldEvent = 6;
    var SchedulerSuspendEvent = 7;
    var SchedulerResumeEvent = 8;

    function logEvent(entries) {
      if (eventLog !== null) {
        var offset = eventLogIndex;
        eventLogIndex += entries.length;

        if (eventLogIndex + 1 > eventLogSize) {
          eventLogSize *= 2;

          if (eventLogSize > MAX_EVENT_LOG_SIZE) {
            console.error("Scheduler Profiling: Event log exceeded maximum size. Don't " + 'forget to call `stopLoggingProfilingEvents()`.');
            stopLoggingProfilingEvents();
            return;
          }

          var newEventLog = new Int32Array(eventLogSize * 4);
          newEventLog.set(eventLog);
          eventLogBuffer = newEventLog.buffer;
          eventLog = newEventLog;
        }

        eventLog.set(entries, offset);
      }
    }

    function startLoggingProfilingEvents() {
      eventLogSize = INITIAL_EVENT_LOG_SIZE;
      eventLogBuffer = new ArrayBuffer(eventLogSize * 4);
      eventLog = new Int32Array(eventLogBuffer);
      eventLogIndex = 0;
    }

    function stopLoggingProfilingEvents() {
      var buffer = eventLogBuffer;
      eventLogSize = 0;
      eventLogBuffer = null;
      eventLog = null;
      eventLogIndex = 0;
      return buffer;
    }

    function markTaskStart(task, ms) {
      if (enableProfiling) {
        profilingState[QUEUE_SIZE]++;

        if (eventLog !== null) {
          // performance.now returns a float, representing milliseconds. When the
          // event is logged, it's coerced to an int. Convert to microseconds to
          // maintain extra degrees of precision.
          logEvent([TaskStartEvent, ms * 1000, task.id, task.priorityLevel]);
        }
      }
    }

    function markTaskCompleted(task, ms) {
      if (enableProfiling) {
        profilingState[PRIORITY] = NoPriority;
        profilingState[CURRENT_TASK_ID] = 0;
        profilingState[QUEUE_SIZE]--;

        if (eventLog !== null) {
          logEvent([TaskCompleteEvent, ms * 1000, task.id]);
        }
      }
    }

    function markTaskCanceled(task, ms) {
      if (enableProfiling) {
        profilingState[QUEUE_SIZE]--;

        if (eventLog !== null) {
          logEvent([TaskCancelEvent, ms * 1000, task.id]);
        }
      }
    }

    function markTaskErrored(task, ms) {
      if (enableProfiling) {
        profilingState[PRIORITY] = NoPriority;
        profilingState[CURRENT_TASK_ID] = 0;
        profilingState[QUEUE_SIZE]--;

        if (eventLog !== null) {
          logEvent([TaskErrorEvent, ms * 1000, task.id]);
        }
      }
    }

    function markTaskRun(task, ms) {
      if (enableProfiling) {
        runIdCounter++;
        profilingState[PRIORITY] = task.priorityLevel;
        profilingState[CURRENT_TASK_ID] = task.id;
        profilingState[CURRENT_RUN_ID] = runIdCounter;

        if (eventLog !== null) {
          logEvent([TaskRunEvent, ms * 1000, task.id, runIdCounter]);
        }
      }
    }

    function markTaskYield(task, ms) {
      if (enableProfiling) {
        profilingState[PRIORITY] = NoPriority;
        profilingState[CURRENT_TASK_ID] = 0;
        profilingState[CURRENT_RUN_ID] = 0;

        if (eventLog !== null) {
          logEvent([TaskYieldEvent, ms * 1000, task.id, runIdCounter]);
        }
      }
    }

    function markSchedulerSuspended(ms) {
      if (enableProfiling) {
        mainThreadIdCounter++;

        if (eventLog !== null) {
          logEvent([SchedulerSuspendEvent, ms * 1000, mainThreadIdCounter]);
        }
      }
    }

    function markSchedulerUnsuspended(ms) {
      if (enableProfiling) {
        if (eventLog !== null) {
          logEvent([SchedulerResumeEvent, ms * 1000, mainThreadIdCounter]);
        }
      }
    }
    /* eslint-disable no-var */
    // Math.pow(2, 30) - 1
    // 0b111111111111111111111111111111


    var maxSigned31BitInt = 1073741823; // Times out immediately

    var IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out

    var USER_BLOCKING_PRIORITY = 250;
    var NORMAL_PRIORITY_TIMEOUT = 5000;
    var LOW_PRIORITY_TIMEOUT = 10000; // Never times out

    var IDLE_PRIORITY = maxSigned31BitInt; // Tasks are stored on a min heap

    var taskQueue = [];
    var timerQueue = []; // Incrementing id counter. Used to maintain insertion order.

    var taskIdCounter = 1; // Pausing the scheduler is useful for debugging.

    var isSchedulerPaused = false;
    var currentTask = null;
    var currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrancy.

    var isPerformingWork = false;
    var isHostCallbackScheduled = false;
    var isHostTimeoutScheduled = false;

    function advanceTimers(currentTime) {
      // Check for tasks that are no longer delayed and add them to the queue.
      var timer = peek(timerQueue);

      while (timer !== null) {
        if (timer.callback === null) {
          // Timer was cancelled.
          pop(timerQueue);
        } else if (timer.startTime <= currentTime) {
          // Timer fired. Transfer to the task queue.
          pop(timerQueue);
          timer.sortIndex = timer.expirationTime;
          push(taskQueue, timer);

          if (enableProfiling) {
            markTaskStart(timer, currentTime);
            timer.isQueued = true;
          }
        } else {
          // Remaining timers are pending.
          return;
        }

        timer = peek(timerQueue);
      }
    }

    function handleTimeout(currentTime) {
      isHostTimeoutScheduled = false;
      advanceTimers(currentTime);

      if (!isHostCallbackScheduled) {
        if (peek(taskQueue) !== null) {
          isHostCallbackScheduled = true;

          _requestHostCallback(flushWork);
        } else {
          var firstTimer = peek(timerQueue);

          if (firstTimer !== null) {
            requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
          }
        }
      }
    }

    function flushWork(hasTimeRemaining, initialTime) {
      if (enableProfiling) {
        markSchedulerUnsuspended(initialTime);
      } // We'll need a host callback the next time work is scheduled.


      isHostCallbackScheduled = false;

      if (isHostTimeoutScheduled) {
        // We scheduled a timeout but it's no longer needed. Cancel it.
        isHostTimeoutScheduled = false;
        cancelHostTimeout();
      }

      isPerformingWork = true;
      var previousPriorityLevel = currentPriorityLevel;

      try {
        if (enableProfiling) {
          try {
            return workLoop(hasTimeRemaining, initialTime);
          } catch (error) {
            if (currentTask !== null) {
              var currentTime = exports.unstable_now();
              markTaskErrored(currentTask, currentTime);
              currentTask.isQueued = false;
            }

            throw error;
          }
        } else {
          // No catch in prod codepath.
          return workLoop(hasTimeRemaining, initialTime);
        }
      } finally {
        currentTask = null;
        currentPriorityLevel = previousPriorityLevel;
        isPerformingWork = false;

        if (enableProfiling) {
          var _currentTime = exports.unstable_now();

          markSchedulerSuspended(_currentTime);
        }
      }
    }

    function workLoop(hasTimeRemaining, initialTime) {
      var currentTime = initialTime;
      advanceTimers(currentTime);
      currentTask = peek(taskQueue);

      while (currentTask !== null && !(enableSchedulerDebugging && isSchedulerPaused)) {
        if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {
          // This currentTask hasn't expired, and we've reached the deadline.
          break;
        }

        var callback = currentTask.callback;

        if (callback !== null) {
          currentTask.callback = null;
          currentPriorityLevel = currentTask.priorityLevel;
          var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
          markTaskRun(currentTask, currentTime);
          var continuationCallback = callback(didUserCallbackTimeout);
          currentTime = exports.unstable_now();

          if (typeof continuationCallback === 'function') {
            currentTask.callback = continuationCallback;
            markTaskYield(currentTask, currentTime);
          } else {
            if (enableProfiling) {
              markTaskCompleted(currentTask, currentTime);
              currentTask.isQueued = false;
            }

            if (currentTask === peek(taskQueue)) {
              pop(taskQueue);
            }
          }

          advanceTimers(currentTime);
        } else {
          pop(taskQueue);
        }

        currentTask = peek(taskQueue);
      } // Return whether there's additional work


      if (currentTask !== null) {
        return true;
      } else {
        var firstTimer = peek(timerQueue);

        if (firstTimer !== null) {
          requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
        }

        return false;
      }
    }

    function unstable_runWithPriority(priorityLevel, eventHandler) {
      switch (priorityLevel) {
        case ImmediatePriority:
        case UserBlockingPriority:
        case NormalPriority:
        case LowPriority:
        case IdlePriority:
          break;

        default:
          priorityLevel = NormalPriority;
      }

      var previousPriorityLevel = currentPriorityLevel;
      currentPriorityLevel = priorityLevel;

      try {
        return eventHandler();
      } finally {
        currentPriorityLevel = previousPriorityLevel;
      }
    }

    function unstable_next(eventHandler) {
      var priorityLevel;

      switch (currentPriorityLevel) {
        case ImmediatePriority:
        case UserBlockingPriority:
        case NormalPriority:
          // Shift down to normal priority
          priorityLevel = NormalPriority;
          break;

        default:
          // Anything lower than normal priority should remain at the current level.
          priorityLevel = currentPriorityLevel;
          break;
      }

      var previousPriorityLevel = currentPriorityLevel;
      currentPriorityLevel = priorityLevel;

      try {
        return eventHandler();
      } finally {
        currentPriorityLevel = previousPriorityLevel;
      }
    }

    function unstable_wrapCallback(callback) {
      var parentPriorityLevel = currentPriorityLevel;
      return function () {
        // This is a fork of runWithPriority, inlined for performance.
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = parentPriorityLevel;

        try {
          return callback.apply(this, arguments);
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      };
    }

    function timeoutForPriorityLevel(priorityLevel) {
      switch (priorityLevel) {
        case ImmediatePriority:
          return IMMEDIATE_PRIORITY_TIMEOUT;

        case UserBlockingPriority:
          return USER_BLOCKING_PRIORITY;

        case IdlePriority:
          return IDLE_PRIORITY;

        case LowPriority:
          return LOW_PRIORITY_TIMEOUT;

        case NormalPriority:
        default:
          return NORMAL_PRIORITY_TIMEOUT;
      }
    }

    function unstable_scheduleCallback(priorityLevel, callback, options) {
      var currentTime = exports.unstable_now();
      var startTime;
      var timeout;

      if (_typeof(options) === 'object' && options !== null) {
        var delay = options.delay;

        if (typeof delay === 'number' && delay > 0) {
          startTime = currentTime + delay;
        } else {
          startTime = currentTime;
        }

        timeout = typeof options.timeout === 'number' ? options.timeout : timeoutForPriorityLevel(priorityLevel);
      } else {
        timeout = timeoutForPriorityLevel(priorityLevel);
        startTime = currentTime;
      }

      var expirationTime = startTime + timeout;
      var newTask = {
        id: taskIdCounter++,
        callback: callback,
        priorityLevel: priorityLevel,
        startTime: startTime,
        expirationTime: expirationTime,
        sortIndex: -1
      };

      if (enableProfiling) {
        newTask.isQueued = false;
      }

      if (startTime > currentTime) {
        // This is a delayed task.
        newTask.sortIndex = startTime;
        push(timerQueue, newTask);

        if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
          // All tasks are delayed, and this is the task with the earliest delay.
          if (isHostTimeoutScheduled) {
            // Cancel an existing timeout.
            cancelHostTimeout();
          } else {
            isHostTimeoutScheduled = true;
          } // Schedule a timeout.


          requestHostTimeout(handleTimeout, startTime - currentTime);
        }
      } else {
        newTask.sortIndex = expirationTime;
        push(taskQueue, newTask);

        if (enableProfiling) {
          markTaskStart(newTask, currentTime);
          newTask.isQueued = true;
        } // Schedule a host callback, if needed. If we're already performing work,
        // wait until the next time we yield.


        if (!isHostCallbackScheduled && !isPerformingWork) {
          isHostCallbackScheduled = true;

          _requestHostCallback(flushWork);
        }
      }

      return newTask;
    }

    function unstable_pauseExecution() {
      isSchedulerPaused = true;
    }

    function unstable_continueExecution() {
      isSchedulerPaused = false;

      if (!isHostCallbackScheduled && !isPerformingWork) {
        isHostCallbackScheduled = true;

        _requestHostCallback(flushWork);
      }
    }

    function unstable_getFirstCallbackNode() {
      return peek(taskQueue);
    }

    function unstable_cancelCallback(task) {
      if (enableProfiling) {
        if (task.isQueued) {
          var currentTime = exports.unstable_now();
          markTaskCanceled(task, currentTime);
          task.isQueued = false;
        }
      } // Null out the callback to indicate the task has been canceled. (Can't
      // remove from the queue because you can't remove arbitrary nodes from an
      // array based heap, only the first one.)


      task.callback = null;
    }

    function unstable_getCurrentPriorityLevel() {
      return currentPriorityLevel;
    }

    function unstable_shouldYield() {
      var currentTime = exports.unstable_now();
      advanceTimers(currentTime);
      var firstTask = peek(taskQueue);
      return firstTask !== currentTask && currentTask !== null && firstTask !== null && firstTask.callback !== null && firstTask.startTime <= currentTime && firstTask.expirationTime < currentTask.expirationTime || shouldYieldToHost();
    }

    var unstable_requestPaint = requestPaint;
    var unstable_Profiling = enableProfiling ? {
      startLoggingProfilingEvents: startLoggingProfilingEvents,
      stopLoggingProfilingEvents: stopLoggingProfilingEvents,
      sharedProfilingBuffer: sharedProfilingBuffer
    } : null;
    exports.unstable_ImmediatePriority = ImmediatePriority;
    exports.unstable_UserBlockingPriority = UserBlockingPriority;
    exports.unstable_NormalPriority = NormalPriority;
    exports.unstable_IdlePriority = IdlePriority;
    exports.unstable_LowPriority = LowPriority;
    exports.unstable_runWithPriority = unstable_runWithPriority;
    exports.unstable_next = unstable_next;
    exports.unstable_scheduleCallback = unstable_scheduleCallback;
    exports.unstable_cancelCallback = unstable_cancelCallback;
    exports.unstable_wrapCallback = unstable_wrapCallback;
    exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
    exports.unstable_shouldYield = unstable_shouldYield;
    exports.unstable_requestPaint = unstable_requestPaint;
    exports.unstable_continueExecution = unstable_continueExecution;
    exports.unstable_pauseExecution = unstable_pauseExecution;
    exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
    exports.unstable_Profiling = unstable_Profiling;
  })();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["navigator"]))

/***/ }),

/***/ "./node_modules/scheduler/index.js":
/*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/scheduler.development.js */ "./node_modules/scheduler/cjs/scheduler.development.js");
}

/***/ }),

/***/ "./node_modules/scheduler/tracing.js":
/*!*******************************************!*\
  !*** ./node_modules/scheduler/tracing.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/scheduler-tracing.development.js */ "./node_modules/scheduler/cjs/scheduler-tracing.development.js");
}

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(window) {var _typeof = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js").default;

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

}]);
//# sourceMappingURL=vendors.js.map