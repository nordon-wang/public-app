import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.styl'

import Head  from '../../components/head/head'
// import DateCheck  from '../../components/head/date'
import { AtTabBar, AtButton }  from 'taro-ui'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      start: '2019-03-11',
      end: '2019-03-12'
    }
  }
 
  componentWillMount () { }

  componentDidMount () { 
    const {start, end} = this.$router.params

    this.setState({
      start,
      end
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { } 

  handleClick (value) {
    this.setState({
      current: value
    })
  }


  goToDate = () => {
    Taro.navigateTo({
      url:'../date/index'
    })
  }

  changeStart = () => {
    this.setState({
      start: 'satrt',
      end:'end'
    })
  }


  render () {
    const { start, end } = this.state
    return (
      <View className='index'>
        <Head />

        <AtButton type='primary' onClick={this.goToDate}>选择酒店</AtButton>
        <AtButton type='primary' onClick={this.changeStart}>{start}  -- {end}</AtButton>

        {/* 入住时间选择 */}
        <View className='select-date'>
          <View className='select-date-items'>
            <View className='select-date-items-top'>02月12日</View>
            <View className='select-date-items-btm'>周二入住</View>
          </View>

          <View className='select-date-items'>
            <Text className='select-date-items-center-top'>共1晚</Text>
          </View>

          <View className='select-date-items'>
            <Text className='select-date-items-top'>02月12日</Text>
            <Text className='select-date-items-btm'>周二离店</Text>
          </View>
        </View>


        <AtTabBar
          fixed
          tabList={[
            { title: '预定', text: 8 },
            { title: '我', dot: true }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}
