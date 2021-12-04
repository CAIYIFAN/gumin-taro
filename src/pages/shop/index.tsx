import React, { useState } from 'react';
import { View, Swiper, SwiperItem, ScrollView, Image, Text } from '@tarojs/components'
import dataList from './data';
import './index.less';

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

function Shop() {
  const [data, setData] = useState({
    top:top,
    orderIndex: [],
    orders: [],
    shopName:'',
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
  })

  const backHome = () => {console.log('backHome')}

  const switchClassfun = (value) => () => {
    setData({...data, ... {idx: value}})
  }

  const bindscrollfunc = () => {
    console.log('bindscrollfunc')
  }
  
  return (
    <View className="page">
      <View className="navigeterbar">
        <View className="bar_back" onClick={backHome}></View>
        <View className="bar_title">
          古茗茶饮点单
        </View>
      </View>
      <View className="top">
        <View className="left">
          <View className="header">
            <View className="icon">
            <Image src="/assets/icons/shop.png"/>
            </View>
            <View className="shopname">
            <Text>{data.shopName}</Text>
            </View>
            <View className="left_arrow"><Image src="/assets/images/grey_arrow.png"></Image></View>
          </View>
          <View className="footer">
          <Text>距离您{data.distance}</Text>
          </View>
        </View>
        <View className="right">
          <View className="container">
            自取
          </View>
        </View>
      </View>
      <View className="body">
        <ScrollView className="scroll" scroll-y>
          <View className="left_bar" >
            {
              data.left_bar.map((item,index) => (
                <View className={`bar ${index === data.idx ? 'activie' : ''}`} key={index} onClick={switchClassfun(index)} >
                  <View className="pic">
                    <Image src="{{item.pic}}"></Image>
                  </View>
                  <View className="bar_name">
                    <Text> {item.title}</Text>
                  </View>
                </View>
              ))
            }
          </View>
        </ScrollView>
        <View className="right_bar">
          <Swiper className="hd_swiper" autoplay circular>
            {
              data.top.map((item, index) => (
                <SwiperItem key={item.id}>
                  <Image mode="scaleToFill"
                  data-id={item.id} src={item.pic}/>
                </SwiperItem>
              ))
            }
          </Swiper>
          <ScrollView 
            className='scrollclass' 
            scroll-y
            scroll-with-animation 
            enable-back-to-top 
            scroll-into-view={data.toView} 
            scroll-top={data.scrollTop}
            onScroll={bindscrollfunc}
          >
            {
              dataList.map((item, index) => (
                <View className='scroll-box position'>
                <View className='title'>{item.title}</View>
                  {
                    item.products.map((items, index) => (
                      <View className='scroll-box-product-box'  >
                        <Image src={items.pic} className='product-img'></Image>
                        <View className='product-info-box'>
                        <View className='product-name'>{items.title}</View>
                        <View className='product-tag'>{items.tag}</View>
                        <View className="product-desc">{items.desc}</View>
                        <View className='product-price'>￥{items.price}起</View>
                        <View className="product-button">选购</View>
                      </View>
                    </View>
                    ))
                  }                
                </View>
              ))
            }
          </ScrollView>
        </View>
      </View>
  </View>
  );
}

export default Shop;
