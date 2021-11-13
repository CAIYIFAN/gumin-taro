const db = wx.cloud.database();
const usersCollection = db.collection('gumingUsers');
Page({
  data: {
    num: 0,
    activeTabIndex: 0,
    activeSwiperIndex: 0,
    currentState: false,
    historyState: false,
    historyOrder: [],
    currentOrder: [],
    subscript: [0, 1, 2]
  },
  async finishOrder(e) {
      let index = e.currentTarget.dataset.index;
      let user =await usersCollection.get();
      let currentOrder = user.data[0].currentOrder;
      let historyOrder = user.data[0].historyOrder;
      let VIP = user.data[0].VIP;
      let totalOrderNum = user.data[0].totalOrderNum;
      let freeMilkTea = user.data[0].freeMilkTea;
      let id = user.data[0]._id;
      currentOrder[index].state = "已完成";
      totalOrderNum += currentOrder[index].orderNum;
      freeMilkTea = parseInt(totalOrderNum/10);
      VIP = parseInt(setVip(VIP));

      function setVip(VIP){
        let gradeNum = [6,6,12,18,30,42,54,66,84,10000]
        if(totalOrderNum>=gradeNum[VIP]){
          return VIP+1;
        }
        else{
          return VIP ;
        }


      }//建立VIP等级制度
      let updata = await usersCollection.doc(id).update({
        data:{
          historyOrder: [...currentOrder, ...historyOrder],
          VIP,
          totalOrderNum,
          freeMilkTea
        }
      });
      currentOrder.splice(index, 1);
      let updateCurrentOrder = await usersCollection.doc(id).update({
        data:{
          currentOrder
        }
      })

      wx.showToast({
        title: '谢谢惠顾',
      })
      this.onShow()
  },//完成订单
  orderAgain() {
    wx.navigateTo({
      url: '/pages/shopping/shopping',
    })
  },//页面跳转
  gotoOrder() {
    let userId = wx.getStorageSync('userId');
    if(!userId){
      wx.showToast({
        title: '请先登录',
        icon: 'error'
      })
      setTimeout(function(){
        wx.switchTab({
          url: '/pages/my/my',
        })
      },1000)
    }else{
       wx.navigateTo({
        url: '/pages/shopping/shopping',
      })
    }
   
  },//检测是否登录
  gotoDetail(e) {
    // console.log(e.currentTarget.dataset.id);
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/orderDetail/index?id=' + id,
    })
  },//页面跳转
  switchTap(e) {
    // console.log(e);
    this.setData({
      activeTabIndex: e.currentTarget.dataset.index,
      activeSwiperIndex: e.currentTarget.dataset.index
    })
  },//swiper控制
  doListChange(e) {
    // console.log(e);
    this.setData({
      activeTabIndex: e.detail.current
    })
  },
  async onShow() {
    wx.setStorageSync('address', "/pages/order/order");
    let {data} = await usersCollection.get();
    // console.log(data[0]);
    this.setData({
      historyOrder: data[0].historyOrder,
      currentOrder: data[0].currentOrder
})
    if(this.data.currentOrder.length != 0){
      this.setData({
        currentState: true
      })
    }else{
      this.setData({
        currentState: false
      })
    }
    
    if(this.data.historyOrder.length != 0) {
      this.setData({
        historyState: true
      })
    }else{
      this.setData({
        historyState: false
      })
    }
    
  },//将页面跳转的地址存入storage，方便跳转拿出，检测订单的奶茶种类是否大于三种，如果大于则第四张图显示省略号
  onLoad() {
    this.loadData();
  },
  loadData() {
    if(this.data.activeTabIndex == 0){
      this.loadHot();
    }
    else{
      this.loadChase();
    }
  },
  loadHot() {
  },
  loadChase() {
  },
  onPullDownRefresh() {
    wx.stopPullDownRefresh() 
  }
})