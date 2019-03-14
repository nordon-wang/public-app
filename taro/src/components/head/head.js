import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'


import './head.styl'

class Head extends Component {

  constructor(){
    super(...arguments)

    this.state = {
      store: {
        title:'O酒店',
        notice:'欢迎光临O酒店',
        tags:['房间干净','设置新','前台MM漂亮']
      }
    }
  }

  render() {
    let {
        store:{
          title,
          notice,
          tags
        }
      } = this.state
    return (
      <View className='head'>
        <Image className='menu-header' src={require('../../assets/image/menu-header.jpg')} />
        <View className='head-position'>
          <Text className='head-position-items head-position-title'>{title}</Text>
          <Text className='head-position-items head-position-notice'>{notice}</Text>
          <View className='head-position-tags'>
            {
              tags.map((tag, index) => (
                <Text className='head-position-tags-items' key={index}>
                  {tag}
                </Text>
              ))
            }
          </View>
        </View>
      </View>
    )
  }
}

export default Head