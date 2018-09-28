import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {NavLink,Route,Switch} from "react-router-dom"
import "../style.scss"
import { Tabs } from 'antd-mobile'
import BrandsGrid from './nav/bag/bag'
import Recommend from './nav/recommend/recommend'


const tabs = [
  { title: '推荐' },
  { title: '包袋' },
  { title: '配饰' },
  { title: '女装' },
  { title: '女鞋' },
  { title: '男士' }
];
class Nav extends Component {
  render(){    
    return (<div>
              <ul>
                  <li><NavLink to="/" exact activeClassName="active">推荐</NavLink></li>
                  <li><NavLink to="/bag" activeClassName="active">包装</NavLink></li>
                  <li><NavLink to="/decoration" activeClassName="active">配饰</NavLink></li>
              </ul>
              <Switch>
                  <Route path="/" exact component={ Comp1 } />
                  <Route path="/bag" component={ Comp2 } />
                  <Route path="/decoration" component={ Comp3 } />
              </Switch>  
          </div>)
  }
}


    
//   </div>
// );


export default Nav