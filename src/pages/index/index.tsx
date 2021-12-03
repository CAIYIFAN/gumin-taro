import React  from 'react'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
// import VerificationCode from '../../components/VerificationCode'
import './index.less'

const swiperData = [{
  id:'1',
  pic:'http://img.gumingnc.com/newton/20210719061456CST25351626689696069.jpg'
},{
  id:'2',
  pic:'http://img.gumingnc.com/newton/20210610100235CST14641623290555407.png'
},{
  id:'3',
  pic:'https://img.gumingnc.com/newton/20210718033112CST76271626593472081.png'
}]

function Index (props, ref) {
  // function onShareAppMessage () {
  //   return{
  //     title:'古茗点单小程序',
  //     imageUrl:'https://6c61-laji-bopv4-1259505195.tcb.qcloud.la/laji.png?sign=7c8d38e435eb3104fcf5933ebff667f5&t=1561904613',
  //     path:'pages/home/home'
  //   }
  // }

  const gotoOrder = () => {
    console.log('跳转到点单页')
  }

  return (
    <View>
        {/* <VerificationCode onFinished={(data) => {console.log(data)}}/> */}
      <View className='hd'>
        <Swiper className='hd_swiper' circular autoplay>
          {
            swiperData.map((item) => (
              <SwiperItem key={item.id}>
                <Image src={item.pic} mode="scaleToFill"/>
              </SwiperItem>
            ))
          }
        </Swiper>
      </View>
      <View className="bd">
        <View className="bd_container">
          <View className="con_order" onClick={gotoOrder}>
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
            <Image src="https://static.gumingnc.com/guming-wechat/prod/files/images/slogan.jpg?x-oss-process=image/resize,w_318,m_lfit"/>
          </View>
        </View>
      </View>  
    </View>
  )
}

export default React.forwardRef(Index)
