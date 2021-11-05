// miniprogram/pages/home/home.js
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
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top:top,
  },

  gotoOrder(){
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
    
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setStorageSync('address', "/pages/home/home");
  },

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
  onShareAppMessage(){
    return{
      title:'古茗点单小程序',
      imageUrl:'https://6c61-laji-bopv4-1259505195.tcb.qcloud.la/laji.png?sign=7c8d38e435eb3104fcf5933ebff667f5&t=1561904613',
      path:'pages/home/home'
    }
  },
})