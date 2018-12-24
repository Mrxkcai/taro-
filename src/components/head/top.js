import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './top.less'

class Top extends Component {
    render(){
        return(
            <View className='top'>
                <View className='left'>
                    <Image className='img' src={require('../../assets/img/arrow.png')} />
                </View>

                <View className='right'>
                    <Image className='img' src={require('../../assets/img/jing.png')} />
                    <Image className='img' src={require('../../assets/img/star.png')} />
                    <Image className='img' src={require('../../assets/img/people.png')} />
                    <Image className='img' src={require('../../assets/img/dian.png')} />
                </View>
            </View>
        )
    }
}

export default Top;