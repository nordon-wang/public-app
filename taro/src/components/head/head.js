import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import Top from './top'

import './head.styl'

class Head extends Component {

  constructor(){
    super(...arguments)

    this.state = {
      'store': {
        title:'OYO酒店',
        notice:'欢迎光临OYO酒店',
        tags:['房间干净','设置新','前台MM漂亮']
      }
    }
  }

  render() {
    let {store:{
      title,
      notice,
      tags
    }} = this.state
    return (
      <View className='head'>
        <Top />

        {/* 介绍 */}
        <View className='head-info'>

          <Image className='img' src={require('../../assets/img/guazi.png')} />

          <View className='head-info-r'>
            <View className='head-info-r-items'>
              {title}
            </View>

            <View className='head-info-r-items'>
              {notice}
            </View>
            
            <View className='head-info-r-items'>
              {
                tags.map((tag, index) => 
                  (<Text 
                    className='head-info-tags' 
                    key={index}>{tag}</Text>)
                  )
              }
            </View>

          </View>

        </View>

      </View>
    )
  }
}

export default Head