export default {
  pages: [
    'pages/index/index',
    "pages/shop/index",
    "pages/order/index",
    "pages/my/index"
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    selectedColor: "#000000",
    borderStyle: "black",
    backgroundColor: "#fff",
    list: [
      {
        text: "首页",
        pagePath: "pages/index/index",
        iconPath: "assets/icons/home.png",
        selectedIconPath: "assets/icons/home-active.png"
      },
      {
        text: "点单",
        pagePath: "pages/shop/index",
        iconPath: "assets/icons/shopping.png",
        selectedIconPath: "assets/icons/shopping-active.png"
      },
      {
        text: "订单",
        pagePath: "pages/order/index",
        iconPath: "assets/icons/order.png",
        selectedIconPath: "assets/icons/order-active.png"
      },
      {
        text: "我的",
        pagePath: "pages/my/index",
        iconPath: "assets/icons/my.png",
        selectedIconPath: "assets/icons/my-active.png"
      }
    ]
  },
}
