import Taro, {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import { AtTabs,AtTabsPane} from 'taro-ui'

import Cata from './cata';
import FoodList from './foodList'

import './food.less'


class Food extends Component {
    constructor(){
        super(...arguments)
        this.state = {
            current:0,
            tabList:[{title:'点菜'},{title:'评价'},{title:'商家'}],
            foodList:[],
            currentList:[],
            selectCata:null 
        }
    }
    changeTab(value){
        this.setState({
            current:value
        })
    }
    changeCata(selectCata){
        this.setState({selectCata:selectCata})
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
        //模拟数据
        let count = Math.round(Math.random()*2);
        let imgUrl = `./${count}.jpg`;
        return Array.from(Array(Math.round(Math.random()*20)), (v,k) => ({
            img:imgUrl,
            pid:selectCata.id,
            id:selectCata.id+'_'+k,
            title:'分类'+selectCata.id+'菜品'+(k+1),
            sole:Math.round(Math.random()*50),
            price:Math.round(Math.random()*20)
        }))
    }
    render(){
        let {current,tabList,currentList} = this.state;
        return(
            <View>
                <AtTabs current={current} onClick={this.changeTab.bind(this)} tabList={tabList}>
                    <AtTabsPane>
                        <View className='food_body'>
                            <Cata onchangeCata={this.changeCata.bind(this)} />
                            <FoodList selectCata={this.state.selectCata} currentList={currentList} />
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