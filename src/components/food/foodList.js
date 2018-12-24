import Taro, { Component } from '@tarojs/taro';
import {View, Text, Image} from '@tarojs/components';

class  FoodList extends Component {
    constructor(){
        super(...arguments)
        this.state = {}
    }
    render(){
        return(
            <View className='foodLists'>foodLists</View>
        )
    }
}

export default FoodList;