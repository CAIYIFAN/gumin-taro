import React  from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import VerificationCode from '../../components/VerificationCode'
import './index.less'
import A from 'src/components/a'
import HocComponent from 'src/components/hoc-component'

type PageStateProps = {
  store: {
    counterStore: {
      counter: number,
      increment: Function,
      decrement: Function,
      incrementAsync: Function
    }
  }
}

function Index (props: PageStateProps, ref) {
  const increment = () => {
    const { counterStore } = props.store
    counterStore.increment()
  }

  const decrement = () => {
    const { counterStore } = props.store
    counterStore.decrement()
  }

  const incrementAsync = () => {
    const { counterStore } = props.store
    counterStore.incrementAsync()
  }

  const { counterStore: { counter } } = props.store

  return (
    <View className='index'>
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
        <Button onClick={incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
        <VerificationCode onFinished={(data) => {console.log(data)}}/>
        {HocComponent(A)}
    </View>
  )
}

export default inject('store')(observer(React.forwardRef(Index)))
