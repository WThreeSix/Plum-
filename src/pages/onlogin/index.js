import React,{Component} from 'react'

import './style.scss'

class Onlogin extends Component {
    render(){
        return (
            <div className="bg">
               <img src="http://img.cdn.aplum.com/o_1c8k8taoq1e3943v1hha1han9iv.png" alt="" className="logo"/>
               <div className="loginin" onClick={login=>{
                            this.props.history.push("/login")
                        }}>立即登录</div>
            </div>
        )
    }
}

export default Onlogin