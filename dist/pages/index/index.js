(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/index/index.tsx":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/index/index.tsx ***!
  \****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _components_check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/check */ "./src/components/check/index.tsx");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ "./src/pages/index/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);






function Index(props, ref) {
  var increment = function increment() {
    var counterStore = props.store.counterStore;
    counterStore.increment();
  };

  var decrement = function decrement() {
    var counterStore = props.store.counterStore;
    counterStore.decrement();
  };

  var incrementAsync = function incrementAsync() {
    var counterStore = props.store.counterStore;
    counterStore.incrementAsync();
  };

  var counter = props.store.counterStore.counter;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* View */ "d"], {
    className: "index"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Button */ "a"], {
    onClick: increment
  }, "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Button */ "a"], {
    onClick: decrement
  }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Button */ "a"], {
    onClick: incrementAsync
  }, "Add Async"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__[/* Text */ "c"], null, counter), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_check__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null));
}

/* harmony default export */ __webpack_exports__["a"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__[/* inject */ "b"])('store')(Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__[/* observer */ "c"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(Index))));

/***/ }),

/***/ "./src/components/check/index.less":
/*!*****************************************!*\
  !*** ./src/components/check/index.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/check/index.tsx":
/*!****************************************!*\
  !*** ./src/components/check/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ "./src/components/check/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);





function Check(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState4 = Object(_Users_caiyifan5_learn_gumin_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState3, 2),
      focusKey = _useState4[0],
      setFocusKey = _useState4[1];

  var inputHandle = function inputHandle(value) {
    console.log('asd', value);

    if (value.detail.value) {
      var tmp = data.concat(value.detail.value);
      setData(tmp);
    } else {
      var _tmp = data.concat();

      _tmp.pop();

      setData(_tmp);
      setFocusKey(data.length - 1);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // setFocusKey(data.length)
    console.log(111111);

    if (data.length === focusKey) {
      setFocusKey(data.length + 1);
    }
  }, [data.length]); // console.log(data)

  console.log('focusKey', focusKey, data);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "d"], {
    className: "check-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "d"], {
    className: "check-box-default"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "b"], {
    maxlength: 1,
    onInput: inputHandle,
    cursorSpacing: 10,
    focus: focusKey === 1,
    value: data[0]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "d"], {
    className: "check-box-default"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "b"], {
    maxlength: 1,
    onInput: inputHandle,
    cursorSpacing: 10,
    focus: focusKey === 2,
    value: data[1]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "d"], {
    className: "check-box-default"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "b"], {
    maxlength: 1,
    onInput: inputHandle,
    cursorSpacing: 10,
    focus: focusKey === 3,
    value: data[2]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "d"], {
    className: "check-box-default"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "b"], {
    maxlength: 1,
    onInput: inputHandle,
    cursorSpacing: 10,
    focus: focusKey > 3,
    value: data[3]
  })));
}

/* harmony default export */ __webpack_exports__["a"] = (Check);

/***/ }),

/***/ "./src/pages/index/index.less":
/*!************************************!*\
  !*** ./src/pages/index/index.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./index.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"首页"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index', {}, config || {}))



/***/ })

},[["./src/pages/index/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map