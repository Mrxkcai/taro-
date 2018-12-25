import Taro, {Component} from '@tarojs/taro';
import {View, Text, Image} from '@tarojs/components';
import {getFoodCount, setFoodCount} from '../../utils/common'
import './addcut.less'

class Addcut extends Component{
    constructor(){
        super(...arguments)
        this.state = {
            Num:0
        }
    }

    componentDidMount(){
        this.setState({Num:getFoodCount(this.props.food)})
    }
    cutFood(){
        if(this.props.food){
            if(this.state.Num > 1){
                setFoodCount(this.props.food, this.state.Num)
            }else{
                console.log('error')
            }
        }
    }
    addFood(){
        if(this.props.food){

        }
    }
    render(){
        return (
            <View className='addcut'>
                <Image onClick={this.cutFood.bind(this)} className='oprate_img' src={require('../../assets/img/cut.png')} />
                <Text className='food_num'>{this.state.Num}</Text>
                <Image onClick={this.addFood.bind(this)} className='oprate_img' src={require('../../assets/img/add.png')} />
            </View>
        )
    }
}

export default Addcut