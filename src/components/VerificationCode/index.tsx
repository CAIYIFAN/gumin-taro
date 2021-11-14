import React, { useEffect, useState }  from 'react'
import { View, Input } from '@tarojs/components'
import classNames from 'classnames'
import './index.less'

interface VerificationCodeProps {
  inputClassNames?: string; // input框样式
  onFinished?: Function; // 完成事件
  onEmpty?: Function; // 为空时的事件
  count?: number; // 验证码数量
}

function VerificationCode({inputClassNames, onFinished, onEmpty, count = 4}:VerificationCodeProps) {
  const [data, setData] = useState([])  // 用以存储验证码
  const [focusKey, setFocusKey] = useState(1) // 初始focus值

  const inputHandle = (optionKey: number) => (value:any) => {
    const tmp = data.concat() // 不变数据流思想
    if (value.detail.value) {
      if (data.length === count) return  // 当验证码输满则不存储
      const tmp = data.concat(value.detail.value)
      setData(tmp)
    } else {
      // 删除逻辑
      tmp.splice(optionKey, 1)
      setData(tmp)
      const key = data.length === 1 ? data.length : data.length - 1
      setFocusKey(key)
    }
  }

  // 清空验证码
  const cleanCode = () => {
    setData([])
    setFocusKey(1)
  }

  // 输入框的默认属性
  const defaultProps = {
    maxlength: 1,
    cursorSpacing: 10,
    type: 'number'
  }

  // 为每一个输入框制造属性
  const getProps = (num) => {
    const result: any = []
    for(let i = 0; i < num; i++) {
      result.push({
        key: `validate${i}`,
        focus: focusKey ===  (i+1),
        value: data[i],
        onInput: inputHandle(i),
        // disabled: (i + 2 ) > num ? false : focusKey > (i+2),  // 控制输入模式
        ...defaultProps,
      })
    }
    return result
  }

  useEffect(() => {
    // 当验证码为空时触发的事件
    data.length === 0 && onEmpty && onEmpty();
    // 当data更新则更新focusKey
    data.length === focusKey && setFocusKey(data.length + 1)
    // 当验证码输满时触发onFinished事件
    data.length === count &&  onFinished && onFinished(data, cleanCode)
  }, [data.length])
  
  console.log(1111);
  
  return (
    <View className='check-wrapper'>
      {getProps(count).map((item) => (
        <View key={item.key} className={classNames('check-box-default', inputClassNames)}>
          <Input {...item} />
        </View>
      ))}
    </View>
  );
}

export default VerificationCode;
