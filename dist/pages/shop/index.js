(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/shop/index"],{

/***/ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/shop/index.tsx":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./src/pages/shop/index.tsx ***!
  \***************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_caiyifan_My_my_project_gumin_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_caiyifan_My_my_project_gumin_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./src/pages/shop/data.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.less */ "./src/pages/shop/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_5__);






var top = [{
  id: '1',
  pic: 'http://img.gumingnc.com/newton/20210719061456CST25351626689696069.jpg'
}, {
  id: '2',
  pic: 'http://img.gumingnc.com/newton/20210610100235CST14641623290555407.png'
}, {
  id: '3',
  pic: 'https://img.gumingnc.com/newton/20210718033112CST76271626593472081.png'
}];

function Shop() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    top: top,
    orderIndex: [],
    orders: [],
    shopName: '',
    distance: '',
    left_bar: [{
      id: '1',
      title: '当季新品',
      pic: 'https://img.gumingnc.com/newton/20210414063740CST15781618396660776.png'
    }, {
      id: '1',
      title: '人气推荐',
      pic: 'https://img.gumingnc.com/newton/20210226051714CST35081614331034237.png'
    }, {
      id: '2',
      title: '限定果茶',
      pic: 'https://img.gumingnc.com/newton/20210429114425CST36841619667865295.png'
    }, {
      id: '3',
      title: '果茶系列',
      pic: 'https://img.gumingnc.com/newton/20210224044544CST59421614156344325.png '
    }, {
      id: '4',
      title: '冷萃咖啡',
      pic: 'https://img.gumingnc.com/newton/20210429052436CST40751619688276339.png'
    }, {
      id: '5',
      title: '芝士茗茶',
      pic: 'https://img.gumingnc.com/newton/20210429114434CST12671619667874729.png'
    }, {
      id: '6',
      title: '轻乳茶',
      pic: 'https://img.gumingnc.com/newton/20210429114449CST75211619667889377.png'
    }, {
      id: '7',
      title: '奶茶家族',
      pic: 'https://img.gumingnc.com/newton/20210224044552CST34231614156352959.png'
    }, {
      id: '8',
      title: '料多多',
      pic: 'https://img.gumingnc.com/newton/20210224044533CST88901614156333131.png'
    }, {
      id: '9',
      title: '加料区',
      pic: 'https://img.gumingnc.com/newton/20210308055016CST37291615197016545.png'
    }, {
      id: '10',
      title: '用餐提醒',
      pic: 'https://img.gumingnc.com/newton/20210224044458CST49841614156298710.png'
    }],
    dataList: [],
    idx: 0,
    scrollTop: 0,
    toView: 'position0',
    isCar: false,
    totalPrice: 0,
    orderNumber: 0
  }),
      _useState2 = Object(_Users_caiyifan_My_my_project_gumin_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var backHome = function backHome() {
    console.log('backHome');
  };

  var switchClassfun = function switchClassfun(value) {
    return function () {
      setData(Object(_Users_caiyifan_My_my_project_gumin_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_caiyifan_My_my_project_gumin_taro_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, data), {
        idx: value
      }));
    };
  };

  var bindscrollfunc = function bindscrollfunc() {
    console.log('bindscrollfunc');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "navigeterbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "bar_back",
    onClick: backHome
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "bar_title"
  }, "\u53E4\u8317\u8336\u996E\u70B9\u5355")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
    src: "/assets/icons/shop.png"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "shopname"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "g"], null, data.shopName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "left_arrow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
    src: "/assets/images/grey_arrow.png"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "g"], null, "\u8DDD\u79BB\u60A8", data.distance))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "container"
  }, "\u81EA\u53D6"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* ScrollView */ "d"], {
    className: "scroll",
    "scroll-y": true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "left_bar"
  }, data.left_bar.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "bar ".concat(index === data.idx ? 'activie' : ''),
      key: index,
      onClick: switchClassfun(index)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "pic"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
      src: "{{item.pic}}"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "bar_name"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Text */ "g"], null, " ", item.title)));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
    className: "right_bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Swiper */ "e"], {
    className: "hd_swiper",
    autoplay: true,
    circular: true
  }, data.top.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* SwiperItem */ "f"], {
      key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
      mode: "scaleToFill",
      "data-id": item.id,
      src: item.pic
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* ScrollView */ "d"], {
    className: "scrollclass",
    "scroll-y": true,
    "scroll-with-animation": true,
    "enable-back-to-top": true,
    "scroll-into-view": data.toView,
    "scroll-top": data.scrollTop,
    onScroll: bindscrollfunc
  }, _data__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "scroll-box position"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
      className: "title"
    }, item.title), item.products.map(function (items, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
        className: "scroll-box-product-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "b"], {
        src: items.pic,
        className: "product-img"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
        className: "product-info-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
        className: "product-name"
      }, items.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
        className: "product-tag"
      }, items.tag), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
        className: "product-desc"
      }, items.desc), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
        className: "product-price"
      }, "\uFFE5", items.price, "\u8D77"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "h"], {
        className: "product-button"
      }, "\u9009\u8D2D")));
    }));
  })))));
}

/* harmony default export */ __webpack_exports__["a"] = (Shop);

/***/ }),

/***/ "./src/pages/shop/data.js":
/*!********************************!*\
  !*** ./src/pages/shop/data.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable no-irregular-whitespace */
var dataList = [{
  title: '当季新品',
  products: [{
    title: '生椰拿铁冰激淋',
    tag: '新品',
    desc: '珍珠、冰激淋、生椰乳、咖啡液、牛奶生...',
    price: '16',
    pic: 'https://img.gumingnc.com/newton/20210719053749CST84721626687469148.png?x-oss-process=image/resize,w_204,m_lfit '
  }, {
    title: '龙井奶芙',
    tag: '新品',
    desc: '龙井、鲜奶乳、奶芙顶、坚果碎色清味...',
    price: '16',
    pic: 'https://img.gumingnc.com/newton/20210719041227CST36011626682347798.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '泡鲁达',
    tag: '新品',
    desc: '西米、多肉、红宝石、椰香白糯米、桂花...',
    price: '17',
    pic: 'https://img.gumingnc.com/newton/20210609082139CST16401623241299533.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '芝士多肉桃桃',
    tag: '新品',
    desc: '水蜜桃、多肉、奶盖、松语乌龙 不止1整...',
    price: '19',
    pic: 'https://img.gumingnc.com/newton/20210526102241CST2291622038961738.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '爆有料水果桶*橙子',
    tag: '新品',
    desc: '[1000cc,超大桶] 橙片、西瓜、芒果...',
    price: '21',
    pic: 'https://img.gumingnc.com/newton/20210705075452CST29321625486092334.png?x-oss-process=image/resize,w_204,m_lfit '
  }]
}, {
  title: '人气推荐',
  products: [{
    title: '桂花乌龙奶芙',
    tag: '新品',
    desc: '桂花乌龙、牛乳、奶芙、无花果干 新茶...',
    price: '15',
    pic: 'https://img.gumingnc.com/newton/20210722043105CST69611626942665649.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '超A芝士葡萄',
    tag: '升级',
    desc: '古茗爆款升级上新！当季云南夏黑，...',
    price: '19',
    pic: 'https://img.gumingnc.com/newton/20210526035918CST52411622015958363.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '杨枝甘露椰奶',
    tag: '仅做冰饮',
    desc: '芒果、西柚粒、西米、多肉、椰奶...',
    price: '17',
    pic: 'https://img.gumingnc.com/newton/20210526102428CST42841622039068249.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '布雷脆脆奶芙',
    tag: '含茶',
    desc: '布蕾、奶油顶、坚果碎、珍珠、奶茶 人气...',
    price: '16',
    pic: 'https://img.gumingnc.com/newton/20210526035840CST91151622015920942.png?x-oss-process=image/resize,w_204,m_lfit'
  }]
}, {
  title: '限定果茶',
  products: [{
    title: '牛油果甘露',
    tag: '含茶',
    desc: '牛油果、西米、芒果丁、多肉、椰奶、茉...',
    price: '18',
    pic: 'https://img.gumingnc.com/newton/20210526040550CST23171622016350234.png?x-oss-process=image/resize,w_204,m_lfit '
  }, {
    title: '爆有料水果桶*橙子',
    tag: '新品',
    desc: '[1000cc,超大桶] 橙片、西瓜、芒果...',
    price: '21',
    pic: 'https://img.gumingnc.com/newton/20210705075452CST29321625486092334.png?x-oss-process=image/resize,w_204,m_lfit '
  }, {
    title: '龙眼桂花琉璃冻',
    tag: '升级',
    desc: '金标龙眼 桂花冻、桂花乌龙、NFC龙...',
    price: '19',
    pic: 'https://img.gumingnc.com/newton/20210720050111CST30661626771671450.png?x-oss-process=image/resize,w_204,m_lfit '
  }, {
    title: '芝士多肉桃桃',
    tag: '新品',
    desc: '水蜜桃、多肉、奶盖、松语乌龙、不止整...',
    price: '16',
    pic: 'https://img.gumingnc.com/newton/20210526102241CST2291622038961738.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '满杯鲜柚',
    tag: '新品',
    desc: '进口红西柚新鲜切片，添加珍稀白西...',
    price: '15',
    pic: 'https://img.gumingnc.com/newton/20210526040444CST69971622016284938.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '牛油果糯糯',
    tag: '新品',
    desc: '墨西哥进口牛油果，搭配软香怡口白...',
    price: '18',
    pic: 'https://img.gumingnc.com/newton/20210526041021CST931622016621135.png?x-oss-process=image/resize,w_204,m_lfit  '
  }, {
    title: '超A葡萄啵啵冻',
    tag: '升级',
    desc: '古茗爆款升级上新！当季云南夏黑，...',
    price: '19',
    pic: 'https://img.gumingnc.com/newton/20210526035902CST76841622015942504.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '超A芝士葡萄',
    tag: '升级',
    desc: '古茗爆款升级上新！当季云南夏黑，...',
    price: '19',
    pic: 'https://img.gumingnc.com/newton/20210526035918CST52411622015958363.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '满杯橙海粒.冰',
    tag: '含茶',
    desc: '橙片、橙粒、黄柠片、茉莉花茶超多...',
    price: '15',
    pic: 'https://img.gumingnc.com/newton/20210526102531CST95161622039131664.png?x-oss-process=image/resize,w_204,m_lfit'
  }]
}, {
  title: '果茶系列',
  products: [{
    title: '茉香小黄柠',
    tag: '新品',
    desc: '新鲜黄柠檬、茉莉花茶一整颗柠檬现...',
    price: '12',
    pic: 'https://img.gumingnc.com/newton/20210709050445CST26151625821485357.png?x-oss-process=image/resize,w_204,m_lfit '
  }, {
    title: '芒芒糯糯',
    tag: '含茶',
    desc: '芒果、糯米、椰奶、茉莉花茶、椰香白糯...',
    price: '17',
    pic: 'https://img.gumingnc.com/newton/20210526040507CST34691622016307958.png?x-oss-process=image/resize,w_204,m_lfit '
  }, {
    title: '百香双重奏',
    tag: '仅作冰饮',
    desc: '茉莉花茶、百香果、青橘、椰果、珍...',
    price: '11',
    pic: 'https://img.gumingnc.com/newton/20210526035219CST61821622015539268.png?x-oss-process=image/resize,w_204,m_lfit '
  }, {
    title: '杨枝甘露轻盈版',
    tag: '仅作冰饮',
    desc: '芒果粒、西柚粒、西米、多肉、椰奶...',
    price: '18',
    pic: 'https://img.gumingnc.com/newton/20210526054602CST9371622022362743.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '杨枝甘露椰奶',
    tag: '仅做冰饮',
    desc: '芒果、西柚粒、西米、多肉、椰奶...',
    price: '17',
    pic: 'https://img.gumingnc.com/newton/20210526102428CST42841622039068249.png?x-oss-process=image/resize,w_204,m_lfit'
  }]
}, {
  title: '冷萃咖啡',
  products: [{
    title: '冰咖牛油果',
    tag: '含咖啡',
    desc: '牛油果、牛奶、咖啡、巴旦木 咖啡融入...',
    price: '19',
    pic: 'https://img.gumingnc.com/newton/20210526035429CST53951622015669224.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '冰咖乌龙奶',
    tag: '含茶',
    desc: '咖啡、桂花乌龙、奶油顶、坚果碎 冰咖...',
    price: '17',
    pic: 'https://img.gumingnc.com/newton/20210604063011CST26771622802611885.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '生椰拿铁冰激凌',
    tag: '新品',
    desc: '珍珠、冰激凌、生椰乳、咖啡液、牛奶生...',
    price: '16',
    pic: 'https://img.gumingnc.com/newton/20210719053634CST58221626687394553.png?x-oss-process=image/resize,w_204,m_lfit  '
  }, {
    title: '冰咖小黄柠',
    tag: '含咖啡',
    desc: '咖啡、小黄柠 花果香咖啡、搭配1整颗...',
    price: '13',
    pic: 'https://img.gumingnc.com/newton/20210526054340CST38131622022220783.png?x-oss-process=image/resize,w_204,m_lfit'
  }]
}, {
  title: '芝士茗茶',
  products: [{
    title: '松语乌龙',
    tag: '新品',
    desc: '松语乌龙纯茶 新茶上市，松语乌龙纯...',
    price: '8',
    pic: 'https://img.gumingnc.com/newton/20210526054504CST15651622022304764.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '芝士松语乌龙',
    tag: '含茶',
    desc: '松语乌龙、奶盖 新茶上市，松语乌龙...',
    price: '12',
    pic: 'https://img.gumingnc.com/newton/20210620055052CST45291624182652569.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '曲香茉莉',
    tag: '新品',
    desc: '茉莉纯茶。酿制而成的茉莉花茶，保...',
    price: '8',
    pic: 'https://img.gumingnc.com/newton/20210526054300CST84251622022180295.png?x-oss-process=image/resize,w_204,m_lfit '
  }, {
    title: '芝士茉莉',
    tag: '仅作冰饮',
    desc: '茉莉花茶、奶盖 入口鲜爽 回味满口...',
    price: '12',
    pic: 'https://img.gumingnc.com/newton/20210620055115CST91911624182675314.png?x-oss-process=image/resize,w_204,m_lfit'
  }]
}, {
  title: '轻乳茶',
  products: [{
    title: '龙井奶芙',
    tag: '新品',
    desc: '龙井、鲜牛乳、奶芙顶、坚果碎色清味...',
    price: '16',
    pic: 'https://img.gumingnc.com/newton/20210719041227CST36011626682347798.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '茉莉奶芙',
    tag: '新品',
    desc: '茉莉花茶、牛乳、奶芙、无花果干 清乳...',
    price: '15',
    pic: 'https://img.gumingnc.com/newton/20210720045837CST2191626771517499.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '松语乌龙奶芙',
    tag: '新品',
    desc: '松语乌龙、鲜牛乳、奶油顶、坚果碎 新...',
    price: '15',
    pic: 'https://img.gumingnc.com/newton/20210605103544CST48081622860544825.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '桂花乌龙奶芙',
    tag: '含茶',
    desc: '松语乌龙、牛乳、奶芙、无花果干 新茶...',
    price: '15',
    pic: 'https://img.gumingnc.com/newton/20210720045837CST2191626771517499.png?x-oss-process=image/resize,w_204,m_lfit'
  }]
}, {
  title: '奶茶家族',
  products: [{
    title: '布蕾奶茶冰激淋',
    tag: '新品',
    desc: '布蕾、珍珠、冰激凌、奶茶经典布蕾奶...',
    price: '13',
    pic: 'https://img.gumingnc.com/newton/20210719053634CST58221626687394553.png?x-oss-process=image/resize,w_204,m_lfit  '
  }, {
    title: '米麻薯布蕾奶茶',
    tag: '新品',
    desc: '米麻薯、布蕾、古茗奶茶 全新加料米麻...',
    price: '12',
    pic: 'https://img.gumingnc.com/newton/20210625062322CST88861624616602251.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '米麻薯乌龙奶',
    tag: '新品',
    desc: '米麻薯、红宝石、牛乳、松语乌龙 入口...',
    price: '13',
    pic: 'https://img.gumingnc.com/newton/20210625062156CST98051624616516026.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '古茗奶茶',
    tag: '含茶',
    desc: ' 经典纯奶茶 免费珍珠或椰奶...',
    price: '9',
    pic: 'https://img.gumingnc.com/newton/20210526040038CST7061622016038030.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '大叔奶茶',
    tag: '含茶',
    desc: '古茗奶茶、台湾风味黑糖、红豆、布...',
    price: '11',
    pic: 'https://img.gumingnc.com/newton/20210620055138CST53681624182698512.png?x-oss-process=image/resize,w_204,m_lfit '
  }, {
    title: '布雷脆脆奶芙',
    tag: '含茶',
    desc: '布蕾、奶油顶、坚果碎、珍珠、奶茶 人气...',
    price: '16',
    pic: 'https://img.gumingnc.com/newton/20210526035840CST91151622015920942.png?x-oss-process=image/resize,w_204,m_lfit'
  }]
}, {
  title: '料多多',
  products: [{
    title: '椰乳大满贯',
    tag: '新品',
    desc: '芒果、生椰乳、红宝石、西米、糯米 芒果...',
    price: '15',
    pic: 'https://img.gumingnc.com/newton/20210609082314CST55991623241394688.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '泡鲁达',
    tag: '新品',
    desc: '西米、多肉、红宝石、椰香白糯米、桂花...',
    price: '17',
    pic: 'https://img.gumingnc.com/newton/20210719053707CST86841626687427353.png?x-oss-process=image/resize,w_204,m_lfit '
  }, {
    title: '布丁西米露',
    tag: '含乳制品',
    desc: '布丁、西米、奶露 香甜Q弹 口口爽滑...',
    price: '9',
    pic: 'https://img.gumingnc.com/newton/20210604063035CST59541622802635482.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '泡鲁达冰淇淋',
    tag: '新品',
    desc: '西米、红宝石、桂花冻、面包干、烤椰片...',
    price: '18',
    pic: 'https://img.gumingnc.com/newton/20210719053707CST86841626687427353.png?x-oss-process=image/resize,w_204,m_lfit'
  }]
}, {
  title: '加料区',
  products: [{
    title: '布丁',
    tag: '',
    desc: '全程手工制作的鸡蛋味布丁全程手工...',
    price: '1.5',
    pic: 'https://img.gumingnc.com/newton/20210611022007CST41031623392407215.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '西米',
    tag: '',
    desc: '小小体积，入口滑溜，适合添加在奶...',
    price: '1.5',
    pic: 'https://img.gumingnc.com/newton/20210611021919CST12511623392359284.png?x-oss-process=image/resize,w_204,m_lfit '
  }, {
    title: '西柚粒',
    tag: '',
    desc: '南非西柚鲜果粒，自带甘苦味...',
    price: '3.5',
    pic: 'https://img.gumingnc.com/newton/20210611022139CST62121623392499141.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '蜜豆',
    tag: '',
    desc: '优选中国东北红豆，有些许甜度，适...',
    price: '1.5',
    pic: 'https://img.gumingnc.com/newton/20210611022026CST53071623392426805.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '珍珠',
    tag: '',
    desc: '软糯弹牙的琥珀珍珠，适合添加至奶...',
    price: '1.5',
    pic: 'https://img.gumingnc.com/newton/20210611022049CST96581623392449303.png?x-oss-process=image/resize,w_204,m_lfit '
  }, {
    title: '椰果',
    tag: '',
    desc: '口感爽脆，冰饮好伴侣，适合添加至...',
    price: '1.5',
    pic: 'https://img.gumingnc.com/newton/20210611021937CST5441623392377802.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '奶盖',
    tag: '',
    desc: '咸甜味芝士奶盖，和冰饮更加搭配...',
    price: '5.5',
    pic: 'https://img.gumingnc.com/newton/20210611022154CST3471623392514596.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '多肉',
    tag: '',
    desc: '低卡魔芋制成，Q弹啵啵脆爽，无法...',
    price: '2.5',
    pic: 'https://img.gumingnc.com/newton/20210611022106CST37251623392466436.png?x-oss-process=image/resize,w_204,m_lfit'
  }]
}, {
  title: '用餐提醒',
  products: [{
    title: '沙冰类饮品说明',
    tag: '',
    desc: '夏热炎炎，饮品沙冰易化，建议拿到...',
    price: '999',
    pic: 'https://img.gumingnc.com/newton/20210619043811CST4611624091891668.png?x-oss-process=image/resize,w_204,m_lfit '
  }, {
    title: '纸吸管更换说明',
    tag: '',
    desc: '纸吸管自带气味属正常无害，插吸管...',
    price: '999',
    pic: 'https://img.gumingnc.com/newton/20210226112029CST96141614309629795.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '购买须知',
    tag: '',
    desc: '1.请在1小时内饮用，含奶盖...',
    price: '999',
    pic: 'https://img.gumingnc.com/newton/20210226112049CST461614309649529.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '糖分解读',
    tag: '',
    desc: '十分甜=多糖；七分甜=正常糖；五分...',
    price: '999',
    pic: 'https://img.gumingnc.com/newton/20210226112110CST80331614309670759.png?x-oss-process=image/resize,w_204,m_lfit'
  }, {
    title: '少冰少量',
    tag: '',
    desc: '若您温度规格选择去冰/少冰，为保...',
    price: '999',
    pic: 'https://img.gumingnc.com/newton/20210226112123CST58491614309683184.png?x-oss-process=image/resize,w_204,m_lfit'
  }]
}]; //所有奶茶数据

/* harmony default export */ __webpack_exports__["a"] = (dataList);

/***/ }),

/***/ "./src/pages/shop/index.less":
/*!***********************************!*\
  !*** ./src/pages/shop/index.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/shop/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/shop/index.tsx ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib!./index.tsx */ "./node_modules/@tarojs/mini-runner/node_modules/babel-loader/lib/index.js!./src/pages/shop/index.tsx");


var config = {"navigationBarTitleText":"点单","navigationStyle":"custom"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_mini_runner_node_modules_babel_loader_lib_index_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/shop/index', {}, config || {}))



/***/ })

},[["./src/pages/shop/index.tsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map