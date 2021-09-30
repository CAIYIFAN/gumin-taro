import React from 'react'
import { Provider } from 'mobx-react'

import counterStore from './store/counter'

import './app.less'

const store = {
  counterStore
}

function App (props) {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}

export default App
