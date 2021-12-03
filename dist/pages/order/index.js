(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/order/index"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread2; });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/order/index.tsx":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/order/index.tsx ***!
  \****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_caiyifan_My_my_project_gumin_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_caiyifan_My_my_project_gumin_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ "./src/pages/order/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);






function Order() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    num: 0,
    activeTabIndex: 0,
    activeSwiperIndex: 0,
    currentState: false,
    historyState: false,
    historyOrder: [],
    currentOrder: [],
    subscript: [0, 1, 2]
  }),
      _useState2 = Object(_Users_caiyifan_My_my_project_gumin_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var switchTap = function switchTap(value) {
    return function () {
      setData(Object(_Users_caiyifan_My_my_project_gumin_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_caiyifan_My_my_project_gumin_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, data), {
        activeTabIndex: value
      }));
    };
  };

  var doListChange = function doListChange() {
    console.log('doListChange');
  };

  var gotoOrder = function gotoOrder() {
    console.log('gotoOrder');
  };

  var gotoDetail = function gotoDetail(value) {
    return function () {
      console.log('gotoDetail');
    };
  };

  var finishOrder = function finishOrder(value) {
    return function () {
      console.log('finishOrder');
    };
  };

  var orderAgain = function orderAgain() {
    console.log('orderAgain');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "page page_v"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "navigeterbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "bar_title"
  }, "\u8BA2\u5355\u5217\u8868")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "GM_tabs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "GM_tabs__item ".concat(data.activeTabIndex == 0 ? "GM_tabs__item_on" : ""),
    onClick: switchTap(0)
  }, "\u5F53\u524D\u8BA2\u5355"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "GM_tabs__item ".concat(data.activeTabIndex == 1 ? "GM_tabs__item_on" : ""),
    onClick: switchTap(1)
  }, "\u5386\u53F2\u8BA2\u5355")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "GM_swiper_list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Swiper */ "e"], {
    current: data.activeSwiperIndex,
    className: "GM_swiper_list_swiper",
    onChange: doListChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* SwiperItem */ "f"], {
    className: "GM_swiper_list_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* ScrollView */ "d"], {
    "scroll-y": true
  }, !data.currentState && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "state_none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
    src: "../../assets/GIF/order_bg.gif",
    className: "order_bg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "g"], {
    className: "desc"
  }, "\u60A8\u8FD8\u6CA1\u6709\u4E0B\u5355\uFF0C\u6765\u4E00\u676F\u5427~"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Button */ "a"], {
    onClick: gotoOrder
  }, "\u6765\u4E00\u676F")), data.currentState && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "bgc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "state_hot"
  }, data.currentOrder.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "order",
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "order_hd"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
      src: "../../assets/icons/shop.png"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "shop"
    }, item.shop), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "orderWay"
    }, item.orderWay), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "fill"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "state"
    }, item.state)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "time"
    }, item.time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "order_bd",
      onClick: gotoDetail(item.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "bd_pic"
    }, item.avatarUrl.length <= 3 ? item.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
        className: "orderPic",
        key: index,
        src: item.avatarUrl.url
      });
    }) : item.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
        className: "orderPic",
        key: index,
        src: item.avatarUrl.sub
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
        src: "https://static.gumingnc.com/guming-wechat/prod/files/images/ellipsis.png",
        className: "ellipsis"
      }));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "sum"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "price"
    }, "\uFFE5", item.sumPrice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "num"
    }, "\u5171", item.orderNum, "\u676F"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "order_ft"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Button */ "a"], {
      className: "again",
      onClick: finishOrder(item.id)
    }, "\u786E\u8BA4\u6536\u5230")));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* SwiperItem */ "f"], {
    className: "GM_swiper_list_item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* ScrollView */ "d"], {
    "scroll-y": true
  }, !data.historyState ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "state_none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
    src: "../../assets/GIF/order_bg.gif",
    className: "order_bg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "g"], {
    className: "desc"
  }, "\u60A8\u8FD8\u6CA1\u6709\u4E0B\u5355\uFF0C\u6765\u4E00\u676F\u5427~"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Button */ "a"], {
    onClick: gotoOrder
  }, "\u6765\u4E00\u676F")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "state_hot"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "bgc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "state_hot"
  }, data.historyOrder.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "order",
      key: index,
      onClick: gotoDetail(item.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "order_hd"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
      src: "../../assets/icons/shop.png"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "shop"
    }, item.shop), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "orderWay"
    }, item.orderWay), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "fill"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "state"
    }, item.state)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "time"
    }, item.time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "order_bd"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "bd_pic"
    }, item.avatarUrl.length <= 3 ? item.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
        className: "orderPic",
        key: index,
        src: item.avatarUrl.url
      });
    }) : item.map(function (item, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
        key: index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
        className: "orderPic",
        key: index,
        src: item.avatarUrl.sub
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
        src: "https://static.gumingnc.com/guming-wechat/prod/files/images/ellipsis.png",
        className: "ellipsis"
      }));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "sum"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "price"
    }, "\uFFE5", item.sumPrice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "num"
    }, "\u5171", item.orderNum, "\u676F"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "order_ft"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: "again",
      onClick: orderAgain
    }, "\u518D\u6765\u4E00\u5355")));
  })))))))));
}

/* harmony default export */ __webpack_exports__["a"] = (Order);

/***/ }),

/***/ "./src/pages/order/index.less":
/*!************************************!*\
  !*** ./src/pages/order/index.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/order/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/order/index.tsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./index.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/order/index.tsx");


var config = {"navigationBarTitleText":"订单","enablePullDownRefresh":true,"navigationStyle":"custom"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/order/index', {}, config || {}))



/***/ })

},[["./src/pages/order/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map