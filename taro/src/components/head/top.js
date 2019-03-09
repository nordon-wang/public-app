import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import './top.styl'

class Top extends Component {

  render() {
    return (
      <View className="head-top">

        {/* left */}
        <View className='head-top-l'>
          <Image className='top-img' src={require('../../assets/img/beizidangao.png')} /> 
        </View>

        {/* right */}
        <View className='head-top-r'>
          <Image className='top-img' src={require('../../assets/img/beizidangao.png')} /> 
          <Image className='top-img' src={require('../../assets/img/beizidangao.png')} /> 
          <Image className='top-img' src={require('../../assets/img/beizidangao.png')} /> 
        </View>
        
      </View>
    )
  }
}

export default Top