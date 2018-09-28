import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import './style.scss'
import {connect} from 'react-redux'
const tabDispatch = dispatch=>{
    return {
      changetab:(payload)=>{
        dispatch({
          type:"CHANGETAB",
          payload
        })
      }
    }
  }
class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            phone:"",
            picode:"",
            duanxin:""
        }
    }
    render(){
        return (
            <div>
               <p className="message">输入手机号：<input type="text" onChange={this.changState.bind(this)}/></p>
               <p className="message">图片验证码：<input type="text" onChange={this.changState1.bind(this)}/></p>
               <p className="message">短信验证码：<input type="text" onChange={this.changState2.bind(this)}/></p>
               <p className="ok" onClick={this.changePage.bind(this)}>确定</p>
            </div>
        )
    }
    changePage(){
        this.props.history.push("/home/buycar");
        this.props.changetab("buycarTab");
        localStorage.setItem("duanxin",this.state.duanxin)
        localStorage.setItem("picode",this.state.picode)
        localStorage.setItem("phone",this.state.phone)
    }
    changState(e){
        this.setState({
            phone:e.target.value
        })
    }
    changState1(e){
        this.setState({
            picode:e.target.value
        })
    }
    changState2(e){
        this.setState({
            duanxin:e.target.value
        })
    }

}

export default withRouter(connect(null,tabDispatch)(Login))