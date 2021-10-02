import React, { useEffect, useState }  from 'react'
import { View, Button, Input } from '@tarojs/components'
import './index.less'

function Check(props: any) {
  const [data, setData] = useState([])
  const [focusKey, setFocusKey] = useState(1)


  const inputHandle = (value:any) => {
    console.log('asd',value)
    if (value.detail.value) {
      const tmp = data.concat(value.detail.value)
      setData(tmp)
    } else {
      const tmp = data.concat()
      tmp.pop();
      setData(tmp)
      setFocusKey(data.length - 1)
    }
  }

  useEffect(() => {
    // setFocusKey(data.length)
    console.log(111111)
    if (data.length === focusKey) {
      setFocusKey(data.length + 1)
    }
  }, [data.length])

  // console.log(data)
  console.log('focusKey', focusKey, data)
  return (
    <View className='check-wrapper'>
      <View className='check-box-default'>
        <Input maxlength={1} onInput={inputHandle} cursorSpacing={10} focus={focusKey === 1} value={data[0]} />
      </View>
      <View className='check-box-default'>
        <Input maxlength={1} onInput={inputHandle} cursorSpacing={10} focus={focusKey === 2} value={data[1]} />
      </View>
      <View className='check-box-default'>
        <Input maxlength={1} onInput={inputHandle} cursorSpacing={10} focus={focusKey === 3} value={data[2]} />
      </View>
      <View className='check-box-default'>
        <Input maxlength={1} onInput={inputHandle} cursorSpacing={10} focus={focusKey > 3} value={data[3]} />
      </View>
    </View>
  );
}

export default Check;
