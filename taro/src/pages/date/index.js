import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
// import './index.styl'
import {  AtCalendar }  from 'taro-ui'

export default class Date extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { 
    // console.log(this.$router.params);
    
  }

  componentWillUnmount () { 
    clearTimeout(this.timer)
  }

  componentDidShow () { }

  componentDidHide () { }

  selectDate = (selectDate) => {
    const { value: {start, end} } = selectDate

    if(this.timer){
      clearTimeout(this.timer)
    }

    if(start && end){
      this.timer = setTimeout(() => {
        Taro.navigateTo({
          url:`../index/index?start=${start}&end=${end}`
        })
      }, 2000);
    }

  }

  
  dayClick = () => {
    // console.log('dayClick', val, this.timer)
  }

  render () {
    return (
      <View className='index'>
        <Text>选择时间</Text>
        <AtCalendar 
          onDayClick={this.dayClick}
          onSelectDate={this.selectDate}
          isMultiSelect
        /> 
      </View>
    )
  }
}

