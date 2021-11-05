import React  from 'react'
import {View ,Swiper, SwiperItem } from '@tarojs/components'
import './index.less'

export default function Home() {
    return (
<View>
  {/* <View className="hd">
    <Swiper className="hd_swiper" autoplay circular="true">
      <SwiperItem wx:for="{{top}}" wx:key="id">
        <Image mode="scaleToFill"
        data-id="{{item.id}}" src="{{item.pic}}"/>
      </SwiperItem>
    </Swiper>
  </View> */}
  <View className="bd">
   <View className="bd_container">
    <View className="con_order" bindtap="gotoOrder">
    <Image src="http://img.gumingnc.com/newton/20210617072044CST19811623928844707.png" />
    </View>
    <View className="con_activities">
      <View className="activity_select">
      <Image src="http://img.gumingnc.com/newton/20210617072023CST76771623928823455.png"/>
      </View>
      <View className="activity_inform">
      <Image src="http://img.gumingnc.com/newton/20210617071758CST61261623928678746.png"/>
      </View>
    </View>
    <View className="con_invite">
     <View className="title">茗星活动</View>
    <Image src="https://img.gumingnc.com/newton/20210727110001CST85951627354801205.png"/>
    </View>
    <View className="con_logo">
    <Image src="https://static.gumingnc.com/guming-wechat/prod/files/Images/slogan.jpg?x-oss-process=Image/resize,w_318,m_lfit"/>
    </View>
   </View>
  </View>
</View>
    )
}