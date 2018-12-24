import Taro, {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import { AtTabs,AtTabsPane} from 'taro-ui'

import Cata from './cata';
import FoodList from './foodList'

import './food.less'
import { func } from '../../../node_modules/_@types_react@16.7.17@@types/react/node_modules/@types/prop-types';

class Food extends Component {
    constructor(){
        super(...arguments)
        this.state = {
            current:0,
            tabList:[{title:'点菜'},{title:'评价'},{title:'商家'}],
            foodList:[],
            currentList:[]
        }
    }
    changeTab(value){
        this.setState({
            current:value
        })
    }
    changeCata(selectCata){
        if(this.state.foodList.some(item => item.pid == selectCata.id)){
            //you
            this.setState({
                currentList:this.state.foodList.filter(item => item.pid == selectCata.id)
            })
        }else{
            //xuyao
            this.setState({
                foodList:this.state.foodList.concat(this.getData(selectCata))
            },function(){
                this.setState({
                    currentList:this.state.foodList.filter(item => item.pid == selectCata.id)
                })
            });
        }
    }
    getData(selectCata){
        // Array.from(Array(Math.round(Math.random()*20)), (v,k) => ({}))
        return []
    }
    render(){
        let {current,tabList,currentList} = this.state;
        return(
            <View>
                <AtTabs current={current} onClick={this.changeTab.bind(this)} tabList={tabList}>
                    <AtTabsPane>
                        <View className='food_body'>
                            <Cata onchangeCata={this.changeCata.bind(this)} />
                            <FoodList currentList={currentList} />
                        </View>
                    </AtTabsPane>
                    <AtTabsPane>
                        评价
                    </AtTabsPane>
                    <AtTabsPane>
                        商家
                    </AtTabsPane>
                </AtTabs>

                
            </View>
        )
    }
}

export default Food;