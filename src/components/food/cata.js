import Taro, {Component} from '@tarojs/taro';
import {View, Text} from '@tarojs/components';
import './cata.less';

class Cata extends Component {
    constructor(){
        super(...arguments)
        this.state = {
            cata:[
                {
                    name:'专场',
                    id:'1'
                },
                {
                    name:'热销',
                    id:'2'
                },
                {
                    name:'折扣',
                    id:'3'
                },
                {
                    name:'主食',
                    id:'4'
                },
                {
                    name:'热炒',
                    id:'5'
                },
                {
                    name:'凉菜',
                    id:'6'
                },
                {
                    name:'乱炖',
                    id:'7'
                }
            ],
            selectCata:null 
        }
    }
    clickHandle(item){
        if(this.state.selectCata&&this.state.selectCata.id != item.id){
            this.setState({selectCata:item} => {
                this.props.onchangeCata&&this.props.onchangeCata(this.state.selectCata)
            })
            
        }else if(!this.state.selectCata){
            this.setState({selectCata:item} => {
                this.props.onchangeCata&&this.props.onchangeCata(this.state.selectCata)
            })
        }
    }
    render(){
        let {cata, selectCata} = this.state;
        return(
            <View className='cata'>
            {/* 进行循环 */}
              {cata.map((item,index) => {
                  return (
                  <Text key={item.id} className={('cata_name ' + ((selectCata&&selectCata.id == item.id)?'select':''))} onClick={this.clickHandle.bind(this,item)}>
                    {item.name}
                  </Text>)
              })}
            </View>
        )
    }
}

export default Cata;