import React, { useEffect, useState }  from 'react'
import { View, Button, Input } from '@tarojs/components'
import './index.less'

function Check(props: any) {
  const [data, setData] = useState([])
  const [focusKey, setFocusKey] = useState(0)


  const inputHandle = (value:any) => {
    console.log(value.detail)
    const { keyCode} = value.detail
    if (keyCode && keyCode === 8) {
      const tmp = data.concat()
      tmp.pop();
      setData(tmp)
    }
    if (value.detail.value) {
      const tmp = data.concat(value.detail.value)
      setData(tmp)
    }
  }

  useEffect(() => {
    setFocusKey(data.length)
  }, [data.length])

  console.log(data)
  return (
    <View className='check-wrapper'>
      <View className='check-box-default'>
        <Input maxlength={1} onInput={inputHandle} cursorSpacing={10} focus={focusKey === 0}/>
      </View>
      <View className='check-box-default'>
        <Input maxlength={1} onInput={inputHandle} cursorSpacing={10} focus={focusKey === 1}/>
      </View>
      <View className='check-box-default'>
        <Input maxlength={1} onInput={inputHandle} cursorSpacing={10} focus={focusKey === 2}/>
      </View>
      <View className='check-box-default'>
        <Input maxlength={1} onInput={inputHandle} cursorSpacing={10} focus={focusKey === 3}/>
      </View>
    </View>
  );
}

export default Check;
