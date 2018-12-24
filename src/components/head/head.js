import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import Top from './top';
import Activity from './activity';
import Food from '../food/food';        //食品区
import './head.less'
import Index from '../../pages/index';

class Head extends Component {
    constructor(){
        super(...arguments)
        this.state = {
            store:{
                title:'穿相聚',
                notice:'欢迎~',
                tags:['美味赞','主食','分量足']
            }
        }
    }
    render(){
        let {store} = this.state;
        return(
            <View className='head'>
                <Top />
                <Image className='back' src={require("../../assets/img/download_banner.png")} />

                <View className='store'>
                    <Image className='store_img' require={''} />
                    <View className='store_text'>
                        <Text>
                            {store.title}
                        </Text>
                        <Text>
                            {store.notice}
                        </Text>
                        <View>
                            {store.tags.map((item,index) => {
                                return (<Text key={index} className="tags_text"> { item } </Text>)
                            })}
                        </View>
                    </View>
                </View>

                <Activity />

            </View>

        )
    }
}

export default Head;