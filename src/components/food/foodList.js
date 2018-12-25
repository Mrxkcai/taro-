import Taro, { Component } from '@tarojs/taro';
import {View, Text, Image} from '@tarojs/components';
import './foodList.less'
import Addcut from '../addcut/addcut'

class  FoodList extends Component {
    constructor(){
        super(...arguments)
        this.state = {}
    }
    render(){
        let {selectCata, currentList} = this.props;
        return(
            <View className='foodList'>
                <Text>{selectCata&&selectCata.name}</Text>
                <View className='foodList_forlist'>
                    {
                        currentList.map((item,index) => {
                            return(
                                <View className='foodlist_item' key={index}>
                                    <Image className='foodlist_item_img' src={item.img == 2?require('../../assets/img/download_banner.png'):require('../../assets/img/download_banner.png')} />
                                        
                                    <View className='foodlist_item_info'>
                                        <Text>{item.title}</Text>
                                        <Text>月售:{item.sole}</Text>
                                        <Text>价格:{item.price}</Text>
                                        <Addcut food={item} />
                                    </View>


                                   
                                </View>
                            )
                        })
                    }
                </View>
            </View> 
        )
    }
}

export default FoodList;