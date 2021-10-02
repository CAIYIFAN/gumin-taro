require("./runtime");
require("./vendors");
require("./taro");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/app.tsx":
/*!**************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/app.tsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _store_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/counter */ "./src/store/counter.ts");
/* harmony import */ var _app_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.less */ "./src/app.less");
/* harmony import */ var _app_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_less__WEBPACK_IMPORTED_MODULE_3__);




var store = {
  counterStore: _store_counter__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
};

function App(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mobx_react__WEBPACK_IMPORTED_MODULE_1__[/* Provider */ "a"], {
    store: store
  }, props.children);
}

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./src/app.less":
/*!**********************!*\
  !*** ./src/app.less ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_app_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./app.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/app.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/@tarojs/react/dist/react.esm.js");






var config = {"pages":["pages/index/index"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black"}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["window"].__taroAppConfig = config
var inst = App(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createReactApp"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_app_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], react__WEBPACK_IMPORTED_MODULE_2__, react_dom__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], config))



/***/ }),

/***/ "./src/store/counter.ts":
/*!******************************!*\
  !*** ./src/store/counter.ts ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var counterStore = Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* observable */ "l"])({
  counter: 0,
  counterStore: function counterStore() {
    this.counter++;
  },
  increment: function increment() {
    this.counter++;
  },
  decrement: function decrement() {
    this.counter--;
  },
  incrementAsync: function incrementAsync() {
    var _this = this;

    setTimeout(function () {
      _this.counter++;
    }, 1000);
  }
});
/* harmony default export */ __webpack_exports__["a"] = (counterStore);

/***/ })

},[["./src/app.tsx","runtime","taro","vendors"]]]);;
//# sourceMappingURL=app.js.map