import { createApp } from 'vue'
import { DatePicker, Picker, Popup, OverLay } from '@nutui/nutui-taro';

import './app.less'

const App = createApp({
  onShow (options) {
    console.log(options)
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(OverLay).use(Popup).use(Picker).use(DatePicker)

export default App
