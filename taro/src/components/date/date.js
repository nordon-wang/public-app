import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCalendar } from "taro-ui"


import './head.styl'

class DateCheck extends Component {

  constructor(){
    super(...arguments)

    this.state = {
    }
  }

  render() {
    return (
      <View className='date'>
        <AtCalendar />
      </View>
    )
  }
}

export default DateCheck