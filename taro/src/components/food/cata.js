import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'


import './cata.styl'

class Cata extends Component {

  constructor(){
    super(...arguments)

    this.state = {
      
    }
  }

  render() {
    return (
      <View>
        Cata
        <AtButton>按钮文案</AtButton>
<AtButton type='primary'>按钮文案</AtButton>
<AtButton type='secondary'>按钮文案</AtButton>

      </View>
    )
  }
}

export default Cata