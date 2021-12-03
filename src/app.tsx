import { View } from "@tarojs/components";
import React from "react";

import "./app.less";


function App (props) {
  return (
      <View>
        {props.children}
      </View>
  )
}

export default App;
