import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'

import './food.styl'

class Food extends Component {

  constructor(){
    super(...arguments)

    this.state = {
      
    }
  }

  render() {
    return (
      <View>
        <AtTabs>

        </AtTabs>
      </View>
    )
  }
}

export default Food