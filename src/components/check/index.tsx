import React, { useEffect, useState }  from 'react'
import { View, Input } from '@tarojs/components'
import './index.less'

function Check(props: any) {
  const [data, setData] = useState([])
  const [focusKey, setFocusKey] = useState(1)

  const inputHandle = (value:any) => {
    const tmp = data.concat()
    if (value.detail.value) {
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
  }

  const getProps = (num) => {
    const result: any = []
    for(let i = 0; i < num; i++) {
      result.push({
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
  }, [data.length])

  // console.log(data)
  console.log('focusKey', focusKey, data)
  return (
    <View className='check-wrapper'>
      {getProps(4).map((item, index) => (
        <View className='check-box-default'>
          <Input key={index} {...item} />
        </View>
      ))}
    </View>
  );
}

export default Check;
