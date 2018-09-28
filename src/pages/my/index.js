import React,{Component,Fragment} from 'react'
import {withRouter} from 'react-router-dom'
import './style.scss'

class My extends Component {
    constructor(props){
        super(props)
        this.state={
            buyBar:[],
            seller:[],
            server:[]
        }
    }
    render(){
        return (
            <Fragment>
            <div className="heand-f"> 
                <div className="heand-p">
                    <div className="one">
                        <img src="http://img.cdn.aplum.com/o_1c918a3491fur1v29pph1bcp8msm.png" alt="head portrait" className="imgs"/>
                        <ul className="dats"><li className="name" onClick={login=>{
                            this.props.history.push("/login")
                        }}>请点击登陆</li> <li className="edit">登陆后可查看账户信息</li></ul>
                    </div>
                    <div className="two">
                        <div className="icon"></div> 
                        <div className="tip">开通黑卡预计可节省<span className="gold">¥963</span>></div>
                    </div>
                </div>
            </div>
            <div className="sectionincome">
                <span className="name">我的收入</span>
                <span className="tips">点击查看></span>
            </div>
            <div className="sectionbuyer">
                <header data-href="/order/index" className="header">
                    <span className="name">我是买家</span>
                </header>
                <ul className="list">
                    {this.state.buyBar.map((val,index)=>{
                        return (<li className="item" key={index}>
                            <div><img src={val.img} alt="" className="iconBuy"/></div>
                            <p className="title">{val.name}</p>
                        </li>)
                    })}
                </ul>
            </div>
            <div className="sectionbuyer">
                <header data-href="/order/index" className="header">
                    <span className="name">我是卖家</span>
                </header>
                <ul className="list">
                    {this.state.seller.map((val,index)=>{
                        return (<li className="item" key={index}>
                            <div><img src={val.img} alt="" className="iconBuy"/></div>
                            <p className="title">{val.name}</p>
                        </li>)
                    })}
                </ul>
            </div>
            <div className="sectionserver">
                <header data-href="/order/index" className="header">
                    <span className="name">我的服务</span>
                </header>
                <ul className="list">
                    {this.state.server.map((val,index)=>{
                        return (<li className="item" key={index}>
                            <div><img src={val.img} alt="" className="iconBuy"/></div>
                            <p className="title">{val.name}</p>
                        </li>)
                    })}
                </ul>
            </div>
            </Fragment>
        )
    };
    componentDidMount(){
        fetch('/api/my')
        .then(response=>response.json())
        .then(result=>{
            this.setState({
                buyBar:result.buyer.items,
                seller:result.seller.items,
                server:result.service.items
            })
        })
    }
}

export default withRouter(My)