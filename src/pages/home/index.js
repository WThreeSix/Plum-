import React,{Component,Fragment} from 'react'
import Index from "../index"
import SearchContent from "../index/components/searchContent"
import {Switch,Route,withRouter} from 'react-router-dom'
import './style.scss'
import { TabBar } from 'antd-mobile';

import home from '../../assets/iconfont/home.png'
import homeActive from '../../assets/iconfont/homeActive.png'
import class1 from '../../assets/iconfont/class.png'
import classActive from '../../assets/iconfont/classActive.png'
import sell from '../../assets/iconfont/sell.png'
import sellActive from '../../assets/iconfont/sellActive.png'
import buycal from '../../assets/iconfont/buycal.png'
import buycalActive from '../../assets/iconfont/buycalActive.png'
import my from '../../assets/iconfont/my.png'
import myActive from '../../assets/iconfont/myActive.png'

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'homeTab',
          hidden: false,
          fullScreen: false,
        };
      }

      render() {
        return (
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={this.state.hidden}
            >
            
               <TabBar.Item
                icon={{ uri: home }}
                selectedIcon={{ uri: homeActive }}
                title="首页"
                key="1"
                selected={this.state.selectedTab === 'homeTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'homeTab',
                  });
                }}
                onClick={()=>{this.props.history.push("/")}}
               >
               <Index />
               <Switch>
                   <Route path="/" exact component={Index} />
                   <Route path="/search" exact component={SearchContent} />
               </Switch>
              </TabBar.Item>
               
              <TabBar.Item
                icon={{ uri: class1 }}
                selectedIcon={{ uri: classActive }}
                title="分类"
                key="2"
                selected={this.state.selectedTab === 'classTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'classTab',
                  });
                }}
              >
                {/* <ClassType/> */}
              </TabBar.Item>
              <TabBar.Item
                icon={{ uri: sell}}
                selectedIcon={{ uri: sellActive }}
                title="寄卖"
                key="3"
                selected={this.state.selectedTab === 'sellTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'sellTab',
                  });
                }}
              >
                {/* <Sell/> */}
              </TabBar.Item>
              <TabBar.Item
                icon={{ uri: buycal }}
                selectedIcon={{ uri: buycalActive }}
                title="购物袋"
                key="4"
                selected={this.state.selectedTab === 'buycarTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'buycarTab',
                  });
                }}
              >
               {/* <BuyCar/> */}
              </TabBar.Item>
              <TabBar.Item
                icon={{ uri: my }}
                selectedIcon={{ uri: myActive }}
                title="我的"
                key="5"
                selected={this.state.selectedTab === 'myTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'myTab',
                  });
                }}
              >
               {/* <My/> */}
              </TabBar.Item>
            </TabBar>
        );
      }
}
export default withRouter(Home)