import React,{Component,Fragment} from 'react'
import { SearchBar } from 'antd-mobile';
import { Tabs, WhiteSpace } from 'antd-mobile';
import Marketing from './marketing/index';
import GateYory from './gateyory/index';
import Brand from './brand/index';
import Common from './common/index';
import Price from './price/index'
import './style.scss'

class TabExample  extends Component {
    constructor(props){
        super(props)
        this.state={
            tabs:[]

        }
    }
    render(){
        return (
            <Fragment>
            <SearchBar placeholder="搜索商品" maxLength={8} />
            <div style={{ height: "100%" }}>
                <Tabs tabs={this.state.tabs}
                    initalPage={'t2'}
                    tabBarPosition="left"
                    tabDirection="horizontal" 
                >
                    <div style={{ height: '100%', backgroundColor: '#fff' }}>
                        <Marketing />
                    </div>
                    <div style={{ height: '100%', backgroundColor: '#fff' }}>
                        <GateYory/>
                    </div>
                    <div style={{ height: '100%', backgroundColor: '#fff' }}>
                        <Brand/>
                    </div>
                    <div style={{ height: '100%', backgroundColor: '#fff' }}>
                        <Common/>
                    </div>
                    <div style={{ height: '100%', backgroundColor: '#fff' }}>
                        <Price/>
                    </div>
                </Tabs>
                <WhiteSpace />
          </div>
          </Fragment>
        )
    }
    componentDidMount(){
        fetch('/api/classData')
        .then(response=>response.json())
        .then(result=>{
            result.data.map((val)=>{
                this.setState({
                    tabs:[
                        ...this.state.tabs,
                        {"title":val.title}
                    ]    
                })
                
                return null
            })
        })
    }
}

export default TabExample 