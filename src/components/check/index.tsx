import React, { useEffect, useState }  from 'react'
import { View, Button, Input } from '@tarojs/components'
import './index.less'

function Check(props: any) {
  const [data, setData] = useState([])
  const [focusKey, setFocusKey] = useState(0)


  const inputHandle = (value:any) => {
    if (value.detail.value) {
      const tmp = data.concat(value.detail.value)
      setData(tmp)
    }
    //  else {
    //   const tmp = data.concat()
    //   tmp.pop();
    //   setData(tmp)
    // }
  }

  const keyHandle = function (e) {
    console.log(e)
    var keyNum=window.event ? e.keyCode :e.which;
    if (keyNum === 46) {
      const tmp = data.concat()
      tmp.pop();
      setData(tmp)
    }
  }
  
  useEffect(() => {
    document.addEventListener('keydown', keyHandle)
    return () => {
      document.removeEventListener('keydown', keyHandle)
    }
  }, [])

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
