// miniprogram/pages/teaList/teaList.js
const db = wx.cloud.database();
const currentOrdersCollection = db.collection('currentOrders');
const userCollection = db.collection('gumingUsers');
var util = require('../../utils/date');
const top = [{
  id:'1',
  pic:'http://img.gumingnc.com/newton/20210719061456CST25351626689696069.jpg'
},{
  id:'2',
  pic:'http://img.gumingnc.com/newton/20210610100235CST14641623290555407.png'
},{
  id:'3',
  pic:'https://img.gumingnc.com/newton/20210718033112CST76271626593472081.png'
}]
const dataList = require("dataList.js");
var that = '';
var cart = [];

var query;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top:top,
    orderIndex: [],
    orders: [],
    shopname:'',
    distance:'',
    left_bar:[{
      id:'1',
      title:'当季新品',
      pic:'https://img.gumingnc.com/newton/20210414063740CST15781618396660776.png'
    },{
      id:'1',
       title:'人气推荐',
      pic:'https://img.gumingnc.com/newton/20210226051714CST35081614331034237.png'
    },{
      id:'2',
       title:'限定果茶',
      pic:'https://img.gumingnc.com/newton/20210429114425CST36841619667865295.png'
    },{
      id:'3',
       title:'果茶系列',
      pic:'https://img.gumingnc.com/newton/20210224044544CST59421614156344325.png '
    },{
      id:'4',
       title:'冷萃咖啡',
      pic:'https://img.gumingnc.com/newton/20210429052436CST40751619688276339.png'
    },{
      id:'5',
       title:'芝士茗茶',
      pic:'https://img.gumingnc.com/newton/20210429114434CST12671619667874729.png'
    },{
      id:'6',
       title:'轻乳茶',
      pic:'https://img.gumingnc.com/newton/20210429114449CST75211619667889377.png'
    },{
      id:'7',
       title:'奶茶家族',
      pic:'https://img.gumingnc.com/newton/20210224044552CST34231614156352959.png'
    },{
      id:'8',
       title:'料多多',
      pic:'https://img.gumingnc.com/newton/20210224044533CST88901614156333131.png'
    },{
      id:'9',
       title:'加料区',
      pic:'https://img.gumingnc.com/newton/20210308055016CST37291615197016545.png'
    },{
      id:'10',
       title:'用餐提醒',
      pic:'https://img.gumingnc.com/newton/20210224044458CST49841614156298710.png'
    },
    
    ],
    dataList: [],
    idx: 0,
    scrollTop: 0,
    toView:'position0',
    isCar:false , 
    totalPrice: 0,
    orderNumber: 0
  },
  gotoDetail() {
    this.panel = this.selectComponent('#panel');
    this.panel.shopBag();
  },
    switchClassfun(e){
      // console.log(e);
      var e = e.currentTarget.dataset.index;
      this.setData({ 
        idx: e, 
        toView: 'position' + e 
      })
    },//left_bar的选择 和动态显示
    bindscrollfunc(e){
      // console.log(e.detail.scrollTop);
      var arr = [];
      for(var item of this.data.positions){
        if (item.top <= e.detail.scrollTop + 400){
          // console.log(item);
          arr.push(item)
        }
        // console.log(item);
      }
      this.setData({ 
        idx:arr[arr.length-1].dataset.index
      })
    },//绑定的scroll事件

    async addNum(e) {
      let index = parseInt(e.detail.mes);
      let orders = this.data.orders;
      let orderNumber = this.data.orderNumber;
      let totalPrice = this.data.totalPrice;
      ++orders[index].num;
      ++orderNumber;
      totalPrice = totalPrice + parseInt(orders[index].price);
      this.setData({orders,orderNumber,totalPrice});
      let {data} =await currentOrdersCollection.get();
      let id = data[0]._id;
      let updata = await currentOrdersCollection.doc(id).update({
        data:{
          orders: this.data.orders
        }
      });
    },//添加奶茶数量
    async subNum(e) {
      let index = parseInt(e.detail.mes);
      let orders = this.data.orders;
      let orderNumber = this.data.orderNumber;
      let totalPrice = this.data.totalPrice;
      --orders[index].num;
      --orderNumber;
      totalPrice = totalPrice - parseInt(orders[index].price);
      if(orders[index].num == 0){
        orders.splice(index, 1);
      }
      this.setData({orders,orderNumber,totalPrice});
      let {data} =await currentOrdersCollection.get();
      let id = data[0]._id;
      let updata = await currentOrdersCollection.doc(id).update({
        data:{
          orders: this.data.orders
        }
      });
    },//提交奶茶数量
    async clearAll(){
      let orders = this.data.orders;
      let orderNumber = 0;
      let totalPrice = 0;
      orders = [];
      this.setData({orders,orderNumber,totalPrice})
      let cuOrders =await currentOrdersCollection.get();
      let id = cuOrders.data[0]._id;
      let updata = await currentOrdersCollection.doc(id).update({
        data:{
          orders: this.data.orders
        }
      });
    },//清空购物车
    quit(){
      if(this.data.orders.length == 0){
        this.setData({
          isCar: false
        })
      }
    },//购物车消失
    async gotoPay() {
      if(this.data.orders.length != 0) {
         const listData = {
        "shop": this.data.shopname,
        "avatarUrl": [],
        "orderNum": this.data.orderNumber,
        "orderWay": "自取",
        "sumPrice": this.data.totalPrice,
        "time": "",
        "state": "未完成"
      };
      for(let i = 0; i < this.data.orders.length; i++){
        listData.avatarUrl.push(this.data.orders[i].pic);
      }
      listData.time = util.formatTime(new Date());

      let user =await userCollection.get();
      let currentOrder = user.data[0].currentOrder;
      let userId = user.data[0]._id;
      let updataCurrentOrder = await userCollection.doc(userId).update({
        data:{
          currentOrder: [...[listData], ...currentOrder]
        }
      });
      let orders = this.data.orders;
      orders = [];
      this.setData({orders})
      this.updataCurrentOrder();
      wx.switchTab({
        url: '/pages/order/order',
      })
      }else{
        wx.showToast({
          title: '您还没有订单',
          icon: 'error'
        })
        this.panel.quit();
        this.setData({
          isCar: false
        })
      }
    },//判断是否具有支付订单的条件以及页面跳转
    async car(e) {
      let order = e.currentTarget.dataset;
      let price = parseInt(order.price);
      let orders = this.data.orders;
      this.setData({
        totalPrice: this.data.totalPrice + price,
        orderNumber: ++this.data.orderNumber,
        isCar: true,
      })
        for(let i = 0; i < orders.length && orders.length != 0; i++){
        if(this.data.orders[i].title == order.title){
          orders[i].num++;
          order = {};
          this.setData({orders})
          }
        }
      if(order.title){
        this.setData({
        orders: [...orders, ...[order]]
        })
      }
      this.updataCurrentOrder();
    },//显示购物车
    async updataCurrentOrder() {
      let {data} =await currentOrdersCollection.get();
      // console.log(data);
      if(data.length != 0){
        let id = data[0]._id;
        let updataOrders = await currentOrdersCollection.doc(id).update({
          data:{
            orders: this.data.orders
          }
        });
      }else{
        let updataOrders = await currentOrdersCollection.add({
          data:{
            orders: this.data.orders
          }
        });
      }
    },//更新当前订单
    backHome(){
      let address = wx.getStorageSync('address')
      wx.switchTab({
        url: address,
      })
    },//页面跳转
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
      let name = options.name;
      this.setData({
       shopname:name.split("+")[0],
       distance:name.split("+")[1]
      })
      that = this;
      this.setData({
         dataList: dataList.dataList 
        })
      query = wx.createSelectorQuery();
      wx.createSelectorQuery().selectAll('.position').boundingClientRect(function (rects) {
        that.setData({ positions:rects })
      }).exec();
  },//动态数据绑定，接收到shopping页面的店名和距离传给tealist页面

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  async onShow() {
    let {data} =await currentOrdersCollection.get();   
    if(data.length != 0){
      if(data[0].orders.length != 0){
        let orders = data[0].orders;
        let totalPrice = 0, orderNumber = 0;
        for(let i = 0; i < orders.length; i++){
          totalPrice += orders[i].price * orders[i].num;
          orderNumber += orders[i].num;
        }    
        this.setData({
          orders: orders,
          orderNumber,
          totalPrice,
          isCar: true
        }, () => {
          this.panel = this.selectComponent('#panel');
        })
      }
    }
    
  },//判断购物车的出现以及添加购物车详情组件

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})