// miniprogram/pages/my/my.js
const db = wx.cloud.database();
const  _ = db.command;
const userCollection = db.collection('gumingUsers');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isLogged: false,
    userName: '',
    userImg: '',
    userId:'',
    progress: 0,
    VIP: 0,
    cardsNum:0
  },

 
  getUserInfo(e) {
    let that = this;
    // console.log(e);
    const { nickName:userName, avatarUrl:userImg } = e.detail.userInfo;
    let openId = e.detail.signature;
    // console.log(userName);
    this.setData({
      userImg,
      userName,
      isLogged: true
    })
    wx.setStorageSync('userName', userName);
    wx.setStorageSync('userImg', userImg);
    wx.setStorageSync('openId', openId);
    // add user
    userCollection
      .where({
        _openid: openId
      })
      .get() // 异步 回调
      .then((res) => {
        
        if(!res.data.length) {
          let userId = this.getUserId();
          userCollection
            .add({
              data:{
                userImg,
                userName,
                userId,
                VIP: 0,
                totalOrderNum: 0,
                freeMilkTea: 0,
                currentOrder: [],
                historyOrder: []
              }
            })
            .then(res=>{
              // console.log(res);
              wx.showToast({
                title: '新增用户成功',
              })
            })
        }else{
          console.log('已存在');
        }
        this.onLoad()
      }) // 同步
      
  },//得到用户信息并存入用户表
  getUserId() {
    // users表的ID 用户有一定的意义 
    let firstW = "VIP";
    let userId = `${firstW}${Date.now() + (Math.random()*1e5).toFixed(0)}`;
    wx.setStorageSync('userId', userId);
    this.setData({
      userId
    })
    return userId;
  },//得到一个用户的ID
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad (options) {
    let openId = wx.getStorageSync('openId'),
     userName = wx.getStorageSync('userName'),
     userImg = wx.getStorageSync('userImg'),
     userId = wx.getStorageSync('userId');
     if(!openId&&!userId) return
     this.setData({
      userImg,
      userName,
      isLogged: true,
     })
  },//从storage拿出用户信息

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  async onShow() {
    wx.setStorageSync('address', "/pages/my/my");
    let {data} = await userCollection.get();
    if(data.length != 0){
      let VIP = data[0].VIP;
      let totalOrderNum = data[0].totalOrderNum;
      let freeMilkTea = data[0].freeMilkTea;
      let progress = totalOrderNum - freeMilkTea*10;
      this.setData({
        cardsNum:freeMilkTea,
        progress,
        VIP
      })
    }
    
  },//将当前的页面的地址存入storage，方便以后跳转后拿走

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