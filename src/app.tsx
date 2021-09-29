import React from 'react'
import { Provider } from 'mobx-react'

import counterStore from './store/counter'

import './app.less'

const store = {
  counterStore
}

function App () {
  return (
    <Provider store={store}>
      {this.props.children}
    </Provider>
  )
}

export default App
