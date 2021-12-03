import React,{ useState } from 'react';
import { View, Image, Button, Text, Progress } from '@tarojs/components'
import './index.less';

function My() {
  const [userInfo, setUserInfo] = useState({
    isLogged: false,
    userName: '',
    userImg: '',
    userId:'',
    progress: 0,
    VIP: 0,
    cardsNum:0
  })

  const getUserInfo = () => {
    setUserInfo(Object.assign({}, userInfo, {isLogged: true}));
  };

  const getUserId = () => {console.log('getUserId')};

  return (
    <View className='page'>
      <View className="goodme_hd">
        <Image src="//img-1301192312.cos.ap-shanghai.myqcloud.com/my_bg.png"></Image>
      </View>
      <View className="container">
        <View className="con_border">
          <View className="userinfo">
            { userInfo.isLogged ? (
              <View className="user_mes">
                <Image className="userinfo-avatar" src={userInfo.userImg} mode="widthFix" lazy-load="false"/>
                <Text className="userinfo-nickname">{userInfo.userName}</Text>
              </View>
            ) : (<Button openType="getUserInfo" onClick={getUserInfo}>点击登录</Button>)}
          </View>
          <View className="con_funcs">
            <View className="func">
              <View className="func_name">
                <Image src="../../assets/icons/VIP.png" />
              <View className="title">茗星会员</View>
            </View>
              <View className="desc">
                <view className="title">当前等级<text className="data">V{userInfo.VIP}</text></view>
              </View>
            </View>
            <View className="func">
              <View className="func_name">
                <Image src="../../assets/icons/card.png" />
                <View className="title">我的卡券</View>
              </View>
              <View className="desc">
                <View className="title">还有<Text className="data">{userInfo.cardsNum}</Text>张
                </View>
              </View>
            </View>
        </View>
      </View>
      <View className="activities">
        <View className="activitie">
          <View className="title">集十赠一</View>
          <View className="desc">正价饮品才能集十赠一</View>
        </View>
        <View className="progress">
          <Progress percent={userInfo.progress*10} pivot-text={userInfo.progress*10} color="#f8c024" stroke-width="8" />
        </View>
      </View>
    </View>
  </View>
  );
}

export default My;
