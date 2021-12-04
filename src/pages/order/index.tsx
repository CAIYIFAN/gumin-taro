import React, { useState } from 'react';
import { View, Swiper, SwiperItem, ScrollView, Image, Text, Button } from '@tarojs/components'
import './index.less';

function Order() {
  const [data, setData] = useState({
    num: 0,
    activeTabIndex: 0,
    activeSwiperIndex: 0,
    currentState: false,
    historyState: false,
    historyOrder: [],
    currentOrder: [],
    subscript: [0, 1, 2]
  })

  const switchTap = (value) => () => {
    setData({...data, ...{activeTabIndex: value}})
  }

  const doListChange = () => {console.log('doListChange')}

  const gotoOrder = () => {console.log('gotoOrder')}

  const gotoDetail = (value) => () => {console.log('gotoDetail')}

  const finishOrder = (value) => () =>  {console.log('finishOrder')}

  const orderAgain = () => {console.log('orderAgain')}

  const Item = (item): ReactNode => {
    return 
      item.avatarUrl.length <= 3 ? (
        item.map((item, index) => (
          <Image className="orderPic" key={index}  src={item.avatarUrl.url} />
        ))
      ) : (
        item.map((item, index) => (
          <View key={index}>
            <Image className="orderPic" key={index}  src={item.avatarUrl.sub} />
            <Image src="https://static.gumingnc.com/guming-wechat/prod/files/images/ellipsis.png" className="ellipsis"></Image>
          </View>
        ))
      )
  }

  return (
    <View className="page page_v">
      <View className="navigeterbar">
        <View className="bar_title">
          订单列表
        </View>
      </View>
      <View className="GM_tabs">
        <View 
          className={`GM_tabs__item ${data.activeTabIndex == 0? "GM_tabs__item_on" : ""}`}
          onClick={switchTap(0)}
          >
          当前订单
        </View>
        <View 
          className={`GM_tabs__item ${data.activeTabIndex == 1? "GM_tabs__item_on" : ""}`}
          onClick={switchTap(1)}
          >
          历史订单
        </View>
      </View>
      <View className="GM_swiper_list">
        <Swiper 
          current={data.activeSwiperIndex}
          className="GM_swiper_list_swiper"
          onChange={doListChange}
          >
          <SwiperItem className="GM_swiper_list_item">
            <ScrollView scroll-y >
              {
                !data.currentState && (
                  <View className="state_none">
                    <Image src="../../assets/GIF/order_bg.gif" className="order_bg" />
                    <Text className="desc">您还没有下单，来一杯吧~</Text>
                    <Button onClick={gotoOrder}>来一杯</Button>
                  </View>
                )
              }
              {
                data.currentState && (
                    <View className="bgc">
                      <View className="state_hot">
                        {
                          data.currentOrder.map((item: any, key) => (
                            <View className="order" key={key}>
                              <View className="order_hd">
                                <Image src="../../assets/icons/shop.png"></Image>
                                <View className="shop">{item.shop}</View>
                                <View className="orderWay">{item.orderWay}</View>
                                <View className="fill"></View>
                                <View className="state">{item.state}</View>
                              </View>
                            <View className="time">{item.time}</View>
                            <View className="order_bd" onClick={gotoDetail(item.id)}>
                            <View className="bd_pic">
                              {Item(item)}
                            </View>
                            <View className="sum">
                              <View className="price">￥{item.sumPrice}</View>
                              <View className="num">共{item.orderNum}杯</View>
                            </View>
                        </View>
                        <View className="order_ft">
                          <Button className="again" onClick={finishOrder(item.id)}>确认收到</Button>
                        </View>
                        </View>
                          ))
                        }
                      </View>
                    </View>
                )
              }
            </ScrollView>
          </SwiperItem>
          <SwiperItem className="GM_swiper_list_item">
            <ScrollView scroll-y>
            {
              !data.historyState ? (
                <View className="state_none">
                  <Image src="../../assets/GIF/order_bg.gif" className="order_bg" />
                  <Text className="desc">您还没有下单，来一杯吧~</Text>
                  <Button onClick={gotoOrder}>来一杯</Button>
                </View>
              ) : (
                <View className="state_hot">
                  <View className="bgc">
                    <View className="state_hot">
                      {
                        data.historyOrder.map((item: any, index) => (
                          <View 
                            className="order" 
                            key={index}
                            onClick={gotoDetail(item.id)}
                          >
                            <View className="order_hd">
                              <Image src="../../assets/icons/shop.png" />
                              <View className="shop">{item.shop}</View>
                              <View className="orderWay">{item.orderWay}</View>
                              <View className="fill"></View>
                              <View className="state">{item.state}</View>
                            </View>
                            <View className="time">{item.time}</View>
                            <View className="order_bd">
                            <View className="bd_pic">
                              {
                                  item.avatarUrl.length <= 3 ? (
                                    item.map((item, index) => (
                                      <Image className="orderPic" key={index}  src={item.avatarUrl.url} />
                                    ))
                                  ) : (
                                    item.map((item, index) => (
                                      <View key={index}>
                                        <Image className="orderPic" key={index}  src={item.avatarUrl.sub} />
                                        <Image src="https://static.gumingnc.com/guming-wechat/prod/files/images/ellipsis.png" className="ellipsis"></Image>
                                      </View>
                                    ))
                                  )
                                }
                            </View>
                            <View className="sum">
                              <View className="price">￥{item.sumPrice}</View>
                              <View className="num">共{item.orderNum}杯</View>
                            </View>
                        </View>
                        <View className="order_ft">
                          <button className="again" onClick={orderAgain}>再来一单</button>
                        </View>
                      </View>
                        ))
                      }
                    </View>
                  </View>
                </View>
              )
            }
            </ScrollView>
          </SwiperItem>
        </Swiper>
      </View>
    </View>
  );
}

export default Order;
