// index.js
// 获取应用实例
const app = getApp();
const data = [
  {
  id:'1',
  longitude:'115.832777',
  latitude:'28.724024',
  shopname:'南昌东华理工店',
  address:'江西省南昌市青山湖区区蛟桥镇南昌经开区范家村A区',
  time:'10:00-22:00',
  distance:'76m'
},
{
  id:'2',
  longitude:'115.76385',
  latitude:'28.620321',
  shopname:'南昌交大理工学院',
  address:'江西省南昌市青山湖区区华东交通大学（理工学院）仿古街4号',
  time:'10:00-20:30',
  distance:'316m'
},
{
  id:'3',
  longitude:'115.840322',
  latitude:'28.739428',
  shopname:'紫荆路步行街店',
  address:'江西省南昌市青山湖区紫荆路步行街1号凉亭',
  time:'11:00-22:30',
  distance:'666m'
},
{
  id:'4',
  longitude:'115.810581',
  latitude:'28.729028',
  shopname:'南昌师范学院店',
  address:'江西省南昌市青山湖区区经开技术开发区瑞香路889号南昌师范学院',
  time:'10:30-22:00',
  distance:'786m'
},
{
  id:'5',
  longitude:'115.830109',
  latitude:'28.690184',
  shopname:'新建文化大道店',
  address:'江西省南昌市青山湖区区蛟桥镇南昌经开区范家村A区',
  time:'10:00-22:00',
  distance:'874m'
},
{
  id:'6',
  longitude:'115.823207',
  latitude:'28.734118',
  shopname:'南昌财大麦庐园店',
  address:'江西省南昌市青山湖区玉屏西大道江西财经大学麦庐园校区商业街',
  time:'11:00-22:00',
  distance:'899m'
},
{
  id:'7',
  longitude:'116.184013',
  latitude:'28.229173',
  shopname:'南昌经开乐盈店',
  address:'江西省南昌市青山湖区区蛟桥镇乐盈广场',
  time:'10:00-22:00',
  distance:'996m'
}
];

Page({
  data: {
    activeNavIndex:0,
    id:0,
    latitude: '',
    longitude: '',
      markers:[],
      mapWidth:'',
      mapHeight:'',
    shop:[]
  },
  
  
  backLastPage() {
    let address = wx.getStorageSync('address')
      wx.switchTab({
        url: address,
      })
 },//页面跳转
 chooseShop(e){
  // console.log(e);
  let {index} = e.currentTarget.dataset;
  let name = e.currentTarget.dataset.name;
  let distance = e.currentTarget.dataset.distance;
  // console.log(name);
    this.setData({
      activeNavIndex:index
    })
    wx.showModal({
      cancelText:'重新选择',
      confirmColor:'#e6bb72',
      title:'下单门店确认',
      content: '当前位置周围门店密集，请确认下单门店:'+name,
      success (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: `/pages/teaList/teaList?name=${name}+${distance}`,
          })
        } else if (res.cancel) {
          // console.log('用户点击取消')
        }
      }
    })
    
 },//选择门店时css，数据跳转，以及回调（弹出框）函数
 onScroll(){
  var map = document.getElementById(myMap);
  map.setAttribute("style", "position:absolute");
  
 },//给地图添加scroll事件
 
 onLoad: function () {
  var that = this;
  wx.getLocation({
    type: 'gcj02',
    success: (res) => {
      var latitude = res.latitude
      var longitude = res.longitude
      that.setData({
        latitude: latitude,
        longitude: longitude,
      })
      let markers = [
        {
          id: 0,
          latitude: this.data.latitude +Math.random()*0.01,
          longitude: this.data.longitude+Math.random()*0.01,
          iconPath: "/assets/images/landmark.png",
          height: 40,
          width: 40,
        },
        {
          id: 1,
          latitude: this.data.latitude +Math.random()*0.01,
          longitude: this.data.longitude+Math.random()*0.01,
          iconPath: "/assets/images/landmark.png",
          height: 40,
          width: 40,
        },
        {
          id: 2,
          latitude: this.data.latitude +Math.random()*0.02,
          longitude: this.data.longitude-Math.random()*0.016,
          iconPath: "/assets/images/landmark.png",
          height: 40,
          width: 40,
        },
        {
          id: 3,
          latitude: this.data.latitude -Math.random()*0.011,
          longitude: this.data.longitude+Math.random()*0.019,
          iconPath: "/assets/images/landmark.png",
          height: 40,
          width: 40,
        },
        {
          id: 4,
          latitude: this.data.latitude -Math.random()*0.015,
          longitude: this.data.longitude-Math.random()*0.016,
          iconPath: "/assets/images/landmark.png",
          height: 40,
          width: 40,
        },
        {
          id: 5,
          latitude: this.data.latitude -Math.random()*0.02,
          longitude: this.data.longitude+Math.random()*0.02,
          iconPath: "/assets/images/landmark.png",
          height: 40,
          width: 40,
        },
      ]
      // console.log(markers, '-------------------------------')
      that.setData({
        markers:markers,
        shop: data
      })
      // console.log(latitude,longitude);
    }
  })
},//地图上显示各个奶茶店的坐标
  




 

 

  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    // console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})


