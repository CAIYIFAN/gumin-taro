import React, { useEffect, useState }  from 'react'
import { View, Input } from '@tarojs/components'
import classNames from 'classnames'
import './index.less'

interface CheckProps {
  inputClassNames?: string; // input框样式
  onFinished?: Function; // 完成事件
  count?: number; // 验证码数量
}

function Check({inputClassNames, onFinished, count = 4}:CheckProps) {
  const [data, setData] = useState([])
  const [focusKey, setFocusKey] = useState(1)

  const inputHandle = (value:any) => {
    const tmp = data.concat()
    if (value.detail.value) {
      if (data.length === count) return
      const tmp = data.concat(value.detail.value)
      setData(tmp)
    } else {
      tmp.pop();
      setData(tmp)
      const key = data.length === 1 ? data.length : data.length - 1
      setFocusKey(key)
    }
  }

  const defaultProps = {
    maxlength: 1,
    onInput: inputHandle,
    cursorSpacing: 10,
    type: 'number'
  }

  const getProps = (num) => {
    const result: any = []
    for(let i = 0; i < num; i++) {
      result.push({
        key: `validate${i}`,
        focus: focusKey ===  (i+1),
        value: data[i],
        disabled: (i + 2 ) > num ? false : focusKey > (i+2),
        ...defaultProps,
      })
    }
    return result
  }

  useEffect(() => {
    if (data.length === focusKey) {
      setFocusKey(data.length + 1)
    }
    if (data.length === count) {
      onFinished && onFinished(data)
    }
  }, [data.length])

  // console.log(data)
  // console.log('focusKey', focusKey, data)
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

export default Check;
